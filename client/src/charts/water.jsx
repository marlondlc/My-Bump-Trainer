const myDataSource = {
  "chart": {
      "caption": "How much water you've drank today",
      "subCaption": "In mL",
      "xAxisName": "Time",
      "yAxisName": "Water (mL)",  
      "theme": "fusion"
  },
};

const waterConfigs = {
    type: 'splinearea',
    width: 380,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

export default waterConfigs;