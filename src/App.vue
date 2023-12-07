<template>
  <div>
    <MainPage></MainPage>
  </div>
</template>

<script>
import MainPage from "./components/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "IRANYekan";
}

@font-face {
  font-family: "IRANYekan";
  font-weight: 400;
  font-style: normal;
  src: url("./assets/fonts/IranYekan/woff/iranyekan.woff") format("woff"),
    url("./assets/fonts/IranYekan/eot/iranyekan.eot"),
    url("./assets/fonts/IranYekan/ttf/iranyekan.ttf");
}
body {
  direction: rtl;
  /* font-family: "IRANYekan"; */
}
button {
  /* font-family: "IRANYekan"; */
  background-color: unset;
  outline: none;
  border: none;
}

input {
  direction: rtl;
}

::placeholder {
  color: #c5c5c5; /* or any other color */
}
</style>
