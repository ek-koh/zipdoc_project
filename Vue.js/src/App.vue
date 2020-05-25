<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div ref="tableau" class="center"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hello Tableau Fans!',
      url: "http://public.tableau.com/views/__15868688937150/1_2",
      options: {
        hideTabs: true
      }
    }
  },
  methods: {
    initViz: function () {
      let viz = new tableau.Viz(this.$refs.tableau, this.url, this.options);
    }
  },
  mounted: function() {
    this.initViz()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

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
