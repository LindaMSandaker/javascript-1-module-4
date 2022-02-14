// CORS Missing Allow Origin fix with proxy server

const resultsContain = document.querySelector(".results");

const URL_API_elephant = "https://elephant-api.herokuapp.com/elephants";
// My proxy server
const proxy = "https://noroffcors.herokuapp.com/";

const corsFixUrl = proxy + URL_API_elephant;

async function makeApiCall(){
    try {
        const response = await fetch(corsFixUrl);
        // convert the response to be JSON data
        const elephantsData = await response.json();
        console.log(elephantsData);
        resultsContain.innerHTML = alert("success", "Yay, it worked!");
    } 
    catch(error) {
        console.log("Sorry, something went wrong", error);
        resultsContain.innerHTML = alert("error", error); 
    }
}

makeApiCall().then(); // put .then() to fix Promise returned from makeApiCall is ignored