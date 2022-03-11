class camera{
    constructor()
    {
        // Position of the camera
        this.cameraPos = [0, 0, -3]

        this.cameraTarget = [0, 0, 0]

       

        this.cameraDirection = 
        [
            [this.cameraPos[0]-this.cameraTarget[0]],
            [this.cameraPos[1]-this.cameraTarget[1]],
            [this.cameraPos[2]-this.cameraTarget[2]]
        ]
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