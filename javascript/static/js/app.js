
var tableData = data;

var $tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var inputFieldDate = d3.select("#datetime")
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var addData = (dataInput) => {
    dataInput.forEach(ufoSightings => {
        var row = $tbody.append("tr");
        columns.forEach(column => row
            .append("td")
            .text(ufoSightings[column])
        )
    });
}

addData(tableData);

button.on("click", () => {

    d3.event.preventDefault();
    
    var inputDate = inputFieldDate.property("value");

    var filterDate = tableData.filter(tableData => tableData.datetime === inputDate);
    
    $tbody.html("");
    let response = {
        filterDate}

    if(response.filterDate.length !== 0) {
        addData(filterDate);}    
        else {$tbody
                .append("tr")
                .append("td")
                .text("We only got data for the month of January in 2010, and not even the entire month at that so try again please.");
        }
})