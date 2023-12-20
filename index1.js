const input1 = document.createElement("input");
input1.placeholder = "ul list";
input1.type = "number";
input1.required;
const input2 = document.createElement("input");
input2.placeholder = "ol list";
input2.type = "number";
input2.required;
const button = document.createElement("button");
button.innerText = "Create LIST";

document.body.append(input1, input2, button);

button.addEventListener("click", (event) => {
  event.preventDefault();
  const valueUL = input1.value;
  const valueLI = input2.value;

  const listcheck = document.querySelectorAll("ul");
  listcheck.forEach((list) => list.remove());
  input1.value = "";
  input2.value = "";

  for (let i = 0; i < valueUL; i++) {
    const ul = document.createElement("ul");
    ul.innerText = "unordered";
    for (let j = 0; j < valueLI; j++) {
      const ol = document.createElement("ol");
      ol.innerText = "ordered";
      ul.appendChild(ol);
    }
    document.body.appendChild(ul);
  }
});
