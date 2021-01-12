const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = false, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Add Announcement Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
	});

	beforeEach(async () => {
		await page.goto('http://localhost:8080/add-announcement', {
			waitUntil: 'networkidle'
		});
	});

	test('should add announcement well', async () => {
		await page.reload();
		await page.waitForSelector('.v-input #title');
		await page.fill('.v-input #title', 'Test success');
		await matchImage();

		await page.waitForSelector('.v-input #notes');
		await page.fill('.v-input #notes', 'Test');
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await matchImage();
	});

	test('should not add announcement well', async () => {
		await page.reload();
		await page.waitForSelector('.v-input #title');
		await page.fill('.v-input #title', 'Test');
		await matchImage();

		await page.waitForSelector('.v-input #notes');
		await page.fill('.v-input #notes', 'Test');
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content');
		await matchImage();
	});
});
