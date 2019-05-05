const U2dayFoodEntries = [
    {
      label: "4am",
      value: "200"
    },
    {
        label: "6am",
        value: "0"
    },      
    {
        label: "8am",
        value: "0"
    },  
    {
        label: "10am",
        value: "300"
    },
    {
        label: "12pm",
        value: "1500"
      },
      {
        label: "2pm",
        value: "0"
      },
      {
        label: "4pm",
        value: "200"
      },
      {
        label: "6pm",
        value: "800"
      },
      {
        label: "8pm",
        value: "0"
      },
      {
        label: "10pm",
        value: "0",
      }
]

const U2weekFoodEntries = [
    {
        label: "M",
        value: "3000"
    },      
    {
        label: "T",
        value: "2500"
    },  
    {
        label: "W",
        value: "3500"
    },
    {
        label: "T",
        value: "3000"
      },
      {
        label: "F",
        value: "4000"
      },
      {
        label: "S",
        value: "2500"
      },
      {
        label: "S",
        value: "3000"
      }
]

const U2monthFoodEntries = [
    {
        label: "1",
        value: "4500"
    },      
    {
        label: "2",
        value: "2900"
    },  
    {
        label: "3",
        value: "3200"
    },
    {
        label: "4",
        value: "3000"
      },
      {
        label: "5",
        value: "3000"
      },
      {
        label: "6",
        value: "3200"
      },
      {
        label: "7",
        value: "2800"
      },
      {
        label: "8",
        value: "3500"
      },
      {
        label: "9",
        value: "2800",
      },
      {
        label: "10",
        value: "4200"
    },      
    {
        label: "11",
        value: "2800"
    },  
    {
        label: "12",
        value: "4000"
    },
    {
        label: "13",
        value: "2800"
      },
      {
        label: "14",
        value: "2000"
      },
      {
        label: "15",
        value: "4000"
      },
      {
        label: "16",
        value: "3500"
      },
      {
        label: "17",
        value: "4000"
      },
      {
        label: "18",
        value: "3000",
      },
      {
        label: "19",
        value: "4000"
    },      
    {
        label: "20",
        value: "2500"
    },  
    {
        label: "21",
        value: "3000"
    }
]

const U2dayFoodPyramid = [
    {
      label: "Food and drinks high in fat, sugar and salt",
      value: "5"
    },
    {
      label: "Fats, spreads and oils",
      value: "5"
    },
    {
      label: "Meat, poultry, fish, eggs, beans and nuts",
      value: "20"
    },
    {
      label: "Milk, yoghurt and cheese",
      value: "10"
    },
    {
      label: "Wholemeal cereals and breads, potatoes, pasta and rice",
      value: "10"
    },
    {
      label: "Vegetables, salad and fruit",
      value: "50"
    }
]

const U2weekFoodPyramid = [
    {
      label: "Food and drinks high in fat, sugar and salt",
      value: "1"
    },
    {
      label: "Fats, spreads and oils",
      value: "6"
    },
    {
      label: "Meat, poultry, fish, eggs, beans and nuts",
      value: "23"
    },
    {
      label: "Milk, yoghurt and cheese",
      value: "8"
    },
    {
      label: "Wholemeal cereals and breads, potatoes, pasta and rice",
      value: "12"
    },
    {
      label: "Vegetables, salad and fruit",
      value: "50"
    }
]

const U2monthFoodPyramid = [
    {
      label: "Food and drinks high in fat, sugar and salt",
      value: "2"
    },
    {
      label: "Fats, spreads and oils",
      value: "8"
    },
    {
      label: "Meat, poultry, fish, eggs, beans and nuts",
      value: "22"
    },
    {
      label: "Milk, yoghurt and cheese",
      value: "8"
    },
    {
      label: "Wholemeal cereals and breads, potatoes, pasta and rice",
      value: "12"
    },
    {
      label: "Vegetables, salad and fruit",
      value: "48"
    }
]

const totalFoodfunction = (entries) => {
    let sumtotalFood = 0;
    for (var entry of entries) {
        sumtotalFood += Number(entry.value)
    }
    return sumtotalFood;
}

const U2totalFoodDay = totalFoodfunction(U2dayFoodEntries);
const totalFoodWeek = totalFoodfunction(U2weekFoodEntries);
const U2averageFoodWeek = Math.round(totalFoodWeek/7, 2);
const totalFoodMonth = totalFoodfunction(U2monthFoodEntries);
const U2averageFoodMonth = Math.round(totalFoodMonth/21, 2);

// if ((2.3 - averageWaterWeek) < 0) {
//     let drinkMore = 'yes';
//     let drinkLess = 'no';
// } else {
//     drink
// }



export {U2dayFoodEntries, U2weekFoodEntries, U2monthFoodEntries, U2totalFoodDay, U2averageFoodWeek, U2averageFoodMonth, U2dayFoodPyramid, U2weekFoodPyramid, U2monthFoodPyramid};