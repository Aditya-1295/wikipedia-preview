describe('Testing Hindi article', () => {
    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/hindi.html')
    })

    it('Popup मन्दिर', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span').should('have.text', 'मन्दिर').click({force:true})
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'पढ़ना जारी रखें').click({force:true})     
        cy.goToWiki().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें')
        .should('have.attr', 'href').and('include', 'https://hi.wikipedia.org/wiki/%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0')  
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup हुमांयू', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text','हुमांयू').click({force:true})
        })
        cy.getPopup().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें')
        .should('have.attr', 'href').and('include', 'https://hi.wikipedia.org/wiki/%E0%A4%B9%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A5%82%E0%A4%81')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup अंकगणितीय', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(4) > span').should('have.text', 'अंकगणितीय').click({force:true})
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'पढ़ना जारी रखें').click()      
        cy.goToWiki().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें')
        .should('have.attr', 'href').and('include', 'https://hi.wikipedia.org/wiki/%E0%A4%85%E0%A4%82%E0%A4%95%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4')  
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })


})

describe('Testing Hindi article for phone', () => {
    it('Popup मन्दिर', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span').should('have.text', 'मन्दिर').click({force:true})
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'पढ़ना जारी रखें').click({force:true})     
        cy.goToWiki().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें')
        .should('have.attr', 'href').and('include', 'https://hi.wikipedia.org/wiki/%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0')  
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup हुमांयू', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text','हुमांयू').click({force:true})
        })
        cy.getPopup().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें')
        .should('have.attr', 'href').and('include', 'https://hi.wikipedia.org/wiki/%E0%A4%B9%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A5%82%E0%A4%81')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup अंकगणितीय', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(4) > span').should('have.text', 'अंकगणितीय').click({force:true})
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'पढ़ना जारी रखें').click()      
        cy.goToWiki().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें')
        .should('have.attr', 'href').and('include', 'https://hi.wikipedia.org/wiki/%E0%A4%85%E0%A4%82%E0%A4%95%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4')  
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })


})