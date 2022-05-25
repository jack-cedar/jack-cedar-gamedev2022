class Projectile {
    constructor(init_pos, init_vel, init_size, init_colour) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size || 1
        this.colour = init_colour || "black"
        this.lifetime = 20
        this.death_frame = current_frame + this.lifetime
    }
    check_walls() {
        if(this.pos.x > canvas.width / 2 || this.pos.x < -canvas.width / 2) {
            this.pos.x = -this.pos.x
        } 
        if(this.pos.y > canvas.height / 2 || this.pos.y < -canvas.height / 2) {
            this.pos.y = -this.pos.y
        } 
    }
  
    draw() {
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour)
    }
    update() {
        this.pos = this.pos.sum(this.vel)
        this.check_walls()
        this.draw()
    }
}
