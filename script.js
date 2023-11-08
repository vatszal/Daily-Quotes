const quoteText = document.getElementById("quote");
const Url = "https://api.kanishkrawatt.tech/quotes";


fetch(Url)
    .then((response) => response.json())
    .then((data) => {
        const quote = data.Quote;
        const author = data.Author;
        quoteText.innerHTML = `"${quote}" - ${author}`;
    });




