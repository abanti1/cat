const cat = document.querySelector('.cat img');
const darkModeToggle = document.getElementById('toggle-switch');
const body = document.body;
const toggleSwitch = document.getElementById('toggle-switch');
const slider = document.querySelector('.slider');

cat.addEventListener('click', () => {
    cat.style.transform = 'translateY(-50px)';
    setTimeout(() => {
        cat.style.transform = 'translateY(0)';
    }, 500);
});

darkModeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
});
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        slider.style.left = '25px';
        toggleSwitch.parentNode.style.backgroundColor = '#ccc';
    } else {
        slider.style.left = '0';
        toggleSwitch.parentNode.style.backgroundColor = '#333';
    }
});

const showQuoteButton = document.getElementById('show-quote-button');
const hideQuoteButton = document.getElementById('hide-quote-button');
const quoteDisplay = document.getElementById('quote-display');

const quotes = [
    "The only way to do great work is to love what you do. -Steve Jobs",
    "In the middle of every difficulty lies opportunity. -Albert Einstein",
    "The best way to predict the future is to create it. -Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. -Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. -Franklin D. Roosevelt"
];

showQuoteButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = randomQuote;
    quoteDisplay.style.display = 'block';
    showQuoteButton.style.display = 'none';
    hideQuoteButton.style.display = 'block';
});

hideQuoteButton.addEventListener('click', () => {
    quoteDisplay.style.display = 'none';
    hideQuoteButton.style.display = 'none';
    showQuoteButton.style.display = 'block';
});

