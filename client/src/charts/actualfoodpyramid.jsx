const myDataSource = {
    "chart": {
      theme: "fusion",
      caption: "Actual food pyramid",
      showLegend: "1",
      showLabels: "0",
      subcaption: "As per www.safefood.eu",
      showvalues: "1",
      numbersuffix: "%",
      plottooltext: "You ate <b>$dataValue</b> of <b>$label</b>"
    },
    "data": [
      {
        label: "Food and drinks high in fat, sugar and salt",
        value: "1"
      },
      {
        label: "Fats, spreads and oils",
        value: "3"
      },
      {
        label: "Meat, poultry, fish, eggs, beans and nuts",
        value: "13"
      },
      {
        label: "Milk, yoghurt and cheese",
        value: "18"
      },
      {
        label: "Wholemeal cereals and breads, potatoes, pasta and rice",
        value: "25"
      },
      {
        label: "Vegetables, salad and fruit",
        value: "40"
      }
    ],
  };

  const actualfoodPyramid = {
    type: "pyramid",
    width: 400,
    height: 500,
    dataFormat: "JSON",
    dataSource: myDataSource
};

export default actualfoodPyramid;
