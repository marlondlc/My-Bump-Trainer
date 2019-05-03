const dayWaterEntries = [
    {
        "label": "6am",
        "value": "0"
    },      
    {
        "label": "8am",
        "value": "880"
    },  
    {
        "label": "10am",
        "value": "0"
    },
    {
        "label": "12pm",
        "value": "0"
    },
    {
        "label": "2pm",
        "value": "440"
    },
    {
        "label": "4pm",
        "value": "440"
    },
    {
        "label": "6pm",
        "value": "440"
    },
    {
        "label": "8pm",
        "value": "0"
    },
    {
        "label": "10pm",
        "value": "0",
    }
]

const weekWaterEntries = [
    {
        "label": "M",
        "value": "1500"
    },      
    {
        "label": "T",
        "value": "1800"
    },  
    {
        "label": "W",
        "value": "2500"
    },
    {
        "label": "T",
        "value": "1500"
    },
    {
        "label": "F",
        "value": "1800"
    },
    {
        "label": "S",
        "value": "2000"
    },
    {
        "label": "Sunday",
        "value": "500"
    },
]

const monthWaterEntries = [
    {
        "label": "1",
        "value": "1500"
    },      
    {
        "label": "2",
        "value": "1800"
    },  
    {
        "label": "3",
        "value": "2500"
    },
    {
        "label": "4",
        "value": "1500"
    },
    {
        "label": "5",
        "value": "1600"
    },
    {
        "label": "6",
        "value": "1800"
    },
    {
        "label": "7",
        "value": "1300"
    },
    {
        "label": "8",
        "value": "1500"
    },      
    {
        "label": "9",
        "value": "1500"
    },  
    {
        "label": "10",
        "value": "2500"
    },
    {
        "label": "11",
        "value": "1500"
    },
    {
        "label": "12",
        "value": "1600"
    },
    {
        "label": "13",
        "value": "2000"
    },
    {
        "label": "14",
        "value": "2200"
    },
    {
        "label": "15",
        "value": "1500"
    },      
    {
        "label": "16",
        "value": "2000"
    },  
    {
        "label": "17",
        "value": "2500"
    },
    {
        "label": "18",
        "value": "2300"
    },
    {
        "label": "19",
        "value": "700"
    },
    {
        "label": "20",
        "value": "2000"
    },
    {
        "label": "21",
        "value": "1500"
    },
]

const totalWaterfunction = (entries) => {
    let sumtotalWater = 0;
    for (var entry of entries) {
        sumtotalWater += Number(entry.value)
    }
    return sumtotalWater;
}

const totalWaterDay = totalWaterfunction(dayWaterEntries);
const totalWaterWeek = totalWaterfunction(weekWaterEntries);
const averageWaterWeek = (totalWaterWeek/7);
const totalWaterMonth = totalWaterfunction(monthWaterEntries);
const averageWaterMonth = totalWaterMonth/21;

export {dayWaterEntries, weekWaterEntries, monthWaterEntries, totalWaterDay, averageWaterWeek, totalWaterMonth, averageWaterMonth};