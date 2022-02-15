function alert(alertType = "success", message = "") {
    return `<div class="${alertType}">${message}</div>`;
}
