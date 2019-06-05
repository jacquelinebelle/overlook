import domUpdates from './domUpdates';

class Customer {
  constructor(date, customerData) {
    this.date = date;
    this.customerData = customerData;
  }

  findCustomer(input) {
    let foundCustomer = this.customerData.users.find(user => user.name.toLowerCase().includes(input.toLowerCase()));
    domUpdates.selectCustomer(foundCustomer);
    domUpdates.displayCustomerSearchResults(foundCustomer);
    return foundCustomer;
  }

  createCustomer(name) {
    const newId = this.customerData.users.map(user => user.id).pop() + 1;
    const newCustomer = { id: newId, name: name };
    this.customerData.users.push(newCustomer);
    domUpdates.selectCustomer(newCustomer);
    return newCustomer;
  }
}

export default Customer;