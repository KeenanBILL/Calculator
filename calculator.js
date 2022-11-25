const input = document.getElementById("previous");
const output = document.getElementById("current");

function addToSum(num) {
    input.innerHTML += num;
}

function outputDisplay(num) {
    output.innerHTML = num;
}

function evaluateSum() {
    let equation = document.getElementById("previous") .innerText;
    let answer = eval (equation);
    console.log(answer);
    outputDisplay(answer);
}

function removeSum() {
    let insert = document.getElementById("previous").innerText;
    insert =  insert.slice(0, -1);
    document.getElementById("previous").innerText = insert;
    
}

function clearSum() {
    document.getElementById("previous").innerText = '';
    document.getElementById("current").innerText = '';
}