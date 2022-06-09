let select_month;
let pre_select_month=1;
let input_data;
let barchart;
let linechart;
let key = 'Machinery_Equipment';

d3.csv("https://yukimatsuzaka.github.io/InfoVis2022/final_task/infected_Commercial.csv")
    .then( data => {
        input_data = data;
        input_data.forEach( d => { d.month = +d.Month_2020;d.infected=+d.infected_month;d.Machinery_Equipment=+d.Machinery_Equipment;d.Food_Beverages=+d.Food_Beverages;d.Textiles=d.Textiles;d.Furniture=+d.Furniture;d.color=d.color;});
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
            margin: {top:30, right:30, bottom:50, left:50}
        }

        linechart = new LineChart( config, input_data );
        linechart.update();
            
        barchart = new BarChart( config2, input_data);
        barchart.update();

        document.getElementById("select_business").textContent = key;

        d3.select('#machinery_equipment')
        .on('click', d => {
            key = 'Machinery_Equipment';
            barchart.update(input_data);
            document.getElementById("select_business").textContent = key;

            ButtonColor_Off();
            machinery_equipment.style.backgroundColor = 'orange';
        });
        
        d3.select('#food_beverages')
        .on('click', d => {
            key = 'Food_Beverages';
            barchart.update(input_data);
            document.getElementById("select_business").textContent = key;

            ButtonColor_Off();
            food_beverages.style.backgroundColor = 'orange';
        });

        d3.select('#textiles')
            .on('click', d => {
                key = 'Textiles';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;

                ButtonColor_Off();
                textiles.style.backgroundColor = 'orange';
            });

        d3.select('#furniture')
            .on('click', d => {
                key = 'Furniture';
                barchart.update(input_data);
                document.getElementById("select_business").textContent = key;

                ButtonColor_Off();
                furniture.style.backgroundColor = 'orange';
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
    machinery_equipment.style.backgroundColor = 'white';
    food_beverages.style.backgroundColor = 'white';
    textiles.style.backgroundColor = 'white';
    furniture.style.backgroundColor = 'white';

}