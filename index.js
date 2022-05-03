let currentCount = 0;
document.getElementById("countPeople").innerText = currentCount;
let count = () => {
    currentCount = parseInt(document.getElementById("countPeople").innerText) + 1;
    document.getElementById("countPeople").innerText = currentCount;
}
let reset = () => {
    document.getElementById("countPeople").innerText = 0;
}