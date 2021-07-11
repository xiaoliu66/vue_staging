<template>
  <div class="demo1">
      <h2>我是Demo1组件</h2>
      收到Demo2组件传递的信息：{{name}}
  </div>
</template>

<script>
export default {
    name:'Demo1',
    data() {
        return {
            name:''
        }
    },
    methods:{
        test1(x){
            console.log('Demo1收到了数据：',x);
            this.name = x
        }
    },
    mounted() {
        this.$bus.$on('nice',this.test1)
    },
}
</script>

<style>
    .demo1 {
        background-color: yellow;
    }
</style>