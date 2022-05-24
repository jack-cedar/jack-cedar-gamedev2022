document.addEventListener("keydown", event => keyboard_input_handler(event, "key_press"))
document.addEventListener("keyup", event => keyboard_input_handler(event, "key_up"))
document.addEventListener("click", event => mouse_input_handler(event, "click"))
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
    let mouse_x = event.clientX - canvas_box.left 
    let mouse_y = event.clientY - canvas_box.top 
    switch(type) {
        case "click":
            let dir = player.pos.dif(new Vec2d(mouse_x, mouse_y)).nom()
                
            player.weapon.shoot(dir) 
            clear_timer = 0
            break;
        case "move": aim_guide.point = new Vec2d(mouse_x, mouse_y)
    }
}
