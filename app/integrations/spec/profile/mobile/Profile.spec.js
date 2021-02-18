const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

// only mobile
describe.only('Profile Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/profile', {
			waitUntil: 'networkidle'
		});
	});

	test('should get profile well', async () => {
		await page.waitForTimeout(2000);
		await network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		await expect(image).toMatchImageSnapshot();

		await page.waitForSelector('.col-12 > .clock > .col-12 > .v-btn > .v-btn__content');
		await page.click('.col-12 > .clock > .col-12 > .v-btn > .v-btn__content');
		await page.waitForTimeout(2000);
		await network.waitForNetworkIdle(page);
		image = await page.screenshot();
		await expect(image).toMatchImageSnapshot();

	});
});
