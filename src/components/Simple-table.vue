<template>
  <div>
  <h2 class="subtitle">Simple Table Demo</h2>
  <p>Vue-good-table lets you easily and quickly create tables based on your data. These demos are generated using the following data. find Usage details at the <a href="https://github.com/xaksis/vue-good-table">github readme</a></p>
  <h2 class="subtitle"></h2>
<pre v-highlightjs><code class="javascript">data () {
    return {
      columns: [
          {
            label: 'Name',
            field: 'name',
          },
          {
            label: 'Age',
            field: 'age',
            type: 'number',
          },
          {
            label: 'Joined On',
            field: 'joined',
            type: 'date',
            inputFormat: 'YYYYMMDD',
            outputFormat: 'MMM Do YYYY',
          },
        ],
      rows: [
        {name:"John", age:20, joined: '20120201'},
        {name:"Jane", age:24, joined: '20120305'},
        {name:"Susan", age:16, joined: '20140823'},
        {name:"Chris", age:55, joined: '20161109'},
        {name:"Dan", age:40, joined: '20170612'},
      ],
    };
  }
</code></pre>
    <vue-good-table
      title="Simple Table"
      :columns="columns"
      :rows="rows"/>
<pre v-highlightjs><code class="html">&lt;vue-good-table
  title=&quot;Simple Table&quot;
  :columns=&quot;columns&quot;
  :rows=&quot;rows&quot;/&gt;
</code></pre>
    <vue-good-table
      title="Simple Table with Line Numbers"
      :columns="columns"
      :rows="rows"
      :lineNumbers="true"/>
<pre v-highlightjs><code class="html">&lt;vue-good-table
  title=&quot;Simple Table with Line Numbers&quot;
  :columns=&quot;columns&quot;
  :rows=&quot;rows&quot;
  :lineNumbers=&quot;true&quot;/&gt;
</code></pre>
    <vue-good-table
      title="Paginated Table"
      :columns="columns"
      :rows="rowsPaginate"
      :paginate="true"
      :lineNumbers="true"/>
<pre v-highlightjs><code class="html">&lt;vue-good-table
  title=&quot;Paginated Table&quot;
  :columns=&quot;columns&quot;
  :rows=&quot;rowsPaginate&quot;
  :paginate=&quot;true&quot;
  :lineNumbers=&quot;true&quot;/&gt;
</code></pre>
  </div>
</template>

<script>
export default {

  name: 'Simple-table',

  data () {
    return {
      columns: [
          {
            label: 'Name',
            field: 'name',
          },
          {
            label: 'Age',
            field: 'age',
            type: 'number',
          },
          {
            label: 'Joined On',
            field: 'joined',
            type: 'date',
            inputFormat: 'YYYYMMDD',
            outputFormat: 'MMM Do YYYY',
          },
        ],
      rows: [
        {name:"John", age:20, joined: '20120201'},
        {name:"Jane", age:24, joined: '20120305'},
        {name:"Susan", age:16, joined: '20140823'},
        {name:"Chris", age:55, joined: '20161109'},
        {name:"Dan", age:40, joined: '20170612'},
      ],
        rowsPaginate: [
          {name:"John", age:20, joined: '20120201'},
          {name:"Jane", age:24, joined: '20120305'},
          {name:"Susan", age:16, joined: '20140823'},
          {name:"Chris", age:55, joined: '20161109'},
          {name:"Dan", age:40, joined: '20170612'},

          {name:"Jay", age:20, joined: '20120201'},
          {name:"Seah", age:24, joined: '20120305'},
          {name:"Sarah", age:16, joined: '20140823'},
          {name:"Mohit", age:55, joined: '20161109'},
          {name:"Don", age:40, joined: '20170612'},

          {name:"Ernesto", age:20, joined: '20120201'},
          {name:"Clark", age:24, joined: '20120305'},
          {name:"Monty", age:16, joined: '20140823'},
          {name:"Priya", age:55, joined: '20161109'},
          {name:"Sans", age:40, joined: '20170612'},
        ],
    };
  }
};
</script>

<style lang="css" scoped>
</style>