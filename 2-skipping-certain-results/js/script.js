// 1.
// Sometimes you will want to ignore certain
// objects in an array. Perhaps they are missing
// specific properties, or the properties have useless values.

// We can do this using the >> continue << keyword inside a for loop.


// >> continue << causes the loop not to execute
// the code in its current iteration and jumps to the next iteration.


// something like the >> break << keyword


// continue cannot be used inside a >> forEach << function.

// break - exit the loop entirely.
// continue - skip a particular iteration of the for loop.


// skip parts we don't need from the API

// Example 1:


const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

        //TODO we will make a for loop here to loop on the results

        for(let i = 0; i < results.length; i++){
            console.log(results[i]);
            if(!results[i].name || !results[i].image) {
                continue;
            }
            resultsContainer.innerHTML += `
                <div class="card">
                <h4>${results[i].name}</h4>
                <img src="${results[i].image}" alt="${results[i].name}"/>
                </div>`;
        }

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = message("error", error);
    }
}

makeApiCall();


