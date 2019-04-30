const myDataSource = {
    "chart": {
        "caption": "Exercise today",
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
      width: 380,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource,
  };
  
  export default exerciseConfigs;