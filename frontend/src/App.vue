<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
  }

.gender_male {
  font-size: 35px;
  /* margin-left: 100px; */
  color: blue;
}

.gender_female {
  font-size: 35px;
    /* margin-left: 100px; */
    color: palevioletred;
}
</style>
