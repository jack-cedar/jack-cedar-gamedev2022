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





  world = []

  for(let x = -10; x < 11; x++)
  {
    for(let y = -10; y < 12; y++)
    {
      for(let z = 0; z < 100; z++)
      {
        world.push(new box(x*25, y*25, 50+z*25, 2, 2, 2 ))
      }
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




