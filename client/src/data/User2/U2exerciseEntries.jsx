const U2dayExerciseEntries = [
    {
        label: "6am",
        value: "60"
    },      
    {
        label: "8am",
        value: "0"
    },  
    {
        label: "10am",
        value: "0"
    },
    {
        label: "12pm",
        value: "0"
      },
      {
        label: "2pm",
        value: "0"
      },
      {
        label: "4pm",
        value: "0"
      },
      {
        label: "6pm",
        value: "60"
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

const U2weekExerciseEntries = [
    {
        label: "M",
        value: "120"
    },      
    {
        label: "T",
        value: "120"
    },  
    {
        label: "W",
        value: "120"
    },
    {
        label: "T",
        value: "120"
      },
      {
        label: "F",
        value: "120"
      },
      {
        label: "S",
        value: "0"
      },
      {
        label: "S",
        value: "0"
      }
]

const U2monthExerciseEntries = [
    {
        label: "1",
        value: "120"
    },      
    {
        label: "2",
        value: "120"
    },  
    {
        label: "3",
        value: "120"
    },
    {
        label: "4",
        value: "120"
      },
      {
        label: "5",
        value: "120"
      },
      {
        label: "6",
        value: "0"
      },
      {
        label: "7",
        value: "0"
      },
      {
        label: "8",
        value: "120"
      },
      {
        label: "9",
        value: "120",
      },
      {
        label: "10",
        value: "120"
    },      
    {
        label: "11",
        value: "120"
    },  
    {
        label: "12",
        value: "120"
    },
    {
        label: "13",
        value: "0"
      },
      {
        label: "14",
        value: "0"
      },
      {
        label: "15",
        value: "120"
      },
      {
        label: "16",
        value: "120"
      },
      {
        label: "17",
        value: "120"
      },
      {
        label: "18",
        value: "120",
      },
      {
        label: "19",
        value: "120"
    },      
    {
        label: "20",
        value: "0"
    },  
    {
        label: "21",
        value: "0"
    }
]

const U2dayExercisePie = [
    {
        label: "Aerobic",
        value: "120"
    },
    {
        label: "Strength",
        value: "0"
    },
    {
        label: "Flexibility",
        value: "0"
    },
    {
        label: "Balance",
        value: "0"
    }
]

const U2weekExercisePie = [
    {
        label: "Aerobic",
        value: "600"
    },
    {
        label: "Strength",
        value: "0"
    },
    {
        label: "Flexibility",
        value: "0"
    },
    {
        label: "Balance",
        value: "0"
    }
]

const U2monthExercisePie = [
    {
        label: "Aerobic",
        value: "1800"
    },
    {
        label: "Strength",
        value: "0"
    },
    {
        label: "Flexibility",
        value: "0"
    },
    {
        label: "Balance",
        value: "0"
    }
]


const totalExercisefunction = (entries) => {
    let totalExercise = 0;
    for (var entry of entries) {
        totalExercise += Number(entry.value)
    }
    return totalExercise;
}

const U2totalExerciseDay = totalExercisefunction(U2dayExerciseEntries);
const totalExerciseWeek = totalExercisefunction(U2weekExerciseEntries);
const U2averageExerciseWeek = Math.round(totalExerciseWeek/7, 2);
const totalExerciseMonth = totalExercisefunction(U2monthExerciseEntries);
const U2averageExerciseMonth = Math.round(totalExerciseMonth/21, 2);

export {U2dayExerciseEntries, U2weekExerciseEntries, U2monthExerciseEntries, U2totalExerciseDay, U2averageExerciseWeek, U2averageExerciseMonth, U2dayExercisePie, U2weekExercisePie, U2monthExercisePie};