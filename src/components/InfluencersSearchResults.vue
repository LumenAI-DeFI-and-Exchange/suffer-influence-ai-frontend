<template>
    <div class="flex flex-col gap-5 p-8">
        <p class="text-2xl">Search results for category => <span class="font-semibold">{{ searchStr }}</span></p>
        <div class="flex flex-row gap-4">
            <a v-for="influencer in props.resultsList" class="p-2" v-bind:href="influencer.link" target="blank">
                <p class="text-gray-100 mb-2">{{ influencer.alias }}</p>
                <img v-bind:src="influencer.image" class="w-50 h-50 rounded-xl" />
            </a>
        </div>
        <p class="text-md">To view more similar results create account and start campaign</p>
    </div>
</template>
<script setup>
    const props = defineProps({
        resultsList: Array,
        searchStr: String,
    })
</script>
