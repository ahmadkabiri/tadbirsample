<template>
  <b-container fluid class="w-100">
    <b-row>
      <b-col class="custom-header">
        <div class="header-right">
          <button @click="goToMainPage">صفحه اصلی</button>

          <button @click="goToTodoList">یادداشت ها</button>
        </div>
        <div class="header-left">
          <button @click="loginLogout" >
            {{ loginLogoutText }}
          </button>
        </div>
      </b-col>
    </b-row>
    <b-row class="main-section">
      <router-view></router-view>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MainPage",
  components: {},
  data() {
    return {
      isLogin: false,
      loginLogoutText: "خروج از حساب کاربری",
      toastOptions: {
        theme: "bubble",
        position: "top-right",
        duration: 2000,
      },
    };
  },
  created() {
    this.checkLogin();
    this.isLogin = localStorage.getItem("isLogin");
  },
  watch: {
    isLogin() {
      console.log(this.isLogin)
    },
  },

  methods: {
    goToMainPage() {
      // let isLogin = localStorage.getItem("isLogin");
      // if (isLogin) {
      //   this.$router.push("/dashboard");
      // } else {
      //   this.$router.push("/");
      // }
    },
    goToTodoList() {
      // let isLogin = localStorage.getItem("isLogin");
      // if (isLogin) {
      //   this.$router.push("/dashboard");
      // } else {
      //   this.$router.push("/");
      // }
    },
    checkLogin() {},
    loginLogout() {
      this.isLogin = localStorage.getItem("isLogin");
      console.log(this.isLogin)
      if(this.isLogin){
        this.$router.push("/");
        localStorage.removeItem("isLogin");
        this.isLogin = false
        this.showToast("با موفقیت از حساب خود خارج شدید!", "show");

      }
    },
    showToast(msg, type) {
      if (type === "show") {
        this.$toasted.show(msg, {
          ...this.toastOptions,
          type: "success",
        });
      } else {
        this.$toasted.show(msg, {
          ...this.toastOptions,
          type: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.custom-header {
  /* max-width: 166px; */
  width: 1rem;
  height: 80px;
  /* background-color: blueviolet; */
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  align-items: center;
}
/* .h{
    width: 80%;
    margin: 0 auto;
} */

button {
  font-family: "IRANYekan";
  /* font-weight: 1000; */
}

button:hover {
  transition: all ease-in-out 0.2s;
  color: #004de1;
}

.header-right {
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: green; */
}

.main-section {
  min-height: 41.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
}

.display {
  display: none;
}

.block {
  display: block;
}
</style>
