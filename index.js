var $tbody = document.querySelector("tbody");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

function renderTable(filterDate) {
  $tbody.innerHTML = "";
  for (var i = 0; i < dataSet.length; i++) {
    var sighting = dataSet[i];
    if (sighting.datetime != filterDate) {
      continue;
    }
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, index -1 == append new row
    var $row = $tbody.insertRow(-1);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  var $dateInput = document.querySelector("#date");
    var filterDate = $dateInput.value.replace(/(^|\/)0+/g, "$1").toString();
    renderTable(filterDate);
}
