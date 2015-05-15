angular.module('widget')
    .controller('clock', ['$scope', function($scope){

        var chartData = [];

        $scope.chartData = function() {
            var pollutant =  parseInt($scope.widget.data[0].value, 10),
                space = 100 - pollutant,
                color = $scope.widget.data[0].caqicolor;

            if(space < 0) {
                space = 0;
            }

            chartData.length = 0;
            chartData.push({value: pollutant, color: color});
            chartData.push({value: space, color: '#000'});

            return chartData;
        };

        $scope.chartOptions = {
            segmentShowStroke : false,             //Boolean - Whether we should show a stroke on each segment
            percentageInnerCutout : 95,            //The percentage of the chart that we cut out of the middle.
            animation : true,                      //Boolean - Whether we should animate the chart
            animateRotate : false,                 //Boolean - Whether we animate the rotation of the Doughnut
            animateScale : true                    //Boolean - Whether we animate scaling the Doughnut from the centre
        };
    }])
