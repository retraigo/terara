const edible = ["tail", "hands", "legs", "fingers", "wings"]

module.exports = (creature) => {
    if(!["low", "lowest"].includes(creature.intelligence)) return [];
    let edibleParts = []
    edible.forEach(x => {
        if(creature.body_parts[x]) edibleParts.push(x)
    })
    return edibleParts;
}
