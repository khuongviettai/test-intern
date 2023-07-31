<template>
  <div class="wrap">
    <div class="container">
      <h3 class="title">Chào bạn</h3>

      <input-component />

    </div>
  </div>
</template>

<script>
import inputComponent from "~/components/input-component.vue"; // Use ~ instead of ~/

export default {
  name: 'IndexPage',
  components: {
    inputComponent
  },
}
</script>

<style>
/* Add styles specific to the IndexPage component if needed */
.wrap {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.container {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media only screen and (max-width: 1200px) {
  .container {
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
  }
  .title {
    text-align: center;
  }
}
</style>
