class Projectile {
    constructor(damage, init_pos, init_vel, init_size, init_colour, lifetime, pierce) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size || 1
        this.colour = init_colour || "black"
        this.lifetime = lifetime
        this.death_frame = game.current_frame + this.lifetime
        this.damage = damage
        this.is_alive = true
        this.enemies_hit = 0
        this.pierce = pierce
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
        game.entities.filter(e => e instanceof Enemy).forEach(enemy => {
            let distance = enemy.pos.dif(this.pos).mag()
            if(!enemy.is_alive) return
            if(distance <= this.size + enemy.size) {
                enemy.hit(this.damage)
                this.enemies_hit ++
                if(this.enemies_hit >= this.pierce) {
                    this.death_frame = game.current_frame
                }
            }
        });
    }
    draw() {
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour)
    }
    update() {
        this.check_hit()
        if (game.current_frame >= this.death_frame){this.is_alive = false}
        this.pos = this.pos.sum(this.vel)
        
        this.check_walls()
        this.draw()
    }
}