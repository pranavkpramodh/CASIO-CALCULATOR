let coverbtn = document.getElementById("coverbtn");
let cover = document.getElementById("cover");
let show = document.getElementById("show");
let screen = document.getElementById("screen");
let sqrt = document.getElementById("sqrt");
let square = document.getElementById('square') 
let exp;
let currentExp;

// calculator functions
function displayNum(num){
    exp = screen.innerHTML += num;
    currentExp = exp;
    console.log(exp);
}

function clearScreen(){
    screen.innerHTML = " ";
}

function result(){
    output = eval(currentExp);
    screen.innerHTML = output
}

function removeLast(){
    currentExp = currentExp.slice(0, -1);
    screen.innerHTML = currentExp;
}

sqrt.addEventListener('click', ()=>{
    screen.innerHTML = Math.sqrt(exp)
    console.log("ghggh");
})

square.addEventListener('click', ()=>{
    screen.innerHTML = exp*exp;
})

sin.addEventListener('click', () => {
    screen.innerHTML = Math.sin(exp)
})

cos.addEventListener('click', () => {
    screen.innerHTML = Math.cos(exp)
})

tan.addEventListener('click', () => {
    screen.innerHTML = Math.tan(exp)
})

log.addEventListener('click', () => {
    screen.innerHTML = Math.log10(exp);
}) 
  
ln.addEventListener('click', () => {
    screen.innerHTML = Math.log(exp);
}) 

// cover button
coverbtn.addEventListener('click', () => {
    cover.classList.toggle("cover-t")
    coverbtn.classList.toggle("coverbtn-t")
    show.classList.toggle("show-t")
    clearScreen()
})

on.addEventListener('click', () => {
    screen.classList.toggle("screen-div-t")
})
