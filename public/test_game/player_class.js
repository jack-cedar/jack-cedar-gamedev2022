class Player {
    constructor(init_pos, init_vel, init_size, init_colour) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size
        this.speed = 2
        this.colour = init_colour || "black"
        this.weapon = new Weapon(10)
    }
    check_walls() {
        if(this.pos.x > canvas.width / 2 || this.pos.x < -canvas.width / 2) {
            this.pos.x = -this.pos.x + 1
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
        switch (this.weapon.active) {
            case true: console.log("test");break;
        }
        this.weapon.shoot(new Vec2d(0.5, 0.5))
        console.log(this.weapon.active)
        this.pos = this.pos.sum(this.vel)
        this.check_walls()
        this.draw()
    }
}