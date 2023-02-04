function HelloController($scope) {
    $scope.message = "Hello IT17323";
    $scope.name = "TienNH21";
    $scope.btnOnClick = function (event) {
        alert("Xin chào, " + $scope.name);
    }
}