const rollButton = document.querySelector('.rollbutton');
const userInput = document.querySelector('#user-input');
const total = document.querySelector('.total');
const showRolls = document.querySelector('.show-rolls');
const rollOrder = document.querySelector('.order-rolls');
const reset = document.querySelector('.reset');

let dieRolls = [];
let sumDice = 0


rollButton.addEventListener('click', function () {
    console.log('yep');
    
    for (let counter = 0; counter < userInput.value.trim(); counter += 1){
        
        let newRoll = Math.floor(Math.random() * 6 ) + 1;
        dieRolls.push(newRoll);
        sumDice += newRoll;
        total.innerHTML = sumDice;
    }
    console.log(sumDice);
    console.log(dieRolls);
    
})


showRolls.addEventListener('click', function () {
    console.log(dieRolls);
    let counter = 0
    while (counter < dieRolls.length) {
    const newDiceString = '<li class="order-rolls">' + dieRolls[counter] + '</li>';
    rollOrder.innerHTML += newDiceString;
    counter += 1;
    

}})

reset.addEventListener('click', function () {
    console.log('reset');
    total.innerHTML = " ";
    rollOrder.innerHTML = " ";
    dieRolls = [ ];
})
