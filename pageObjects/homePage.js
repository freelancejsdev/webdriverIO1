import Utils from '../util/utils'
class HomePage
{

    // locators
    get regsiterLink()
    {
        return $('=Register')
    }


    get loginLink()
    {
        return $('=Log in')
    }



    

      
   // actions

    clickRegisterLink()
    {
       Utils.performClick(this.regsiterLink)
    }


    clickLoginLink()
    {
        Utils.performClick(this.loginLink)

    }
  
    verifyLoginlinkDisplayed()
    {
        return Utils.verifyElementIsDisplayed(this.loginLink)
    }



}

export default new HomePage()