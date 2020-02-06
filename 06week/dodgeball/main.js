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

class Player {
    constructor(canThrow, dodge, paid, healthy, experience, id, name, age, skill, place){
        this.canThrowBall = canThrow;
        this.canDodgeBall= dodge,
        this.hasPaid= paid,
        this.isHealthy= healthy,
        this.yearsExperience= experience
        this.id = id;
        this.name = name;
        this.age = age;
        this.skillSet = skill;
        this.placeBorn = place;
    }
    onTeam(team){
        // let person = this;
        // assignTeam(team, person);
        if(team == 'blue'){
            let newMember = new TeamMember(this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, this.yearsExperience, this.id, this.name, this.age, this.skillSet, this.placeBorn, 'blue', 'hippos');
            blueTeam.push(newMember);
        } if(team== 'red') {
            let newMember = new TeamMember(this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, this.yearsExperience, this.id, this.name, this.age, this.skillSet, this.placeBorn, 'red', 'squirrels');
            redTeam.push(newMember);
        }
        displayPlayers(team);
        console.log("Assign Team ", team);
    }
}

class TeamMember extends Player{
    constructor(canThrow, dodge, paid, healthy, experience, id, name, age, skill, place, color, mascot){
        super(canThrow, dodge, paid, healthy, experience, id, name, age, skill, place)
        this.color = color;
        this.mascot = mascot;
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
            makePlayer(person);
            listElement.removeChild(li);
        } );
        li.appendChild(button);
        li.appendChild(document.createTextNode(person.name + " - " + person.skillSet));
        listElement.append(li);
    });
}

// From the button next to the person, calls the makePlayer() function:

function makePlayer(person) {
    // console.log(`li ${id} was clicked!`);
    console.log(person.name);
    const playerElement = document.getElementById('players');
    const redButton = document.createElement('button');
    const blueButton = document.createElement('button');
    const list = document.createElement('li');
    const name = person.name;
    
    redButton.innerHTML = 'Red Team';
    blueButton.innerHTML = 'Blue Team';
    redButton.addEventListener('click', function(){
        person.onTeam('red');
        playerElement.removeChild(list);
    });
    blueButton.addEventListener('click', function(){
        person.onTeam('blue');
        playerElement.removeChild(list);
    });
    list.appendChild(redButton);
    list.appendChild(blueButton);
    list.appendChild(document.createTextNode(name));
    playerElement.append(list);
    person = new Player (true, true, true, true, true, person.id, person.name, person.age, person.skill, person.place);
    listOfPlayers.push(person);
    // const list = document.getElementById('people');
    // const li = list.getElementById(id);
    // list.removeChild(li);
    
    // arrOfPeople.splice(id-2,1);
    
}
function assignTeam(team, person){
    console.log(team);
    let blueTeam = document.getElementById('blue');
    let redTeam = document.getElementById('red');
    const list = document.createElement('li');
    list.appendChild(document.createTextNode(person.name));
    if (team == 'red'){
        redTeam.append(list);
    } else {
        blueTeam.append(list);
    }
    // playerElement.
}
// let redMembership = 0;
function displayPlayers(team) {
    const showRed = document.getElementById('red');
    const showBlue = document.getElementById('blue');
    // let member = document.createElement('li');
    
    console.log(team);
    if(team == 'red') {showRed.innerHTML="";}
    if(team == 'blue') {showBlue.innerHTML="";}
    if(team == 'red'){
        
        for (i=0; i<redTeam.length; i++){
            console.log(i);
            let member = document.createElement('li');
            member.appendChild(document.createTextNode(redTeam[i].name));
            showRed.append(member);
        }
    } else {
        
        for (i=0; i<redTeam.length; i++){
            let member = document.createElement('li');
            member.appendChild(document.createTextNode(blueTeam[i].name));
            showBlue.append(member);
        }
    }
}