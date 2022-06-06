class Projectile {
    constructor(init_pos, init_vel, init_size, init_colour, lifetime) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size || 1
        this.colour = init_colour || "black"
        this.lifetime = lifetime
        this.death_frame = game.current_frame + this.lifetime
        this.damage = 20
    }
    check_walls() {
        if(this.pos.x > canvas.width / 2 || this.pos.x < -canvas.width / 2) {
            this.pos.x = -this.pos.x
        } 
        if(this.pos.y > canvas.height / 2 || this.pos.y < -canvas.height / 2) {
            this.pos.y = -this.pos.y
        } 
    }
    check_hit() {
        game.enemies.forEach(enemy => {
            let distance = enemy.pos.dif(this.pos).mag()

            if(distance <= this.size + enemy.size) {
                enemy.hit(this.damage)
                this.death_frame = game.current_frame
            }
        });
    }
    draw() {
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour)
    }
    update() {
        this.pos = this.pos.sum(this.vel)
        this.check_hit()
        this.check_walls()
        this.draw()
    }
}