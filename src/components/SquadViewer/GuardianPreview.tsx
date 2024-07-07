import { FC } from "react"
import {
  GuardianBanner,
  GuardianClassIcon,
  GuardianContainer,
  GuardianName,
  ItemIcon,
} from "./SquadViewer.styles"
import { getActiveCharacter, getClass } from "./methods"
import { ClassIcon } from "../ClassIcon"

interface GuardianPreviewProps {
  user: any
  equipments: any
  inventory: any
}

export const GuardianPreview: FC<GuardianPreviewProps> = ({
  user,
  equipments,
  inventory,
}) => {
  const activeCharacter = getActiveCharacter(user.characters.data)
  const activeEquiments = equipments[activeCharacter.characterId]?.items

  if (!activeCharacter || !activeEquiments) return null

  const items = activeEquiments.map((item) =>
    item.overrideStyleItemHash
      ? inventory[item.overrideStyleItemHash]
      : inventory[item.itemHash],
  )

  const emblem_path = activeCharacter?.emblemBackgroundPath

  return (
    <GuardianContainer $classId={activeCharacter.classType}>
      <GuardianBanner
        $emblem_path={"https://www.bungie.net" + emblem_path}
      ></GuardianBanner>
      <GuardianName>
        <h2>{user.profile.data.userInfo.bungieGlobalDisplayName}</h2>
        <h3>{getClass(activeCharacter.classType)}</h3>
      </GuardianName>
      <GuardianClassIcon $classId={activeCharacter.classType}>
        <ClassIcon classType={activeCharacter.classType} />
      </GuardianClassIcon>

      {items
        .filter((a, index) => [3, 4, 5, 6, 7, 8].includes(index))
        .map((item, index) => (
          <ItemIcon
            key={"item" + index}
            alt="item"
            src={"https://www.bungie.net" + item?.displayProperties?.icon}
            width="100%"
            height="100%"
          />
        ))}
    </GuardianContainer>
  )
}
