let rand = (min, max) => {
    return (Math.random() * (max - min) + min)
}
let vari = () => {
    return rand(-1, 1)
}

let get_config = async (path) => {
    return await fetch(path).then(data => data.json())
}