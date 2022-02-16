function Vec3d(x, y, z)
{
    this.x = x
    this.y = y
    this

}




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
        
        this.points =
        [
            new point( this.w/2 + x,  this.h/2 + y, this.l/2 + z),
            new point(-this.w/2 + x,  this.h/2 + y, this.l/2 + z),
            new point( this.w/2 + x, -this.h/2 + y, this.l/2 + z),
            new point(-this.w/2 + x, -this.h/2 + y, this.l/2 + z),
            new point( this.w/2 + x,  this.h/2 + y, -this.l/2 + z),
            new point(-this.w/2 + x,  this.h/2 + y, -this.l/2 + z),
            new point( this.w/2 + x, -this.h/2 + y, -this.l/2 + z),
            new point(-this.w/2 + x, -this.h/2 + y, -this.l/2 + z),
        ]
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
    move()
    {

    }
    update()
    {
        sumz(this.polygons)
        polygons.sort((a, b) => 
        {
            if(a.sum > b.sum) return -1;
            if(a.sum < b.sum) return 1;
        })

        
    }
}

