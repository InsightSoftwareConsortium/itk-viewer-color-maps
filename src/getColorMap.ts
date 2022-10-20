import CategoricalColors, { CategoricalColor } from './CategoricalColors.js'
import ColorMaps from './ColorMaps.js'

const pickColorFromCategorical = (
  name: string,
  { IndexedColors }: CategoricalColor,
  categoricalOffset: number
) => {
  const colorIndex = categoricalOffset % (IndexedColors.length / 3)
  const rgbStart = 3 * colorIndex
  const indexedColor = IndexedColors.slice(rgbStart, rgbStart + 3)
  return {
    ColorSpace: 'RGB',
    Name: `Bk-${name}-${colorIndex}`,
    NanColor: [1, 1, 0],
    RGBPoints: [0, 0, 0, 0, 1, ...indexedColor],
  }
}

export const getColorMap = (name: string, categoricalOffset: number) => {
  if (ColorMaps.has(name)) {
    return ColorMaps.get(name)
  }

  const catColor = CategoricalColors.get(name)
  if (catColor) {
    return pickColorFromCategorical(name, catColor, categoricalOffset)
  }

  throw new Error(`Color map ${name} requested is not available`)
}
