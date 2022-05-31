let cursor = {
    pos: new Vec2d(0, 0),
    dir: new Vec2d(0, 0),
    test: this.dir,
    
    draw: () => {
        circle(this.pos.x, this.pos.y, 10)
        stroke("red")
    }
}