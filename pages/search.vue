<template>
    <div class="search">
        <div class="search__shows">
            <article class="hover:scale-125" v-for="show in shows" :key="show.show.id">
                <NuxtLink :to="`/shows/${show.show.id}`" :title="show.show.name">
                    <div v-if="show.show.image">
                        <img
                            :src="show.show.image.medium"
                            :alt="show.show?.name"
                            class="search__shows--realImage"
                            width="232"
                            height="376"/>
                    </div>
                    <div v-else>
                        <img
                            src="/placeholder.png"
                            alt="placeholder"
                            class="search__shows--placeholderImage"
                            width="230"
                            height="370"/>
                    </div>
                </NuxtLink>
                <span class="search__shows--rating bottom-[37px] left-[5px]">
                    <StarsRate :value="show.show.rating.average" />
                </span>
            </article>
        </div>
    </div>
</template>

<script lang="ts">
import { SearchedShowType } from '~~/types/types'
import { ref } from 'vue'

export default defineComponent({
    data() {
        return {
            shows: [] as SearchedShowType[],
        }
    },

    setup() {
        const shows = ref<SearchedShowType[]>([])
        const route = useRoute()
        const searchTextValue = route.query.searchText
        return { shows, route, searchTextValue}
    },

    created : function() {
        var searchText = this.searchTextValue ? this.searchTextValue : ''
        this.fetchSearchedData(searchText.toString())
    },

    watch: {
        $route(to, from) {
            this.fetchSearchedData(to.query.searchText)
        },
    },

    methods: {
        async fetchSearchedData(searchTextValue:string) {
            const { data: shows } = await fetchShows<SearchedShowType[]>(
                `search/shows?q=${searchTextValue}`
            )
            this.shows = shows
        },
        replaceByDefault(e: Event) {
            let image = e.target as HTMLImageElement
            image.src = '/placeholder.png'
        },
    },
})
</script>
<style scoped></style>
