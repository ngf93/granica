const ctx = document.getElementById('myChart');

const data1 = {
    label: "Количество оформленных выезд",
    data: [0, 59, 75, 20, 20, 55, 40, 30, 59, 75, 20, 20, 55, 40, 12, 80],
    lineTension: 0.3,
    borderColor: '#1BDF11',
    pointBackgroundColor: '#1BDF11',
    borderWidth: 2,
};

const data2 = {
    label: "Количество оформленных выезд",
    data: [20, 15, 60, 60, 65, 30, 70, 20, 15, 60, 60, 65, 30, 70, 15, 60],
    lineTension: 0.3,
    borderColor: '#DF9711',
    pointBackgroundColor: '#DF9711',
    borderWidth: 2,
};

const data3 = {
    label: "Среднее количество АТС перед пунктом пропуска въезд",
    data: [10, 17, 45, 34, 21, 40, 62, 10, 17, 45, 34, 21, 40, 62, 40, 23],
    lineTension: 0.3,
    borderColor: '#6711DF',
    pointBackgroundColor: '#6711DF',
    borderWidth: 2,
};

const data4 = {
    label: "Среднее количество АТС перед пунктом пропуска въезд",
    data: [43, 13, 64, 60, 41, 32, 25, 43, 13, 64, 60, 41, 32, 25, 13, 10],
    lineTension: 0.3,
    borderColor: '#11AADF',
    pointBackgroundColor: '#11AADF',
    borderWidth: 2,
};

const myData = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
    datasets: [data1, data2, data3, data4]
};

const myOptions = {
    plugins: {
        htmlLegend: {
            // ID of the container to put the legend in
            containerID: 'legend-container',
        },
        legend: {
            display: false,
            // display: true,
            // position: 'top',
            // align: 'start',
            // padding: {
            //     bottom: 50
            // },
            // labels: {
            //     boxWidth: 18,
            //     boxHeight: 18,
            //     usePointStyle: true,
            //     pointStyle: 'circle',
            //     font: {
            //         family: 'Montserrat',
            //         size: 16,
            //     }
            // }
        }
    },
    elements: {
        point: {
            radius: 1,
        }
    },
    scales: {
        x: {
            grid: {
                drawTicks: false,
            },
        },
        
    }
};

const lineChart = new Chart(ctx, {
    type: 'line',
    data: myData,
    options: myOptions,
});

function generateLegend(){
    const chartBox = document.querySelector('.statistics__chart');
    const div = document.createElement('div');
    div.setAttribute('id', 'customLegend');
    div.setAttribute('class', 'statistics__controls');
    const ul = document.createElement('ul');

    lineChart.legend.legendItems.forEach((dataset, index) => {
        const text = dataset.text;
        const datasetIndex = dataset.datasetIndex;
        const bColor = dataset.strokeStyle;

        const li = document.createElement('li');
        const colorBox = document.createElement('span');
        colorBox.style.borderColor = bColor;
        colorBox.style.backgroundColor = bColor;
        const textP = document.createElement('p');
        const textNode = document.createTextNode(text);

        li.onclick = (click) => {
            const isHidden = !lineChart.isDatasetVisible(datasetIndex);
            lineChart.setDatasetVisibility(datasetIndex, isHidden);
            updateLegend(click);

        }

        ul.appendChild(li);
        li.appendChild(colorBox);
        li.appendChild(textP);
        textP.appendChild(textNode);
    });

    chartBox.before(div);
    div.appendChild(ul);
}
function updateLegend(click){
    const elem = click.target.parentNode;
    elem.classList.toggle('excluded');
    lineChart.update();
};

generateLegend();