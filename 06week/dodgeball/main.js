const arrOfPeople = [
    {
        id: 2,
        name: "Charles Young",
        age: 55,
        skillSet: "welding",
        placeBorn: "Omaha, Nebraska"
    },
    {
        id: 3,
        name: "Judy Twilight",
        age: 35,
        skillSet: "fishing",
        placeBorn: "Louisville, Kentucky"
    },
    {
        id: 4,
        name: "Cynthia Doolittle",
        age: 20,
        skillSet: "tic tac toe",
        placeBorn: "Pawnee, Texas"
    },
    {
        id: 5,
        name: "John Willouby",
        age: 28,
        skillSet: "pipe fitting",
        placeBorn: "New York, New York"
    },
    {
        id: 6,
        name: "Stan Honest",
        age: 20,
        skillSet: "boom-a-rang throwing",
        placeBorn: "Perth, Australia"
    },
    {
        id: 7,
        name: "Mia Watu",
        age: 17,
        skillSet: "acrobatics",
        placeBorn: "Los Angeles, California"
    },
    {
        id: 8,
        name: "Walter Cole",
        age: 32,
        skillSet: "jump rope",
        placeBorn: "New Orleans, Louisiana"
    },
]
const listOfPlayers = []
const blueTeam = []
const redTeam = []

// Create a new player class every time a person is moved 
//from person list to player list:

class player {
    constructor(){

    }
    onTeam(){

    }
}
// THe button from the base html file creates a list of people. The list
//items are the objects in the arrOfPeople array:

const listPeopleChoices = () => {
    const listElement = document.getElementById('people');
    arrOfPeople.map(person => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerHTML = "Make Player";
        button.addEventListener('click', function() {
            makePlayer(person.id);
            listElement.removeChild(li);
        } );
        li.appendChild(button);
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
        listElement.append(li);
    });
}

// From the button next to the person, calls the makePlayer() function:

const makePlayer = (id) => {
    // console.log(`li ${id} was clicked!`);
    // const playerElement = document.getElementById('players');
    // const list = document.getElementById('people');
    // const li = list.getElementById(id);
    // list.removeChild(li);
    
    // arrOfPeople.splice(id-2,1);
    
}