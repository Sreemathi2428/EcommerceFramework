import {test} from "@playwright/test"
import LoginPage from "../POM/LoginPage"
import fs from 'fs'
let userdata = JSON.parse(fs.readFileSync("./Test_Data/Login.json", "utf-8"))

let url=userdata.url
let username=userdata.username
let password=userdata.password
test("login to sauce demo",async({page})=>{
   let login=new LoginPage(page)
 
   await login.Logintosaucedemo(url,username,password)



})