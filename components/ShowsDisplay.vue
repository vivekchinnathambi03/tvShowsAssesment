<template>
  <div class="allShows">
    <h3 class="allShows--title">{{ filter }}</h3>
    <div :class="className" ref="scrollEl">
      <article
        v-for="show in data.slice(0, 20)"
        :key="show.id"
        class="allShows__showCard hover:scale-125"
      >
        <NuxtLink :to="`/shows/${show.id}`" :title="show.name">
            <div v-if="show.image">
                <img
                    :src="show.image.medium"
                    :alt="show.name"
                    class="allShows__showCard--image object-fill h-48"
                />
            </div>

          <div v-else>
            <img
              src="/placeholder.png"
              alt="placeholder"
              class="allShows__showCard--image"
              width="232"
              height="100%"
            />
          </div>

        </NuxtLink>
        <span class="allShows__showCard--rate bottom-[34px] left-[15px]">
                <StarsRate :value="show.rating.average" />
            </span>

      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { ShowsTypes, Genres } from '~~/types/types'
import { PropType } from 'vue'

export default defineComponent({
    props: {
        shows: {
            type: Array as PropType<ShowsTypes[]>,
            required: true,
        },
        filter: {
            type: String as PropType<Genres>,
            required: true,
        },
        className: {
            type: String as PropType<string>,
            required: true,
        },
    },

    setup(props) {
        const data = props.shows.filter((show) =>
            show.genres.includes(props.filter)
        )
        data.sort((a, b) =>  b.rating.average - a.rating.average);
        return { data }
    }
})
</script>
