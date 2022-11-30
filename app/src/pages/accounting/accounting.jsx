import React from "react";


var myList = [
    { "id": "1", "date": "11/28/2022", "salesperson_id": 5, "total": "50.55", "discount": "", "final_total": "50.55", "payment_type": "cash"},
    { "id": "2", "date": "11/28/2022", "salesperson_id": 4, "total": "40.22", "discount": "", "final_total": "40.22", "payment_type": "cash"},
    { "id": "3", "date": "11/28/2022", "salesperson_id": 7, "total": "35.99", "discount": "", "final_total": "35.99", "payment_type": "cash"}
  ];

var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];
/*
new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: true},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});
*/
function openTimePeriod(evt, cityName) {
 
  
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
  
}

function displayTable(timelength) {
  /*
    //load transactions from dates going back timelength
    var rows = " <caption>Data from last " + timelength + " days</caption>";
    addColumnHeaders(myList);
    for (var i = 0; i < myList.length; i++) {
        rows += "<tr>";
       //{ "id": "1", "date": "11/28/2022", "salesperson_id": 5, "total": "50.55", "discount": "", "final_total": "50.55", "payment_type": "cash"},
        
        rows += "<td>" + myList[i].id + "</td>" + "<td>" + myList[i].date + "</td>" + "<td>" + myList[i].salesperson_id + "</td>"
        + "<td>" + myList[i].total + "</td>" + "<td>" + myList[i].discount + "</td>" + "<td>" + myList[i].final_total + "</td>" + "<td>" + myList[i].payment_type + "</td>";
        
        rows += "</tr>";
    }
    var table = document.getElementById("datatable");
    table.innerHTML += rows;
    console.log(rows);
    */
}


function addColumnHeaders(myList){
    /*
    var rows = "<tr>";
    //for (var i = 0; i < myList.length; i++) {
        var rowHash = myList[0];
        for (var key in rowHash){
            rows +=  "<th>" + key + "</th>";
        }

    //}
    rows += "</tr>";

    var table = document.getElementById("datatable");
    table.innerHTML = rows;
    */
}


class Accounting extends React.Component {
  render() {
    return (
<section>
  <h2>Tabs</h2>
  <p>Click on the buttons inside the tabbed menu:</p>
  <div className="tab">
    <button className="tablinks" onClick={(e) => openTimePeriod(e, 'Daily')}>
      Daily
    </button>
    <button className="tablinks" onClick={(e) => openTimePeriod(e, 'Weekly')}>
      Weekly
    </button>
    <button className="tablinks" onClick={(e) => openTimePeriod(e, 'Monthly')}>
      Monthly
    </button>
    <button className="tablinks" onClick={(e) => openTimePeriod(e, 'Yearly')}>
      Yearly
    </button>
    <button className="tablinks" onClick={(e) => openTimePeriod(e, 'chart')}>
      Chart
    </button>
  </div>
  <div id="Daily" className="tabcontent">
    <h3>Daily</h3>
    <p>Daily Page</p>
    <button type="button" onClick={displayTable(1)}>
      Load Data
    </button>
  </div>
  <div id="Weekly" className="tabcontent">
    <h3>Weekly</h3>
    <p>Weekly Page</p>
    <button type="button" onClick={displayTable(7)}>
      Load Data
    </button>
  </div>
  <div id="Monthly" className="tabcontent">
    <h3>Monthly</h3>
    <p>Monthly Page</p>
    <button type="button" onClick={displayTable(30)}>
      Load Data
    </button>
  </div>
  <div id="Yearly" className="tabcontent">
    <h3>Yearly</h3>
    <p>Yearly Page</p>
    <button type="button" onClick={displayTable(365)}>
      Load Data
    </button>
  </div>
  <div className="table">
    <table id="datatable"> </table>{" "}
  </div>
  <div id="chart" className="tabcontent">
    <canvas id="myChart" width="50%" height="50%" />
  </div>

</section>

    );
  }
}

export default Accounting;