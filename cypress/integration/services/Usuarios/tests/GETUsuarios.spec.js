import * as GETUsuarios from '../requests/GETUsuarios.request';

describe('GET usuarios', () => {
    it('Listar todos os usuarios', () => {
        GETUsuarios.allusuarios().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        })
    });
});