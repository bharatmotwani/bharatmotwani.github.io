dataset = {
    'children': [
        {'Country':'Australia','Medals':2,'Location':'Vancouver, Canada'},
        {'Country':'Austria','Medals':11,'Location':'Vancouver, Canada'},
        {'Country':'Belarus','Medals':1,'Location':'Vancouver, Canada'},
        {'Country':'Canada','Medals':67,'Location':'Vancouver, Canada'},
        {'Country':'China','Medals':9,'Location':'Vancouver, Canada'},
        {'Country':'Czech Republic','Medals':2,'Location':'Vancouver, Canada'},
        {'Country':'France','Medals':2,'Location':'Vancouver, Canada'},
        {'Country':'Germany','Medals':15,'Location':'Vancouver, Canada'},
        {'Country':'Great Britain','Medals':1,'Location':'Vancouver, Canada'},
        {'Country':'Italy','Medals':1,'Location':'Vancouver, Canada'},
        {'Country':'Netherlands','Medals':4,'Location':'Vancouver, Canada'},
        {'Country':'Norway','Medals':16,'Location':'Vancouver, Canada'},
        {'Country':'Poland','Medals':1, 'Location':'Vancouver, Canada'},
        {'Country':'Russia','Medals':6,'Location':'Vancouver, Canada'},
        {'Country':'Slovakia','Medals':1,'Location':'Vancouver, Canada'},
        {'Country':'South Korea','Medals':6,'Location':'Vancouver, Canada'},
        {'Country':'Sweden','Medals':11,'Location':'Vancouver, Canada'},
        {'Country':'Switzerland','Medals':6,'Location':'Vancouver, Canada'},
        {'Country':'USA','Medals':12,'Location':'Vancouver, Canada'}
    ]};

var tooltip = d3.select("#scene1")
.append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "black")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("color", "white")

var showTooltip = function(d) {
tooltip
  .transition()
  .duration(200)
tooltip
  .style("opacity", 1)
  .html("Country: " + d.data.Country + "<br/>Gold Medals: " + d.data.Medals + "<br/>Location: " + d.data.Location)
  .style("left", (d3.mouse(this)[0]) + "px")
  .style("top", (d3.mouse(this)[1]) + "px")
}
var moveTooltip = function(d) {
tooltip
  .style("left", (d3.mouse(this)[0]) + "px")
  .style("top", (d3.mouse(this)[1]) + "px")
}
var hideTooltip = function(d) {
tooltip
  .transition()
  .duration(200)
  .style("opacity", 0)
}

var diameter = 500;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#scene1")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble")

var nodes = d3.hierarchy(dataset)
    .sum(function(d) { return d.Medals; });

var node = svg.selectAll(".node")
    .data(bubble(nodes).descendants())
    .enter()
    .filter(function(d){
        return  !d.children
    })
    .append("g")
    .attr("class", "node")
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseleave", hideTooltip)
    .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
    });

node.append("title")
    .text(function(d) {
        return d.data.Country + ": " + d.data.Medals;
    });

node.append("circle")
    .attr("r", function(d) {
        return d.r;
    })
    .style("fill", function(d,i) {
        return color(i);
    });

node.append("text")
    .attr("dy", ".2em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Country.substring(0, d.r / 3);
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

node.append("text")
    .attr("dy", "1.3em")
    .style("text-anchor", "middle")
    .text(function(d) {
        return d.data.Medals;
    })
    .attr("font-family",  "Gill Sans", "Gill Sans MT")
    .attr("font-size", function(d){
        return d.r/5;
    })
    .attr("fill", "white");

const annotation1 = [
    {
        note: {
            title: "Canada",
            label: "leading with 67 Medals.",
            lineType: "none"
        },
        connector: {
            end: "dot",
            endScale: 4
        },
        color: ["white"],
        x: 300,
        y: 300,
        dy: 90,
        dx: 90
    }
]

// Add annotation to the chart
const makeAnnotation1 = d3.annotation()
    .annotations(annotation1)

d3.select("#annotation1")
    .append("g")
    .attr('class', 'annotation-group')
    .call(makeAnnotation1)

d3.select(".annotation-group")
    .transition()
    .duration(4000)
    .tween('text',function(d) {
        return "199";
    })
