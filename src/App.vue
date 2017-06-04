<template>
  <div id="app">
    <nav class="nav has-shadow">
      <div class="nav-left">
        <a href="" class="nav-item">
          <img src="./assets/logo.png" alt="vue-goods logo" />
        </a>
      </div>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/initial-variables";
    $primary: #5EB1D2;

    @import '~bulma/bulma.sass';
</style>
