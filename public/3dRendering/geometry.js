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
        this.points = p.p
        this.faces = p.f
        this.matrix = getMatrix(this.points)
    }
    draw()
    {
        for(let i = 0; i < this.faces.length; i++)
        {
            let p1 = this.points[this.faces[i][0]]
            let p2 = this.points[this.faces[i][1]]
            let p3 = this.points[this.faces[i][2]]
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
