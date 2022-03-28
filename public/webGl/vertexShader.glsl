precision mediump float;
attribute vec3 vertPos;
void main()
{
    gl_Position = vec4(vertPos, 1.0);
}