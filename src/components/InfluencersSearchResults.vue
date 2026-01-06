<template>
    <div class="flex flex-row gap-10 p-10">
        <div v-for="influencer in props.resultsList">
            <p class="font-semibold text-gray-400">{{ influencer.name }}</p>
            <img v-bind:src="influencer.image" class="w-50 h-50 rounded-xl" />
        </div>
    </div>
</template>
<script setup>
    const props = defineProps({
        resultsList: Array,
    })
</script>
