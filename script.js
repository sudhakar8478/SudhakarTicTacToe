let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetBtn");
let newBtn=document.querySelector("#newBtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");


let turnO = true;

const winPaterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetGame = () => {
    turnO = true;
    enable();
    for(let box of boxes){
        box.style.backgroundColor="yellow"
    }


}
const disable = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText ="";
    }
}


boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turnO===true){
               box.innerText="O";
               turnO = false;
        }
        else{
            box.innerText = "X";
            turnO= true;

        }
        box.disabled =true;
        checkWinner();
        })
})
const showWinner=(pos1)=>{
    disable()
    msg.innerText= `congo,the winner is ${pos1}`;
    msgcontainer.classList.remove("hide");
}
const checkWinner = ()=>{
    for(let pattern of winPaterns){
            let pos1=boxes[pattern[0]].innerText;
            let pos2=boxes[pattern[1]].innerText;
            let pos3=boxes[pattern[2]].innerText;
            if(pos1 !=="" && pos2 !=="" && pos3 !==""){
                if(pos1==pos2 && pos2==pos3){
                    console.log("Winner",pos1);
                    showWinner(pos1);
                    boxes[pattern[0]].style.backgroundColor="green";
                    boxes[pattern[1]].style.backgroundColor="green";
                    boxes[pattern[2]].style.backgroundColor="green";



                }
            }


    }
}

resetBtn.addEventListener("click",()=>{
        enable()
})
newBtn.addEventListener("click",()=>{
    enable()
    msgcontainer.classList.add("hide");
    for(let box of boxes){
        box.style.backgroundColor="yellow"
    }
})
