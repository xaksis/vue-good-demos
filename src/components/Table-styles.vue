<template>
<div>
  <h2 class="subtitle">Table Styles Demo</h2>
    <vue-good-table
      title="Condensed Table"
      :columns="columns"
      :paginate="true"
      :rows="rows"
      styleClass="table table-bordered condensed"/>
<pre v-highlightjs><code class="html">&lt;vue-good-table
  title=&quot;Condensed Table&quot;
  :columns=&quot;columns&quot;
  :paginate=&quot;true&quot;
  :rows=&quot;rows&quot;
  styleClass=&quot;table table-bordered condensed&quot;/&gt;
</code></pre>
  <vue-good-table
      title="Striped Table"
      :columns="columns"
      :paginate="true"
      :rows="rows"
      styleClass="table table-bordered table-striped condensed"/>
<pre v-highlightjs><code class="html">&lt;vue-good-table
  title=&quot;Condensed Table&quot;
  :columns=&quot;columns&quot;
  :paginate=&quot;true&quot;
  :rows=&quot;rows&quot;
  styleClass=&quot;table table-bordered table-striped condensed&quot;/&gt;
</code></pre>
</div>
</template>

<script>
export default {

  name: 'Table-styles',

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