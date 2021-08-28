import * as React from 'react'
import { mount } from '@cypress/react'
import Home from './index'

it('Renders home page', () => {
  mount(<Home />)
  cy.contains('Welcome to Next.js')
  cy.get('title').should('have.text', 'Components App')
})
