<template>
  <div ref="tableau"></div>
</template>

<script>
export default {
  name: 'Supply',
  data() {
    return {
        url: "https://public.tableau.com/views/__15901313482030/sheet0",
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
