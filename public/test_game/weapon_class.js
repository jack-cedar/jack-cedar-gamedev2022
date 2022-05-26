class Weapon {
    constructor (init_projectile_speed) {
        this.projectile_speed = init_projectile_speed
        this.projectile_ammount = 1
        this.projectile_spread = 0
        this.projectile_size = 5

        this.firerate = 5
        this.action_delay = fps / this.firerate
        this.next_action_frame = 0
        this.active = false
    }
    shoot(dir) {
        this.action_delay = fps / this.firerate
        if (this.next_action_frame < current_frame)
            for(let i = 0; i < this.projectile_ammount; i++){
                projectiles.push(
                    new Projectile(
                        new Vec2d(player.pos.x, player.pos.y),
                        dir.mul(
                            new Vec2d(
                                this.projectile_speed,
                                this.projectile_speed))
                            .sum(new Vec2d(
                                rand(-this.projectile_spread, this.projectile_spread), 
                                rand(-this.projectile_spread, this.projectile_spread)
                                )
                                ),
                        this.projectile_size
                        )
                    );
                    this.next_action_frame = current_frame + this.action_delay
            } 
      
    }
}