
describe('Check Name', function () {
    it('types name into name field', function () {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="user"]').type('Andrew')
        cy.get('input[name="user"]').should('have.value', 'Andrew')

    })
})
describe('Check Email', function () {
    it('types email into email field', function () {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="email"]').type('andrewpoppenberg@yahoo.com')
        cy.get('input[name="email"]').should('have.value', 'andrewpoppenberg@yahoo.com')

    })
})
describe('Check Password', function () {
    it('types password into password field', function () {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="password"]').type('meme123')
        cy.get('input[name="password"]').should('have.value', 'meme123')

    })
})
describe('Check TOS', function () {
    it('checks checkbox field to see if it reads as checked', function () {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="agree"]').check()
        cy.get('input[name="agree"]').should('have.checked', true)

    })
})
describe('Check Validation', function () {
    it('all fields entered correct except password is to short', function () {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="user"]').type('Andrew')
        cy.get('input[name="email"]').type('andrewpoppenberg@yahoo.com')
        cy.get('input[name="password"]').type('mem')
        cy.get('input[name="agree"]').check()
        cy.get('button[name="submit"]').should('be.disabled')

    })
})
describe('Check Submit', function () {
    it('types all fields to see if the submit button becomes available', function () {
        cy.visit('http://localhost:3000/')
        cy.get('input[name="user"]').type('Andrew')
        cy.get('input[name="email"]').type('andrewpoppenberg@yahoo.com')
        cy.get('input[name="password"]').type('meme123')
        cy.get('input[name="agree"]').check()
        cy.get('button[name="submit"]').should('not.be.disabled')

    })
})
