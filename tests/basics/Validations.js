describe('Assertions',()=>{

    it('Launch Browser',()=>{
        browser.url('https://demo.nopcommerce.com/') 
        browser.maximizeWindow() 
        expect(browser).toHaveUrl('https://demo.nopcommerce.com/')
        expect(browser).toHaveTitle('nopCommerce demo store')

    })

    it('Validations',()=>{

        // is clickable

        const registerLink = $('=Register');
       
        console.log('Register link is clickable: ' + registerLink.isClickable())

        // wait until
        browser.waitUntil(()=>registerLink.isClickable());
        
        registerLink.click();
        browser.refresh();

        // is displayed
       const maleRadioBtn  = $('#gender-male');
       //maleRadioBtn.isDisplayed();
       //maleRadioBtn.click();
       console.log('Radio Button is displayed: ' + maleRadioBtn.isDisplayed())

       // is enabled
       const registerBtn = $('#register-button')
        console.log('Element is enabled: ' + registerBtn.isEnabled())

        // is selected

        const day = $('[name="DateOfBirthDay"]');

         
         day.selectByIndex(11);

         console.log('Option 11 is selected: ' + $('(//option[@value="11"])[1]').isSelected())

      // is Existing - to verify element exists on dom
      console.log('is Eleemnt Existing: ' + day.isExisting())
        






     



      




    })
})