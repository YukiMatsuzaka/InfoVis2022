d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/W04/w04_task1.csv")
    .then( data => {
        data.forEach( d => { d.x = +d.x; d.y = +d.y; });

        var config = {
            parent: '#drawing_region',
            width: 300,
            height: 300,
            margin: {top:50, right:20, bottom:50, left:60}
        };

        const scatter_plot = new ScatterPlot( config, data );
        scatter_plot.update();
    })
    .catch( error => {
        console.log( error );
    });

class ScatterPlot {

    constructor( config, data ) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            margin: config.margin || {top:10, right:10, bottom:20, left:10}
        }
        this.data = data;
        this.init();
    }

    init() {
        let self = this;

        self.svg = d3.select( self.config.parent )
            .attr('width', self.config.width)
            .attr('height', self.config.height)

        self.chart = self.svg.append('g')
            .attr('transform', `translate(${self.config.margin.left}, ${self.config.margin.top})`)

        self.inner_width = self.config.width - self.config.margin.left - self.config.margin.right;
        self.inner_height = self.config.height - self.config.margin.top - self.config.margin.bottom;

        self.xscale = d3.scaleLinear()
            .range( [0, self.inner_width] );

        self.yscale = d3.scaleLinear()
            .range( [0,self.inner_height] );

        self.xaxis = d3.axisBottom( self.xscale )
            .ticks(10);

        self.xaxis_group = self.chart.append('g')
            .attr('transform', `translate(0, ${self.inner_height})`)
        
        self.yaxis = d3.axisLeft( self.yscale )
            .ticks(10);
        
        self.yaxis_group = self.chart.append('g')
            .attr('transform', `translate(0,0)`);
        
    }

    update() {
        let self = this;

        const xmin = d3.min( self.data, d => d.x );
        const xmax = d3.max( self.data, d => d.x );
        self.xscale.domain( [xmin-20, xmax+30] );

        const ymin = d3.min( self.data, d => d.y );
        const ymax = d3.max( self.data, d => d.y );
        self.yscale.domain( [ ymax+20,ymin-20] );

        self.render();
    }

    render() {
        let self = this;

        self.chart.selectAll("circle")
            .data(self.data)
            .enter()
            .append("circle")
            .attr("cx", d => self.xscale( d.x ) )
            .attr("cy", d => self.yscale( d.y ) )
            .attr("r", d => d.r )
            .style("fill", function(d){ return d.color; });

        self.xaxis_group
            .call( self.xaxis );
        
        self.yaxis_group
            .call( self.yaxis );

        self.svg.append("text")
            .attr("x",0)
            .attr("y",140)
            .attr("font-weight","bold")
            .attr('transform', `rotate(-90,20,140)`)
            .text("Y-label")
        
        self.svg.append("text")
            .attr("x",150)
            .attr("y",290)
            .attr("font-weight","bold")
            .text("X-label")

        self.svg.append("text")
            .attr("x",120)
            .attr("y",30)
            .attr("font-weight","bold")
            .attr("font-size",25)
            .text("Chart Title")
        
        self.svg.append("text")
            .attr("x",15)
            .attr("y",255)
            .attr("font-size",12)
            .text("ymin")

        self.svg.append("text")
            .attr("x",5)
            .attr("y",52)
            .attr("font-size",12)
            .text("ymax")
        
        self.svg.append("text")
            .attr("x",45)
            .attr("y",280)
            .attr("font-size",12)
            .text("xmin")
        
        self.svg.append("text")
            .attr("x",270)
            .attr("y",280)
            .attr("font-size",12)
            .text("xmax")
        

    }
}
