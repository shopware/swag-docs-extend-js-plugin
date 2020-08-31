// / <reference types="Cypress" />
describe('PluginExtendJsPlugin: Test is extended', () => {

    it('checks for correct alert text', () => {
        cy.visit('/');

        let result = null;
        cy.on('window:confirm', (str) => {
            result = str;
        });

        cy.contains('Deny').click().then(() => {
            expect(result).to.equal('Are you sure?');
        });
    });
});
