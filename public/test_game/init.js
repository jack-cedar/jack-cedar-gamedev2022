let init = async () => {
    await init_weapons("weapons.json")
    await init_player("player.json")
}
let init_weapons = async (file) => {
    await get_config(game.config_dir+file).then ( weapons => { 
        weapons.forEach(weapon => {
                game.weapon_list.push(Object.assign(new Weapon, weapon))
            });  
        }
    )
}
let init_player = async (file) => {
    await get_config(game.config_dir+file).then( player => {
        game.player = Object.assign(new Player, player)
        game.player.change_weapon(game.player.weapon)
    })
}