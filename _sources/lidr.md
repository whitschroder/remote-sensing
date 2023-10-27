# Visualizing and Processing Lidar Point Clouds in R with the lidR Package

In this lab, students will learn how to load, visualize, and process lidar point clouds
in R. Before proceeding, download the latest versions of R and R Studio at the following
link: <https://posit.co/download/rstudio-desktop>.

Download the [Relief Visualization Toolbox](https://www.zrc-sazu.si/en/rvt).

## Install libraries

In R Studio, install the following packages:

```R
# The lidR package is used for processing las point clouds

install.packages("lidR", dependencies = TRUE)

# The following packages are used for several remote sensing 
# applications and for generating raster surfaces

install.packages("RStoolbox")
install.packages("terra")
install.packages("raster")
install.packages("rgdal")

# ggplot is used to produce publication quality images
install.packages("ggplot2")

# RColorBrewer loads several useful color palettes for data visualization
install.packages("RColorBrewer")
```


```{seealso}
Coming soon
```

## Readings

Kokalj, Ž., and M. Somrak. 2019. Why Not a Single Image? Combining Visualizations to 
Facilitate Fieldwork and On-Screen Mapping. Remote Sensing 11(7):747.
[https://doi.org/10.3390/rs11070747]

Štular, Benjamin and Edisa Lozić. 2020. Comparison of Filters for Archaeology-Specific
Ground Extraction from Airborne LiDAR Point Clouds. Remote Sensing 12(18):3025.
[https://doi.org/10.3390/rs12183025]

Zakšek, K., K. Oštir, Ž Kokalj. 2011. Sky-View Factor as a Relief Visualization 
Technique. Remote Sensing 3(2):398-415. [https://doi.org/10.3390/rs3020398]