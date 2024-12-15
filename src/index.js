import "./styles.css";
import "./page-load-home" 
import { loadHomePage } from "./page-load-home";
import { loadMenu } from "./load-menu";
import { loadContactInfo } from "./load-contact";
// test
//loadHomePage()
document.querySelector('#home').classList.add('actives')
const homeButton = document.querySelector('#home')
const menuButton = document.querySelector('#menu')
const aboutButton = document.querySelector('#about')
const buttonGroup = document.querySelectorAll('.buttonGroup')

addEventListener('DOMContentLoaded', loadHomePage)

homeButton.addEventListener('click', loadHomePage)

menuButton.addEventListener('click', loadMenu)

aboutButton.addEventListener('click', loadContactInfo)

buttonGroup.forEach((button) => {
     button.addEventListener('click', () => {
        buttonGroup.forEach((value) => {
            if (value !== button) {
                value.classList.remove('actives')
            }
        })
       button.classList.add('actives')
    })
})



