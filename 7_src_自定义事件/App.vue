<template>
    <div class="app">
        <h2>我是App组件</h2>
        <!-- 
            给Demo的组件实例对象定义一个事件，
            只要Demo组件实例对象触发了事件，那么就会调用test函数
            推荐使用第一种
            自定义事件的第一种方式：给Demo组件实例绑定一个自定义事件：haha
            <Demo @haha="test"/>

            自定义事件的第一种方式：给Demo组件实例绑定一个自定义事件：haha
         -->
        <!-- <Demo @haha="test" /> -->
        <Demo ref="demo"/>
    </div>
</template>

<script>
import Demo from "./components/Demo.vue";

export default {
    name: "App",
    data() {},
    methods: {
        test(x) {
           console.log("haha被调用,收到的值为：",x);
        },
    },
    // 注册组件--局部注册
    components: { Demo },
    mounted() {
        this.$refs.demo.$on("haha",this.test)
    }
};
</script>

<style>
.app {
    background-color: gray;
    padding: 10px;
}
</style>
