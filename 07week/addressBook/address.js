let arrOfPeople;
let posts;
window.onload = function() {
    getPosts()

}
const getPosts = () => {
    fetch('https://www.randomuser.me/api/?results=10')
    .then(res => res.json())
    .then((posts) => {
        arrOfPeople = posts.results;
        // console.log(arrOfPeople);
    })
}

const listPeople = () => {
    const listElement = document.getElementById('names');
    arrOfPeople.map(person => {
        // const passPerson = person;
        const li = document.createElement("li");
        const button = document.createElement("button");
        const picture = document.createElement("img");
        const thumb = person.picture.thumbnail;
        // console.log(thumb);
        picture.src = thumb;
        button.innerHTML = "Show Info";
        button.addEventListener('click', function() {
            showInfo(person);
        });
        li.appendChild(button);
        li.appendChild(picture);
        li.appendChild(document.createTextNode(`${person.name.first} ${person.name.last}`));
        listElement.append(li);
    });
}

function showInfo(person) {
    console.log("CLICK")
    console.log(person);
    let infoList = document.getElementById("info");
    infoList.innerText = `${person.name.first} ${person.name.last}
    Location: ${person.location.city}, ${person.location.state}
    DOB: ${person.dob.date}`;
    // const makeList = document.getElementById("book");
    // const infoItem = document.getElementById("book");
    // infoItem.appendChild(document.createTextNode(`${person.name.first}
    // ${person.name.last}`));
    // infoItem.appendChild(document.createTextNode(`${person.name.last}`));
    // infoList.replaceWith(infoItem);
    // makeList.appendChild(document.createTextNode(`${person.name.first} ${person.name.last}`));
    // infoList.replaceChild(makeList);
}