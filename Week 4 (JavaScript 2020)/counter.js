let number = 0;
function count() {
    number++;
    document.querySelector("h3").innerHTML = number;

    if (number % 10 === 0) {
        alert(`You have reached ${number} clicks, restarting!`)
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("button").onclick = count;
});