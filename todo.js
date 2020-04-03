/*
 * @Author: yangyao
 * @Date: 2020-04-01 17:41:34
 * @LastEditors: yangyao
 * @LastEditTime: 2020-04-01 17:43:20
 * @Description: 文件描述
 */
import Vue from "vue";
export default Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "蔬菜" },
      { id: 1, text: "奶酪" },
      { id: 2, text: "随便其它什么人吃的东西" }
    ]
  }
});
