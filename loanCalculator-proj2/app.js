// Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e) {

    document.getElementById('results').style.display = 'none';
    document.getElementById('loading').style.display = 'block';

    setTimeout(calcResults, 2000);
    e.preventDefault();
});

function calcResults() {
  console.log('calculating...');
  // UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const monthly = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const interestResult = parseFloat(interest.value) / 100 / 12;
  const paymentResults = parseFloat(years.value) * 12;

  // calculate monthly payment
  const x = Math.pow(1 + interestResult, paymentResults);
  const monthlyPay = (principal*x*interestResult)/(x-1);

  if(isFinite(monthlyPay)) {
    monthly.value = monthlyPay.toFixed(2);
    totalPayment.value = (monthlyPay*paymentResults).toFixed(2);
    totalInterest.value = ((monthlyPay * paymentResults) - principal).toFixed(2);

    document.getElementById('loading').style.display = 'none';

  } else {
    document.getElementById('loading').style.display = 'none';
    showError('Check yo numbas?!');
  }
}

function showError(error) {

  const divError = document.createElement('div');
  const card = document.querySelector('.card');
  const heading = document.querySelector('h1');

  divError.className = 'alert alert-danger';

  divError.appendChild(document.createTextNode(error))

  card.insertBefore(divError, heading);

  setTimeout(function() {
    card.removeChild(divError);

  }, 3000);
}
