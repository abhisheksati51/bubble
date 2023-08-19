var timer =60;
var score =0;
var hitrn = 0;

function increaseValue()
{
  score+=10;
  document.querySelector("#scoreVal").textContent = score;
}

function decreaseValue()
{
  score-=10;
  document.querySelector("#scoreVal").textContent = score;
}
function makeBubble()
{
    var culter = '';

for(var i=1;i<=133;i++)
{   
    var ran = Math.floor(Math.random()*10);
    culter+=` <div class="bubble">${ran}</div>`;
}

document.querySelector('#pbtm').innerHTML = culter;
}

function hit()
{
  hitrn = Math.floor(Math.random()*10);
  document.querySelector('#hitNum').textContent = hitrn;
}

function runTimer()
{
    var timerinterval = setInterval(function ()
        {
           if(timer>0)
           {
             timer--;
             document.querySelector("#timerval").textContent = timer;
           }
           else
           {
              clearInterval(timerinterval);
              document.querySelector("#pbtm").innerHTML = `<h1>Game Over : Score is ${score}</h1>`;
              score = 0;
           }
        },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details)
{
  var clickedNum = Number(details.target.textContent);
  if(clickedNum === hitrn)
{
  increaseValue();
  makeBubble();
  hit();
}
else{
  decreaseValue();
  makeBubble();
  hit();
}

});



makeBubble();
runTimer();
hit();
// increaseValue();
// increaseValue();


