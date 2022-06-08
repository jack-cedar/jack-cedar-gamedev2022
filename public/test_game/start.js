let game = {
    config_dir: "./config/",
    fps: 60,
    start_time: undefined,
    current_frame: 0,
    weapon_list: [],
    entities: [],
    player: {},
}

let start = async () => {
    await init() 
   existingCanvas("myCanvas")
    border("black", "solid", 1)
    translate_zero(canvas.width /2, canvas.height /2)
    gen_enemies()

    start_input()
    update()
}
start()
let spawnrate = 100;
let update = (time) => {
    // increment the frame counter
    game.current_frame++
    //get the fps
    if(game.start_time === undefined) game.start_time = time
    game.fps = Math.round(game.current_frame / (Math.round(time - game.start_time) / 1000))
    if((game.current_frame % spawnrate) == 0) {
        gen_enemies()
    }
    // Clear the screen
    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    // Update & render
    draw()
    requestAnimationFrame(update)
}

let gen_enemies = () => {
   
    let num_enemies = 10
    for(let i = 0 ; i < num_enemies; i++){
        let x, y
        let side = Math.round(rand(0, 3))
        console.log(side)
        switch(side) {
            case 0: 
                x = rand(-canvas.width / 2, canvas.width / 2)
                y = -canvas.height / 2
                break;
            case 1: 
                x = rand(-canvas.width / 2, canvas.width / 2)
                y = canvas.height / 2
                break;
            case 2: 
                x = -canvas.width / 2
                y = rand(-canvas.width / 2, canvas.width / 2)
                break;
            case 3:
                x = canvas.width / 2
                y = rand(-canvas.width / 2, canvas.width / 2)
                break;
        }
  
    game.entities.push(new Enemy(
        new Vec2d(x, y),
        new Vec2d(),
      
        10,
        10,
        "red"
    ))
    }

}