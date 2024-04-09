import LoginPage from "src/pages/LoginPage.vue";

const routes = [
  {
    path: "/",
    component: LoginPage,
  },

  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "Index", component: () => import("pages/IndexPage.vue") },
      { path: "AboutPage", component: () => import("pages/AboutPage.vue") },
      { path: "ContactPage", component: () => import("pages/ContactPage.vue") },
      { path: "ProfilePage", component: () => import("pages/ProfilePage.vue") },
      { path: "SummaryPage", component: () => import("pages/SummaryPage.vue") },
      { path: "UsersPage", component: () => import("pages/UsersPage.vue") },
      { path: "DevicePage", component: () => import("pages/DevicePage.vue") },
      { path: "SettingPage", component: () => import("pages/SettingPage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
