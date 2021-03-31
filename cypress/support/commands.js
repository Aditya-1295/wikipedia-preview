// I have used custom commands for the repetetive selectors 

Cypress.Commands.add('getPopup', () => {
    cy.get('body > div.wp-popup',{timeout:5000}) // Get the popup element 
})
Cypress.Commands.add('closePopup', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-closebtn') // gets the close button inside popup element
})
Cypress.Commands.add('continueReading', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-footer > span') //get the continue reading button inside popup
})
Cypress.Commands.add('goToWiki', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-footer > a') // gets the wikipedia hyperlink for that popup article
})
Cypress.Commands.add('findPopup',() =>{
    cy.get('body > div.container > div.content')
})
Cypress.Commands.add('getWikiLink',()=>{
    cy.get('body > div.wp-popup > div > div.wikipediapreview-footer')
})
Cypress.Commands.add('popupHeaderImg', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-image',{timeout:5000})
})
Cypress.Commands.add('popupFooterImg1', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)',{timeout:5000})
})

Cypress.Commands.add('popupFooterImg2', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)',{timeout:5000})
})

Cypress.Commands.add('popupFooterImg3', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)',{timeout:5000})
})




