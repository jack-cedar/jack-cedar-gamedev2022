existingCanvas("myCanvas")
border("black", "solid", 1)


let player = new Player(new Vec2d(canvas.width/2, canvas.height/2), new Vec2d(0, 0), 10)
let clear_timer = 0
let bullets = []
let aim_guide = {
    point: new Vec2d(player.pos.x, player.pos.y),
    draw: () => {
        line(
            player.pos.x, 
            player.pos.y,
            aim_guide.point.x, 
            aim_guide.point.y
        )
        stroke("black")
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
        case 100: clear_timer = 0; bullets = [];break;
        default: clear_timer ++; break;   
    }
    canvasClear()
    player.update()
    aim_guide.draw()
    bullets.forEach(bullet => bullet.update())
    requestAnimationFrame(update_loop)
}
update_loop()
