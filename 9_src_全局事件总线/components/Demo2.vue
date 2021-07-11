<template>
  <div class="demo2">
      <h2>我是Demo2组件</h2>
      <button @click="sendData">点我给Demo1传递数据</button>
  </div>
</template>

<script>
export default {
    name:'Demo2',
    methods:{
        sendData(){
            // 触发全局的nice事件
            this.$bus.$emit('nice','qqqq');
        }
    },
    /* mounted() {
        // 给$bus绑定一个haha事件
        this.$bus.$on("haha")
    }, */
}
</script>

<style>
    .demo2 {
        background-color: red;
    }
</style>