let start_input = () => {
    document.addEventListener("keydown", event => keyboard_input_handler(event, "key_press"))
    document.addEventListener("keyup", event => keyboard_input_handler(event, "key_up"))
    document.addEventListener("mousedown", event => mouse_input_handler(event, "click"))
    document.addEventListener("mouseup", event => mouse_input_handler(event, "release"))
    document.addEventListener("mousemove", event => mouse_input_handler(event, "move"))
}
let keyboard_input_handler = (event, type) => {
    let player = game.player
    switch(type) {
        case "key_press":
            switch(event.key) {
                case 'w': player.vel.y =  1; break;
                case 'a': player.vel.x =  1; break;
                case 's': player.vel.y = -1; break;
                case 'd': player.vel.x = -1; break;
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

let mouse_input_handler = (event, type) => {
    player = game.player
    var canvas_box = canvas.getBoundingClientRect()

    let mouse_x = event.clientX - canvas_box.left - canvas.zero_offset[0]
    let mouse_y = event.clientY - canvas_box.top  - canvas.zero_offset[1]
    cursor.pos.x = mouse_x
    cursor.pos.y = mouse_y
    switch(type) {
        case "click": player.weapon.active = true;break;
        case "release": player.weapon.active = false;break;
        case "move": 
            cursor.pos = new Vec2d(mouse_x, mouse_y);
            cursor.dir = game.player.pos.dif(cursor.pos).nom()
            break;

    }
}
