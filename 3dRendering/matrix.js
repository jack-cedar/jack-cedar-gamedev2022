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
