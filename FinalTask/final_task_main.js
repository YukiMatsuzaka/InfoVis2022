let select_month;
let pre_select_month=1;
let input_data;
let barchart;
let linechart;
let key = 'Textiles';

d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/FinalTask/infected_Commercial.csv")
    .then( data => {
        input_data = data;
        input_data.forEach( d => { d.month = +d.Month;d.infected=+d.infected_month;d.Textiles=+d.Textiles;d.Apparel_Accessories=+d.Apparel_Accessories;d.Livestock_Aquatic_Products=d.Livestock_Aquatic_Products;d.Food_Beverages=+d.Food_Beverages;d.Building_Materials=+d.Building_Materials;d.Chemicals=+d.Chemicals;d.Minerals_Metals=+d.Minerals_Metals;d.Industry_Machinery_Equipment=+d.Industry_Machinery_Equipment;d.Motor_Vehicles=+d.Motor_Vehicles;d.Electorical_Machinery_Equipment=+d.Electorical_Machinery_Equipment;d.color=d.color;d.circle_size=+d.circle_size;d.Textiles_2019=+d.Textiles_2019;d.Apparel_Accessories_2019=+d.Apparel_Accessories_2019;d.Livestock_Aquatic_Products_2019=d.Livestock_Aquatic_Products_2019;d.Food_Beverages_2019=+d.Food_Beverages_2019;d.Building_Materials_2019=+d.Building_Materials_2019;d.Chemicals_2019=+d.Chemicals_2019;d.Minerals_Metals_2019=+d.Minerals_Metals_2019;d.Industry_Machinery_Equipment_2019=+d.Industry_Machinery_Equipment_2019;d.Motor_Vehicles_2019=+d.Motor_Vehicles_2019;d.Electorical_Machinery_Equipment_2019=+d.Electorical_Machinery_Equipment_2019;});
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
        document.getElementById("select_business").style.color = "red";

        d3.select('#textiles')
        .on('click', d => {
            key = 'Textiles';
            barchart.update(input_data);
            document.getElementById("select_business").textContent = 'Textiles';
            document.getElementById("select_business").style.color = "red";

            ButtonColor_Off();
            textiles.style.backgroundColor = 'orange';
        });
        
        d3.select('#apparel_accessories')
        .on('click', d => {
            key = 'Apparel_Accessories';
            barchart.update(input_data);
            document.getElementById("select_business").textContent = 'Apparel & Accessories';
            document.getElementById("select_business").style.color = "red";

            ButtonColor_Off();
            apparel_accessories.style.backgroundColor = 'orange';
        });

        d3.select('#livestock_aquatic_products')
            .on('click', d => {
                key = 'Livestock_Aquatic_Products';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Livestock & Aquatic Products';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                livestock_aquatic_products.style.backgroundColor = 'orange';
            });

        d3.select('#food_beverages')
            .on('click', d => {
                key = 'Food_Beverages';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Food & Beverages';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                food_beverages.style.backgroundColor = 'orange';
            });

        d3.select('#building_materials')
            .on('click', d => {
                key = 'Building_Materials';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Building Materials';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                building_materials.style.backgroundColor = 'orange';
            });

        d3.select('#chemicals')
            .on('click', d => {
                key = 'Chemicals';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Chemicals';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                chemicals.style.backgroundColor = 'orange';
            });

        d3.select('#minerals_metals')
            .on('click', d => {
                key = 'Minerals_Metals';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Minerals & Metals';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                minerals_metals.style.backgroundColor = 'orange';
            });

        d3.select('#industry_machinery_equipment')
            .on('click', d => {
                key = 'Industry_Machinery_Equipment';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Industry Machinery & Equipment';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                industry_machinery_equipment.style.backgroundColor = 'orange';
            });

        d3.select('#motor_vehicles')
            .on('click', d => {
                key = 'Motor_Vehicles';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Motor Vehicles';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                motor_vehicles.style.backgroundColor = 'orange';
            });

        d3.select('#electorical_machinery_equipment')
            .on('click', d => {
                key = 'Electorical_Machinery_Equipment';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = 'Electorical Machinery & Equipment';
                document.getElementById("select_business").style.color = "red";

                ButtonColor_Off();
                electorical_machinery_equipment.style.backgroundColor = 'orange';
            });

    })
    .catch( error => {
        console.log( error );
    });

function SelectMonth() {
    input_data[pre_select_month-1].color = 'black';
    input_data[select_month-1].color = 'red';

    input_data[pre_select_month-1].circle_size = 5
    input_data[select_month-1].circle_size = 10

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
    industry_machinery_equipment.style.backgroundColor = 'white';
    motor_vehicles.style.backgroundColor = 'white';
    electorical_machinery_equipment.style.backgroundColor = 'white';
}