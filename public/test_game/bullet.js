class Bullet {
    constructor(init_pos_array, init_vel_array, init_size, init_colour) {
        this.pos = new Vec2d (
            init_pos_array[0] || 0,
            init_pos_array[1] || 0
            )

        this.vel = new Vec2d (
            init_vel_array[0] || 0,
            init_vel_array[1] || 0
            )

        this.size = init_size || 1
        
        this.colour = init_colour || "black"
    }
  
    draw() {
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour)
    }
    update() {
        this.check_walls()
        this.pos = this.pos.sum(this.vel)
      
        this.draw()
    }
}