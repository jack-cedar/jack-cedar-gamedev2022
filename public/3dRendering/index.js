let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
ctx.strokeStyle = "white";
ctx.translate(width/2, height/2);

console.log()

let c1 = new camera


function getMatrix(points){
  var pointMatrix = [];
  for (i = 0; i < points.length; i++){
    p = points[i]
    pointMatrix[i] = [p.x, p.y, p.z, p.w];
  }
  return(pointMatrix);
}let world = []
let numCube = 100
for(let x = -1; x < 2; x++)
{
  for(let y = -1; y < 2; y++)
  {
    for(let z = -1; z < 2; z++)
    {
      
      world.push(new box(x*10, y*10, 100+z*10, 5, 5, 5 ))
      
    }
  }
}


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
  
  //console.log(makeWorld(things))
  let i = 0
  while(i < world.length)
  {
    world[i].update()
    draw(world[i])
    i++
  }
}
function update()
{
    ctx.clearRect(-width / 2, -height / 2, width, height);
    
    render()
    //testb.angleX += 0.01
    requestAnimationFrame(update);    
}
update();




