<template>
  <div class="link">
    <a :href="link.url">
      <div class="link-icon-container"><img class="link-icon" :src="link.icon"></div>
      <p class="link-text">{{ link.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'LinkComponent',
  props: {
    link: {
      url: String,
      icon: String,
      title: String
    }
  },
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
.link {
  margin: 0 6px 12px;
  float:left;
}

.link a {
  opacity: 0.8;
  display: block;
  width: 100px;
  height: 100px;
  text-decoration: none;
}

.link-text {
  text-overflow: ellipsis;
  color: white;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
}

.link-icon-container {
  padding: 10px;
  border: 1px solid white;
  background: white;
  border-radius: 5px;
  margin: 0 auto;
  width: 30px;
}

.link a:hover {
  opacity: 1;
}

.link-icon {
  width: 30px;
  height:30px;
  margin: 0 auto;
  display:block;
}
</style>
