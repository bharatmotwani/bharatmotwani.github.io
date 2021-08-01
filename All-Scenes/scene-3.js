dataset = {
    'children': [
        {'Country':'Algeria','Medals':1,'Location':'London'},
        {'Country':'Argentina','Medals':1,'Location':'London'},
        {'Country':'Australia','Medals':18,'Location':'London'},
        {'Country':'Azerbaijan','Medals':2,'Location':'London'},
        {'Country':'Bahamas','Medals':4,'Location':'London'},
        {'Country':'Belarus','Medals':3,'Location':'London'},
        {'Country':'Brazil','Medals':14,'Location':'London'},
        {'Country':'Canada','Medals':1,'Location':'London'},
        {'Country':'China','Medals':56,'Location':'London'},
        {'Country':'Colombia','Medals':1,'Location':'London'},
        {'Country':'Croatia','Medals':15,'Location':'London'},
        {'Country':'Cuba','Medals':5,'Location':'London'},
        {'Country':'Czech Republic','Medals':4,'Location':'London'},
        {'Country':'Denmark','Medals':3,'Location':'London'},
        {'Country':'Dominican Republic','Medals':1,'Location':'London'},
        {'Country':'Ethiopia','Medals':3,'Location':'London'},
        {'Country':'France','Medals':30,'Location':'London'},
        {'Country':'Georgia','Medals':1,'Location':'London'},
        {'Country':'Germany','Medals':45,'Location':'London'},
        {'Country':'Great Britain','Medals':48,'Location':'London'},
        {'Country':'Grenada','Medals':1,'Location':'London'},
        {'Country':'Hungary','Medals':12,'Location':'London'},
        {'Country':'Iran','Medals':4,'Location':'London'},
        {'Country':'Ireland','Medals':1,'Location':'London'},
        {'Country':'Italy','Medals':16,'Location':'London'},
        {'Country':'Jamaica','Medals':8,'Location':'London'},
        {'Country':'Japan','Medals':7,'Location':'London'},
        {'Country':'Kazakhstan','Medals':7,'Location':'London'},
        {'Country':'Kenya','Medals':2,'Location':'London'},
        {'Country':'Latvia','Medals':1,'Location':'London'},
        {'Country':'Lithuania','Medals':2,'Location':'London'},
        {'Country':'Mexico','Medals':16,'Location':'London'},
        {'Country':'Netherlands','Medals':21,'Location':'London'},
        {'Country':'New Zealand','Medals':9,'Location':'London'},
        {'Country':'North Korea','Medals':4,'Location':'London'},
        {'Country':'Norway','Medals':15,'Location':'London'},
        {'Country':'Poland','Medals':2,'Location':'London'},
        {'Country':'Romania','Medals':2,'Location':'London'},
        {'Country':'Russia','Medals':50,'Location':'London'},
        {'Country':'Serbia','Medals':1,'Location':'London'},
        {'Country':'Slovenia','Medals':1,'Location':'London'},
        {'Country':'South Africa','Medals':6,'Location':'London'},
        {'Country':'South Korea','Medals':18,'Location':'London'},
        {'Country':'Spain','Medals':5,'Location':'London'},
        {'Country':'Sweden','Medals':2,'Location':'London'},
        {'Country':'Switzerland','Medals':2,'Location':'London'},
        {'Country':'Trinidad and Tobago','Medals':1,'Location':'London'},
        {'Country':'Tunisia','Medals':1,'Location':'London'},
        {'Country':'Turkey','Medals':2,'Location':'London'},
        {'Country':'Uganda','Medals':1,'Location':'London'},
        {'Country':'Ukraine','Medals':9,'Location':'London'},
        {'Country':'United States','Medals':145,'Location':'London'},
        {'Country':'Uzbekistan','Medals':1,'Location':'London'},
        {'Country':'Venezuela','Medals':1,'Location':'London'}
    ]};

var tooltip3 = d3.select("#scene3")
.append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "black")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("color", "white")

var showTooltip3 = function(d) {
tooltip3
  .transition()
  .duration(200)
tooltip3
  .style("opacity", 1)
  .html("Country: " + d.data.Country + "<br/>Gold Medals: " + d.data.Medals + "<br/>Location: " + d.data.Location)
  .style("left", (d3.mouse(this)[0]) + "px")
  .style("top", (d3.mouse(this)[1]) + "px")
}
var moveTooltip3 = function(d) {
tooltip3
  .style("left", (d3.mouse(this)[0]) + "px")
  .style("top", (d3.mouse(this)[1]) + "px")
}
var hideTooltip3 = function(d) {
tooltip3
  .transition()
  .duration(200)
  .style("opacity", 0)
}


var diameter = 500;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#scene3")
    .append("svg")
    .attr("width", diameter)
    .attr("height", diameter)
    .attr("class", "bubble");

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
        .on("mouseover", showTooltip3)
    .on("mousemove", moveTooltip3)
    .on("mouseleave", hideTooltip3)
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

const annotation3 = [
    {
        note: {
            title: "US 145 Gold Medals",
            lineType: "none"
        },
        connector: {
            end: "dot",
            endScale: 4
        },
        color: ["white"],
        x: 260,
        y: 300,
        dy: 90,
        dx: 90
    }
]

// Add annotation to the chart
const makeAnnotation3 = d3.annotation()
    .annotations(annotation3)

d3.select("#annotation3")
    .append("g")
    .call(makeAnnotation3)
