/*
 * @Author: yyao
 * @Date: 2020-04-13 09:31:25
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-13 09:31:26
 * @Description: 文件描述
 */
<template>
    <div>
        <div id="app">
        {{ message }}
        </div>
        <div id="app-3">
            <p v-if="seen">现在你看到我了</p>
        </div>
        <div id="app-4">
            <ol>
                <li v-for="(item, index) in todos" v-bind:key="index">
                    {{ item.text }}
                </li>
            </ol>
        </div>
        <div id="app-5">
            <p>{{ message }}</p>
            <button v-on:click="reverseMessage">反转消息</button>
        </div>
        <div id="app-6">
        <p>{{ message }}</p>
        <input v-model="message">
        </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      message: "Hello Vue yoyo!",
      seen: true,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" },
      ],
      groceryList: [
        { id: 0, text: "蔬菜" },
        { id: 1, text: "奶酪" },
        { id: 2, text: "随便其它什么人吃的东西" },
      ],
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    },
  },
});
</script>
