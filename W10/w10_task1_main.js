d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/W10/w10_task1.csv")
    .then( data => {
        data.forEach( d => { d.label=d.label; d.width=+d.width; d.color=d.color});

        var config = {
            parent: '#drawing_region',
            width: 256,
            height: 256,
        };

        const piechart = new PieChart( config, data );
        piechart.update();
    })
    .catch( error => {
        console.log( error );
    });


//var data = [100,50,80,20];

var svg = d3.select('#drawing_region');
update( data );

function update(data) {
    let padding = 10;
    let height = 20;

    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .transition().duration(1000)
        .attr("x", padding)
        .attr("y", (d,i) => padding + i * ( height + padding ))
        .attr("width", d => d)
        .attr("height", height);
}

d3.select('#reverse')
    .on('click', d => {
        data.reverse();
        update(data);
    });
