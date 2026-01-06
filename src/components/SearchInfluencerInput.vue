<template>
    <div class="flex flex-col gap-5 p-10 bg-red-500 align-center items-center primary-background">
        <h2 class="text-5xl font-bold py-4 mb-10 max-w-3xl">Search influencers matches your brand auditory</h2>
        <div class="flex flex-row gap-5 items-center">
            <input
                :placeholder="brandSearchInputPlaceholder"
                class="w-200 px-10 py-6 rounded-3xl text-xl placeholder-gray-950 border-yellow-400 bg-yellow-100 border-2"
                v-bind:value="brandProposal"
                v-on:keydown="handleSearch"
                @input="onBrandNameInput"
            />
            <button
                v-on:click="handleSearch"
                v-bind:disabled="!brandProposal"
                :disabled="!brandProposal"
                class="w-10 h-10 rounded-4xl bg-yellow-400 hover:bg-yellow-600 cursor-pointer transition duration-200 ease-in-out disabled:bg-gray-300"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue'

    const brandCategories = ["clothes", "video making", "online games", "tattoos"]
    const FULL_PLACEHOLDER_STRING = "My brand does"
    
    const brandProposal = ref(undefined)
    const brandSearchPlaceholderIndex = ref(0)
    const brandSelectedCategory = ref(brandCategories[0])
    const brandSearchInputPlaceholder = ref("")

    const props = defineProps({
        onSearch: Function,
    })

    const getRandomBrandCategory = () => {
        const categoryId = Math.floor(Math.random() * brandCategories.length)

        return brandCategories[categoryId]
    }

    const onBrandNameInput = (e) => {
        brandProposal.value = e.target.value
    }

    const handleSearch = (e) => {
        if (!e.keyCode || (e.keyCode === 13 && !!brandProposal.value)) {
            props.onSearch(brandProposal.value)  
        }
    }

    onMounted(() => {
        setInterval(() => {
            if (brandSearchPlaceholderIndex.value === brandSelectedCategory.value.length) {
                brandSearchPlaceholderIndex.value = 0
                brandSelectedCategory.value = `${getRandomBrandCategory()}...`
            } else {
                brandSearchPlaceholderIndex.value += 1
            }
        
            brandSearchInputPlaceholder.value = `${FULL_PLACEHOLDER_STRING} ${brandSelectedCategory.value.slice(0, brandSearchPlaceholderIndex.value)}`
        }, 100) 
    })
</script>
