describe("home page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("the h1 contains the correct text", () => {
        cy.getByData("hero-heading").contains(
            "Testing Next.js Applications with Cypress"
        )
    })

    it("the features on the homepage are correct", () => {
        cy.get("dt").eq(0).contains("4 Courses")
        cy.get("dt").eq(1).contains("25+ Lessons")
        cy.get("dt").eq(2).contains("Free and Open Source")
    })

    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("tom@aol.com")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("tom@aol.com")
    })

    it("does NOT allow an invalid email address", () => {
        cy.getByData("email-input").type("tom")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })
 
    it("users cannot sign up for our newsletter if they are already subscribed", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists.")
    })

})
