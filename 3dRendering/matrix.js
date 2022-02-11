
function mulMat(a, b)
{
   console.log("a: ",a)
   console.log("b: ",b)
   let out = [];
   if(a.length != b[0].length)
   {
      console.log("width of b does not match length of a")
   }
   for(i = 0; i < b.length; i++)
   {
      for(j = 0; j < a.length; j++)
      {
         for(k = 0; k < a[j].length; k++)
         {
            console.log(out)
            out.push([a[j][k]*b[i][j]])
            console.log(out)
         }

      }

   }

}