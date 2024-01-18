console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let ting = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let isplaying = false;
let isgameover =false;
let turn ="X"

//Function to change turn

const changeturn =()=>{
    return turn == "X"? "0" : "X"
}

//Function to check for win

// const checkwin = () => {
//     let boxtext = document.getElementsByClassName("boxtext");
//     let wins = [
//       [0, 1, 2, 5, 5, 0],
//       [3, 4, 5, 5, 15, 0],
//       [6, 7, 8, 5, 25, 0],
//       [0, 3, 6, -5, 15, 90],
//       [1, 4, 7, 5, 15, 90],
//       [2, 5, 8, 15, 15, 90],
//       [0, 4, 8, 5, 15, 45],
//       [2, 4, 6, 5, 15, 135],
//     ];
  
//     let isgameover = true; // Assume game over by default
//     let isdraw = true; // Assume draw by default
  
//     wins.forEach((e) => {
//       if (
//         boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
//         boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
//         boxtext[e[0]].innerText !== ""
//       ) {
//         document.querySelector(".info").innerText =boxtext[e[0]].innerText + " Won";
//         isgameover = true;
//         gameover.play();
//         document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
//           "200px";
//         document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
//         document.querySelector(".line").style.width = "20vw";
//       }
//     });
  
//     for (let i = 0; i < boxtext.length; i++) {
//       if (boxtext[i].innerText === "") {
//         isdraw = false;
//         break;
//       }
//     }
  
//     if (isdraw) {
//       document.querySelector(".info").innerText = "Draw!";
//       // Additional actions for a draw
//     }
//   };
  


const checkwin=()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText ==boxtext[e[1]].innerText) && (boxtext[e[2]].innerText == boxtext[e[1]].innerText) && (boxtext[e[0]].innerText!="")){
            document.querySelector('.info').innerText= boxtext[e[0]].innerText+" Won";
            isgameover =  true;
            gameover.play()
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width ="200px";

            document.querySelector(".line").style.transform=`translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`

            document.querySelector(".line").style.width="20vw"
        }
        // else{
        //     document.querySelector('.info').innerText= "No one win DRAW"
        // }
        
    })
   
}


//Game logic


let boxes= document.getElementsByClassName("box")
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerHTML==''){
            boxtext.innerHTML=turn;
                                            //    console.log(turn);
            turn =changeturn();
            ting.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerHTML = "Turn for "+turn;
            }


        }
    })
})


//add onclick listener to reset button
reset.addEventListener('click',()=>{
    let boxtext= document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach((element)=>{
        element.innerHTML='';
     });
     turn='X';
     isgameover= false;
     document.querySelector(".line").style.width="0vw";
     document.getElementsByClassName("info")[0].innerHTML = "Turn for "+turn;
     document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width ="0px";
    
})

song.addEventListener('click',()=>{
    if(isplaying){
        music.pause();
        isplaying= false;
    }
    else{
        music.play();
       isplaying= true;
    }
    
})

