/*
 * @Author: yyao
 * @Date: 2020-04-13 09:31:12
 * @LastEditors: yyao
 * @LastEditTime: 2020-04-13 10:01:37
 * @Description: 文件描述
 */

<template>
    <div>
        <DomItem/>
    </div>
</template>

 <script lang="ts">
import { Vue, Component, Prop, Ref } from "vue-property-decorator";
import DomItem from "./component/Domitem.vue";

@Component({
  components: {
    DomItem,
  },
})
export default class extends Vue {
  @Prop() name!: string;
  @Prop() initialEnthusiasm!: number;
  enthusiasm = this.initialEnthusiasm;
  increment() {
    this.enthusiasm++;
  }

  decrement() {
    if (this.enthusiasm > 1) {
      this.enthusiasm--;
    }
  }

  get exclamationMarks(): string {
    return Array(this.enthusiasm + 1).join("!");
  }
}
</script>
 
