'use strict'
window.onload()


const consolePosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
    console.log(arrayOfPosts)
}