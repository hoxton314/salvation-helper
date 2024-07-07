import axios from "axios"
import { splitText } from "./methods"

const apiKey = "ebab377033064ed6a4e081aec532d34d"

export const getUserProfile = async (membershipId) => {
  try {
    const preRes = await axios.get(
      `https://www.bungie.net/Platform/Destiny2/-1/Profile/${membershipId}/LinkedProfiles/?getAllMemberships=true`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      },
    )

    if (!preRes || !preRes.data) return null
    const res = await axios.get(
      `https://www.bungie.net/Platform/Destiny2/${preRes.data.Response.profiles[0].membershipType}/Profile/${membershipId}/?components=100%2C200%2C1000%2C205`,
      {
        headers: {
          "X-API-Key": apiKey,
        },
      },
    )
    return res.data.Response
  } catch (e) {
    return null
  }
}

export const searchBungieUser = async (pseudo) => {
  try {
    const splitPseudo = splitText(pseudo)

    if (!splitPseudo) return null

    const res = await axios.post(
      "https://www.bungie.net/Platform/Destiny2/SearchDestinyPlayerByBungieName/-1/",
      {
        displayName: splitPseudo.before,
        displayNameCode: splitPseudo.after,
      },
      {
        headers: {
          "X-API-Key": apiKey,
        },
      },
    )

    return res
  } catch (e) {
    console.error(e)
  }
}

export const getDestinyInventory = async () => {
  try {
    const resManifest = await axios.get(
      "https://www.bungie.net/Platform/Destiny2/Manifest/",
      {
        headers: {
          "X-API-Key": apiKey,
        },
      },
    )
    const res = await axios.get(
      "https://www.bungie.net" +
        resManifest.data.Response.jsonWorldComponentContentPaths.en
          .DestinyInventoryItemDefinition,
    )

    return res
  } catch (e) {
    console.error(e)
    getDestinyInventory()
  }
}
