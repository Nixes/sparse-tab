<template>
  <div>
<!-- allow selecting the number of bookmarks to show -->
    <h1>Number of bookmarks or top pages to show</h1>
    <select v-model="numberBookmarks">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="20">20</option>
      <option value="40">40</option>
      <option value="80">80</option>
    </select>
  </div>
</template>

<script>
import * as browser from "webextension-polyfill";

export default {
  name: 'OptionsPage',
  data () {
    return {
      numberBookmarks: 5,
    }
  },
  async mounted () {
    let {numberBookmarks} = await browser.storage.local.get();
    this.numberBookmarks = numberBookmarks;
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  },
  watch: {
    numberBookmarks: function (val) {
      browser.storage.local.set({numberBookmarks: val})
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
