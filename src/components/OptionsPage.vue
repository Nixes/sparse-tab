<template>
  <div>
    <h1>This is an options page</h1>
  </div>
</template>

<script>
export default {
  name: 'OptionsPage',
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
