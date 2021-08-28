/* global cy */
import { mount } from '../utils/remount'
import Button from './Button'

it('Can render Button component', () => {
  mount(<Button title="Click Me!"></Button>)

  cy.get('button').should('not.have.text', 'Hello World')
  cy.get('button').contains('Click Me!').click()
})
