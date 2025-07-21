import{test,expect,Browser,Page, Locator} from '@playwright/test'
import{webkit, chromium, firefox} from 'playwright'

test('login test', async()=>{

    const broweser:Browser = await chromium.launch({headless:false});
    const page:Page = await broweser.newPage();
    await page.goto("https://dev.compliancealpha.com/auth/login");
   const website_login:Locator =   await page.locator('//*[@id="mat-input-0"]');
   const nextbutton:Locator = await page.locator('/html/body/app-root/app-auth/app-base/div/div/div[1]/app-login/div[1]/form/div[4]/button');
   const login:Locator = await page.locator('button.mat-focus-indicator');

   website_login.fill("manager@360logica.com");
   nextbutton.click();
   const passwordInput:Locator= await page.locator('//*[@id="mat-input-1"]');
   passwordInput.fill("Welc0me19ALPHA-Q@");
   login.click();
 
});