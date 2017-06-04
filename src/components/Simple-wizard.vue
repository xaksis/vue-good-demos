<template>
<div>
  <h2 class="subtitle">Simple Wizard Demo</h2>
  <p>vue-good-wizard is a simple stepper plugin for vue 2.x. Usage details at <a href="https://github.com/xaksis/vue-good-wizard">github project</a></p>
  <h2 class="subtitle"></h2>
  <vue-good-wizard 
    ref="wizard"
    :steps="steps">
    <div slot="page1">
      <h4>Step 1</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quisquam harum quod et voluptate inventore molestias eius quae dolorem distinctio, ipsum veritatis est reiciendis odio commodi consectetur repellendus quia quibusdam.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt cumque labore fugit, delectus omnis laboriosam beatae, quam ipsum minima magni perspiciatis dignissimos cum accusamus odit quia modi? Incidunt, repellendus, ex.</p>
    </div>
    <div slot="page2">
      <p>This is slot 2</p>
    </div>
    <div slot="page3">
      <h4>Step 3</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio expedita laborum porro ut officiis qui error, ab blanditiis dolorem labore veritatis, autem iste, obcaecati quidem, vitae minus quas optio animi.</p>
      
      <div class="field">
        <label class="label" for="">Username</label>
         <p class="control">
            <input class="input" type="text">
         </p>
      </div>
      <div class="field">
        <label class="label" for="">Password</label>
        <p class="control">
          <input class="input" type="text">
        </p>
      </div>
    </div>
    <div slot="page4">
      <p>This is slot 4</p>
    </div>
  </vue-good-wizard>

<pre v-highlightjs><code class="html">&lt;template&gt;
&lt;div&gt;
  &lt;vue-good-wizard 
    ref=&quot;wizard&quot;
    :steps=&quot;steps&quot;&gt;
    &lt;div slot=&quot;page1&quot;&gt;
      &lt;!-- step 1 stuff here --&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;page2&quot;&gt;
      &lt;!-- step 2 stuff here --&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;page3&quot;&gt;
      &lt;!-- step 3 stuff here --&gt;
    &lt;/div&gt;
    &lt;div slot=&quot;page4&quot;&gt;
      &lt;!-- step 4 stuff here --&gt;
    &lt;/div&gt;
  &lt;/vue-good-wizard&gt;

&lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  name: 'Simple-wizard',

  data () {
    return {
      steps: [
        {
          label: 'Select Items',
          slot: 'page1',
        },
        {
          label: 'Add Constraints',
          slot: 'page2',
        },
        {
          label: 'Review',
          slot: 'page3',
        },
        {
          label: 'Apply',
          slot: 'page4',
        }
      ],
    };
  }
};
&lt;/script&gt;
</code></pre>

</div>
</template>

<script>
export default {

  name: 'Simple-wizard',

  data () {
    return {
      steps: [
        {
          label: 'Select Items',
          slot: 'page1',
        },
        {
          label: 'Add Constraints',
          slot: 'page2',
        },
        {
          label: 'Review',
          slot: 'page3',
        },
        {
          label: 'Apply',
          slot: 'page4',
        }
      ],
    };
  }
};
</script>

<style lang="css" scoped>
.hljs{
  margin-top:  20px;
}
</style>