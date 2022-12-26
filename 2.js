let etchingPad = document.querySelector('.etchingPad')
let color = "red"

document.addEventListener('DOMContentLoaded' , gridCreation(16))

function gridCreation (size){
    let allDivs= etchingPad.querySelectorAll('div')
    allDivs.forEach((allDivs) => allDivs.remove())
    
    etchingPad.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    etchingPad.style.gridTemplateRows = `repeat(${size} , 1fr)`;
    let amount = size * size

    for( i = 0; i <= amount ; i++){
    let square = document.createElement('div')
        etchingPad.insertAdjacentElement("beforeend" , square)
        // square.style.border = "1px solid gray"
        square.style.backgroundColor = 'white'
        square.addEventListener('mouseover' , setColor)
        }
        

    }



function setSize(){
    
    let userInput = prompt("Please Enter The Size Between 2 to 64")
if (userInput < 2 || userInput > 64 ) {
    alert(" Click again on Set Size and Please enter the correct value")
}
return userInput;
}
let sizeSelect = document.querySelector('#size')
sizeSelect.addEventListener('click' , ()=>{
    let size = setSize()
    gridCreation(size)
})


function changeColor(choice){
   color = choice;
}


function setColor(){

   this.style.backgroundColor = color ;
   if(color == 'grey' ){
    this.style.backgroundColor = "grey"
   }
   if(color == 'black'){
    this.style.backgroundColor = "black";
   }
   if(color == 'random'){
    this.style.backgroundColor =  `hsl(${Math.random() * 360}, 100% , 50%`
   }
   if(color == 'white'){
    this.style.backgroundColor = "white";
   }
}


