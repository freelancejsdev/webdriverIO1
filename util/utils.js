class Utils
{

   navigateToUrl()
   {
    browser.url('/');
    browser.maximizeWindow();
   }

   pageRefresh()
   {
       browser.refresh();
   }

   performClick(element)
    {
       element.waitForDisplayed();
       element.click();
    }

    enterText(element,value)
    {
        element.waitForDisplayed();
        element.setValue(value)
    }


    getTextFromElement(element)
    {
        element.waitForDisplayed()
        return element.getText()
    }


    getTitle()
    {
        return browser.getTitle()
    }


    verifyElementIsDisplayed(element)
    {
        element.waitForDisplayed()
        return element.isDisplayed() // return type is boolean
    }


    

}

export default new Utils()
