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

        self.xscale = d3.scaleBand()
            .range( [0, self.inner_width] )
            .paddingInner(0.2)
            //.paddingOuter(0.1);

        self.yscale = d3.scaleLinear()
            .range( [ self.inner_height,0] )
            //.paddingInner(0.1);

        self.xaxis = d3.axisBottom( self.xscale )
            .tickSizeOuter(0);
        
        
        self.yaxis = d3.axisLeft( self.yscale)
            .ticks(10)
            .tickSizeOuter(0);
        
        self.xaxis_group = self.chart.append('g')
            .attr('transform', `translate(0, ${self.inner_height})`);
        
        
        self.yaxis_group = self.chart.append('g');

        self.svg.append("text")
            .attr("x",120)
            .attr("y",20)
            .attr("font-weight","bold")
            .attr("font-size",20)
            .text("Commercial sales value in 2020");

        self.svg.append("text")
            .attr("x",220)
            .attr("y",250)
            .attr("font-size",16)
            .text("month (in 2020)")
        
        self.svg.append("text")
            .attr("x",0)
            .attr("y",160)
            .attr("font-size",16)
            .attr('transform', `rotate(-90,20,160)`)
            .text("sales (billion yen)");
        
    }

    update() {
        let self = this;
        if (key == 'Textiles') {
            const ymax = d3.max( self.data, d => d.Textiles );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Apparel_Accessories'){
            const ymax = d3.max( self.data, d => d.Apparel_Accessories );
            self.yscale.domain( [0,ymax] );
        }
        else if ( key == 'Livestock_Aquatic_Products') {
            const ymax = d3.max( self.data, d => d.Livestock_Aquatic_Products );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Food_Beverages') {
            const ymax = d3.max( self.data, d => d.Food_Beverages );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Building_Materials') {
            const ymax = d3.max( self.data, d => d.Building_Materials );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Chemicals') {
            const ymax = d3.max( self.data, d => d.Chemicals );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Minerals_Metals') {
            const ymax = d3.max( self.data, d => d.Minerals_Metals );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Industry_Machinery_Equipment') {
            const ymax = d3.max( self.data, d => d.Industry_Machinery_Equipment );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Motor_Vehicles') {
            const ymax = d3.max( self.data, d => d.Motor_Vehicles );
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Electorical_Machinery_Equipment') {
            const ymax = d3.max( self.data, d => d.Electorical_Machinery_Equipment );
            self.yscale.domain( [0,ymax] );
        }

        const xmap = self.data.map(d => d.month)
        self.xscale.domain(xmap) 

        self.render();
    }

    render() {
        let self = this;

        self.rect = self.chart.selectAll(".bar")
            .data(self.data)
            .join("rect")
            .on('click', function(ev,d){
                d3.select(this)
                    .attr("fill", "red");
                select_month = d.month;
                SelectMonth();
            })
            .attr("class", "bar")
            .attr("fill", d => d.color)
            .transition().duration(1000)
            .attr("x", d => self.xscale(d.month))
        
        if (key == 'Textiles') {
            this.rect
                .attr("y", d => self.yscale(d.Textiles))
                .attr("height", d => self.inner_height - self.yscale(d.Textiles_2019))
                .attr("width", self.xscale.bandwidth())
                //.attr("height", d => self.inner_height - self.yscale(d.Textiles_2019))
        }
        else if (key == 'Apparel_Accessories'){
            this.rect
                .attr("y", d => self.yscale(d.Apparel_Accessories))
                .attr("height", d => self.inner_height - self.yscale(d.Apparel_Accessories))
                .attr("width", self.xscale.bandwidth())
        }
        else if ( key == 'Livestock_Aquatic_Products') {
            this.rect
                .attr("y", d => self.yscale(d.Livestock_Aquatic_Products))
                .attr("height", d => self.inner_height - self.yscale(d.Livestock_Aquatic_Products))
                .attr("width", self.xscale.bandwidth())
        }
        else if (key == 'Food_Beverages') {
            this.rect
                .attr("y", d => self.yscale(d.Food_Beverages))
                .attr("height", d => self.inner_height - self.yscale(d.Food_Beverages))
                .attr("width", self.xscale.bandwidth())
        }
        else if (key == 'Building_Materials') {
            this.rect
                .attr("y", d => self.yscale(d.Building_Materials))
                .attr("height", d => self.inner_height - self.yscale(d.Building_Materials))
                .attr("width", self.xscale.bandwidth())
        }
        else if (key == 'Chemicals') {
            this.rect
                .attr("y", d => self.yscale(d.Chemicals))
                .attr("height", d => self.inner_height - self.yscale(d.Chemicals))
                .attr("width", self.xscale.bandwidth())
        }
        else if (key == 'Minerals_Metals') {
            this.rect
                .attr("y", d => self.yscale(d.Minerals_Metals))
                .attr("height", d => self.inner_height - self.yscale(d.Minerals_Metals))
                .attr("width", self.xscale.bandwidth())
        }
        else if (key == 'Industry_Machinery_Equipment') {
            this.rect
                .attr("y", d => self.yscale(d.Industry_Machinery_Equipment))
                .attr("height", d => self.inner_height - self.yscale(d.Industry_Machinery_Equipment))
                .attr("width", self.xscale.bandwidth())
        }
        else if (key == 'Motor_Vehicles') {
            this.rect
                .attr("y", d => self.yscale(d.Motor_Vehicles))
                .attr("height", d => self.inner_height - self.yscale(d.Motor_Vehicles))
                .attr("width", self.xscale.bandwidth())
        }
        else if (key == 'Electorical_Machinery_Equipment') {
            this.rect
                .attr("y", d => self.yscale(d.Electorical_Machinery_Equipment))
                .attr("height", d => self.inner_height - self.yscale(d.Electorical_Machinery_Equipment))
                .attr("width", self.xscale.bandwidth())
        }

        self.xaxis_group
            .call(self.xaxis);
    
        self.yaxis_group
            .call(self.yaxis);

        

    }
}