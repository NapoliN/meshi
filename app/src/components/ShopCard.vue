<template>
    <v-hover v-slot:default="{ isHovering, props }">
        <v-card v-bind="props" :elevation="isHovering ? 12 : 4" color="base" @click="toDetail(shop.name)"
            min-height="420px">
            <v-img :src="render_img(shop)" cover class="text-white"> </v-img>
            <v-container>
                <v-row>
                    <v-col>
                        <h3> <v-icon :icon="`mdi-` + shop.icon" class="mx-2" color="secondary"></v-icon>{{ shop.name }}</h3>
                    </v-col>
                </v-row>
                <v-row class="ma-2">
                    <p><v-icon icon="mdi-map-marker"></v-icon> {{ shop.area }}</p>
                </v-row>
                <v-row class="ma-2">
                    <template v-for="tag in shop.tags">
                        <v-hover>
                            <template v-slot:default="{ isHovering, props }">
                                <v-chip v-bind="props" :elevation="isHovering ? 4 : 0" class="ma-1"
                                    :color="isHovering ? 'secondary' : 'secondary2'" link @click.stop="toTag(tag)">
                                    <v-icon icon="mdi-tag" class="mx-1"></v-icon> {{ tag }}
                                </v-chip>
                            </template>
                        </v-hover>
                    </template>
                </v-row>
            </v-container>

        </v-card>
    </v-hover>
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
        render_img: (src) => {
            if (src == null || src.image == null) {
                return NoImage
            }
            return "./img/" + src.image;
        },
        toDetail(shopName) {
            this.$router.push(
                {
                    path: "/ohokayama/detail",
                    query: { name: shopName }
                }
            )
        },
        toTag(tag) {
            this.$router.push({
                path: "/ohokayama/search",
                query: { tag: tag }
            })
        }
    }
}
</script>