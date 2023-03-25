<template>
    <v-container v-for="genre in genres">
    <v-row class="mt-3">
        <h1>{{ genre }}</h1>
    </v-row>
    <v-row class="mb-3">
        <hr :color="$vuetify.theme.themes.light.colors.primary" width="100%">
    </v-row>
    <v-row>
        <v-col v-for="shop in shops_filtered(genre)" cols="4">
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
        genres : ["麺類", "中華", "和食","洋食","その他海外料理","ファストフード","パン"]
    }),
    methods: {
        shops_filtered(genre){
            return this.shops.filter((item) => {
                if(item.genre == genre) return true
            })
        }
    }
    };
</script>