const button1 = document.getElementById('button1');
button1.addEventListener('click', customerData);

const output1 = document.getElementById('customer');

const button2 = document.getElementById('button2');
button2.addEventListener('click', customersData);

const output2 = document.getElementById('customers');

// Load single customer
function customerData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customer = JSON.parse(this.responseText);

      const result = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
        </ul>
      `;
      output1.innerHTML = result;
    }
  }

  xhr.send();
}

//load customers
function customersData() {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);

      let results = '';

      customers.forEach(item => {
        results += `
        <ul>
          <li>ID: ${item.id}</li>
          <li>Name: ${item.name}</li>
          <li>Company: ${item.company}</li>
        </ul>
        `;
      });
      output2.innerHTML = results;
    }

  }

  xhr.send();
}
