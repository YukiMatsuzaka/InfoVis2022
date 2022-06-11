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
        self.xscale_2019 = d3.scaleBand()
            .range( [0, self.inner_width] )
            .paddingInner(0.5)

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
            let ymax = d3.max( self.data, d => d.Textiles );
            let ymax_2019 = d3.max(self.data, d => d.Textiles_2019);
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Apparel_Accessories'){
            let ymax = d3.max( self.data, d => d.Apparel_Accessories );
            let ymax_2019 = d3.max( self.data, d => d.Apparel_Accessories_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if ( key == 'Livestock_Aquatic_Products') {
            let ymax = d3.max( self.data, d => d.Livestock_Aquatic_Products );
            let ymax_2019 = d3.max( self.data, d => d.Livestock_Aquatic_Products_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Food_Beverages') {
            let ymax = d3.max( self.data, d => d.Food_Beverages );
            let ymax_2019 = d3.max( self.data, d => d.Food_Beverages_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Building_Materials') {
            let ymax = d3.max( self.data, d => d.Building_Materials );
            let ymax_2019 = d3.max( self.data, d => d.Building_Materials_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Chemicals') {
            let ymax = d3.max( self.data, d => d.Chemicals );
            let ymax_2019 = d3.max( self.data, d => d.Chemicals_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Minerals_Metals') {
            let ymax = d3.max( self.data, d => d.Minerals_Metals );
            let ymax_2019 = d3.max( self.data, d => d.Minerals_Metals_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Industry_Machinery_Equipment') {
            let ymax = d3.max( self.data, d => d.Industry_Machinery_Equipment );
            let ymax_2019 = d3.max( self.data, d => d.Industry_Machinery_Equipment_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Motor_Vehicles') {
            let ymax = d3.max( self.data, d => d.Motor_Vehicles );
            let ymax_2019 = d3.max( self.data, d => d.Motor_Vehicles_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
            self.yscale.domain( [0,ymax] );
        }
        else if (key == 'Electorical_Machinery_Equipment') {
            let ymax = d3.max( self.data, d => d.Electorical_Machinery_Equipment );
            let ymax_2019 = d3.max( self.data, d => d.Electorical_Machinery_Equipment_2019 );
            if ( ymax < ymax_2019){
                ymax = ymax_2019;
            }
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

        
        self.circles = self.chart.selectAll("circle")
            .data(self.data)
            .join('circle')
            .transition().duration(1000)
            .attr("r", 5)
            .attr("cx", d => self.xscale( d.month )+14 )
        
        if (key == 'Textiles') {
            this.rect
                .attr("y", d => self.yscale(d.Textiles))
                .attr("height", d => self.inner_height - self.yscale(d.Textiles))
                .attr("width", self.xscale.bandwidth())
                .attr("transform")
            
            this.circles
                .attr("cy", d => self.yscale( d.Textiles_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Apparel_Accessories'){
            this.rect
                .attr("y", d => self.yscale(d.Apparel_Accessories))
                .attr("height", d => self.inner_height - self.yscale(d.Apparel_Accessories))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Apparel_Accessories_2019 ) )
                .attr("fill", "blue" )
        }
        else if ( key == 'Livestock_Aquatic_Products') {
            this.rect
                .attr("y", d => self.yscale(d.Livestock_Aquatic_Products))
                .attr("height", d => self.inner_height - self.yscale(d.Livestock_Aquatic_Products))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Livestock_Aquatic_Products_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Food_Beverages') {
            this.rect
                .attr("y", d => self.yscale(d.Food_Beverages))
                .attr("height", d => self.inner_height - self.yscale(d.Food_Beverages))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Food_Beverages_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Building_Materials') {
            this.rect
                .attr("y", d => self.yscale(d.Building_Materials))
                .attr("height", d => self.inner_height - self.yscale(d.Building_Materials))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Building_Materials_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Chemicals') {
            this.rect
                .attr("y", d => self.yscale(d.Chemicals))
                .attr("height", d => self.inner_height - self.yscale(d.Chemicals))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Chemicals_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Minerals_Metals') {
            this.rect
                .attr("y", d => self.yscale(d.Minerals_Metals))
                .attr("height", d => self.inner_height - self.yscale(d.Minerals_Metals))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Minerals_Metals_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Industry_Machinery_Equipment') {
            this.rect
                .attr("y", d => self.yscale(d.Industry_Machinery_Equipment))
                .attr("height", d => self.inner_height - self.yscale(d.Industry_Machinery_Equipment))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Industry_Machinery_Equipment_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Motor_Vehicles') {
            this.rect
                .attr("y", d => self.yscale(d.Motor_Vehicles))
                .attr("height", d => self.inner_height - self.yscale(d.Motor_Vehicles))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Motor_Vehicles_2019 ) )
                .attr("fill", "blue" )
        }
        else if (key == 'Electorical_Machinery_Equipment') {
            this.rect
                .attr("y", d => self.yscale(d.Electorical_Machinery_Equipment))
                .attr("height", d => self.inner_height - self.yscale(d.Electorical_Machinery_Equipment))
                .attr("width", self.xscale.bandwidth())

            this.circles
                .attr("cy", d => self.yscale( d.Electorical_Machinery_Equipment_2019 ) )
                .attr("fill", "blue" )
        }

        self.xaxis_group
            .call(self.xaxis);
    
        self.yaxis_group
            .call(self.yaxis);


        

    }
}