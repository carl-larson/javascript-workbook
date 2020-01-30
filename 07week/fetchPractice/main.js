let arrayOfPosts;

// this function waits for the web page to be loaded, when it does it will run the code inside of 
//it which happen to be getPosts()
// window.onload = function() {
//     getPosts()

// }

// this function is going to make a fetch request to the url inside its parameter brackets (). Then 
//it will turn the response (data it's getting back), saved here as res. The res.json will not be saved 
//as posts and saved into the variable, arrayOfPosts
// const getPosts = () => {
//     fetch('http://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(posts => arrayOfPosts = posts)
// }

// this function logs the results in your browsers console
const consolePosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
    console.log(arrayOfPosts)
}
const fetchFive = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
        arrayOfPosts = [];
        for(let i = 0; i<5; i++){
            arrayOfPosts.push(posts[i]);
        }
        const allPosts = document.getElementById('all-posts')
        allPosts.innerHTML = "";
        arrayOfPosts.map((post, index) => {
        const li = document.createElement('li');
        const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`);
        li.appendChild(text);
        allPosts.append(li)})
    })
}
const fetchComments = () => {
    fetch('http://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(posts => {
        arrayOfPosts = [];
        for(let i = 0; i<10; i++){
            arrayOfPosts.push(posts[i]);
        }
        const allPosts = document.getElementById('all-posts')
        allPosts.innerHTML = "";
        arrayOfPosts.map((post, index) => {
        const li = document.createElement('li');
        const text = document.createTextNode(`#${index}, Title: ${post.name}:  ${post.body}`);
        li.appendChild(text);
        allPosts.append(li)})
    })
}
const fetchUsers = () => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(posts => {
        arrayOfPosts = [];
        for(let i = 0; i<10; i++){
            arrayOfPosts.push(posts[i]);
        }
        const allPosts = document.getElementById('all-posts')
        allPosts.innerHTML = "";
        arrayOfPosts.map((post, index) => {
        const li = document.createElement('li');
        const text = document.createTextNode(`#${index}, Name: ${post.name}
Username: ${post.username} Phone: ${post.phone}`);
        li.appendChild(text);
        allPosts.append(li)})
    })
}
// this function creates elements inside the all-posts ul, then appends text inside it with the posts 
//that were returned in the request.
const displayPost = () => {
    const allPosts = document.getElementById('all-posts')
    arrayOfPosts.map((post, index) => {
    const li = document.createElement('li');
    // console.log(li);

    const text = document.createTextNode(`#${index}, Title: ${post.title}:  ${post.body}, by user: ${post.userId}`);
    li.appendChild(text);
    allPosts.append(li)
    })
}

// Your job now is to follow the functions above and use them as templates to build the functionality the 
//buttons in the index.html file already have laid out in it. This way you can learn how to build fetch 
//requests and work with other apis and become a real developer!!
