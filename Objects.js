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

// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.

const drankPosion = () => {
    party[1].hitpoints += 20
    return party[1].belongings.splice(1,1)
}

drankPosion()

// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings

const stolenBread = () => {
    party[0].belongings.splice(1, 1)
    return party[1].belongings.push('bread')
}

stolenBread()

// Prompt 6: Joline got upset and left the party. Take her out of the array. (use the name of the leaving member as a parameter)
 
const memberleft = str => {
    let member = str.toLowerCase()
    let arr = party.map(item => item.name.toLowerCase())
    let index = arr.indexOf(member)
    arr.forEach(i => { i === member ? party.splice(index, 1) : null })
    return party

}

 memberleft("joline")


// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)

const addNewMember = (member) => {
    return party.push({name : member})
}

addNewMember("Jody")



// Prompt 10: Timothy???s sword has gotten old. Change it to ???Rusty Sword" 

function updateThings() {
    return party[1].belongings[0]= "rusty sword"
}
updateThings()

// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)
// divide the gold by the number of people in the party
// iterate over each member and create a new key called gold
// set the new key equal to gold/number of members 


const addGold = num => {
    let piece = num/4
    return party.forEach(i=>{
        i.gold = piece
    } )
}

addGold(200)

// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear

const updateFriend = () => {
    party[1].companion.type = "Bear"
    party[1].gold -= 10
    return party
}

updateFriend()

// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.


const setLeader = str =>{
    party.forEach(item => item.name === str ? item.TeadLead = true : item.TeamLead = false)
    
}

setLeader('Timothy')

console.log(party)

// Need to complete 6  update after comopeting 6 9 11