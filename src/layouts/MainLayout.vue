<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>Xpac</q-toolbar-title>

        <div>Version 1.0.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Xpac Navigation </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    caption: "MAIN",
  },
  {
    title: "Home",
    caption: "First Page",
    icon: "home",
    link: "/index",
  },
  {
    title: "Aboute Us",
    caption: "Aboute.Xpac",
    icon: "diversity_3",
    link: "/AboutPage",
  },
  {
    title: "Contact Us",
    caption: "Fell Free to Contact Us",
    icon: "call",
    link: "/ContactPage",
  },
  {
    title: "Summary",
    caption: "Summary for Xpac",
    icon: "summarize",
    link: "/SummaryPage",
  },
  {
    title: "Profile",
    caption: "Profile Xpac",
    icon: "group",
    link: "/ProfilePage",
  },
  {
    caption: "GENEREL",
  },
  {
    title: "Users",
    caption: "Users for Xpac",
    icon: "person",
    link: "/UsersPage",
  },
  {
    title: "Device",
    caption: "Device Xpac",
    icon: "widgets",
    link: "/DevicePage",
  },
  {
    title: "Settings",
    caption: "Settings",
    icon: "manage_accounts",
    link: "/SettingPage",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
