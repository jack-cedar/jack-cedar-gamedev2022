document.addEventListener("keydown", event => keyboard_input_handler(event, "key_press"))
document.addEventListener("keyup", event => keyboard_input_handler(event, "key_up"))
document.addEventListener("mousedown", event => mouse_input_handler(event, "click"))
document.addEventListener("mouseup", event => mouse_input_handler(event, "release"))
document.addEventListener("mousemove", event => mouse_input_handler(event, "move"))

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

let mouse_input_handler = (event, type) => {
    var canvas_box = canvas.getBoundingClientRect()
    let mouse_x = event.clientX - canvas_box.left - canvas.ctx.zero_offset[0]
    let mouse_y = event.clientY - canvas_box.top - canvas.ctx.zero_offset[1]
    switch(type) {
        case "click": player.weapon.active = true;break;
        case "release": player.weapon.active = false;break;
        case "move": 
            aim_guide.point = new Vec2d(mouse_x, mouse_y);
            mouse_dir = player.pos.dif(aim_guide.point).nom()
            break;

    }
}
