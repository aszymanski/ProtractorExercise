var Application = require('./pageobjects.js');
describe('Search game', function () {
    it('should search desired game', function () {
		
		var application = new Application();
		
					
        browser.get('https://vegas.williamhill.com/en-gb/');
		browser.driver.manage().window().maximize();
		
		browser.ignoreSynchronization = true;
		browser.driver.sleep(4000);
		
		var application = new Application();

		var landingPage = application.initLandingPage();
		landingPage.search(browser.params.gameName)
				   .selectMore(browser.params.gameName)
				   .pressPlayButton();
	});

});