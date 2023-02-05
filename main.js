console.log('main.js linked');


// // EXAMPLE
// <section id="customer-container">

// <div class="customer-card">
//     <img class="thumbnail">
//     <h2 class="full-name"><h2>
//     <p class="email"></p>
//     <p class="street-address"></p>
//     <p class="city-state-zip"></p>
//     <p class="birthdate"></p>
//     <p class="date-registered"></p>
// </div> -->

// </section>


// grab <section id="customer-container"><section>
let container = document.querySelector('#customer-container');

// loop function buildCustomerHtml
for (let customer of customers) {
    buildCustomerHtml(customer);
}

// FUNCTION FOR CAPITALIZING NAMES
// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// function that is called in the loop above
function buildCustomerHtml(individual) {

    // cardElement === <div class="customer-card">
    let cardElement = document.createElement('div');
    cardElement.classList.add('customer-card');
    container.appendChild(cardElement);

    // thumbElement === <img class="thumbnail" src="(individual.picture.large")>
    let thumbElement = document.createElement('img');
    thumbElement.classList.add('thumbnail');
    thumbElement.src = individual.picture.large;
    cardElement.appendChild(thumbElement);

    // nameElement === <h2 class="full-name">(nameText)</h2>
    let nameElement = document.createElement('h2');
    nameElement.classList.add('full-name');
    let nameText = document.createTextNode(`${capitalizeFirstLetter(individual.name.first)} ${capitalizeFirstLetter(individual.name.last)}`);
    nameElement.appendChild(nameText);
    cardElement.appendChild(nameElement);

    // emailElement === <p class="email">(emailText)</p>
    let emailElement = document.createElement('p');
    emailElement.classList.add('email');
    let emailText = document.createTextNode(individual.email);
    emailElement.appendChild(emailText);
    cardElement.appendChild(emailElement);

    // streetElement === <p class="street-address">(streetText)</p>
    let streetElement = document.createElement('p');
    streetElement.classList.add('street-address');
    let streetText = document.createTextNode(`${individual.location.street.number} ${individual.location.street.name}`);
    streetElement.appendChild(streetText);
    cardElement.appendChild(streetElement);

    // cityStateElement === <p class="city-state-zip">(cityStateText)</p>
    let cityStateElement = document.createElement('p');
    cityStateElement.classList.add('city-state-zip');
    let cityStateText = document.createTextNode(`${individual.location.city}, ${nameToAbbr(individual.location.state)} ${individual.location.postcode}`);
    cityStateElement.appendChild(cityStateText);
    cardElement.appendChild(cityStateElement);

    // birthdateElement === <p class="birthdate">(birthdateText)</p>
    // moment.js used for dates--NEED TO FIX!
    let birthdateElement = document.createElement('p');
    birthdateElement.classList.add('birthdate');
    let birthdateText = document.createTextNode(`DOB: ${moment(individual.dob.date)}`);
    birthdateElement.appendChild(birthdateText);
    cardElement.appendChild(birthdateElement);

    // registeredElement === <p class="date-registered">(registeredText)</p>
    // moment.js used for dates--NEED TO FIX!
    let registeredElement = document.createElement('p');
    registeredElement.classList.add('date-registered');
    let registeredText = document.createTextNode(`Customer since: ${moment(individual.registered.date)}`);
    registeredElement.appendChild(registeredText);
    cardElement.appendChild(registeredElement);

    // USE PUSH/POP/SHIFT/ETC TO FIX DATES???
}