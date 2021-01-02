describe('nopCommerce',()=>{


      it('Launch Browser',()=>{
      
          browser.url('https://demo.nopcommerce.com/') // navigates to url
          browser.maximizeWindow() // maximize window
          

      })


    it('Search For Product',()=>{
          // using id
       // $('#small-searchterms').setValue('laptop') 
        //using class name
       // $('.search-box-button').click()

       //using link text
       $('=Register').click();

       //using partiallink text

       //$('*=downloads').click();

       // element with text
       /*
       const welcomeMsg = $('h2=Welcome to our store').getText();
       console.log(welcomeMsg);
        browser.pause(2000)
        */

         // element with partial text
         /*
       const welcomeMsg = $('h2*=Welcome').getText();
       console.log(welcomeMsg);
        browser.pause(2000)
        */

        //tag name
       //console.log($('<h2>').getText())
       

       // using name
       browser.refresh();


       let register = $('h1=Register')
       console.log(register.getText())



       $('[name="FirstName"]').setValue('ivan')
       browser.pause(2000)

      })





})