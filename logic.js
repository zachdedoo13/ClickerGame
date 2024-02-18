/* script.js
* elements */
const startButton = document.querySelector('.startButton');
const startButtonText = document.querySelector('.startButton p');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

const beanStorage = document.querySelector('.beanCounter');

/* variables */
let beanCounter = 0;
let autoBeanBirtherType1 = 0;

startButton.addEventListener('click', () => {
    beanCounter += 1;
    startButtonText.textContent = beanCounter + '$';
    console.log(beanCounter)
});

button1.addEventListener('click', () => {
    autoBeanBirtherType1 += 1;
    button1.textContent = autoBeanBirtherType1;
    console.log(autoBeanBirtherType1);
});