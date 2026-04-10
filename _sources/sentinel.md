# Bonus: Sentinel-2 Data in Google Earth Engine

Landsat data has a 30 m resolution, up to 15 m resolution with pansharpening. Archaeologists might prefer using Sentinel-2 data, which can have up to a 10 m resolution. The process to import Sentinel-2 data into Google Earth Engine is the same as for Landsat data.

## Import Data

Here we assume you have defined a region using the geometry and renamed it to region. Next, we will import Sentinel-2 imagery. Under Search places and datasets..., type Sentinel, and select Harmonized Sentinel-2 MSI: MultiSpectral Instrument, Level-2A (SR) and click the Import button. Change the name of the variable under Imports to sentinel. 

The following code will center the map over your point when the code is run.

```JavaScript
Map.centerObject(region, 7);
```

## Generate a Cloud Free Composite

Next we will define some variables, including a date range and amount of cloud cover.

```JavaScript
var start = '2023-01-01';
var end = '2023-12-31';

var cloud_max = 30;
```

Imagery will now be filtered to dates within the year 2023 with less than 30% cloud cover using the following code.

Next, filter the imagery by cloud cover, date, region, and apply the offset of 0.0001 to convert to surface reflectance.

```JavaScript
var sentinelfiltered = sentinel
  .filterDate(start,end)
  .filterBounds(region)
  .filterMetadata('CLOUDY_PIXEL_PERCENTAGE','less_than',cloud_max);
  
print(sentinelfiltered);

// Function to mask clouds using the Sentinel-2 QA band
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

//apply cloud mask function and offset function
var sentinel_masked = sentinelfiltered.map(maskS2clouds);
print(sentinel_masked);
```

Now add the Sentinel-2 composite to the map.

```JavaScript
//create Sentinel median composite and display
var composite = sentinel_masked.median().clip(region);
Map.addLayer(composite, {bands: ['B4', 'B3', 'B2'], min: 0, max: 0.15}, 'Sentinel 2 composite');
```

This composite can now be edited and used the same as the Landsat data from the previous [section](https://whitschroder.github.io/remote-sensing/gee.html).