class Enemy {
    constructor(init_pos, init_vel, init_size, init_colour) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size | 10
        this.speed = 2
        this.is_alive = true
        this.colour = init_colour || "red"
        this.health = 100
    }
    hit(damage) {
        this.health -= damage 
        if (this.health <= 0) this.is_alive = false 
    }

    draw() {
         
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour, this.health / 100)
    }
    update() { 
       
        this.pos = this.pos.sum(this.vel)
        this.draw() 
    }
}