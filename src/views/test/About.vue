<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3> the data is {{ data }}</h3>
    <div>{{num}}</div>
    <button @click="addTest">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: '',
      num: 0
    }
  },
  created: function () {
    this.getData()
  },
  methods: {
    getData: async function () {
      let data = await this.$api.test.getTest()
      this.$set(this.$data, 'data', data)
    },
    addTest: function() {
      this.$store.dispatch('increment')
      this.$set(this.$data, 'num', this.$store.state.count)
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  h3 {
    color: red;
  }
}
</style>
