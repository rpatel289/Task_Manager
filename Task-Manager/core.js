var myapp = angular.module("midtermApp", []);

myapp.controller("groupController", function($scope) {

  $scope.groups = [
      {
      id: 1,
      groupName:'Omniscient', 
      groupDescription: 'This is description.', 
      students: [ {id: 1, studentName:'Niraj'},{id: 2, studentName:'Prachi'},{id: 3, studentName:'Shanvi'},{id: 4, studentName:'Nirmit'}, ],
      tasks: [{id: 1, taskName: 'This is task1 of Omniscient' , student: '', done:false }, {id: 2, taskName: 'This is task2 of Omniscient' , student:'', done:false }, {id: 3, taskName: 'This is task3 of Omniscient' , student:'', done:false }] },
      
      {
      id: 2,
      groupName:'DND', 
      groupDescription: 'This is description2.', 
      students: [ {id: 1, studentName:'Raj'},{id: 2, studentName:'Heem'},{id: 3,studentName:'Shlok'},{id: 4,studentName:'Jenil'}, ],
      tasks: [{id: 1, taskName: 'This is task1 of DND' , student:'', done:false },{id: 2,taskName: 'This is task2 of DND' , student:'', done:false }] }
      ];

  $scope.addgroup = function() {
          console.log('addgroup()');
      var id;
      if($scope.groups.length == 0){
              id = 1;
            }else{
              id = $scope.groups[$scope.groups.length - 1].id + 1;
            }
    $scope.groups.push({id: id, groupName:$scope.groupName, groupDescription:$scope.groupDescription, students:[], tasks: []});
    console.log("id :"+ $scope.groups[$scope.groups.length-1].id); 
    $scope.groupName = '';
    $scope.groupDescription = '';
  }

    var i = null;
  $scope.addstudent = function() {
      console.log('addstudent()');
      var id;
    try{
          for(i in $scope.groups){
            // console.log('student length :' + $scope.groups[i].students.length );

            if($scope.groups[i].students.length == 0){
              id = 1;
            }else{
              id = $scope.groups[i].students[$scope.groups[i].students.length - 1].id + 1;
            }

              console.log('item :' +id);
            if($scope.groups[i].id == $scope.selectedName.id){
             $scope.groups[i].students.push({id:id, studentName:$scope.studentName});
             $scope.id = '';
             $scope.studentName = '';
             $scope.selectedName = ''; 

            }    
          }
    }catch(e){
          console.log(e);
    } 
  }

  $scope.addtask = function() {
    console.log('addtask()');
    var i = null;
    var id;
    try{
      for(i in $scope.groups){

            if($scope.groups[i].tasks.length == 0){
              id = 1;
            }else{
              id = $scope.groups[i].tasks[$scope.groups[i].tasks.length - 1].id + 1;
            }
            if($scope.groups[i].id == $scope.selectedName2.id){ 
             $scope.groups[i].tasks.push({id:id, taskName:$scope.taskName});
             $scope.id = '';
             $scope.taskName = '';
             $scope.selectedName2 = '';
            }
        }
    }catch(e){
      console.log(e);
    }     
  }

  $scope.assignTask=function(group_id, task_id, selectedStudent_id, selectedStudentObj){
    try{
    console.log('assignTask()');
    console.log("group id :" +group_id);
    console.log("task id :" +task_id);
    console.log("student id :" +selectedStudent_id);
    console.log("student name :" +selectedStudentObj); 
    console.log("student before assignment :" +$scope.groups[group_id].tasks[task_id].student);

    $scope.groups[group_id].tasks[task_id].student = selectedStudentObj; 

    console.log("student before assignment :" +$scope.groups[group_id].tasks[task_id].student);
    }catch(e){
      console.log(e);
      $scope.groups[group_id].tasks[task_id].student = null;
    }
    
    }      

    $scope.finishTask = function(group_id, task_id, taskToFinish){
    console.log('finishTask()');
    console.log("group id :" +group_id);
    console.log("task id :" +task_id);
    console.log("before :" + $scope.groups[group_id].tasks[task_id].done);

    $scope.groups[group_id].tasks[task_id].done = taskToFinish;
    console.log("after :" + $scope.groups[group_id].tasks[task_id].done);

    } 

    $scope.remaining = function(tasks) {
      console.log('finishTask()');
      var count = 0;
      angular.forEach(tasks, function(task) {
        count += task.done ? 1 : 0;
      });
      return count;
    };      
});