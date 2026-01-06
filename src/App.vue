<script setup>
  import Header from './components/Header.vue';
  import LandingView from './components/LandingView.vue';
</script>
<template>
  <div class="flex flex-col">
    <Header />
    <LandingView />
  </div>
</template>
<style>
  .primary-background {
    background-color: #e36d0b;
  }
  .primary-background-2 {
    background-color: #bd5806;
  }
  .secondary-background {
    background-color: #802c34;
  }
  .animated-background {
    background: url(https://animationexplainers.com/wp-content/uploads/2022/08/80815abe444a18ba345c6f8c4b33ee7b.gif) no-repeat center;
    background-size: 100%;
  }
  body {
    font-family: Raleway;
  }
</style>
