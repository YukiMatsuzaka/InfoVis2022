class BarChart {

    constructor( config, data ) {
        this.config = {
            parent: config.parent,
            width: config.width || 256,
            height: config.height || 256,
            margin: config.margin || {top:10, right:10, bottom:10, left:10}
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

        self.yscale = d3.scaleBand()
            .range( [0, self.inner_height] )
            .paddingInner(0.1);

        self.xaxis = d3.axisBottom( self.xscale )
            .ticks(10)
            .tickSizeOuter(0);
        
        
        self.yaxis = d3.axisLeft( self.yscale)
            .tickSizeOuter(0);
        
        self.xaxis_group = self.chart.append('g')
            .attr('transform', `translate(0, ${self.inner_height})`);
        
        
        self.yaxis_group = self.chart.append('g');
        
    }

    update() {
        let self = this;
        const xmax = d3.max( self.data, d => d.Machinery_Equipment );
        self.xscale.domain( [0,xmax] );

        const ymap = self.data.map(d => d.month)
        self.yscale.domain(ymap) 

        self.render();
    }

    render() {
        let self = this;


        self.xaxis_group
            .call(self.xaxis);
        
        self.yaxis_group
            .call(self.yaxis);

        self.rect = self.chart.selectAll(".bar")
            .data(self.data)
            .join("rect")
            .on('click', function(ev,d){
                d3.selectAll(".bar").attr("fill",d => d.color)
                d3.select(this)
                    .attr("fill", "red");
                    //.classed('active',true);
                select_month = d.month;
                SelectMonth();
            })
            .attr("class", "bar")
            .transition().duration(1000)
            .attr("x", 0)
            .attr("y", d => self.yscale(d.month))
            .attr("width", d => self.xscale(d.Machinery_Equipment))
            .attr("height", self.yscale.bandwidth())
            .attr("fill", d => d.color)
        

    }
}