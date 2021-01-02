import HomePage from '../pageObjects/homePage'
import LoginPage from '../pageObjects/loginPage'
import Config from '../config';
import Utils from '../util/utils'
import { assert } from 'chai';
import Constants from '../constants'

describe('nop Commerce Login', () => {

    it('Verify Login',()=>{
         
         Utils.navigateToUrl();
        
         
         const homePageTitle = Utils.getTitle()
         assert.equal(Constants.HOME_PAGE_TITLE,homePageTitle,'title does not match')

         assert.equal(true,HomePage.verifyLoginlinkDisplayed(),'Login link is not displayed')

         
         HomePage.clickLoginLink();
          
         console.log(browser.getUrl())

         
          const loginPageTitle = Utils.getTitle()
         assert.equal(Constants.LOGIN_PAGE_TITLE,loginPageTitle,'title does not match')

         Utils.pageRefresh()

         LoginPage.loginToApp(Config.email,Config.password)
         

    })
    
})
