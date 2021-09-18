// Variables
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const next = document.getElementById("next");
const loader = document.getElementById("loader");


// Api variables
const maxLen = 80;
const Apiurl = `https://api.quotable.io/random?maxLength=${maxLen}`;


//Fetching api
async function getApi() {
    try {
        const response = await fetch(Apiurl);
        const data = await response.json();
        loader.style.display = `none`;
        quote.innerText = data.content;
        author.innerText = data.author;
    } catch (error) {
        console.log("Something went wrong", error);
    }
}

// Get Api
getApi();

// On click next button
next.addEventListener("click", () => { getApi() });