const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = false, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Request Hourly Leave', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
	});

	beforeEach(async () => {
		await page.goto('http://localhost:8080/request', {
			waitUntil: 'networkidle'
		});
	});

	test('should request hourly leave well', async () => {
		await page.waitForSelector('.container > div:nth-child(3) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(3) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.v-input #input-73')
		await page.click('.v-input #input-73')
		await matchImage();

		await page.waitForSelector('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await page.click('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await matchImage(false, 500);

		await page.waitForSelector('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await page.click('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await matchImage(false, 500);

		await page.waitForSelector('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await matchImage(false, 1000);

		await page.waitForSelector('.v-input #input-78')
		await page.click('.v-input #input-78')
		await matchImage();

		await page.waitForSelector('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await page.click('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await matchImage();

		await page.waitForSelector('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await page.click('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await matchImage();

		await page.waitForSelector('.v-picker > .v-picker__body > .v-time-picker-clock__container > .v-time-picker-clock__ampm > .v-picker__title__btn:nth-child(2)');
		await page.click('.v-picker > .v-picker__body > .v-time-picker-clock__container > .v-time-picker-clock__ampm > .v-picker__title__btn:nth-child(2)');
		await matchImage();

		await page.waitForSelector('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await matchImage();

		await page.waitForSelector('.v-input #input-82')
		await page.fill('.v-input #input-82', 'test')
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await matchImage();
	})

	test('should not request hourly leave well', async () => {
		await page.reload();
		await page.waitForSelector('.container > div:nth-child(3) > .text-decoration-none > .row > .col-11')
		await page.click('.container > div:nth-child(3) > .text-decoration-none > .row > .col-11')
		await matchImage();

		await page.waitForSelector('.v-input #input-73')
		await page.click('.v-input #input-73')
		await matchImage();

		await page.waitForSelector('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await page.click('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await matchImage(false, 500);

		await page.waitForSelector('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await page.click('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await matchImage(false, 500);

		await page.waitForSelector('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await matchImage(false, 1000);

		await page.waitForSelector('.v-input #input-78');
		await page.click('.v-input #input-78');
		await matchImage();

		await page.waitForSelector('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await page.click('.v-picker__body > .v-time-picker-clock__container:nth-child(1) > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item:nth-child(7)');
		await matchImage();

		await page.waitForSelector('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await page.click('.v-time-picker-clock__container > .v-time-picker-clock > .v-time-picker-clock__inner > .v-time-picker-clock__item--active > span');
		await matchImage();

		await page.waitForSelector('.v-picker > .v-picker__body > .v-time-picker-clock__container > .v-time-picker-clock__ampm > .v-picker__title__btn:nth-child(2)');
		await page.click('.v-picker > .v-picker__body > .v-time-picker-clock__container > .v-time-picker-clock__ampm > .v-picker__title__btn:nth-child(2)');
		await matchImage();

		await page.waitForSelector('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-picker > .v-picker__actions:nth-child(3) > .v-btn > .v-btn__content');
		await matchImage();

		await page.waitForSelector('.v-input #input-82')
		await page.fill('.v-input #input-82', 'fail')
		await matchImage();

		await page.waitForSelector('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await page.click('.row > .v-form > .col-12 > .white--text > .v-btn__content')
		await matchImage();
	})
});
