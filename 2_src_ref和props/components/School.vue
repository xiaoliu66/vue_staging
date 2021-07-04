<template>
    <div>
        <h2 class="name">学校名：{{ name }}</h2>
        <h2 class="address">学校地址：{{ address }}</h2>
        <h3>我收到的名字是{{username}}</h3>
    </div>
</template>

<script>
export default {
    // 配置数据
    data() {
        return {
            name: "家里蹲大学",
            address: "家",
        };
    },
    // 声明接收props---完整写法
    /* props: {
        username: {
            type: String, // 类型
            required: true, // 必要性
            default: "老王", // 默认值
        },
    }, */

    // 声明接收props 次完整写法
    /* props: {username:String}, */
    // 声明接收props 精简写法:啥也不限制
    props:['username']
};
</script>

<style>
.name {
    background-color: aqua;
}

.address {
    background-color: oldlace;
}
</style>
