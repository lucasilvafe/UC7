const btnDarkMode = document.getElementById('dark');

btnDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

const fonteMaior = document.getElementById('maior');
fonteMaior.addEventListener('click', () => {
    document.body.toggle('maior')
})

