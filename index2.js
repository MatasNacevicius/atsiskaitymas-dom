const listContainer = document.createElement("div")
listContainer.setAttribute("id", "listContainer")
const ulInput = document.createElement("input")
ulInput.placeholder = "ul"
ulInput.style.color = "grey"
ulInput.type = "number"
const liInput = document.createElement("input")
liInput.placeholder = "ol"
liInput.style.color = "grey"
liInput.type = "number"
const createListButton = document.createElement("button")
createListButton.innerText = "create LIST"
createListButton.style.color = "green"

listContainer.append(
    ulInput,
    liInput,
    createListButton
)

document.body.append(
    listContainer
);

function clearInputs(){
    ulInput.value = ""
    liInput.value = ""
}

createListButton.addEventListener("click", (event) => {
    event.preventDefault()
    const numOfUl = ulInput.value;
    const numOfLi = liInput.value;

    const listCheck = document.querySelectorAll("ul")
    listCheck.forEach((list)=>list.remove())
    clearInputs()

    for (let i = 0; i < numOfUl; i++){
        const ul = document.createElement("ul")
        ul.textContent = "unordered"
        for (let j = 0; j < numOfLi; j++){
        const ol = document.createElement("ol")
        ol.textContent = "ordered"
        ul.appendChild(ol)
        }
        listContainer.appendChild(ul)
    }
})