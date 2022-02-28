let vertSource
let fragSource

async function init()
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
    vertSource = await getFile("vertexShader.glsl")
    //fragSource = await getFile("fragShader.glsl")
    console.log(vertSource)
    return gl, screenHeight, screenWidth
}
async function start()
{
    await init()
    main()
}
start()

function main()
{ 
    
    initShader()
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

function initShader()
{
    const vertexShader = loadShader(gl.VERTEX_SHADER, vertSource)
    console.log(vertexShader)
}

function loadShader(type, source)
{
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
   if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
    }

}