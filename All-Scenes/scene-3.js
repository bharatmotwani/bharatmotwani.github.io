dataset = {
    'children': [
        {'Country':'Algeria','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Argentina','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Australia','Medals':18,'Location':'London','Male':9, 'Female':9},
        {'Country':'Azerbaijan','Medals':2,'Location':'London','Male':2, 'Female':0},
        {'Country':'Bahamas','Medals':4,'Location':'London','Male':4, 'Female':0},
        {'Country':'Belarus','Medals':3,'Location':'London','Male':2, 'Female':1},
        {'Country':'Brazil','Medals':14,'Location':'London','Male':1, 'Female':13},
        {'Country':'Canada','Medals':1,'Location':'London','Male':0, 'Female':1},
        {'Country':'China','Medals':56,'Location':'London','Male':27, 'Female':29},
        {'Country':'Colombia','Medals':1,'Location':'London','Male':0, 'Female':1},
        {'Country':'Croatia','Medals':15,'Location':'London','Male':14, 'Female':1},
        {'Country':'Cuba','Medals':5,'Location':'London','Male':4, 'Female':1},
        {'Country':'Czech Republic','Medals':4,'Location':'London','Male':2, 'Female':2},
        {'Country':'Denmark','Medals':3,'Location':'London','Male':3, 'Female':0},
        {'Country':'Dominican Republic','Medals':1,'Location':'London','Male':2, 'Female':2},
        {'Country':'Ethiopia','Medals':3,'Location':'London','Male':0, 'Female':3},
        {'Country':'France','Medals':30,'Location':'London','Male':26, 'Female':4},
        {'Country':'Georgia','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Germany','Medals':45,'Location':'London','Male':39, 'Female':6},
        {'Country':'Great Britain','Medals':48,'Location':'London','Male':31, 'Female':17},
        {'Country':'Grenada','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Hungary','Medals':12,'Location':'London','Male':6, 'Female':6},
        {'Country':'Iran','Medals':4,'Location':'London','Male':4, 'Female':0},
        {'Country':'Ireland','Medals':1,'Location':'London','Male':0, 'Female':1},
        {'Country':'Italy','Medals':16,'Location':'London','Male':10, 'Female':6},
        {'Country':'Jamaica','Medals':8,'Location':'London','Male':7, 'Female':1},
        {'Country':'Japan','Medals':7,'Location':'London','Male':3, 'Female':4},
        {'Country':'Kazakhstan','Medals':7,'Location':'London','Male':3, 'Female':4},
        {'Country':'Kenya','Medals':2,'Location':'London','Male':2, 'Female':0},
        {'Country':'Latvia','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Lithuania','Medals':2,'Location':'London','Male':0, 'Female':2},
        {'Country':'Mexico','Medals':16,'Location':'London','Male':16, 'Female':0},
        {'Country':'Netherlands','Medals':21,'Location':'London','Male':2, 'Female':19},
        {'Country':'New Zealand','Medals':9,'Location':'London','Male':5, 'Female':4},
        {'Country':'North Korea','Medals':4,'Location':'London','Male':2, 'Female':2},
        {'Country':'Norway','Medals':15,'Location':'London','Male':1, 'Female':14},
        {'Country':'Poland','Medals':2,'Location':'London','Male':2, 'Female':0},
        {'Country':'Romania','Medals':2,'Location':'London','Male':1, 'Female':1},
        {'Country':'Russia','Medals':50,'Location':'London','Male':24, 'Female':26},
        {'Country':'Serbia','Medals':1,'Location':'London','Male':0, 'Female':1},
        {'Country':'Slovenia','Medals':1,'Location':'London','Male':0, 'Female':1},
        {'Country':'South Africa','Medals':6,'Location':'London','Male':6, 'Female':0},
        {'Country':'South Korea','Medals':18,'Location':'London','Male':11, 'Female':7},
        {'Country':'Spain','Medals':5,'Location':'London','Male':1, 'Female':4},
        {'Country':'Sweden','Medals':2,'Location':'London','Male':2, 'Female':0},
        {'Country':'Switzerland','Medals':2,'Location':'London','Male':1, 'Female':1},
        {'Country':'Trinidad and Tobago','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Tunisia','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Turkey','Medals':2,'Location':'London','Male':1, 'Female':1},
        {'Country':'Uganda','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Ukraine','Medals':9,'Location':'London','Male':4, 'Female':5},
        {'Country':'United States','Medals':145,'Location':'London','Male':42, 'Female':103},
        {'Country':'Uzbekistan','Medals':1,'Location':'London','Male':1, 'Female':0},
        {'Country':'Venezuela','Medals':1,'Location':'London','Male':1, 'Female':0}
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
        .html("Country: <strong> " + d.data.Country  + "</strong>"
            + "<br/>Gold medals: <strong>" + d.data.Medals + "</strong>"
            + "<br/>Men won : <strong>" +  d.data.Male + "</strong>"
            + "<br/>Women won : <strong>" + d.data.Female + "</strong>"
            + "</br/>-------------------"
            + "<br/>Worldwide Gold Medals: <strong>632</strong>"
            + "<br/>Worldwide Men won: <strong>331</strong>"
            + "<br/>Worldwide Women won: <strong>301</strong>"
            + "<br/>Olympics held in: <strong>" + d.data.Location + "</strong>" )
        .style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px")
    d3.select(this).select("circle").style("stroke", "white").style("stroke-width", "3px");
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
    d3.select(this).select("circle").style("stroke", "transparent");
}


var size = window.innerHeight/2;
var color = d3.scaleOrdinal(d3.schemeCategory20);

var bubble = d3.pack(dataset)
    .size([size, size])
    .padding(1.5);

var svg = d3.select("#scene3")
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
            title: "USA arises as new winner",
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
const makeAnnotation3 = d3.annotation()
    .annotations(annotation3)

d3.select("#annotation3")
    .append("g")
    .call(makeAnnotation3)

d3.select(self.frameElement)
    .style("height", size);
