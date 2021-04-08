// You can find these  custom methods in cypress/support/commands.js


describe('Testing arabic page popup', () => {

    it('Visit arabic pa URL', () => {
        cy.visit('http://localhost:8080/articles/arabic.html')
    })

    it('Popup القاهرة', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(1)').should('have.text', 'القاهرة').click({ force: true })
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'مواصلة القراءة').click({force:true})
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا')
        .should('have.attr', 'href').and('include', 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup مصر', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(2)').should('have.text', 'مصر').click({ force: true })
        })
        cy.getPopup().should('be.visible') 
        cy.continueReading().should('have.text', 'مواصلة القراءة').click()
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا')
        .should('have.attr', 'href').and('include', 'https://ar.wikipedia.org/wiki/%D9%85%D8%B5%D8%B1')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup محمد_عبد_الوهاب ', () => {

        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'محمد_عبد_الوهاب').click({ force: true })
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'مواصلة القراءة').click()         
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا')
        .should('have.attr', 'href').and('include', 'https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%88%D9%87%D8%A7%D8%A8')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

})

describe('Testing arabic page popup for phone', () => {

    it('Visit arabic pa URL', () => {
        cy.visit('http://localhost:8080/articles/arabic.html')
        cy.viewport('samsung-s10')
    })

    it('Popup القاهرة', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(1)').should('have.text', 'القاهرة').click({ force: true })
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'مواصلة القراءة').click({force:true})
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا')
        .should('have.attr', 'href').and('include', 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup مصر', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(2)').should('have.text', 'مصر').click({ force: true })
        })
        cy.getPopup().should('be.visible') 
        cy.continueReading().should('have.text', 'مواصلة القراءة').click()
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا')
        .should('have.attr', 'href').and('include', 'https://ar.wikipedia.org/wiki/%D9%85%D8%B5%D8%B1')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup محمد_عبد_الوهاب ', () => {

        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'محمد_عبد_الوهاب').click({ force: true })
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'مواصلة القراءة').click()         
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا')
        .should('have.attr', 'href').and('include', 'https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%88%D9%87%D8%A7%D8%A8')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

})