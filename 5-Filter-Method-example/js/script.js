// Filter method Example

// Example 1 Filter Method with Static Data
// Import data from the teams array

import teams from "./data/teams.js";
// console.log(teams);

// select the team-container and search by class.
const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");

// assign the teams to data to a variable
let teamsDataArray = teams;

// loop the array and inject data to the DOM teamContainer
// wrap the for loop in a function to use it

function getTeamsData(someArr) {
    teamContainer.innerHTML = ""; // to clear the teamContainer
    for(let i = 0; i < someArr.length; i++) {
        teamContainer.innerHTML += `<div class="team"><h3>${someArr[i].full_name}</h3></div>`;
    }
}
getTeamsData(teamsDataArray);

// I want to detect than I wrote text inside the input

search.onkeyup = function(event) {
    // console.log(event);
    // get search value or search keyword the user entered
    // console.log(event.target.value);
    const searchTargetValue = event.target.value.trim().toLowerCase();
    // console.log('searchTargetValue', searchTargetValue);
    /*{
        id: 2,
            abbreviation: "BOS",
        city: "Boston",
        conference: "East",
        division: "Atlantic",
        full_name: "Boston Celtics",
        name: "Celtics"
    },*/

    const filteredTeamsArray = teamsDataArray.filter((team) => {
        // check it any of the full_name property starts with searchTargetValue
        if(team.full_name.toLowerCase().startsWith(searchTargetValue)) {
            return true;
        }
    });
    console.log(filteredTeamsArray);
    // assign the new filtered array to old array
    // teamsDataArray = filteredTeamsArray;
    // console.log('teamsDataArray', teamsDataArray);
    getTeamsData(filteredTeamsArray);
}