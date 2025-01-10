# 10. Annotating Lidar Data

In this lab we will annotate archaeological features in lidar data. In the next lab, we will prepare our annotations to be entered as training data into a machine learning model.

## Feature Editing in ArcGIS Pro

Review the editing tools in [ArcGIS Pro](https://pro.arcgis.com/en/pro-app/latest/help/editing/a-quick-tour-of-editing.htm).

## Feature Editing in QGIS

Review the editing tools in [QGIS](https://docs.qgis.org/3.34/en/docs/user_manual/working_with_vector/editing_geometry_attributes.html).

## Developing a Feature Typology

Before annotating features, we need to develop a consistent typology of feature classes. The most basic classes might be additive (convex) vs. subtractive (concave) features. Additive features are built features that were created by adding material to the natural terrain (for example, buildings, berms, mounds, walls, etc.). Subtractive features are excavated features that were created by removing material (for example, ditches, reservoirs, canals, etc.). These typologies must be informed by local knowledge and ground-based research.

At Quirigua, Guatemala, Wendy Ashmore (2007) produced a useful architectural and archaeological feature classification:

```{image} /images/ashmore.jpeg
:alt: Ashmore
:class: bg-primary mb-1
:width: 80%
:align: center
```

Other citations below discuss other typologies.

## Annotation Methods

The next step in annotation involves deciding how features should be annotated. The most basic approach uses points to mark features.

We can then expand to using lines to annotate linear features.

Finally, we can use polygons to define the shape of feature footprints.

## Required Readings

Stanton, T. W., T. Ardren, N.C. Barth, J.C. Fernandez-Diaz, P. Rohrer, D. Meyer, S.J. Miller, A.
Magnoni, and M. Pérez. 2020. Structure, Density, Area, and Volume as Complementary Tools to Understand Maya Settlement: An Analysis of Lidar Data along the Great Road between Coba and Yaxuná. Journal of Archaeological
Science: Reports, 29. <https://doi.org/10.1016/j.jasrep.2019.102178>

Rostain, Stéphen et al. 2024. Two Thousand Years of Garden Urbanism in the Upper Amazon. Science 383:6679. <https://doi.org/10.1126/science.adi6317>.

Schroder, Whittaker et al. 2020. The Lowland Maya Settlement Landscape: Environmental LiDAR and Ecology. Journal of Archaeological Science: Reports 33:102543. <https://doi.org/10.1016/j.jasrep.2020.102543>

## Additional Citations

Ashmore, Wendy. 2007. Settlement Archaeology at Quirigua. University of Pennsylvania Museum of Archaeology and Anthropology, Philadelphia.