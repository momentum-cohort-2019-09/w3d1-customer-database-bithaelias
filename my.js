const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

function customersToHtml(customer) {
	return `
  <div class="customer">
    <img src="${customer.picture.large}">
    <div class="customer__name"><h2>${capitalize(customer.name.first)} ${capitalize(customer.name.last)}</h2></div>
    <div class="customer--email">${customer.email}</div>
    <div class="customer__location"><p>${customer.location.street}</p> 
    ${customer.location.city}, 
    ${customer.location.state} 
    ${customer.location.postcode}</div><div class="customer__dob">DOB: ${moment(customer.dob).format('MMM D, YYYY')}</div>
    <div class="customer__registered">Customer since ${moment(customer.registered).format('MMM D, YYYY')}</div>
    </div>
  `;
}

document.querySelector('#customers').innerHTML = customers.map(customersToHtml).join('\n');
