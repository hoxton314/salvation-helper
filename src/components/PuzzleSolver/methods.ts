export const getShapeState = (
  shape: "s" | "c" | "t",
  col: number,
  layout: string,
) => {
  if (layout[col - 1] === shape) {
    return "active"
  }
  if (layout[col - 1] !== shape && layout[col - 1] !== undefined) {
    return "disabled"
  }

  if (layout[col - 2] === shape) {
    return "disabled"
  }

  return "default"
}
