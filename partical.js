function draw() {
  var ctx =document.getElementById('canvas1').getContext('2d');
if (canvas2.getContext) {

  
  ctx.beginPath();
 
  ctx.moveTo(75, 50);
   ctx.lineTo(25, 75);
   ctx.lineTo(75,100);
   ctx.lineTo(42,75);
 
  ctx.fill();

  
  ctx.beginPath();
  ctx.moveTo(85, 50);
   ctx.lineTo(135, 75);
   ctx.lineTo(85,100);
   ctx.lineTo(118,75);
  ctx.closePath();
  ctx.strokeStyle = 'rgb(0, ' + Math.floor(255 - 42.5 * 0) + ', ' + 
                       Math.floor(255 - 42.5 * 0) + ')';
  ctx.stroke();
 

}
}

var hour=document.getElementById("hour");
var minute=document.getElementById("minute");
var second=document.getElementById("second");
 
function analogclock(){

 
  var ctx2=document.getElementById('canvas3').getContext('2d');
  ctx2.save();
  ctx2.clearRect(0, 0, 400, 400);
  ctx2.font = '17px Georgia, serif';
                ctx2.fillStyle = 'red';
                ctx2.fillText(' Analog-Clock', 95, 143); 

                ctx2.restore();
const day=new Date();
const hh=day.getHours();
const mm=day.getMinutes();
const ss=day.getSeconds();

const hdeg=(hh*30)+(mm*0.5);
const mdeg=(mm*6)+(ss*0.1);
const sdeg=(ss*6);
hour.style.transform=`rotateZ(${hdeg}deg)`;
minute.style.transform=`rotateZ(${mdeg}deg)`;
second.style.transform=`rotateZ(${sdeg}deg)`;



window.requestAnimationFrame(analogclock);

}
window.requestAnimationFrame(analogclock);
