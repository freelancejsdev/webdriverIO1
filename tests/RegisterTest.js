import HomePage from '../pageObjects/homePage'


describe('Nop Commerce User Registration',()=>{

    it('Verify Register',()=>{

       browser.url('https://demo.nopcommerce.com/');
       browser.maximizeWindow();

       HomePage.clickRegisterLink();
       browser.refresh();
       
    })


})