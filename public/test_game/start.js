let game = {
    config_dir: "./config/",
    fps: 60,
    start_time: undefined,
    current_frame: 0,
    weapon_list: [],
    projectiles:[],
    enemies:[],
    particles:[],
    player: {},
}


let start = async () => {
    await init() 
   existingCanvas("myCanvas")
    border("black", "solid", 1)
    translate_zero(canvas.width /2, canvas.height /2)
    game.enemies.push(new Enemy(new Vec2d(100, 100), new Vec2d(0, 0), 10, "red"))
    start_input()
    update()
}
start()

let update = (time) => {
    // increment the frame counter
    game.current_frame++
    //get the fps
    if(game.start_time === undefined) game.start_time = time
    game.fps = Math.round(game.current_frame / (Math.round(time - game.start_time) / 1000))
    // Clear the screen
    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    // Update & render
    draw()
   
  
    //console.log(game.projectiles)
    requestAnimationFrame(update)
}