dataset = {
    'children': [
        {'Country':'Australia','Medals':2,'Location':'Vancouver, Canada','Male':0, 'Female':2},
        {'Country':'Austria','Medals':11,'Location':'Vancouver, Canada','Male':10, 'Female':1},
        {'Country':'Belarus','Medals':1,'Location':'Vancouver, Canada','Male':1, 'Female':0},
        {'Country':'Canada','Medals':67,'Location':'Vancouver, Canada','Male':40, 'Female':27},
        {'Country':'China','Medals':9,'Location':'Vancouver, Canada','Male':1, 'Female':8},
        {'Country':'Czech Republic','Medals':2,'Location':'Vancouver, Canada','Male':0, 'Female':2},
        {'Country':'France','Medals':2,'Location':'Vancouver, Canada','Male':2, 'Female':0},
        {'Country':'Germany','Medals':15,'Location':'Vancouver, Canada','Male':3, 'Female':12},
        {'Country':'Great Britain','Medals':1,'Location':'Vancouver, Canada','Male':0, 'Female':1},
        {'Country':'Italy','Medals':1,'Location':'Vancouver, Canada','Male':1, 'Female':0},
        {'Country':'Netherlands','Medals':4,'Location':'Vancouver, Canada','Male':2, 'Female':2},
        {'Country':'Norway','Medals':16,'Location':'Vancouver, Canada','Male':9, 'Female':7},
        {'Country':'Poland','Medals':1, 'Location':'Vancouver, Canada','Male':0, 'Female':1},
        {'Country':'Russia','Medals':6,'Location':'Vancouver, Canada','Male':2, 'Female':4},
        {'Country':'Slovakia','Medals':1,'Location':'Vancouver, Canada','Male':0, 'Female':1},
        {'Country':'South Korea','Medals':6,'Location':'Vancouver, Canada','Male':4, 'Female':2},
        {'Country':'Sweden','Medals':11,'Location':'Vancouver, Canada','Male':6, 'Female':5},
        {'Country':'Switzerland','Medals':6,'Location':'Vancouver, Canada','Male':6, 'Female':0},
        {'Country':'USA','Medals':12,'Location':'Vancouver, Canada','Male':10, 'Female':2}
    ]};

var tooltip1 = d3.select("#scene1")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")

var showTooltip = function(d) {
    tooltip1
        .transition()
        .duration(200)
    tooltip1
        .style("opacity", 1)
        .html("Country: <strong> " + d.data.Country  + "</strong>"
            + "<br/>Gold medals: <strong>" + d.data.Medals + "</strong>"
            + "<br/>Men won : <strong>" +  d.data.Male + "</strong>"
            + "<br/>Women won : <strong>" + d.data.Female + "</strong>"
            + "</br/>-------------------"
            + "<br/>Worldwide Gold Medals: <strong>174</strong>"
            + "<br/>Worldwide Men won: <strong>97</strong>"
            + "<br/>Worldwide Women won: <strong>77</strong>"
            + "<br/>Olympics held in: <strong>" + d.data.Location + "</strong>" )
        .style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px");

    d3.select(this).select("circle").style("stroke", "white").style("stroke-width", "3px");
}
var moveTooltip = function(d) {
    tooltip1
        .style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
}
var hideTooltip = function(d) {
    tooltip1
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

var svg = d3.select("#scene1")
    .append("svg")
    .attr("width", size)
    .attr("height", size)
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


const annotation1 = [
    {
        note: {
            title: "Hover bubbles for details",
            lineType: "none"
        },
        connector: {
            end: "dot",
            endScale: 4
        },
        color: ["white"],
        x: 300,
        y: 230,
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

d3.select(self.frameElement)
    .style("height", size);