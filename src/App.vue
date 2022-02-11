<template>
  <Composition
    v-for="({ component, props, children, className }, index) in Components"
    :key="index"
    :component="component"
    :props="props"
    :children="children"
    :className="className"
  />
</template>

<script>
import Composition from "./components/Composition";
import { InteractiveCard, SideContentCard } from "./components/declaratives";

export default {
  name: "App",
  components: {
    Composition,
  },
  data() {
    return {
      Components: [InteractiveCard, SideContentCard],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.side-content-card__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  background: grey;
  border-radius: 10px;
  padding: 3rem;
  margin-top: 3rem;
}

.side-content-card__wrapper .side-content-card__interactive-card {
  text-align: center;
}
</style>
