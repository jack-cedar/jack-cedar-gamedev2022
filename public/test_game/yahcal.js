// creates a new canvas element with the given width and height
function NewCanvas(width, height) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = width
    this.canvas.height = height
    this.canvas.ctx = this.canvas.getContext('2d')
    
    document.body.appendChild(this.canvas)
}
// incorperates an existing canvas
function existingCanvas(id) {
    this.canvas = document.getElementById(id)
    this.canvas.ctx = this.canvas.getContext('2d')
}
// changes the background colour of the canvas
function background(colour) {
    rect(0, 0, canvas.width, canvas.height)
    fill(colour)
} 
// changes the canvas border colour, thickness and style
function border(colour, style, widthpx) {
    canvas.style.borderStyle = style
    canvas.style.borderColor = colour
    canvas.style.borderWidth = widthpx+"px"
}
// draws an ellipse with a center point and a width and height
function ellipse(x, y, width, height) {
    canvas.ctx.beginPath()
    canvas.ctx.ellipse(x, y, width, height, 0, 0, 2*Math.PI, false)
}
// draws a circle with a center point and a radius
function circle(x, y, radius) {
    canvas.ctx.beginPath()
    canvas.ctx.arc(x, y, radius, 0, 2*Math.PI)
}
// fills whatever is in the buffer with the given colour
function fill(colour, opacity) {
    canvas.ctx.globalAlpha = opacity || 1
    canvas.ctx.fillStyle = colour
    canvas.ctx.fill()
}
// does stroke 
function stroke(colour, opacity, line_width) {
    canvas.ctx.globalAlpha = opacity || 1
    canvas.ctx.lineWidth = line_width || 1
    canvas.ctx.strokeStyle = colour
    canvas.ctx.stroke()

}
// Draws a standard rectangle with an x, y, and a height and width
function rect(x, y, width, height) {
    canvas.ctx.beginPath()
    canvas.ctx.rect(x, y, width, height)
}
// Draws a rectangle based on 2 points, top left and bottom right corners.
function rect2p(x1, y1, x2, y2) {
    canvas.ctx.beginPath()
    canvas.ctx.rect(x1, y1, x2 - x1, y2 - y1)
}
// draws a square with a given x, y, width and height
function square(x, y, size) {
    canvas.ctx.beginPath()
    canvas.ctx.rect(x, y, size, size)
}
// fills a pixel with a given colour
function pixel(x, y, colour) {
    square(x, y, 1)
    fill(colour)
}
// draws a line from x1, y1 to x2, y2
function line(x1, y1, x2, y2) {
    canvas.ctx.beginPath()
    canvas.ctx.moveTo(x1, y1)
    canvas.ctx.lineTo(x2, y2)
}
// clears the canvas
function canvasClear(x1, y1, x2, y2) {
    canvas.ctx.clearRect(x1 || 0, y1 || 0, x2 || canvas.width, y2 || canvas.height)
}
// creates a path of points from a array of points
function pointPath(points) {
    canvas.ctx.beginPath()
    canvas.ctx.moveTo(points[0][0], points[0][1])
    for (var i = 1; i < points.length; i++) {
            canvas.ctx.lineTo(points[i][0], points[i][1])
    }
    canvas.ctx.lineTo(points[0][0], points[0][1])
}
// creates a circle with any number of sides
function customCircle(x, y, sides, radius) {
    var points = []
    for (var i = 0; i < sides; i++) {
        var angle = i * 2 * Math.PI / sides
        points.push([x + radius * Math.cos(angle), y + radius * Math.sin(angle)])
    }
    pointPath(points)
}

function translate_zero (x, y) {
    canvas.zero_offset = [x, y]
    canvas.ctx.translate(x, y)
}

function TextBox(x, y, font, font_size, width, text_colour) {
    this.x = x
    this.y = y
    this.width = width
    this.buffer = "";
    this.size = font_size
    this.font = font
    this.lines
    this.text_colour = text_colour || "black"
    

    this.write = (text) => {
        this.buffer = ""
        this.buffer += text
        let regex = new RegExp('.{1,'+this.width+'}', 'g') 
        this.buffer = this.buffer.match(regex)
        this.lines = this.buffer.length
        this.buffer = this.buffer.join('\n')//.replace(/(\n\s)|(\n)/g, '\n').match(regex)
        console.log(this.buffer)
        //.match(regex).join('\n')
        canvas.ctx.font = this.size+ 'px '+this.font
        canvas.ctx.fillStyle = this.text_colour
        this.update(this.buffer)
    }
    this.writeln = (text) => {this.write(text); this.buffer += '\n'}
    this.update = () => {
        let temp_buffer = ""
        let line = 1
        for (let i = 0; i < this.buffer.length; i++) {
            let char = this.buffer[i]
            switch(char) {
                case '\n': {
                    canvas.ctx.fillText(temp_buffer, this.x, this.y + (line * this.size));
                    temp_buffer = ""
                    line++ } break;
                default: temp_buffer += char;break;
            }
        } 
       
        canvas.ctx.fillText(temp_buffer, this.x, this.y + (line * this.size));
    }
    this.clear = () => {this.buffer = ""; this.update()}

    this.border = {
        colour: "black",

        draw: () => {
            rect(this.x, this.y, this.size*this.width, this.size*this.lines)
            stroke(this.border.colour)
        }
    }
    
}
