function matMul(a, b) {
   let out = [];
   if(a.length != b[0].length) {
      console.error("width of b does not match length of a")
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
function rotateX(pts, angle)
{
   rotationX = [
      [1, 0, 0],
      [0, Math.cos(angle), -Math.sin(angle)],
      [0, Math.sin(angle), Math.cos(angle),],
   ]
   return matMul(rotationX, pts)
}

function rotateY(pts, angle)
{
   rotationY = [
      [Math.cos(angle), 0 , -Math.sin(angle)],
      [0, 1, 0],
      [Math.sin(angle), 0 , Math.cos(angle)],
      
   ]
   return matMul(rotationY, pts)
}

function rotateZ(pts, angle)
{
   rotationZ = [
      [Math.cos(angle), -Math.sin(angle), 0],
      [Math.sin(angle), Math.cos(angle), 0],
      [0, 0, 1]
   ]
   return matMul(rotationZ, pts)
}
