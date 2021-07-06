<template>
    <li @mouseenter="updateIsEnter(true)" @mouseleave="updateIsEnter(false)" :class="{ 'high-light': isEnter }">
        <label>
            <input :checked="todo.done" type="checkbox" />
            <span>{{ todo.name }}</span>
        </label>
        <button class="btn btn-danger" :style="{ display: isEnter ? 'block' : 'none' }">删除</button>
    </li>
</template>

<script>
export default {
    name: "Item",
    props: ["todo"],
    data() {
        return {
            isEnter: false,
        };
    },
    methods: {
        updateIsEnter(flag) {
            // console.log(flag);
            this.isEnter = flag;
        },
    },
};
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

.high-light {
    background-color: #ddd;
}
</style>
