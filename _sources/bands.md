# 6. Multispectral Imagery

This lab introduces how to visualize and process multispectral and multiband imagery using Landsat satellite data.

## Introduction to Landsat Imagery

The Landsat program is a joint NASA and USGS program and the longest running satellite imagery enterprise in the U.S. and the world. The program has so far launched 9 satellites since 1972 with Landsat 1 through 2021 with Landsat 9. The spatial resolution varies from 15 to 100 m, and the temporal resolution (meaning the time it takes for the same location to be photographed) is approximately 16 days. Landsat imagery is divided into scenes each measuring approximately 185 x 185 km.

The main instrument consists of a multispectral scanner that records data in separate bands. The specific wavelength ranges differ across missions, but the multispectral scanners typically record information across the visible (blue, green, red), near infrared (NIR), short wave infrared (SWIR), and thermal infrared (TIR) spectrum.

```{image} /images/spectrum.jpg
:alt: Spectrum
:class: bg-primary mb-1
:width: 80%
:align: center
```

Photo credit: [Victor Blacus](https://commons.wikimedia.org/wiki/File%3AElectromagnetic-Spectrum.svg)

The most recent Landsat missions (7, 8, and 9) have the highest quality data. The bands and their corresponding wavelengths are shown below.

| Landsat-7 ETM+ Bands (µm) | |      | Landsat-8 OLI and *TIRS* Bands (µm)  | |       | Landsat 9 OLI and *TIRS-2* Bands (µm) |
| ---    | ---         | ---         | ---                  | ---           | ---     | ---                                   |
|        |             |             | 30 m Coastal/Aerosol | 0.435-0.451   | Band 1  | 0.433-0.453
| Band 1 | 30 m Blue   | 0.441-0.514 | 30 m Blue            | 0.452-0.512   | Band 2  | 0.450-0.515
| Band 2 | 30 m Green  | 0.519-0.601 | 30 m Green           | 0.533-0.590   | Band 3  | 0.525-0.600
| Band 3 | 30 m Red    | 0.631-0.692 | 30 m Red             | 0.636-0.673   | Band 4  | 0.630-0.680
| Band 4 | 30 m NIR    | 0.772-0.898 | 30 m NIR             | 0.851-0.879   | Band 5  | 0.845-0.885
| Band 5 | 30 m SWIR-1 | 1.547-1.749 | 30 m SWIR-1          | 1.566-1.651   | Band 6  | 1.560-1.660
| Band 6 | 60 m TIR    | 10.31-12.36 | *100 m TIR-1*        | *10.60-11.19* | Band 10 | *10.30-11.30*
|        |             |             | *100 m TIR-2*        | *11.50-12.51* | Band 11 | *11.50-12.50*
| Band 7 | 30 m SWIR-2 | 2.064-2.345 | 30 m SWIR-2          | 2.107-2.294   | Band 7  | 2.100-2.300
| Band 8 | 15 m Pan    | 0.515-0.896 | 15 m Pan             | 0.503-0.676   | Band 8  | 0.500-0.680
|        |             |             | 30 m Cirrus          | 1.363-1.384   | Band 9  | 1.360-1.390

Earlier missions (Landsat 1-5) might be useful for historic purposes, and their bands and corresponding wavelengths are available [here](https://en.wikipedia.org/wiki/Landsat_program). The Landsat 6 mission failed to reach orbit.

## Download Imagery

Imagery can be downloaded from [USGS Earth Explorer](https://earthexplorer.usgs.gov). Under Search Criteria, identify an area of interest and filter by Cloud Cover (under 10%). Under Data Sets, select Landsat Collection 2 Level-1 and Landsat 8-9 OLI/TIRS C2 L1, then click on Results. For this exercise, we will work with Landsat imagery around 16° 20' 23'' N and 90° 38' 27'' W. The Landsat 8 imagery acquired on 2017/4/3 is of a high quality with low cloud cover. Click on Product Options and download the Product Bundle. Extract all of the files to your desired folder.

This folder should contain several Geotiff files and metadata. Each band is stored as a separate Geotiff file. To view band combinations, we will have to load these bands together as a single composite, multiband image.

In ArcGIS Pro, we just have to add the combined .txt file or Raster Product (usually ______MTL.txt). We can then alter the visualization and band combination under Symbology.

In QGIS, we have to build a virtual raster. Go to Raster -> Miscellaneous -> Build Virtual Raster. Under Input layers, we will add only the 30 meter bands listed in the chart above: Bands 1, 2, 3, 4, 5, 6, 7, and 9, in order. Set Resolution to Highest and Place each input file into a separate band. The visualization and band combination can be edited under the Properties of the Virtual raster. Bilinear Resampling and an updated canvas (DRA in ArcGIS Pro) can improve visualization.

```{image} /images/rgb.jpg
:alt: RGB
:class: bg-primary mb-1
:width: 80%
:align: center
```

Landsat 8 and 9 data are delivered in a 16-bit unsigned format, while earlier Landsat imagery is delivered in an 8-bit unsigned format. To convert these digital numbers to reflectance values for subsequent analyses, refer to [scale factors](https://www.usgs.gov/faqs/how-do-i-use-a-scale-factor-landsat-level-2-science-products) provided by the USGS. For Landsat 8 and 9, the scale factor is 0.0000275 with an offset of -0.2. In Raster Calculator, we can use the following expression:

```
"16-bit raster" * 0.0000275 - 0.2
```

The values should be between 0 and 1, which multiplied by 100 gives the percent reflectance (0% to 100%). Some values may fall below 0 and above 1, representing noise. If necessary, these values can be removed using a conditional expression in Raster Calculator:

```
Con("Reflectance raster" < 0, 0.0001,  Con("b4reflectance.tif" > 1, 1, "b4reflectance.tif")
```

Values under 0 will be assigned a new value of 0.0001, values above 1 will be assigned a new value of 1, and all other values will remain unchanged. Alternatively, values under 0 can be assigned 0, or values under 0 and above 1 can be assigned NoData. I prefer to assign values under 0 a low value approaching 0 but not equaling 0. If values of 0 remain in the raster and algorithms are applied using division, values of 0 in the denominator would become NoData in these cases.

## Band Compositing

Multiband imagery can be visualized with different band combinations using the red, green, and blue additive color model. In this system, 3 bands can be viewed at one time, each displayed as red, green, or blue. A fourth channel, alpha, can be optionally blended on top of the 3 traditional bands.

Band composites can be referenced with the 3 numbers each representing the relevant band, in order of red, green, or blue. The band combination 4-3-2, therefore, indicates that Band 4, Band 3, and Band 2 will be displayed as red, green, and blue, respectively. In Landsat 8 and 9, Band 4 is red, Band 3 is green, and Band 2 is blue, meaning that when displayed as 4-3-2, we are viewing the visible spectrum or true color of the image.

Different materials, for example, vegetation, water, soil, rock, etc., reflect the electromagnetic spectrum differently. Spectral reflectance is the ratio of the amount of light reflected by a surface to the amount of light that hits it at different wavelengths. A spectral reflectance curve shows the variations in spectral reflectance across different wavelengths and materials.

The following spectral reflectance curves show reflectance values for different materials at different
wavelengths and Landsat bands (Landsat 7 above and Landsat 8 and 9 below):

```{image} /images/material.png
:alt: Reflectance1
:class: bg-primary mb-1
:width: 80%
:align: center
```

Photo credit: [SEOS eLearning](https://seos-project.eu/remotesensing/remotesensing-c01-p06.html)

```{image} /images/material2.png
:alt: Reflectance2
:class: bg-primary mb-1
:width: 80%
:align: center
```

Photo credit: [Wulf et al. 2015](http://dx.doi.org/10.13140/RG.2.1.2134.2249)

Here are some useful band combinations in Landsat 8 and 9:

|                                  |       |
| ---                              | ---   |
| Natural Color                    | 4-3-2 |
| Shortwave Infrared (Urban)       | 7-6-4 |
| Color Infrared (Vegetation)      | 5-4-3 |
| Agriculture                      | 6-5-2 |
| Atmospheric Penetration          | 7-6-5 |
| Healthy Vegetation               | 5-6-2 |
| Land/Water                       | 5-6-4 |
| Natural with Atmospheric Removal | 7-5-3 |
| Shortwave Infrared               | 7-5-4 |
| Vegetation Analysis              | 6-5-4 |
| Geology                          | 7-6-2 |
| Bathymetric                      | 4-3-1 |
| Forest Fires                     | 7-5-2 |
| Bare Earth                       | 6-3-2 |
| Vegetation/Water                 | 5-7-1 |
| Archaeology (Parcak/Egypt)       | 5-4-3 |
| Archaeology (Saturno/Guatemala)  | 5-3-2 |

See also: [ESRI](https://www.esri.com/arcgis-blog/products/product/imagery/band-combinations-for-landsat-8/), [NV5](https://www.nv5geospatialsoftware.com/Learn/Blogs/Blog-Details/the-many-band-combinations-of-landsat-8), [GIS Geography](https://gisgeography.com/landsat-8-bands-combinations/#:~:text=The%20two%20main%20sensors%20for,30%20and%2060%20meter%20resolution), [Open Weather](https://openweather.co.uk/blog/post/satellite-imagery-landsat-8-and-its-band-combinations) 

Here is a false color composite using Bands 5-3-2:

```{image} /images/532.jpg
:alt: 5-3-2
:class: bg-primary mb-1
:width: 80%
:align: center
```

## Band Ratios

Computing band ratios can also highlight features. Band ratios are calculated by dividing a band with a high reflectance value for a specific material by the band with a low reflectance value for that same 
material using Raster Calculator (especially when the ratios for other materials 
will be neutral). In Landsat 8, the Band 5 / Band 4 ratio will highlight vegetation, 
Band 7 / Band 1 will highlight soil, and Band 1 / Band 5 or Band 2 / Band 6 will 
highlight water.

Here is a ratio of Band 5 / Band 4, with vegetation on the white end of the color scheme:

```{image} /images/ratio5-4.jpg
:alt: Ratio 5-4
:class: bg-primary mb-1
:width: 80%
:align: center
```

Band ratios can also eliminate issues discerning features in high shadow areas. In the following image deciduous and coniferous forest have different spectral reflectance in sunlit vs. shaded areas, but when the ratio is calculated, this discrepancy is fixed.

```{image} /images/material3.png
:alt: Reflectance3
:class: bg-primary mb-1
:width: 80%
:align: center
```
Photo credit: Middlebury Remote Sensing

Raster Calculator in QGIS or ArcGIS Pro can be used to calculate these ratios.

## Vegetation indices (NDVI)

Building off the idea of band ratios, several indices can be calculated by performing map algebra to combine different bands. The Normalized Difference Vegetation Index (NDVI) is an example that transforms multiband data into a single raster that represents no vegetation (-1) to high vegetation (1).

In ArcGIS Pro, the NDVI can be calculated by selecting the .txt file of combined bands in the Contents, going to Imagery, clicking the Indices dropdown, and selecting NDVI.

Alternatively, we can calculate the NDVI in Raster Calculator using the following formula: 

$$
\text{NDVI} = {\text{NIR Band 5 - Red Band 4} \over {\text{NIR Band 5 + Red Band 4}}}
$$ 

We can visualize the NDVI with a green color scheme.

```{image} /images/ndvi.jpg
:alt: NDVI
:class: bg-primary mb-1
:width: 80%
:align: center
```

## Principal Component Analysis

Principal components analysis calculates variability through several iterations, with each iteration showing less variability.

In ArcGIS Pro run the Principal Components Analysis tool by loading the individual raster bands and selecting the number of principal component iteration (this value should match the number of inputs). Change the output to a folder rather than a geodatabase, and do not enter a filetype extension after the filename if you want to produce a raster for each iteration. The tool will load a new multiband raster containing all the principal components. You can manually load each individual component from the same folder.

In QGIS, go to Plugins, Manage and Install Plugins, search for Semi-Automatic Classification Plugin, and install. There should now be an SCP menu in QGIS (try restarting QGIS if you don’t see it). If you receive an error message, you may need to upgrade some dependencies. If so, open the OSGEO4W Shell and run the following command:

```
pip3 install --upgrade remotior-sensus scikit-learn torch
```

Under SCP, click Band Set. From the Single band list, load the individual bands (you may need to click refresh and make sure the bands are in your Layers contents). Each band is weighted equally (1) by default. In this case, our rasters all have the same range, so we do not need to weigh them. 

Click Band Processing, then PCA, select Number of Components and choose a number of iterations. Click Run.

Note that ArcGIS Pro and QGIS may produce different results, but variability will decrease with each iteration.

The following image shows the first order PCA, second order PCA, and third order PCA from left to right.

```{image} /images/pca1.jpg
:alt: PCA
:class: bg-primary mb-1
:width: 80%
:align: center
```

The following image shows the PCA composite, with PCA1, PCA2, and PCA3 shown as RGB.

```{image} /images/pcacomposite.jpg
:alt: PCA Composite
:class: bg-primary mb-1
:width: 80%
:align: center
```

## Texture Analysis

Texture analysis is used in remote sensing to highlight differences between materials. In QGIS, the GRASS tool [r.texture](https://grass.osgeo.org/grass-stable/manuals/r.texture.html) calculates several metrics, variance being the most common method used.

Run r.texture, select the input raster, select Textural Measurement Method(s) (var = variance), select size of moving window (must be an odd integer, 3 is the default), and choose an output folder. Note that this tool inputs the folder as a string, so do not use any spaces in your folder path.

The following image is a texture (variance) analysis of the first order Principal Component Analysis, highlighting the differences between different types of land cover:

```{image} /images/texture.jpg
:alt: Texture
:class: bg-primary mb-1
:width: 80%
:align: center
```

## Image Sharpening

All Landsat 8 bands are at 30 m resolution, except for Band 8 (Panchromatic), which is at 15 m resolution. The higher resolution Band 8 can be used to sharpen the imagery of the other bands. Pansharpening is typically done on three-band composites (see above). Each of these three bands is typically pansharpened separately and then combined into a new composite. The following formulae apply to an RGB composite (4-3-2), but any three bands can be used. Raster Calculator can be used to generate the pansharpened bands; be sure to specify the output resolution to be the same value as the panchromatic band (in this case 15 meters).

<b>The Brovey Transformation</b>

$$
\text{New Band 4} = {\text{Band 4} \over \text{Band 4 + Band 3 + Band 2}} * \text{Panchromatic (Band 8)}
$$

$$
\text{New Band 3} = {\text{Band 3} \over \text{Band 4 + Band 3 + Band 2}} * \text{Band 8}
$$

$$
\text{New Band 2} = {\text{Band 2} \over \text{Band 4 + Band 3 + Band 2}} * \text{Band 8}
$$

The new bands can then be combined into a new, pansharpened composite. The following images compare the original 30 meter RGB composite (left) with the pansharpened 15 meter RGB composite (right):

```{image} /images/panvsorig.jpg
:alt: Original vs Pan
:class: bg-primary mb-1
:width: 80%
:align: center
```
<br>
<b>Simple Mean Transformation</b>
<br>

$$
\text{New Band 4} = {\text{0.5 * (Band 4 + Band 8)}}
$$

$$
\text{New Band 3} = {\text{0.5 * (Band 3 + Band 8)}}
$$

$$
\text{New Band 2} = {\text{0.5 * (Band 2 + Band 8)}}
$$
<br>
<b>Additional Transformations</b>
<br>

Other transformations include Principal Components Analysis (PCA) pansharpening; Intensity, Hue, and saturation (IHS) pansharpening; and Gram-Schmidt pansharpening. These techniques are available in ArcGIS Pro's [Create Pansharpened Raster Dataset](https://pro.arcgis.com/en/pro-app/latest/help/analysis/raster-functions/fundamentals-of-pan-sharpening-pro.htm) tool and in the QGIS/GRASS [i.pansharpen](https://grass.osgeo.org/grass-stable/manuals/i.pansharpen.html) tool.

[More info on pansharpening](https://earthobservatory.nasa.gov/blogs/earthmatters/2017/06/13/how-to-pan-sharpen-landsat-imagery/#:~:text=Panchromatic%20sharpening%20(pan%2Dsharpening),usually%20only%20the%20visible%20bands)

## Creating a Final Composite

Multiple bands (including any of the original bands and derivatives) can be combined into a new multiband image. Theoretically, an infinite number of bands could be combined into a composite, but researchers should select the most useful bands for their application. Although the human eye can only view 3 bands at once (with perhaps a 4th alpha channel), classification algorithms can easily work with multidimensional data.

In ArcGIS Pro, the Composite Bands tool can combine several bands into a single file. In QGIS (GRASS), the r.composite tool can be used to combine only 3 bands, or bands can be combined into a virtual raster. 

Building the following composite, we will use the following variables:

1. PCA1, PCA2, PCA3 refer to the 1st, 2nd, and 3rd order of the Principal Components Analysis, respectively.
2. vis – composite of visible bands (4, 3, 2)
3. ir – composite of infrared bands (7, 6, 5)
4. sb – San Bartolo composite of near infrared, green, and blue (5, 3, 2)
5. Var – texture variance index, 3 x 3 neighborhood
6. NDVI – Normalized Difference Vegetation Index

Chowdhury and Schneider (2004) recommended for southern Yucatan a 7-band composite: PCA1(vis), PCA1 (ir), PCA2 (ir), Var(PCA1(vis)), Var(PCA1(ir)), Var(PCA2(ir)), NDVI

Griffin (2012) recommended for Petén a 3-band composite: PCA1(sb), Var(PCA1(sb)), NDVI.

Using Griffin (2012)'s recommendation, we generate the following results:

```{image} /images/rgb.png
:alt: Comparison
:class: bg-primary mb-1
:width: 80%
:align: center
```

True Color RGB (left) and 5-3-2 composite (right), Southeastern Chiapas, Mexico  
4/3/17, 16:23:16 Landsat 8,  
CORNER_UL_LAT = 16.95093  
CORNER_UL_LON = -91.54527

```{image} /images/pca.png
:alt: PCA
:class: bg-primary mb-1
:width: 80%
:align: center
```

First order Principle Components Analysis of 5-3-2 composite (left), Textural variance of PCA1 (center), NDVI (right)

```{image} /images/composite.png
:alt: Composite
:class: bg-primary mb-1
:width: 80%
:align: center
```

Preliminary interpretation:  
Final composite: Var (red)-NDVI (green)-PCA1 (blue)  
Green -- vegetation  
1. Light green -- healthy vegetation
2. Dark green -- recently burned areas
3. Greenish white -- lower vegetation
4. Whitish green -- agriculture
5. Greenish brown -- murky water
Blue -- water, urban, and bare earth
1. Dark blue -- water
2. Bright blue -- sandy beaches
3. Blue to magenta -- exposed bedrock
4. Various shades of blue -- urban and land use
Red -- shorelines and immediate land use changes

## Required Readings

Davis, D. S., Domic, A. I., Manahira, G., & Douglass, K. 2024. Geophysics Elucidate Long-term Socio-ecological Dynamics of Foraging, Pastoralism, and Mixed Subsistence Strategies on SW Madagascar. Journal of Anthropological Archaeology 75(101612). <https://doi.org/10.1016/j.jaa.2024.101612>

Estanqueiro, Marta, Aleksandar Šalamon, Helen Lewis, Barry Molloy, and Dragan Jovanović. 2023. 
Sentinel-2 Imagery Analyses for Archaeological Site Detection: An Application to Late Bronze Age Settlements in Serbian Banat, Southern Carpathian Basin. Journal of Archaeological Science: Reports 51:104188.
<https://doi.org/10.1016/j.jasrep.2023.104188>

Garrison, Thomas G., Stephen D. Houston, Charles Golden, Takeshi Inomata, Zachary
Nelson, and Jessica Munson. 2008. Evaluating the Use of IKONOS Satellite Imagery in 
Lowland Maya Settlement Archaeology. Journal of Archaeological Science 35(10):2770-2777.
<https://doi.org/10.1016/j.jas.2008.05.003>

Parcak, Sarah. 2009. Satellite Remote Sensing for Archaeology. Routledge, New York.

## Additional Readings

Amidon, Will. Middlebury Remote Sensing. 
<https://www.youtube.com/channel/UCgNXU17K63E2fzWxYv1-_4w/featured>

Chowdhury, Rinku Roy, and Laura Schneider. 2004. Land Cover and Land Use: 
Classification and Change Analysis. In Integrated Land-Change Science and Tropical 
Deforestation in the Southern Yucatan: Final Frontiers, ed. B.L. Turner II, 
Jacqueline Geoghegan, and David R. Foster, 105–143. Oxford: Oxford University Press.
<https://doi.org/10.1093/oso/9780199245307.003.0015>

Griffin, Robert Edward. 2012. The Carrying Capacity of Ancient Maya Swidden 
Maize Cultivation: A Case Study in the Region Around San Bartolo, Petén, Guatemala. 
Unpublished PhD dissertation, Pennsylvania State University. <https://etda.libraries.psu.edu/catalog/15390>

Saturno, William, Thomas L. Sever, Daniel E. Irwin, Burgess F. Howell, and Thomas G.
Garrison. 2007. Putting Us on the Map: Remote Sensing Investigation of the Ancient Maya Landscape. In Remote Sensing in Archaeology, edited by James Wiseman and Farouk
El-Baz, pp. 137-160. Springer, New York. <https://link.springer.com/chapter/10.1007/0-387-44455-6_6>
