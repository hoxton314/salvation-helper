export const splitText = (text) => {
  const parts = text.split("#")
  if (parts.length === 2) {
    return {
      before: parts[0],
      after: parts[1],
    }
  } else {
    return null
  }
}

export const getActiveCharacter = (characters) => {
  let last_played = null
  let active_character = null

  if (!characters) return null

  for (const character of Object.values(characters)) {
    if (!last_played || character["dateLastPlayed"] > last_played) {
      last_played = character["dateLastPlayed"]
      active_character = character
    }
  }
  return active_character
}

export const getClass = (classID) => {
  switch (classID) {
    case 0:
      return "Titan"
    case 1:
      return "Hunter"
    default:
      return "Warlock"
  }
}

export const getClassColor = (classID) => {
  if (classID === 0) return "#f53543"
  if (classID === 1) return "#006da6"
  return "#f9ad00"
}
