describe('Drop down',()=>{

    it('Select',()=>{
        browser.url('https://demo.nopcommerce.com/') 
        browser.maximizeWindow() 
        expect(browser).toHaveUrl('https://demo.nopcommerce.com/')
        expect(browser).toHaveTitle('nopCommerce demo store')
        $('=Register').click();
        browser.refresh();

         const day = $('[name="DateOfBirthDay"]');

         //day.selectByAttribute('value','11');
         day.selectByIndex(11);

        

         const month = $('[name="DateOfBirthMonth"]');
         //month.selectByIndex(12)
         month.selectByAttribute('value','8');


         const year = $('[name="DateOfBirthYear"]');
         year.selectByVisibleText('1995')

         browser.pause(3000)

         

    })

   
})