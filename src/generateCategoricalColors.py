#!/usr/bin/env python3

import csv
from pathlib import Path
import json

glasbey_dir = Path('/home/matt/src/colorcet/assets/Glasbey')

glasbey_to_name = {
        'glasbey_bw_minc_20': 'glasbey',
        'glasbey_bw': 'glasbey_bw',
        'glasbey_bw_minc_20_hue_330_100': 'glasbey_warm',
        'glasbey_bw_minc_20_hue_150_280': 'glasbey_cool',
        'glasbey_bw_minc_20_minl_30': 'glasbey_light',
        'glasbey_bw_minc_20_maxl_70': 'glasbey_dark',
        }

colors = {}
for file_prefix, name in glasbey_to_name.items():
    csv_filepath = glasbey_dir / Path(file_prefix + '_n256.csv')
    print(csv_filepath, csv_filepath.exists(), name)
    rgb_values = []
    with open(csv_filepath) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        for row in csv_reader:
            rgb_values.extend([float(f) for f in row])
    indexed_color = {
            'IndexedColors': rgb_values,
            'NanColor': [0.75, 0.75, 0.75],
            }
    colors[name] = indexed_color

rgb_values = []
for ii in range(12):
    rgb_values.extend([1.0,1.0,1.0])
indexed_color = {
        'IndexedColors': rgb_values,
        'NanColor': [1.0, 0.0, 0.0],
        }
colors['modulate'] = indexed_color

rgb_values = []
for ii in range(12):
    rgb_values.extend([0.0,0.0,0.0])
indexed_color = {
        'IndexedColors': rgb_values,
        'NanColor': [1.0, 0.0, 0.0],
        }
colors['modulate_dark'] = indexed_color

with open('src/CategoricalColors.json', 'w') as fp:
    json.dump(colors, fp, indent=2)

with open('src/CategoricalColors.ts', 'w') as fp:

    fp.write('const CategoricalColors = new Map<string, Record<"IndexedColors" | "NanColor", number[]>>()\n\n')
    for color_name, value in colors.items():
        fp.write("CategoricalColors.set('{}',\n".format(color_name))
        fp.write(json.dumps(value, indent=2))
        fp.write(')\n\n')

    fp.write('\nexport default CategoricalColors\n')
