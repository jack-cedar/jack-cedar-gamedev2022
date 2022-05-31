let init = async () => {
    await init_weapons("weapons.json")
    await init_player()
}
let init_weapons = async (file) => {
    await get_config(game.config_dir+file).then ( weapons => { 
        weapons.forEach(weapon => {
                Object.assign(new Weapon, weapon)
            });  
        }
    )
}
let init_player = async () => {
    game.player = new Player(new Vec2d(0, 0), new Vec2d(0, 0), 10, "Blue")
}