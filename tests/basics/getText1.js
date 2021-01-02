describe('Error Messages',()=>{

    it('Get Error Message',()=>{
        
        browser.url('https://demo.nopcommerce.com/') 
        browser.maximizeWindow() 
        expect(browser).toHaveUrl('https://demo.nopcommerce.com/')
        expect(browser).toHaveTitle('nopCommerce demo store')
       
        

    })

   
})