var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase()
};

function setBestCustomer() {
   bestCustomer = 'not bob';
}
//setBestCustomer();

//console.log(bestCustomer);

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// console.log(bestCustomer);

const leastFavoriteCustomer = 'Ted';

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'Tim'
  return leastFavoriteCustomer
}

changeLeastFavoriteCustomer();

console.log(leastFavoriteCustomer);
