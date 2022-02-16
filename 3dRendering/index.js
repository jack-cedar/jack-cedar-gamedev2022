let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
ctx.strokeStyle = "white";
ctx.translate(width/2, height/2);

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


function matrixifyPoints(points){
  var pointMatrix = [];
  for (i = 0; i < points.length; i++){
    p = points[i]
    pointMatrix[i] = [p.x, p.y, p.z, p.w];
  }
  return(pointMatrix);
}
let testb = new box(0, 0,500, 100, 50, 200)
let fov = 90 * Math.PI/180
var pointMatrix = matrixifyPoints(testb.points);
let projection = [
  [1, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [0, 0, 0, 1]
]


var xAngle = 0
var yAngle = 0
var size = 1
function projectPoints()
{
  for(var i = 0; i < testb.points.length; i++)
  {

    //var  matrix = matMul( c1.view, pointMatrix)
    var matrix = pointMatrix
    matrix = rotateX(pointMatrix, xAngle, testb)
    //matrix = scale(matrix, 2, 2, 2)
    //matrix = matMul(project, rotated)
    //rotated = (c1.view, rotated)
    //rojected2dPoint = scale(matrix, 2, 2, 2)
    //var Projected2dPoint = matMul(projection, matrix)
    //console.log("before: ",Projected2dPoint)
   
    var Projected2dPoint = matMul(c1.view, matrix)
    if(Projected2dPoint[i][3] != 1)
    {
      testb.points[i].sx = Projected2dPoint[i][0]/=Projected2dPoint[i][3]
      testb.points[i].sy = Projected2dPoint[i][1]/=Projected2dPoint[i][3]
      testb.points[i].sz = Projected2dPoint[i][2]/=Projected2dPoint[i][3]
    }
   
    
    //console.log(Projected2dPoint)
  }
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
function render()
{
  sumz(testb.polygons)
  testb.polygons.sort((a, b) => 
  {
    if(a.zsum > b.zsum) return -1;
    if(a.zsum < b.zsum) return 1;
  })

  for(i = 0; i < testb.polygons.length; i++) 
  {
    let p = testb.polygons[i].points
    ctx.beginPath()
    ctx.moveTo(p[0].sx, p[0].sy)
    for(j = 1; j < p.length; j++) 
    {
      
      ctx.fillStyle = "blue"
      let x = p[j].sx
      let y = p[j].sy
      ctx.lineTo(x,y) 
    } 
    ctx.lineTo(p[0].sx,p[0].sy)
    //ctx.fill() 
    ctx.stroke();
   
  }
}
function update()
{
    ctx.clearRect(-width / 2, -height / 2, width, height);
    projectPoints()  
    render()
    xAngle += 0.01
    //yAngle += 0.01
    requestAnimationFrame(update);    
}
update();
console.log(height, width)




