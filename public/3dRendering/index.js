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
}
let obj;
async function start()
{
  obj = await objReader("./cube.obj")
  drawPoints(obj.points)
  console.log(obj)
  update();
}
start()



world = []
//world.push(new box(0, 0, 50, 10, 10, 10 ))

function drawPoints(p)
{
  for(i = 0; i < p.length; i++ )
  {
    console.log(p)
    ctx.arc(p[i].x, p[i].y, 5, 2 * Math.PI);
  }
}
function render()
{
  /*world.sort(
    (a, b) => 
          {
              if(a.z > b.z) return -1;
              if(a.z < b.z) return 1;
              if(a.zsum == b.zsum) return -1;
          }
  )*/
  
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
    drawPoints(obj)
    //render()
    //testb.angleX += 0.01
    requestAnimationFrame(update);    
}


function sumz(polygons)
{
  let p = polygons
  for(i = 0; i < p.length; i++)
  {
    let sum = 0;
    let l = p[i].points.length
    let j = 0
    while(j < l)
    {
      sum += p[i].points[j].sz 
      j++
    }
    p[i].zsum = sum
  }
}




