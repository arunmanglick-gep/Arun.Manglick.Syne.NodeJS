tApp.controller("UserListController", function ($scope, $http, $window) {
    $http.post('/api/authenticate', {
        username: "manish",
        password: "manish"
    }).then(function (response) {
        console.log(response.data);
        $window.sessionStorage.setItem("s_token", response.data.token);
    });

    $scope.getData = function () {
        var token = $window.sessionStorage.getItem("s_token");
        $http.get("/api/users", {
            headers: {
                'x-access-token': token
            }
        }).then(function (response) {
            $scope.users = response.data;
            console.log($scope.users);
        });
    }
});