class TestPage {

// add the get and action of elements here
// Ex.:
    clickXptoBtn() {
        cy.get('[test-id="xptobtn"]').click();
    }

    getSomeComponent(){
        return cy.get('.font-weight-400'), {timeout:15000};
    }
}
export default TestPage;