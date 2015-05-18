angular.module('widget')
    .controller('clockCtrl',
        ['$scope', '$timeout',
        function($scope, $timeout){

        var now;
        function refreshData(){
            now = moment();
            $scope.time = now.format('HH:mm:ss');
            $scope.date = now.format('MMMM Do YYYY');
            $scope.dayOfWeek = now.format('dddd');
        }

        function refresh(){
            refreshData();
            $timeout(refresh, 1000);
        }

        $timeout(refresh, 1000);
    }]);
