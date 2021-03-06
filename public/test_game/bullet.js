class Bullet {
    constructor(init_pos, init_vel, init_size, init_colour) {
        this.pos = init_pos

        this.vel = init_vel
        this.size = init_size || 1
        this.colour = init_colour || "black"
    }
  
    draw() {
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour)
    }
    update() {
        this.pos = this.pos.sum(this.vel)
        this.draw()
    }
}
