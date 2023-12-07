<template>
  <div>
    <div class="login-form">
      <input
        type="text"
        name="username"
        class="username"
        v-model="username"
        placeholder="نام کاربری"
      />
      <br />
      <input
        type="password"
        name="password"
        class="password"
        v-model="password"
        placeholder="کلمه عبور"
      />
      <br />
      <button type="submit" @click.prevent="goToMainPage" class="login-btn">
        ورود
      </button>
    </div>
  </div>
</template>

<script>
// import api from "../services/api";
export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      staticUsername: "12345678910",
      staticPassword: "123456",
      toastOptions: {
        theme: "bubble",
        position: "top-right",
        duration: 2000,
      },
    };
  },
  created() {
    this.checkIsLogin();
  },
  methods: {
    async goToMainPage() {
      console.log("hi");
      if (
        this.username == this.staticUsername &&
        this.staticPassword == this.password
      ) {
        this.$router.push("/dashboard");
        localStorage.setItem("isLogin", "true");
        this.showToast("با موفقیت وارد شدید !", "show");
      } else {
        this.showToast("نام کاربری یا رمز عبور اشتباه است !");
      }
      // try{
      //   const data = {username :this.username , password : this.password }
      //   const response = await api ("account",'login','',data)
      //   console.log(response)
      // } catch (error) {
      //   console.log(error)
      // }
    },
    checkIsLogin() {
      let isLogin = localStorage.getItem("isLogin");
      console.log(isLogin);
      if (isLogin) {
        this.$router.push("/dashboard");
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
.login-form {
  /* background-color: red; */
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.username,
.password {
  width: 370px;
  border: none;
  outline: none;
  height: 50px;
  border-radius: 12px;
  padding: 0 10px;
  margin-top: -8px;
  /* margin-top: 35px; */
}

.login-btn {
  width: 370px;
  height: 50px;
  background-color: #004de1;
  color: #fff;
  border-radius: 12px;
}
</style>
