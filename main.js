console.log('main.js.linked');

// grab section element that will contain customer cards
let container = document.querySelector('#customer-container');

// loop through the array of customers
for (let customer of customers) {
    buildCustomerHtml(customer);
}