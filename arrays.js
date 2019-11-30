// window.setTimeout(function() {
     // put all of your JS code from the lecture here
var todos = ["Buy something"];

var input = prompt("What would you like to do?");


while(input !== "quit") {

    if(input === "list") {
       listTodos();
    }  else if(input === "new") {
        newTodo();
    } else if(input === "delete") {
        //ask for index of item to delete
       deleteTodo(); 
    }
        input = prompt("What would you like to do?");
}
alert("ok, you quit!");

function listTodos() {
    console.log("******")
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
});
        console.log("******")
}

function newTodo() {
    var newTodo = prompt("Enter new todo!")
        todos.push(newTodo);
        console.log("Todo added!");
}

function deleteTodo() {
    var index = prompt("Enter the index of the item you would like to delete");
        //delete that todo
        todos.splice(index,1);
        console.log("Todo has been deleted!");

}
// elseif(input === "new") {
    // var newTodo = prompt("Enter new todo!")
// }
// }, 500);
