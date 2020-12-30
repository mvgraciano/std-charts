// Labels
let years = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];

// Datas
let africa       = [ 86, 114, 106, 106, 107, 111, 133,  221,  783, 2478];
let asia         = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
let europe       = [168, 170, 178, 190, 203, 276, 408,  547,  675,  734];
let latinAmerica = [ 40,  20,  10,  16,  24,  38,  74,  167,  508,  784];
let northAmerica = [  6,   3,   2,   2,   7,  26,  82,  172,  312,  433];

let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: years,
        datasets: [
            {
                data: africa,
                label: 'África',
                borderColor: "#3e95cd",
                fill: false
            },
            {
                data: asia,
                label: 'Ásia',
                borderColor: '#8e5ea2',
                fill: false
            },
            {
                data: europe,
                label: 'Europa',
                borderColor: '#3cba9f',
                fill: false
            },
            {
                data: latinAmerica,
                label: 'América Latina',
                borderColor: '#e8c3b9',
                fill: false
            },
            {
                data: northAmerica,
                label: 'América Norte',
                borderColor: '#c45850',
                fill: false
            }
        ] 
    }
});