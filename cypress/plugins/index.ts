const injectDevServer = require('@cypress/react/plugins/next')

const config: Cypress.PluginConfig = (on, config) => {
  injectDevServer(on, config)
  return config
}

export default config
