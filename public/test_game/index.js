existingCanvas("myCanvas")
border("black", "solid", 1)
translate_zero(canvas.width /2, canvas.height /2)

let start_time
let fps = 0


let player = new Player(new Vec2d(0, 0), new Vec2d(0, 0), 10, "Blue")
let current_frame = 0
let projectiles = []
let enemies = []

let num_enemies = 10
for (let i = 0 ; i < num_enemies; i++) {
    let pos = new Vec2d(rand(-300, 300), rand(-200, 200))
    let vel = new Vec2d(vari(), vari())
    enemies.push(new Enemy(pos, vel))
}

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
console.log(aim_guide.point)


let update_loop = (time) => {
    current_frame++

    if(start_time === undefined) start_time = time
    frame_time = Math.round(time - start_time) / 1000
    fps = Math.round(current_frame / frame_time)

    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    aim_guide.draw()
    player.update()
    projectiles = projectiles.filter(p => current_frame <= p.death_frame)
    enemies = enemies.filter(e => e.is_alive)
    projectiles.forEach(projectile => projectile.update())
    enemies.forEach(enemy => enemy.update())
    requestAnimationFrame(update_loop)
}
update_loop()
