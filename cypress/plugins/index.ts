import injectDevServer from '@cypress/react/plugins/next'

const config: Cypress.PluginConfig = (on, config) => {
  return injectDevServer(on, config)
}

export default config
