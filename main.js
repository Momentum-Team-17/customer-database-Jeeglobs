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
// APPLIED FROM CLASS EXAMPLE

// WORKING OFF OF CLASS EXAMPLE BELOW

function buildCustomerHtml(individual) {
    // console.log(customer.name);
    // if i don't comment out line above (consol.log...) i get an error

    let cardElement = document.createElement('div');
    cardElement.classList.add('customer-card');
    // create div and add a class
    container.appendChild(cardElement);
    // put cardElement<div> inside container<section>

    let thumbElement = document.createElement('img');
    thumbElement.classList.add('thumbnail');
    // create img and add a class
    cardElement.appendChild(thumbElement);
    // put thumbElement<img> inside cardElement<div>
    // NEED TO ADD SRC TO IMG

    let nameElement = document.createElement('h2');
    nameElement.classList.add('full-name');
    // create h2 and add a class
    let text = document.createTextNode(`${individual.name.title} ${individual.name.first} ${individual.name.last}`);
    // create a textNode for the name
    nameElement.appendChild(text);
    // put full-name textNode inside nameElement<h2>
    cardElement.appendChild(nameElement);
}