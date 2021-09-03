let descriptors = [
    "programmer",
    "human",
    "nerd",
    "film buff",
    "gamer",
    "football fan",
    "boxing fan",
    "mancunian",
]

function randDesc() {
    i = Math.floor(Math.random() * descriptors.length)
    desc = descriptors[i]
    document.getElementById("change").innerHTML = desc
}

