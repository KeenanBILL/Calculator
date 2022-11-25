const input = document.getElementById("previous");
const output = document.getElementById("current");
let arr = []

function addToSum(num) {
    switch(num) {
        case `+`:
        case `-`:
        case `*`:
        case `/`:
            input.innerHTML += num
            arr = []
            break;
        case `.`:
            if(arr.includes(`.`)) {
                input.innerHTML = input.innerHTML
            } else {
                input.innerHTML += num
                arr.push(num)
            }
        break;
        
        default:
            input.innerHTML += num;
            arr.push(num)
    }
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
    arr.pop()
    
}

function clearSum() {
    document.getElementById("previous").innerText = '';
    document.getElementById("current").innerText = '';
}