let username = "automation@test.com";
let password = "Abc12345.";

describe('login cypress', function(){

    beforeEach(function(){
        cy.visit("https://staging.d2vmtp7i0k2rpv.amplifyapp.com/es/login");
    })

    it('GET method',function(){
        cy.get('[name="email"]').type(username);
        cy.get('[name="password"]').type(password);
        cy.get('[class="MuiButton-label"]').click();
        cy.wait(6000);
        cy.get('#gatsby-focus-wrapper > div > nav > div > div > div > div > ul > div:nth-child(3)').click();
        cy.wait(7000);
        cy.get('#vertical-tabpanel-1 > div > p > div > div.MuiBox-root.jss1221.jss1219 > button > span.MuiButton-label').click();
        cy.wait(3000);
        //cy.get('#mui-27482').type(happy)
        //cy.get('#mui-27482').type(keydown);

    });

});