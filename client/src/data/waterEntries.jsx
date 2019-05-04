const dayWaterEntries = [
    {
        "label": "6am",
        "value": "0"
    },      
    {
        "label": "8am",
        "value": ".880"
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
        "value": ".440"
    },
    {
        "label": "4pm",
        "value": ".440"
    },
    {
        "label": "6pm",
        "value": ".440"
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
        "value": "1.500"
    },      
    {
        "label": "T",
        "value": "1.800"
    },  
    {
        "label": "W",
        "value": "2.500"
    },
    {
        "label": "T",
        "value": "1.500"
    },
    {
        "label": "F",
        "value": "1.800"
    },
    {
        "label": "S",
        "value": "2.000"
    },
    {
        "label": "S",
        "value": ".500"
    },
]

const monthWaterEntries = [
    {
        "label": "1",
        "value": "1.500"
    },      
    {
        "label": "2",
        "value": "1.800"
    },  
    {
        "label": "3",
        "value": "2.500"
    },
    {
        "label": "4",
        "value": "1.500"
    },
    {
        "label": "5",
        "value": "1.600"
    },
    {
        "label": "6",
        "value": "1.800"
    },
    {
        "label": "7",
        "value": "1.300"
    },
    {
        "label": "8",
        "value": "1.500"
    },      
    {
        "label": "9",
        "value": "1.500"
    },  
    {
        "label": "10",
        "value": "2.500"
    },
    {
        "label": "11",
        "value": "1.500"
    },
    {
        "label": "12",
        "value": "1.600"
    },
    {
        "label": "13",
        "value": "2.000"
    },
    {
        "label": "14",
        "value": "2.200"
    },
    {
        "label": "15",
        "value": "1.500"
    },      
    {
        "label": "16",
        "value": "2.000"
    },  
    {
        "label": "17",
        "value": "2.500"
    },
    {
        "label": "18",
        "value": "2.300"
    },
    {
        "label": "19",
        "value": ".700"
    },
    {
        "label": "20",
        "value": "2.000"
    },
    {
        "label": "21",
        "value": "1.500"
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
const averageWaterWeek = Math.round(totalWaterWeek/7, 2);
const totalWaterMonth = totalWaterfunction(monthWaterEntries);
const averageWaterMonth = Math.round(totalWaterMonth/21, 2);

export {dayWaterEntries, weekWaterEntries, monthWaterEntries, totalWaterDay, averageWaterWeek, totalWaterMonth, averageWaterMonth};