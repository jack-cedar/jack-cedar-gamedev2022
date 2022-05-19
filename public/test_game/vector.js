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
    cmp(second_vec) {
        if (this.x == second_vec.x && this.y == second_vec.y) return true
        else return false
    }
    set(x, y) {
        this.x = x
        this.y = y
    }
    mag () {
        return Math.sqrt((this.x*this.x)+(this.y*this.y))
    }
    nom() {
        let new_vec = new Vec2d()
        
        return new_vec.div({x: this.mag, y: this.mag})
    }
}