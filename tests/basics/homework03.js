//provide mandatory fields on register page 
//select value from dropdowns 
//click on register after 
//print message displayed after to console 
//verify page title 
//verify logout element is dispalyed or not using isDisplayed 

describe ('register page', () => {

    it('Launch Browser',()=>{
        browser.url('https://demo.nopcommerce.com/') 
        browser.maximizeWindow() 
        expect(browser).toHaveUrl('https://demo.nopcommerce.com/')
        expect(browser).toHaveTitle('nopCommerce demo store')
    })

    it('click register', () => {
        const registerLink = $('=Register') 
        registerLink.click()
        browser.refresh() 
        registerLink.waitForClickable({timeout: 3000})
    })
    
    it('fill mandatory fields', () => {
        $('#FirstName').setValue('Test'); 
        $('#LastName').setValue('Run');
        $('#Email').setValue('5678@test.com');
        $('#Password').setValue('Welcome123');
        $('#ConfirmPassword').setValue('Welcome123')
        //what can I add here to pause this part? 
    })

    it('select Date of birth ', () => {
        const Day = $ ('[name="DateOfBirthDay"]');
        Day.selectByAttribute('value', '14')
    })

    it('select Month of birth ', () => {
        const Month = $ ('[name="DateOfBirthMonth"]');
        Month.selectByIndex[10]; 
    })

    it('select Year of birth ', () => {
        const Year = $('[name="DateOfBirthYear"]');
        Year.selectByIndex['1910']; //since number is text, need to put as string 
        
    })

    it('click register and print success message', () => {
        const result = $('#register-button')
        result.waitForClickable();
        result.click();
    })

/* Not sure how to do this part 

    it('verify page title', () => {
       
    })
*/
    
    it('verify logout button displayed', () => {
        const logOut = $('.ico-logout'); 
        //logOut.waitForDisplayed();
        logOut.waitForClickable();
        console.log('Logout button is now displayed: ' + logOut.isDisplayed())  
    })

}) 