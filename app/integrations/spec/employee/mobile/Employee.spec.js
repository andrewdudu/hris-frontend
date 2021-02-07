const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = true, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Employee Page', () => {
	beforeAll(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/employee?department=TECHNOLOGY&name=Technology', {
			waitUntil: 'networkidle'
		});

		await page.reload();
	});

	test('should download excel well', async () => {
		await page.waitForSelector('.v-input #search-bar')
		await page.fill('.v-input #search-bar', 'abc')
		await matchImage();

		await page.waitForSelector('.v-input #search-bar')
		await page.fill('.v-input #search-bar', '')
		await matchImage();

		await page.waitForSelector('#downloadExcel')
		await page.click('#downloadExcel')
		await matchImage();

		await page.waitForSelector('.text-decoration-none:nth-child(4) > .row > .col-9 > .row > .col-12')
		await page.click('.text-decoration-none:nth-child(4) > .row > .col-9 > .row > .col-12')
		await matchImage();

		await page.waitForSelector('#add-subs-leave-btn')
		await page.click('#add-subs-leave-btn')
		await matchImage();

		await page.waitForSelector('.v-input #total-text');
		await page.fill('.v-input #total-text', '1');
		await matchImage();

		await page.waitForSelector('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content')
		await page.click('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content')
		await matchImage(true, 1000);

		await page.waitForSelector('.container > .row > .col-6 > .white--text > .v-btn__content')
		await page.click('.container > .row > .col-6 > .white--text > .v-btn__content')
		await matchImage(true, 1000);
	});

	test('should not add substitute well', async () => {
		await page.goto('http://localhost:8080/employee/detail?id=aw&department=TECHNOLOGY&name=Technology', {
			waitUntil: 'networkidle'
		});

		await page.waitForSelector('#add-subs-leave-btn');
		await page.click('#add-subs-leave-btn');
		await matchImage();

		await page.waitForSelector('.v-input #total-text');
		await page.fill('.v-input #total-text', '5');
		await matchImage();

		await page.waitForSelector('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await page.click('.v-dialog > .v-card > .v-card__actions > .v-btn > .v-btn__content');
		await matchImage();
	});
});
