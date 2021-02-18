const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = true, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) await network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	await expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Request Sick With Medical Letter Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
	});

	beforeEach(async () => {
		await page.goto('http://localhost:8080/request', {
			waitUntil: 'networkidle'
		});
	});

	test('should request sick with medical letter well', async () => {
		await page.waitForSelector('.container > div:nth-child(4) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(4) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.v-input #date')
		await page.click('.v-input #date')
		await matchImage();

		await page.waitForSelector('tbody > tr:nth-child(4) > td:nth-child(3) > .v-btn > .v-btn__content')
		await page.click('tbody > tr:nth-child(4) > td:nth-child(3) > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('tbody > tr:nth-child(4) > td:nth-child(5) > .v-btn > .v-btn__content')
		await page.click('tbody > tr:nth-child(4) > td:nth-child(5) > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('.v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3) > .v-btn__content')
		await page.click('.v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3) > .v-btn__content')
		await matchImage();

		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text')
		await page.on('filechooser', async (filechooser) => {
			await filechooser.setFiles('integrations/assets/image.png');
		});
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text')
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await matchImage();
	});

	test('should not request sick with medical letter well', async () => {
		await page.reload();
		await page.waitForSelector('.container > div:nth-child(4) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(4) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.v-input #date')
		await page.click('.v-input #date')
		await matchImage();

		await page.waitForSelector('div > .v-date-picker-header > .v-date-picker-header__value > .accent--text > button')
		await page.click('div > .v-date-picker-header > .v-date-picker-header__value > .accent--text > button')
		await matchImage();

		await page.waitForSelector('tbody > tr:nth-child(1) > td:nth-child(1) > .v-btn > .v-btn__content')
		await page.click('tbody > tr:nth-child(1) > td:nth-child(1) > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('tbody > tr:nth-child(4) > td:nth-child(6) > .v-btn > .v-btn__content')
		await page.click('tbody > tr:nth-child(4) > td:nth-child(6) > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('.v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3) > .v-btn__content')
		await page.click('.v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3) > .v-btn__content')
		await matchImage();

		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text')
		await page.on('filechooser', async (filechooser) => {
			await filechooser.setFiles('integrations/assets/small.png');
		});
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text')
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await matchImage();
	});

	test('should not request sick with medical letter well without errors', async () => {
		await page.reload();
		await page.waitForSelector('.container > div:nth-child(4) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(4) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(2) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.v-input #date')
		await page.click('.v-input #date')
		await matchImage();

		await page.waitForSelector('div > .v-date-picker-header > .v-date-picker-header__value > .accent--text > button')
		await page.click('div > .v-date-picker-header > .v-date-picker-header__value > .accent--text > button')
		await matchImage();

		await page.waitForSelector('tbody > tr:nth-child(1) > td:nth-child(1) > .v-btn > .v-btn__content')
		await page.click('tbody > tr:nth-child(1) > td:nth-child(1) > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('tbody > tr:nth-child(4) > td:nth-child(3) > .v-btn > .v-btn__content')
		await page.click('tbody > tr:nth-child(4) > td:nth-child(3) > .v-btn > .v-btn__content')
		await matchImage();

		await page.waitForSelector('.v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3) > .v-btn__content')
		await page.click('.v-dialog > .v-picker > .v-picker__actions > .v-btn:nth-child(3) > .v-btn__content')
		await matchImage();

		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text')
		await page.on('filechooser', async (filechooser) => {
			await filechooser.setFiles('integrations/assets/small.png');
		});
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-text-field__slot > .v-file-input__text')
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await matchImage();
	});
});
