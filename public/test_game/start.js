let game = {
    config_dir: "./config/",
    fps: 0,
    start_time: undefined,
    current_frame: 0,
    weapon_list: [],
    player: {},
}

let start = async () => {
    await init() 
    existingCanvas("myCanvas")
    border("black", "solid", 1)
    translate_zero(canvas.width /2, canvas.height /2)
    start_input()
    update()
}

let update = (time) => {
    // increment the frame counter
    game.current_frame++
    //get the fps
    if(game.start_time === undefined) game.start_time = time
    game.fps = Math.round(game.current_frame / (Math.round(time - game.start_time) / 1000))
    // Clear the screen
    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    // Update & render
    game.player.update()
    cursor.draw()
    requestAnimationFrame(update)
}
start()