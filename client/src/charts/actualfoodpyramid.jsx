// This configures the actual foodpyramid. Data is passed to this page from the data recommendations via the foodcard

const myDataSource = {
    "chart": {
      theme: "fusion",
      caption: "Actual food pyramid",
      showLegend: "1",
      showLabels: "0",
      showvalues: "1",
      numbersuffix: "%",
      plottooltext: "You ate <b>$dataValue</b> of <b>$label</b>"
    }
  };

  const actualfoodPyramid = {
    type: "pyramid",
    width: 400,
    height: 500,
    dataFormat: "JSON",
    dataSource: myDataSource
};

export default actualfoodPyramid;
