<template>
  <h1>
    {{ text }}
  </h1>
</template>

<script>
export const TITLE_COMPONENT_NAME = "Title";
export default {
  props: {
    text: String,
  },
};
</script>

