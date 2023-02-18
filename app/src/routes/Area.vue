<template>
    <v-container v-for="area in areas">
    <v-row class="mt-3">
        <h1>{{ area }}</h1>
    </v-row>
    <v-row class="mb-3">
        <hr :color="$vuetify.theme.themes.light.colors.primary" width="100%">
    </v-row>
    <v-row>
        <v-col v-for="shop in shops_filtered(area)" cols="4">
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
        areas : ["大岡山駅近エリア", "大岡山北エリア", "大岡山南エリア"]
    }),
    methods: {
        shops_filtered(area){
            return this.shops.filter((item) => {
                if(item.area == area) return true
            })
        }
    }
    };
</script>