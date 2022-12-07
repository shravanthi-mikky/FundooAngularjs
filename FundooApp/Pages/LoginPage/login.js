var app= angular.module("postserviceapp",['ngstorage']);

app.controller("loginCtrl",function($scope,$http,$localStorage/* ,$window */){
    $scope.email=null;
    $scope.password=null;

    $scope.postdata=function(email, password){
        var data={
            email:email,
            password:password
        }
        //call the service
        $http.post("https://localhost:44340/Login",JSON.stringify(data))
        .then(function(response){
            console.log(response);

            if(response.data){

                $localStorage.message = response.data.token;
                console.log($localStorage.message);
                /* var url = "Dashboard.html";
                $window.location.href = url; */
                $scope.email=response.data.email;
                $scope.password=response.data.password;
            }
        },function(error){
            console.log(error)
        })
    };
})