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
let update_entities = () => {
    game.entities = game.entities.filter(e => e.is_alive )
    game.entities.forEach(e => e.update())

} 
//let textbox = new TextBox(100, 100, 'arial', 15, 5)
//textbox.border.colour = "black"
let draw = () => {
    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    update_entities()
    game.player.update()
}
let game_end = () => {
    canvasClear(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height)
    let text = new TextBox(0, 0, "Arial", 15, 100, "black")
    text.write("Game Over")
    canvas.style.cursor = "default"
}
