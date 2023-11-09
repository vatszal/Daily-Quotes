//quote
const quoteText = document.getElementById("quote");
const Url = "https://api.kanishkrawatt.tech/quotes";


fetch(Url)
    .then((response) => response.json())
    .then((data) => {
        const quote = data.Quote;
        const author = data.Author;
        quoteText.innerHTML = `"${quote}" - ${author}`;
    });


//clock
const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', ()=>{
    setInterval(showTime, 1000);
});

const showTime= ()=>{
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();

    hr = hr<10 ? `0${hr}` : hr;
    min = min<10 ? `0${min}` : min;
    secs = secs<10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${min} : ${secs}`;

    timeformat.innerHTML = hr>12 ? "PM" : "AM";
}
let button =document.getElementById("btn");
button.addEventListener("mouseover",themeshow);
function themeshow(){
    document.getElementById("theme").style.visibility="visible";
}
