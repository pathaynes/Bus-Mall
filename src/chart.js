import store from './data/store.js';

const counts = store.getCountClick();
const views = store.getCountViews();
const viewsArray = Object.entries(views);

const countTable = Object.values(counts);
const viewTable = Object.keys(counts);
const displayData = [];


for(let i = 0; i < viewTable.length; i++) {
    const label = viewTable[i];
    if(!label) {
        viewTable.splice(i, 1);
    }
}

for(let i = 0; i < viewsArray.length; i++) {
    const view = viewsArray[i];
    const display = view.display;
    viewTable.push(view.id);
    displayData.push(display);
}

const turnsCtx = document.getElementById('counts-chart').getContext('2d');

// eslint-disable-next-line no-unused-vars
const turnsChart = new Chart(turnsCtx, {
    type: 'bar',
    data: {
        labels: viewTable,
        datasets: [
            {
                label: '# of Turns',
                data: countTable,
                borderColor: 'green',
                borderWidth: 2,
                backgroundColor: 'transparent'
            }
        ]
    },
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
