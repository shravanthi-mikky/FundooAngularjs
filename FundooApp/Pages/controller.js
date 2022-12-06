var app= angular.module("postserviceapp",[]);

app.controller("postServiceCtrl",function($scope,$http){
    $scope.name=null;
    $scope.age=null;
    $scope.address=null;

    $scope.postdata=function(firstName,lastName,email, password){
        var data={
            firstName:firstName,
            lastName:lastName,
            emailId:email,
            password:password
        }
        //call the service
        $http.post("https://localhost:44340/Register",JSON.stringify(data))
        .then(function(response){
            console.log(response);

            if(response.data){
                $scope.msg="Post Data Submitted";

                $scope.firstName=response.data.firstName;
                $scope.lastName=response.data.lastName;
                $scope.email=response.data.email;
                $scope.password=response.data.password;
            }
        },function(error){
            console.log(error)
        })
    };
})