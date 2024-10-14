//try playing with
// new
// delete
// list
// quit

let input = prompt("What you want to do ?");
const todo = [];
while (input !== "quit") {
  if (input === "list") {
    console.log("**********");
    if (todo.length > 0) {
      for (let i = 0; i < todo.length; i++) {
        console.log(`${i}: ${todo[i]}`);
      }
    } else {
      alert("Empty list");
    }
  } else if (input === "new") {
    const newTodo = prompt("Enter new todo");
    if (newTodo != null) {
      todo.push(newTodo);
      console.log(`${newTodo} added to the list`);
    }
  } else if (input === "delete") {
    const index = Number(prompt("Enter index to Delete"));
    if (!Number.isNaN(index)) {
      const deleted = todo.splice(index, 1);
      console.log(`Deleted ${deleted}`);
    }
  }
  input = prompt("What you want to do ?");
}
console.log("OK, YOU QUIT THE APP");
