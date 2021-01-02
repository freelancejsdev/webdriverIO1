describe('Assertions',()=>{

    it('Launch Browser',()=>{
        browser.url('https://demo.nopcommerce.com/') 
        browser.maximizeWindow() 
        expect(browser).toHaveUrl('https://demo.nopcommerce.com/')
        expect(browser).toHaveTitle('nopCommerce demo store')

    })

    it('Verify Welcome Messgae',()=>{
        let heading = $('h2')
        expect(heading).toBeDisplayed()
        
    })
})