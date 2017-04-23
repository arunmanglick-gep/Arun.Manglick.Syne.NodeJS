tApp.controller("NewUserController", function ($scope, $http, $location,$window) {
    $scope.SaveUser = function (user) {
        var token = $window.sessionStorage.getItem("s_token");
        $http.post("/api/users", user, {
            headers: {
                'x-access-token': token
            }
        }).then(function (response) {
            $location.path('/ulist');
        }, function () {
            alert("Error...");
        });
    };
});