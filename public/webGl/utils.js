async function _objParser(objPath)
{
    obj = await getFile(objPath)
    obj = obj.split("\n")

    let meshName;
    var vertArray = [];
    var faceArray = [];
    
    for(let i = 0; i < obj.length; i++)
    {
        switch(obj[i][0])
        {
            case 'o': meshName=obj[i];meshName=meshName.slice(2);break;
            case 'v': switch(obj[i][1])
            {
                case ' ': let temp=obj[i].slice(2).split(' ');vertArray.push(parseFloat(temp[0]), parseFloat(temp[1]), parseFloat(temp[2]));break;
            }break;
            case 'f':let temp=obj[i].slice(2).split(' ').join('/').split('/');faceArray.push(parseInt(temp[0]), parseInt(temp[3]), parseInt(temp[6]));break;
        }
    }
    return {vertArray, faceArray}
}

async function getFile(url)
{
    let data = await fetch(url)
    .then(response => response.text())
    return data
}