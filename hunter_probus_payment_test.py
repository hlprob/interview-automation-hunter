import unittest
import org.openqa.selenium.support.ui.Select
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from time import sleep

class CreditCardPaymentTest(unittest.TestCase):

    ## Starting Chrome browser instance
    def setUp(self):
        self.driver = webdriver.Chrome()

    ## Payment form data population
    ## If I was writing multiple tests might have included a separate page.py file for defining elements variables to shorten up the 'test'.py file
    def test_cc_payment_submission(self):
        driver = self.driver
        driver.get("https://staging.autobooks.co/pay/autobook-s")
        self.assertIn("Autobooks", driver.title)
        elem = driver.find_element_by_id("first-name")
        elem.send_keys("Sam")
        elem = driver.find_element_by_id("last-name")
        elem.send_keys("Jones")
        elem = driver.find_element_by_id("description")
        elem.send_keys("testing description")
        elem = driver.find_element_by_id("payment-amount")
        elem.send_keys("10")
        driver.find_element_by_id("payment-schedule-type-select").click()
        elem.selectByVisibleText("One-time payment")
        elem = driver.find_element_by_id("payment-card-name")
        elem.send_keys("Sam Jones")
        elem = driver.find_element_by_id("payment-card-number")
        elem.send_keys("5112000100000003")
        elem = driver.find_element_by_id("payment-card-exp-month")
        elem.send_keys("12")
        elem = driver.find_element_by_id("payment-card-exp-year")
        elem.send_keys("2022")
        elem = driver.find_element_by_id("payment-card-ccv")
        elem.send_keys("111")
        elem = driver.find_element_by_id("payment-card-postal-code")
        elem.send_keys("11222")
        ## Agree to terms and conditions
        ## Noticed a 'data-testid' in dev tools for this button, which I'm sure could be used in a test, I'm just not sure how here
        driver.find_element_by_id("terms-conditions-accept").click()
        ## Submit Payment
        ## Noticed a 'data-testid' in dev tools for this button, which I'm sure could be used in a test, I'm just not sure how here
        driver.find_element_by_id("submit").click()
        ## Sleep so submission can process - Could wait until element is clickable/visible again instead of using sleep
        sleep(5)
        ## Check page that submission was not declined - test fails if declined
        ## Noticed a 'data-testid' in dev tools for this button, which I'm sure could be used in a test, I'm just not sure how here
        self.assertNotIn("DECLINE", driver.find_element_by_class_name("MuiTypography-root jss83 MuiTypography-body1"), "Error - Payment Declined")


    ## Close browser window
    def tearDown(self):
        self.driver.close()
