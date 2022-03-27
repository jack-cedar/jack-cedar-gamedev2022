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
    constructor(points, color)
    {
        this.points = []
        this.c = arguments[1]   
        for(var i = 2; i < arguments.length; i++){
            this.points.push(points[arguments[i]])
        }
        this.sum = 0;
        
    }
}

class Mesh
{
    constructor(p)
    {
        this.x = 0
        this.y = 0
        this.z = 2
        this.rx = 0
        this.ry = 0
        this.rz = 0
        this.num = 1
        this.scale = 1
        this.points = p.points
        this.faces = p.faces
        this.matrix = getMatrix(this.points)
    }
    draw()
    {
        for(let i = 0; i < this.faces.length; i++)
        {
            let p1 = this.points[this.faces[i][0]-1]
            let p2 = this.points[this.faces[i][1]-1]
            let p3 = this.points[this.faces[i][2]-1]
            ctx.beginPath()
            ctx.moveTo(p1.sx, p1.sy)
            ctx.lineTo(p2.sx,p2.sy) 
            ctx.lineTo(p3.sx,p3.sy)
            ctx.lineTo(p1.sx,p1.sy)
            ctx.stroke();
            

            
        }
    }
    project()
    {
        for(let i = 0; i < this.points.length; i++)
        {
            let mx = this.matrix 
            //console.log(this.matrix)
            mx = rotateX(mx, this.rx)
            mx = rotateY(mx, this.ry)
            mx = rotateZ(mx, this.rz)
            mx = translate(mx, this.x, this.y, this.z)
            
            
            mx = scale(mx, this.scale)
            var ProjectedPoint = matMul(c1.view, mx)
            
            if(ProjectedPoint[i][3] != 1)
            {
                this.points[i].sx = ProjectedPoint[i][0]/=ProjectedPoint[i][3]
                this.points[i].sy = ProjectedPoint[i][1]/=ProjectedPoint[i][3]
                this.points[i].sz = ProjectedPoint[i][2]/=ProjectedPoint[i][3]   
            }
        }
    }
    update()
    {
        
        this.ry += 0.005
        this.rx += 0.002
        this.z = Math.sin(this.num)*5-10
        this.x = Math.cos(this.num)*3
        //this.rz += 0.01
        this.project()
        this.draw(this)
        this.num += 0.01
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
        this.sx = 1
        this.sy = 1
        this.sz = 1
        this.scale = [this.sx, this.sy, this.sz]
        
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
            new point(this.x, this.y, -this.l/2)
        ]
        this.matrix = getMatrix(this.points)
        this.polygons = 
        [
            new polygon(this.points,'red', 0, 1, 3, 2),
            new polygon(this.points,'green',0, 1, 5, 4),
            new polygon(this.points, 'yellow',2, 3, 7, 6),
            new polygon(this.points, 'blue',1, 5, 7, 3),
            new polygon(this.points, 'purple',2, 6, 4, 0),
            new polygon(this.points, 'cyan',5, 4, 6, 7),
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
            var ProjectedPoint = matMul(c1.view, mx)
            
            if(ProjectedPoint[i][3] != 1)
            {
                this.points[i].sx = ProjectedPoint[i][0]/=ProjectedPoint[i][3]
                this.points[i].sy = ProjectedPoint[i][1]/=ProjectedPoint[i][3]
                this.points[i].sz = ProjectedPoint[i][2]/=ProjectedPoint[i][3]   
            }
        }
    }
    update()
    {      
        //this.rx += 0.05
        //this.ry += 0.1
        //this.rz += 0.01
        if(this.x >= width/11)
        {
            this.x = -this.x
        }
        this.x += 0.5
        
        
        
        //this.scale = [this.sx, this.sy, this.sz]
        this.project()
        
        /*sumz(this.polygons)
        this.polygons.sort((a, b) => 
        {
            if(a.zsum > b.zsum) return 1;
            if(a.zsum < b.zsum) return -1;
            if(a.zsum == b.zsum) return 1;
        })*/
    }
}


/*function draw(object)
{
  console.log(object.polygons)
  for(i = 0; i < object.polygons.length; i++) 
  {
    let p = object.polygons[i].points
    ctx.beginPath()
    ctx.moveTo(p[0].sx, p[0].sy)
    for(j = 1; j < p.length; j++) 
    {
     // ctx.fillStyle = object.polygons[i].c
      let x = p[j].sx
      let y = p[j].sy
      ctx.lineTo(x,y) 
    } 
    ctx.lineTo(p[0].sx,p[0].sy)
    //ctx.fill() 
    ctx.stroke();
   
  }

}*/

