'use strict';

(function() {
  var Application = function() {
    var app = this;
	
	 app.initLandingPage = function() {
	  return new LandingPage();
    };
 
    var LandingPage = function() {
      var landingPage = this;
	  var playButton = element(by.xpath("//button[text()='Play Now']"));
	  var search = element(by.xpath("//i[@class='fa fa-search']"))
	  var searchBox = element(by.xpath("//div[@class='search-input__input-wrapper']/input"));
	  var loginBoxHeader = element(by.xpath("//h5[text()='Login']"));
	  
      landingPage.search = function(gameName) {
		waitForElement(search);
        search.click();
		waitForElement(searchBox);
		searchBox.sendKeys(gameName);
		return new LandingPage()
      };
	   landingPage.selectMore = function(gameName) {
		var gameTile = "//div/img[@alt='" + gameName + "']";
		browser.driver.sleep(4000);
		browser.actions().mouseMove(element(by.xpath(gameTile))).perform();
        browser.driver.sleep(2000);
		var moreButton = element(by.xpath("//img[@alt='" + gameName + "']//ancestor::div[@class='tile vegas-tile tile--active tile--expandable']/div[@class='tile__content']//button[contains(@class,'o-btn--more')]"));
		waitForElement(moreButton);
		moreButton.click();
		return new LandingPage()
      };
		landingPage.pressPlayButton = function() {
		waitForElement(playButton);
		playButton.click();
		browser.driver.sleep(2000);
		expect(loginBoxHeader.getText()).toEqual("Login");
		};
	  
    };
  };

  module.exports = function() {
    return new Application();
  };
}());

function waitForElement(element) {
		var until = protractor.ExpectedConditions;
		browser.wait(until.presenceOf(element), 9000, 'Element taking too long to appear in the DOM');
}