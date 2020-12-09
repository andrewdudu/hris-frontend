const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

// only mobile
describe.only('Home Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/announcements', {
			waitUntil: 'networkidle'
		});

		await page.waitForSelector('#app > .v-application--wrap > .v-main > .v-main__wrap > div')
	});

	test('should get announcements well', async () => {
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});
});
