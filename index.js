let skaiciuotuvas = 0;
const button1 = document.createElement("button");
button1.innerText = "pliusins";
button1.style.backgroundColor = "grey"
const button2 = document.createElement("button");
button2.innerText = "minusins";
button2.style.backgroundColor = "grey"
const pTag = document.createElement("p");
pTag.innerText = `count: ${skaiciuotuvas}`;

document.body.append(button1, button2, pTag);

button1.addEventListener("click", (event)=>{
    event.preventDefault();
    skaiciuotuvas++
    pTag.innerText = `count: ${skaiciuotuvas}`;
    if (skaiciuotuvas % 2 == 0){
        button1.style.backgroundColor = "red"
    }
    else{
        button1.style.backgroundColor = "grey"
    }
})

button2.addEventListener("click", (event)=>{
    event.preventDefault;
    skaiciuotuvas--
    pTag.innerText = `count: ${skaiciuotuvas}`;
    if (skaiciuotuvas % 2 == 0){
        button2.style.backgroundColor = "red"
    }
    else{
        button2.style.backgroundColor = "grey"
    }
})




