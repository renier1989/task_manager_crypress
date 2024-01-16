/// <reference types="cypress" />
describe('<Login />', ()=>{
    it('<Login /> - Verificar la pantalla de inicio',()=>{
        cy.visit('/');
        cy.contains('Inicia Sesion y Administra tus proyectos');
        cy.get('[data-cy="titulo"]').invoke('text').should('equal','Inicia Sesion y Administra tus proyectos')
    })
    
    it('<Login /> - Verificar el Formulario de datos',()=>{

    })
})