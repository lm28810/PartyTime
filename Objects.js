// Main Object 

let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]


// Prompt 1: double the hitpoints of everyone in the party

const doublePoints = () => {
    party.forEach(item => item.hitpoints *= 2)
}

doublePoints()

// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp

const timHit = () => {
    party[1].hitpoints -= 5
}

timHit()

// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it

const companionChanged = () => {
    party[2].companion.type = "jellyfish"
}

companionChanged()

console.log(party)
