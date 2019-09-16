/*
//
*/

import allCars from "./allCars.js"

const objectValues = ( outputElement ) => {
//    const outputElement = document.querySelector("#app")

    // Iterate the array of cars. Individual objects stored in `car`.
    allCars.forEach(car => {

        // Iterate all of the values of the current car
        for (const value of Object.values(car)) {
        outputElement.innerHTML += `<div>${value}</div>`
        }
    })

}

export default objectValues 
