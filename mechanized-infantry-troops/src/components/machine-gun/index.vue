<template>
  <div>
    <el-input id="monday" placeholder="Please input" v-model="accountName"></el-input>
    <el-button type="primary" @click="triggerEvent">What happens</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accountName: ''
    }
  },
  methods: {
    triggerEvent() {
      const event = new Event('input')

      const el = document.querySelector('#monday')
      el.value = 'Week'
      // console.log(1)

      el.addEventListener(event.type, (e) => {

        e.target.value = 'value'
      // console.log(2)
      }, false)

      el.dispatchEvent(event)

      // el.dispatchEvent(new Event('input'))


    }
  },
  watch: {
    accountName: {
      handler(currValue, oriValue) {
        console.log({currValue, oriValue})
      },
      immediate: true,
    }
  }
}
</script>

<style>

</style>
