// from data.js
var tableData = data;

// function to display UFO sightings
function tableDisplay(ufoSightings) {
  var tbody = d3.select("tbody");

  ufoSightings.forEach((ufoRecord) => {
    var row = tbody.append("tr");

    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.html(value);
    });
  });
};

// clear the table for new data
function deleteTbody(){
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
};

//intial display of all UFO sightings;
console.log(tableData);
tableDisplay(tableData);

//filter table btn
var btn = d3.select("#filter-btn");

//Filter the database
btn.on("click", function(event){

    d3.event.preventDefault();
    deleteTbody();

    var FilteredData = tableData;
    var inputId = document.getElementsByClassName("form-control");

    //iterate through all the input fields

    for (var i= 0; i<inputId[i].length; i++){

        var idName = inputId[i].id;
        var field = d3.select("#" + idName).property("value");

        //treat empty or space-ony fields as a search for all
        if (field.trim() !== ""){

            var FilteredData = FilteredData.filter(ufoSighting => 
                            ufoSighting[idName].toUpperCase().trim() === field.toUpperCase().trim());
        };
    };

    //diplay message if no records 
    if (FilteredData.length == 0){
        d3.select("tbody")
          .append("tr")
          .append("td")
            .attr("colspan", 7)
            .html("<h4>No Records Found</h4>");
    };

    //display the database
    console.log(FilteredData);
    tableDisplay(FilteredData);  
});



