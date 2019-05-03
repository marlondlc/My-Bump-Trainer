const myDataSource = {
    "chart": {
        "caption": "How much food have you eaten today",
        "subCaption": "In Calories",
        "xAxisName": "Time",
        "yAxisName": "Calories (Cal)",
        "useplotgradientcolor": "5",
        "plotgradientcolor": "#ff694f",
        "plotfillangle": "100",
        "plotfillalpha": "80",
        "plotfillratio": "0,80",
        "theme": "fusion",
    },
  };

  const chartConfigs = {
      type: 'splinearea',
      width: '400',
      height: '500',
      dataFormat: 'json',
      dataSource: myDataSource,
  };

  export default chartConfigs;