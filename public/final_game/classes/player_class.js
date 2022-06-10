class Player {
    constructor(size, colour, speed, weapon) {
        this.pos = new Vec2d(0, 0)
        this.vel =  new Vec2d(0, 0)
        this.size = size
        this.speed = 
        this.colour = colour
        this.weapon= weapon
        this.max_health = 100
        this.health = this.max_health
        this.next_hit_frame = 0
        this.immunity_frames = 10
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
        this.health_bar()
    }
    check_collide() {
        let detect_radius = 25
        game.entities.forEach(e => {
            let distance =e.pos.dif(this.pos).mag()
            switch (e.constructor.name) {
                case "Enemy": if(distance <= this.size + e.size) {
                   
                    
                    if (this.next_hit_frame < game.current_frame) {
                        this.health -= e.damage
                        this.next_hit_frame = game.current_frame + this.immunity_frames
                       
                    }
                   
                }  break;
            }
        })


    }
    health_bar() {
       let x = -canvas.width / 2
       let y = -canvas.height / 2
       let max_length = this.health
       let height = 20
       rect(x, y, this.max_health, height)
       stroke("black")
       
       rect(x, y, this.health, height)
       fill("green")
       
    }
   
    update() {
        if(this.weapon.active) this.weapon.shoot(cursor.dir)
        this.pos = this.pos.sum(this.vel.mul(new Vec2d(this.speed, this.speed)))
        this.check_walls()
        this.check_collide()
        this.draw()
        if(this.health <= 0 ) {
            game.running = false
        }
    }
}