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
    updateQuote();
}
//24 hours
setInterval(updateQuote, 24 * 60 * 60 * 1000);



//clock
const time = document.getElementById('time');
const timeformat = document.getElementById('timeformat');

document.addEventListener('DOMContentLoaded', () => {
    setInterval(showTime, 1000);
});

const showTime = () => {
    let date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let secs = date.getSeconds();

    hr = hr < 10 ? `0${hr}` : hr;
    min = min < 10 ? `0${min}` : min;
    secs = secs < 10 ? `0${secs}` : secs;

    time.innerHTML = `${hr} : ${min} : ${secs}`;

    timeformat.innerHTML = hr > 12 ? "PM" : "AM";
}


//themes change
let arrow = document.getElementById("arrow");
let themes = document.getElementById("themes");

arrow.addEventListener("mouseover", show);
themes.addEventListener("mouseover", show);

function show() {
    themes.style.visibility = "visible";
}

arrow.addEventListener("mouseout", hide);
themes.addEventListener("mouseout", hide);

function hide() {
    themes.style.visibility = "hidden";
}

document.querySelector("#space").addEventListener('click', () => {
    document.body.classList.remove("aurora", "sunset", "bubblegum");
    document.body.classList.add('space');
    document.body.style.backgroundImage = "url('images/space.jpg')";
})

document.querySelector("#aurora").addEventListener('click', () => {
    document.body.classList.remove("bubblegum", "space", "sunset");
    document.body.classList.add('aurora');
    document.body.style.backgroundImage = "url('images/aurora.jpg')";

})

document.querySelector("#sunset").addEventListener('click', () => {
    document.body.classList.remove("aurora", "bubblegum", "space");
    document.body.classList.add('sunset');
    document.body.style.backgroundImage = "url('images/sunset.gif')";
})

document.querySelector("#bubblegum").addEventListener('click', () => {
    document.body.classList.remove("space", "sunset", "aurora");
    document.body.classList.add('bubblegum');
    document.body.style.backgroundImage = "url('images/bubblegum.jpg')";
})

document.querySelector("#dark").addEventListener('click', () => {
    document.body.classList.remove("aurora", "space", "sunset", "bubblegum");
    document.body.style.backgroundImage = "url('images/black.jpg')";

})