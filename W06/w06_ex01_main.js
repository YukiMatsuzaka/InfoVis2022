d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/W04/data.csv")
    .then( data => {
        ShowScatterPlot( data );
    })
    .catch( error => {
        console.error( error );
    });

function ShowScatterPlot( data ) {
    var svg = d3.select("body").append("svg");
    svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.r);
};
