// verbo/metodo - endpoint . motivo ( request) . extensao 
/// <reference types="cypress" />

function allusuarios() {
    return cy.request({
        method:'GET', 
        url:'usuarios',
        failOnStatusCode: false,
    })
}

export { allusuarios };