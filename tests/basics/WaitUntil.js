describe('Wait Methods',()=>{

    it('Launch Browser',()=>{
        browser.url('https://demo.nopcommerce.com/') 
        browser.maximizeWindow() 
        expect(browser).toHaveUrl('https://demo.nopcommerce.com/')
        expect(browser).toHaveTitle('nopCommerce demo store')

    })

   
    it('Wait Until',()=>{
       
      $('=Log in').click();

      browser.refresh();

      $('.login-button').click();

      //const errorMsg = $('#Email-error');
      const errorMsg = $('#Email-err');

      browser.waitUntil(()=>{
        
        return errorMsg.isDisplayed() === true;

      },{
          timeout: 5000,
          timeoutMsg: 'Waiting for the error message'
      })


      
    console.log(errorMsg.getText())
     


    })
})