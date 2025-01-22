# 11. Machine Learning Approaches in Remote Sensing

This lab uses a modified approach to [image classification using neural networks](https://towardsdatascience.com/neural-network-for-satellite-data-classification-using-tensorflow-in-python-a13bcf38f3e1) in the TensorFlow Python library.

## Install Python Libraries

We will use [Google Colab](https://colab.research.google.com/) to run the Python code for this exercise. Doing so does not require any local installations on your computer, but you will need a Google account. Alternatively, you can download [Python](https://www.python.org/) and run the code in [Jupyter Notebook](https://jupyter.org/), for example. If you are running the code locally and need to locate Python, you can use the following code:

```Python
import sys

locate_python = sys.exec_prefix

print(locate_python)
```

To install the Python libraries locally, in the Command Prompt navigate to the Scripts folder in the Python location folder and run the following lines to install the necessary libraries.

```
pip install pyrsgis
```

```
pip install scikit-learn
```

```
pip install "numpy<2.0"
```

```
pip install Tensorflow
```

Alternatively, in Google Colab, run the same code with an exclamation point (!) before the commands. This symbol serves as an escape symbol to tell Google Colab the code is a command and not Python.

```
!pip install pyrsgis
```

The other libraries should already be installed in Google Colab, but if not, run the same commands above with the exclamation point in front.

Once installed, import the following (either in Jupyter Notebook or Google Colab, now no exclamation point is needed because from now on we are working strictly in Python):

```Python
from pyrsgis import raster
```

In Google Colab, run the following command to "print working directory:"

```
!pwd
```

In Jupyter Notebook, run the following code to locate your working directory:

```Python
import os
os.getcwd()
```

And to change your working directory:

```Python
os.chdir("folderpath")
```

The result should be /content.

## Prepare Data

For this exercise, we need training data and test data, all in raster format. The training data will be 1) a multiband raster surface representing elevation and elevation derivatives and 2) an annotated surface representing archaeological features. The test data will be a separate multiband raster surface representing elevation and elevation derivatives that has not yet been annotated. We will build a model to identify archaeological features given similar input topographical data.

We will use lidar data from NASA G-LiHT's 2013 flights over southeastern Mexico. Download the [AMIGACarb_Yuc_North_2_GLAS_Apr2013_l3s454.las](https://glihtdata.gsfc.nasa.gov/files/G-LiHT/AMIGACarb_Yuc_North_2_GLAS_Apr2013/lidar/las/AMIGACarb_Yuc_North_2_GLAS_Apr2013_l3s454.las.gz) and [AMIGACarb_Yuc_North_2_GLAS_Apr2023_l3s455.las](https://glihtdata.gsfc.nasa.gov/files/G-LiHT/AMIGACarb_Yuc_North_2_GLAS_Apr2013/lidar/las/AMIGACarb_Yuc_North_2_GLAS_Apr2013_l3s455.las.gz) files.

All data must be in the same format with the same bit depth. The training data (multiband raster and annotated surface) must have the exact same coordinate system, spatial extent, and dimensions. 

In QGIS, load the DEM raster and the annotated features. Use the Rasterize (vector to raster) tool to convert the features to a raster. Change the fixed value of burn to 1, output raster size units to Georeferenced units, and the width and height resolution to match the DEM raster. Under Output extent, select Calculate from Layer, and select the DEM raster.

In ArcGIS Pro, run the Polygon to Raster tool to convert the features to raster. Under Environments, select the DEM raster under Extent (Extent of a Layer) and Snap Raster. The tool assigns each structure a unique value, so run the Slice tool with number of output zones set to 1, and starting value for output set to 1.

## Define Variables and Reshape Data

Before training the model, we need to upload the training and test data, and reformat them for the machine learning algorithm. If working in Google Colab, mount your Google Drive:

```Python
from google.colab import drive
drive.mount('/content/drive')
```

In the lefthand Files window, you should be able to navigate to your Drive files under content/drive/MyDrive.


Now we can define our variables in Google Colab or Jupyter Notebook, where inputcomp is our input training multiband raster composite surface, inputannot is a raster surface of our annotations, and testcomp is our testing multiband raster composite surface for after we train the model:

```Python
inputcomp = '/content/drive/MyDrive/MLfiles/s416composite.tif'
inputannot = '/content/drive/MyDrive/MLfiles/s416strs.tif'
testcomp = '/content/drive/MyDrive/MLfiles/s415composite.tif'
```

Now we reshape the data into an array (essentially a list of values assigned to a category) and print the results:

```Python
ds1, featuresinput = raster.read(inputcomp, bands = 'all')
ds2, labelinput = raster.read(inputannot, bands = 1)
ds3, featurestest = raster.read(testcomp, bands = 'all')

print("Composite Input: ", featuresinput.shape)
print("Annotated Input: ", labelinput.shape)
print("Test Data: ", featurestest.shape)
```

Finally, we reshape the data into a two-dimensional array (essentially making each pixel it's own row in a table):

```Python
from pyrsgis.convert import changeDimension

featuresinput = changeDimension(featuresinput)
labelinput = changeDimension(labelinput)
featurestest = changeDimension(featurestest)
nBands = featuresinput.shape[1]
labelinput = (labelinput == 1).astype(int)

print(nBands)
print("Composite Input: ", featuresinput.shape)
print("Annotated Input: ", labelinput.shape)
print("Test Data: ", featurestest.shape)
```

## Training the Model

We are now ready to train our model. First, we split the training data into training (60%) and test (40%) samples to avoid overfitting the data:

```Python
from sklearn.model_selection import train_test_split

xTrain, xTest, yTrain, yTest = train_test_split(featuresinput, labelinput, test_size = 0.4, random_state = 42)

print(xTrain.shape)
print(yTrain.shape)

print(xTest.shape)
print(yTest.shape)
```

Now we normalize the data to ensure all data ranges between 0 and 1. To normalize data, use the following equation:

$$
{\text{Normalization}} = {{\text{Input - min}} \over {\text{max - min}}}
$$

For 8-bit data:

$$
{\text{Normalization}} = {{\text{Input - 0}} \over {\text{255 - 0}}}
$$

Which is the following in code:

```Python
xTrain = xTrain/255.0
xTest = xTest/255.0
featurestest = featurestest/255.0
```

And we additionally reshape one more time to a three-dimensional array:

```Python
xTrain = xTrain.reshape((xTrain.shape[0], 1, xTrain.shape[1]))
xTest = xTest.reshape((xTest.shape[0], 1, xTest.shape[1]))
featurestest = featurestest.reshape((featurestest.shape[0],1,featurestest.shape[1]))

print(xTrain.shape, xTest.shape, featurestest.shape)
```

Now we can define the model:

```Python
from tensorflow import keras

model = keras.Sequential([
	keras.layers.Flatten(input_shape=(1, nBands)),
	keras.layers.Dense(14, activation='relu'),
	keras.layers.Dense(2, activation='softmax')])

model.compile(optimizer="adam", loss="sparse_categorical_crossentropy", metrics=["accuracy"])
```

And finally, we can run the model:

```Python
model.fit(xTrain, yTrain, epochs=2)
```

## Assessing the Results

Once the model has been trained, we can test the accuracy of the model on the test data:

```Python
from sklearn.metrics import confusion_matrix, precision_score, recall_score

yTestPredicted = model.predict(xTest)
yTestPredicted = yTestPredicted[:,1]

yTestPredicted = (yTestPredicted>0.5).astype(int)
cMatrix = confusion_matrix(yTest, yTestPredicted)
pScore = precision_score(yTest, yTestPredicted)
rScore = recall_score(yTest, yTestPredicted)

print(cMatrix)
print("\nP-score: %.3f, R-Score: %.3f" % (pScore, rScore))
```

We can view the confusion matrix with the pandas library:

```Python
import pandas as pd
from sklearn.metrics import confusion_matrix, ConfusionMatrixDisplay

cm = confusion_matrix(yTest, yTestPredicted)
disp = ConfusionMatrixDisplay(confusion_matrix=cm)
disp.plot()
```

## Predicting the Test Data

Now we can use the trained model on brand new data for predictions:

```Python
import numpy as np

predicted = model.predict(featurestest)
predicted = predicted[:,1]
```

And we can convert back to raster:

```Python
prediction = np.reshape(predicted, (ds3.RasterYSize, ds3.RasterXSize))
```

And export for viewing:

```Python
outFile = '/content/drive/MyDrive/MLfiles/prediction.tif'
raster.export(prediction, ds3, filename=outFile, dtype='float')
```

## Readings

Bickler, Simon H. 2021. Machine Learning Arrives in Archaeology. Advances in Archaeological
Practice 9(2):186-191. <https://doi.org/10.1017/aap.2021.6>

Casini, Luca, Nicolò Marchetti, Andrea Montanucci, Valentina Orrù, and Marco Roccetti. 2023.
A Human–AI Collaboration Workflow for Archaeological Sites Detection. Scientific Reports
13:8699. <https://www.nature.com/articles/s41598-023-36015-5>

Character, Leila, Agustin Ortiz, Jr., Tim Beach, and Sheryl Luzzadder-Beach. 2021.
Archaeologic Machine Learning for Shipwreck Detection Using Lidar and Sonar. 
Remote Sensing 13(9):1759. <https://doi.org/10.3390/rs13091759>

Davis, D.S., J. Cook Hale, N. L. Hale, T. Z. Johnston, and M. C. Sanger. 2024. Bathymetric LiDAR and Semi-Automated Feature Extraction Assist Underwater Archaeological Surveys. Archaeological Prospection 31(2):171-186. <https://doi.org/10.1002/arp.1939>

Gattiglia, Gabriele. 2025. Managing Artificial Intelligence in Archeology. An Overview. Journal of Cultural Heritage 71:225-233. <https://doi.org/10.1016/j.culher.2024.11.020>