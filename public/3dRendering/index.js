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
  for(var i = 0; i < arguments.length; i++){
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

function projectPoints(){
  for(var i = 0; i < points.length; i++){
    //var rotated = multiplyMatrices(pointMatrix, rotationX)
    //var rotated = multiplyMatrices(pointMatrix, rotationY)
    mulMat(rotationY, pointMatrix)
    //console.log("rotated: ", rotated)
    //rotated = multiplyMatrices(rotated, shear)
    //var Projected2dPoint = multiplyMatrices(rotated, projection)
    //points[i].sx = Projected2dPoint[i][0];
    //points[i].sy = Projected2dPoint[i][1];
    //points[i].sz = Projected2dPoint[i][2];
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
function render(){
  polygons [
    new polygon(0, 1, 2, 3, 0)
  ]
  var square = polygon(0, 1, 2, 3, 0)
  //console.log(square)
}

render()
function update(){
    ctx.clearRect(-width / 2, -height / 2, width, height);
    updateAngle()
    projectPoints()
   
   
    drawPoints()
    
    //requestAnimationFrame(update);    
}
update();
function updateAngle(){
  rotationX = [
    [1, 0, 0],
    [0, Math.cos(angle), -Math.sin(angle)],
    [0, Math.sin(angle), Math.cos(angle),],
  ]
  rotationY = [
    [Math.cos(angle), 0 , -Math.sin(angle)],
    [0, 1, 0],
    [Math.sin(angle), 0 , Math.cos(angle)],
    
  ]
  rotationZ = [
    [Math.cos(angle), -Math.sin(angle), 0],
    [Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 1]
  ]
  angle += 0.01;
}