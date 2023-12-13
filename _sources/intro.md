# ANG: 6930 Archaeological and Anthropological Remote Sensing
**University of Florida**  
**Spring 2024**

```{image} /images/Intensity.png
:alt: Intensity
:class: bg-primary mb-1
:width: 80%
:align: center
```

<br>

**Instructor**  
Whittaker Schroder  
Turlington B129  
(352) 294-6396  
<wschroder@ufl.edu>

**Description**  
Remote sensing is the collection and analysis of spatial data through the 
observation and scanning of large areas from a distance. The applications of remote
sensing in archaeology are extensive, including site and feature prospection, mapping, 
topographic analysis, hydrological analysis, 3D modeling, subsurface imaging, 
vegetation, soil classification, among others. This course discusses the history and 
theory of the use of remote sensing in archaeology. The class will explore the use and 
analysis of remote sensing datasets from aerial photography, satellite imagery, 
laser scanning, radar, and thermal sensors to interpret archaeological sites, landscapes, 
land cover change, land use, and other archaeological and environmental applications. 
In addition to assessing case studies of remote sensing applications in archaeology, 
students will learn how to collect, preprocess, process, visualize, and analyze data. 
The course will also address ethical considerations in conducting remote sensing research.

**Course Objectives**  
By the end of the course, students will:
1. be able to explain the principles, fundamentals, and applications of remote sensing for spatial analysis in archaeology and other disciplines.
2. know how to access and analyze satellite and other remote sensing data for archaeological and environmental applications.
3. become familiar with processing remote sensing data across several platforms, including ArcGIS Pro, QGIS, ENVI, Agisoft Metashape, LAStools, Google Earth Engine, R, and Python.
4. be able to evaluate and develop workflows for specific remote sensing analyses, from data collection to preprocessing, classification, and accuracy assessment.
5. consider the ethical ramifications of their work and the challenges facing the use and collection of remote sensing data in the twenty-first century.

**Prerequisites**  
This class has no prerequisites, but some previous knowledge of GIS, coding, and photography will be beneficial.

**Class Meetings**  
Wednesday, Periods 2–4, 8:30–11:30 am  
Turlington 2318

**Office Hours**  
Wednesday 1:00–3:00 pm  
Turlington B129  
<https://ufl.zoom.us/j/8991776578>

**Required Book**  
Tempfli, Klaus, Norman Kerle, Gerrit C. Huurneman, Lucas L.F. Janssen (editors). Principles of Remote Sensing: An Introductory Textbook. <https://webapps.itc.utwente.nl/librarywww/papers_2009/general/principlesremotesensing.pdf>

This textbook is available for free online.

**Additional Required Readings**  
Additional readings and case studies will be provided each week.

**Grading**  
|            |            |            |            |      |
| ---        | ---        | ---        | ---        | ---  | 
| A  93-100% | B+ 87-89.9 | C+ 77-79.9 | D+ 67-69.9 | E<60 |
| A- 90-92.9 | B  83-86.9 | C  73-76.9 | D  63-66.9 |      |
|            | B- 80-82.9 | C- 70-72.9 | D- 60-62.9 |      |

<https://catalog.ufl.edu/UGRD/academic-regulations/grades-grading-policies>
|                              |     |
| ---                          | --- |
| Attendance and Participation | 10% |
| Labs                         | 35% |
| Project Site Selection       | 5%  |
| Project Abstract             | 10% |
| Peer Review Feedback         | 10% |
| Final Project                | 30% |

**Attendance and Participation**  
Attendance is crucial to get the most out of this course. 
If you must miss a class meeting, please let me know by email 
or in person as soon as possible. I encourage you to discuss 
what you missed with another student or attend my office hours. 
Depending on the activity you missed, you may have an alternate 
reading or assignment to make up the credit. Participation includes 
engagement during lectures and contributions to discussions. 
Requirements for class attendance and make-up exams, assignments, 
and other work in this course are consistent with university policies 
(<https://catalog.ufl.edu/UGRD/academic-regulations/attendance-policies>).

**Readings**  
A goal of this course is to create a resource that students can use to learn 
about remote sensing. In addition to assigned readings, students will bring 
at least one outside reading of their choice to each class and present the 
study in the context of that week’s topic.

**Labs**  
Every class period will have a lab component to introduce topics and techniques. 
Lab work will continue outside of class and will be presented the following week.
Students will keep a working portfolio of their lab work to be presented every week.

**Final Project** 
Students will develop a project throughout the semester. After the first class meeting
students will select a research site/area, ideally related to their dissertation or 
thesis project, to be posted as a Google Earth .kml file to the class blog. The next 
phase of the project will be the crafting of a research question. The final project will 
be a proposal and preliminary analysis of your research area, using methods and tools 
learned in class. If the data needed to address your research question are not available, 
discuss how you would realistically plan to acquire such data. Students will present 
project updates and conduct peer review of their classmates’ projects prior to 
final submission.

**Academic Honesty and Integrity**  
Please be familiar with the University of Florida’s Student Honor Code: 
<https://sccr.dso.ufl.edu/policies/student-honor-code-student-conduct-code>

**Special Accommodations**  
The process for requesting special accommodations is described at 
<https://disability.ufl.edu/get-started>, including registering with the 
Disability Resource Center in Reid Hall and requesting an accommodation 
letter to be presented to the instructor.

**Online Course Evaluation**  
Students are expected to provide professional and respectful feedback on 
the quality of instruction in this course by completing course evaluations 
online via GatorEvals. Guidance on how to give feedback in a professional 
and respectful manner is available at <https://gatorevals.aa.ufl.edu/students>. 
Students will be notified when the evaluation period opens and can complete 
evaluations through the email they receive from GatorEvals, in their Canvas 
course menu under GatorEvals, or via <https://ufl.bluera.com/ufl>. Summaries of 
course evaluation results are available to students at 
<https://gatorevals.aa.ufl.edu/public-results>.

# Course Schedule

|||
| --- | --- |
| Week 1 <br> January 10  | Course Introduction <br> Introduction to Remote Sensing and spatial analysis (pattern and process) <br> History of Remote Sensing <br> GPS and GNSS <br> Review GIS <br> Readings: LKC ch. 1, Dale and Fortin 2014 |
| Week 2 <br> January 17  | Remote Sensing Foundations <br> Principles of photography <br> Introduction to sensors <br> Aerial photography and digital image processing <br> Reading: LKC ch. 2 <br> Lab 1: Interpreting aerial photography using stereoscopes, <br> taking measurements; <br> viewing aerial imagery in ArcGIS Pro and ENVI |
| Week 3 <br> January 24  | Drone Mission Planning <br> Photogrammetry Structure from Motion (SfM) <br> Ground control points <br> Reading: LKC ch. 3 <br> Lab 2: Drone Mission Planning in QGIS <br> Project Abstracts Due |
| Week 4 <br> January 31  | Orthorectification Orthophotos and digital surface models <br> Point clouds and interpolation <br> LAS files <br> Lab 3: Photogrammetry Workflow in Agisoft Metashape |
| Week 5 <br> February 7  | Sources for lower resolution digital elevation models <br> Introduction to topographic analysis <br> Lab 4: Topographic Analysis in QGIS |
| Week 6 <br> February 14 | Leveraging historic satellite and aerial photos <br> Orthorectification and georeferencing <br> Lab 5: Orthorectifying CORONA Satellite Imagery |
| Week 7 <br> February 21 | Introduction to multispectral satellite imagery <br> Lab 6: Landsat Band Ratios and Spectral Indices | 
| Week 8 <br> February 28 | Land cover classification <br> Lab 7: Supervised and Unsupervised Land Cover Classification in QGIS |
| Week 9 <br> March 6	  | Remotely-sensed big data <br> Introduction to machine learning <br> Decision trees and random forest algorithms <br> Lab 8: Manipulating Remotely-Sensed Big Data in Google Earth Engine |
| Week 10 <br> March 13   | **Spring Break** |
| Week 11 <br> March 20   | Lidar for Archaeology <br> Data collection <br> Download datasets <br> Visualization and ground classification <br> Lab 9: Visualizing and Processing Lidar Point Clouds in R with the lidR Package |
| Week 12 <br> March 27   | Drone lidar <br> Data preprocessing <br> Raster derivatives for topographic analysis <br> Lab 10: Lidar Processing and Analysis with LAStools |
| Week 13 <br> April 3    | Machine learning approaches in aerial remote sensing <br> TensorFlow, Python, and Google Colab <br> Lab 11: Machine Learning Approaches in Remote Sensing |
| Week 14 <br> April 10   | Subsurface Remote Sensing and Geophysics |
| Week 15 <br> April 17   | Ground Penetrating Radar processing <br> Guest Lecture |
| Week 16 <br> April 24   | Ethics in Remote Sensing |
| May 1	                  | **Reading Day** |

# Table of Contents

```{tableofcontents}
```

# Course Bibliography

Fundamentals of Remote Sensing. A Canada Centre for Remote Sensing Tutorial. 
<https://www.nrcan.gc.ca/sites/www.nrcan.gc.ca/files/earthsciences/pdf/resource/tutor/
fundam/pdf/fundamentals_e.pdf>

ESRI. Introduction to Imagery and Remote Sensing. 
<https://introduction-to-remote-sensing-learngis.hub.arcgis.com/pages/at-a-glance>

Tempfli, Klaus, Norman Kerle, Gerrit C. Huurneman, Lucas L.F. Janssen (editors). 
Principles of Remote Sensing: An Introductory Textbook. 
<https://webapps.itc.utwente.nl/librarywww/papers_2009/general/principlesremotesensing.pdf>