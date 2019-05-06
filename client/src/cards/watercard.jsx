// // This needs to be updated so waterentries are being taken from state rather than props

// import React from 'react';
// import axios from 'axios';
// import GenericCard from './genericcard';
// import Dialog from '../forms/waterdialog';
// import waterConfigs from "../charts/water.jsx";
// import waterCylinder from "../charts/watercylinder";
// import FusionCharts from 'fusioncharts';
// import Charts from 'fusioncharts/fusioncharts.charts';
// import ReactFC from 'react-fusioncharts';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
// import widgets from 'fusioncharts/fusioncharts.widgets';
// import {U1dayWaterEntries, U1weekWaterEntries, U1monthWaterEntries, U1totalWaterDay, U1averageWaterWeek, U1averageWaterMonth} from'../data/User1/U1waterEntries';
// import {U2dayWaterEntries, U2weekWaterEntries, U2monthWaterEntries, U2totalWaterDay, U2averageWaterWeek, U2averageWaterMonth} from'../data/User2/U2waterEntries';

// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
// widgets(FusionCharts);

// // We're not using the axios yet so the state is not being used to pass data to the charts
// class WaterCard extends React.Component {
//   state = {
//     water_entries: []
//   }
//       // this comment will be used for the map function listing elements of water data to the chart
//      // <div>
//       //   <span>TESTING JSON RESPONSE</span>
//       //   <ul>
//       //   { this.state.water_entries.map(water => <li>{water_entries}</li>)}
//       //   </ul>
//       // </div>

//   componentDidMount() {
//     // console.log(this.props.timePeriod)
//     // console.log('this is the function', waterWeekAverage)
//     axios.get(`/api/v1/water_entries/${this.props.timePeriod ? this.props.timePeriod : ""}`)
//       .then(res => {
//         const water_entries = res.data ;
//         console.log(water_entries)
//         this.setState({ water_entries });
//       })
//       .catch(error => console.log(error));
//   }



//   // Create function that will transform the data iam ngetting from axios/get -- 

//   render() {

//     //---- Here this is determining which data is going to be passed to the chart depending on the timeperiod. ----
//         // **map function to return an object containing every water entry in function of every hours**
//     const test = this.state.water_entries.map(e => {
//       return {
//         hours:  (new Date(e.drunk_at)).getUTCHours(),
//         value: e.volume

//       }
//     })

//     console.log(test)
//        // map function to get every hours water_entries
//     // const test2 = this.state.water_entries.map(e => (new Date(e.drunk_at)).getUTCHours())
//     // console.log('HOUR ENTRIES', test2)
//     const timePeriod = this.props.timePeriod;
//     const sumvolumedaily = this.state.water_entries.map(e => e.volume).reduce((a, b) => a + b, 0)
//     // const averagevolumedaily = this.state.water_entries.map(e => e.water_entries).reduce((a, b) =>
    
//     // )

//     const average = sumvolumedaily / (this.state.water_entries).length

//     console.log("test average ml per day", average)

//     // let currentUser = false;
//     // let currentUserId;
//     // if (this.props.currentUser) {
//     //   currentUser = true;
//     //   currentUserId = this.props.currentUser.id;
//     // }



    
//     console.log('MAP DATE', sumvolumedaily)
//     let averageWater;
//     let waterEntries;
//     if (timePeriod === 'day') {
//       averageWater = sumvolumedaily / 1000;
//       waterEntries = test;  
//     } else if (timePeriod === 'week') {
//       averageWater = averageWaterWeek; 
//       waterEntries = weekWaterEntries;
//     } else if (timePeriod === 'month') {
//       averageWater = averageWaterMonth;
//       waterEntries = monthWaterEntries;
//     }

//     // if (currentUser) {
//     //   if (currentUserId === 6) {
//     //     if (timePeriod === 'day') {
//     //       averageWater = U1totalWaterDay;
//     //       waterEntries = U1dayWaterEntries;  
//     //     } else if (timePeriod === 'week') {
//     //       averageWater = U1averageWaterWeek; 
//     //       waterEntries = U1weekWaterEntries;
//     //     } else if (timePeriod === 'month') {
//     //       averageWater = U1averageWaterMonth;
//     //       waterEntries = U1monthWaterEntries;
//     //     }
//     //   } else {
//     //     if (timePeriod === 'day') {
//     //       averageWater = U2totalWaterDay;
//     //       waterEntries = U2dayWaterEntries;  
//     //     } else if (timePeriod === 'week') {
//     //       averageWater = U2averageWaterWeek; 
//     //       waterEntries = U2weekWaterEntries;
//     //     } else if (timePeriod === 'month') {
//     //       averageWater = U2averageWaterMonth;
//     //       waterEntries = U2monthWaterEntries;
//     //     }
//     //   }
    
//     // This sets the data for the charts
//     waterCylinder.dataSource.value = averageWater
//     waterCylinder.dataSource.chart.plottooltext = `Water average per day ${averageWater}`
//     waterConfigs.dataSource.data = waterEntries 


//     // This sets the charts to variables which can be passed to the generic chart
//     const chart1 = <ReactFC  {...waterCylinder} />
//     const chart2 = <ReactFC {...waterConfigs} plottooltext/>

//     // This is the popup where people can enter water
//     const dialog = <Dialog />

//     // This compares the consumed with the recommended to create a messsage that can be passed to generic chart
//     let message;
//     if ((2.3 - averageWater) === 0) {
//         message = 'Wohoo you are meeting the recommendations.' ;
//     } else if ((2.3 - averageWater) < 0) {
//       message = 'You are exceeding expectations. Remember your bladder can only hold so much!' 
//     } else {
//         message = `Try drinking an extra ${Math.round((2.3 - averageWater) * 1000/440)} bottle(s).`
//     }

//     return (
//       // This passes variables to the generic card component which renders the card
//       <GenericCard 
//         type="water" 
//         message={message} 
//         timePeriod={this.props.timePeriod} 
//         dialog={dialog} 
//         averageWater={averageWater} 
//         chart1={chart1} 
//         chart2={chart2}
//       />
//     )
//   }
// }

// export default WaterCard;

// This needs to be updated so waterentries are being taken from state rather than props

import React from 'react';
import axios from 'axios';
import GenericCard from './genericcard';
import Dialog from '../forms/waterdialog';
import waterConfigs from "../charts/water.jsx";
import waterCylinder from "../charts/watercylinder";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/fusioncharts.theme.gammel';
import widgets from 'fusioncharts/fusioncharts.widgets';
import {U1weekWaterEntries, U1monthWaterEntries, U1averageWaterWeek, U1averageWaterMonth} from'../data/User1/U1waterEntries';
import {U2weekWaterEntries, U2monthWaterEntries, U2averageWaterWeek, U2averageWaterMonth} from'../data/User2/U2waterEntries';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme, GammelTheme);
widgets(FusionCharts);

// We're not using the axios yet so the state is not being used to pass data to the charts
class WaterCard extends React.Component {
  state = {
    water_entries: []
  }
      // this comment will be used for the map function listing elements of water data to the chart
     // <div>
      //   <span>TESTING JSON RESPONSE</span>
      //   <ul>
      //   { this.state.water_entries.map(water => <li>{water_entries}</li>)}
      //   </ul>
      // </div>

  componentDidMount() {
    console.log(this.props.timePeriod)
    // console.log('this is the function', waterWeekAverage)
    axios.get(`/api/v1/water_entries/${this.props.timePeriod ? this.props.timePeriod : ""}`)
      .then(res => {
        const water_entries = res.data ;
        console.log(water_entries)
        this.setState({ water_entries });
      })
      .catch(error => console.log(error));
  }



  // Create function that will transform the data iam ngetting from axios/get -- 

  render() {

  

    //---- Here this is determining which data is going to be passed to the chart depending on the timeperiod. ----
        // **map function to return an object containing every water entry in function of every hours**
    const test = this.state.water_entries.map(e => {
      return {
        hours:  (new Date(e.drunk_at)).getUTCHours(),
        value: e.volume

      }
    })

    console.log(test)
       // map function to get every hours water_entries
    // const test2 = this.state.water_entries.map(e => (new Date(e.drunk_at)).getUTCHours())
    // console.log('HOUR ENTRIES', test2)
    const timePeriod = this.props.timePeriod;
    // maps and sums all entries daily for water with .reduce()
    const sumvolumedaily = this.state.water_entries.map(e => e.volume).reduce((a, b) => a + b, 0)
    // const averagevolumedaily = this.state.water_entries.map(e => e.water_entries).reduce((a, b) =>
    
    // )

    const average = sumvolumedaily / (this.state.water_entries).length

    console.log("test average ml per day", average)



    
    console.log('MAP DATE', sumvolumedaily)

    let averageWater;
    let waterEntries;
    let currentUser = false;
    let currentUserId;
    // if (this.props.currentUser) {
    //   currentUser = true;
    //   currentUserId = this.props.currentUser.id;
    // }
    // console.log(currentUser, currentUserId)

      if (currentUserId === 6) {
        if (timePeriod === 'day') {
          averageWater = sumvolumedaily / 1000;
          waterEntries = test 
        } else if (timePeriod === 'week') {
          averageWater = U1averageWaterWeek; 
          waterEntries = U1weekWaterEntries;
        } else if (timePeriod === 'month') {
          averageWater = U1averageWaterMonth;
          waterEntries = U1monthWaterEntries;
        }
      } else {
        if (timePeriod === 'day') {
          averageWater = sumvolumedaily / 1000;
          waterEntries = test;  
        } else if (timePeriod === 'week') {
          averageWater = U2averageWaterWeek; 
          waterEntries = U2weekWaterEntries;
        } else if (timePeriod === 'month') {
          averageWater = U2averageWaterMonth;
          waterEntries = U2monthWaterEntries;
        }
      }
    
      
    // This sets the data for the charts
    waterCylinder.dataSource.value = averageWater
    waterCylinder.dataSource.chart.plottooltext = `Water average per day ${averageWater}`
    waterConfigs.dataSource.data = waterEntries 


    // This sets the charts to variables which can be passed to the generic chart
    const chart1 = <ReactFC  {...waterCylinder} />
    const chart2 = <ReactFC {...waterConfigs} />

    // This is the popup where people can enter water
    const dialog = <Dialog />

    // This compares the consumed with the recommended to create a messsage that can be passed to generic chart
    let message;
    if ((2.3 - averageWater) <= 0) {
        message = 'Wohoo you are meeting the recommendations.' ;
    } else {
        message = `This ${timePeriod} you are ${Math.round((2.3 - averageWater) * 1000)} mL under the recommendations.`
    }

    return (
      // This passes variables to the generic card component which renders the card
      <GenericCard 
        type="water" 
        message={message} 
        timePeriod={this.props.timePeriod} 
        dialog={dialog} 
        averageWater={averageWater} 
        chart1={chart1} 
        chart2={chart2}
      />
    )
  }
}

export default WaterCard;