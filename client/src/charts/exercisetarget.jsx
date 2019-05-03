const myDataSource =  {
    chart: {
      caption: "Exercise today",
    //   subcaption: "In minutes",
      showpercentvalues: "1",
      defaultcenterlabel: "per Type",
      aligncaptionwithcanvas: "0",
      captionpadding: "0",
      decimals: "1",
      plottooltext:
        "<b>$percentValue</b> of your exercise was <b>$label</b>",
      centerlabel: "# Users: $value",
      theme: "fusion"
    },
  };

  const exerciseTarget = {
    type: "doughnut2d",
    width: '80%',
    height: '50%',
    dataFormat: "JSON",
    dataSource: myDataSource
};

export default exerciseTarget;
