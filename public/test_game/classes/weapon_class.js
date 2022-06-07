class Weapon {
    constructor (name, firerate, projectile_ammount, projectile_spread, projectile_size, projectile_speed, projectile_lifetime) {
        this.name = name
        this.projectile_speed = projectile_speed
        this.projectile_ammount = projectile_ammount
        this.projectile_spread = projectile_spread
        this.projectile_size = projectile_size
        this.projectile_lifetime = projectile_lifetime

        this.firerate = firerate
        this.action_delay = game.fps / this.firerate
        this.next_action_frame = 0
        this.active = false
    }
    shoot(dir) {
        dir = game.player.pos.dif(cursor.pos).nom()
        this.action_delay = game.fps / this.firerate
        if (this.next_action_frame < game.current_frame)
            for(let i = 0; i < this.projectile_ammount; i++){
                game.entities.push(
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
                        this.projectile_size,
                        "black",
                        this.projectile_lifetime
                        )
                    );
                    this.next_action_frame = game.current_frame + this.action_delay
            } 
    }
}