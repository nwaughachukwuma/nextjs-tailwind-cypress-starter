import { mount } from '@cypress/react'
import Home from '../../../pages/index'

it('Renders home page', () => {
  mount(<Home />)
  cy.contains('Welcome to Next.js')
  cy.get('title').should('have.text', 'Components App')
})
