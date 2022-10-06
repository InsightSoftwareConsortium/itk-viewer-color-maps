#!/usr/bin/env python3

import csv
from pathlib import Path

glasbey_dir = Path('/home/matt/src/colorcet/assets/Glasbey')

glasbey_to_name = {
        'glasbey_bw_minc_20': 'glasbey',
        'glasbey_bw': 'glasbey_bw',
        'glasbey_bw_minc_20_hue_330_100': 'glasbey_warm',
        'glasbey_bw_minc_20_hue_150_280': 'glasbey_cool',
        'glasbey_bw_minc_20_minl_30': 'glasbey_light',
        'glasbey_bw_minc_20_maxl_70': 'glasbey_dark',
        }

colors = []
for file_prefix, name in glasbey_to_name.items():
    csv_filepath = glasbey_dir / Path(file_prefix + '_n256.csv')
    print(csv_filepath, csv_filepath.exists(), name)
    rgb_values = []
    with open(csv_filepath) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            rgb_values.append(row)
    indexed_color = {
            'IndexedColors': rgb_values,
            'Name': name
            }
    colors.append(indexed_color)

with open('src/CategoricalColors.ts', 'w') as fp:
    fp.write('const CategoricalColors = new Map<string, Array<[number, number, number]>>()\n\n')
    for color in colors:
        fp.write("CategoricalColors.set('{}', [\n".format(color['Name']))
        rgb_values = color['IndexedColors']
        for rgb in rgb_values:
            fp.write('  [')
            fp.write(str(float(rgb[0])))
            fp.write(',')
            fp.write(str(float(rgb[1])))
            fp.write(',')
            fp.write(str(float(rgb[2])))
            fp.write('],\n')
        fp.write('])\n')

    fp.write("\nCategoricalColors.set('modulate', [\n")
    for ii in range(12):
        fp.write('  [1.0,1.0,1.0],\n')
    fp.write('])\n')

    fp.write("\nCategoricalColors.set('modulate_dark', [\n")
    for ii in range(12):
        fp.write('  [0.0,0.0,0.0],\n')
    fp.write('])\n')

    fp.write('\nexport default CategoricalColors\n')
