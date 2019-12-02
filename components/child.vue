<template>
  <div>Child</div>
</template>

<script>
import PubSub from 'pubsub-js'
export default {
  data(){
    return{
      childData:'child'
    }
  },
  props:['five','eight'],
  methods:{
    four(){
      return 44
    }
  },
  async mounted(){
    this.$emit('one',this.childData)
    await this.$bus.$emit('two',22)
    await this.$root.bus.$emit('seven',77)
    this.$emit('three',33)
    this.$emit('update:five',55)
    this.$emit('input',66)
    this.eight(88)
    this.$parent.nine=99
    PubSub.publish('ten',1010)
    window.localStorage.setItem('eleven',1111)
    this.$store.commit('setTwelve',1212)
  }

}
</script>

<style>

</style>