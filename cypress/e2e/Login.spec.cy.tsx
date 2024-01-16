/// <reference types="cypress" />

describe('<Login />', () => {
  it('<Login /> - Validacion , alertas y autenticación', () => {
    cy.visit('/');

    // simular el click en el boton para inciar sesion
    cy.get('[data-cy=submit-login]').click();

    // verificar la alerta de campos requeridos y clase de alerta de error
    cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','Todos los campos son requeridos.');
    cy.get('[data-cy=alerta]').should('have.class','from-red-400 to-red-600');

    // colocar datos de un usuario que no existe
    cy.get('[data-cy=email-input]').type('email@email.com');
    cy.get('[data-cy=password-input]').type('123');
    cy.get('[data-cy=submit-login]').click();

    // verificar la alerta de usuario no existe
    cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','El usuario no Existe!!!');
    cy.get('[data-cy=alerta]').should('have.class','from-red-400 to-red-600');

    // colocar datos de un usuario que si existe pero con una clave incorrecta
    cy.get('[data-cy=email-input]').clear().type('user1@test.com');
    cy.get('[data-cy=password-input]').type('123');
    cy.get('[data-cy=submit-login]').click();

    // verificar la alerta de password incorrecto
    cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','El password es incorrecto.!!!');
    cy.get('[data-cy=alerta]').should('have.class','from-red-400 to-red-600');

    // colocar datos correctos de un usuario y verificar el inicio sesion correcto
    cy.get('[data-cy=email-input]').clear().type('user1@test.com');
    cy.get('[data-cy=password-input]').clear().type('user1@test.com');
    cy.get('[data-cy=submit-login]').click();

    // verificar que ingreso a la vista del dashborad
    cy.get('[data-cy=titulo-dashborad]').should('exist').invoke('text').should('eq','Proyectos');

    // cerrar la sesion
    cy.get('[data-cy=button-cerrar-sesion]').should('exist').invoke('text').should('eq','Cerrar Sesion');
    cy.get('[data-cy=button-cerrar-sesion]').click();

  })
})