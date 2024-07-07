import { FC, useEffect, useState } from "react"
import {
  Container,
  FireteamContainer,
  SearchContainer,
  SearchInput,
} from "./SquadViewer.styles"
import {
  getDestinyInventory,
  getUserProfile,
  searchBungieUser,
} from "./apiRequests"
import { Button } from "../../styles/generic.styles"
import { GuardianPreview } from "./GuardianPreview"

export const SquadViewer: FC = () => {
  const [bungieName, setBungieName] = useState(
    localStorage.getItem("bungieName") !== null
      ? localStorage.getItem("bungieName")
      : "",
  )
  const [isLoadingBungieName, setIsLoadingBungieName] = useState(false)
  const [userSelected, setUserSelected] = useState(null)
  const [destinyInventory, setDestinyInventory] = useState(null)
  const [squad, setSquad] = useState(null)

  const reset = () => {
    setSquad(null)
    setUserSelected(null)
    handleUserSearch(bungieName)
  }

  const handleUserSearch = async (name) => {
    if (!name || !name?.length) return

    const { data, status } = await searchBungieUser(name)

    if (data.Response[0]) {
      localStorage.setItem("bungieName", name)
      setIsLoadingBungieName(true)
      const profile = await getUserProfile(data.Response[0].membershipId)
      console.log(profile)
      const tmpSquad = []

      const partyMembers = profile?.profileTransitoryData?.data?.partyMembers

      if (profile && partyMembers?.length) {
        const promises = partyMembers?.map((member) =>
          getUserProfile(member.membershipId),
        )
        const results = await Promise.all(promises)

        results.forEach((squadUserProfile) => {
          if (squadUserProfile) tmpSquad.push(squadUserProfile)
        })

        setUserSelected(profile)
        setSquad(tmpSquad)
      }
      setIsLoadingBungieName(false)
    } else if (status !== 200) {
      setIsLoadingBungieName(false)
    }
  }

  const retrieveDestinyInventory = async () => {
    const { data } = await getDestinyInventory()
    setDestinyInventory(data)
  }

  useEffect(() => {
    handleUserSearch(bungieName)
  }, [bungieName])

  useEffect(() => {
    retrieveDestinyInventory()
  }, [])

  return (
    <Container>
      <h1>Squad Viewer</h1>

      <SearchContainer>
        <SearchInput
          value={bungieName}
          onChange={(event) => setBungieName(event.target.value)}
          placeholder={"Saltagreppo#1234"}
        />

        {userSelected && squad && <Button onClick={reset}>Refresh</Button>}
      </SearchContainer>

      {isLoadingBungieName ? (
        <div>loading...</div>
      ) : (
        <FireteamContainer>
          {userSelected &&
            destinyInventory &&
            !isLoadingBungieName &&
            squad &&
            squad.map((item, v) => (
              <GuardianPreview
                key={"guardian" + v}
                user={item}
                equipments={item.characterEquipment.data}
                inventory={destinyInventory}
              />
            ))}
        </FireteamContainer>
      )}
    </Container>
  )
}
