<script lang="ts">
export default defineComponent({
    props: {
        value: {
            type: Number,
            required: true,
        },
    },
})
</script>

<template>
  <div class="relative flex z-30 w-[100px]">
    <span class="flex items-center bg-black p-1 rounded">
        <img src="/pngwing.png" class="mr-1" aria-hidden="true" width="18" height="18"/>
        <span class="text-white">{{value ? value : 6.5}}</span>
    </span>
  </div>
</template>
