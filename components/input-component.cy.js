import InputComponent from './input-component.vue'

describe('<InputComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(InputComponent)
  })
})