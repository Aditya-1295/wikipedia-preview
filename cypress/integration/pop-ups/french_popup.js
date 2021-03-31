describe('Testing french article', () => {

    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/french.html').url().should('include', '/french.html')  
    })


    it('Popup résolutions', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'résolutions').click()
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'résolutions').click()
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'Continuer à lire').click()        
        cy.goToWiki().should('be.visible').should('have.text', 'Lire davantage sur Wikipédia')
        .should('have.attr', 'href').and('include', 'https://fr.wikipedia.org/wiki/Conseil_de_s%C3%A9curit%C3%A9_des_Nations_unies')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup droit de veto', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(3) > span').should('have.text', 'droit de veto').click()
        })
        cy.getPopup().should('be.visible') 
        cy.goToWiki().should('be.visible').should('have.text', 'Lire davantage sur Wikipédia')
        .should('have.attr', 'href').and('include', 'https://fr.wikipedia.org/wiki/Veto') 
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

})

describe('Testing french article for phone', () => {

    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/french.html').url().should('include', '/french.html')
        cy.viewport('samsung-s10')  
    })


    it('Popup résolutions', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'résolutions').click()
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'résolutions').click()
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'Continuer à lire').click()        
        cy.goToWiki().should('be.visible').should('have.text', 'Lire davantage sur Wikipédia')
        .should('have.attr', 'href').and('include', 'https://fr.wikipedia.org/wiki/Conseil_de_s%C3%A9curit%C3%A9_des_Nations_unies')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup droit de veto', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(3) > span').should('have.text', 'droit de veto').click()
        })
        cy.getPopup().should('be.visible') 
        cy.goToWiki().should('be.visible').should('have.text', 'Lire davantage sur Wikipédia')
        .should('have.attr', 'href').and('include', 'https://fr.wikipedia.org/wiki/Veto') 
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

})