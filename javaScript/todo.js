let todo = [];
let user = prompt("Enter operation: ");

while (user != "quit") {
    if (user == "list") {
        if (todo.length != 0) {
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
        } else {
            console.log("no task");
        }
    } else if (user == "add") {
        let task = prompt("Enter task: ");
        todo.push(task);
        alert("added :)");
    } else if (user == "delete") {
        if (todo.length != 0) {
            for (let i = 0; i < todo.length; i++) {
                console.log(i, todo[i]);
            }
            let n = parseInt(prompt("Enter no to delete: "));
            if (n >= 0 && n < todo.length) {
                todo.splice(n, 1);
                alert("deleted :)");
            } else {
                alert("Invalid index!");
            }
        } else {
            console.log("no task to delete");
        }
    }

    user = prompt("Enter operation: "); // keep asking again
}
