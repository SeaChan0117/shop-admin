<template>
  <h1 ref="title">
    Hello World
  </h1>
  <abc />
</template>

<script lang="tsx" setup>
const abc = <h1>abc</h1>
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
