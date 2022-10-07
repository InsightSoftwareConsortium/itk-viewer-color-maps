import path from 'path'
import fs from 'fs'

import ColorMapNames from '../dist/ColorMapNames.js'

const vtkColorMapsJson = fs.readFileSync('./src/color-map-data/vtkColorMaps.json')
const vtkColorMaps = JSON.parse(vtkColorMapsJson)

const MedicalColorsJson = fs.readFileSync('./src/color-map-data/MedicalColorPresets.json')
const MedicalColors = JSON.parse(MedicalColorsJson)

const allColorMaps = vtkColorMaps.concat(MedicalColors)
//console.log(allColorMaps)

const colorMapsObject = {}

let colorMapsModule = `const ColorMaps = new Map<string, Record<string, string | number[]>>()

`

ColorMapNames.forEach((name) => {
  const match = allColorMaps.filter((cmap) => cmap.Name === name)
  if (match.length < 1) {
    throw new Error(`Could not find ${name}`)
  }
  const cmap = match[0]
  if (cmap.AbsoluteRange) {
    let min = Infinity
    let max = -Infinity
    for (let ii = 0; ii < cmap.RGBPoints.length / 4; ii++) {
      min = Math.min(min, cmap.RGBPoints[ii*4])
      max = Math.max(max, cmap.RGBPoints[ii*4])
    }
    for (let ii = 0; ii < cmap.RGBPoints.length / 4; ii++) {
      cmap.RGBPoints[ii*4] = (cmap.RGBPoints[ii*4]-min)/(max-min)
    }
    delete cmap.AbsoluteRange
    delete cmap.EffectiveRange
    delete cmap.OpacityPoints
  }

  colorMapsObject[name] = cmap
  colorMapsModule += `ColorMaps.set('${name}',
  ${JSON.stringify(cmap)}
)\n\n`
})

colorMapsModule += `\nexport default ColorMaps\n`

fs.writeFileSync('./src/ColorMaps.ts', colorMapsModule)
fs.writeFileSync('./src/ColorMaps.json', JSON.stringify(colorMapsObject))