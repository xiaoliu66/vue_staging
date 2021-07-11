<template>
    <div class="todo-footer">
        <label>
            <!-- 点击事件实现全选、全不选 -->
            <!-- <input type="checkbox" :checked="isAllDone" @click="checkAll" /> -->
            <input type="checkbox" v-model="isAll" />
        </label>
        <span>
            <span>已完成{{ finished }}</span>
            / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="deleteAllItem">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name: "Footer",
    props: ["todo", "deleteAll", "updateAll"],
    methods: {
        checkAll(event) {
            // if (this.isAllDone) {
            //     this.todo.forEach((t)=>{
            //         t.done = false;
            //     })
            // }else {
            //     this.todo.forEach((t)=>{
            //         t.done = true;
            //     })
            // }
            this.updateAll(event.target.checked);
        },
        deleteAllItem() {
            if (confirm("确定要全部删除吗？")) {
                this.deleteAll();
            }
        },
    },
    computed: {
        finished() {
            let num = 0;
            // console.log(this.todo);
            this.todo.forEach((t) => {
                if (t.done) {
                    num++;
                }
            });
            return num;
        },
        total() {
            return this.todo.length;
        },
        isAllDone() {
            return this.finished == this.total && this.total > 0;
        },
        isAll: {
            set(flag) {
                this.updateAll(flag);
            },
            get() {
                return this.finished == this.total && this.total > 0;
            },
        },
    },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
