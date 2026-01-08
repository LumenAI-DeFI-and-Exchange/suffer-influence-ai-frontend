<template>
    <div class="flex flex-col p-20">
        <div class="p-10 bg-gray-100 shadow-lg shadow-black/50 rounded-md">
            <h1 class="text-4xl text-gray-400 font-semibold">Customer Reviews</h1>
            <p class="text-2xl mt-2">What media and customers says about our platform</p>
        </div>
        <div class="flex flex-row gap-2 mt-20 primary-background-2 pb-55">
            <div
                v-for="review in myReviews"
                class="mx-2 py-10 px-5 bg-gray-200 w-100 gap-2 shadow-lg shadow-black/50 rounded-md"
            >
                <p class="font-semibold text-gray-800">{{ review.reviewerName }}</p>
                <p class="text-gray-400">{{ review.context }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    const myReviews = ref([
        {
            reviewerName: "Robert Cranberian",
            context:
                "I've created a new campaign on SufferInfluence.AI platform, " +
                "and it helped me to find a right face to represent my brand.",
        }, {
            reviewerName: "Alice Antword",
            context: "Super-effective platform that really helps to find " +
                "person representing my brand.",
        }]);
</script>
