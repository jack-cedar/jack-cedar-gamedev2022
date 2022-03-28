class shaderProgram
{
    constructor(vs, fs)
    {
        this.program
        this.vSource = vs
        this.fSource = fs
        this.vs = gl.createShader(gl.VERTEX_SHADER);
        this.fs = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(this.vs, this.vSource)
        gl.shaderSource(this.fs, this.fSource)
        this.compile()
        this.make()
        
    }
    compile()
    {
        gl.compileShader(this.vs)
        if(!gl.getShaderParameter(this.vs, gl.COMPILE_STATUS))
        {
            console.error('ERROR! failed compiling vertex shader: ',gl.getShaderInfoLog(this.vs))
            return
        }
        gl.compileShader(this.fs)
        if(!gl.getShaderParameter(this.fs, gl.COMPILE_STATUS))
        {
            console.error('ERROR! failed compiling fragment shader: ',gl.getShaderInfoLog(this.fs))
            return
        }
    }
    make()
    {
        var program = gl.createProgram();
        gl.attachShader(program, this.vs);
        gl.attachShader(program, this.fs);
        gl.linkProgram(program);
        if(!gl.getProgramParameter(program, gl.LINK_STATUS))
        {
            console.error('ERROR! failed to link shader program: ', gl.getProgramInfoLog(program));
            return;
        }
        // This is for testing, remove for release
        gl.validateProgram(program)
        if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS))
        {
            console.error('ERROR! failed to validate shader program: ', gl.getProgramInfoLog(program));
            return;
        }
        this.program = program
    }
    use()
    {
        gl.useProgram(this.program)
    }

}