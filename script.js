const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("button");
const ul = document.getElementsByClassName("list-container")[0];

const buttonClick = () => {  
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        ul.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}; 

const classCheck = (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}

const saveData = () => {
    localStorage.setItem("data", ul.innerHTML);
}

const showTask = () => {
    ul.innerHTML = localStorage.getItem("data");    
}

addButton.addEventListener('click', buttonClick);

ul.addEventListener('click', classCheck,false);

showTask();