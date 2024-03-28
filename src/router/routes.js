const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "Index", component: () => import("pages/IndexPage.vue") },
      { path: "AboutPage", component: () => import("pages/AboutPage.vue") },
      { path: "ContactPage", component: () => import("pages/ContactPage.vue") },
      { path: "ProfilPage", component: () => import("pages/ProfilePage.vue") },
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
