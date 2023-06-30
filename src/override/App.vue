<template>
  <new-tab></new-tab>
</template>

<script>
import NewTab from "@/components/NewTab";

export default {
  name: 'App',
  created() {
    document.title = "Sparse New Tab";
  },
  components: {NewTab }
}
</script>
