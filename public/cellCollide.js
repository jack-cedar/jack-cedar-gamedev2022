newCanvas(500, 500)
border("black", "solid", 1)
background("black")
cellSize = 5;
player = {
    x: 0,
    y: 0,
    s: cellSize,
}
grid = []
window.addEventListener("keydown", e => {
   
    switch(e.key) {
        case 'w': if(grid[player.x/player.s][(player.y-player.s)/player.s].value == 0) player.y -= player.s ;break;
        case 'a': if(grid[(player.x-player.s)/player.s][player.y/player.s].value == 0)player.x -= player.s;break;
        case 's': if(grid[player.x/player.s][(player.y+player.s)/player.s].value == 0)player.y += player.s;break;
        case 'd': if(grid[(player.x+player.s)/player.s][player.y/player.s].value == 0)player.x += player.s;break;
    }
   
})
for(let x = 0; x < canvas.width; x+=cellSize) {
    let temp = []
    for(let y = 0; y < canvas.height; y+=cellSize) {
        let r = 0
        temp.push({x: x, y: y, value: r})
    }
    grid.push(temp)
}
function loop() {
    canvasClear()
    for(let x = 0; x < grid.length; x++) {
        for(let y = 0; y < grid[0].length; y++) {
            let cell = grid[x][y]
            //square(cell.x, cell.y, cellSize)
            //draw("white")
         
            switch(cell.value) {
                case 0:  break;
                case 1:  square(cell.x, cell.y, cellSize); fill("white"); break;
            }
        }
    }
    square(player.x, player.y, player.s)
    fill("red")

    requestAnimationFrame(loop)
}
loop()