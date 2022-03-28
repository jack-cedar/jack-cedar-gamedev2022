async function objReader(objPath)
{
    obj = await getFile(objPath)
    obj = obj.split("\n")

    let meshName;
    var vertArray = [];
    
    for(let i = 0; i < obj.length; i++)
    {
        switch(obj[i][0])
        {
            case 'o': meshName=obj[i];meshName=meshName.slice(2);break;
            case 'v': switch(obj[i][1])
            {
                case ' ': let temp;temp=obj[i].slice(2).split(' ');vertArray.push(parseFloat(temp[0]), parseFloat(temp[1]), parseFloat(temp[2]));break;
            }
        }
    }
    
    console.log(meshName)
    console.log(vertArray)
    //console.log(obj)
    return vertArray
}


function objToJson(objFile)
{
    //obj = obj.split("\n")
    let f = objFile
    let o;
    for(let i = 0; i < f.length; i++)
    {
        
    }
   
    
    
    return o
}





async function getFile(url)
{
    let data = await fetch(url)
    .then(response => response.text())
    return data
}