// const dataList = this.props.waterEntries.map(waterEntry => ( 
//     label={waterEntry.drunk_at}
//     value={waterEntry.volume} 
// ));

// const dataList = [
//   {
//       "label": "6am",
//       "value": "0"
//   },      
//   {
//       "label": "8am",
//       "value": "440"
//   },  
//   {
//       "label": "10am",
//       "value": "880"
//   },
//   {
//       "label": "12pm",
//       "value": "880"
//     },
//     {
//       "label": "2pm",
//       "value": "1200"
//     },
//     {
//       "label": "4pm",
//       "value": "1640"
//     },
//     {
//       "label": "6pm",
//       "value": "1860"
//     },
//     {
//       "label": "8pm",
//       "value": "2200"
//     },
//     {
//       "label": "10pm",
//       "value": "2200"
//     }
// ]


const myDataSource = {
  "chart": {
      "caption": "How much water you've drank today",
      "subCaption": "In mL",
      "xAxisName": "Time",
      "yAxisName": "Water (mL)",  
      "theme": "fusion"
  },
};

const chartConfigs = {
    type: 'splinearea',
    width: 380,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

export default chartConfigs;