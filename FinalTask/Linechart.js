class LineChart {

    constructor( config, data ) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            margin: config.margin || {top:10, right:40, bottom:10, left:10}
        }
        this.data = data
        this.init();
    }

    init() {
        let self = this;

        self.svg = d3.select( self.config.parent )
            .attr('width', self.config.width)
            .attr('height', self.config.height);

        self.chart = self.svg.append('g')
            .attr('transform', `translate(${self.config.margin.left}, ${self.config.margin.top})`);

        self.inner_width = self.config.width - self.config.margin.left - self.config.margin.right;
        self.inner_height = self.config.height - self.config.margin.top - self.config.margin.bottom;

        self.xscale = d3.scaleLinear()
            .range( [0, self.inner_width] );

        self.yscale = d3.scaleLinear()
            .range( [0, self.inner_height] )

        self.xaxis = d3.axisBottom( self.xscale )
            .ticks(10)
            .tickSizeOuter(0);
          
        self.yaxis = d3.axisLeft( self.yscale)
            .ticks(5)
            .tickSizeOuter(0);
        
        self.xaxis_group = self.chart.append('g')
            .attr('transform', `translate(0, ${self.inner_height})`);
        
        self.yaxis_group = self.chart.append('g')

        self.line = d3.line()
            .x( d => self.xscale(d.month))
            .y( d => self.yscale(d.infected));

        self.svg.append("text")
            .attr("x",80)
            .attr("y",20)
            .attr("font-weight","bold")
            .attr("font-size",20)
            .text("2020 number of new cases of COVID-19");

        self.svg.append("text")
            .attr("x",230)
            .attr("y",253)
            .attr("font-size",16)
            .text("month (in 2020)");
        
        self.svg.append("text")
            .attr("x",-30)
            .attr("y",170)
            .attr("font-size",16)
            .attr('transform', `rotate(-90,20,160)`)
            .text("number of infected person");

        const xmin = d3.min( self.data, d => d.month );
        const xmax = d3.max( self.data, d => d.month );
        self.xscale.domain( [xmin,12] );

        const ymin = d3.min( self.data, d => d.infected );
        const ymax = d3.max( self.data, d => d.infected );
        self.yscale.domain( [ymax,ymin] );

        self.chart.append("path")
            .data(self.data)
            .join("path")
            .attr('d', self.line(self.data))
            .attr('stroke', 'black')
            .attr('fill', 'none');
    }

    update() {
        let self = this;
        //const xmin = d3.min( self.data, d => d.month );
        //const xmax = d3.max( self.data, d => d.month );
        //self.xscale.domain( [xmin,12] );

        //const ymin = d3.min( self.data, d => d.infected );
        //const ymax = d3.max( self.data, d => d.infected );
        //self.yscale.domain( [ymax,ymin] );       

        self.render();
    }

    render() {
        let self = this;
        self.xaxis_group
            .call(self.xaxis);
        
        self.yaxis_group
            .call(self.yaxis);

        
        let circles = self.chart.selectAll("circle")
            .data(self.data)
            .join('circle')
            .on('click', function(ev,d){
                d3.select(this)
                    .attr("fill", "red");
                select_month = d.month;
                SelectMonth();
            });
            //.enter()
            //.append("circle")
        circles
            .transition().duration(500)
            .attr("r", d => d.circle_size)
            .attr("cx", d => self.xscale( d.month ) )
            .attr("cy", d => self.yscale( d.infected ) )
            .attr("fill", d => d.color );

        circles
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


    }
}