describe('Testing Indonesia article', () => {
    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/bahasaIndonesia.html')
    })

    it('Popup Lombok',()=>{
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > a').should('have.text', 'Lombok')
        })
        // cy.getPopup().should('be.visible')
        // cy.continueReading().should('have.text', 'Lanjutkan Membaca').click()   
        // cy.goToWiki().should('be.visible').should('have.text', 'Baca lebih lanjut tentang Wikipedia').click()  
        // cy.closePopup().click()  
        // cy.getPopup().should('not.be.visible') 
        cy.log('Instead of having span tag lombok popup have <a> tag therefore on clicking it sends us to Wikipedia resulting DOM to get deattached')
    })

    it('Popup Gili Meno', () => {
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'Gili Meno').click({force:true})
        })
        cy.getPopup().should('be.visible')
        cy.continueReading().should('have.text', 'Lanjutkan Membaca').click()   
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'Baca lebih lanjut tentang Wikipedia')
        .should('have.attr', 'href').and('include', 'https://id.wikipedia.org/wiki/Gili_Meno')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible') 
    })

})

describe('Testing Indonesia article for phone', () => {
    it('Visit URL', () => {
        cy.visit('http://localhost:8080/articles/bahasaIndonesia.html')
        cy.viewport('samsung-s10')
    })


    // check for lombok
    it('Popup Lombok',()=>{
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(1) > a').should('have.text', 'Lombok')
        })
        // cy.getPopup().should('be.visible')
        // cy.continueReading().should('have.text', 'Lanjutkan Membaca').click()   
        // cy.goToWiki().should('be.visible').should('have.text', 'Baca lebih lanjut tentang Wikipedia').click()  
        // cy.closePopup().click()  
        // cy.getPopup().should('not.be.visible') 
        cy.log('Instead of having span tag lombok popup have <a> tag therefore on clicking it sends us to Wikipedia resulting DOM to get deattached')
    })

    it('Popup Gili Meno', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'Gili Meno').click({force:true})
        cy.findPopup().within(()=>{
            cy.get('p:nth-child(2) > span').should('have.text', 'Gili Meno').click({force:true})
        })
        cy.getPopup().should('be.visible')
        cy.continueReading().should('have.text', 'Lanjutkan Membaca').click()   
        cy.popupHeaderImg().should('be.visible')     
        cy.popupFooterImg1().scrollIntoView().should('be.visible')  
        cy.popupFooterImg2().should('be.visible')    
        cy.popupFooterImg3().should('be.visible')  
        cy.goToWiki().should('be.visible').should('have.text', 'Baca lebih lanjut tentang Wikipedia')
        .should('have.attr', 'href').and('include', 'https://id.wikipedia.org/wiki/Gili_Meno')
        cy.closePopup().click()  
        cy.getPopup().should('not.be.visible') 
    })

})