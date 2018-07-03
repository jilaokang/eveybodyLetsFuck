<template>
  <div id="app" class="container-fuild">
    <Header></Header>
    <div class="container">
      <Content></Content>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "./components/frame/header";
  import Footer from "./components/frame/footer";
  
  import Content from './components/index.vue'
  export default {
    name: "app",
    components: {
      Header,
      Footer,
      Content
    }
  };
</script>

<style>
  @import url("http://at.alicdn.com/t/font_732014_kdgdz9ypas.css");
</style>
