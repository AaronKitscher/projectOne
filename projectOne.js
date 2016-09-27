/**
 * Created by Kluge2 on 9/26/16.
 * @author Kitscher, Aaron (akitscher@gmail.com)
 * @projectOne
 * @summary program for the River Falls Homes Construction Company
 */

"use strict";
const PROMPT = require('readline-sync'); //So we can read user input from the command line

let lotNumber, numberBedrooms, numberBathrooms, numberCarGarage, priceHome;
const BASE_PRICE = 50000;
const BEDROOM = 17000;
const BATHROOM = 12500;
const CAR_GARAGE = 6000;

function main() {
    setLotNumber();
    setNumberBedrooms();
    setNumberBathrooms();
    setNumberCarGarage();
    calculatePriceHome();
    printPriceHome();
        
    }

    main();

function setLotNumber() {
    lotNumber = Number(PROMPT.question(`\nPlease enter lot number:`));
}

function setNumberBedrooms() {
    numberBedrooms = Number(PROMPT.question(`\nPlease enter number bedrooms`));
}

function setNumberBathrooms() {
    numberBathrooms = Number(PROMPT.question(`\nPlease enter number bathrooms`));
}

function setNumberCarGarage() {
    numberCarGarage = Number(PROMPT.question(`\nPlease enter number car garage`));
}

function calculatePriceHome() {
    priceHome = BASE_PRICE + BEDROOM * numberBedrooms + BATHROOM * numberBathrooms + CAR_GARAGE * numberCarGarage;
}

function printPriceHome() {
    console.log(`Estimated price for home\$$` + priceHome);
}

/* The logic plan for Project one.
Intended to calculate and print home price.
 */