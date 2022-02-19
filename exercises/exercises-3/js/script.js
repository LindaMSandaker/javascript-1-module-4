
const circleContainer = document.querySelector(".circle");
const circleActionBTN = document.getElementById("circleBTN");
const bgColor = localStorage.getItem("bgColor");


circleContainer.style.backgroundColor = bgColor;

circleActionBTN.addEventListener("click", function() {
   if(bgColor === "red") {
        localStorage.setItem("bgColor", "darkblue");
        circleContainer.style.backgroundColor = "darkblue";
        circleContainer.innerHTML = `<p style="color: powderblue">The color is now blue</p>`;
    } else {
        localStorage.setItem("bgColor", "red");
        circleContainer.style.backgroundColor = "red";
        circleContainer.innerHTML = `<p style="color: #f5b6b6">The color is now red</p>`;
    }
});

circleActionBTN.onclick = function () {
    console.log("Hey, you clicked again");
}

// localStorage

localStorage.setItem("name", "Linda");

const name = localStorage.getItem("name");

console.log("The name is: ", name);