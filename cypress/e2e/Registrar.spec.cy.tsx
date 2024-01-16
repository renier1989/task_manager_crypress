/// <reference types="cypress" />

describe('<Registrar />', () => {
    it('<Registrar /> - Validación y alertas', () => {
        cy.visit('/registrar');

        // simulacion de un click
        cy.get('[data-cy=submit-registrar]').click();
        
        // verificando la alerta de campos obligatorios
        cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','Todos los campos son obligatorios');
        cy.get('[data-cy=alerta]').should('have.class','from-red-400 to-red-600');

        // llenando el formulario
        cy.get('[data-cy=nombre-input-registrar]').type('User Cypress');
        cy.get('[data-cy=email-input-registrar]').type('cypress@test.com');
        cy.get('[data-cy=password-input-registrar]').type('123');
        cy.get('[data-cy=repetir-input-registrar]').type('123');
        cy.get('[data-cy=submit-registrar]').click();
        
        // verificar el alerta de password muy corto
        cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','El password debe ser minimo de 6 caracteres');

        // limpio los campos de password para escribir algo diferente
        cy.get('[data-cy=password-input-registrar]').clear().type('123456');
        cy.get('[data-cy=repetir-input-registrar]').clear().type('123455');
        cy.get('[data-cy=submit-registrar]').click();
        
        // verificar la alerta de passwords diferentes
        cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','Los passwords no coinciden');

        // colocando los datos de un usuario que ya existe
        cy.get('[data-cy=repetir-input-registrar]').clear().type('123456');
        cy.get('[data-cy=email-input-registrar]').clear().type('user1@test.com');
        cy.get('[data-cy=submit-registrar]').click();

        // verificar la alerta de usuario ya existe
        cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','El usuario ya fue registrado, use otro email!');
        


        // escribir todos los datos correctos para que cree el usuario
        cy.get('[data-cy=email-input-registrar]').clear().type('usercypress@test.com');
        cy.get('[data-cy=submit-registrar]').click();

        // verificar la alerta de usuario creado y comprobacion del email
        cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','Usuario creado con Exito, revisa tu email para confirmar tu cuenta.!');
    })
})