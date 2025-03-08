// let todo = [];

// let req = prompt("please enter ur request");
// console.log(req);

// while (true) {
//   if (req == "quit") {
//     console.log("quitting app");
//     break;
//   }
//   if (req == "list") {
//     console.log("-----------------------------");

//     for (i = 0; i < todo.length; i++) {
//       console.log(i, todo[i]);
//     }
//     console.log("-----------------------------");
//   } else if (req == "add") {
//     let taskName = prompt("Please enter the task you want to add");
//     let taskStatus = prompt(
//       "Please enter the status (e.g., pending, completed)"
//     );
//     let task = {
//       task: taskName,
//       status: taskStatus,
//     };
//     todo.push(task);
//     console.log("Task added");
//   } else if (req == "delete") {
//     let idx = prompt("please enter the index u wanna delete");
//     todo.splice(idx, 1);
//     console.log("task deleted");
//   } else {
//     console.log("wrong request");
//   }
//   req = prompt("please enter ur  next request");
// }
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//   delBtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();

//   });
// }
