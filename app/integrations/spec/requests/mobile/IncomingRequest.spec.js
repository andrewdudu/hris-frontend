const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = true, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Incoming Request Page', () => {
	beforeEach(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/request/incoming', {
			waitUntil: 'networkidle'
		});

		await page.reload();
	});

	test('should get incoming request well', async () => {
		await page.waitForSelector('#search');
		await page.fill('#search', 'abc');
		await matchImage();

		await page.waitForSelector('#search');
		await page.fill('#search', '');
		await matchImage();
	});

	test('should approve well', async () => {
		await page.waitForSelector('.container > .row:nth-child(6) > .col-9 > .row > .col-12')
		await page.click('.container > .row:nth-child(6) > .col-9 > .row > .col-12')
		await matchImage()

		await page.waitForSelector('.v-card__actions > .row > .col-5 > .v-btn > .v-btn__content')
		await page.click('.v-card__actions > .row > .col-5 > .v-btn > .v-btn__content')
		await matchImage()
	})

	test('should reject well', async () => {
		await page.waitForSelector('.container > .row:nth-child(6) > .col-9 > .row > .col-12')
		await page.click('.container > .row:nth-child(6) > .col-9 > .row > .col-12')
		await matchImage()

		await page.waitForSelector('.dark > .v-card__actions > .row > .col-6 > .v-btn')
		await page.click('.dark > .v-card__actions > .row > .col-6 > .v-btn')
		await matchImage()
	})

	test('should not approve well', async () => {
		await page.waitForSelector('.container > .row:nth-child(7) > .col-9 > .row > .col-9')
		await page.click('.container > .row:nth-child(7) > .col-9 > .row > .col-9')
		await matchImage();

		await page.waitForSelector('.dark > .v-card__actions > .row > .col-5 > .v-btn')
		await page.click('.dark > .v-card__actions > .row > .col-5 > .v-btn')
		await matchImage();
	})

	test('should not reject well', async () => {
		await page.waitForSelector('.container > .row:nth-child(7) > .col-9 > .row > .col-12')
		await page.click('.container > .row:nth-child(7) > .col-9 > .row > .col-12')
		await matchImage();

		await page.waitForSelector('.v-card__actions > .row > .col-6 > .v-btn > .v-btn__content')
		await page.click('.v-card__actions > .row > .col-6 > .v-btn > .v-btn__content');
		await matchImage();
	})

	test('should bulk approve well', async () => {
		await page.waitForSelector('.row > .col-5 > .white--text > .v-btn__content > span')
		await page.click('.row > .col-5 > .white--text > .v-btn__content > span')
		await matchImage();

		await page.waitForSelector('.v-dialog__content > .v-dialog > .v-card > .v-card__actions > .v-btn:nth-child(3)')
		await page.click('.v-dialog__content > .v-dialog > .v-card > .v-card__actions > .v-btn:nth-child(3)');
		await matchImage();
	})

	test('should change filter well', async() => {
		await page.waitForSelector('.v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
		await page.click('.v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-select__selections')
		await matchImage();

		await page.waitForSelector('#marketing')
		await page.click('#marketing');
		await matchImage();
	})
});
