'use strict'
require('dotenv').config()

window.onload = function(){

}


const consolePosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => arrayOfPosts = posts)
}