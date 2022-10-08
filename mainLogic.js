"use strict"
console.info("mainLogic.js Loaded!");

let blogArea = document.querySelector(".blog-container");
console.log(blogArea);

let businessArea = document.querySelector(".business-container");
console.log(businessArea);
let video_bg = document.querySelector("#video-bg");
console.log(video_bg);

let developmentArea = document.querySelector(".development-container");
console.log(developmentArea);


// Event Handlers

blogArea.addEventListener('click', () => {
    console.log("Blog Area clicked!");
});

businessArea.addEventListener('click', () => {
    console.log("Business Area clicked!");
});

developmentArea.addEventListener('click', () => {
    console.log("Development Area clicked!");
});