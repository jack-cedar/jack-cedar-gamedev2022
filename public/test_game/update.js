let cursor = {
    pos: new Vec2d(0, 0),
    dir: new Vec2d(0, 0),
    test: this.dir,
    size: 5,
    
    draw: () => {
        circle(cursor.pos.x, cursor.pos.y, cursor.size)
        stroke("red")
        line(
            cursor.pos.x+(cursor.size+cursor.size/2), cursor.pos.y,
            cursor.pos.x-(cursor.size+cursor.size/2), cursor.pos.y)
            stroke("red")
        line(
            cursor.pos.x, cursor.pos.y+(cursor.size+cursor.size/2),
            cursor.pos.x, cursor.pos.y-(cursor.size+cursor.size/2))
            stroke("red")
    }
}
let update_projectiles = () => {
    game.projectiles = game.projectiles.filter(p => game.current_frame <= p.death_frame )
    game.projectiles.forEach(projectile => projectile.update())

} 