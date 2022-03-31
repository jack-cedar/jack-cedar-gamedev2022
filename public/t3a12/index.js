canvas = document.getElementById("myCanvas");
buttonRand = document.getElementById("randB");
buttonSort = document.getElementById("sortB")
ctx = canvas.getContext("2d")
width = canvas.width = 1000
height = canvas.height = 200

let arr = [];



for(let i = 0; i < 200; i++)
{
    arr.push(i+1)
}
function draw()
{
    for(let i = 0; i < arr.length; i++)
    {
        ctx.fillRect(i*5, height-arr[i], 5, 5)
    }
    
}
function sort()
{
    check()
    ctx.clearRect(0,0,width,height)
    for(let i = 0; i < arr.length; i++)
    {
        let temp;
        if(arr[i] > arr[i+1])
        {
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1]=temp
        }

     
    }
    draw()
   
   
    
}
function check()
{
    let out = true
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] > arr[i+1])
        {
            out = false

        }
    }
    if(out == false)
    {
        setTimeout(() =>sort(), 0);
       
    }
    else alert("Now Sorted")

}

buttonRand.addEventListener("click", e =>
{arr.sort(random_sort)
    ctx.clearRect(0,0,width,height)
    draw()
})
buttonSort.addEventListener("click", e=>{sort()})
draw()

function random_sort(a, b) {
    return Math.random() - 0.5;
   }
   


