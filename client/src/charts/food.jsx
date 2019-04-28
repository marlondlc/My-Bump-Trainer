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
    "data": [
      {
          "label": "6am",
          "value": "0"
      },      
      {
          "label": "8am",
          "value": "440"
      },  
      {
          "label": "10am",
          "value": "880"
      },
      {
          "label": "12pm",
          "value": "880"
        },
        {
          "label": "2pm",
          "value": "1200"
        },
        {
          "label": "4pm",
          "value": "1640"
        },
        {
          "label": "6pm",
          "value": "1860"
        },
        {
          "label": "8pm",
          "value": "2200"
        },
        {
          "label": "10pm",
          "value": "2200",
        }
    ]
  };
  
  const chartConfigs = {
      type: 'splinearea',
      color: "#00CFE7",
      width: 600,
      height: 400,
      dataFormat: 'json',
      dataSource: myDataSource,
  };
  
  export default chartConfigs;