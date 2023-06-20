<script>
  import AppMain from "./components/AppMain.vue"
  import AppHeader from "./components/AppHeader.vue"
  import AppSearch from "./components/AppSearch.vue"

  export default{
    name: "App",
    components: {
      AppHeader,
      AppMain,
      AppSearch
    }
  }
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
  @import "./styles/general.scss";
</style>
