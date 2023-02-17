<template>
    <v-card color="base" elevation="4">
        <v-img :src="render_img(shop.image)" cover class="text-white"> </v-img>
        <v-container>
        <v-row>
            <v-col>
            <h3> <v-icon :icon="`mdi-`+shop.genre" class="mx-2" color="secondary"></v-icon>{{ shop.name }}</h3>
            </v-col>
        </v-row>
        <v-row class="ma-2">
            <p><v-icon icon="mdi-map-marker"></v-icon> {{shop.area}}</p>
        </v-row>
        <v-row class="ma-2">
            <v-chip v-for="tag in shop.tags" color="secondary2">
            <v-icon icon="mdi-tag" class="mx-1"></v-icon> {{ tag }}
            </v-chip>
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
            if(src == null){
                return NoImage
            }
            return "./img/" + src;
        }
    }
}
</script>