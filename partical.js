function draw() {
  var ctx =document.getElementById('canvas1').getContext('2d');
if (canvas.getContext) {

  
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
