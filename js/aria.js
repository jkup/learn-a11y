// ARIA Challenge
var increment = document.querySelector('#inc')
var decrement = document.querySelector('#dec')
var counter = document.querySelector('#count')
var count = 0

increment.addEventListener('click', add)
decrement.addEventListener('click', substract)

function add() {
    count = count + 10;
    setCounter()
}

function substract() {
    
    if(count === 0) {
        alert('You need to add first')
    } else {
        count = count - 10;
        setCounter()
    }
}

function setCounter() {
    counter.innerHTML = count;
    setCounter()
}

setCounter()