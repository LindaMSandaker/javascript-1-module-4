const randomUserUrl = "https://randomuser.me/api/";
const selectWrapperDiv = document.querySelector(".wrapper");

fetch(randomUserUrl)
    .then((response) => {
     return response.json();
    })
    .then((jsonData) => {
        console.log(jsonData.results);
        const getRandomUser = jsonData.results;
        for(let i = 0; i < getRandomUser.length; i++) {
            const firstName = getRandomUser[i].name.first;
            const lastName = getRandomUser[i].name.last;
            const personImg = getRandomUser[i].picture.large;
            selectWrapperDiv.innerHTML += `
              <h1> ${firstName} ${lastName}</h1>
              <img 
                src="${personImg}" 
                title="the name of the person is ${firstName}" 
                alt="the name of the person is ${firstName}" 
              />
              `;
        }
    })
    .catch((error) => {
    console.log(error);
    selectWrapperDiv.innerHTML += `
     <span>Sorry, some error has occurred..</span> `;
    })