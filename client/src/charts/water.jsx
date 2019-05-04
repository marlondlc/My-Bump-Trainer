const myDataSource = {
  "chart": {
      "caption": "How much water you've drank",
      "subCaption": "In mL",
      "xAxisName": "Time",
      "yAxisName": "Water (mL)",
      "theme": "fusion"
  },
};

const waterConfigs = {
    type: 'splinearea',
    width: 380,
    height: 500,
    dataFormat: 'json',
    dataSource: myDataSource,
};

export default waterConfigs;