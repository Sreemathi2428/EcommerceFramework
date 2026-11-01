import {test} from "@playwright/test"
import LoginPage from "../POM/LoginPage"
import fs from 'fs'
let userdata = fs.readFileSync("C:/Users/Hp/OneDrive/Desktop/Saucedemo/EcommerceFramework/Test_Data/Login.json")
userdata = JSON.parse(userdata)
let url=userdata.url
let username=userdata.username
let password=userdata.password
test("login to sauce demo",async({page})=>{
   let login=new LoginPage(page)
 
   await login.Logintosaucedemo(url,username,password)



})