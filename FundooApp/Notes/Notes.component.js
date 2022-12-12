angular.
module("postserviceapp").component('notescomponent',{
    templateUrl:"Notes.html",
}).controller('TakeNoteCtrl',function($scope,$http){
    var note=this;
    note.toggle=false;
    $scope.showButtons=[0];

    $scope.toggle1 = function(){
        $scope.showButtons=[1];
        note.toggle=true;
    };

    $scope.postdata=function(){
        var data = {
            title :title,
            note:note,
        }
        //calling note api
        $http.post("https://localhost:44365/api/Notes/Add",JSON.stringify(data))
        .then(function(response){
            console.log(response);
    
            if(response.data){
                $scope.msg="Post Data Submitted";
              
                $scope.title=response.data.title;
                $scope.note=response.data.note;
            }
        },function(error){
            console.log(error)
        })
    };
});

