# Lidar Processing and Analysis with LAStools

[LAStools](https://rapidlasso.de/product-overview/) is a convenient and powerful
set of tools for processing point cloud data in .las or .laz format. LAStools is a
subscription-based software, but some of the more basic tools are free and open
source, while others are free to use with restrictions (data all slightly altered
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
June."

## Pre-process data

The raw data are organized by individual flight line. To work with the data, we have
to first pre-process the .las files by merging them together, retiling the point cloud
into equally sized tiles, then thinning the point cloud.

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
| -epsg | define the coordinate system |

```Bash
lasmerge -i C:\LAStools\bin\LTZ\*.las -o ltzmerged.las -epsg 32615
```

The next command will retile the merged .las into tile sizes measured in the units
of the point cloud, meters.

|||
|---|---|
| -odir | output directory |
| -olas | output file type (.las) |

```Bash
lastile -i ltzmerged.las -tile_size 200 -odir C:\LAStools\bin\LTZ\tiles -olas
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

```Bash
lasthin -i C:\LAStools\bin\LTZ\tiles\*.las -step 0.1 -random -odir C:\LAStools\bin\LTZ\thin -olas
```

In this example, we selected points for the thinned point cloud randomly. We could also 
have used -lowest to select the points with the lowest elevations or Z values. 
These point clouds are very noisey, however, so keeping lowest points would not only
keep ground points. We could also have just selected last returns (-last_only), but 
we are assuming we want to keep vegetation data as well for this exercise.