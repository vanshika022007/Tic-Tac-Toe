let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true;
let body = document.querySelector("body");
let count = 0;
let win = false;
const winPatterns = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        if (turnO){
            turnO = false;
            box.innerText = "O";
            count += 1
        }
        else{
            turnO = true;
            box.innerText = "X";
        }
        box.disabled = true;
        checkWinner();
    })
})

function checkWinner(){
    for(let pattern of winPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != ""){
        if (val1 === val2 && val2 === val3 && val1 === val3){
            win = true;
            let ans = document.createElement("h2");
            ans.innerText = `${val1} is the winner`;
            body.appendChild(ans);
            reset.innerText = "Restart";
            reset.style.backgroundColor = "red";
            boxes.forEach((box) => {
                    box.disabled = true;
                })
            reset.addEventListener("click",() => {
                boxes.forEach((box) => {
                    box.disabled = false;
                    box.innerText = "";
                })
                reset.innerText = "Reset";
                reset.style.backgroundColor = "rgb(27, 26, 26)";
                turnO = true;
                win = false;
                count = 0;
                ans.remove();
        })
        }
    }
    }

    if (count === 5 && win == false){
        let ans = document.createElement("h1");
        ans.innerText = `Match is draw`;
        body.appendChild(ans);
        reset.innerText = "Restart";
        reset.style.backgroundColor = "red";
        reset.addEventListener("click",() => {
            boxes.forEach((box) => {
                box.disabled = false;
                box.innerText = "";
            })
            reset.innerText = "Reset";
            reset.style.backgroundColor = "rgb(27, 26, 26)";
            turnO = true;
            win = false;
            count = 0
            ans.remove();
        })
    }
}

reset.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
        turnO = true;
        win = false;
        count = 0;
})