<template>
  <div ref="tableau"></div>
</template>

<script>
export default {
  name: 'Demand',
  data() {
    return {
        msg: 'Hello Tableau Fans!',
        url: "https://public.tableau.com/views/__15901313482030/sheet1",
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
  mounted: function () {
      this.initViz()
  }
}
</script>

