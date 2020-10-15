describe('form Test', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Check Name', function () {
        cy.get('input[name="user"]').type('Andrew')
        cy.get('input[name="user"]').should('have.value', 'Andrew')

    })


    it('Check Email', function () {
        cy.get('input[name="email"]').type('andrewpoppenberg@yahoo.com')
        cy.get('input[name="email"]').should('have.value', 'andrewpoppenberg@yahoo.com')

    })


    it('Check Password', function () {
        cy.get('input[name="password"]').type('meme123')
        cy.get('input[name="password"]').should('have.value', 'meme123')

    })


    it('Check TOS', function () {
        cy.get('input[name="agree"]').check()
        cy.get('input[name="agree"]').should('have.checked', true)

    })


    it('check Validation', function () {
        cy.get('input[name="user"]').type('Andrew')
        cy.get('input[name="email"]').type('andrewpoppenberg@yahoo.com')
        cy.get('input[name="password"]').type('mem')
        cy.get('input[name="agree"]').check()
        cy.get('button[name="submit"]').should('be.disabled')

    })

    describe('submit Button', () => {
        it('check submit is live', function () {
            cy.get('input[name="user"]').type('Andrew')
            cy.get('input[name="email"]').type('andrewpoppenberg@yahoo.com')
            cy.get('input[name="password"]').type('meme123')
            cy.get('input[name="agree"]').check()
            cy.get('button[name="submit"]').should('not.be.disabled')

        })
        it('check submit is not live', function () {
            cy.get('input[name="user"]').type('Andrew')
            cy.get('input[name="email"]').type('andrewpoppenberg@yahoo.com')
            cy.get('input[name="password"]').type('mx')
            cy.get('input[name="agree"]').check()
            cy.get('button[name="submit"]').should('be.disabled')

        })
    })
})