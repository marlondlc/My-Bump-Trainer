const myDataSource = {
    "chart": {
      theme: "fusion",
      caption: "Your food pyramid",
      subcaption: "Based on the number of servings you've eaten",
      showvalues: "1",
      numbersuffix: "%",
      plottooltext: "You ate <b>$dataValue</b> of <b>$label</b>"
    }
  };

  const foodPyramid = {
    type: "pyramid",
    width: 600,
    height: 400,
    dataFormat: "JSON",
    dataSource: myDataSource
};

export default foodPyramid;
