NewCanvas(500, 500)
border("black", "solid", 1)

let player = new Player([250, 250], [0, -1], 10)

let update_loop = () => {
    canvasClear()
    player.update()
    requestAnimationFrame(update_loop)
}
update_loop()