<template>
  <div :class="className">
    <component :is="component" v-bind="props" v-if="component" />
    <next v-for="(child, index) in children" :key="index" :="child" />
  </div>
</template>
<script>
import Paragraph from "./Paragraph";
import Button from "./Button";
import Title from "./Title";
export default {
  name: "next",
  components: {
    Paragraph,
    Button,
    Title,
  },
  props: ["component", "props", "children", "className"],
};
</script>