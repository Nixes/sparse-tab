<template>
  <div>
    <h1>This is a test new tab page</h1>
    <p>{{ defaultText }}</p>
  </div>
</template>

<script>
export default {
  name: 'NewTab',
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
