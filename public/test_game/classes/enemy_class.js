class Enemy {
    constructor(init_pos, init_vel, init_size, init_colour) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size | 10
        this.speed = 5
        this.is_alive = true
        this.colour = init_colour || "red"
        this.health = 100
    }
    hit(damage) {
        this.health -= damage 
        if (this.health <= 0) this.on_death()
    }
    check_walls() {
        if(this.pos.x > canvas.width / 2 || this.pos.x < -canvas.width / 2) {
            this.pos.x = -this.pos.x 
        }
        if(this.pos.y > canvas.height / 2 || this.pos.y < -canvas.height / 2) {
            this.pos.y = -this.pos.y
        }
    }
    on_death() {
        this.is_alive = false 
        let particles = 5
        let particle_speed = 5
        for(let i = 0; i < particles; i++) {
            game.particles.push(new Particle(
                this.pos, 
                new Vec2d(vari(),vari()).mul(new Vec2d(particle_speed, particle_speed)),
                5,
                "red",
                10
                )
            )
        }
    }
    chase() {
        let dir = game.player.pos.dif(this.pos).nom().mul(new Vec2d(-this.speed, -this.speed))
        this.vel = dir

    }
    draw() {
         
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour, this.health / 100)
    }
    update() { 
        this.pos = this.pos.sum(this.vel)
        this.chase()
        this.draw() 
       
    }
}