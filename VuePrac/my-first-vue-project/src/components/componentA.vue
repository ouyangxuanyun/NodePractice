<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="onClickMe">open mouse!</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      msg: 'componetA : Hello World!'
    }
  },
  props: ['msgfromfather'],
  events:{
    'onAddnew':function () {
      console.log((items));
    }
  },
  methods: {
    onClickMe:function () {
      console.log(this.msgfromfather);
      this.$emit('child-tell-me-sth', this.msg);
      //this.$dispatch('child-tell-me-sth', this.msg);已经取消
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
