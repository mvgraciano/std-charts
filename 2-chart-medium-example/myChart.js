$("#renderBtn").click(function(){
    let data1 = [];
    let data2 = [];
    let dataSet = [];

    for (let i = 0; i < 7; i++) {
        data1.push(randomVal());
        data2.push(randomVal());
    }
    dataSet.push(data1);
    dataSet.push(data2);

    labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    renderChart(dataSet, labels);
});

function renderChart(data, labels){
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'This week',
                    data: data.pop(),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)'
                },
                {
                    label: 'Last Week',
                    data: data.pop(),
                    borderColor: 'rgba(192, 192, 192, 1)',
                    backgroundColor: 'rgba(192, 192, 192, 0.2)'
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function(value, index, values) {
                            return float2dollar(value);
                        }
                    }
                }]
            }
        }
    });
}

function randomVal(){ return Math.floor(Math.random() * 25000)};

function float2dollar(value) {
    return "U$" + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
