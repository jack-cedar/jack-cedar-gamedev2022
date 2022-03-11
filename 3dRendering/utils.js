async function objReader(objPath)
{
    obj = await getFile(objPath)
    obj = obj.split("\n")
    for(i = 0; i < obj.length; i++)
    {
        obj[i] = obj[i].split(" ")
    }
    points = []
    for(i = 0; i < obj.length; i++)
    {
        switch(obj[i][0])
        {
            case 'v':points.push(new point(obj[i][1], obj[i][2], obj[i][3]));break;
        }
    }
    thing = function(points)
    {
        this.points = points
    }
    return(new thing(points))
}


async function getFile(url)
{
    let data = await fetch(url)
    .then(response => response.text())
    return data
}