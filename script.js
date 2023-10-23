const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("button");
const ul = document.getElementsByClassName("list-container")[0];



addButton.addEventListener('click', () => {
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
});

ul.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

const saveData = () => {
    localStorage.setItem("data", ul.innerHTML);
}

const showTask = () => {
    ul.innerHTML = localStorage.getItem("data");    
}
showTask();