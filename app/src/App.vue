<template>
  <v-app id="inspire" class="custom-bg">
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>飯ぶ</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <v-row>
          <v-col v-for="shop in shops" cols="4">
            <ShopCard :shop="shop"></ShopCard>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NoImage from "./assets/NoImage.png?url";
import ShopCard from "./components/ShopCard.vue";
import Shops from "./assets/shops.json";

export default {
  name: "App",
  components:{
    ShopCard
  },
  data: () => ({
    shops: Shops,
    NoImage,
  }),
};
</script>

<style>
.custom-bg {
  background: rgb(var(--v-theme-base)) !important;
}
</style>
