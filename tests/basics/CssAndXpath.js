describe('nopCommerce',()=>{


      it('Launch Browser',()=>{
      
          browser.url('https://demo.nopcommerce.com/') // navigates to url
          browser.maximizeWindow() // maximize window
          

      })


    it('Search For Product',()=>{
      
      /*
       $('=Register').click();

       browser.refresh();
       // css with id
       $('input#FirstName').setValue('ivan')
       browser.pause(2000)
        
       */

       // css with class name
       //$('input.ui-autocomplete-input').setValue('laptop');

       // css with attribute value
       //$('input[placeholder="Search store"]').setValue('laptop');

       // first of type
      // $('.answer:first-of-type').click();
      //last of type
      //$('.answer:last-of-type').click();
       //nth of type
       $('.answer:nth-of-type(2)').click();

       browser.pause(2000)


       //xpath
       $('(//input[@value="Add to cart"])[1]').click();





      })





})