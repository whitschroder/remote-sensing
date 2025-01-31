# 2. Orthorectifying CORONA Satellite Imagery

This lab involves the georeferencing and orthorectification of CORONA satellite imagery.

## Corona Atlas

The [Corona Atlas](https://corona.cast.uark.edu/) project has georeferenced and orthorectified some CORONA imagery. This project has developed an interface called [Sunspot](https://sunspot.cast.uark.edu/home/login) for automatic image correction, by invitation only.

## USGS Earth Explorer

Uncorrected CORONA imagery is available through the [USGS Earth Explorer](https://earthexplorer.usgs.gov/). To access imagery, create a free account, and select a location on the map. Click Data Sets and choose the Declassified Data options. Click Results. Only some imagery is available for download, while the rest have not been scanned digitally. Download the imagery and metadata.

## Stitching Imagery

[Hugin](https://hugin.sourceforge.io/) can be used to stitch the CORONA imagery into a single transect. Load images in order (I have had best results with lens type: Orthographic). If the Camera and Lens window pops up, click Cancel if you do not have the metadata. You may get the option to mask out portions of the photo (optional). Then, Align images, and if successful, Create panorama.

## ArcGIS Pro

Add the resulting panorama to an ArcGIS Pro map. Check the panorama carefully for any errors. If necessary, stitch the imagery with different parameters in Hugin.

Copy the metadata from USGS Earth Explorer into a .csv file in the following format:

| Point     | Latitude        | Longitude       |
| ---       | ---             | ---             |
| Center    | Decimal Degrees | Decimal Degrees |
| NW Corner | Decimal Degrees | Decimal Degrees |
| NE Corner | Decimal Degrees | Decimal Degrees |
| SE Corner | Decimal Degrees | Decimal Degrees |
| SW Corner | Decimal Degrees | Decimal Degrees |

Make sure your ArcGIS Pro map is in the appropriate coordinate system for decimal degrees, add the .csv file, and use the [XY Table to Point](https://pro.arcgis.com/en/pro-app/latest/tool-reference/data-management/xy-table-to-point.htm) tool to add the coordinates to the map.

Refer to the [Georeferencing tools](https://pro.arcgis.com/en/pro-app/latest/help/data/imagery/georeferencing-tools.htm) in ArcGIS Pro. Using the Imagery basemap or Google Earth Pro, identify at least 10 control points to georeference the CORONA imagery. Use the Spline transformation for higher accuracy.

## QGIS

The procedure is similar in QGIS. To add the .csv file with coordinates to QGIS, use the Add Delimited Text Layer option under Layer.

Refer to the [Georeferencer](https://docs.qgis.org/3.34/en/docs/user_manual/working_with_raster/georeferencer.html) for instructions. The Georeferencer is available under Layers.

## Limitations

This procedure is simplified and uses a "rubber sheet" method that stretches imagery two dimensionally, generating a relatively accurate georeferenced image. However, this method does not take into account topography (three dimensional orthorectification). Using an SRTM elevation raster for georeferencing can improve results. Refer to the many publications by Casana and colleagues for more complex approaches.

## References

Casana, Jesse. 2020. Global-Scale Archaeological Prospection Using CORONA Satellite
Imagery: Automated, Crowd-Sourced, and Expert-led Approaches. Journal of Field
Archaeology 45. <https://doi.org/10.1080/00934690.2020.1713285>

Casana, J., D. Goodman, and C. Ferwerda. 2023. A wall or a road? A remote sensing-based 
investigation of fortifications on Rome's eastern frontier. Antiquity, 1-18. 
<https://doi.org/10.15184/aqy.2023.153>

Lindsay, Ian and Arshaluys Mkrtchyan. 2023. Free and Low-Cost Aerial Remote Sensing in
Archaeology: An Overview of Data Sources and Recent Applications in the South Caucasus.
Advances in Archaeological Practice 11(2):164-183. <https://doi.org/10.1017/aap.2023.3>

Casana, Jesse. 2014. New Approaches to Spatial Archaeometry: Applications from the Near
East. Near Eastern Archaeology 77(3):171-175. [JSTOR](https://www.jstor.org/stable/10.5615/neareastarch.77.3.0171)

Casana, Jesse and Jackson Cothren. 2013. The CORONA Atlas Project: Orthorectification of
CORONA Satellite Imagery and Regional-Scale Archaeological Exploration in the Near East.
In A Primer on Space Archaeology: In Observance of the 40th Anniversary of the World
Heritage Convention. SpringerBriefs in Archaeology 5. [PDF](https://www.academia.edu/4405141/The_CORONA_Atlas_Project_Orthorectification_of_CORONA_Satellite_Imagery_and_Regional_Scale_Archaeological_Exploration_in_the_Near_East)

Casana, Jesse, Jackson Cothren, and Tuna Kalayci. 2012. Swords into Ploughshares: 
Archaeological Applications of CORONA Satellite Imagery in the Near East. 
Internet Archaeology 32. <https://doi.org/10.11141/ia.32.2>

Zhang, Yixin, Ningyuan Wang, Jie He, Tao Zhang, Xin Zhang, and Hongpeng Luo. 2024. A Convenient Archaeological Ruins Identification Method through Elevation Information Extraction from CORONA Stereo Pairs. 
Heritage Science 12:322. <https://www.nature.com/articles/s40494-024-01427-7>