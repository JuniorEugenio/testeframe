/// <reference types="cypress" />

const payloadsAddusuarios = require('../payloads/add-usuarios.json')

function addusuarios() {
    return cy.request({
        method:'POST', 
        url:'usuarios',
        failOnStatusCode: false,
        body: payloadsAddusuarios
           
        })
   
}

export { addusuarios };