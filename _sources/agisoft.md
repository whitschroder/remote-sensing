# 3. Digital Surface Models and Orthoimagery in Agisoft Metashape

In this lab, students will learn how to develop a workflow in Agisoft Metashape (previously
known as Agisoft Photoscan) to load, process, and export spatial data from aerial
photographs using photogrammetry or Structure from Motion (SfM). Nearly all steps of the workflow are under the Workflow drop-down menu.

## Add and Align Photos

Given sufficient overlap across photos, the first step is to Add Photos, followed by Align Photos. This step identifies features that appear in overlapping images to create a sparse three dimensional point cloud.

Under the Align Photos menu, accuracy refers to the resolution of the photos used in building the model. High accuracy uses the full resolution of the original photo, Medium accuracy downsamples the resolution by 50%, while Low accuracy downsamples the resolution by 25%. Highest accuracy upsamples or interpolates photos to a higher resolution by 100% and is generally only necessary for close range photogrammetry of small objects with detailed textures. Lower accuracy can considerably reduce processing time.

Generic preselection should only be used if the photos were taken in a systematic and orderd way where photo 1 overlaps with photo 2, photo 3 with photo 4, etc. If the photos randomly overlap, then this option should be disabled. Similarly, Reference preselection identifies overlapping photos using the GPS metadata of photos, and is therefore only available if the photos are geotagged.

Reset current alignment should be selected if the photos have been previously aligned and need to be realigned.

Key points are significant points or features identified in a photo, distinguishable by contrast, color, or texture, for example. Tie points are key points that have been identified in more than one photo and will be used to align the images. The default key and tie point limit values are usually acceptable but can be increased if the alignment step fails. The default key point limit is 40,000 but can be increased to 50,000, or even 100,000. Tie point limit can be increased but will significantly slow down processing. Counterintuitively, assigning a tie point limit of 0 is the highest setting, placing no limit on the number of tie points.

If the background of photos has been masked, the masks can be applied to key points or tie points. The key points option should be used only if all photos have been masked, while the tie points option can be used if only a few photos have been masked.

Exclude stationary tie points should be used if certain objects in the background of photos are static across several images, for example, if an object is being rotated on a turntable, or if people or other objects are in the background.

Guided image matching specifies the key point limit by megapixel rather than by image when very high resolution imagery is used.

Adaptive camera model fitting will take into account camera parameters in the metadata of images to reduce distortion. This option should generally be checked unless the user would like to use manual settings. Additionally, historic imagery will not have the necessary metadata.

## Build Point Cloud

After aligning photos and building a sparse point cloud, the next step densifies the point cloud. The Quality used should be equivalent to or lower than the accuracy used in the previous step. Mild depth filtering is the most appropriate option. Calculate point colors will assign RGB colors to the point cloud based on photos, and Calculate point confidence will assign a confidence level to the generated points. These options will allow users to filter points based on color and/or confidence in later steps. Ideally, both options should be selected but disabling them will reduce processing time.

## Georeference the Project

If your photos are not geotagged, choose at least 3 points in the photos to assign GPS coordinates. Add markers on the relevant photos (e.g., point 1, point 2, point 3, etc.).

Go to the Reference pane and choose Settings. Change Local Coordinates to an appropriate coordinate system and click OK. Check the box next to each of the markers and update the coordinates for each point. Click on Update Transform. In the Workspace pane, an [R] should have now appeared next to the Chunk, meaning that it is georeferenced.

## Build DEM

The Build DEM step creates an elevation surface. Note that if using above ground points, the resulting surface is a digital surface model. Source data can be either Point cloud or Depth maps (preferably Point cloud). Using Tie points as source data will generate a DEM from the sparse point cloud. The default settings, including coordinate system and pixel size, should generally be left unchanged. When exporting the data, these settings can be changed. The default settings will generate imagery at the highest resolution possible.

## Build Orthomosaic

The next step builds an orthomosaic image by stitching the photos together over the DEM. The default settings, including coordinate system and pixel size, should generally be left unchanged. When exporting the data, these settings can be changed. The default settings will generate imagery at the highest resolution possible.

## Export DEM and Orthomosaic

The DEM and/or orthomosaic can be exported as a .tif file outside of Metashape. At this stage, the user can change the coordinate system and resolution to suit their needs. The point cloud can also be exported as an .laz file.

## Build Mesh

The next step, building a mesh, is optional, creating essentially a triangulated irregular network (TIN) to interpolate values between the points in the dense cloud. This step is the most processing intensive.

The mesh can be generated from the dense point cloud, but large datasets will require very high RAM, estimated [here](http://www.agisoft.com/pdf/tips_and_tricks/PhotoScan_Memory_Requirements.pdf). A preferable option is to use depth maps, which are produced during an intermediate step in building the dense point cloud. This option should be selected only if Mild depth filtering was used in the previous step, and if the same level of Quality is selected in the point cloud and mesh steps. Face count should also match the Quality selection. Note that at the Build Mesh step, selecting lower qualities will not actually reduce processing time, as no matter what level is selected, the mesh is generated at the highest quality and then decimated.

Surface type has two options: Arbitrary (3D) and Height field (2.5D). Arbitrary (3D) will create a smoother three dimensional model. Specifically, Arbitrary (3D) mode can have multiple height values (Z) given an X and Y coordinate, whereas Height field (2.5D) will have a single height value (Z), generally the maximum value, for every X and Y coordinate. For geospatial applications and generating a top down digital surface or elevation model, Height field (2.5D) is sufficient, but if a true 3D model is needed, Arbitrary (3D) mode will be necessary, requiring much higher processing.

Interpolation should be enabled, and Calculate vertex colors will assign RGB values from the photos. Finally, if using depth maps to build the mesh, the Reuse depth maps option should be selected if they were generated in the previous step. If not selected, the depth maps will be generated again, adding unnecessary processing.

## Build Texture

This step is also optional and stretches a texture over the model based on stitching the images together. Sometimes the shaded mesh produces better results than the texture. This step tends to be the least computationally intensive step, and for that reason is worth running if the mesh has already been generated. The mesh and textures can also be exported to several formats outside of Metashape.

## References

Magnani, Matthew, Matthew Douglass, Whittaker Schroder, Jonathan Reeves, and David R. Braun. 2020. The Digital Revolution to Come: Photogrammetry in Archaeological Practice. American Antiquity 85(4):737-760. <https://digitalcommons.library.umaine.edu/ant_facpub/65/>

McCarthy, John. 2014. Multi-image photogrammetry as a practical tool for cultural heritage survey and community engagement. Journal of Archaeological Science 43:175-185. <https://doi.org/10.1016/j.jas.2014.01.010>

Roosevelt, Christopher H. 2015. Excavation is <s>Destruction</s> Digitization: Advances in Archaeological Practice. Journal of Field Archaeology 40:325-346. <https://doi.org/10.1179/2042458215Y.0000000004>

Yastikli, Naci. 2007. Documentation of Cultural Heritage Using Digital Photogrammetry and Laser Scanning. Journal of Cultural Heritage 8(4):423-427. <https://doi.org/10.1016/j.culher.2007.06.003>