dataset = {
    'children': [
        {'Country':'Argentina','Medals':21,'Location':'Rio de Janeiro, Brazil','Male':19, 'Female':2},
        {'Country':'Armenia','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Australia','Medals':23,'Location':'Rio de Janeiro, Brazil','Male':3, 'Female':20},
        {'Country':'Azerbaijan','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Bahamas','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':1},
        {'Country':'Bahrain','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':1},
        {'Country':'Belarus','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Belgium','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':1},
        {'Country':'Brazil','Medals':36,'Location':'Rio de Janeiro, Brazil','Male':33, 'Female':3},
        {'Country':'Canada','Medals':4,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':3},
        {'Country':'China','Medals':46,'Location':'Rio de Janeiro, Brazil','Male':16, 'Female':30},
        {'Country':'Chinese Taipei','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':1},
        {'Country':'Colombia','Medals':3,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':2},
        {'Country':'Cote dIvoire','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Croatia','Medals':7,'Location':'Rio de Janeiro, Brazil','Male':5, 'Female':2},
        {'Country':'Cuba','Medals':5,'Location':'Rio de Janeiro, Brazil','Male':5, 'Female':0},
        {'Country':'Czech Republic','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Denmark','Medals':15,'Location':'Rio de Janeiro, Brazil','Male':15, 'Female':0},
        {'Country':'Ethiopia','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':1},
        {'Country':'Fiji','Medals':13,'Location':'Rio de Janeiro, Brazil','Male':13, 'Female':0},
        {'Country':'France','Medals':20,'Location':'Rio de Janeiro, Brazil','Male':16, 'Female':4},
        {'Country':'Georgia','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':2, 'Female':0},
        {'Country':'Germany','Medals':49,'Location':'Rio de Janeiro, Brazil','Male':20, 'Female':29},
        {'Country':'Great Britain','Medals':64,'Location':'Rio de Janeiro, Brazil','Male':35, 'Female':29},
        {'Country':'Greece','Medals':3,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':2},
        {'Country':'Hungary','Medals':12,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':11},
        {'Country':'Indonesia','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':1},
        {'Country':'Iran','Medals':3,'Location':'Rio de Janeiro, Brazil','Male':3, 'Female':0},
        {'Country':'Italy','Medals':8,'Location':'Rio de Janeiro, Brazil','Male':7, 'Female':1},
        {'Country':'Jamaica','Medals':11,'Location':'Rio de Janeiro, Brazil','Male':9, 'Female':2},
        {'Country':'Japan','Medals':17,'Location':'Rio de Janeiro, Brazil','Male':9, 'Female':8},
        {'Country':'Jordan','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Kazakhstan','Medals':3,'Location':'Rio de Janeiro, Brazil','Male':3, 'Female':0},
        {'Country':'Kenya','Medals':6,'Location':'Rio de Janeiro, Brazil','Male':3, 'Female':3},
        {'Country':'Kosovo','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Netherlands','Medals':9,'Location':'Rio de Janeiro, Brazil','Male':7, 'Female':2},
        {'Country':'New Zealand','Medals':6,'Location':'Rio de Janeiro, Brazil','Male':5, 'Female':1},
        {'Country':'North Korea','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':1},
        {'Country':'Poland','Medals':3,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':3},
        {'Country':'Puerto Rico','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':1},
        {'Country':'Romania','Medals':4,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':4},
        {'Country':'Russia','Medals':52,'Location':'Rio de Janeiro, Brazil','Male':41, 'Female':11},
        {'Country':'Serbia','Medals':14,'Location':'Rio de Janeiro, Brazil','Male':14, 'Female':0},
        {'Country':'Singapore','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Slovakia','Medals':3,'Location':'Rio de Janeiro, Brazil','Male':3, 'Female':0},
        {'Country':'Slovenia','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':1},
        {'Country':'Switzerland','Medals':6,'Location':'Rio de Janeiro, Brazil','Male':6, 'Female':0},
        {'Country':'Spain','Medals':9,'Location':'Rio de Janeiro, Brazil','Male':5, 'Female':4},
        {'Country':'South Africa','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':1},
        {'Country':'South Korea','Medals':13,'Location':'Rio de Janeiro, Brazil','Male':6, 'Female':7},
        {'Country':'Sweden','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':2},
        {'Country':'Tajikistan','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Thailand','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':0, 'Female':2},
        {'Country':'Turkey','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0},
        {'Country':'Ukraine','Medals':2,'Location':'Rio de Janeiro, Brazil','Male':2, 'Female':0},
        {'Country':'United States','Medals':139,'Location':'Rio de Janeiro, Brazil','Male':54, 'Female':85},
        {'Country':'Uzbekistan','Medals':4,'Location':'Rio de Janeiro, Brazil','Male':4, 'Female':0},
        {'Country':'Vietnam','Medals':1,'Location':'Rio de Janeiro, Brazil','Male':1, 'Female':0}
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
            + "<br/>Men won : <strong>" +  d.data.Male + "</strong>"
            + "<br/>Women won : <strong>" + d.data.Female + "</strong>"
            + "</br/>-------------------"
            + "<br/>Worldwide Gold Medals: <strong>665</strong>"
            + "<br/>Worldwide Men won: <strong>347</strong>"
            + "<br/>Worldwide Women won: <strong>318</strong>"
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

var size = window.innerHeight/2;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([size, size])
    .padding(1.5);

var svg = d3.select("#scene4")
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
        y: 230,
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
    .style("height", size);
