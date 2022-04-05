async function _objParser(objPath)
{
    obj = await getFile(objPath)
    obj = obj.split("\n")

    let meshName;
    var p = [];
    var f = [];
    var normals = [];
    for(let i = 0; i < obj.length; i++)
    {
        switch(obj[i][0])
        {
            case 'o': meshName=obj[i];meshName=meshName.slice(2);break;
            case 'n': let temp0=obj[i].slice(2).split(' ');
            console.log(temp0)
                normals.push(parseFloat(temp0[0]), parseFloat(temp0[1]), parseFloat(temp0[2]));break;
            case 'v': switch(obj[i][1])
            {
                case ' ': 
                    let temp=obj[i].slice(2).split(' ');
                    p.push(new point(parseFloat(temp[0]), parseFloat(temp[1]), parseFloat(temp[2])));break;
                case 'n': 
                    let temp0=obj[i].slice(2).split(' ');
                    normals.push(parseFloat(temp0[1]), parseFloat(temp0[2]), parseFloat(temp0[3]));break;
            }break;
            case 'f':
                
                let temp=obj[i].slice(2).split(' ').join('/').split('/');
                switch(temp.length)
                {
                    case 9: f.push(new Array(parseInt(temp[0]-1), parseInt(temp[3]-1), parseInt(temp[6]-1)));break;
                    case 12: f.push(
                        new Array(parseInt(temp[0]-1), parseInt(temp[3]-1), parseInt(temp[6]-1)),
                        new Array(parseInt(temp[0]-1), parseInt(temp[6]-1), parseInt(temp[9]-1))
                        );
                            
                    break;
                }
                
                break;
        }
    }
    return {p, f}
}


async function getFile(url)
{
    let data = await fetch(url)
    .then(response => response.text())
    return data
}