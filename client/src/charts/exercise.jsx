// This configures the exercise over time chart. Data is passed to this page from the exercise card.
const myDataSource = {
    "chart": {
        "caption": "Your Exercise",
        "subCaption": "In Minutes",
        "xAxisName": "Time",
        "yAxisName": "Minutes",
        "useplotgradientcolor": "5",
        "plotgradientcolor": "#ffc107",
        "plotfillangle": "100",
        "plotfillalpha": "80",
        "plotfillratio": "0,80",
        "theme": "fusion",
    },
  };

  const exerciseConfigs = {
      type: 'column2d',
      width: 400,
      height: 500,
      dataFormat: 'json',
      dataSource: myDataSource,
  };

  export default exerciseConfigs;