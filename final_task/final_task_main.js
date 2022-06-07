let select_month;

d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/final_task/infected_Commercial.csv")
    .then( data => {
        data.forEach( d => { d.month = +d.Month_2020;d.infected=+d.infected_month;d.Machinery_Equipment=+d.Machinery_Equipment;d.Food_Beverages=+d.Food_Beverages;d.Textiles=d.Textiles;d.Furniture=+d.Furniture});
        var config = {
            parent: '#drawing_region',
            width: 1200,
            height: 256,
            margin: {top:30, right:700, bottom:40, left:80}
        };
        var config2 = {
            parent: '#drawing_region',
            width: 1200,
            height: 256,
            margin: {top:30, right:60, bottom:40, left:640}
        }

        const linechart = new LineChart( config, data );
        linechart.update();
        linechart.cercles
            .on('mouseover', (e,d) => {
                d3.select('#tooltip')
                    .style('opacity', 1)
                    .html(`<div class="tooltip-label">(month,num_infected)</div>(${d.month}, ${d.infected})`);
            })
            .on('mousemove', (e) => {
                const padding = 10;
                d3.select('#tooltip')
                    .style('left', (e.pageX + padding) + 'px')
                    .style('top', (e.pageY + padding) + 'px');
            })
            .on('mouseleave', () => {
                d3.select('#tooltip')
                    .style('opacity', 0);
            });

        const barchart = new BarChart( config2, data);
        barchart.update();

    })
    .catch( error => {
        console.log( error );
    });

function SelectMonth() {
    data[select_month+1].color = 'red';
    console.log(data);
    scatter_plot.update();
}