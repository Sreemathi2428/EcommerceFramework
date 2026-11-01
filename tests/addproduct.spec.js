import {test} from "@playwright/test"
import ProductsPage from "../POM/ProductsPage"
import LoginPage from "../POM/LoginPage"
test ("add product to cart",async({page})=>{
    let login = new LoginPage(page)
    let product = new ProductsPage(page)
    
    await login.Logintosaucedemo()
    
    await product.clickonaddtocart()
    await product.Opencart()


})