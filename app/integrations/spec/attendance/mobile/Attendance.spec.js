const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

// only mobile
describe.only('Attendance Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/attendance', {
			waitUntil: 'networkidle'
		});

		await page.reload();
	});

	test('should get attendances well', async () => {
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();

		await page.waitForSelector('#thismonth');
		await page.click('#thismonth');
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});
});
