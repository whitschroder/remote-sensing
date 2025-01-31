# 10. Annotating Lidar Data

In this lab we will annotate archaeological features in lidar data. In the next lab, we will prepare our annotations to be entered as training data into a machine learning model.

## Feature Editing in ArcGIS Pro

Review the editing tools in [ArcGIS Pro](https://pro.arcgis.com/en/pro-app/latest/help/editing/a-quick-tour-of-editing.htm).

## Feature Editing in QGIS

Review the editing tools in [QGIS](https://docs.qgis.org/3.34/en/docs/user_manual/working_with_vector/editing_geometry_attributes.html).

## Developing a Feature Typology

Before annotating features, we need to develop a consistent typology of feature classes. The most basic classes might be additive (convex) vs. subtractive (concave) features. Additive features are built features that were created by adding material to the natural terrain (for example, buildings, berms, mounds, walls, etc.). Subtractive features are excavated features that were created by removing material (for example, ditches, reservoirs, canals, etc.). These typologies must be informed by local knowledge and ground-based research.

At Quirigua, Guatemala, Wendy Ashmore (2007) produced a useful architectural and archaeological feature classification:

I. Stratum (abbreviated S.):
Matrix deposited by natural means (such as alluviation), each definable layer designated a stratum.

II. Feature (abbreviated F.):
Entity resulting from human activity not recoverable from its matrix without destroying its integrity: divided into constructed and cumulative features.

A. Constructed feature

1. Architecture:
Originally visible constructed features built on or up from ground level; divided into subcategories of structures and pavements: note that individual components of architecture, such as walls, fill, stairs, or floors, are designated units (abbreviated U.)

a. Structure (abbreviated Str.):
Three-dimensional architecture: divided into operational categories of platforms, substructures, superstructures, and buildings: note that structure may be retained as an operational term when subcategories cannot be determined.

i. Substructure (abbreviated Sub-str.):
Elevated mass supporting construction.

ii. Superstructure (abbreviated Sup-str.):
Construction supported by a substructure.

iii. Building (abbreviated Bldg.):
Generic term for enclosed and roofed space; may correspond to superstructure, but here designation implies lack of substructure.

iv. Platform (abbreviated Pl.):
Elevated mass supporting or basal to one of more substructures or to one or more monuments.

b. Pavement (abbreviated Pvmt.):
Two-dimensional architecture (prepared surface, either paved or modified ground surface), divided into operational categories: plaza and court; note that pavement may be retained as an operational category when subcategories cannot be determined.

i. Plaza:
Pavement enclosed by structures on two or fewer sides.

ii. Court:
Pavement enclosed by structures on three or more sides.

2. Deposit:
Feature built into architecture or under ground level; divided into sealed and unsealed categories.

a. Unsealed deposit:
Feature built under ground level, but not intentionally sealed; divided into operational categories: wells, pits.

i. Well:
Shaft excavated to water table; usually lined.

ii. Pit:
Intrusive excavation; usually unlined.

b. Sealed deposit:
Intentionally sealed deposits; divided into operational categories: burials, caches, special deposits.

i. Burial (abbreviated Bu.):
Interment with evidence of human remains.

ii. Cache (abbreviated Ca.):
Interment without human remains.

iii. Special Deposit (abbreviated S.D.):
Sealed deposit of undetermined nature.

B. Cumulative Feature:
Feature without evidence of deliberate building activity, resulting from accretion or subtraction; divided into use-related and transposed categories.

1. Use-related Cumulative Feature:
Cumulative feature resulting from undisturbed and initial extraction or deposition of matrix, artifacts, and/or ecofacts produced by human activity; divided into operational categories: primary deposits and negative features.

a. Primary Deposit (abbreviated Pr. D.):
Unsealed deposit of use-related debris (e.g. workshop debris <i>in situ</i>; cf. Schiffer's [1972] <i>de facto</i> refuse).

b. Negative Feature (abbreviated N.F.):
Unsealed deposit resulting from cumulative extraction of matrix (e.g. quarry).

2. Transposed Cumulative Features:
Cumulative features resulting from secondary deposition of matrix, artifacts, and/or ecofacts; designated by a single operational term: midden (abbreviated Mdn.).

C. Disturbed Feature (abbreviated D.F.):
Any feature disturbed to a degree sufficient to prevent determination of original form or provenience.

Other citations below discuss other typologies.

## Annotation Methods

The next step in annotation involves deciding how features should be annotated. The most basic approach uses points to mark features.

We can then expand to using lines to annotate linear features.

Finally, we can use polygons to define the shape of feature footprints.

## References

Stanton, T. W., T. Ardren, N.C. Barth, J.C. Fernandez-Diaz, P. Rohrer, D. Meyer, S.J. Miller, A.
Magnoni, and M. Pérez. 2020. Structure, Density, Area, and Volume as Complementary Tools to Understand Maya Settlement: An Analysis of Lidar Data along the Great Road between Coba and Yaxuná. Journal of Archaeological
Science: Reports, 29. <https://doi.org/10.1016/j.jasrep.2019.102178>

Rostain, Stéphen et al. 2024. Two Thousand Years of Garden Urbanism in the Upper Amazon. Science 383:6679. <https://doi.org/10.1126/science.adi6317>.

Schroder, Whittaker et al. 2020. The Lowland Maya Settlement Landscape: Environmental LiDAR and Ecology. Journal of Archaeological Science: Reports 33:102543. <https://doi.org/10.1016/j.jasrep.2020.102543>

Ashmore, Wendy. 2007. Settlement Archaeology at Quirigua. University of Pennsylvania Museum of Archaeology and Anthropology, Philadelphia.