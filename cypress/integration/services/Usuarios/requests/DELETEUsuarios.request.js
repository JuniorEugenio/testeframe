/// <reference types="cypress" />

function deleteUsuarios(idUsuario) {
    return cy.request({
        method:'DELETE', 
        url:'usuarios/${idUsuario}',
        failOnStatusCode: false,
    })
}

export { allusuarios };