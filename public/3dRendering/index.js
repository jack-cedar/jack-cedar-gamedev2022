let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
ctx.strokeStyle = "white";
ctx.translate(width/2, height/2);


let c1 = new camera

function getMatrix(points){
  var pointMatrix = [];
  for (i = 0; i < points.length; i++){
    p = points[i]
    pointMatrix[i] = [p.x, p.y, p.z, p.w];
  }
  return(pointMatrix);
}

let obj01;
let shape01;
async function start()
{
  obj01 = await _objParser("./sphere.obj")
  shape01 = new Mesh(obj01)
  update();
}
function update()
{
    ctx.clearRect(-width / 2, -height / 2, width, height);
    shape01.update()
    requestAnimationFrame(update);    
}
start()
