existingCanvas("myCanvas")
border("black", "solid", 1)
translate_zero(canvas.width /2, canvas.height /2)


let player = new Player(new Vec2d(0, 0), new Vec2d(0, 0), 10, "Blue")
let clear_timer = 0
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

let update_loop = () => {
    switch (clear_timer) {
        case 100: 
        clear_timer = 0; 
        console.log(projectiles.length + " projectiles Cleared")
        projectiles = [];break;
        default: clear_timer ++; break;   
    }
    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    aim_guide.draw()
    player.update()
    
    projectiles.forEach(projectile => projectile.update())
    requestAnimationFrame(update_loop)
}
update_loop()
