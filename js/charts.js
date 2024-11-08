$(document).ready(function(){
    //-------- Incident stats
    var ctxD = document.getElementById("incident-chart").getContext('2d');
    var myLineChart = new Chart(ctxD, {
        type: 'doughnut',
        data: {
        labels: ["Accident", "Near miss", "Illness",  "Security", "Environmental"],
        datasets: [{
                data: [15, 25, 15, 30, 40],
                backgroundColor: ["#FF9850", "#A3A0FB", "#FF6CA3", "#17C357", "#DC5C27"],
                hoverBackgroundColor: ["#FF9850", "#A3A0FB", "#FF6CA3", "#17C357", "#DC5C27"],
                borderWidth: [0,0,0,0,0]
            }]
        },
        options: {
                responsive: true,
                cutoutPercentage: 55,
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 10,
                        paddding: 40,
                        fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                    },
                },
                plugins: {
                    labels: {
                        render: 'value',
                        fontColor: ['white', 'white', 'white', 'white', 'white'],
                        fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                    }
                },
                title: {
                    display: true,
                    text: 'Total Incidents',
                    fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                },	
            }
    });



    //-------- Audit stats ---------
    var ctxDPie = document.getElementById("auditStats").getContext('2d');
    var myLineChartPie = new Chart(ctxDPie, {
        type: 'pie',
        data: {
        labels: ["Failed", "Successful"],
        datasets: [{
                data: [6, 30],
                backgroundColor: ["#DA3D34", "#34BEB9"],
                hoverBackgroundColor: ["#DA3D34", "#34BEB9"],
                borderWidth: [0,0]
            }]
        },
        options: {
                responsive: true,
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        boxWidth: 10,
                        paddding: 40,
                        fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                    },
                },
                plugins: {
                    labels: {
                        render: 'value',
                        fontColor: ['white', 'white', 'white', 'white', 'white'],
                        fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                    }
                },
                title: {
                    display: true,
                    text: 'Audits Completed',
                    fontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
                },	
            }
    });
    
});


/*$(window).on("load", function(){
    //-------- Column chart ---------
    //Get the context of the Chart canvas element we want to select
    var ctx = $("#incident-comparison1");

    // Chart Options
    var chartOptions = {
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each bar to be 2px wide and green
        elements: {
            rectangle: {
                borderWidth: 1,
                borderColor: 'rgb(0, 255, 0)',
                borderSkipped: false
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        responsiveAnimationDuration: 500,
        legend: {
            display: true,
            position: 'bottom',
            labels : {
                boxWidth: 10,
                usePointStyle: false,
                defaultFontFamily: "'Montserrat', 'Helvetica Neue', sans-serif",
            },
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: true,
                },
                scaleLabel: {
                    display: true,
                },
                barThickness: 15
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: true,
                },
                scaleLabel: {
                    display: true,
                },
                // ticks: {
                //     max: 500,
                //     min: 0,
                //     stepSize: 100
                // }
            }]
        },
        title: {
            display: true,
            text: 'Incident Comparison Chart',
            //fontFamily: 'inherit'
        }
    };

    // Chart Data
    var chartData = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"],
        datasets: [{
            label: "2017-2018",
            data: [65, 59, 80, 81, 56, 45, 98, 55, 12, 56, 30, 70],
            backgroundColor: "#4981FD",
            hoverBackgroundColor: "#4981FD",
            borderColor: "transparent",
            borderWidth: 0
        }, {
            label: "2018-2019",
            data: [28, 48, 40, 19, 86, 76, 88, 94, 44, 65, 23, 40],
            backgroundColor: "#FF9850",
            hoverBackgroundColor: "#FF9850",
            borderColor: "transparent",
            borderWidth: 0
        }]
    };

    var config = {
        type: 'bar',

        // Chart Options
        options : chartOptions,
        data : chartData
    };

    // Create the chart
    var lineChart = new Chart(ctx, config);
});*/


$(window).on("load", function(){
    $("#divincident-comparison").html("");
    $('#divincident-comparison').append('<canvas id="incident-comparison" height="350"></canvas>')
    //Get the context of the Chart canvas element we want to select
    var ctx = $("#incident-comparison");

    // Chart Options
    var chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'bottom',
            defaultFontFamily: "'Montserrat', sans-serif",
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                display: true,
                ticks: { 
                    autoSkip: true,
                },
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    color: "#f3f3f3",
                    drawTicks: true,
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart - Legend',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "14"
        }
    };

    // Chart Data
    var chartData = {
        labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"],
        datasets: [{
            label: "2017-2018",
            data: [65, 59, 80, 81, 56, 45, 98, 55, 12, 56, 30, 70],
            backgroundColor: "rgba(103, 58, 183,.4)",
            borderColor: "transparent",
            pointBorderColor: "#673AB7",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }, {
            label: "2018-2019",
            data: [28, 48, 40, 19, 86, 76, 88, 94, 44, 65, 23, 40],
            backgroundColor: "rgba(255,87,34,.4)",
            borderColor: "transparent",
            pointBorderColor: "#FF5722",
            pointBackgroundColor: "#FFF",
            pointBorderWidth: 2,
            pointHoverBorderWidth: 2,
            pointRadius: 4,
        }]
    };

    var config = {
        type: 'line',

        // Chart Options
        options : chartOptions,

        // Chart Data
        data : chartData
    };

    // Create the chart
    var areaChart = new Chart(ctx, config);

});
