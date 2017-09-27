<template>
  <div class="container is-fluid">
    <div class="main-content">
      <aside class="menu">
        <p class="menu-label menu-label--top">Vue Good Table</p>
        <ul class="menu-list">
          <li>
            <router-link :to="{name: 'simple-table'}" active-class="is-active">Simple Table</router-link>
          </li>
          <li>
            <router-link :to="{name: 'table-styles'}" active-class="is-active">Table Styles</router-link>
          </li>
          <li>
            <router-link :to="{name: 'table-filters'}" active-class="is-active">Table Filters</router-link>
          </li>
          <li>
            <router-link :to="{name: 'dynamic-table'}" active-class="is-active">Customize Table</router-link>
          </li>
        </ul>
        <p class="menu-label">Vue Good Wizard</p>
        <ul class="menu-list">
          <li>
            <router-link :to="{name: 'simple-wizard'}" active-class="is-active">Simple Wizard</router-link>
          </li>
        </ul>
      </aside>
      <div class="demo-holder">
        <router-view>
          Welcome to Vue Goods! A few components that I developed while experimenting with Vue. 
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  $menu-width: 250px;
  .menu{
    position:  absolute;
    max-width:  $menu-width;
    left:  0px;
  }
  .main-content{
    position:  relative;
    padding-left:  $menu-width + 20px;
    margin-top:  50px;
  }
  .hljs{
    background: #32363D;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 16px;
  }
</style>
