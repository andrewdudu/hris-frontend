const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = true, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Request Annual Leave Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
	});

	beforeEach(async () => {
		await page.goto('http://localhost:8080/request', {
			waitUntil: 'networkidle'
		});
	});

	test('should request annual leave well', async () => {
		await page.waitForSelector('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.v-input #date')
		await page.click('.v-input #date')
		await matchImage();

		await page.waitForSelector('tbody > tr:nth-child(3) > td:nth-child(5) > .v-btn > .v-btn__content')
		await page.click('tbody > tr:nth-child(3) > td:nth-child(5) > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('.v-dialog__content > .v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3)')
		await page.click('.v-dialog__content > .v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3)')
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await matchImage();
	});
});
