existingCanvas("myCanvas")
border("black", "solid", 1)
translate_zero(canvas.width /2, canvas.height /2)


let player = new Player(new Vec2d(0, 0), new Vec2d(0, 0), 10, "Blue")
let current_frame = 0
let projectiles = []

let aim_guide = {
    point: new Vec2d(player.pos.x, player.pos.y),
    draw: () => {
        line(
            player.pos.x, 
            player.pos.y,
            aim_guide.point.x, 
            aim_guide.point.y
        )
        stroke("black", 0.5)
        circle(aim_guide.point.x, aim_guide.point.y, 5)
        stroke("red")
        line(aim_guide.point.x - 10,  aim_guide.point.y,  aim_guide.point.x + 10,  aim_guide.point.y)
        stroke("red")
        line(aim_guide.point.x,  aim_guide.point.y + 10,  aim_guide.point.x,  aim_guide.point.y-10)
        stroke("red")
    }
}
let mouse_dir = player.pos.dif(aim_guide.point).nom()
let update_loop = () => {
    current_frame++
    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    aim_guide.draw()
    player.update()
    //player.weapon.shoot(new Vec2d(0.5, 0.5))
    
    projectiles = projectiles.filter(p => current_frame <= p.death_frame)
    projectiles.forEach(projectile => projectile.update())
    requestAnimationFrame(update_loop)
}
update_loop()
