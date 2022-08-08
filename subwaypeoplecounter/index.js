let count = 0 ;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el")
function increment(){
    count +=1;
    console.log(count);
    // document.getElementById("count-el").innerHTML = count;
    countEl.innerHTML=count;
}

function save(){
    let prevent = count + " - "
    saveEl.textContent+=prevent;
    count = 0;
    countEl.innerHTML=0;
}
// let namer = "Jesse Pinkman";
// let greeting = "What up biyatch, it's ";
// let myGreeting = greeting + namer; 
// console.log(myGreeting);
