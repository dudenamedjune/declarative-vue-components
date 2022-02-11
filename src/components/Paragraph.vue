<template>
  <p>
    {{ text }}
  </p>
</template>

<script>
export const PARAGRAPH_COMPONENT_NAME = "Paragraph";
export default {
  props: ["text"],
};
</script>


