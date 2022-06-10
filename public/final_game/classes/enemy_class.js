class Enemy {
    constructor(init_pos, init_vel, init_size, speed, init_colour) {
        this.pos = init_pos
        this.vel = init_vel
        this.size = init_size | 10
        this.speed = 3
        this.is_alive = true
        this.colour = init_colour || "red"
        this.health = 100
        this.damage = 10
    }
    hit(damage) {
        this.health -= damage 
       
        if (this.health <= 0) this.on_death()
    }
    on_death() {
        this.is_alive = false 
        let particles = 5
        let particle_speed = 5
        for(let i = 0; i < particles; i++) {
            game.entities.push(new Particle(
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
       return(game.player.pos.dif(this.pos).nom().inv())
    }
    check_collide() {
        let detect_radius = 25
        game.entities.forEach(e => {
            let distance =e.pos.dif(this.pos).mag()
            switch (e.constructor.name) {
                case "Enemy": if(distance <= detect_radius && distance != 0) {
                    this.vel = this.vel.sum(this.pos.dif(e.pos).nom().mul(new Vec2d(2,2)));
                }  break;
                case "Projectile":if (distance <= 30){ 
                    //wddthis.vel = this.vel.sum(this.pos.dif(e.pos).nom().mul(new Vec2d(0.5,0.5)))
                }; break;

            }
          
            
    
        })


    }
    draw() {
         
        circle(this.pos.x, this.pos.y, this.size)
        fill(this.colour, this.health / 100)
    }
    update() { 
        this.vel = this.chase().mul(new Vec2d(this.speed, this.speed))
        this.check_collide()
       
      
        
       
        this.pos = this.pos.sum(this.vel)
        
       
        this.draw() 

      
       
    }
}