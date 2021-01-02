describe('Wait Methods',()=>{

    it('Launch Browser',()=>{
        browser.url('https://demo.nopcommerce.com/') 
        browser.maximizeWindow() 
        expect(browser).toHaveUrl('https://demo.nopcommerce.com/')
        expect(browser).toHaveTitle('nopCommerce demo store')

    })

    /*
    it('Wait For Clickable',()=>{
        const registerLink = $('=Register')
        //registerLink.waitForClickable(); // waits for default time given in wdio.conf.js

        registerLink.waitForClickable({timeout: 3000}) // waits for given time

        //registerLink.waitForClickable({reverse: true}) 

      
        
    })
    */

    /*
    it('Wait For Displayed',()=>{
       
       const welcomeMsg = $('h2=Welcome to our store')
        welcomeMsg.waitForDisplayed();

        const text = welcomeMsg.getText();

        console.log(text);

    })
    */

    /*

    it('Wait For Enabled',()=>{
        const registerLink = $('=Register')
       
        registerLink.click();

        browser.refresh();

        $('#FirstName').setValue('text');

       
        
         const registerBtn = $('#register-button')

          registerBtn.waitForEnabled();


    })

    */

    it('Wait For Exist',()=>{
       
        $('#small-searchterms').setValue('laptop');
        $('.search-box-button').click();

       
        const laptop1 = $('=Asus N551JK-XO076H Laptop')
        laptop1.waitForExist(); // waits for element to appear in the DOM

        const result1 = laptop1.getText();
        console.log(result1);


    })
})