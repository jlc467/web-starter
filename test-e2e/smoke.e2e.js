module.exports = {
  'Smoketest'(browser) {
    browser
      .url(`http://localhost:5000/`)
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'where do we go from here...')
    browser
      .url('http://localhost:5000/food')
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Carnitas')
  },
  'Inputting food and clicking submit button adds food to food list'(browser) {
    browser
      .setValue("[data-test='add-food-input']", 'bbq pork')
      .pause(500)
      .click("[data-test='add-food-button']")
      .waitForElementVisible("[data-test='bbq pork']", 500)
      .assert.containsText("[data-test='bbq pork']", 'bbq pork')
  },
  'Clicking food removes from food list'(browser) {
    browser
      .click("[data-test='bbq pork']")
      .waitForElementNotPresent("[data-test='bbq pork']", 500)
  },
}