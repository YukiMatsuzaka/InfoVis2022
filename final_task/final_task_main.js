d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/final_task/infected.csv")
    .then( data => {
        data.forEach( d => { d.month = d.Month_2020;d.infected=+d.infected_month});
        d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/final_task/Commercial.csv")

        var config = {
            parent: '#drawing_region',
            width: 512,
            height: 256,
            margin: {top:30, right:60, bottom:40, left:80}
        };

        const linechart = new LineChart( config, data );
        linechart.update();
    })
    .catch( error => {
        console.log( error );
    });
