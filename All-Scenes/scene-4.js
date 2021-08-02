dataset = {
    'children': [
        {'Country':'Argentina','Medals':21,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Armenia','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Australia','Medals':23,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Azerbaijan','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Bahamas','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Bahrain','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Belarus','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Belgium','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Brazil','Medals':36,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Canada','Medals':4,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'China','Medals':47,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Colombia','Medals':3,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Cote dIvoire','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Croatia','Medals':7,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Cuba','Medals':5,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Czech Republic','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Denmark','Medals':15,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Ethiopia','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Ethiopia','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Fiji','Medals':13,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'France','Medals':20,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Georgia','Medals':2,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Germany','Medals':49,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Great Britain','Medals':64,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Greece','Medals':3,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Hungary','Medals':12,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Indonesia','Medals':2,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Iran','Medals':3,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Italy','Medals':8,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Jamaica','Medals':11,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Japan','Medals':17,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Jordan','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Kazakhstan','Medals':3,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Kenya','Medals':6,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Kosovo','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Netherlands','Medals':9,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'New Zealand','Medals':6,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'North Korea','Medals':2,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Poland','Medals':3,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Puerto Rico','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Romania','Medals':4,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Russia','Medals':52,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Serbia','Medals':14,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Singapore','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Slovakia','Medals':3,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Slovenia','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Switzerland','Medals':6,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Spain','Medals':9,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'South Africa','Medals':2,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'South Korea','Medals':13,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Sweden','Medals':2,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Tajikistan','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Thailand','Medals':2,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Turkey','Medals':1,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Ukraine','Medals':2,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'United States','Medals':139,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Uzbekistan','Medals':4,'Location':'Rio de Janeiro, Brazil'},
        {'Country':'Vietnam','Medals':1,'Location':'Rio de Janeiro, Brazil'}
    ]};

var tooltip4 = d3.select("#scene4")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")

var showTooltip4 = function(d) {
    tooltip4
        .transition()
        .duration(200)
    tooltip4
        .style("opacity", 1)
        .html("Country: <strong> " + d.data.Country  + "</strong>"
            + "<br/>Gold medals: <strong>" + d.data.Medals + "</strong>"
            + "<br/>Men won: <strong>347</strong>"
            + "<br/>Women won: <strong>318</strong>"
            + "<br/>Olympics held in: <strong>" + d.data.Location + "</strong>" )
        .style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    d3.select(this).select("circle").style("stroke", "white").style("stroke-width", "3px");
}
var moveTooltip4 = function(d) {
    tooltip4
        .style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
}
var hideTooltip4 = function(d) {
    tooltip4
        .transition()
        .duration(200)
        .style("opacity", 0)
    d3.select(this).select("circle").style("stroke", "transparent");
}

var diameter = window.innerHeight/2;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([diameter, diameter])
    .padding(1.5);

var svg = d3.select("#scene4")
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
    .on("mouseover", showTooltip4)
    .on("mousemove", moveTooltip4)
    .on("mouseleave", hideTooltip4)
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


const annotation4 = [
    {
        note: {
            title: "USA is still leading",
            lineType: "none"
        },
        connector: {
            end: "dot",
            endScale: 4
        },
        color: ["white"],
        x: 300,
        y: 200,
        dy: 90,
        dx: 90
    }
]

// Add annotation to the chart
const makeAnnotation4 = d3.annotation()
    .annotations(annotation4)

d3.select("#annotation4")
    .append("g")
    .call(makeAnnotation4)

d3.select(self.frameElement)
    .style("height", diameter);
