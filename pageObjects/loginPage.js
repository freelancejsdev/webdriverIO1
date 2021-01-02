import Utils from '../util/utils'


class LoginPage
{

     get emailTextbox()
     {
         return $('#Email');
     }


     get passwordTextbox()
     {
         return $('#Password');
     }

     get loginButton()
     {
         return $('.login-button');
     }




     loginToApp(em,pw)
     {
        Utils.enterText(this.emailTextbox,em)
        Utils.enterText(this.passwordTextbox,pw)
        Utils.performClick(this.loginButton); 
        
     }





}

export default new LoginPage()