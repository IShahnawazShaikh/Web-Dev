let gamebox = document.getElementById('gameBox');
let context = gamebox.getContext('2d');
context.fillStyle='brown';
var posX=0;
var posY=0;

let enemy = {
    color: 'red',
    x: 100,
    y: 0,
    h: 50,
    w: 50,
    vx: 0,
    vy: 1
  }
function updateGameState(){
    enemy.y+=enemy.vy;
    if(enemy.y+enemy.h>gamebox.height){
       enemy.vy--;
    }  
    else if(enemy.y<0){
       enemy.vy=1;   
    }

}
function drawPlayerBox(){
    context.fillStyle=enemy.color;
    context.fillRect(enemy.x,enemy.y,enemy.w,enemy.h);   
}
function updateGame(){
  
    //Change Game State
    updateGameState();


   //clear canvas
   context.clearRect(0,0,gamebox.width,gamebox.height);

   //draw player
   drawPlayerBox(enemy);



   window.requestAnimationFrame(updateGame); 

}
updateGame();