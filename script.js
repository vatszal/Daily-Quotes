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

document.querySelector("#light").addEventListener('click', () => {
    document.body.classList.remove("forest", "ocean", "flower");
    document.body.classList.add('light');
    document.body.style.backgroundImage = "url('')";
})

document.querySelector("#forest").addEventListener('click', () => {
    document.body.classList.remove("flower", "light", "ocean");
    document.body.classList.add('forest');
    document.body.style.backgroundImage = "url('')";

})

document.querySelector("#ocean").addEventListener('click', () => {
    document.body.classList.remove("forest", "flower", "light");
    document.body.classList.add('ocean');
    document.body.style.backgroundImage = "url('')";
})

document.querySelector("#flower").addEventListener('click', () => {
    document.body.classList.remove("light", "ocean", "forest");
    document.body.classList.add('flower');
    document.body.style.backgroundImage = "url('')";
})

document.querySelector("#dark").addEventListener('click', () => {
    document.body.classList.remove("forest","light","ocean","flower");
    document.body.style.backgroundImage = "url('images/black.jpg')";

})