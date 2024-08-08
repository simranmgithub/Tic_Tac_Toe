let boxes=document.querySelectorAll(".box");
let res=document.querySelector("#res");

let newgame=document.querySelector("#newgame");
let msg=document.querySelector(".msg");
let message=document.querySelector("#message");

let reset=document.querySelector("#res");

let turno=true;
const pattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach ((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked")
        if(turno)
            {
                box.innerText="O";
                turno=false;
            }
        else{
            box.innerText="X";
            turno=true;
            box.style.color="black";
        }
        box.disabled=true;
        
        checkwinner();
    });
});

const resetgame=()=>{
    turno=true;
    enable();
    msg.classList.add("hide");

};


const enable=()=>{
    for(let box of boxes)
        {
            box.disabled=false;
            box.innerText="";
        }
}

const disable=()=>{
    for(let box of boxes)
        {
            box.disabled=true;
        }
}
const showwinner=(winner)=>{
    message.innerText=`congratulation ,winner is ${winner}`;
    msg.classList.remove("hide");
    disable();
};

const checkwinner=()=>{
    for(let p of pattern)
        {
            console.log(p[0],p[1],p[2]);
            console.log(boxes[p[0]].innerText,
                        boxes[p[1]].innerText,
                        boxes[p[2]].innerText);
            let pos1=boxes[p[0]].innerText;
            let pos2=boxes[p[1]].innerText;
            let pos3=boxes[p[2]].innerText;

            if(pos1!=="" && pos2!=="" && pos3!=="") 
                {
                    if(pos1===pos2 && pos2===pos3)
                        {
                            console.log("winner",pos1);
                            showwinner(pos1);
                        }
                }
        }
    
};

newgame.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);