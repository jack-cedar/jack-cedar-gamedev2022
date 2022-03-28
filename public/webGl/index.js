async function initCanvas()
{
    // Initalization of Canvas
    const canvas = document.getElementById("myCanvas");
    screenWidth = canvas.width = 800;
    screenHeight =  canvas.height = 600;
    gl = canvas.getContext("webgl");

    // Check if gl Initalized
    if(gl === null)
    {
        alert("Failed to initalize WebGL, it may not be supported by your browser");
        return;
    }
    return gl
}





let thing
async function init()
{
    const gl = initCanvas()
    thing = await objReader("sphere.obj")

    let vShaderSrc = await getFile("vertexShader.glsl");
    let fShaderSrc = await getFile("fragShader.glsl");
    myShader = new shaderProgram(vShaderSrc, fShaderSrc);

    

    main()
}

function main()
{
    var verts = new Float32Array(thing)
    console.log(verts)
    var vertBufferObj = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertBufferObj);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);
    var posAttribLocation = gl.getAttribLocation(myShader.program, "vertPos");
    gl.vertexAttribPointer
    (
        posAttribLocation, // attrib location
        3,  // Number of elements per attrib
        gl.FLOAT, // Element type
        gl.FALSE, //is Normalized! 
        3 * Float32Array.BYTES_PER_ELEMENT,// size of each vert
        0// offset

    )
    gl.clearColor(0, 0, 0, 1.0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
    gl.enableVertexAttribArray(posAttribLocation);
    myShader.use()
    gl.drawArrays(gl.TRIANGLES, 0, 3)
  
}
init()