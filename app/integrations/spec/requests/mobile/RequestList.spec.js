const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

// only mobile
describe.only('Request List Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
	});

	beforeEach(async () => {
		await page.goto('http://localhost:8080/request', {
			waitUntil: 'networkidle'
		});
	});

	test('should load request list well', async () => {
		await page.waitForTimeout(2000);
		await network.waitForNetworkIdle(page);
		let image = await page.screenshot();
		await expect(image).toMatchImageSnapshot();
	});
});
