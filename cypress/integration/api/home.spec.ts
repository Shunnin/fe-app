describe('visit the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('with search valid location', () => {
    beforeEach(() => {
      cy.intercept('POST', '**/places/query', { fixture: 'valid_query_location.json' }).as('getValidLocation');
    });

    it('should gave suggestion location with given location keyword', () => {
      cy.get('input.search-box__input').type(`ho chi minh{enter}`);

      cy.get('div.search-box__suggestions-item')
        .should('have.length', 6)
        .first()
        .and('have.text', 'Ho Chi Minh City, Vietnam');

      cy.get('div.search-box__suggestions-item').then($item => {
        expect($item, '6 items').to.have.length(6);
        expect($item.eq(0), 'first item').to.contain('Ho Chi Minh City, Vietnam');
        expect($item.eq(1), 'second item').to.contain('Ho Chi Minh, Cong Hoa Xa Hoi Chu Nghia Viet Nam');
        expect($item.eq(2), 'third item').to.contain('Bac Ho, Cong San Viet Nam');
        expect($item.eq(3), 'four item').to.contain('Sai Gon, Cong Hoa Vietnam');
        expect($item.eq(4), 'five item').to.contain('Gia Dinh, Dai Viet');
        expect($item.eq(5), 'six item').to.contain('Thanh Pho Ho Chi Minh, Dat Nuoc Viet Nam');
      });
    });
  });
});
