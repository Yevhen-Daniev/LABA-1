const readlineSync = require('readline-sync'); 

let random1 = ${Math.floor(Math.random() * 10)}; 
let random2 = ${Math.floor(Math.random() * 10)};
let random3 = ${Math.floor(Math.random() * 10)};
let random4 = ${Math.floor(Math.random() * 10)}; 

while (random2 == random1) {
    random2 = ${Math.floor(Math.random() * 10)};
}
while (random3 == random2 || random3 == random1) {
    random3 = ${Math.floor(Math.random() * 10)};
}
while (random4 == random3 || random4 == random2 || random4 == random1) {
    random4 = ${Math.floor(Math.random() * 10)};
}

let prescribedNumber = random1 + random2 + random3 + random4;
console.log(`Загадане число - ${prescribedNumber}`);

let attemptToGuess = readlineSync.question('\nВам потрібно вгадати 4-значне число:\n\Спроба: ');

let attemptCounter = 1;

while (attemptToGuess != prescribedNumber) {
    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < attemptToGuess.length; i++) {
        if (attemptToGuess[i] == prescribedNumber[i]) {
            bulls++;
        } else {
            for (let j = 0; j < prescribedNumber.length; j++) { 
                if (attemptToGuess[i] == prescribedNumber[j]) {
                    cows++;
                }
            }
        }
    }

    console.log(`Бики: ${bulls}, Корови: ${cows}\n`);
    attemptToGuess = readlineSync.question('Спроба: ');
    
    attemptCounter++;
}

if (attemptCounter == 1) {
    console.log('Ви вгадали число! Ви зробили 1 спробу..');
    process.exit();
} 

console.log(`Ви вгадали число! Ви зробили ${attemptCounter} спроб.`);