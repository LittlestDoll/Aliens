var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $searchBtn = document.querySelector("#search");

$searchBtn.addEventListener("click", handleSearchButtonClick);

var filteredDate = datetimeData;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDate.length; i++) {
    var date = filteredDate[i];
    var fields = Object.keys(date);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = date[field];
    }
  }
}

function handleSearchButtonClick() {
    var filterDate = $dateInput.value.toString();
    filteredDate = datetimeData.filter(function(date) {
        var dataDate = data.datetime.toString();
        return dataDate === filterDate;
    });
    renderTable();
}
  
  // Render the table for the first time on page load
  renderTable();