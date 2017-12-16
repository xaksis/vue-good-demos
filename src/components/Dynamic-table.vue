<template>
  <div>
  <h2 class="subtitle">Custom Rows</h2>
  <p>Vue-good-table allows customizing rows by letting you provide your own templates for them</p>

<vue-good-table
  title="Dynamic Rows"
  :columns="columns"
  :rows="rows"
  :lineNumbers="true"
  :paginate="true"
  :defaultSortBy="{field: 'age', type: 'asc'}"
  :globalSearch="true"
  styleClass="table table-bordered table-striped">
  <template slot="table-row" slot-scope="props">
    <td class="fancy">{{ props.row.name }}</td>
    <td class="has-text-right">{{ props.row.age }}</td>
    <td class="has-text-right">{{ props.formattedRow.joined }}</td>
    <td class="has-text-right">{{ props.row.originalIndex }}</td>
    <td class="has-text-right">{{ props.index }}</td>
  </template>
</vue-good-table>
<pre v-highlightjs><code class="html" v-pre>&lt;vue-good-table
  title=&quot;Dynamic Rows&quot;
  :columns=&quot;columns&quot;
  :rows=&quot;rows&quot;
  :lineNumbers=&quot;true&quot;
  :defaultSortBy=&quot;{field: 'age', type: 'asc'}&quot;
  :globalSearch=&quot;true&quot;
  styleClass=&quot;table table-bordered table-striped&quot;&gt;
  &lt;template slot=&quot;table-row&quot; slot-scope=&quot;props&quot;&gt;
    &lt;td class=&quot;fancy&quot;&gt;{{ props.row.name }}&lt;/td&gt;
    &lt;td class=&quot;has-text-right&quot;&gt;{{ props.row.age }}&lt;/td&gt;
    &lt;td class=&quot;has-text-right&quot;&gt;{{ props.formattedRow.joined }}&lt;/td&gt;
    &lt;td class=&quot;has-text-right&quot;&gt;{{ props.row.originalIndex }}&lt;/td&gt;
    &lt;td class=&quot;has-text-right&quot;&gt;{{ props.index }}&lt;/td&gt;
  &lt;/template&gt;
</code></pre>
    <h2 class="subtitle">
      Custom Columns
    </h2>
    <p>Sometimes you might also need to customize the column headers. Vue-good-table allows you do to that via slots</p>
<vue-good-table
  :columns="columns"
  :paginate="true"
  :rows="rows">
  <template slot="table-column" slot-scope="props">
     <span v-if="props.column.field =='name'">
        <i class="fa fa-user"></i> {{props.column.label}}
     </span>
     <span @click="sayHello()" v-else-if="props.column.field == 'joined'">
        <i class="fa fa-calendar"></i> {{props.column.label}}
     </span>
     <span v-else>
        {{props.column.label}}
     </span>
  </template>
  <template slot="table-row-after" slot-scope="props">
    <td class="has-text-right">{{ props.row.originalIndex }}</td>
    <td class="has-text-right">{{ props.index }}</td>
  </template>
</vue-good-table>
<pre v-highlightjs><code class="html" v-pre>&lt;vue-good-table
  :columns=&quot;columns&quot;
  :paginate=&quot;true&quot;
  :rows=&quot;rows&quot;&gt;
  &lt;template slot=&quot;table-column&quot; slot-scope=&quot;props&quot;&gt;
     &lt;span v-if=&quot;props.column.field =='name'&quot;&gt;
        &lt;i class=&quot;fa fa-user&quot;&gt;&lt;/i&gt; {{props.column.label}}
     &lt;/span&gt;
     &lt;span @click=&quot;sayHello()&quot; v-else-if=&quot;props.column.field == 'joined'&quot;&gt;
        &lt;i class=&quot;fa fa-calendar&quot;&gt;&lt;/i&gt; {{props.column.label}}
     &lt;/span&gt;
     &lt;span v-else&gt;
        {{props.column.label}}
     &lt;/span&gt;
  &lt;/template&gt;
&lt;/vue-good-table&gt;
</code></pre>

  <h2 class="subtitle">Empty State</h2>
  <vue-good-table
  :columns="columns"
  :paginate="true"
  :rows="emptyRows" />
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
          {
            label: 'Original Index',
          },
          {
            label: 'Table Index',
          }
        ],
      rows: [
        {name:"John", age:20, joined: '20120201'},
        {name:"Jane", age:24, joined: '20120305'},
        {name:"Susan", age:16, joined: '20140823'},
        {name:"Chris", age:55, joined: '20161109'},
        {name:"Dan", age:40, joined: '20170612'},
      ],
      emptyRows: [],
    };
  },
  methods: {
    sayHello(){
      console.log('hello');
    }
  }
};
</script>

<style lang="css" scoped>
.fancy{
  background-color: #EAF7FD;
}
</style>