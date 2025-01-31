# Bonus: Point Cloud Classification in ArcGIS Pro with PointCNN

This workflow uses deep learning to classify LiDAR point clouds using [PointCNN](https://developers.arcgis.com/python/latest/guide/point-cloud-segmentation-using-pointcnn/) in the ArcGIS Pro arcgis.learn module.

1. Update ArcGIS Pro
2. Install Deep Learning Libraries for the correct version of ArcGIS Pro: <https://github.com/Esri/deep-learning-frameworks>
3. Prepare point cloud data:
4. Merge all polygon annotations into a single part polygon (using the editing tool [Merge](https://pro.arcgis.com/en/pro-app/3.3/help/editing/merge-features-into-one-feature.htm) after selecting all rows in the attribute table or [Select Layer by Attribute](https://pro.arcgis.com/en/pro-app/latest/tool-reference/data-management/select-layer-by-attribute.htm)).
5. Use [las2las](https://downloads.rapidlasso.de/html/las2las_README.html) (open source) to filter out ground classified points.
6. Use [lasclip](https://downloads.rapidlasso.de/html/lasclip_README.html) (licensed) with -classify 20, -interior, and -poly with the polygon annotation or use [Change LAS Class Codes](https://pro.arcgis.com/en/pro-app/latest/tool-reference/3d-analyst/change-las-class-codes.htm) in ArcGIS Pro.
7. Create 2 polygons: one to define training (about 60-70%) and validation (30-40%) areas. The polygons should extend outside of the las file area and not overlap each other.
8. Use [lasclip](https://downloads.rapidlasso.de/html/lasclip_README.html) to generate separate input point cloud (training) and validation point cloud.
9. Run the [Prepare Point Cloud Training Data](https://pro.arcgis.com/en/pro-app/latest/tool-reference/3d-analyst/prepare-point-cloud-training-data.htm) tool (block size = 250 m).
10. Run the [Train Point Cloud Classification Model](https://pro.arcgis.com/en/pro-app/latest/tool-reference/3d-analyst/train-point-cloud-classification-model.htm) tool. This step may take a long time depending on the selected maximum number of epochs (default = 25).