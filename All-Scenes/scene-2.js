dataset = {
    'children': [
        {'Country':'Austria','Medals':4,'Location':'Sochi, Russia'},
        {'Country':'Belarus','Medals':5,'Location':'Sochi, Russia'},
        {'Country':'Canada','Medals':59,'Location':'Sochi, Russia'},
        {'Country':'China','Medals':3,'Location':'Sochi, Russia'},
        {'Country':'Czech Republic','Medals':2,'Location':'Sochi, Russia'},
        {'Country':'Finland','Medals':2,'Location':'Sochi, Russia'},
        {'Country':'France','Medals':4,'Location':'Sochi, Russia'},
        {'Country':'Germany','Medals':15,'Location':'Sochi, Russia'},
        {'Country':'Great Britain','Medals':1,'Location':'Sochi, Russia'},
        {'Country':'Japan','Medals':1,'Location':'Sochi, Russia'},
        {'Country':'Neitherland','Medals':13,'Location':'Sochi, Russia'},
        {'Country':'Norway','Medals':18,'Location':'Sochi, Russia'},
        {'Country':'Poland','Medals':4,'Location':'Sochi, Russia'},
        {'Country':'Russia','Medals':33,'Location':'Sochi, Russia'},
        {'Country':'Slovakia','Medals':3,'Location':'Sochi, Russia'},
        {'Country':'South Korea','Medals':7,'Location':'Sochi, Russia'},
        {'Country':'Sweden','Medals':8,'Location':'Sochi, Russia'},
        {'Country':'Switzerland','Medals':6,'Location':'Sochi, Russia'},
        {'Country':'Ukraine','Medals':4,'Location':'Sochi, Russia'},
        {'Country':'USA','Medals':10,'Location':'Sochi, Russia'}
    ]};

var tooltip2 = d3.select("#scene2")
.append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "black")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("color", "white")

var showTooltip2 = function(d) {
tooltip2
  .transition()
  .duration(200)
tooltip2
  .style("opacity", 1)
  .html("Country: " + d.data.Country + "<br/>Gold Medals: " + d.data.Medals + "<br/>Location: " + d.data.Location)
  .style("left", (d3.mouse(this)[0]) + "px")
  .style("top", (d3.mouse(this)[1]) + "px")
}
var moveTooltip2 = function(d) {
tooltip2
  .style("left", (d3.mouse(this)[0]) + "px")
  .style("top", (d3.mouse(this)[1]) + "px")
}
var hideTooltip2 = function(d) {
tooltip2
  .transition()
  .duration(200)
  .style("opacity", 0)
}

var diameter = 500;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#scene2")
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
    .on("mouseover", showTooltip2)
    .on("mousemove", moveTooltip2)
    .on("mouseleave", hideTooltip2)
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
    })

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

const annotation2 = [
    {
        note: {
            title: "Russia back in game",
            lineType: "none",
            align: "left"
        },
        connector: {
            end: "dot",
            endScale: 4
        },
        color: ["white"],
        x: 290,
        y: 300,
        dy: 70,
        dx: 60
    }
]

// Add annotation to the chart
const makeAnnotation2 = d3.annotation()
    .annotations(annotation2)

d3.select("#annotation2")
    .append("g")
    .call(makeAnnotation2)

d3.select(self.frameElement)
    .style("height", diameter + "px");

