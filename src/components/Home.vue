<template>
  <div class="container is-fluid">
    <div class="main-content">
      <aside class="menu">
        <p class="menu-label">Vue Good Table</p>
        <ul class="menu-list">
          <li>
            <router-link :to="{name: 'simple-table'}" active-class="is-active">Simple Table</router-link>
          </li>
          <li><a>Table Styles</a></li>
          <li><a>Filtering</a></li>
        </ul>
        <p class="menu-label">Vue Good Wizard</p>
        <ul class="menu-list">
          <li><a>Simple Wizard</a></li>
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
    margin-top:  20px;
  }
  .hljs{
    background: #32363D;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 16px;
  }
</style>
