// <reference types="cypress" />

function atualizarusuario(idUsuario) {
    return cy.request({
        method:'PUT', 
        url:'usuarios/${idUsuario}',
        failOnStatusCode: false,
    })
}

export { idUsuario };