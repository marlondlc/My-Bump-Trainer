const myDataSource = {
    "chart": {
      theme: "fusion",
      showLegend: "1",
      showLabels: "0",
      caption: "Your food pyramid",
      // subcaption: "Based on the number of servings you've eaten",
      showvalues: "1",
      numbersuffix: "%",
      plottooltext: "You ate <b>$dataValue</b> of <b>$label</b>"
    }
  };

  const foodPyramid = {
    type: "pyramid",
    width: '400',
    height: '500',
    dataFormat: "JSON",
    dataSource: myDataSource
};

export default foodPyramid;
