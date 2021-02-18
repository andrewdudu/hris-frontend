const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = true, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Calendar Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/calendar', {
			waitUntil: 'networkidle'
		});

		await page.reload();
	});

	test('should set holiday well', async () => {
		await page.waitForSelector('.announcements-card > .row > .col-12 > .v-btn > .v-btn__content')
		await page.click('.announcements-card > .row > .col-12 > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('#title-text');
		await page.fill('#title-text', 'Test');
		await matchImage();

		await page.waitForSelector('#textarea-text');
		await page.fill('#textarea-text', 'Test');
		await matchImage();

		await page.waitForSelector('.v-card__actions > .row > .col-12 > .white--text > .v-btn__content');
		await page.click('.v-card__actions > .row > .col-12 > .white--text > .v-btn__content');
		await matchImage();
	});

	test('should set holiday well 2', async () => {
		page.reload();
		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
		await matchImage();

		await page.waitForSelector('#january')
		await page.click('#january')
		await matchImage();

		await page.waitForSelector('.row:nth-child(3) > .attendances > .announcements-card > .row > .col-12 > .v-btn > .v-btn__content')
		await page.click('.row:nth-child(3) > .attendances > .announcements-card > .row > .col-12 > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('#title-text');
		await page.fill('#title-text', 'Test');
		await matchImage();

		await page.waitForSelector('#textarea-text');
		await page.fill('#textarea-text', 'Test');
		await matchImage();

		await page.waitForSelector('.v-card__actions > .row > .col-12 > .white--text > .v-btn__content')
		await page.click('.v-card__actions > .row > .col-12 > .white--text > .v-btn__content')
		await matchImage();
	});
});
