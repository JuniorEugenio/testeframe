
 beforeEach(() => cy.visit('https://front.serverest.dev/login'));

describe('home page' , () => {
    
        it ('Login Aceito', () => {
            cy.viewport(1366, 768);
            cy.get("[data-testid=email]").type("marceloneves@testeframe.com.br");
            cy.get("[data-testid=senha]").type("1234@56");
            cy.get("[data-testid=entrar]").click();
            cy.get('h1').should('have.text', 'Serverest Store')

        })

         it('Login Vazio', () => {
            cy.viewport(1366, 768)
            cy.get("[data-testid=email]").type(" ");
            cy.get("[data-testid=senha]").type(" ");
            cy.get("[data-testid=entrar]").click();
            cy.get('.alert > :nth-child(2)').should('have.text', 'Email é obrigatório')
            })
       
            it('Senha invalida', () => {
                cy.viewport(1366, 768)
                cy.get("[data-testid=email]").type("marceloneves@testeframe.com.br");
                cy.get("[data-testid=senha]").type("1234");
                cy.get("[data-testid=entrar]").click();
                cy.get('.alert > :nth-child(2)').should('have.text', 'Email e/ou senha inválidos')
                })

    })
