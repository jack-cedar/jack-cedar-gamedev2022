newCanvas(500, 500)
border("black", "solid", 1)
background("black")

class vec {
    constructor(x, y) {
        this.x = x, this.y = y
    }
}
function cell(pos, value) {
    
}

cellSize = 50
grid = []
function initGrid() {
    for(let x = 0; x < canvas.width; x+=cellSize) {
        let temp = []
        for(let y = 0; y < canvas.width; y+=cellSize) {
            temp.push(vec())  
        }
        grid.push(temp)
    }
}
function drawGrid() {
    for(let x = 0; x < canvas.width; x+=cellSize) {
        for(let y = 0; y < canvas.width; y+=cellSize) {
            temp.push(0)  
        }
    }

}

