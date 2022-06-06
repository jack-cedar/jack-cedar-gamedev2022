class Player {
    constructor(size, colour, speed, weapon) {
        this.pos = new Vec2d(0, 0)
        this.vel =  new Vec2d(0, 0)
        this.size = size
        this.speed = 
        this.colour = colour
        this.weapon= weapon
    }
    check_walls() {
        if(this.pos.x > canvas.width / 2 || this.pos.x < -canvas.width / 2) {
            this.pos.x = -this.pos.x 
        }
        if(this.pos.y > canvas.height / 2 || this.pos.y < -canvas.height / 2) {
            this.pos.y = -this.pos.y
        }
    }
    change_weapon(weapon_name) {
        this.weapon = game.weapon_list.filter(w => w.name === weapon_name)[0]
    }
    draw() {
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour)
    }
   
    update() {
        if(this.weapon.active) this.weapon.shoot(cursor.dir)
        this.pos = this.pos.sum(this.vel.mul(new Vec2d(this.speed, this.speed)))
        this.check_walls()
        this.draw()
    }
}