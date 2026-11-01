class CheckoutPage{
      constructor(page){
            this.page = page;
            this.firstname= page.getByPlaceholder("First Name");
            this.lastname = page.getByPlaceholder("Last Name");
            this.zipcode = page.getByPlaceholder("Zip/Postal Code");
            this.cancelbtn=page.getByRole('button',{name:"Cancel"})
            this.continuebtn=page.getByRole('button',{name:"Continue"})
            this.errorMessage=page.locator(".error-message-container.error")
    }
    async fillYourInfo(){
         await this.firstname.fill("Sree")
         await this.lastname.fill("Mathi")
         await this.zipcode.fill(641108)
        }
        async clickoncancel(){
            await this.cancelbtn.click()
        }
        async clickoncontinue(){
            await this.continuebtn.click()
        }
        async fillandcontinue(){
           await this.fillYourInfo()
           await this.clickoncontinue()

        }
        async errorOncheckout(){
             return await this.errorMessage.textContent();


        }    


}
export default CheckoutPage;