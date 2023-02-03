console.log('main.js linked');

let container = document.querySelector('#customer-container');
// grab section element that will contain customer cards

for (let customer of customers) {
    buildCustomerHtml(customer);
}
// loop through the array of customers
// WHAT IS BUILDCUSTOMERHTML?
// APPLIED FROM CLASS EXAMPLE

// WORKING OFF OF CLASS EXAMPLE BELOW

function buildCustomerHtml(individual) {
    // console.log(customer.name);
    // if i don't comment out line above (consol.log...) i get an error
    // WHERE DID 'INDIVIDUAL' COME FROM?

    let cardElement = document.createElement('div');
    // create a div
    cardElement.classList.add('customer-card');
    // add a class to the div

    // CREATE IMG HERE?
    let thumbElement = document.createElement('img');
    // create img
    thumbElement.classList.add('thumbnail');
    // add a class to the img

    let nameElement = document.createElement('h2');
    // create h2
    nameElement.classList.add('full-name');
    // add a class to h2
}