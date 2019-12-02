<template>
  <div class="home">
    home
    {{nine}}
    {{ten}}
    <Child @one="one" 
    ref="child" 
    :five.sync="fiveChild" 
    v-model="six" 
    :eight='eight'></Child>
  </div>
</template>

<script>
import Child from "@/components/child";
import PubSub from 'pubsub-js'
import {mapState} from 'vuex'
export default {
  name: "home",
  data() {
    return {
      fiveChild: null,
      six: null,
      nine:null,
      ten:null,
      eleven:null
    };
  },
  computed:mapState({
    twelve:state=>state.twelve
  }),
  components: {
    Child
  },
  methods: {
    one(data) {
      console.log("one", data);//自定义指令
    },
    eight(data){
      console.log("eight", data);//v-bind
    }
  },
  created() {
    this.$bus.$on("two", data => {
      console.log("two", data);//$bus，有一插件vue-bus,用法同$bus
    });
    this.$root.bus.$on("seven", data => {
      console.log("seven", data);//$root
    });
  },
  mounted() {
    this.$refs.child.$on("three", data => {
      console.log("three", data);//ref,调$emit
    });
    let data = this.$refs.child.four();
    console.log("four", data);//ref,直接调用函数
    PubSub.subscribe('ten',(msg,ten)=>{
      this.ten=ten
    })
    this.eleven=window.localStorage.getItem('eleven')
    console.log('eleven',this.eleven)
  },
  updated() {
    console.log("five", this.fiveChild);//.sync实现
    console.log("six", this.six);//v-model实现
    console.log('nine',this.nine)//$parent
    console.log('twelve',this.twelve)//vuex
    //路由也可传参，但不可用到子父
  }
};
</script>
