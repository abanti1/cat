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