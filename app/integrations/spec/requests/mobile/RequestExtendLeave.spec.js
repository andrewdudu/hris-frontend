const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = false, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Request Extend Leave Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
	});

	beforeEach(async () => {
		await page.goto('http://localhost:8080/request/extend', {
			waitUntil: 'networkidle'
		});
	});

	test('should extend leave well', async () => {
		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await matchImage();
	})

	test('should not extend leave well', async () => {
		await page.waitForSelector('#textarea-text');
		await page.fill('#textarea-text', 'test');
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await matchImage();
	})
});
