describe('visit the home page and search location to forecast weather', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', '**/weather*', { fixture: 'valid_query_current_weather.json' });
    cy.intercept('GET', '**/forecast/daily*', { fixture: 'valid_query_forecast_daily.json' });
  });

  context('with search valid location', () => {
    beforeEach(() => {
      cy.get('input.search-box__input').type(`ho chi minh{enter}`);
      cy.get('div.search-box__suggestions-item').first().click();
    });

    it('should show correct info on the weather card', () => {
      cy.get('div.weather-card').should('have.length', 1);
      cy.get('div.weather-card .weather-card__title').and('have.text', 'Current Weather');

      cy.get('div.weather-card div.weather-card__status-name').and('have.text', 'Ho Chi Minh City');
      cy.get('div.weather-card__status span.temperature').and('have.text', '33°');
      cy.get('div.weather-card__status div.weather-card__status-desc').and('have.text', 'scattered clouds');

      cy.get('div.weather-card__info div.weather-card__info-feels-like').should('have.text', 'Feels like 36°');
      cy.get('div.weather-card__info div.weather-card__info-temp-degree div.weather-degree span.temperature').then(
        $item => {
          expect($item, '2 items').to.have.length(2);
          expect($item.eq(0), 'first item').to.contain('33°');
          expect($item.eq(1), 'second item').to.contain('33°');
        },
      );
      cy.get('div.weather-card__info div.weather-card__info-detail').then($item => {
        expect($item, '3 items').to.have.length(3);

        expect($item.eq(0), 'Humidity').to.contain('Humidity');
        expect($item.eq(0).find('span').text()).to.equal('49%');

        expect($item.eq(1), 'Wind').to.contain('Wind');
        expect($item.eq(1).find('span').text()).to.equal('11 kph');

        expect($item.eq(2), 'Pressure').to.contain('Pressure');
        expect($item.eq(2).find('span').text()).to.equal('1006 hPa');
      });
    });

    it('should show 7 days on the forecast weather card', () => {
      cy.get('div.weather-section__forecast').should('have.length', 1);
      cy.get('div.weather-section__forecast div.weather-section__forecast-title').should('have.text', '7-day forecast');

      cy.get('div.weather-section__forecast div.weather-section__forecast-items div.weather-item').then($item => {
        expect($item, '7 items').to.have.length(7);
        const dayInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const item1 = $item.eq(0);
        expect(item1.children(), '4 items').to.have.length(4);
        expect(item1.find('div.weather-item__day').text()).to.oneOf(dayInWeek);
        expect(item1.find('div.weather-item__forecast').text()).to.equal('Rain');

        const item2 = $item.eq(1);
        expect(item2.children(), '4 items').to.have.length(4);
        expect(item2.find('div.weather-item__day').text()).to.oneOf(dayInWeek);
        expect(item2.find('div.weather-item__forecast').text()).to.equal('Rain');

        const item3 = $item.eq(2);
        expect(item3.children(), '4 items').to.have.length(4);
        expect(item3.find('div.weather-item__day').text()).to.oneOf(dayInWeek);
        expect(item3.find('div.weather-item__forecast').text()).to.equal('Rain');

        const item4 = $item.eq(3);
        expect(item4.children(), '4 items').to.have.length(4);
        expect(item4.find('div.weather-item__day').text()).to.oneOf(dayInWeek);
        expect(item4.find('div.weather-item__forecast').text()).to.equal('Rain');

        const item5 = $item.eq(4);
        expect(item5.children(), '4 items').to.have.length(4);
        expect(item5.find('div.weather-item__day').text()).to.oneOf(dayInWeek);
        expect(item5.find('div.weather-item__forecast').text()).to.equal('Rain');

        const item6 = $item.eq(5);
        expect(item6.children(), '4 items').to.have.length(4);
        expect(item6.find('div.weather-item__day').text()).to.oneOf(dayInWeek);
        expect(item6.find('div.weather-item__forecast').text()).to.equal('Clouds');

        const item7 = $item.eq(6);
        expect(item7.children(), '4 items').to.have.length(4);
        expect(item7.find('div.weather-item__day').text()).to.oneOf(dayInWeek);
        expect(item7.find('div.weather-item__forecast').text()).to.equal('Rain');
      });
    });

    it('can toggling the degree type', () => {
      cy.get('div.toggle-switch__indicator').should('have.class', 'is-toggled');
      cy.get('div.weather-card__toggle').click();
      cy.get('div.weather-card__toggle span.toggle-switch__on').should('not.exist');
      cy.get('div.weather-card__toggle span.toggle-switch__off').should('be.visible');
      cy.get('div.toggle-switch__indicator').should('not.have.class', 'is-toggled');

      cy.get('div.weather-card__toggle').click();
      cy.get('div.weather-card__toggle span.toggle-switch__on').should('be.visible');
      cy.get('div.weather-card__toggle span.toggle-switch__off').should('not.exist');
      cy.get('div.toggle-switch__indicator').should('have.class', 'is-toggled');
    });

    context('with change degree type', () => {
      beforeEach(() => {
        cy.get('div.weather-card__toggle').click();
      });

      it('should show correct info on the weather card', () => {
        cy.get('div.weather-card').should('have.length', 1);
        cy.get('div.weather-card .weather-card__title').and('have.text', 'Current Weather');

        cy.get('div.weather-card div.weather-card__status-name').and('have.text', 'Ho Chi Minh City');
        cy.get('div.weather-card__status span.temperature').and('have.text', '91°');
        cy.get('div.weather-card__status div.weather-card__status-desc').and('have.text', 'scattered clouds');

        cy.get('div.weather-card__info div.weather-card__info-feels-like').should('have.text', 'Feels like 97°');
        cy.get('div.weather-card__info div.weather-card__info-temp-degree div.weather-degree span.temperature').then(
          $item => {
            expect($item, '2 items').to.have.length(2);
            expect($item.eq(0), 'first item').to.contain('91°');
            expect($item.eq(1), 'second item').to.contain('91°');
          },
        );
        cy.get('div.weather-card__info div.weather-card__info-detail').then($item => {
          expect($item, '3 items').to.have.length(3);

          expect($item.eq(0), 'Humidity').to.contain('Humidity');
          expect($item.eq(0).find('span').text()).to.equal('49%');

          expect($item.eq(1), 'Wind').to.contain('Wind');
          expect($item.eq(1).find('span').text()).to.equal('7 mph');

          expect($item.eq(2), 'Pressure').to.contain('Pressure');
          expect($item.eq(2).find('span').text()).to.equal('1006 hPa');
        });
      });
    });
  });
});
