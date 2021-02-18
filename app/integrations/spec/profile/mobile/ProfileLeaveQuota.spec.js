const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

// only mobile
describe.only('Profile Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/profile/report', {
			waitUntil: 'networkidle'
		});
	});

	test('should get profile well', async () => {
		await page.waitForTimeout(2000);
		await network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});
});
