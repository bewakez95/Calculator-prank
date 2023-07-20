// alert("test");
let input = prompt("What would you like to do ?");
const todos = ["Collect chicken eggs", "Clean cat litter box"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("****");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i} : ${todos[i]}`);
    }

    console.log("****");
  } else if (input === "new") {
    const newTodo = prompt("What would you like to add new List?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list`);
  } else if (input === "delete") {
    const indexStr = prompt("Enter index to delete from the List?");
    const index = parseInt(indexStr);
    if (Number.isNaN(index)) {
      const deleted = todos.splice(index, 1);
      console.log(`${deleted} has been deleted from the list`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("What would you like to do?");
}
console.log("OK you quit! the App");
