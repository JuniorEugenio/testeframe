import * as deleteUsuarios from '../requests/DELETEUsuarios.request';
import * as GETUsuarios from '../requests/GETUsuarios.request';

describe('DELETE Usuarios', () => {
    it('Deletar um usuario',() => {
        GETUsuarios.allusuarios().should((response) => {
        }).then((response) => {
            let id = response.body.usuarios[1]
            expect(response.status).to.eq(200)
            expect(response.body.message).to.eql("Registro excluído com sucesso")
        });
        });
    });
