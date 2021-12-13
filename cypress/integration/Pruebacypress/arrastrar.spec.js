it('🔥 Thx to Stackoverflow, drag and drop support now works 🔥', () => {
    cy.drag('#cdk-drop-list-0 > :nth-child(1)', '#cdk-drop-list-1')
    .should('contain', 'Get to work');
 });