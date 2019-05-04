// import React from 'react';
// import {dayFoodEntries, weekFoodEntries, monthFoodEntries, totalFoodDay, averageFoodWeek, averageFoodMonth, dayFoodPyramid, weekFoodPyramid, monthFoodPyramid} from'../data/foodEntries';
// import {foodPyramidRec, caloriesPerDayRec} from '../data/recommendations';

// class Advice extends React.Component {
//     render() {
//     const timePeriod = this.props.timePeriod;
//         let averageFood;
//         let foodEntries;
//         let foodPyramid;

//         if (timePeriod === 'day') {
//         averageFood = totalFoodDay;
//         foodEntries = dayFoodEntries;  
//         foodPyramid = dayFoodPyramid;
//         } else if (timePeriod === 'week') {
//         averageFood = averageFoodWeek; 
//         foodEntries = weekFoodEntries;
//         foodPyramid = weekFoodPyramid;
//         } else if (timePeriod === 'month') {
//         averageFood = averageFoodMonth;
//         foodEntries = monthFoodEntries;
//         foodPyramid = monthFoodPyramid;
//         }

//     // This gets data for comparisons
//     const actualTreatsPercentage = foodPyramid.find( group => group.label === 'Food and drinks high in fat, sugar and salt' ).value;
//     // const actualFatsPercentage = foodPyramid.find( group => group.label === 'Fats, spreads and oils' ).value;
//     // const actualProteinPercentage = foodPyramid.find( group => group.label === 'Meat, poultry, fish, eggs, beans and nuts' ).value;
//     // const actualDairyPercentage = foodPyramid.find( group => group.label === 'Milk, yoghurt and cheese' ).value;
//     // const actualCarbsPercentage = foodPyramid.find( group => group.label === 'Wholemeal cereals and breads, potatoes, pasta and rice' ).value;
//     // const actualVegePercentage = foodPyramid.find( group => group.label === 'Vegetables, salad and fruit' ).value;
//     const recTreatsPercentage = foodPyramidRec.find( group => group.label === 'Food and drinks high in fat, sugar and salt' ).value;
//     // const recFatsPercentage = foodPyramidRec.find( group => group.label === 'Fats, spreads and oils' ).value;
//     // const recProteinPercentage = foodPyramidRec.find( group => group.label === 'Meat, poultry, fish, eggs, beans and nuts' ).value;
//     // const recDairyPercentage = foodPyramidRec.find( group => group.label === 'Milk, yoghurt and cheese' ).value;
//     // const recCarbsPercentage = foodPyramidRec.find( group => group.label === 'Wholemeal cereals and breads, potatoes, pasta and rice' ).value;
//     // const recVegePercentage = foodPyramidRec.find( group => group.label === 'Vegetables, salad and fruit' ).value;
//     return(
//         <div>
//             <p>{averageFood}</p>
//             <p>{foodEntries}</p>
//             <p>{actualTreatsPercentage}</p>
//             <p>{recTreatsPercentage}</p>
//             <p>{caloriesPerDayRec}</p>
//         </div>
//     )
//     }
// }

// export default Advice;