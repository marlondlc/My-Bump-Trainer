const myDataSource = {
    chart: {
        caption: "Water per day",
        lowerlimit: "0",
        upperlimit: "2.5",
        lowerlimitdisplay: "Sahara Desert bladder",
        upperlimitdisplay: "Bursting bladder",
        numbersuffix: "litres",
        cylfillcolor: "#5D62B5",
        cylfillhoveralpha: "85",
        theme: "fusion"
      },
  };

  const waterCylinder = {
    type: "cylinder",
    width: '400',
    height: '500',
    dataFormat: "JSON",
    dataSource: myDataSource
};

export default waterCylinder;
