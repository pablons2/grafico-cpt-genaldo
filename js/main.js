const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Baixa = 1', 'Boa = 1', 'Moderada = 6', 'Otima = 2'],
        datasets: [{
            label: '# quantidade',
            data: [1, 2, 6, 1],
            backgroundColor: [
                'rgb(255,0,0)',
                'rgb(5,164,255)',
                'rgb(255,255,0)',
                'rgb(0,255,0)'
            ],
            borderWidth: 2,
            hoverOffset: 4,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false,
                max: 10, // Define o valor máximo no eixo Y
                stepSize: 1 // Define o intervalo entre os valores
            }
        },
        plugins: {
            legend: {
                labels: {
                    color: 'white', // Cor das legendas
                }
            }
        },
        tooltips: {
            enabled: true,
            mode: 'single',
            callbacks: {
                label: function (tooltipItem, data) {
                    return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                },
                afterLabel: function (tooltipItem, data) {
                    return 'Total: ' + data.datasets[0].data.reduce((a, b) => a + b, 0);
                }
            }
        }
    }
});
