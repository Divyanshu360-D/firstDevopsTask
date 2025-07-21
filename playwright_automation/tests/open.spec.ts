import{ test,Page,Browser, Locator } from '@playwright/test';

import{webkit, chromium, firefox} from 'playwright'


test('login test', async()=>{

    const browser:Browser = await chromium.launch({headless:false});
    const page:Page = await browser.newPage();
    await page.goto("https://live2.empxtrack.com/empxtrack/logon.do;jsessionid=583FD80508B0928922EEE3603AFA87B8?activity=display&__nored_=1&location=live2");
    const website_username:Locator =await page.locator('#usr_1');
    const passwordInput:Locator= await page.locator('#pId');
    const company_id:Locator= await page.locator('#location');
    const login_btton:Locator= await page.locator("[value='Login']");

    await website_username.fill("TLTC114");
    await passwordInput.fill("xW7UaI");
    await company_id.fill("saksoft");
    await login_btton.click();
    




});