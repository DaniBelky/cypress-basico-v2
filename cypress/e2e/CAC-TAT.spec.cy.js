/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function(){
    cy.visit('./src/index.html')
  })

  it('preenche os campos obrigatórios e envia o formulário', function() {
    cy.get('#firstName').type('Daniel')
    cy.get('#lastName').type('Belchor')
    cy.get('#email').type('belchor@gmail.com')
    cy.get('#open-text-area').type('Legal Demais')

    cy.get('button[type="submit"]').click()
  })
})