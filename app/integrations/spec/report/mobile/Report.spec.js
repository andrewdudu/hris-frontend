const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

// only mobile
describe.only('Report Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/report', {
			waitUntil: 'networkidle'
		});
	});

	test('should get reports well', async () => {
		await page.waitForTimeout(2000);
		network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		expect(image).toMatchImageSnapshot();
	});
});
