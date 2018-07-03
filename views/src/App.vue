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
  import Content from "./components/content";
  import Header from "./components/frame/header";
  import Footer from "./components/frame/footer";
  
  export default {
    name: "app",
    components: {
      Content,
      Header,
      Footer
    }
  };
</script>

<style>
  @import url("http://at.alicdn.com/t/font_732014_kdgdz9ypas.css");
</style>
