function matMul(a, b) {
   let out = [];
   if(a.length != b[0].length) {
      console.error("width of b does not match length of a")
      console.log(a, b)
   }
   for(i = 0; i < b.length; i++) {
      let temp02 = []
      let temp04 = []
      for(j = 0; j < a.length; j++) {
         let temp01 = [];
         for(k = 0; k < a[j].length; k++) {
            temp01.push(a[j][k]*b[i][k])  
         } 
         temp02.push(temp01) 
      }  
      for(j = 0; j < temp02.length; j++) {
         let temp03 = 0
         for(k = 0; k < temp02.length; k++) {
            temp03 += temp02[j][k] 
         }
         temp04.push(temp03)
      }
      out.push(temp04)
   } 
   return out
}
// Rotation functions
function rotateX(pts, angle, point)
{
   let out = pts
   let pt = point
   let rotationX = [
      [1, 0, 0, 0],
      [0, Math.cos(angle), -Math.sin(angle), 0],
      [0, Math.sin(angle), Math.cos(angle), 0],
      [0, 0, 0, 1],
   ]
   //onsole.log(pts)
   let pmat =
   [
      [1, 0, pt.x, 0],
      [0, 1, pt.y, 0],
      [0, 0, pt.z, 0],
      [0, 0, 0, 0, 1]
   ]
   out = matMul(rotationX, pts)
   out = (pmat, out)
   return matMul(rotationX, pts)
}

function rotateY(pts, angle)
{
   let rotationY = [
      [Math.cos(angle), 0 , -Math.sin(angle), 0],
      [0, 1, 0, 0],
      [Math.sin(angle), 0 , Math.cos(angle), 0],
      [0, 0, 0, 1],
      
   ]
   return matMul(rotationY, pts)
}

function rotateZ(pts, angle)
{
   let out = pts
   rotationZ = [
      [Math.cos(angle), -Math.sin(angle), 0, 0],
      [Math.sin(angle), Math.cos(angle), 0, 0],
      [0, 0, 1, 0]
      [0, 0, 0, 1],
   ]
   console.log(pts)
   let point = []
   out = matMul(rotationZ, pts)
   out = (rotationZ, out)
   return matMul(rotationZ, pts)
}
function scale(pts, x, y, z)
{
   let scale = [
      [x, 0, 0, 0],
      [0, y, 0, 0],
      [0, 0, z, 0],
      [0, 0, 0, 1],
   ]
   return matMul(scale, pts)
}