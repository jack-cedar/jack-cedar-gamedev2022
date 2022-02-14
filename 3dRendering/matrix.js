
function matMul(a, b)
{
   //console.log("a: ",a)
   //console.log("b: ",b)
   let out = [];
   if(a.length != b[0].length)
   {
      console.error("width of b does not match length of a")
   }
   for(i = 0; i < b.length; i++)
   {
      let temp02 = []
      for(j = 0; j < a.length; j++)
      {
         let temp01 = [];
         let total = [];
         //console.log(temp01)
         for(k = 0; k < a[j].length; k++)
         {
            temp01.push(a[j][k]*b[i][k])        
         } 
         //console.log(temp01)
         temp02.push(temp01)
      }  
      //console.log(temp02)
      for(j = 0; j < temp02[0].length; j++)
      {
         let temp03 = 0
         for(k = 0; k < temp02.length; k++)
         {
            temp03 += temp02[k][j]
         }
         temp02.push(temp03)
      }
      console.log(temp02)
      out.push(temp02)
   } 

   //console.log (out)
   return out
}


const multiplyMatrices = (a, b) => {
   if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
      throw new Error('arguments should be in 2-dimensional array format');
   }
   let x = a.length,
   z = a[0].length,
   y = b[0].length;
   if (b.length !== z) {
      // XxZ & ZxY => XxY
      console.log(a, b)
      throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
     
   }
   let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
   let product = new Array(x);
   for (let p = 0; p < x; p++) {
      product[p] = productRow.slice();
   }
   for (let i = 0; i < x; i++) {
      for (let j = 0; j < y; j++) {
         for (let k = 0; k < z; k++) {
            product[i][j] += a[i][k] * b[k][j];
         }
      }
   }
   return product;
}
