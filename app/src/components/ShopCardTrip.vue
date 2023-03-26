<template>
    <v-card color="base" elevation="4" @click="toDetail(shop.name)" min-height="420px">
        <v-img :src="render_img(shop)" cover class="text-white"> </v-img>
        <v-container>
        <v-row>
            <v-col>
            <h3> <v-icon :icon="shop.icon" class="mx-2" color="secondary"></v-icon>{{ shop.name }}</h3>
            </v-col>
        </v-row>
        <v-row class="ma-2">
            <p><v-icon icon="mdi-map-marker"></v-icon> {{shop.prefecture}} {{ shop.city }}</p>
        </v-row>
        <v-row class="ma-2">
            <p><v-icon icon="mdi-calendar-range"></v-icon> visited {{ shop.visit_date }}</p>
        </v-row>
        </v-container>
        
    </v-card>

</template>

<script>
import NoImage from "../assets/NoImage.png?url";

export default {
    name: "ShopCard",
    props: ["shop"],
    data: () => ({
        NoImage,
    }),
    methods: {
        render_img : (src) => {
            if(src == null || src.image == null){
                return NoImage
            }
            return "./trip_img/" + src.image;
        },
        toDetail(shopName){
            this.$router.push(
            {
                path: "/trip/detail",
                query: {name: shopName}
            }
            )
        }
    }
}
</script>