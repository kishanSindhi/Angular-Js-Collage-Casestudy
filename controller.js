app.controller('toDoList', $scope => {
    $scope.tasks = [
        {title:"Add Login in case study", priority:1, completed:false},
    ]
    $scope.addTask = (title, priority) => {
        $scope.tasks.push({title, priority, completed:false});
    } 
    $scope.deleteTask = (i) => {
        $scope.tasks.splice(i)
    }
    $scope.undo = () => $scope.tasks.pop();
});