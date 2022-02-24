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
let world = []
document.getElementById("numBoxes").value = 0
for(let x = 0; x < 1; x++)
{
  for(let y = 0; y < 1; y++)
  {
    for(let z = 0; z < 1; z++)
    {
      world.push(new box(x*10, y*10, 100+z*10, 5, 5, 5 ))
    }
  }
}




document,addEventListener("mouseup", up =>{
  world = null
  world = []
  let boxes = document.getElementById("numBoxes").value
  let val = boxes / 2
  for(let x = -val; x < val+1; x++)
  {
    for(let y = -val; y < val+1; y++)
    {
      for(let z = -val; z < val+1; z++)
      {
        world.push(new box(x*10, y*10, 100+z*10, 5, 5, 5 ))
      }
    } 
  }
})

function render()
{
  world.sort(
    (a, b) => 
          {
              if(a.z > b.z) return -1;
              if(a.z < b.z) return 1;
              if(a.zsum == b.zsum) return -1;
          }
  )
  
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




