class camera{
    constructor()
    {
        this.fov = 120
        this.aspectRatio = (height / width)
        this.near= 0.1
        this.far= 10000
        this.view =
        [
            [this.fov*this.aspectRatio, 0, 0, 0],
            [0, this.fov*this.aspectRatio, 0, 0],
            [0, 0, this.far/(this.far-this.near),-1],
            [0, 0, (-this.far*this.near)/(this.far - this.near), 0]
        ]
    }
  }
