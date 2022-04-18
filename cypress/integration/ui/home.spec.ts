describe('visit the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('display the header and search box by default', () => {
    cy.get('a.header').should('have.length', 1).and('have.attr', 'href').and('eq', '/');
    cy.get('h1.header__title').should('have.length', 1).and('have.text', 'Welcome, baby');

    cy.get('div.search-box').should('be.visible');
    cy.get('div.search-box > svg').should('have.length', 1);
    cy.get('input.search-box__input')
      .should('have.length', 1)
      .and('have.attr', 'placeholder')
      .and('eq', 'Search for location');

    cy.get('div.weather-card').should('not.exist');
    cy.get('div.weather-section__forecast').should('not.exist');
  });

  it('can search the location', () => {
    const keyword = 'ho chi minh';

    cy.get('input.search-box__input').type(`${keyword}{enter}`).should('have.value', keyword);
  });

  context('with search valid location', () => {
    beforeEach(() => {
      const validKeyword = 'ho chi minh';

      cy.get('input.search-box__input').type(`${validKeyword}{enter}`);
    });

    it('the first search keyword is valid', () => {
      cy.get('div.search-box__suggestions-item')
        .should('have.length', 6)
        .first()
        .and('have.text', 'Ho Chi Minh City, Vietnam');
    });

    it('can hover and click on the suggestion item', () => {
      cy.get('div.search-box__suggestions-item').first().trigger('mouseover');
      cy.get('div.search-box__suggestions-item').first().click();

      cy.get('div.search-box__suggestions').should('not.exist');
      cy.get('div.search-box__suggestions-item').should('not.exist');

      cy.get('div.loader').should('have.length', 1);
      cy.get('div.weather-card').should('have.length', 1);
      cy.get('div.weather-section__forecast').should('have.length', 1);
    });

    it('can click outside suggestion list', () => {
      cy.get('body').click(0, 0);

      cy.get('div.search-box__suggestions').should('not.exist');
      cy.get('div.search-box__suggestions-item').should('not.exist');
    });
  });

  context('with search invalid location', () => {
    it('the suggestion list will not display', () => {
      const inValidKeyword = 'aDFSajhfgshjfbdskjfBKJsfbksjdFB';
      cy.get('input.search-box__input').type(`${inValidKeyword}{enter}`);

      cy.get('div.search-box__suggestions').should('not.exist');
      cy.get('div.search-box__suggestions-item').should('not.exist');
    });

    it('the first search keyword is valid and second search keyword is invalid', () => {
      const firstKeyword = 'ho chi minh';
      const secondKeyword = 'aDFSajhfgshjfbdskjfBKJsfbksjdFB';

      cy.get('input.search-box__input').type(`${firstKeyword}{enter}`);

      cy.get('div.search-box__suggestions').should('have.length', 1);
      cy.get('div.search-box__suggestions-item').should('have.length', 6);

      cy.get('input.search-box__input').clear().type(`${secondKeyword}{enter}`);

      cy.get('div.search-box__suggestions').should('not.exist');
      cy.get('div.search-box__suggestions-item').should('not.exist');
    });
  });
});
