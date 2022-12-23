let eraseThePad = document.querySelector("#erase") ;
let clearTheBoard = document.querySelector("#clear") ;
let etchingPad = document.querySelector(".etchingPad") ;




document.addEventListener("DOMContentLoaded" , letsStartEtching(16)) ;



function letsStartEtching(size) {
    
    let divs = etchingPad.querySelectorAll('div')
    divs.forEach((squares)  => squares.remove())  
    
    etchingPad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    etchingPad.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let amount = size * size;
    
    for(let i = 0 ; i < amount ; i++){
        
        let square = document.createElement('div') ;
        square.style.backgroundColor = 'white' ;
        // square.style.border = '1px solid gray' ;
        etchingPad.insertAdjacentElement(("beforeend") , square) 
        square.addEventListener("mouseover" , setColor )
    }
    
}



function  setGridSize (){
    
    let sliderValue = document.querySelector(".slider").value ;
        letsStartEtching(sliderValue);

}


var color = "green";
function setColor(){

    if( color == "random"){

    this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%`;

    }else{
        this.style.backgroundColor = color
    }
    
}


function changeColor (choice){   
    color = choice
    
}

// this.style.backgroundColor = `hsl(${Math.random() * 360}, 100% , 50%`




