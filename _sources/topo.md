# 5. Topographic Analysis with ASTER and SRTM Digital Elevation Models

In this lab, students will compare several global digital elevation datasets and create raster derivatives for topographic analysis.

## DEM vs. DSM vs. DTM

The terms digital elevation model (DEM), digital surface model (DSM), and digital terrain model (DTM) do not have consistent definitions. In some usages, DEM can refer to any raster surface that reflects height, and therefore a DSM and a DTM are a type of DEM. In other uses, DEM and DTM are synonymous and refer to only the elevation of the ground. In the United States, a DTM more often refers to a DEM that has additional data, namely vectors that mark additional data, including rivers, ridges, and breaklines. Some archaeologists have suggested using DTM to refer to a DEM that includes above ground archaeological features. The term used most consistently is DSM, which models all ground and above ground objects.

## SRTM

The Shuttle Radar Topography Mission (SRTM) used two radar antennae mounted on the Space Shuttle Endeavour in 2000 to produce the first near global DEM, specifically 80% of the Earth's land surface between 60° north and 56° south latitude. Although radar can penetrate vegetation, results can be poor in densely forested areas and rugged terrain.

SRTM data are available in three formats:

<b>SRTM Non-Void Filled</b> elevation data contains voids from densely forested areas and rugged terrain at a resolution of 1-arc second (approximately 30 m at the equator) in the United States and 3-arc seconds (approximately 90 m at the equator) outside the United States.

<b>SRTM Void Filled</b> elevation data combined interpolation and other data sources to fill voids. The resolution is 1-arc second (approximately 30 m at the equator) in the United States and 3-arc seconds (approximately 90 m at the equator) outside the United States. 

<b>SRTM 1 Arc-Second Global</b> is a near-global dataset with improved resolution of 1-arc second (approximately 30 m at the equator), except for areas above 50° north and below 50° south latitude, which were sampled at a resolution of 1-arc second by 2-arc seconds. Some voids may still be present.

SRTM data are available through the [USGS Earth Explorer](https://earthexplorer.usgs.gov/).

## ASTER

The Advanced Spaceborne Thermal Emission and Reflection Radiometer (ASTER) was a Japanese multispectral sensor mounted on NASA's Terra satellite in 1999. Stereo imagery was processed to generate the first version of the ASTER Global Digital Elevation Model (GDEM), perhaps more appropriately called a DSM, covering 99% of the Earth's land surface between 83° north and 83° south latitude. The third version of the GDEM was released in 2019 with significant improvements, removing above ground artifacts.

ASTER data are no longer available through the USGS Earth Explorer and can instead be downloaded from [NASA Earth Data Search](https://search.earthdata.nasa.gov/search). 

## AIRSAR

A product of the Jet Propulsion Laboratory (JPL), the Airborne Synthetic Aperture Radar (AIRSAR) instrument was an airborne system that operated from 1988 to 2004, collecting limited data over selected study regions, at approximately 5 m resolution. AIRSAR data can be browsed through a list of [missions](https://airsar.jpl.nasa.gov/cgi-bin/internet.plex) a search for [precision data](https://airsar.jpl.nasa.gov/cgi-bin/search.plex), and an [interactive map](https://airsar.jpl.nasa.gov/cgi-bin/map.pl).

## USGS 3D Elevation Program (3DEP)

Near nationwide digital elevation models for the U.S. are available at the [National Map](https://apps.nationalmap.gov/downloader/). Data are available at 1 m, 5 m, 10 m, and 30 m resolution.

## Open Topography

Additional topographic data may be available at [Open Topography](https://opentopography.org/). This website provides convenient links to available USGS and user-submitted data.

## Raster Calculator

A simple comparison of SRTM and ASTER data can be done with Raster Calculator, subtracting one surface from the other. The resulting surface can be used to visualize the location of artifacts, and a histogram can give a sense of the distribution of errors. The Raster Calculator is available in ArcGIS Pro in the Geoprocessing pane under Spatial Analyst and Image Analyst. In QGIS, several Raster Calculator tools are available, in the main menu under Raster -> Raster Calculator or in the Processing Toolbox under Raster analysis or GDAL.

## DTM Filter

Artifacts in ASTER data can be further removed by using the DTM filter (slope-based) tool in QGIS. This tool takes a DEM as its input and smooths areas of significant slope. The tool takes as input a DEM, a kernel/search radius, and a terrain slope. The terrain slope should represent the maximum slope of the topography so that any values above the slope will be filtered out. For example, on flat terrain a slope of 30% might represent an above-ground object like vegetation. The tool outputs two surfaces, a ground layer and a non-ground layer. The ground layer ideally represents the actual elevation of the terrain, while the non-ground layer represents above ground pixels that were removed.

The resulting ground surface will consist of scattered pixels rather than a continuous surface. Some tweaking of the terrain slope parameter may be necessary. After generating the ground surface, the r.fillnulls tool can be used to interpolate values and fill gaps. The interpolation method should be set to bilinear. The output will be a smoothed DEM that may be more useful for applications including hydrological analysis.

The DTM filter tool is best used at a local level, since at a landscape level terrain slope can vary significantly.

## Define Vertical Projection

To conduct topographic analysis, ideally the horizontal and vertical measurement units will be the same. SRTM and ASTER data, however, are not defined in this way. The horizontal units are measured in degrees (latitude, longitude), while the vertical units are measured in meters. ArcGIS Pro can compensate for this discrepancy, but the vertical projection must first be defined. In ArcGIS Pro, the Define Projection tool can be used to define the vertical projection as Gravity-related, WGS 1984 Geoid. All tools will now apply a Z factor that is multiplied to the vertical units to compensate for the difference between horizontal and vertical units.

In QGIS, the vertical projection must be defined alongside the horizontal projection. However, the QGIS tools do not automatically calculate the Z factor. For this reason, when working in QGIS always ensure that the data are projected to have the same horizontal and vertical units. Using the r.proj tool under GRASS or the Warp (reproject) tool under GDAL, redefine the projection into a projected coordinate system (UTM). In ArcGIS Pro, use the Project Raster tool in Data Management Tools. Use Google Earth to determine the correct UTM zone.

## Changing the DEM Symbology

A DEM can be viewed with any number of color schemes, including grayscale (singleband gray in QGIS) or multipart color (singleband pseudocolor in QGIS). These settings are available in ArcGIS Pro by right-clicking the appropriate layer in the Contents and selecting Symbology. In QGIS, the settings are available by right-clicking the appropriate layer in the Contents and selecting Properties -> Symbology. The color scheme by default stretches to the minimum and maximum values of the DEM. Additional visualizations can change the contrast of the image and enhance features. These settings can be adjusted in QGIS under Min/Max Value Settings in Symbology. In ArcGIS Pro, the Stretch type can be changed in Symbology. Minimum Maximum, Percent Clip, and Standard Deviation (Min/max, Cumulative count cut, and Mean +/- standard deviation x, respectively, in QGIS) are all useful settings. The visualization can also be set to update when zooming in and out, using the Updated canvas option in Statistics extent in QGIS, or DRA (Dynamic Range Adjustment) in the Statistics section of Symbology in ArcGIS Pro.

## Contours

A DEM alone is not particularly useful for visualizing topography. More commonly, contour lines are generated to show topography. The Contour tool in ArcGIS Pro can create linear contours at defined intervals. Each contour represents the elevation along that line -- closer contour lines represent steeper terrain. The Simplify Line tool can be used to smooth out these contours generated from a high resolution DEM. In QGIS, use the Contour tool in GDAL or the r.contour tool in GRASS.

## Slope

Slope refers to the rate of change in elevation from one location to the next defined by a consistent neighborhood around each pixel, in other words, the first derivative of elevation. A Slope map can highlight topography more dramatically than other visualizations like Hillshade (see below). The drawback is that a Slope map will not show the direction of the slope, so elevated areas can be impossible to distinguish from low lying areas. ArcGIS Pro has several slope tools, including Slope in Spatial Analyst, which uses a default 3 x 3 pixel neighborhood, and Surface Parameters that allows users to change the neighborhood size. In QGIS, the basic tool is Slope under Raster terrain analysis, or r.slope.aspect in GRASS, which offers more functionality similar to the Surface Parameters tool in ArcGIS Pro. After generating a slope surface, I recommend changing the Symbology to either a stretched grayscale or another monochromatic color scheme, setting or inverting the color scheme so that the darker color represents higher slopes and the whiter color represents lower slopes.

## Aspect

Aspect refers to the direction of slope from one location to the next. Aspect alone may not be useful for visualizing topography, but it represents an important intermediate variable that can be used in topographic analyses. Aspect can be calculated in ArcGIS Pro using the Aspect tool or the Surface Parameters tool. In QGIS, the Aspect tool in Raster terrain analysis and the r.slope.aspect tool in GRASS are available. Note that aspect is traditionally calculated clockwise from north, for example, in both the Aspect tools in QGIS and ArcGIS Pro; however, the r.slope.aspect tool defaults to calculating aspect counterclockwise from east. For consistency, when running the r.slope.aspect tool, check the box "Create aspect as degrees clockwise from North (azimuth), with flat = -9999." The output in QGIS is a stretched raster with values from 0 to 360, but the best visualization is a classified or discrete symbology, which is the default output in ArcGIS Pro. In QGIS, upload the following aspect text file to the layer properties symbology: {Download}`Aspect.txt<./Aspect.txt>`. 

## Aspect-Slope

A mix of the slope and aspect surfaces can combine the best of the slope map's topographic visualization with the directionality calculated in the aspect. An Aspect-Slope map can be generated in ArcGIS Pro under Imagery -> Raster Functions -> Surface -> Aspect-Slope. Note that this Raster Function does not automatically apply a Z Factor, so the input DEM must be in a projected coordinate system. The correct Z Factor value can alternatively be copied from the Hillshade tool for better results. A similar effect can be produced in ArcGIS Pro or QGIS by generating separate grayscale slope and multicolor aspect surfaces and combining them with transparencies or blending (see below).

## Hillshade

Hillshading or shaded relief is a technique used to model how light and shadow might fall across a landscape. The Azimuth represents the hypothetical direction of the light source, while Altitude represents the vertical angle of the light source relative to the viewer. The convention is to have the direction of the light source coming from the northwest, although this direction would of course change throughout the day and year based on the position of the sun. A DEM can be viewed as a hillshade model in QGIS by right-clicking the appropriate layer in the contents, selecting Properties -> Symbology, and changing Render type under Band Rendering from Singleband gray to Hillshade. The visualization can be improved by changing the Resampling (at the bottom of the Symbology window in Properties) from Nearest Neighbor to Bilinear or Cubic when zoomed in. In ArcGIS Pro, a DEM can be viewed as a hillshade by right-clicking on the layer in the Contents and selecting Symbology. In the window that pops up, change Stretch to Shaded Relief. The color scheme defaults to a Multipart Color Scheme, but can be changed to grayscale if preferred. Alternatively, I recommend creating separate layers/files using the Hillshade tools in ArcGIS Pro or QGIS.

The hillshade is technically a type of Aspect-Slope map. A hillshade can be generated with the following formula in Raster Calculator:

```
255 * ((cos((90 - Altitude) * 3.14159265 / 180) * cos("Slope" * 3.14159265/180)) + (sin((90 - Altitude) * 3.14159265 / 180) * sin("Slope" * 3.14159265/180) * cos((Azimuth * 3.14159265/180) - ("Aspect" * 3.14159265 / 180))))
```

Altitude in degrees refers to the angle of the sun above the horizon (45 is a typical value), Azimuth refers to the direction of the sun in degress (345 is a typical value), "Slope" is a slope surface in degrees, and "Aspect" is an aspect surface in degrees where 0 is north.

Note that this formula will output float values from -255.0 to 255.0. A traditional hillshade will be in 8-bit format with only integer values from 0 to 255. To match a more traditional hillshade output, negative values can be set to zero by using a conditional statement in Raster Calculator in QGIS:

```
if ("Hillshade" < 0, 0, "Hillshade")
```

In ArcGIS Pro:

```
Con ("Hillshade" < 0, 0, "Hillshade")
```

"Hillshade" represents the output from the slope-aspect calculation. A conditional statement can be read as:

If the hillshade values are less than 0, set them to 0, otherwise use the original hillshade value. In such a statement, all negative values will be set to 0, and positive values will remain the same.

## Monochromatic Multidirectional Hillshade

A drawback of using Hillshade is that in areas with steeper slopes, some areas will be over and under exposed. This effect can be improved by modeling the Hillshade from several different angles (Azimuths) and combining them. In ArcGIS Pro, a Multidirectional option is available under Imagery -> Raster Functions -> Surface -> Hillshade. A similar tool (Multidirectional hillshade) is available in QGIS with the Whitebox Workflows for QGIS plugin (available in the main menu Plugins -> Manage and Install Plugins...), using the Full 360 mode setting. The multidirectional hillshade can be produced manually by creating several separate hillshade layers with different azimuth settings and combining them with transparencies or blending (see below).

## Curvature

Curvature refers to the rate of change in slope from one location to the next, in other words, the second derivative of elevation. A negative curvature value indicates that the surface is upwardly concave, while a positive curvature value indicates that the surface is upwardly convex. The average absolute curvature of a surface can also generally serve as an index of the ruggedness of the landscape, with higher values reflecting more rugged terrain. Curvature is used as an intermediate measurement for hydrological analyses and ground point classification algorithms. The Curvature and Surface Parameter tools are available in ArcGIS Pro, and the r.slope.aspect tool is available in QGIS under GRASS.

## Relief Visualization Toolbox

The [Relief Visualization Toolbox](https://iaps.zrc-sazu.si/en/rvt) is a useful set of tools that include additional algorithms for topographic modeling. The toolbox can be added to ArcGIS Pro, QGIS, or it can be run as a stand-alone interface. In QGIS, the Relief Visualization Toolbox is available under the main Plugins menu -> Manage and Install Plugins... In ArcGIS Pro, the toolbox must be downloaded from the [GitHub page](https://github.com/EarthObservation/rvt-arcgis-pro) by clicking the <>Code button and selecting Download ZIP. The folder must then be extracted to C:/Program Files/ArcGIS/Pro/Resources/Raster/Functions/Custom/rvt-arcgis-pro. The toolbox will then be available in ArcGIS Pro under Imagery -> Raster Fuctions -> Custom. Additional instructions are available at <https://rvt-py.readthedocs.io/en/latest/install_arcgis.html#install-arcgis>. 

Several tools are useful for archaeological analysis, including Openness, simplified local relief model (SLRM), Sky-view factor, and Multiple directions hillshade. The latter differs from the monochromatic Multidirectional Hillshade by combining the different hillshade directions into a multiband image displayed with RGB filters. The [manual](https://iaps.zrc-sazu.si/sites/default/files/rvt_2.2.1_0.pdf) describes these visualizations in more detail.

## Transparency and Blending

Several visualizations can be displayed at one time using transparency or blending. Adding a 50% transparency to an upper layer over a lower layer can be useful, for example placing a transparent DEM over hillshade or slope. Blending, in contrast, more evenly combines two layers. Multiply is commonly used to darken imagery, where whiter areas become transparent in the top layer and blacker areas become darker by multiplying the colors of the base and upper layer.

The transparency option is available in ArcGIS Pro by selecting the appropriate layer in the Contents, clicking Raster Layer at the top of the screen, and changing Transparency (the default is 0.0%, meaning no transparency). Blending is available underneath the Transparency option, next to Layer Blend (the default is Normal, with many additional options under the dropdown). In QGIS, right-click the appropriate layer in the Contents, and select Properties. Under Transparency, Global Opacity will change the transparency of the layer (the default is 100.0%, meaning full opacity). Blending is available in Symbology under Layer Rendering and Blending mode (the default is Normal, with many additional options under the dropdown). Note that transparency and blending will always be applied to the first/upper selected layer, and will affect the second/lower layer, which must be placed immediately below the first/upper layer (or any layers between them must be turned off/deselected). 

A [Red Relief Image Map](https://www.rrim.jp/en/) has become a popular topographic visualization technique. This approach blends (multiplies) a red slope map over an openness or simplified local relief model. Instructions to create a simple red relief surface are available at the [Ancient Maya Settlement blog](https://ancientmayasettlement.com/2022/02/12/a-recipe-for-simple-red-relief/).

To visualize a slope and a simple local relief model in QGIS using the recommended color palettes, upload the following slope text file to the layer properties symbology ({Download}`RRIMslope.txt<./RRIMslope.txt>`) and the SLRM text file ({Download}`RRIMslrm.txt<./RRIMslrm.txt>`), respectively. In ArcGIS Pro, import the following slope layer file into the symbology ({Download}`RRIMslope.lyrx<./RRIMslope.lyrx>`), and the following SLRM layer file ({Download}`RRIMslrm.lyrx<./RRIMslrm.lyrx>`).

## Topographic Position Index

A Topographic Position Index (TPI) models landforms in relation to their relative topographic position, for example, on hill summits, slopes, or valleys. A simple TPI can be generated by averaging an elevation surface and subtracting this surface from the original DEM to determine the prominence of topographic positions. To average an elevation surface, the Focal Statistics tool in ArcGIS Pro or the r.neighbors tool in QGIS under GRASS applies a statistic (in this case the mean or average) to all of the cells within a defined neighborhood. The default neighborhood is a 3 x 3 pixel area. The size of the neighborhood depends on the scale of analysis, but some trial and error is necessary. Using Raster Calculator, the resulting average surface is subtracted from the original DEM. The result is displayed with a Stretch symbology by default. For the TPI, the symbology should be changed to Classify with 5 classes (Valley, Lower Slopes, Flat Slopes, Upper Slopes, and Ridge). Appropriate values for these classes depend on the standard deviation (σ) of the data, for example -1σ, -0.5σ, 0.5σ, 1σ, and maximum, respectively. In ArcGIS Pro, the standard deviation can be found under Layer Properties (right-click the layer in Contents) -> Source -> Statistics or under the Symbology pane, and in QGIS under Layer Properties -> Information. The values for the 5 classes can be edited manually in the Symbology panes in QGIS and ArcGIS Pro. In QGIS Pro, changing Interpolation from Linear to Discrete under the Min/Max Value Settings will create more pronounced divisions between classes.

## Geomorphons

Another approach to classifying landforms relies on the Geomorphons method. This tool has additional categories beyond a simple topographic position index. Geomorphons traditionally consist of 10 classes: 1) Flat, 2) Summit, 3) Ridge, 4) Shoulder, 5) Spur, 6) Slope, 7) Hollow, 8) Footslope, 9) Valley, and 10) Depression. The SAGA Geomorphons tool in QGIS classifies a DEM into these categories, based on parameters that like the Topographic Position Index are used to define the neighborhood or radius. Other Geomorphons tools are available in QGIS and ArcGIS Pro.

If the SAGA tools are not available and visible in the QGIS Processing Toolbox, under Plugins -> Manage and Install Plugins... install Processing Saga NextGen Provider. Then click on the main menu Settings -> Options -> Processing -> Providers. Under SAGAANG copy and paste the path to the SAGA folder. The SAGA folder should have been downloaded with the original QGIS installation. The path should be in your installed QGIS folder, for example in Windows, C:\Program Files\QGIS 3.40.14\apps\saga. Check the box that says Enable SAGA Import/Export optimizations.

On a Mac, install the same Processing Saga NextGen Provider plugin. Take note under the plugin details what version of SAGA is supported. Download the appropriate version of SAGA for Mac from the [SAGA download page](https://sourceforge.net/projects/saga-gis/files). Once installed move the app to the Applications folder. You might need to adjust your privacy settings to allow SAGA. Find the folder where saga_cmd is installed. It should be something like /Applications/SAGA.app/Contents/MacOS.

In QGIS, navigate to Settings -> Options -> Processing -> Providers and paste the correct folder path under SAGAANG. Check the box that says Enable SAGA Import/Export optimizations.

To visualize a classified or discrete Geomorphons raster in QGIS, upload the following Geomorphons text file to the layer properties symbology: {Download}`Geomorphons.txt<./Geomorphons.txt>`.

## Multi-scale Relief Model (MSRM)

The Multi-scale Relief Model is designed to extract landform morphology in low resolution digital elevation models. The implementation is based in [Google Earth Engine](https://whitschroder.github.io/remote-sensing/ml.html) or [Python](https://github.com/horengo/Orengo_Petrie_2018_MSRM). The Relief Visualization Toolbox also includes a similar tool.

## Readings

De Reu, Jeroen, Jean Bourgeois, Philippe De Smedt, Ann Zwertvaegher, Marc Antrop, Machteld Bats, Philippe
De Maeyer, Peter Finke, Marc Van Meirvenne, Jacques Verniers, and Philippe Crombé. 2011. Measuring the relative
topographic position of archaeological sites in the landscape, a case study on the Bronze Age barrows in
northwest Belgium. Journal of Archaeological Science 38(12):3435-3446. <https://doi.org/10.1016/j.jas.2011.08.005>

Garrison, Thomas G., Bruce Chapman, Stephen Houston, Edwin Román, and  
Jose Luis Garrido López. 2011. Discovering Ancient Maya Settlements Using Airborne Radar Elevation Data. Journal of Archaeological Science 38(7):1655-1662. <https://doi.org/10.1016/j.jas.2011.02.031>

Golden, Charles and Bryce Davenport. 2013. "The Promise and Problem of Modeling Viewsheds in the Western Maya Lowlands." In Mapping Archaeological Landscapes from Space, edited by Douglas C. Comer and Michael J. Harrower, pp. 145-157. Springer, New York. [PDF](https://www.academia.edu/2611078/Golden_and_Davenport_The_Promise_and_Problems_of_Modeling_Viewsheds_in_the_Western_Maya_Lowlands)

Thompson, Amy. 2020. Detecting Classic Maya Settlements with Lidar-Derived Relief Visualizations. Remote Sensing 12(17):2838. <https://doi.org/10.3390/rs12172838>

## Additional References

Jasiewicz, Jarosław and Stepinski, Tomasz F. 2013 Geomorphons -- a pattern recognition approach to classification and mapping of landforms. [https://doi.org/10.1016/j.geomorph.2012.11.005](https://doi.org/10.1016/j.geomorph.2012.11.005)