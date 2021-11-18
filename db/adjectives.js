module.exports = {
    evil() {
        const evilstuff = ["demonic", "vile", "evil", "merciless", "greedy", "ambitious", "giant", "mecha"]

        return getRandom(evilstuff)
    }
}
function getRandom(a) {
    return a[Math.floor(Math.random() * a.length)]
}