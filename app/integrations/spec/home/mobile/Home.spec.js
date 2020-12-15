const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

// only mobile
describe.only('Home Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
	});

	beforeEach(async () => {
		await page.goto('http://localhost:8080/', {
			waitUntil: 'networkidle'
		});

		await page.waitForSelector('#app > .v-application--wrap > .v-main > .v-main__wrap > div')
	});

	test('should clock in and clock out well', async () => {
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.click('#app > .v-application--wrap > .v-main > .v-main__wrap > div');

		await page.waitForSelector('.col-12 > .clock > .row > .col-12 > .v-btn');
		await page.click('.col-12 > .clock > .row > .col-12 > .v-btn');
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text');
		page.on('filechooser', async (filechooser) => {
			await filechooser.setFiles('integrations/assets/image.png');
		});
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text');
		await page.waitForTimeout(1000);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.waitForSelector('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await page.waitForTimeout(2000);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});

	test('should clock out well', async () => {

		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);

		await page.click('#app > .v-application--wrap > .v-main > .v-main__wrap > div');

		await page.waitForSelector('.col-12 > .clock > .row > .col-12 > .v-btn');
		await page.click('.col-12 > .clock > .row > .col-12 > .v-btn');
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);

		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text');
		page.on('filechooser', async (filechooser) => {
			await filechooser.setFiles('integrations/assets/image.png');
		});
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text');
		await page.waitForTimeout(1000);

		await page.waitForSelector('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await page.waitForTimeout(2000);

		await page.waitForSelector('.clock > .row > .col-12 > .white--text > .v-btn__content');
		await page.click('.clock > .row > .col-12 > .white--text > .v-btn__content');
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.waitForSelector('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	})
});
