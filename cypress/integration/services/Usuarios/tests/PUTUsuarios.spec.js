 import * as PUTUsuarios from '../requests/PUTUsuarios.requests'

describe('PUT usuarios', () => {
it('Deve alterar o usuário cadastrado previamente - PUT', () => {
     PUTUsuarios.idUsuario().should(response) 
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eql("Registro alterado com sucesso")

    cy.request({
        url: '/usuarios',
        method: 'GET'
    }).then(response => {
        let id = response.body.usuarios[1]._id
        cy.request({
            url: '/usuarios/' + id,
            method: 'PUT',
            body: {
                nome: nome,
                email: 'alterado_' + email,
                password: "teste",
                administrador: "true"
            }
        }).should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eql("Registro alterado com sucesso")
        })
    });
});
})