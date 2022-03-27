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
  obj01 = await objReader("./sphere.obj")
  //obj02 = await objReader("./cube.obj")
  //shape01 = new Mesh(obj01)
  //shape02 = new Mesh(obj02)
  update();
}
start()


function update()
{
    
    ctx.clearRect(-width / 2, -height / 2, width, height);
    //render()
    //shape01.update()
    //shape02.update()
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




