# Bonus: Photogrammetry Workflow in RealityCapture

This lab follows the same workflow as in Agisoft Metashape using RealityCapture, which is a free alternative software. Instructions for installing RealityCapture are available [here](https://whitschroder.github.io/remote-sensing/install.html).

## Layout

Adjust the layout to remove the default Help screen. Layout options are available at the top left or top right of the RealityCapture menu. Also turn on the Settings pane.

## Add Imagery

Under Workflow, click on Inputs in the Add imagery section of the main toolbar. Navigate to your images and add them. 

## Align Images

In the Process section of the Workflow menu, click Align images.

## Calculate Model

Next, click Calculate Model using Normal detail. Optionally, click Simplify after generating the model to reduce the size and complexity of the mesh (decimate).

## Texture and Colorize

The next two steps, Texture and Colorize and the imagery over the model.

## Coordinate System and Ground Control Points

In the Application Settings menu, click on Coordinate systems. Change the Project coordinate system to the appropriate option and click Yes to match the output coordinate system. The vertical coordinate system units must match the horizontal coordinate system units (i.e. select a planar coordinate system such as UTM). In Google Earth Pro, select at least 3 areas for ground control points in your imagery. Enter these values into an Excel spreadsheet in the following format:

| Point | X   | Y   | Z   |
| ---   | --- | --- | --- |
| 1     | x coordinate | y coordinate | z coordinate |
| 2     | x coordinate | y coordinate | z coordinate |
| ...   | ...          | ...          | ...          |

Save the spreadsheet as a .csv file. In the Import & Metadata section of the Workflow menu, click Ground Control, navigate to your .csv file and open. Select the appropriate File format (Name, X, Y, Alt), Values separator (comma), and whether to Ignore first line (only if the table has a header).

## Ortho Projection

In the final option in the Process section of the Workflow menu, click Ortho Projection. In the Ortho Projection Tool menu, click Render.

## Export

In the Output section of the Workflow menu, click Export. Under Ortho Projections, DTM and DSM, select Digital Surface Model. 

