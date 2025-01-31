# Bonus: Lidar Processing and Analysis with LAStools

[LAStools](https://rapidlasso.de/product-overview/) is a convenient and powerful
set of tools for processing point cloud data in .las or .laz format. LAStools is a
subscription-based software, but some of the more basic tools are free and open
source, while others are free to use with restrictions (data are slightly altered
and rasters are generated with diagnonal lines, for example).

LAStools has a plugin for QGIS and a toolbox for ArcGIS Pro if you prefer to work
with a GUI. LAStools also has standalone .exe files that can be run in their own GUI.
However, I prefer running the tools directly in the Command Prompt to have full access
to all options.

To begin, download LAStools from <http://rapidlasso.de/customer-support>. Unzip the folder
directly into your C:\ drive, so that you have the folder structure C:\LAStools\bin.

## Download data

For this lab, we will use data acquired by the University of Florida's 
[GatorEye](http://www.speclab.org/gatoreye.html) UAV lidar system, available at the
following [link](http://www.speclab.org/gatoreye-data-access.html) under "2019 Mexico
June." Once downloaded, copy all of the .las files to a new folder 
C:\LAStools\bin\LTZ.

## Pre-process data

The raw data are organized by individual flight line. To work with the data, we have
to first pre-process the .las files by merging them together then thinning the point cloud.

In the Command Prompt, first navigate to your working folder, which can be your 
C:\LAStools\bin folder, for example. If you want to have a different working folder, 
you must add the LAStools to PATH.

```Bash
cd C:\LAStools\bin
```

The following command will merge all files. Refer to the 
[lasmerge](https://downloads.rapidlasso.de/readme/lasmerge_README.md) README file.

|       |     |
| ---   | --- |
| -i    | input file |
| *     | wild, input all files with the same extension |
| -o    | output file |
| -merged | merge .las files |
| -epsg | define the coordinate system |
| -vertical_wgs84 | sets vertical datum |
|-cpu64|performs larger calculations per second|

```Bash
las2las -i C:\LAStools\bin\LTZ\*.las -merged -epsg 32615 -o C:\LAStools\bin\LTZ\ltzmerged.las -cpu 64
```

The next step thins the point cloud based on a step size of 0.1, which is equivalent
to a maximum point density of $1 \over 0.1^2$ or 100 points per meter.

$$
\text{point spacing} = \sqrt{1 \over \text{point density}}
$$

|||
|---|---|
|-step 0.1|point spacing|
|-random|thinning selects random points|
|-lowest|thinning selects lowest points|
|-highest|thinning selects highest points|
|-last_only|selects only last returns|

```Bash
lasthin -i C:\LAStools\bin\LTZ\ltzmerged.las -step 0.1 -random -cpu64 -o C:\LAStools\bin\LTZ\ltzthinned.las
```

In this example, we selected points for the thinned point cloud randomly. We could also 
have used -lowest to select the points with the lowest elevations or Z values. 
These point clouds have significant low noise, however, so keeping lowest points could 
be detrimental to final results. We could also have just selected last returns, but 
we are assuming we want to keep vegetation data as well for this exercise.

Finally, we can now run the lasoptimize tool to improve processing. This tool removes
unnecessary data and reorders the points in the .las file for spatial coherency.

|||
|---|---|
|-do_not_zero_user_data|user data can sometimes have important information|

```Bash
lasoptimize -i C:\LAStools\bin\LTZ\ltzthinned.las -do_not_zero_user_data -cpu64 -o C:\LAStools\bin\LTZ\ltzoptimized.las
```

To assist processing, we can also create an index (.lax) file in the same folder as
our .las file.

```Bash
lasindex -i C:\LAStools\bin\LTZ\ltzoptimized.las
```

## Ground Classification

Similar to the exercise in lidR, we have to retile the data before applying the ground
classification algorithm.

The next command will retile the thinned .las into tile sizes measured in the units
of the point cloud, meters.

|||
|---|---|
|-tile_size 250 | width of tile in units of the data (meters) |
|-buffer 25| buffer size |
| -reversible | allows the tiles to be combined later and remove the buffers|
| -odir | output directory |
| -olas | output file type (.las) |

```Bash
lastile -i C:\LAStools\bin\LTZ\ltzthinned.las -tile_size 250 -buffer 25 -reversible -odir C:\LAStools\bin\LTZ\tiles -olas -cpu64
```

|||
|---|---|
| -nature | default settings for "nature," step = 5 |
| -wilderness | default settings for "wilderness," step = 3 |
| -archeology | default settings for "archeology," step = 1 |
| -fine | 6 substeps, default |
| -extra_fine | 7 substeps |
| -hyper_fine | 9 substeps for very steep terrain |
|-cores 4| process multiple inputs on number of cores in parallel |

```Bash
lasground_new -i C:\LAStools\bin\LTZ\Ground\Tiles\*.las -wilderness -odir C:\LAStools\bin\LTZ\Ground\Tiles\Ground -olas -cpu64 -cores 4
```

```Bash
lastile -i C:\LAStools\bin\LTZ\Ground\Tiles\Ground\*.las -reverse_tiling -o C:\LAStools\bin\LTZ\Ground\ltzground.las
```

```Bash
blast2dem -i C:\LAStools\bin\LTZ\Ground\ltzground.las -keep_class 2 -o C:\LAStools\bin\LTZ\Ground\ltzwild.tif
```

## References

Kashani, Alireza G., Michael J. Olsen, Christopher E. Parrish, and Nicholas Wilson. 
2015. A Review of LIDAR Radiometric Processing: From Ad Hoc Intensity 
Correction to Rigorous Radiometric Calibration. Sensors 15:28099–28128. 
<https://doi.org/10.3390/s151128099>

Scaioni, M., B. Höfle, A.P. Baungarten Kersting, L. Barazzetti, M. Previtali, 
and D. Wujanz. 2018. Methods from Information Extraction from LiDAR 
Intensity Data and Multispectral LiDAR Technology. The International Archives 
of the Photogrammetry, Remote Sensing and Spatial Information Sciences 52(3):1503–1510. 
<https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLII-3/1503/2018/isprs-archives-XLII-3-1503-2018.pdf>