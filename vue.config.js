const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    options: {
      template: 'public/browser-extension.html',
      entry: './src/options/main.js',
      title: 'Options'
    },
    override: {
      template: 'public/browser-extension.html',
      entry: './src/override/main.js',
      title: 'Override'
    },
    standalone: {
      template: 'public/browser-extension.html',
      entry: './src/standalone/main.js',
      title: 'Standalone',
      filename: 'index.html'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {}
    }
  }
})
