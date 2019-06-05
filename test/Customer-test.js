import chai from 'chai'
const expect = chai.expect;
import Customer from '../src/Customer';
import customerData from '../sampleData/customer';
import domUpdates from '../src/domUpdates';
import spies from 'chai-spies';
chai.use(spies);
chai.spy.on(domUpdates, ['displayCustomer', 'selectCustomer', 'displayCustomerSearchResults', 'displaySelectedCustomer'], () => true);

let mockDate = "27/08/2019";

describe('Customer', function() {
  let customer;
  beforeEach(function() {
    customer = new Customer(mockDate, customerData);
  });

  it('should have default properties', function() {
    expect(customer.date).to.equal(mockDate);
    expect(customer.customerData).to.equal(customerData);
  });

  it('should find a user based on input value', function() {
    expect(customer.findCustomer('Jake Jenkins')).to.deep.equal({id: 11, name: 'Jake Jenkins'});
  });

  it('should create a customer with a given name and id', function() {
    expect(customer.createCustomer('Killigrew')).to.deep.equal({id: 21, name: 'Killigrew'})
  });
})