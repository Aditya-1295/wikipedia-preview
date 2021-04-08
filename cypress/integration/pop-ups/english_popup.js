describe('Testing English article', () => {

    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/english.html') 
    })


    it('Popup Ivory', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span').should('have.text', 'ivory').click({force:true})
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'Continue Reading').click()
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')    
        cy.goToWiki().should('be.visible').should('have.text', 'Read more on Wikipedia')  
        .should('have.attr', 'href').and('include', 'https://en.wikipedia.org/wiki/Ivory')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup  Bamingui-Bangoran National', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', ' Bamingui-Bangoran National').click({force:true})
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'Continue Reading').click()    
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')
        cy.goToWiki().should('be.visible').should('have.text', 'Read more on Wikipedia')
        .should('have.attr', 'href').and('include', 'https://en.wikipedia.org/wiki/Bamingui-Bangoran_National_Park_and_Biosphere_Reserve')
        cy.closePopup().click() 
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup Chink Project', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(3) > span:nth-child(1)').should('have.text', 'Chinko Project').click({ force: true })
        })
        cy.getPopup().should('be.visible') 
        cy.continueReading().should('have.text', 'Continue Reading').click()   
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')
        cy.goToWiki().should('be.visible').should('have.text', 'Read more on Wikipedia')
        .should('have.attr', 'href').and('include', 'https://en.wikipedia.org/wiki/Chinko')
        cy.closePopup().click() 
        cy.getPopup().should('not.be.visible')  
    })

})

describe('Testing English article for phone', () => {

    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/english.html').url().should('include', '/english.html') 
        cy.viewport('samsung-s10') 
    })


    it('Popup Ivory', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span').should('have.text', 'ivory').click({force:true})
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'Continue Reading').click()
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')      
        cy.goToWiki().should('be.visible').should('have.text', 'Read more on Wikipedia')
        .should('have.attr', 'href').and('include', 'https://en.wikipedia.org/wiki/Ivory')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup  Bamingui-Bangoran National', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', ' Bamingui-Bangoran National').click({force:true})
        })
        cy.getPopup().should('be.visible')   
        cy.continueReading().should('have.text', 'Continue Reading').click()    
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')
        cy.goToWiki().should('be.visible').should('have.text', 'Read more on Wikipedia')
        .should('have.attr', 'href').and('include', 'https://en.wikipedia.org/wiki/Bamingui-Bangoran_National_Park_and_Biosphere_Reserve')
        cy.closePopup().click() 
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup Chink Project', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(3) > span:nth-child(1)').should('have.text', 'Chinko Project').click({ force: true })
        })
        cy.getPopup().should('be.visible') 
        cy.continueReading().should('have.text', 'Continue Reading').click()   
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')
        cy.goToWiki().should('be.visible').should('have.text', 'Read more on Wikipedia')
        .should('have.attr', 'href').and('include', 'https://en.wikipedia.org/wiki/Chinko')
        cy.closePopup().click() 
        cy.getPopup().should('not.be.visible')  
    })

})