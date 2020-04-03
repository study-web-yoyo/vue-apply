/*
 * @Author: yangyao
 * @Date: 2020-04-01 17:27:43
 * @LastEditors: yangyao
 * @LastEditTime: 2020-04-03 16:58:27
 * @Description: 文件描述
 */
import Vue from "vue";
import "./todo";
import { add } from "yoyo-web-common/lib/utils/string";

new Vue({
  el: "#app",
  data: {
    message: "Hello Vue yoyo!"
  }
});

new Vue({
  el: "#app-3",
  data: {
    seen: true
  }
});

var app4 = new Vue({
  el: "#app-4",
  data: {
    todos: [
      { text: "学习 JavaScript" },
      { text: "学习 Vue" },
      { text: "整个牛项目" }
    ]
  }
});

app4.todos.push({ text: "hello yoyo" });

var app5 = new Vue({
  el: "#app-5",
  data: {
    message: "Hello Vue.js!"
  },
  methods: {
    reverseMessage: function() {
      const a = "123   123123  11212";
      console.log("old -a", a);
      const test = add(1, 2);
      console.log("test", test);
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "Hello Vue!"
  }
});
