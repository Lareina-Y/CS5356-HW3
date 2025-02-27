document.getElementById("refresh-button").addEventListener("click", fetchQuote);

function fetchQuote() {
    fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => response.json())
        .then(data => {
            document.getElementById('quote').innerHTML = `"${data} - Ron Swanson"`;
        })
        .catch(error => console.error("Error fetching quote:", error));
}

// Fetch a quote on page load
fetchQuote();