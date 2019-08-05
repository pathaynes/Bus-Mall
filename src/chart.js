import store from './data/store.js';
import randomItem from './random.js';

const counts = store.getCountClick();
const views = store.getCountViews();
const countsArray = Object.entries(counts);
const viewsArray = Object.entries(views);

const countTable = Object.values(counts);
const viewTable = Object.keys(counts);
const displayData = [];


for(let i = 0; i < viewTable.length; i++) {
    const label = viewTable[i];
    // const amount = label.amount;
    // countTable.push(amount);
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

// const missesCtx = document.getElementById('misses-chart').getContext('2d');

// const productLabels = [];
// const Data = [];
// const fakeData = [];

// for(let i = 0; i < totalMisIds.length; i++) {
//     const misId = totalMisIds[i];
//     const tree = findById(trees, misId.id);
//     productLabels.push(tree.name);
//     missesData.push(misId.misses);
//     fakeData.push(misId.misses / 2);
// }

// // eslint-disable-next-line no-unused-vars
// const missesChart = new Chart(missesCtx, {
//     type: 'bar',
//     data: {
//         labels: treeLabels,
//         datasets: [
//             {
//                 label: '# of misses',
//                 data: missesData,
//                 backgroundColor: 'red'
//             },
//             {
//                 label: '# of fakes',
//                 data: fakeData,
//                 backgroundColor: 'pink'
//             }
//         ]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });