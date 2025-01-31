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

## Raster Calculator

A simple comparison of SRTM and ASTER data can be done with Raster Calculator, subtracting one surface from the other. The resulting surface can be used to visualize the location of artifacts, and a histogram can give a sense of the distribution of errors.

## DTM Filter

Artifacts in ASTER data can be further removed by using the DTM filter (slope-based) tool in QGIS. This tool takes a DEM as its input and smooths areas of significant slope. 

## Define Vertical Projection

To conduct topographic analysis, ideally the horizontal and vertical measurement units will be the same. SRTM and ASTER data, however, are not defined in this way. The horizontal units are measured in degrees (latitude, longitude), while the vertical units are measured in meters. ArcGIS Pro can compensate for this discrepancy, but the vertical projection must first be defined. In ArcGIS Pro, the Define Projection tool can be used to define the vertical projection as Gravity-related, WGS 1984 Geoid. All tools will now apply a Z factor that is multiplied to the vertical units to compensate for the difference between horizontal and vertical units.

In QGIS, the vertical projection must be defined alongside the horizontal projection. However, the QGIS tools do not automatically calculate the Z factor. For this reason, when working in QGIS always ensure that the data are projected to have the same horizontal and vertical units. Using the r.proj tool, redefine the projection into a projected coordinate system (UTM). Use Google Earth to determine the correct UTM zone.

## Contours

A DEM alone is not particularly useful for visualizing topography. More commonly, contour lines are generated to show topography. The Contour tool in ArcGIS Pro can create linear contours at defined intervals. Each contour represents the elevation along that line -- closer contour lines represent steeper terrain. The Simplify Line tool can be used to smooth out these contours generated from a high resolution DEM.

## Hillshade

Hillshading or shaded relief is a technique used to model how light and shadow might fall across a landscape. The Azimuth represents the hypothetical direction of the light source, while Altitude represents the vertical angle of the light source relative to the viewer. The convention is to have the direction of the light source coming from the northwest, although this direction would of course change throughout the day and year based on the position of the sun. 

## Monochromatic Multidirectional Hillshade

A drawback of using Hillshade is that in areas with steeper slopes, some areas will be over and under exposed. This effect can be improved by modeling the Hillshade from several different angles (Azimuths) and combining them. In ArcGIS Pro, a Multidirectional option is available under Imagery -> Raster Functions -> Surface -> Hillshade. 

## Slope

Slope refers to the rate of change in elevation from one location to the next, in other words, the first derivative of elevation. A Slope map can highlight topography more dramatically than a Hillshade. The drawback is that a Slope map will not show the direction of the slope, so elevated areas can be impossible to distinguish from low lying areas.

## Aspect

Aspect refers to the direction of slope from one location to the next. Aspect alone may not be useful for visualizing topography, but it represents an important intermediate variable that can be used in topographic analyses.

## Aspect-Slope

A mix of the slope and aspect surfaces can combine the best of the slope map's topographic visualization with the directionality calculated in the aspect. An Aspect-Slope map can be generated in ArcGIS Pro under Imagery -> Raster Functions -> Surface -> Aspect-Slope. Note that this Raster Functions does not automatically apply a Z Factor. The Z Factor value can be copied from the Hillshade tool, for example, for better results. 

## Curvature

Curvature refers to the rate of change in aspect from one location to the next, in other words, the second derivative of elevation. A negative curvature value indicates that the surface is upwardly concave, while a positive curvature value indicates that the surface is upwardly convex. The average absolute curvature of a surface can also generally serve as an index of the ruggedness of the landscape, with higher values reflecting more rugged terrain. Curvature is used as an intermediate measurement for hydrological analyses and ground point classification algorithms. The Curvature tool is available in ArcGIS Pro.

## Relief Visualization Toolbox

The [Relief Visualization Toolbox](https://iaps.zrc-sazu.si/en/rvt) is a useful set of tools that include additional algorithms for topographic modeling. The toolbox can be added to ArcGIS Pro, QGIS, or it can be run as a stand-alone interface. Several tools are useful for archaeological analysis, including Openness, simplified local relief model (SLRM), Sky-view factor, and Multiple directions hillshade. The latter differs from ArcGIS Pro's monochromatic Multidirectional Hillshade by combining the different hillshade directions into a multiband image displayed with RGB filters. The [manual](https://iaps.zrc-sazu.si/sites/default/files/rvt_2.2.1_0.pdf) describes these visualizations in more detail.

## Transparency and Blending

Several visualizations can be displayed at once using transparency or blending. Adding a 50% transparency to an upper layer over a lower layer can be useful, for example placing a transparent DEM over hillshade or slope. Blending, in contrast, more evenly combines two layers. Multiply is commonly used to darken imagery, where whiter areas become transparent in the top layer and blacker areas become darker by multiplying the colors of the base and upper layer.

A [Red Relief Image Map](https://www.rrim.jp/en/) has become a popular topographic visualization technique. This approach blends (multiplies) a red slope map over an openness or simplified local relief model. Instructions to create a simple red relief surface are available at the [Ancient Maya Settlement blog](https://ancientmayasettlement.com/2022/02/12/a-recipe-for-simple-red-relief/). 

## Topographic Position Index

A Topographic Position Index (TPI) models landforms in relation to their relative topographic position, for example, on hill summits, slopes, or valleys. A simple TPI can be generated by averaging an elevation surface and subtracting this surface from the original DEM to determine the prominence of topographic positions. To average an elevation surface, the Focal Statistics tool in ArcGIS Pro applies a statistic (in this case the mean) to all of the cells within a defined neighborhood. The default neighborhood is a 3 x 3 pixel area. The size of the neighborhood depends on the scale of analysis, but some trial and error is necessary. Using Raster Calculator, the resulting average surface is subtracted from the original DEM. The result is displayed with a Stretch symbology by default. For the TPI, the symbology should be changed to Classify with 5 classes (Valley, Lower Slopes, Flat Slopes, Upper Slopes, and Ridge). Appropriate values for these classes depend on the standard deviation (σ) of the data, for example -1σ, -0.5σ, 0.5σ, 1σ, and maximum, respectively. The standard deviation can be found under More -> Show statistics.

## Geomorphons

Another approach to classifying landforms relies on the Geomorphons method. This tool has additional categories beyond a simple topographic position index. Geomorphons traditionally consist of 10 classes: 1) Flat, 2) Summit, 3) Ridge, 4) Shoulder, 5) Spur, 6) Slope, 7) Hollow, 8) Footslope, 9) Valley, and 10) Depression. The SAGA Geomorphons tool in QGIS classifies a DEM into these categories, based on parameters that like the Topographic Position Index are used to define the neighborhood or radius.

## Multi-scale Relief Model (MSRM)

The Multi-scape Relief Model is designed to extract landform morphology in low resolution digital elevation models. The implementation is based in [Google Earth Engine](https://whitschroder.github.io/remote-sensing/ml.html) or [Python](https://github.com/horengo/Orengo_Petrie_2018_MSRM).

## References

De Reu, Jeroen, Jean Bourgeois, Philippe De Smedt, Ann Zwertvaegher, Marc Antrop, Machteld Bats, Philippe
De Maeyer, Peter Finke, Marc Van Meirvenne, Jacques Verniers, and Philippe Crombé. 2011. Measuring the relative
topographic position of archaeological sites in the landscape, a case study on the Bronze Age barrows in
northwest Belgium. Journal of Archaeological Science 38(12):3435-3446. <https://doi.org/10.1016/j.jas.2011.08.005>

Golden, Charles and Bryce Davenport. "The Promise and Problem of Modeling Viewsheds in the Western Maya Lowlands." [PDF](https://www.academia.edu/2611078/Golden_and_Davenport_The_Promise_and_Problems_of_Modeling_Viewsheds_in_the_Western_Maya_Lowlands)

Thompson, Amy. 2020. Detecting Classic Maya Settlements with Lidar-Derived Relief Visualizations. Remote Sensing 12(17):2838. <https://doi.org/10.3390/rs12172838>

Jasiewicz, Jarosław and Stepinski, Tomasz F. 2013 Geomorphons -- a pattern recognition approach to classification and mapping of landforms. [https://doi.org/10.1016/j.geomorph.2012.11.005](https://doi.org/10.1016/j.geomorph.2012.11.005)
  