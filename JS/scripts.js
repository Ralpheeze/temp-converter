// let celciusValue = document.querySelector("#celcius > input");
// let fahrenheitValue = document.querySelector("#fahrenheit > input");
// let kelvinValue = document.querySelector("#kelvin > input");
//Paschal casing
// let btn = document.querySelector(".button > button");

// function roundNumber(number) {
//     return Math.round(number * 100) / 100;
// }
// celciusValue.addEventListener('input', function() {
//     let celTemp = parseFloat(celciusValue.value);
//     let fahTemp = (celTemp * 1.8) + 32;
//     let kelTemp = celTemp + 237.15;
 
//     fahrenheitValue.value = roundNumber(fahTemp);
//     kelvinValue.value = roundNumber(kelTemp);
// }
// )

// fahrenheitValue.addEventListener('input', function() {
//     let fahTemp = parseFloat(fahrenheitValue.value);
//     let celTemp = (fahTemp - 32) + 1.8 ;
//     let kelTemp = celTemp + 237.15;
 
//     celciusValue.value = roundNumber(celTemp);
//     kelvinValue.value = roundNumber(kelTemp);
// }
// )

// kelvinValue.addEventListener('input', function() {
//     let kelTemp = parseFloat(kelvinValue.value);
//     let celTemp = kelTemp - 273.15;
//     let fahTemp = (celTemp * 1.8) + 32;
 
//     celciusValue.value = roundNumber(celTemp);
//     fahrenheitValue.value = roundNumber(fahTemp);
// }
// )

// btn.addEventListener('click', () => {
//     celciusValue.value = "";
//     fahrenheitValue.value= "";
//     kelvinValue.value="";
// })



// const celsiusInput = document.getElementById("celsiusInput");
// const fahrenheitInput = document.getElementById("fahrenheitInput");

    

const celciusValue = document.querySelector("#celcius > input");
const fahrenheitValue = document.querySelector("#fahrenheit > input");
const kelvinValue = document.querySelector("#kelvin > input");
const btn = document.querySelector(".button > button");

celciusValue.addEventListener("input", function () {
        const celciusTemp = parseFloat(celciusValue.value);
        if (!isNaN(celciusTemp)) {
            const fahrenheitTemp = (celciusTemp * 9/5) + 32;
            const kelvinTemp = celciusTemp + 237.15;
            fahrenheitValue.value = fahrenheitTemp.toFixed(2);
            kelvinValue.value = kelvinTemp.toFixed(0);
        } 
        else {
            fahrenheitValue.value = "";
        }
    });

fahrenheitValue.addEventListener("input", function () {
        const fahrenheitTemp = parseFloat(fahrenheitValue.value);
        if (!isNaN(fahrenheitTemp)) {
            const celciusTemp = (fahrenheitTemp * 9/5) + 32;
            const kelvinTemp = celciusTemp + 237.15;
            celciusValue.value = celciusTemp.toFixed(2);
            kelvinValue.value = kelvinTemp.toFixed(0);
        } 
        else {
            celciusValue.value = "";
        }
    });

kelvinValue.addEventListener("input", function () {
        const kelvinTemp = parseFloat(kelvinValue.value);
        if (!isNaN(kelvinTemp)) {
            let celciusTemp = kelvinTemp - 273.15;
            let fahrenheitTemp = (celciusTemp * 1.8) + 32;
            celciusValue.value = celciusTemp.toFixed(2);
            fahrenheitValue.value = fahrenheitTemp.toFixed(2);
        } 
        else {
            celciusValue.value = "";
            fahrenheitValue.value = "";
        }
    });

btn.addEventListener('click', () => {
    celciusValue.value = "";
    fahrenheitValue.value= "";
    kelvinValue.value="";
})
