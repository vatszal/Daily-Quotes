//quote
const quoteText = document.getElementById("quote");
const url = 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=ipworld.info';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e1341f35c7msha10adc079f9ca91p16c715jsn8549f844ca5f',
        'X-RapidAPI-Host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com'
    }
};

// Function to update the quote
function updateQuote() {
    fetch(url, options)
        .then((response) => response.json())
        .then((data) => {
            const quote = data.text;
            const author = data.author;
            quoteText.innerHTML = `"${quote}" - ${author}`;

            localStorage.setItem('quote', JSON.stringify({ quote, author }));
        })
        .catch(error => console.error('Error fetching quote:', error));
}

const storedQuote = localStorage.getItem('quote');

if (storedQuote) {
    const { quote, author } = JSON.parse(storedQuote);
    quoteText.innerHTML = `"${quote}" - ${author}`;
} else {
    // If there's no stored quote, fetch a new one and store it
    updateQuote();
}

// Set up a setInterval to update the quote every 24 hours (in milliseconds)
setInterval(updateQuote, 24 * 60 * 60 * 1000);



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
