// from data.js
var tableData = data;

// YOUR CODE HERE!

// Use d3 to make table and update cells (`date/time`, `city`, `state`, `country`, `shape`, and `comment`)
function makeTable(tableData){
    var tbody = d3.select(".table").select("tbody");
    tbody.html("");
    tableData.forEach((x) => {
        var row = tbody.append("tr");
        Object.entries(x).forEach(([key, value]) => {
            // Append a cell to the row for each value in the report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

// Make table in html 
makeTable(tableData);

// Reference to button on page with the id `filter-btn`
var button = d3.select("#filter-btn");
button.on("click", function() {
    // Select input element and get raw HTML node
    var inputElement = d3.select("#datetime");
    // Get value property of input element
    var inputValue = inputElement.property("value");
    d3.select("tbody").selectAll("tr");
    var filteredData = data.filter(data => data.datetime === inputValue);
    
    console.log(filteredData);
    makeTable(filteredData);
});

