/*
 * @Author: yangyao
 * @Date: 2020-04-01 17:27:43
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-13 10:07:03
 * @Description: 文件描述
 */
import Vue from "vue";

import Index from "./src/index.vue";

new Vue({
  el: "#app",
  template: `
    <div>
      <index/>
    </div>
  `,
  data: {},
  components: {
    Index,
  },
});
