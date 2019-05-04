const dayExerciseEntries = [
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
        value: "10"
    },
    {
        label: "12pm",
        value: "30"
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
        value: "0"
      },
      {
        label: "8pm",
        value: "10"
      },
      {
        label: "10pm",
        value: "0",
      }
]

const weekExerciseEntries = [
    {
        label: "M",
        value: "50"
    },      
    {
        label: "T",
        value: "40"
    },  
    {
        label: "W",
        value: "30"
    },
    {
        label: "T",
        value: "20"
      },
      {
        label: "F",
        value: "20"
      },
      {
        label: "S",
        value: "60"
      },
      {
        label: "S",
        value: "10"
      }
]

const monthExerciseEntries = [
    {
        label: "1",
        value: "0"
    },      
    {
        label: "2",
        value: "50"
    },  
    {
        label: "3",
        value: "20"
    },
    {
        label: "4",
        value: "0"
      },
      {
        label: "5",
        value: "0"
      },
      {
        label: "6",
        value: "10"
      },
      {
        label: "7",
        value: "20"
      },
      {
        label: "8",
        value: "40"
      },
      {
        label: "9",
        value: "30",
      },
      {
        label: "10",
        value: "60"
    },      
    {
        label: "11",
        value: "40"
    },  
    {
        label: "12",
        value: "30"
    },
    {
        label: "13",
        value: "20"
      },
      {
        label: "14",
        value: "20"
      },
      {
        label: "15",
        value: "50"
      },
      {
        label: "16",
        value: "40"
      },
      {
        label: "17",
        value: "30"
      },
      {
        label: "18",
        value: "20",
      },
      {
        label: "19",
        value: "20"
    },      
    {
        label: "20",
        value: "60"
    },  
    {
        label: "21",
        value: "10"
    }
]

const dayExercisePie = [
    {
        label: "Aerobic",
        value: "30"
    },
    {
        label: "Strength",
        value: "15"
    },
    {
        label: "Flexibility",
        value: "60"
    },
    {
        label: "Balance",
        value: "15"
    }
]

const weekExercisePie = [
    {
        label: "Aerobic",
        value: "65"
    },
    {
        label: "Strength",
        value: "15"
    },
    {
        label: "Flexibility",
        value: "120"
    },
    {
        label: "Balance",
        value: "30"
    }
]

const monthExercisePie = [
    {
        label: "Aerobic",
        value: "180"
    },
    {
        label: "Strength",
        value: "60"
    },
    {
        label: "Flexibility",
        value: "380"
    },
    {
        label: "Balance",
        value: "70"
    }
]


const totalExercisefunction = (entries) => {
    let totalExercise = 0;
    for (var entry of entries) {
        totalExercise += Number(entry.value)
    }
    return totalExercise;
}

const totalExerciseDay = totalExercisefunction(dayExerciseEntries);
const totalExerciseWeek = totalExercisefunction(weekExerciseEntries);
const averageExerciseWeek = Math.round(totalExerciseWeek/7, 2);
const totalExerciseMonth = totalExercisefunction(monthExerciseEntries);
const averageExerciseMonth = Math.round(totalExerciseMonth/21, 2);

export {dayExerciseEntries, weekExerciseEntries, monthExerciseEntries, totalExerciseDay, averageExerciseWeek, averageExerciseMonth, dayExercisePie, weekExercisePie, monthExercisePie};