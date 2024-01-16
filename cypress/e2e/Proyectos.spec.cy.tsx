/// <reference types="cypress" />

describe('Dasdboras Adminsitración de Proyectos', () => {
    it('<Login /> - Iniciando Sesion', () => {
        cy.visit('/');
        // colocar datos de un usuario registrado
        cy.get('[data-cy=email-input]').type('user1@test.com');
        cy.get('[data-cy=password-input]').type('user1@test.com');
        cy.get('[data-cy=submit-login]').click();
    });

    it('<Proyectos /> - Entrar a la creacion de Proyectos y validar Formulario', () => {
        // verificar el boton para crear nuevo proyecto
        cy.get('[data-cy=button-nuevo-proyecto]').should('exist').should('have.attr','href').should('eq','/proyectos/nuevo-proyecto');
        // simular click para ir a la vista de creacion de proyectos
        cy.get('[data-cy=button-nuevo-proyecto]').click();
        // verificar que estoy en la vista de creacion de proyectos
        cy.get('[data-cy=titulo-nuevo-proyecto]').should('exist').invoke('text').should('eq','Crear Proyecto');
    })

    it('<NuevoProyecto/> - Verificar el Formulario para la creación de nuevos proyectos', () => {
        // verificar que existe el fromulario
        cy.get('[data-cy=form-nuevo-proyecto]').should('exist');
        // verificar los campos del formulacio y el boton
        cy.get('[data-cy=nombre-nuevo-proyecto]').should('exist').should('have.prop','type').should('eq','text');
        cy.get('[data-cy=descripcion-nuevo-proyecto]').should('exist').should('have.prop','tagName').should('eq','TEXTAREA');
        cy.get('[data-cy=fecha-nuevo-proyecto]').should('exist').should('have.prop','type').should('eq','date');
        cy.get('[data-cy=cliente-nuevo-proyecto]').should('exist').should('have.prop','type').should('eq','text');
        cy.get('[data-cy=submit-nuevo-proyecto]').should('exist');
        // validar el formulario
        cy.get('[data-cy=submit-nuevo-proyecto]').click();
        cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','Todos los campos son obligatorios');
        cy.get('[data-cy=alerta]').should('have.class','from-red-400 to-red-600');
        
        // llenar los datos para crear un proyecto
        cy.get('[data-cy=nombre-nuevo-proyecto]').type('Testing Cypress');
        cy.get('[data-cy=descripcion-nuevo-proyecto]').type('Description Testing Cypress');
        cy.get('[data-cy=fecha-nuevo-proyecto]').type('2024-01-16');
        cy.get('[data-cy=cliente-nuevo-proyecto]').type('User 2');
        cy.get('[data-cy=submit-nuevo-proyecto]').click();

        // entrar en el primero proyecto creado
        cy.get('[data-cy=listado-proyectos] div:nth-child(1) a').click();
    })

    it('<Proyecto (Tarea) /> - Verificar el formulario para la creacion de nuevas tareas', () => {
        // verificar el boton para mostrar el modal del formulario de las tareas
        cy.get('[data-cy=button-nueva-tarea]').should('exist').invoke('text').should('eq', 'Nueva Tarea');
        cy.get('[data-cy=button-nueva-tarea]').click();

        // verificar que existe el fromulario de la creacion de tareas
        cy.get('[data-cy=form-tarea]').should('exist');

        // validar el formulario de crear tarea
        cy.get('[data-cy=submit-tarea]').click();
        cy.get('[data-cy=alerta]').should('exist').invoke('text').should('equal','Todos los campos son obligatorios');
        cy.get('[data-cy=alerta]').should('have.class','from-red-400 to-red-600');

        // llenar el formulario de crear tarea
        cy.get('[data-cy=nombre-tarea]').type('Task Name');
        cy.get('[data-cy=descripcion-tarea]').type('Task Description');
        cy.get('[data-cy=fecha-tarea]').type('2024-01-16');
        cy.get('[data-cy=prioridad-tarea]').select('Alta');
        cy.get('[data-cy=submit-tarea]').click();
    })

    it('<Proyecto (Tarea) /> - Compeltar, Descompletar , Editar y Eliminar un tarea', () => {
        // seleccionar la primera tarea para luego verificar si va a completar o descompletar la tarea
        cy.get('[data-cy=tareas] div:nth-child(1) [data-cy=button-actions-tarea] [data-cy=button-completa-incompleta]').click();
        cy.get('[data-cy=tareas] div:nth-child(1) [data-cy=button-actions-tarea] [data-cy=button-completa-incompleta]').should('have.class','bg-green-600');

        cy.get('[data-cy=tareas] div:nth-child(1) [data-cy=button-actions-tarea] [data-cy=button-completa-incompleta]').click();
        cy.get('[data-cy=tareas] div:nth-child(1) [data-cy=button-actions-tarea] [data-cy=button-completa-incompleta]').should('have.class','bg-gray-600');

        // editar una tarea
        cy.get('[data-cy=tareas] div:nth-child(1) [data-cy=button-actions-tarea] [data-cy=button-editar]').click();
        cy.get('[data-cy=nombre-tarea]').clear().type('Task Name UPDATED');
        cy.get('[data-cy=descripcion-tarea]').clear().type('Task Description UPDATED');
        cy.get('[data-cy=fecha-tarea]').type('2024-01-16');
        cy.get('[data-cy=prioridad-tarea]').select('Baja');
        cy.get('[data-cy=submit-tarea]').click();

        // eliminar tarea
        cy.get('[data-cy=tareas] div:nth-child(1) [data-cy=button-actions-tarea] [data-cy=button-eliminar]').click();
        // confrimar eliminar
        cy.get('[data-cy=modal-button-eliminar-tarea]').click();

        // eliminar el poryecto
        cy.get('[data-cy=eliminar-proyecto]').click();

        // cy.get('[data-cy=tareas] div:nth-child(1) [data-cy=button-actions-tarea]').then(($button)=>{
        //     if($button.text().includes('Completa')){
        //         cy.get('[data-cy=button-completa-incompleta]').click();
        //         cy.get('[data-cy=button-completa-incompleta]').invoke('text').should('eq','Completa');
        //         cy.get('[data-cy=button-completa-incompleta]').should('have.class','bg-green-600');
                
        //     }else if($button.text().includes('Incompleta')){
        //         cy.get('[data-cy=button-completa-incompleta]').click();
        //         cy.get('[data-cy=button-completa-incompleta]').invoke('text').should('eq','Incompleta');
        //         cy.get('[data-cy=button-completa-incompleta]').should('have.class','bg-gray-600');
        //     }
        // })
        

    })
})