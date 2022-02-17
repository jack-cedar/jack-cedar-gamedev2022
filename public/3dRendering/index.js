let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
ctx.strokeStyle = "white";
ctx.translate(width/2, height/2);

console.log()
class camera{
  constructor()
  {
    // Position of the camera
  this.posX= 0
  this.posY= 0
  this.posZ= 0
  // Direction the camera is facing
  this.dirX= 0
  this.dirY= 0
  this.dirZ= 0
  // What way is up?
  this.upX= 0
  this.upY= this.posY + 1
  this.upZ= 0

  this.fov = 90

  this.aspectRatio = (height / width)

  this.near= 0.1
  this.far= 10000

  this.view =
  [
    [this.fov*this.aspectRatio, 0, 0, 0],
    [0, this.fov*this.aspectRatio, 0, 0],
    [0, 0, this.far/(this.far-this.near),-1],
    [0, 0, (-this.far*this.near)/(this.far - this.near), 0]
  ]
  


  }
}
let c1 = new camera


function getMatrix(points){
  var pointMatrix = [];
  for (i = 0; i < points.length; i++){
    p = points[i]
    pointMatrix[i] = [p.x, p.y, p.z, p.w];
  }
  return(pointMatrix);
}

let things = 
[
  new box(75, 0, 500, 50, 50, 50),
  new box(-75, 0, 500, 50, 50, 50),
  new box(0, 75, 500, 50, 50, 50),
  new box(0, -75, 500, 50, 50, 50)
] 



let cube01 = new box(0, 0, 500, 100, 50, 200)
//let cube02 = new box(0, 0,500, 100, 50, 200)
document,addEventListener("mouseup", up =>{
  document.getElementById("xRotate").value = 0
  document.getElementById("yRotate").value = 0
  document.getElementById("zRotate").value = 0
  document.getElementById("xPos").value = 0
  document.getElementById("yPos").value = 0
  document.getElementById("zPos").value = 0
})

function render()
{
  let i = 0
  while(i < things.length)
  {
    things[i].update()
    draw(things[i])
    i++
  }
  
  /*cube01.rx += parseFloat(document.getElementById("xRotate").value)
  cube01.ry += parseFloat(document.getElementById("yRotate").value)
  cube01.rz += parseFloat(document.getElementById("zRotate").value)
  cube01.x += parseFloat(document.getElementById("xPos").value)
  cube01.y += parseFloat(document.getElementById("yPos").value)
  cube01.z += parseFloat(document.getElementById("zPos").value)*/

  //cube01.scale[0] += 0.01
  


  
}
function update()
{
    ctx.clearRect(-width / 2, -height / 2, width, height);
    
    render()
    //testb.angleX += 0.01
    requestAnimationFrame(update);    
}
update();




