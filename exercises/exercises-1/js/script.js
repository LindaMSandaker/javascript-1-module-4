const firstName = document.querySelector("#firstName");
const errorMsgContainer = document.querySelector(".error__container")
const errorSvg = document.querySelector("#error-icon");
const errorSvgHTML = errorSvg.innerHTML;



firstName.addEventListener("keyup", logMsgLength);

function logMsgLength(event) {
    const inputValue = event.target.value.trim();
    const valueLength = inputValue.length;
    if (valueLength > 0) {
        errorMsgContainer.innerHTML = `<p style="color: #01b670">The input has a value</p>`;
    } else {
        errorMsgContainer.innerHTML = `<svg id="error-icon" style="display: block">error</svg> <p style="color: #e81212">The input doesn't have a value</p>`;
        errorSvgHTML.style.display = "block";
    }
}
