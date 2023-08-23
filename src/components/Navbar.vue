<template>
  <div>
    <div class="head">
      <div class="logo">
        <div class="logo-iner">Logo</div>
      </div>
      <div class="menu">
        <ul class="menu-inner">
          <li class="menu-item">
            <router-link href="" class="menu-link" to="/">Index</router-link>
          </li>

          <li class="menu-item">
            <router-link href="" class="menu-link" to="/login">Login</router-link>
          </li>
          <li class="menu-item">
            <router-link href="" class="menu-link" to="/register">Register</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "NavComp",
};
</script>

<style scoped></style>
