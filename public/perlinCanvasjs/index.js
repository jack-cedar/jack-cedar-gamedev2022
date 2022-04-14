var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let gridWidth = 5
let gridHeight = 5
let cellWidth = 100
let cellHeight = 100

cells = []
function generateCells(xPos, yPos, gridWidth, gridHeight, cellWidth, cellHeight) {
    let gw = gridWidth, gh = gridHeight
    let cw = cellWidth, ch = cellHeight
    for(let y = yPos; y < gh*ch+yPos; y+=ch) {
        for(let x = xPos; x < gw*cw+xPos; x+=cw) {
            let a = 0
            if(chance(20) == true) {a = 1}
            cells.push({x, y, w: cw, h:ch, a: a})
        }
    }
}
function drawCells() {
    cells.forEach(i => {
        ctx.globalAlpha = i.a
        ctx.fillRect(i.x, i.y, i.w, i.h)
    })
}
function rand(min, max, round) {
    switch(round) {
    case false: return Math.random() * (max-min) + min; break;
    case true: return Math.floor(Math.random() * (max-min) + min); break;
    }
}
var adjacent = function(list, cell) {   
    let adjacent = [
        list[cell+gridWidth],
        list[cell-gridWidth],
        list[cell+1],
        list[cell-1],
    ]
    return adjacent.filter(i =>{return i !== undefined})
}
function chance(chanceAsPercent) {
    let c = chanceAsPercent
    let r = rand(1, 100, true)
    if (r < c) {
        return true
    } else return false
}
var smooth = function(list, passes) {
    for(let i = 0; i < passes; i++)
        for(j = 0; j < list.length; j++) {
             adj = adjacent(list, j)
            
            list[j].a = adj.map(e=>e.a).reduce((a,b)=>a+b) / adj.length;
            //onsole.log(adj)
        }
}
generateCells(100, 0, gridWidth, gridHeight, cellWidth, cellHeight)
smooth(cells, 1)
drawCells()
