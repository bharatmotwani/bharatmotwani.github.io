dataset = {
    'children': [
        {'Country':'Austria','Medals':4,'Location':'Sochi, Russia','Male':2, 'Female':2},
        {'Country':'Belarus','Medals':5,'Location':'Sochi, Russia','Male':1, 'Female':4},
        {'Country':'Canada','Medals':59,'Location':'Sochi, Russia','Male':31, 'Female':28},
        {'Country':'China','Medals':3,'Location':'Sochi, Russia','Male':0, 'Female':3},
        {'Country':'Czech Republic','Medals':2,'Location':'Sochi, Russia','Male':0, 'Female':2},
        {'Country':'Finland','Medals':2,'Location':'Sochi, Russia','Male':2, 'Female':0},
        {'Country':'France','Medals':4,'Location':'Sochi, Russia','Male':4, 'Female':0},
        {'Country':'Germany','Medals':15,'Location':'Sochi, Russia','Male':11, 'Female':4},
        {'Country':'Great Britain','Medals':1,'Location':'Sochi, Russia','Male':0, 'Female':1},
        {'Country':'Japan','Medals':1,'Location':'Sochi, Russia','Male':1, 'Female':0},
        {'Country':'Netherlands','Medals':13,'Location':'Sochi, Russia','Male':7, 'Female':6},
        {'Country':'Norway','Medals':18,'Location':'Sochi, Russia','Male':11, 'Female':7},
        {'Country':'Poland','Medals':4,'Location':'Sochi, Russia','Male':3, 'Female':1},
        {'Country':'Russia','Medals':33,'Location':'Sochi, Russia','Male':26, 'Female':7},
        {'Country':'Slovakia','Medals':3,'Location':'Sochi, Russia','Male':0, 'Female':3},
        {'Country':'South Korea','Medals':7,'Location':'Sochi, Russia','Male':7, 'Female':0},
        {'Country':'Sweden','Medals':8,'Location':'Sochi, Russia','Male':4, 'Female':4},
        {'Country':'Switzerland','Medals':6,'Location':'Sochi, Russia','Male':4, 'Female':2},
        {'Country':'Ukraine','Medals':4,'Location':'Sochi, Russia','Male':0, 'Female':4},
        {'Country':'USA','Medals':10,'Location':'Sochi, Russia','Male':5, 'Female':5}
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
        .html("Country: <strong> " + d.data.Country  + "</strong>"
            + "<br/>Gold medals: <strong>" + d.data.Medals + "</strong>"
            + "<br/>Men won : <strong>" +  d.data.Male + "</strong>"
            + "<br/>Women won : <strong>" + d.data.Female + "</strong>"
            + "</br/>-------------------"
            + "<br/>Worldwide Gold Medals: <strong>202</strong>"
            + "<br/>Worldwide Men won: <strong>91</strong>"
            + "<br/>Worldwide Women won: <strong>111</strong>"
            + "<br/>Olympics held in: <strong>" + d.data.Location + "</strong>" )
        .style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    d3.select(this).select("circle").style("stroke", "white").style("stroke-width", "3px");
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
    d3.select(this).select("circle").style("stroke", "transparent");
}

var size = window.innerHeight/2;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([size, size])
    .padding(1.5);

var svg = d3.select("#scene2")
    .append("svg")
    .attr("width", size)
    .attr("height", size)
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
            title: "Canada is still leading",
            lineType: "none",
            align: "left"
        },
        connector: {
            end: "dot",
            endScale: 4
        },
        color: ["white"],
        x: 275,
        y: 230,
        dy: 90,
        dx: 90
    }
]

// Add annotation to the chart
const makeAnnotation2 = d3.annotation()
    .annotations(annotation2)

d3.select("#annotation2")
    .append("g")
    .call(makeAnnotation2)

d3.select(self.frameElement)
    .style("height", size);