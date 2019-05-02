const myDataSource = {
    chart: {
        caption: "Water today",
        lowerlimit: "0",
        upperlimit: "2.5",
        lowerlimitdisplay: "Sahara desert bladder",
        upperlimitdisplay: "Bursting bladder",
        numbersuffix: " ltrs",
        cylfillcolor: "#5D62B5",
        plottooltext: "Water consumption per day: <b>2.3 ltrs</b>",
        cylfillhoveralpha: "85",
        theme: "gammel"
      },
  };

  const waterCylinder = {
    type: "cylinder",
    width: '80%',
    height: '50%',
    dataFormat: "JSON",
    dataSource: myDataSource
};

export default waterCylinder;
