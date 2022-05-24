class Weapon {
    constructor (init_projectile_speed) {
        this.projectile_speed = init_projectile_speed
        this.projectile_ammount = 3
        this.projectile_spread = 1
        this.projectile_size = 5
    }
    shoot(dir) {
        let projectile_speed = 10
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
                )
        } 
    }
}