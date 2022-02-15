let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
ctx.strokeStyle = "white";

var grd = ctx.createLinearGradient(0, 200, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");

let angle = 0;
var points = []
var polygons = []
var size = 100;
ctx.translate(width/2, height/2);

const point = function(x, y, z){
  newPoint = {
    x: x,
    y: y,
    z: z,
  }
  return(newPoint) 
};
var polygon = function(){
  var pts = [];
  let thisColour = arguments[0]
  for(var i = 1; i < arguments.length; i++){
    pts.push(points[arguments[i]])
  }
  
  return(pts)

}
const matrix = function(){
}
points = [
  new point( -size, -size, -size),
  new point(  size, -size, -size),
  new point(  size,  size, -size),
  new point( -size,  size, -size),
  new point( -size, -size, size),
  new point(  size, -size, size),
  new point(  size,  size, size),
  new point( -size,  size, size),
]
function matrixifyPoints(points){
  var pointMatrix = [];
  for (i = 0; i < points.length; i++){
    p = points[i]
    pointMatrix[i] = [p.x, p.y, p.z];
  }
  return(pointMatrix);
}
var pointMatrix = matrixifyPoints(points);
let projection = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]
let rotationX = [
  [1, 0, 0],
  [0, Math.cos(angle), -Math.sin(angle)],
  [0, Math.sin(angle), Math.cos(angle),],
]
let rotationY = [
  [Math.cos(angle), 0 , -Math.sin(angle)],
  [0, 1, 0],
  [Math.sin(angle), 0 , Math.cos(angle)],
]
let rotationZ = [
  [Math.cos(angle), -Math.sin(angle), 0],
  [Math.sin(angle), Math.cos(angle), 0],
  [0, 0, 1]
]
let shear = [
  [1, 0, 0],
  [1, 1, 0],
  [1, 1, 0]
]
var xAngle = 0
var yAngle = 0

window.addEventListener("keydown", keyPressed);
            function keyPressed(event){
              console.log(event.keyCode)
              console.log(xAngle, yAngle)
                //could have used a switch statement and make it smaller
                switch(event.keyCode){
                  case 37: yAngle += 0.1;break;
                  case 38: xAngle -= 0.1;break;
                  case 39: yAngle -= 0.1;break;
                  case 40: xAngle += 0.1;break;
                }
                
              
            }

function projectPoints(){
  for(var i = 0; i < points.length; i++){
    var rotated = rotateX(pointMatrix, xAngle)
    rotated = rotateY(rotated, yAngle)
   
   
    var Projected2dPoint = matMul(projection, rotated)
    points[i].sx = Projected2dPoint[i][0];
    points[i].sy = Projected2dPoint[i][1];
    points[i].sz = Projected2dPoint[i][2];
}
}
function drawPoints(){
  ctx.fillStyle = "white";
  for(var i = 0; i < points.length; i++){
    ctx.beginPath();
    ctx.arc(points[i].sx, points[i].sy, 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
  }
}
polygons.push([new polygon( 0, 1, 2, 3, 0), "red"])
polygons.push([new polygon(4, 5, 6, 7, 4), "yellow"])
polygons.push([new polygon(0, 3, 7, 4, 0), "green"])
polygons.push([new polygon(5, 6, 2, 1, 5), "blue"])
polygons.push([new polygon(2, 6, 7, 3, 2), "purple"])
polygons.push([new polygon(4, 5, 1, 0, 4), "pink"])

function sumz(polygons){
  let p = polygons
  //console.log(p.length)
  for(i = 0; i < p.length; i++)
  {
    let sum = 0;
    let l = p[i][0].length
    let j = 0
    while(j < l)
    {
      
      sum += p[i][0][j].sz
      
      j++
    }
    p[i].zsum = sum
  }
}
function render(){
  sumz(polygons)
  polygons.sort((a, b) =>{
    if(a.zsum > b.zsum) return -1;
    if(a.zsum < b.zsum) return 1;
  })
  for(i = 0; i < polygons.length; i++) {
   
    let p = polygons[i][0]
    ctx.beginPath()
    ctx.moveTo(p[0].sx, p[0].sy)
    for(j = 1; j < p.length; j++) {
      ctx.fillStyle = polygons[i][1]
      let x = p[j].sx
      let y = p[j].sy
      ctx.lineTo(x,y) 
      ctx.stroke();
      //console.log(polygons[i].thisColour)
      
      ctx.fill() 
     
    } 
  }
  //console.log(square)
}

function update(){
    ctx.clearRect(-width / 2, -height / 2, width, height);
    projectPoints()  
    //drawPoints()
    render()
    
    requestAnimationFrame(update);    
}
update();
