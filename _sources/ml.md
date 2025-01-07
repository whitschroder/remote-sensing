# 11. Machine Learning Approaches in Remote Sensing

This lab uses a modified approach to [image classification using neural networks](https://towardsdatascience.com/neural-network-for-satellite-data-classification-using-tensorflow-in-python-a13bcf38f3e1) in the TensorFlow Python library.

## Install Python Libraries

We will use [Jupyter Notebook](https://jupyter.org/) to run the Python code for this exercise. Your computer should already have Python installed. Run the following code in Jupyter Notebook to locate Python.

```Python
import sys

locate_python = sys.exec_prefix

print(locate_python)
```

Now in the Command Prompt navigate to the Scripts folder in the Python location folder and run the following lines to install the necessary libraries.

```
pip install pyrsgis
```

```
pip install scikit-learn
```

```
pip install numpy
```

```
pip install Tensorflow
```

## Prepare Data

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