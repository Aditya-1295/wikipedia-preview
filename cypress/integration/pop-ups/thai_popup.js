describe('Testing thai article', () => {

    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/thai.html').url().should('include', '/thai.html')  
    })


    it('Popup พระมหาชนก', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(1)').should('have.text', 'พระมหาชนก').click()
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'อ่านต่อ').click()     
        cy.goToWiki().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย')
        .should('have.attr', 'href').and('include', 'https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%81')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup วัดร่องขุ่น', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(2)').should('have.text', 'วัดร่องขุ่น').click({force:true})
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'อ่านต่อ').click({force:true})      
        cy.goToWiki().should('be.visible')
        .should('have.attr', 'href').and('include', 'https://th.wikipedia.org/wiki/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B9%88%E0%B8%99')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible') 
    })

    it('Popup จังหวัดเชียงราย', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'จังหวัดเชียงราย').click({ force: true })
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'จังหวัดเชียงราย').click({ force: true })
        })
        cy.getPopup().should('be.visible') 
        cy.continueReading().should('have.text', 'อ่านต่อ').click()        
        cy.goToWiki().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย')
        .should('have.attr', 'href').and('include', 'https://th.wikipedia.org/wiki/%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2') 
        cy.closePopup().click() 
        cy.getPopup().should('not.be.visible')  
    })


})

describe('Testing thai article for phone', () => {

    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/thai.html').url().should('include', '/thai.html')
        cy.viewport('samsung-s10') 
    })


    it('Popup พระมหาชนก', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(1)').should('have.text', 'พระมหาชนก').click()
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'อ่านต่อ').click()     
        cy.goToWiki().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย')
        .should('have.attr', 'href').and('include', 'https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%81')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible')  
    })

    it('Popup วัดร่องขุ่น', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > span:nth-child(2)').should('have.text', 'วัดร่องขุ่น').click({force:true})
        })
        cy.getPopup().should('be.visible')  
        cy.continueReading().should('have.text', 'อ่านต่อ').click({force:true})      
        cy.goToWiki().should('be.visible')
        .should('have.attr', 'href').and('include', 'https://th.wikipedia.org/wiki/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B9%88%E0%B8%99')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible') 
    })

    it('Popup จังหวัดเชียงราย', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'จังหวัดเชียงราย').click({ force: true })
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'จังหวัดเชียงราย').click({ force: true })
        })
        cy.getPopup().should('be.visible') 
        cy.continueReading().should('have.text', 'อ่านต่อ').click()        
        cy.goToWiki().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย')
        .should('have.attr', 'href').and('include', 'https://th.wikipedia.org/wiki/%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2') 
        cy.closePopup().click() 
        cy.getPopup().should('not.be.visible')  
    })


})