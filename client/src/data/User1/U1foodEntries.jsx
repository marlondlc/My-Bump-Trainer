const U1dayFoodEntries = [
    {
        label: "6am",
        value: "0"
    },      
    {
        label: "8am",
        value: "1000"
    },  
    {
        label: "10am",
        value: "1000"
    },
    {
        label: "12pm",
        value: "3000"
      },
      {
        label: "2pm",
        value: "3000"
      },
      {
        label: "4pm",
        value: "3050"
      },
      {
        label: "6pm",
        value: "3050"
      },
      {
        label: "8pm",
        value: "7050"
      },
      {
        label: "10pm",
        value: "8050",
      }
]

const U1weekFoodEntries = [
    {
        label: "M",
        value: "2000"
    },      
    {
        label: "T",
        value: "2200"
    },  
    {
        label: "W",
        value: "2500"
    },
    {
        label: "T",
        value: "3000"
      },
      {
        label: "F",
        value: "3000"
      },
      {
        label: "S",
        value: "4000"
      },
      {
        label: "S",
        value: "3050"
      }
]

const U1monthFoodEntries = [
    {
        label: "1",
        value: "1500"
    },      
    {
        label: "2",
        value: "1600"
    },  
    {
        label: "3",
        value: "1800"
    },
    {
        label: "4",
        value: "2200"
      },
      {
        label: "5",
        value: "2600"
      },
      {
        label: "6",
        value: "2200"
      },
      {
        label: "7",
        value: "2500"
      },
      {
        label: "8",
        value: "3200"
      },
      {
        label: "9",
        value: "3000",
      },
      {
        label: "10",
        value: "1500"
    },      
    {
        label: "11",
        value: "1200"
    },  
    {
        label: "12",
        value: "1800"
    },
    {
        label: "13",
        value: "3000"
      },
      {
        label: "14",
        value: "3000"
      },
      {
        label: "15",
        value: "2000"
      },
      {
        label: "16",
        value: "2200"
      },
      {
        label: "17",
        value: "2500"
      },
      {
        label: "18",
        value: "3000",
      },
      {
        label: "19",
        value: "3000"
    },      
    {
        label: "20",
        value: "4000"
    },  
    {
        label: "21",
        value: "3050"
    }
]

const U1dayFoodPyramid = [
    {
      label: "Food and drinks high in fat, sugar and salt",
      value: "15"
    },
    {
      label: "Fats, spreads and oils",
      value: "11"
    },
    {
      label: "Meat, poultry, fish, eggs, beans and nuts",
      value: "14"
    },
    {
      label: "Milk, yoghurt and cheese",
      value: "8"
    },
    {
      label: "Wholemeal cereals and breads, potatoes, pasta and rice",
      value: "40"
    },
    {
      label: "Vegetables, salad and fruit",
      value: "12"
    }
]

const U1weekFoodPyramid = [
    {
      label: "Food and drinks high in fat, sugar and salt",
      value: "19"
    },
    {
      label: "Fats, spreads and oils",
      value: "11"
    },
    {
      label: "Meat, poultry, fish, eggs, beans and nuts",
      value: "10"
    },
    {
      label: "Milk, yoghurt and cheese",
      value: "8"
    },
    {
      label: "Wholemeal cereals and breads, potatoes, pasta and rice",
      value: "42"
    },
    {
      label: "Vegetables, salad and fruit",
      value: "10"
    }
]

const U1monthFoodPyramid = [
    {
      label: "Food and drinks high in fat, sugar and salt",
      value: "12"
    },
    {
      label: "Fats, spreads and oils",
      value: "10"
    },
    {
      label: "Meat, poultry, fish, eggs, beans and nuts",
      value: "17"
    },
    {
      label: "Milk, yoghurt and cheese",
      value: "10"
    },
    {
      label: "Wholemeal cereals and breads, potatoes, pasta and rice",
      value: "38"
    },
    {
      label: "Vegetables, salad and fruit",
      value: "12"
    }
]

const totalFoodfunction = (entries) => {
    let sumtotalFood = 0;
    for (var entry of entries) {
        sumtotalFood += Number(entry.value)
    }
    return sumtotalFood;
}

const U1totalFoodDay = totalFoodfunction(U1dayFoodEntries);
const totalFoodWeek = totalFoodfunction(U1weekFoodEntries);
const U1averageFoodWeek = Math.round(totalFoodWeek/7, 2);
const totalFoodMonth = totalFoodfunction(U1monthFoodEntries);
const U1averageFoodMonth = Math.round(totalFoodMonth/21, 2);

export {U1dayFoodEntries, U1weekFoodEntries, U1monthFoodEntries, U1totalFoodDay, U1averageFoodWeek, U1averageFoodMonth, U1dayFoodPyramid, U1weekFoodPyramid, U1monthFoodPyramid};