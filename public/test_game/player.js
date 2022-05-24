class Player {
    constructor(init_pos, init_vel, init_size, init_colour) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size || 1
        this.speed = 5
        this.colour = init_colour || "black"
    }
    shoot(dir) {
        let bullet_speed = 5
        bullets.push(
            new Bullet(
                new Vec2d(player.pos.x, player.pos.y),
                dir.mul(new Vec2d(bullet_speed, bullet_speed)),
                5))
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
