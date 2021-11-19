
var margin = {top: 10, right: 20, bottom: 50, left: 50},
      width = 850 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;
  
  // append the svg object to the body of the page
  var svg = d3.select("#scatter")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  
  //Read the data
  d3.csv("data.csv").then(function(data) {
   
    
   // console.log(data)
    var x = d3.scaleLinear()
    .domain([8, 25])
    .range([ 0, width ]);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 25])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

    console.log(data)
    var gdots =  svg.selectAll("circle")
    .data(data)
    .enter()
    .append('g');
    
    gdots
   .append("circle")
          .attr("cx", function (d) { return x(d.poverty); } )
          .attr("cy", function (d) { return y(d.healthcare); } )
          .attr("r", 12 )
          .classed("stateCircle", true)

    gdots.append("text")
          .text(function(d){return d.abbr;})
          .attr("x", function (d) { return x(d.poverty) -1;})
          .attr("y", function (d) {return y(d.healthcare) +6;})
          .classed("stateText", true);

    // Add X axis
    // var x = d3.scaleLinear()
    //   .domain([8, 25])
    //   .range([ 0, width ]);
    // svg.append("g")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(d3.axisBottom(x));
  
    // // Add Y axis
    // var y = d3.scaleLinear()
    //   .domain([0, 25])
    //   .range([ height, 0]);
    // svg.append("g")
    //   .call(d3.axisLeft(y));


      svg.append("text")
       .attr("transform", "rotate(-90)")
       .attr("y", 0 - margin.left )
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Lacks Healthcare (%)")
      .classed("labelText", true);

    svg.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.bottom -10 })`)
      .attr("class", "axisText")
      .text("In Poverty (%)")
      .classed("labelText", true);

  



    
    //   // Add dots
    // svg.append('g')
    //   .selectAll("dot")
    //   .data(data)
    //   .enter()
    //   .append("circle")
    //     .attr("cx", function (d) { return x(d.poverty); } )
    //     .attr("cy", function (d) { return y(d.healthcare); } )
    //     .attr("r", 10 )
    //     .style("fill", "yellow")
    //     .style("opacity", "0.7")
    //     .attr("stroke", "black")


        
  })