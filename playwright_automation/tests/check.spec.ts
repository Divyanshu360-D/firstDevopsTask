import { test, Page, Browser, Locator } from '@playwright/test';
import { chromium } from 'playwright';

test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto("https://live2.empxtrack.com/empxtrack/logon.do;jsessionid=583FD80508B0928922EEE3603AFA87B8?activity=display&__nored_=1&location=live2");

    const websiteUsername: Locator = await page.locator('#userLogin');
    const passwordInput: Locator = await page.locator('#lock');
    const companyId: Locator = await page.locator('#company');
    const loginButton: Locator = await page.locator('input[type="submit"]'); // This is assuming the login button is of type submit, adjust selector accordingly

    await websiteUsername.fill("TLTC114");
    await passwordInput.fill("xW7UaI");
    await companyId.fill("saksoft");
    await loginButton.click();

    

    await browser.close();
});
