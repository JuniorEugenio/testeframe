
beforeEach(() => cy.visit('https://front.serverest.dev/login'));

describe('Cadastro de novo usuario' , () => {
    
        it ('novo usuario', () => {
            cy.viewport(1366, 768);
            cy.get("[data-testid=cadastrar]").click();
            cy.get("[data-testid=nome]").type("Murilo Medeiros");
            cy.get("[data-testid=email]").type("teste@321.com.br");
            cy.get("[data-testid=password]").type("Senha@123");
            cy.get("[data-testid=cadastrar]").click();
            cy.get('.alert > :nth-child(2)').should('have.text', 'Este email já está sendo usado')


        })
    })