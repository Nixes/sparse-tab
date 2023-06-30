<template>
  <div class="dark-theme use-white-add-icon win" style="--tile-title-color:rgba(248,249,250,1); --icon-background-color:rgba(32,33,36,1);">
    <div id="links">
      <div class="link" v-for="link in links" :key="link.url">
        <link-component :link="link"></link-component>
      </div>
    </div>
    <div class="clear-both"></div>
  </div>
</template>

<script>
import LinkComponent from "@/components/LinkComponent";
import * as browser from "webextension-polyfill";
export default {
  name: 'NewTab',
  components: {LinkComponent},
  data () {
    return {
      links: []
    }
  },
  async mounted () {
    this.links = await this.getLinks();
  },
  methods: {
    getFaviconImageSrc (url) {
      return `chrome://favicon/size/48/${url}`;
    },
    async getLinks () {
      const topSites = await browser.topSites.get();
      const links = topSites.map((topSite)=>{
        return {
          url: topSite.url,
          icon: this.getFaviconImageSrc(topSite.url),
          title: topSite.title
        }
      });
      return links;
    }
  },
  computed: {

  }
}
</script>

<style>
body {
  background: rgb(53, 54, 58);
  height: 100%;
  width: 100%;
  margin: 0;
  display: block;
}

body * {
  /* Default font families for Linux and ChromeOS. */
  font-family: 'Roboto', arial, sans-serif;
}

.win * {
  /* Default font families for Windows */
  font-family: 'Segoe UI', 'Roboto', arial, sans-serif;
}

.mac * {
  /* Default font families for MacOS */
  font-family: system-ui, BlinkMacSystemFont, 'Roboto', arial, sans-serif;
}

/* Removes blue focus ring on mouse navigation */
.mouse-navigation {
  outline: none;
}

#links {
  margin: 50px auto 0;
  max-width: 800px;
}

.clear-both{
  clear:both;
}
</style>
