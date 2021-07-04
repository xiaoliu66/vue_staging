<template>
    <!-- 
      ref的使用：
        1.标签中直接编写 ref='xxx'
        2.通过this.$refs.xxx读取
        3.备注：
          1.若给html内置标签标记ref,则获取的是真实Dom节点
          2.若给组件标签标记ref,则获取到的是组件实例对象

     -->
    <div>
        <button ref="btn" @click="showData">点我提示信息</button>
        <!-- input标签添加ref,intput是html内置的标签，可以通过this.$refs.keyword 获取到的是真实的dom节点 -->
        <input type="text" ref="keyword" />
        <!-- school标签打了一个ref,shcool标签是组件，可以通过this.$refs.xuexiao 获取到的是组件实例 -->
        <School ref="xuexiao" :username="username" />
    </div>
</template>

<script>
// 引入School组件
import School from "./components/School.vue";

export default {
    data() {
        return {
            msg: "哈哈哈",
            username: "小刘",
        };
    },
    methods: {
        showData() {
            // alert(this.msg)
            // 输出输入框中的值
            // console.log(this.$refs.keyword.value);

            // 输出按钮上的文字信息
            // console.log(this.$refs.btn.innerText);

            // 点击按钮，焦点集中于输入框
            this.$refs.keyword.focus();

            console.log(this.$refs.xuexiao);
        },
    },
    // 注册组件--局部注册
    components: { School },
};
</script>

<style></style>
