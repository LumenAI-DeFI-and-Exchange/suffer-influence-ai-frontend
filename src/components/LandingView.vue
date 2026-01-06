<script setup>
    import InfluencersSearchResults from './InfluencersSearchResults.vue';
    import SearchInfluencerInput from './SearchInfluencerInput.vue'
    import { ref } from 'vue'

    const hardcodedInfluencersResponse = [
        {
            name: "@mOme",
            image: "https://res.cloudinary.com/shotgun/image/upload/c_limit,w_750/fl_lossy/f_auto/q_auto/production/artworks/artists/artist-85100-music-release-cover-1760711204622.jpg",
            links: {
                youtube: "https://www.youtube.com/channel/UCjHBbCH9yddRerP1-0oDogw",
            },
        },
        {
            name: "@maruv",
            image: "https://hitfm.ru/b/d/XS_d975tAlQeb9hMMjesWp5sKuUPWAcOdoKmPd7GV5nvNwe0Y21o10ROCTMBoxQZhTpBpL_7WaXQC8Omvy2GX15bEG0PwNABBUM=mliRVhtTrMfozwMDBM_J2g.webp",
            links: {
                youtube: "https://www.youtube.com/channel/UCG2hAzA2G40on_viIrPVz9g",
            },
        },
        {
            name: "@zhu",
            image: "https://thissongissick.com/wp-content/uploads/2020/07/109715833_270053844298482_7389082941280115656_n.jpg",
            links: {
                youtube: "https://www.youtube.com/@ZHU",
            },
        }
    ]
    const isSearchLoading = ref(false)
    const searchResults = ref([])

    const handleSearch = async (searchStr) => {
        isSearchLoading.value = true

        setTimeout(() => {
            try {
                searchResults.value = [...hardcodedInfluencersResponse]
            } catch (e) {
                // error ==>
            } finally {
                isSearchLoading.value = false
            }
        }, 5000)
    }
</script>
<template>
    <div class="flex flex-col pb-60 animated-background">
        <SearchInfluencerInput :onSearch="handleSearch" />
        <div class="flex flex-row py-20 justify-center items-center primary-background-2" v-if="isSearchLoading">
            <svg aria-hidden="true" class="w-8 h-8 text-red-500 animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        <div class="p-5 primary-background-2" v-if="!isSearchLoading && searchResults?.length > 0">
            <InfluencersSearchResults :results-list="searchResults" />
        </div>
        <div class="flex align-center justify-center pt-50">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rKKxP9jNBGQ?si=DpqrO1LneyK9PQ6i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    </div>
</template>
