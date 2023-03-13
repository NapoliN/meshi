<template>
    <v-container>
    <v-row class="mt-3">
        <h1>一覧</h1>
    </v-row>
    <v-row class="mb-3">
        <hr :color="$vuetify.theme.themes.light.colors.primary" width="100%">
    </v-row>
    <v-row>
        <v-col v-for="shop in shops" cols="4">
        <ShopCard :shop="shop"></ShopCard>
        </v-col>
    </v-row>
    </v-container>
    
</template>

<script>
    import NoImage from "@/assets/NoImage.png?url";
    import ShopCard from "@/components/ShopCard.vue";
    import Shops from "@/assets/shops.json";

    export default {
    name: "Top",
    components:{
        ShopCard
    },
    data: () => ({
        shops: Shops,
        NoImage,
    }),
    };
</script>