let select_month;
let pre_select_month=1;
let input_data;
let barchart;
let linechart;
let key = 'Textiles';

d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/final_task/infected_Commercial.csv")
    .then( data => {
        input_data = data;
        input_data.forEach( d => { d.month = +d.Month_2020;d.infected=+d.infected_month;d.Textiles=+d.Textiles;d.Apparel_Accessories=+d.Apparel_Accessories;d.Livestock_Aquatic_Products=d.Livestock_Aquatic_Products;d.Food_Beverages=+d.Food_Beverages;d.Building_Materials=+d.Building_Materials;d.Chemicals=+d.Chemicals;d.Minerals_Metals=+d.Minerals_Metals;d.Industry_Machinery_Epuipment=+d.Industry_Machinery_Epuipment;d.Motor_Vehicles=+d.Motor_Vehicles;d.Electorical_Machinery_Epuipment=+d.Electorical_Machinery_Epuipment;d.color=d.color;});
        var config = {
            parent: '#drawing_region_linechart',
            width: 512,
            height: 256,
            margin: {top:30, right:30, bottom:40, left:80}
        };
        var config2 = {
            parent: '#drawing_region_barchart',
            width: 512,
            height: 256,
            margin: {top:30, right:30, bottom:50, left:80}
        }

        linechart = new LineChart( config, input_data );
        linechart.update();
            
        barchart = new BarChart( config2, input_data);
        barchart.update();

        document.getElementById("select_business").textContent = key;

        d3.select('#textiles')
        .on('click', d => {
            key = 'Textiles';
            barchart.update(input_data);
            document.getElementById("select_business").textContent = key;
            document.getElementById("select_business").style.color = "red";

            ButtonColor_Off();
            textiles.style.backgroundColor = 'orange';
        });
        
        d3.select('#apparel_accessories')
        .on('click', d => {
            key = 'Apparel_Accessories';
            barchart.update(input_data);
            document.getElementById("select_business").textContent = key;
            document.getElementById("select_business").style.color = "red";

            ButtonColor_Off();
            apparel_accessories.style.backgroundColor = 'orange';
        });

        d3.select('#livestock_aquatic_products')
            .on('click', d => {
                key = 'Livestock_Aquatic_Products';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                livestock_aquatic_products.style.backgroundColor = 'orange';
            });

        d3.select('#food_beverages')
            .on('click', d => {
                key = 'Food_Beverages';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                food_beverages.style.backgroundColor = 'orange';
            });

        d3.select('#building_materials')
            .on('click', d => {
                key = 'Building_Materials';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                building_materials.style.backgroundColor = 'orange';
            });

        d3.select('#chemicals')
            .on('click', d => {
                key = 'Chemicals';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                chemicals.style.backgroundColor = 'orange';
            });

        d3.select('#minerals_metals')
            .on('click', d => {
                key = 'Minerals_Metals';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                minerals_metals.style.backgroundColor = 'orange';
            });

        d3.select('#industry_machinery_epuipment')
            .on('click', d => {
                key = 'Industry_Machinery_Epuipment';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                industry_machinery_epuipment.style.backgroundColor = 'orange';
            });

        d3.select('#motor_vehicles')
            .on('click', d => {
                key = 'Motor_Vehicles';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                motor_vehicles.style.backgroundColor = 'orange';
            });

        d3.select('#electorical_machinery_epuipment')
            .on('click', d => {
                key = 'Electorical_Machinery_Epuipment';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                electorical_machinery_epuipment.style.backgroundColor = 'orange';
            });

    })
    .catch( error => {
        console.log( error );
    });

function SelectMonth() {
    input_data[pre_select_month-1].color = 'black';
    input_data[select_month-1].color = 'red';
    pre_select_month = select_month;
    barchart.update();
    linechart.update();
}

function ButtonColor_Off() {
    textiles.style.backgroundColor = 'white';
    apparel_accessories.style.backgroundColor = 'white';
    livestock_aquatic_products.style.backgroundColor = 'white';
    food_beverages.style.backgroundColor = 'white';
    building_materials.style.backgroundColor = 'white';
    chemicals.style.backgroundColor = 'white';
    minerals_metals.style.backgroundColor = 'white';
    industry_machinery_epuipment.style.backgroundColor = 'white';
    motor_vehicles.style.backgroundColor = 'white';
    electorical_machinery_epuipment.style.backgroundColor = 'white';
}