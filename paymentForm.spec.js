const { browser } = require('protractor');

describe('Payment Form', function () {
  describe('Credit Card Payment', function () {
    it('should submit a payment successfully', async function () {
    await browser.get('https://staging.autobooks.co/pay/autobooks--ephrata-national-bank');
    // await expect(element(by.cssContainingText("*", "Make a contributon to Northeast Bank")).isPresent()).toBeTruthy("Payment header incorrect or not found")
      // TODO: implement your test here
    });
  });
  
  describe('ACH Payment', function () { 
    it('should submit a payment successfully', async function () {
        await browser.get('https://staging.autobooks.co/pay/autobooks--ephrata-national-bank');
          // TODO: implement your test here
    });
  });
});