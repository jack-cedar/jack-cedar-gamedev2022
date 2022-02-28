async function getFile(url)
{
    let data = await fetch(url)
    .then(response => response.text())
    return data
}