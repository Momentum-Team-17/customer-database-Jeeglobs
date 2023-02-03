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
    // function that is called in the loop above

    let cardElement = document.createElement('div');
    cardElement.classList.add('customer-card');
    // create cardElement<div>; add class .customer-card to cardElement<div>
    container.appendChild(cardElement);
    // nest cardElement<div> inside container<section>

    let thumbElement = document.createElement('img');
    thumbElement.classList.add('thumbnail');
    thumbElement.src = individual.picture.thumbnail;
    // create thumbElement<img>; add class .thumbnail to thumbElement<img>; add src to thumbnail<img>
    cardElement.appendChild(thumbElement);
    // nest thumbElement<img> inside cardElement<div>

    let nameElement = document.createElement('h2');
    nameElement.classList.add('full-name');
    // create nameElement<h2>; add class .full-name to nameElement<h2>
    let nameText = document.createTextNode(`${individual.name.title} ${individual.name.first} ${individual.name.last}`);
    nameElement.appendChild(nameText);
    // create textNode for nameElement<h2>; put textNode inside nameElement<h2>
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
}