class Particle {
    constructor(init_pos, init_vel, init_size, init_colour, lifetime) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size || 1
        this.colour = init_colour || "black"
        this.lifetime = lifetime
        this.is_alive = true
        this.death_frame = game.current_frame + this.lifetime
        this.damage = 20
    }
    draw() {
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour)
    }
    update() {
        if (game.current_frame >= this.death_frame){this.is_alive = false}
        this.pos = this.pos.sum(this.vel)
        this.draw()
    }
}