import vtkColorTransferFunction from 'vtk.js/Sources/Rendering/Core/ColorTransferFunction'
import vtkLookupTable from 'vtk.js/Sources/Common/Core/LookupTable';
import vtkColorMaps from '../color-map-data/vtkColorMaps.json'
import MedicalColorMaps from '../color-map-data/MedicalColorPresets.json'
import ColorMaps from 'vtk.js/Sources/Rendering/Core/ColorTransferFunction/ColorMaps'
import ColorMapNames from '../../dist/ColorMapNames.js'

import CategoricalColors from '../../dist/CategoricalColors.js'
import CategoricalColorNames from '../../dist/CategoricalColorNames.js'

//const colorMaps = vtkColorMaps
  //.filter((p) => p.RGBPoints)
  //.filter((p) => p.ColorSpace !== 'CIELAB')

MedicalColorMaps.forEach((cmap) => {
  ColorMaps.addPreset(cmap)
})

const body = document.getElementsByTagName('body')[0]

const canvas = document.createElement('canvas')
const width = 60
const height = 5
canvas.setAttribute('width', width);
canvas.setAttribute('height', height);
body.appendChild(canvas)

const colorTransferFunction = vtkColorTransferFunction.newInstance()

const table = document.createElement('table')
const tableBody = document.createElement('tbody')

let moduleContent = `const ColorMapIcons = new Map<string, string>()

`

const medicalColorNames = MedicalColorMaps.map((cmap) => cmap.Name)

//ColorMapNames.concat(medicalColorNames).forEach((presetName) => {
ColorMapNames.forEach((presetName) => {
  const preset = ColorMaps.getPresetByName(presetName)

  let range = [0.0, 1.0]
  if (preset.AbsoluteRange) {
    const min = Math.min(...preset.RGBPoints)
    const max = Math.max(...preset.RGBPoints)
    range = [min, max]
  }

  colorTransferFunction.setMappingRange(range[0], range[1])
  colorTransferFunction.applyColorMap(preset)
  const rgba = colorTransferFunction.getUint8Table(
    range[0],
    range[1],
    width,
    4,
  );

  const ctx = canvas.getContext('2d');
  const pixelsArea = ctx.getImageData(0, 0, width, 256);
  for (let lineIdx = 0; lineIdx < 256; lineIdx++) {
    pixelsArea.data.set(rgba, lineIdx * 4 * width);
  }

  const nbValues = 256 * width * 4;
  const lineSize = width * 4;
  for (let i = 3; i < nbValues; i += 4) {
    pixelsArea.data[i] = 255 - Math.floor(i / lineSize);
  }

  ctx.putImageData(pixelsArea, 0, 0);

  const image = new Image()
  image.src = canvas.toDataURL("image/png")

  const row = document.createElement('tr')

  const colImage = document.createElement('td')
  colImage.appendChild(image)
  row.appendChild(colImage)

  const colText = document.createElement('td')
  const text = document.createTextNode(presetName)
  colText.appendChild(text)
  row.appendChild(colText)

  tableBody.appendChild(row)

  moduleContent += `
ColorMapIcons.set('${presetName}', '${image.src}');
`

})

moduleContent += `
export default ColorMapIcons
`

table.appendChild(tableBody)
body.appendChild(table)
const label = document.createElement('label')
label.innerHTML = "ColorMapIcons.ts: <br>"
body.appendChild(label)
const colorPresetIconsModule = document.createElement('textarea')
colorPresetIconsModule.setAttribute('rows', '350')
colorPresetIconsModule.setAttribute('cols', '100')
colorPresetIconsModule.value = moduleContent
body.appendChild(colorPresetIconsModule)


const categoricalColors = 12
const lookupTable = vtkLookupTable.newInstance()

const lutTable = document.createElement('table')
const lutTableBody = document.createElement('tbody')

let lutModuleContent = `const CategoricalColorIcons = new Map<string, string>()

`

CategoricalColorNames.forEach((presetName) => {
  const colors = CategoricalColors.get(presetName).IndexedColors;

  //lookupTable.setIndexedLookup(true)
  //const annotations = new Uint8Array(categoricalColors);
  //for (let i = 0; i < categoricalColors; i++) {
    //annotations[i] = i;
  //}
  //lookupTable.setAnnotations(annotations, annotations);

  //const table = vtkDataArray.newInstance({
    //numberOfComponents: 4,
    //size: 4 * categoricalColors,
    //dataType: 'Uint8Array',
  //});
  //for (let i = 0; i < categoricalColors; i++) {
    //table.setTuple(i, colors[i].concat([255]));
  //}
  //lookupTable.setTable(table);

  if (width % categoricalColors !== 0) {
    console.error('width should be divisible by categoricalColors.')
  }
  const rgba = new Uint8Array(width * 4);

  const colorWidth = width / categoricalColors
  for (let i = 0; i < categoricalColors; i++) {
    const offset = i * colorWidth * 4
    const red = colors[i*3]
    const green = colors[i*3+1]
    const blue = colors[i*3+2]
    for (let j = 0; j < colorWidth; j++) {
      rgba[offset + j*4] = red * 255
      rgba[offset + j*4 + 1] = green * 255
      rgba[offset + j*4 + 2] = blue * 255
      rgba[offset + j*4 + 3] = 255
    }
  }

  const ctx = canvas.getContext('2d');
  const pixelsArea = ctx.getImageData(0, 0, width, 256);
  for (let lineIdx = 0; lineIdx < 256; lineIdx++) {
    pixelsArea.data.set(rgba, lineIdx * 4 * width);
  }

  const nbValues = 256 * width * 4;
  const lineSize = width * 4;
  for (let i = 3; i < nbValues; i += 4) {
    pixelsArea.data[i] = 255 - Math.floor(i / lineSize);
  }

  ctx.putImageData(pixelsArea, 0, 0);

  const image = new Image()
  image.src = canvas.toDataURL("image/png")

  const row = document.createElement('tr')

  const colImage = document.createElement('td')
  colImage.appendChild(image)
  row.appendChild(colImage)

  const colText = document.createElement('td')
  const text = document.createTextNode(presetName)
  colText.appendChild(text)
  row.appendChild(colText)

  lutTableBody.appendChild(row)

  lutModuleContent += `
CategoricalColorIcons.set('${presetName}', '${image.src}')
`

})

lutModuleContent += `
export default CategoricalColorIcons
`

lutTable.appendChild(lutTableBody)
body.appendChild(lutTable)
const lutLabel = document.createElement('label')
lutLabel.innerHTML = "CategoricalColorIcons.ts: <br>"
body.appendChild(lutLabel)
const lutPresetIconsModule = document.createElement('textarea')
lutPresetIconsModule.setAttribute('rows', '150')
lutPresetIconsModule.setAttribute('cols', '100')
lutPresetIconsModule.value = lutModuleContent
body.appendChild(lutPresetIconsModule)
console.log(body)
