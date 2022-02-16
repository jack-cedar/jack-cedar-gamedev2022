class point 
{
    constructor(x, y, z)
    {
        this.x = x
        this.y = y
        this.z = z
        this.w = 1
        this.sx
        this.sy
        this.zy
    }
}
class polygon
{
    constructor(points)
    {
        this.points = []   
        for(var i = 1; i < arguments.length; i++){
            this.points.push(points[arguments[i]])
        }
        this.sum = 0;
    }
}

//This is where the fun begins
class box
{
    constructor(x, y, z, width, height, length)
    {
        this.x = x
        this.y = y
        this.z = z
        this.w = width
        this.h = height
        this.l = length
        this.rx = 0
        this.ry = 0
        this.rz = 0
        this.scale = [1, 1, 1]
        
        this.points =
        [
            new point( this.w/2,  this.h/2 , this.l/2 ),
            new point(-this.w/2,  this.h/2 , this.l/2 ),
            new point( this.w/2, -this.h/2 , this.l/2 ),
            new point(-this.w/2, -this.h/2 , this.l/2 ),
            new point( this.w/2,  this.h/2 , -this.l/2),
            new point(-this.w/2,  this.h/2 , -this.l/2),
            new point( this.w/2, -this.h/2 , -this.l/2),
            new point(-this.w/2, -this.h/2 , -this.l/2),
        ]
        this.matrix = getMatrix(this.points)
        this.polygons = 
        [
            new polygon(this.points, 0, 1, 3, 2),
            new polygon(this.points, 0, 1, 5, 4),
            new polygon(this.points, 2, 3, 7, 6),
            new polygon(this.points, 1, 5, 7, 3),
            new polygon(this.points, 2, 6, 4, 0),
            new polygon(this.points, 5, 4, 6, 7),
        ]
    }
    project()
    {
        for(let i = 0; i < this.points.length; i++)
        {
            let mx = this.matrix 
            mx = rotateX(mx, this.rx)
            mx = rotateY(mx, this.ry)
            mx = rotateZ(mx, this.rz)
            mx = translate(mx, this.x, this.y, this.z)
            mx = scale(mx, this.scale[0],this.scale[1], this.scale[2])
            var Projected2dPoint = matMul(c1.view, mx)
            
            if(Projected2dPoint[i][3] != 1)
            {
                this.points[i].sx = Projected2dPoint[i][0]/=Projected2dPoint[i][3]
                this.points[i].sy = Projected2dPoint[i][1]/=Projected2dPoint[i][3]
                this.points[i].sz = Projected2dPoint[i][2]/=Projected2dPoint[i][3]   
            }
        }
    }
    update()
    {      
        sumz(testb.polygons)
        testb.polygons.sort((a, b) => 
        {
            if(a.zsum > b.zsum) return -1;
            if(a.zsum < b.zsum) return 1;
        })
    }
}


function draw(object)
{
  for(i = 0; i < object.polygons.length; i++) 
  {
    let p = object.polygons[i].points
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

