<template>
  <button>{{ text }}</button>
</template>

<script>
export const BUTTON_COMPONENT_NAME = "Button";
export default {
  props: {
    text: String,
  },
};
</script>