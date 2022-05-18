class  Vec2d {
    constructor (x, y) {
        this.x = x || 0
        this.y = y || 0
    }
    sum(second_vec) { 
        let new_vec = new Vec2d()
        new_vec.x = this.x - second_vec.x
        new_vec.y = this.y - second_vec.y
        return new_vec
    }
    dif(second_vec) {
        let new_vec = new Vec2d()
        new_vec.x = this.x - second_vec.x
        new_vec.y = this.y - second_vec.y
        return new_vec
    }
    mul(second_vec) { 
        let new_vec = new Vec2d()
        new_vec.x = this.x * second_vec.x
        new_vec.y = this.y * second_vec.y
        return new_vec
       }
    div(second_vec) {
        let new_vec = new Vec2d()
        new_vec.x = this.x / second_vec.x
        new_vec.y = this.y / second_vec.y
        return new_vec
    }
}