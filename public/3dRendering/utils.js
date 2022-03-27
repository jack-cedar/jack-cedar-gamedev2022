async function objReader(objPath)
{
    obj = await getFile(objPath)
    obj = obj.split("\n")
    objToJson(obj)
}
function objToJson(objFile)
{
    //obj = obj.split("\n")
    let f = objFile
    let o;
    for(let i = 0; i < f.length; i++)
    {
        switch(f[i][0])
        {
            case 'o': o = f[i];break;
        }
    }
    o = o.slice(2)
    
    o = eval('let' + o + '=' + '{}')
    console.log(o)
}


async function getFile(url)
{
    let data = await fetch(url)
    .then(response => response.text())
    return data
}