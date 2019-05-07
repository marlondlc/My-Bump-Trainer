const U2dayWaterEntries = [
    {
        "label": "4am",
        "value": "0.5"
    },
    {
        "label": "6am",
        "value": "0"
    },      
    {
        "label": "8am",
        "value": "0.5"
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
        "value": "0.5"
    },
    {
        "label": "4pm",
        "value": "0.5"
    },
    {
        "label": "6pm",
        "value": "0.5"
    },
    {
        "label": "8pm",
        "value": "0"
    }
]

const U2weekWaterEntries = [
    {
        "label": "M",
        "value": "2.5"
    },      
    {
        "label": "T",
        "value": "2.5"
    },  
    {
        "label": "W",
        "value": "2"
    },
    {
        "label": "T",
        "value": "2"
    },
    {
        "label": "F",
        "value": "3"
    },
    {
        "label": "S",
        "value": "2"
    },
    {
        "label": "S",
        "value": "1.5"
    },
]

const U2monthWaterEntries = [
    {
        "label": "1",
        "value": "2.5"
    },      
    {
        "label": "2",
        "value": "2.5"
    },  
    {
        "label": "3",
        "value": "2.5"
    },
    {
        "label": "4",
        "value": "2.5"
    },
    {
        "label": "5",
        "value": "3"
    },
    {
        "label": "6",
        "value": "2"
    },
    {
        "label": "7",
        "value": "1.5"
    },
    {
        "label": "8",
        "value": "2.5"
    },      
    {
        "label": "9",
        "value": "2.5"
    },  
    {
        "label": "10",
        "value": "1.5"
    },
    {
        "label": "11",
        "value": "3"
    },
    {
        "label": "12",
        "value": "2.5"
    },
    {
        "label": "13",
        "value": "1.5"
    },
    {
        "label": "14",
        "value": "1"
    },
    {
        "label": "15",
        "value": "2.5"
    },      
    {
        "label": "16",
        "value": "2.5"
    },  
    {
        "label": "17",
        "value": "2"
    },
    {
        "label": "18",
        "value": "2"
    },
    {
        "label": "19",
        "value": "3"
    },
    {
        "label": "20",
        "value": "2"
    },
    {
        "label": "21",
        "value": "1.5"
    },
]

const totalWaterfunction = (entries) => {
    let sumtotalWater = 0;
    for (var entry of entries) {
        sumtotalWater += Number(entry.value)
    }
    return sumtotalWater;
}

const U2totalWaterDay = totalWaterfunction(U2dayWaterEntries);
const totalWaterWeek = totalWaterfunction(U2weekWaterEntries);
const U2averageWaterWeek = Math.round(totalWaterWeek/7, 2);
const totalWaterMonth = totalWaterfunction(U2monthWaterEntries);
const U2averageWaterMonth = Math.round(totalWaterMonth/21, 2);

export {U2dayWaterEntries, U2weekWaterEntries, U2monthWaterEntries, U2totalWaterDay, U2averageWaterWeek, U2averageWaterMonth};