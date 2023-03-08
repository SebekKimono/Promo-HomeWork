const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://promo.com',
    viewportWidth: 1440
  },
})