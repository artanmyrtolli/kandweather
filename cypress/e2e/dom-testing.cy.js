describe('dom-testing.cy.js', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/city-data', {fixture: 'city-data'})
    // -- AQI -- //
    cy.intercept('GET', 'https://api.airvisual.com/v2/city?city=denver&state=colorado&country=USA&key=3617f6f0-f606-4129-baf0-af48064ad14a', {fixture: 'air-quality-den'})
    cy.intercept('GET', 'https://api.airvisual.com/v2/city?city=providence&state=rhode island&country=USA&key=3617f6f0-f606-4129-baf0-af48064ad14a', {fixture: 'air-quality-prov'})
    // -- Weather Links -- //
    cy.intercept('GET', 'https://api.weather.gov/points/39.7392,-104.9903', {fixture: 'weather-link-den'})
    cy.intercept('GET', 'https://api.weather.gov/points/41.8081,-71.415', {fixture: 'weather-link-prov'})
    // -- Weather Data -- //
    cy.intercept('GET', 'https://api.weather.gov/gridpoints/BOU/62,61/forecast', {fixture: 'weather-data-den'})
    cy.intercept('GET', 'https://api.weather.gov/gridpoints/BOX/63,49/forecast', {fixture: 'weather-data-prov'})
    // -- Weather Hourly -- //
    cy.intercept('GET', 'https://api.weather.gov/gridpoints/BOU/62,61/forecast/hourly', {fixture: 'hourly-data-den'})
    cy.intercept('GET', 'https://api.weather.gov/gridpoints/BOX/63,49/forecast/hourly', {fixture: 'hourly-data-prov'})

    cy.visit('http://localhost:3000/').wait(2000)
  })

    it('Should have a Header that displays KAND Weather', () => {
      cy.get('h1').contains('KAND Weather')
    })

    it('Should show Denver, Colorado as the home city on page load', () => {
      cy.get('main h1').contains('Denver, Colorado')
    })

    it('Should have 7 weather cards for Denver', () => {
      cy.get('.weatherCard-box').should('have.length', 7)
    })

    it('Should display air quality index for Denver', () => {
      cy.get('.aqi-wrapper h2').should('exist')
    })

    it('Should get the next 24 hours weather info on click of the 24 hour button', () => {
      cy.get('.nav-link').eq(1).click()
      cy.get('.hour-details').should('have.length', 6)
    })

    it('Should display Providence, Rhode Island when City and State are selected from the drop downs', () => {
    // cy.get('main h1').contains('Providence, Rhode Island')
      cy.get('select').should('have.length', 2)
      cy.get('select').first().select(1)
      cy.get('select').last().select(5)
      cy.get('form button').click()
      cy.get('main h1').contains('Providence, Rhode Island')
    })

    it('Should have 7 weather cards for Rhode Island', () => {
      cy.get('select').first().select(1)
      cy.get('select').last().select(5)
      cy.get('form button').click()
      cy.get('.weatherCard-box').should('have.length', 7)
    })

    it('Should display air quality index for Rhode Island', () => {
      cy.get('select').first().select(1)
      cy.get('select').last().select(5)
      cy.get('form button').click()
      cy.get('.aqi-wrapper h2').should('exist')
    })

    it('Should get the next 24 hours weather info on click of the 24 hour button', () => {
      cy.get('select').first().select(1)
      cy.get('select').last().select(5)
      cy.get('form button').click()
      cy.get('.nav-link').eq(1).click()
      cy.get('.hour-details').should('have.length', 6)
    })

})
