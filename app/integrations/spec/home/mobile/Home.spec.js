const responsive = require('../../../utils/responsive')

// only mobile
describe.only('Home Page', () => {
	beforeAll(async () => {
		responsive.setMobile(page);
		await page.goto('http://localhost:8080/', {
			waitUntil: 'networkidle'
		});

		await page.waitForSelector('#app > .v-application--wrap > .v-main > .v-main__wrap > div')
	});

	test('should clock in well', async () => {
		// const navigationPromise = page.waitForNavigation()

		// await page.goto('http://localhost:8080/')

		// await page.setViewportSize({ width: 427, height: 820 })
		await page.waitForTimeout(2000);
		let image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.click('#app > .v-application--wrap > .v-main > .v-main__wrap > div')

		// await navigationPromise

		await page.waitForSelector('.col-12 > .clock > .row > .col-12 > .v-btn')
		await page.click('.col-12 > .clock > .row > .col-12 > .v-btn')
		await page.waitForTimeout(2000);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text');
		page.on('filechooser', async (filechooser) => {
			await filechooser.setFiles('integrations/assets/image.png');
		});
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text')
		// let text = page.$('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text', 'testfile');
		// await page.waitForSelector('.v-input #input-47');
		// await page.click('.v-input #input-47');
		// await page.setInputFiles('.v-input #input-47', 'integrations/assets/image.png');
		await page.waitForTimeout(2000);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		// await page.waitForTimeout(2000);
		// image = await page.screenshot();
		// expect(image).toMatchImageSnapshot();

		await page.waitForSelector('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content')
		await page.click('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content')
		await page.waitForTimeout(2000);
	});
});