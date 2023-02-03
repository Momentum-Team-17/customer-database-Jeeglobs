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


function buildCustomerHtml(individual) {

    let cardElement = document.createElement('div');
    cardElement.classList.add('customer-card');
    // create div; add class to div
    container.appendChild(cardElement);
    // nest cardElement<div> inside container<section>

    let thumbElement = document.createElement('img');
    thumbElement.classList.add('thumbnail');
    thumbElement.src = individual.picture.thumbnail;
    // create img; add class to img; add src to img
    cardElement.appendChild(thumbElement);
    // nest thumbElement<img> inside cardElement<div>

    let nameElement = document.createElement('h2');
    nameElement.classList.add('full-name');
    // create h2; add class to h2
    let text = document.createTextNode(`${individual.name.title} ${individual.name.first} ${individual.name.last}`);
    nameElement.appendChild(text);
    // create textNode for full-name; put full-name inside nameElement<h2>
    cardElement.appendChild(nameElement);
    // nest nameElement<h2> inside cardElement<div>
}