<template>
  <div>
    <div id="app">
      <TheHeader @sidenavToggle=" displaySideNav = !displaySideNav" />
      <TheSidenav
        :show="displaySideNav"
        @close="displaySideNav = false"
      />
      <Nuxt />
    </div>
  </div>
</template>

<script>

export default {
  middleware: ['checkAuth', 'auth'],
  data () {
    return {
      displaySideNav: false
    }
  }
}

</script>
