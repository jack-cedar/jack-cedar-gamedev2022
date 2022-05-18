document.addEventListener("keydown", event => keyboard_input_handler(event))
document.addEventListener("click", event => mouse_input_handler(event))
let keyboard_input_handler = (event) => {
    switch(event.key) {
        case 'w': p1.pos.y -= 10; break;
        case 'a': p1.pos.x -= 10; break;
        case 's': p1.pos.y += 10; break;
        case 'd': p1.pos.x += 10; break;
    }
}
let mouse_input_handler = (event) => {
    var canvas_box = canvas.getBoundingClientRect()
    let x = event.clientX - canvas_box.left
    let y = event.clientY - canvas_box.lop
    console.log(x, y)

}