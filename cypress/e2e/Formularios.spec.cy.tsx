/// <reference types="cypress" />

describe('<Formularios />', ()=>{
    it('<Login /> - Verificar la pantalla de inicio de sesion',()=>{
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
    
    it('<Registrar /> - Verificar el Formulario de registro',()=>{
        cy.visit('/registrar');

        // verificar el titulo de la vista de resgistro, 2 formas de comprobar el texto 
        cy.get('[data-cy=titulo-registrar]').should('have.text','Crea tu cuenta y administra tus proyectos');
        cy.get('[data-cy=titulo-registrar]').invoke('text').should('eq','Crea tu cuenta y administra tus proyectos');

        // verificar que el formulario existe
        cy.get('[data-cy=form-registrar]').should('exist');

        // verificar los campos de formulario
        cy.get('[data-cy=nombre-input-registrar]').should('exist').should('have.prop','type').should('eq','text');
        cy.get('[data-cy=email-input-registrar]').should('exist').should('have.prop','type').should('eq','email');
        cy.get('[data-cy=password-input-registrar]').should('exist').should('have.prop','type').should('eq','password');
        cy.get('[data-cy=repetir-input-registrar]').should('exist').should('have.prop','type').should('eq','password');

        // verificar el boton para crear la cuenta , el texto esperado, que sea de tipo submit , que tenga unas clases definidas
        cy.get('[data-cy=submit-registrar]').should('exist').should('have.attr','type').should('eq','submit');
        cy.get('[data-cy=submit-registrar]').should('have.value','Crear Cuenta').should('have.class','bg-sky-700 w-full');

        // verificar los enlaces para iniciar sesion y olvide password
        cy.get('[data-cy=iniciar-sesion]').should('exist').should('have.attr','href').should('eq','/');
        cy.get('[data-cy=olvide-password-registrar]').should('exist').should('have.attr','href').should('eq','/olvide-password');

    })
}) 