d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/final_task/Commercial.csv")
    .then( data => {
        data.forEach( d => { d.Industry=d.Industry;d.month_1=+d.month_1});
        var config = {
            parent: '#drawing_region',
            width: 1024,
            height: 256,
            margin: {top:30, right:30, bottom:40, left:600}
        };

        const barchart = new BarChart( config, data);
        barchart.update();
    })
    .catch( error => {
        console.log( error );
    });

d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/final_task/infected.csv")
.then( data => {
    data.forEach( d => { d.month = d.Month_2020;d.infected=+d.infected_month});
    var config = {
        parent: '#drawing_region',
        width: 1024,
        height: 256,
        margin: {top:30, right:512, bottom:40, left:80}
    };

    const linechart = new LineChart( config, data );
    linechart.update();
})
.catch( error => {
    console.log( error );
});