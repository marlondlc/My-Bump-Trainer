const myDataSource = {
    chart: {
        caption: "Water per day",
        lowerlimit: "0",
        upperlimit: "2.5",
        lowerlimitdisplay: "Desert",
        upperlimitdisplay: "Bursting",
        numbersuffix: " mL",
        cylfillcolor: "#5D62B5",
        plottooltext: "Water consumption per day: <b>2.3 ltrs</b>",
        cylfillhoveralpha: "85",
        theme: "fusion"
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
