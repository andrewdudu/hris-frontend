const responsive = require('../../../utils/responsive');
const network = require('../../../utils/network');

const matchImage = async (isNetworkIdle = true, delayTime = 2000) => {
	await page.waitForTimeout(delayTime);
	if (isNetworkIdle) network.waitForNetworkIdle(page);
	let image = await page.screenshot();
	expect(image).toMatchImageSnapshot();
};

// only mobile
describe.only('Login Page', () => {
	beforeEach(async () => {
		await responsive.setMobile(page);
		await page.goto('http://localhost:8080/login', {
			waitUntil: 'networkidle'
		});

		await page.reload();
	});

	test('should login well', async () => {
		await page.waitForSelector('.v-input #email');
		await page.fill('.v-input #email', 'email@email.com');
		await matchImage();

		await page.waitForSelector('.v-input #password');
		await page.fill('.v-input #password', 'password');
		await matchImage();

		await page.waitForSelector('.v-main__wrap > .container > .v-form > .center > .mr-4');
		await page.click('.v-main__wrap > .container > .v-form > .center > .mr-4');
		await matchImage();
	});

	test('should not login well', async () => {
		await page.waitForSelector('.v-input #email');
		await page.fill('.v-input #email', 'test@email.com');
		await matchImage();

		await page.waitForSelector('.v-input #password');
		await page.fill('.v-input #password', 'password');
		await matchImage();

		await page.waitForSelector('.v-main__wrap > .container > .v-form > .center > .mr-4');
		await page.click('.v-main__wrap > .container > .v-form > .center > .mr-4');
		await matchImage();
	});
});
