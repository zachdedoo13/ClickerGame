/* script.js
* elements */
const startButton = document.querySelector('.startButton');
const startButtonText = document.querySelector('.startButton p');

const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');

const beanStorageText = document.querySelector('.basicStorage p');

/* variables */
let beanCounter = 0;
let cash = 0;
let autoBeanBirtherType1 = 0;

startButton.addEventListener('click', () => {
    beanCounter += 1;
    if (beanCounter === 10) {
        cash += beanCounter;
        beanCounter = 0;
    }
    startButtonText.textContent = cash + '$';
    beanStorageText.textContent = "you have " + beanCounter + " beans in storage";
    console.log(beanCounter)
});

button1.addEventListener('click', () => {
    autoBeanBirtherType1 += 1;
    button1.textContent = autoBeanBirtherType1;
    console.log(autoBeanBirtherType1);
});
