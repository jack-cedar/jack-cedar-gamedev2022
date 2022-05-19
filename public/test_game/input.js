document.addEventListener("keypress", event => keyboard_input_handler(event, "key_press"))
document.addEventListener("keyup", event => keyboard_input_handler(event, "key_up"))
document.addEventListener("click", event => mouse_input_handler(event))

let keyboard_input_handler = (event, type) => {
    switch(type) {
        case "key_press":
            switch(event.key) {
                case 'w': player.vel.y =  player.speed; break;
                case 'a': player.vel.x =  player.speed; break;
                case 's': player.vel.y = -player.speed; break;
                case 'd': player.vel.x = -player.speed; break;
            } break;
        case "key_up":
            switch(event.key) {
                case 'w': player.vel.y = 0; break;
                case 'a': player.vel.x = 0; break;
                case 's': player.vel.y = 0; break;
                case 'd': player.vel.x = 0; break;
            }
    }
}
let mouse_input_handler = (event) => {
    var canvas_box = canvas.getBoundingClientRect()
    let x = event.clientX - canvas_box.left
    let y = event.clientY - canvas_box.top
    mouse_pos.set(x, y)
    console.log(mouse_pos.nom())
}