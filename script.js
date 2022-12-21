let colorMode = document.querySelector("#colorMode") ;
let rainbowMode = document.querySelector("#rainbowMode") ;
let erase = document.querySelector("#erase") ;
let clear = document.querySelector("#clear") ;
let etchingPad = document.querySelector(".etchingPad") ;
let mysound = new Audio("./sound.mp3");
document.addEventListener("DOMContentLoaded" , letsStartEtching(16)) ;



function letsStartEtching(size) {

let squares = etchingPad.querySelectorAll('div')
    squares.forEach((squares)  => squares.remove())  
    
etchingPad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
etchingPad.style.gridTemplateRows = `repeat(${size} , 1fr)`;
let amount = size * size;

for(let i = 0 ; i < amount ; i++){

    let square = document.createElement('div') ;
    square.style.backgroundColor = 'white' ;
    // square.style.border = '1px solid gray' ;
    etchingPad.appendChild(square)         //we also use this // etchingPad.insertAdjacentElement(("beforeend") , square) 
    square.addEventListener("mouseover" , () => square.style.backgroundColor='green')
}


}



function  setGridSize (){

    let inputValue = document.querySelector(".input").value ;

    if(inputValue < 101 && inputValue > 1){
    letsStartEtching(inputValue);
    mysound.play()

}   else{

    let error = document.querySelector('#errorMassage');
    error.textContent = "Size Must Be Between 2 to 100"
    mysound.play()

}
}

// setGridSize()

function selectYourFavTemp(){

}