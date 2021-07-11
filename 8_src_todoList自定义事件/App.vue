<template>
    <div class="todo-container">
        <div class="todo-wrap">
            <!-- <Header :addTodo="addTodo" /> -->
            <Header @add-todo="addTodo" />
            <List :todos="todos" :updateTodo="updateTodo" :deleteTodo="deleteTodo" />
            <Footer :todo="todos" :deleteAll="deleteAll" :updateAll="updateAll" />
        </div>
    </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

export default {
    name: "App",
    data() {
        const localData = localStorage.getItem("todo")
        let todos;
        try {
            todos = JSON.parse(localData)
        } catch (error) {
            alert("本地缓存数据异常！")
            localStorage.removeItem("todo")
        }
        return {
            todos:todos
        };
    },
    methods: {
        // 添加一个todo
        addTodo(todoObj) {
            this.todos.unshift(todoObj);
        },
        // 更新一个todo
        updateTodo(id, done) {
            this.todos = this.todos.map((todoObj) => {
                if (todoObj.id === id) {
                    return { ...todoObj, done };
                } else {
                    return todoObj;
                }
            });
        },
        // 删除一个todo
        deleteTodo(id) {
            this.todos = this.todos.filter((todoObj) => {
                return todoObj.id !== id;
            });
        },
        // 全选或全不选
        updateAll(done) {
            this.todos = this.todos.map((todo) => {
                return { ...todo, done };
            });
        },
        // 全部删除
        deleteAll() {
            this.todos = this.todos.filter((todoObj) => {
                return todoObj.done === false;
            });
        },
    },
    // 注册组件--局部注册
    components: { Header, List, Footer },
    mounted() {
        localStorage.setItem("todo", JSON.stringify(this.todos));
    },
    watch: {
        // 深度监视之前的不能检测数组的状态没能复现
        todos(value) {
            localStorage.setItem("todo", JSON.stringify(value));
        },
        /* todos:{
            deep:true,
            handele(value) {
                console.log(value);
            }
        } */
    },
};
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>
