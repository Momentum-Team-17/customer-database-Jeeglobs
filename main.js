console.log('main.js linked');


// // EXAMPLE
// <section id="customer-container">

// <div class="customer-card">
//     <img class="thumbnail" src="" alt="">
//     <h2 class="full-name"><h2>
//     <p class="email"></p>
//     <p class="street-address"></p>
//     <p class="city-state-zip"></p>
//     <p class="birthdate"></p>
//     <p class="date-registered"></p>
// </div> -->

// </section>


let container = document.querySelector('#customer-container');
// grab section element that will contain customer cards

for (let customer of customers) {
    buildCustomerHtml(customer);
}
// loop through the array of customers

// FUNCTION FOR CAPITALIZING NAMES
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript

function buildCustomerHtml(individual) {
    // function that is called in the loop above

    let cardElement = document.createElement('div');
    cardElement.classList.add('customer-card');
    // create cardElement<div>; add class .customer-card to cardElement<div>
    container.appendChild(cardElement);
    // nest cardElement<div> inside container<section>

    let thumbElement = document.createElement('img');
    thumbElement.classList.add('thumbnail');
    thumbElement.src = individual.picture.large;
    // create thumbElement<img>; add class .thumbnail to thumbElement<img>; add src to thumbnail<img>
    cardElement.appendChild(thumbElement);
    // nest thumbElement<img> inside cardElement<div>

    let nameElement = document.createElement('h2');
    nameElement.classList.add('full-name');
    // create nameElement<h2>; add class .full-name to nameElement<h2>
    let nameText = document.createTextNode(`${capitalizeFirstLetter(individual.name.first)} ${capitalizeFirstLetter(individual.name.last)}`);
    // create textNode for nameElement<h2>; call function capitalizeFirstLetter in textNode
    nameElement.appendChild(nameText);
    // put textNode inside nameElement<h2>
    cardElement.appendChild(nameElement);
    // nest nameElement<h2> inside cardElement<div>

    let emailElement = document.createElement('p');
    emailElement.classList.add('email');
    // create emailElement<p>; add class .email to emailElement<p>
    let emailText = document.createTextNode(individual.email);
    emailElement.appendChild(emailText);
    // creat textNode for emailElement<p>; put textNode inside emailElement<p>
    cardElement.appendChild(emailElement);
    // nest emailElement<p> inside cardElement<div>

    let streetElement = document.createElement('p');
    streetElement.classList.add('street-address');
    // create streetElement<p>; add class .street-element to streetElement<p>
    let streetText = document.createTextNode(`${individual.location.street.number} ${individual.location.street.name}`);
    streetElement.appendChild(streetText);
    // create textNode for streetElement<p>; put textNode inside streetElement<p>
    cardElement.appendChild(streetElement);
    // nest streetElement<p> inside cardElement<div>

    let cityStateElement = document.createElement('p');
    cityStateElement.classList.add('city-state-zip');
    // create cityStateElement<p>; add class .city-state-zip to cityStateElement<p>
    let cityStateText = document.createTextNode(`${individual.location.city}, ${nameToAbbr(individual.location.state)} ${individual.location.postcode}`);
    // added comma; called nametoAbbr
    cityStateElement.appendChild(cityStateText);
    // create textNode for cityStateElement<p>; put textNode inside cityStateElement<p>
    cardElement.appendChild(cityStateElement);
    // nest cityStateElement<p> inside cardElement<div>

    let birthdateElement = document.createElement('p');
    birthdateElement.classList.add('birthdate');
    // create birthdateElement<p>; add class .birthdate to birthdateElement<p>
    let birthdateText = document.createTextNode(`DOB: ${individual.dob.date}`);
    birthdateElement.appendChild(birthdateText);
    // create textNode for birthdateElement<p>; put textNode inside birthdateElement<p>
    cardElement.appendChild(birthdateElement);
    // nest birthdateElement<p> inside cardElement<div>
    // !!! NEED TO USE MOMENT.JS HERE TO FORMAT DATES!!!
}