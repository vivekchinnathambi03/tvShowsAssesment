<template>
    <div>
        <header class="shadow-md bg-[#111111]/90 md:h-[100px] text-white">
            <div class="md:flex sm:block sm:text-center justify-between items-center p-3 w-full">
                <div class="ml-[50px] sm:ml-0">
                    <NuxtLink to="/">
                        <img
                            src="/tvm-header-logo.png"
                            alt="header-logo"
                            width="232"
                            height="80%"
                        />
                    </NuxtLink>
                </div>
                <div class="text-center mt-6 sm:mt-0 search__searchBar">
                    <input
                        :value="search"
                        @keyup.enter="handleSearch"
                        type="text"
                        placeholder="Enter a movie or series name"
                    />
                </div>
            </div>
        </header>
        <div class="p-4 min-h-screen overflow-x-hidden w-full flex flex-col mx-auto">
            <slot />
        </div>
    </div>
</template>

<script lang="ts">
export default defineComponent({
    setup() {
        const search = ref('')
        const router = useRouter()
        const route = useRoute()
        return { search,router,route }
    },

    methods: {
        handleSearch(event: Event) {
            const el = event.target as HTMLInputElement
            let searchText = el.value
            this.router.push({ path:'/search', query:{searchText:searchText}})
        },
    }
})

</script>


<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
