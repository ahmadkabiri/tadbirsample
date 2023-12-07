import LoginPage from "../components/LoginPage.vue";
import DashBoardPage from "../components/DashBoardPage.vue";

export default [
  { path: "/", name: "loginPageRoute", component: LoginPage },
  {
    path: "/dashboard",
    name: "dashboardPageRoute",
    component: DashBoardPage,
  },
];
