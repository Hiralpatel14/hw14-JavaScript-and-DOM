// from data.js
var tableData = data;

//log the tabledata
console.log(tableData);

// YOUR CODE HERE!
//select tbody HTML element
var tbody = d3.select("tbody");

//send data from data.js to console.log
console.log(data);  

//update each fields with UFO sighting value
data.forEach(function(ufoSighting){
    console.log(ufoSighting);

    //apend the table row 'tr' for each obj
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key,value]){
        console.log(key,value);

    //append a cell to the row for each value
    var cell = tbody.append("td");
    cell.text(value);

    });    
});

//Reference to button with id set to `filter-btn`
var submit = d3.select("#filter-btn");

//use `on` function to attach event to click
submit.on("click", function() {

    //Stop page from reloading on click
    d3.event.preventDefault();

    //select item with class `summary`, change html content
    d3.select(".summary").html("");

    //create var for user input
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    //filter data based on input
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    //except values filtered by data
    filteredData.forEach((dateData) => {
        var row = tbody.append("tr");
        Object.entries(dateData).forEach(([key,value]) =>{
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
});