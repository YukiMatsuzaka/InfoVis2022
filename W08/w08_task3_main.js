d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/W08/w04_task2_fix.csv")
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

class PieChart {

    constructor( config, data ) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
        }
        this.data = data
        this.init();
    }

    init() {
        let self = this;

        self.svg = d3.select( self.config.parent )
            .attr('width', self.config.width)
            .attr('height', self.config.height)
            .append('g')
            .attr('transform', `translate(${self.config.width/2}, ${self.config.height/2})`);

        self.radius = Math.min( self.config.width, self.config.height ) / 2;

        self.pie = d3.pie()
            .value( d => d.width);

        self.arc = d3.arc()
            .innerRadius(0)
            .outerRadius(self.radius);

        self.text_arc = d3.arc()
            .innerRadius(self.radius - 30)
            .outerRadius(self.radius - 30);

    }

    update() {
        let self = this;   

        self.render();
    }

    render() {
        let self = this;

        self.g = self.svg.selectAll("pie")
            .data(self.pie(self.data))
            .enter()
            .append("g")
            .attr("class", "pie");

        self.g.append("path")
            .attr("d", self.arc)
            .attr("fill", "black")
            .attr("opacity", 0.75)
            .attr("stroke", "white");


        self.g.append("text")
            .attr("fill", "black")
            .attr("transform", function(d) {return "translate(" + self.text_arc.centroid(d) + ")"; })
            .attr("dy", "5px")
            .attr("font", "10px")
            .attr("text-anchor", "middle")
            .text(function(d) {return d.data.label; })


    }
}
