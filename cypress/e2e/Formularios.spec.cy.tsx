/// <reference types="cypress" />
describe('<Formularios />', ()=>{
    it('<Login /> - Verificar la pantalla de inicio',()=>{
        // visitar la pagina del login
        cy.visit('/');
        
        // verificar que se muetren los texto en la pantalla
        cy.contains('Inicia Sesion y Administra tus proyectos');
        cy.get('[data-cy="titulo"]').invoke('text').should('equal','Inicia Sesion y Administra tus proyectos')

        // verificar que el fomrulario existe
        cy.get('[data-cy=form-login]').should('exist');

        // verificar los 2 campos de input
        cy.get('[data-cy=email-input]').should('exist');
        cy.get('[data-cy=password-input]').should('exist');

        // verificar el boton de inicio de sesion, que exista y que tenga el valor en el texto esperado
        cy.get('[data-cy=submit-login]').should('exist').should('have.value','Iniciar Sesion').should('have.class', 'font-bold uppercase');

        // verificar que existen los enlaces para nueva cuenta y olvide cuenta
        cy.get('[data-cy=nueva-cuenta]').should('exist').should('have.prop', 'tagName').should('eq','A');
        cy.get('[data-cy=nueva-cuenta]').should('have.attr', 'href').should('eq', '/registrar');
        
        cy.get('[data-cy=olvide-cuenta]').should('exist').should('have.prop', 'tagName').should('eq','A');
        cy.get('[data-cy=olvide-cuenta]').should('have.attr', 'href').should('eq', '/olvide-password');

    })
    
    // it('<Login /> - Verificar el Formulario de datos',()=>{

    // })
}) 