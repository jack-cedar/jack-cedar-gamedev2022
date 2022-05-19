NewCanvas(500, 500)
border("black", "solid", 1)

let player = new Player([250, 250], [0, 0], 10)

let mouse_pos = new Vec2d()

let update_loop = () => {
    canvasClear()
    player.update()
    requestAnimationFrame(update_loop)
}
update_loop()