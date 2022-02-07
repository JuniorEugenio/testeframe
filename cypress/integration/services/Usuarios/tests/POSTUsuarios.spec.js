import * as POSTUsuarios from '../requests/POSTUsuarios.request';

    context('POST usuarios', () => {
    it('Cadastrar um novo usuario', () => {
        POSTUsuarios.addusuarios().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.nome).to.eq("Marcelo");
        })
    })
    });
