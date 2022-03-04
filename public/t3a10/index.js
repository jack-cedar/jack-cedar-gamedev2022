let span = document.getElementById("mySpan")
let div = document.getElementById("myDiv")
let state = 0
let counter = 0
div.addEventListener("mouseover", event=>{if(state == 0){state = 1}})
div.addEventListener("mouseout", event=>{if(state == 1){state = 0}})
div.addEventListener("mousedown", event=>
{
    if(state == 1){state = 2}
    if(state == 4 && counter == 4)
    {
        alert("well great you broke it, hope you feel good with yourself");
        state = 5;
        counter++;
    }
    if(state == 5 && counter == 19)
    {
        alert("Well since you insisted on continuing to click heres a reward, you can now move the button with the arrow keys. Happy Now?");
        state = 6;
    }
    console.log(counter)
    if(state == 4 || state == 5){counter++}
})
div.addEventListener("mouseup", event=>{if(state == 2){state = 1}})
div.addEventListener("drag", event=>{if(state == 2){state = 3}})
div.addEventListener("dragend", event=>{if(state == 3){state = 4}})
document.addEventListener("keydown", event=>
{
    if(state == 6){keyEventHandler(event)}
})
function update()
{
    switch(state)
    {
        case 0: span.innerHTML = "Mouse Over";break;
        case 1: span.innerHTML = "Click Me";break;
        case 2: span.innerHTML = "Drag Me";break;
        case 3: span.innerHTML = "Stop That!";break;
        case 4: span.innerHTML = "No More!";break;
        case 5: span.innerHTML =":("; div.style.backgroundColor = "red";break;
        case 6: span.innerHTML =":)"; div.style.backgroundColor = "green";break;
    }
    requestAnimationFrame(update);
}
update();
xPos = 50
yPos = 50
function keyEventHandler(event)
{
    console.log(event.key)
    switch(event.key)
    {
        case 'ArrowUp': xPos--; div.style.top = xPos+'%';break;
        case 'ArrowDown': xPos++; div.style.top = xPos+'%';break;
        case 'ArrowLeft': yPos++; div.style.right = yPos+'%';break;
        case 'ArrowRight': yPos--; div.style.right = yPos+'%';break;
    }
    
}
