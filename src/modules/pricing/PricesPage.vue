<template>
    <div class="flex flex-col p-20">
        <div class="p-10 primary-background-2 shadow-lg shadow-black/50 rounded-md">
            <h2 class="text-4xl font-semibold py-4 max-w-3xl">Plans and prices comparison</h2>
        </div>
        <div class="flex flex-row gap-6 mt-15 primary-background-2 pb-40 pt-5 px-5">
            <div class="p-5 bg-gray-200 w-2/1 shadow-lg shadow-black/50 rounded-md">
                <h3 class="font-semibold text-gray-800 mb-5">Base Plan</h3>
                <ul class="flex flex-col gap-1">
                    <li>- Search for potential influencers, without direct Bot interaction</li>
                    <li>- Limited to a 5 created campaigns monthly and 100 influencers in search results</li>
                </ul>
            </div>
            <div class="p-5 bg-gray-200 w-2/1 shadow-lg shadow-black/50 rounded-md">
                <h3 class="font-semibold text-gray-800 mb-5">Unlimited (Pro) Plan</h3>
                <ul class="flex flex-col gap-1">
                    <li>- Unlimited campaigns and influencers search</li>
                    <li>- Direct Bot interaction with founded influencers</li>
                </ul>
            </div>
        </div>
        <div class="mt-12">
            <button
                @click="onPressCreateAccount"
                class="primary-background bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-2xl py-3 px-6 shadow-lg shadow-black/25"
            >Create account</button>
        </div>
    </div>
</template>
<script setup>
    const onPressCreateAccount = () => {
        // todo
    };
</script>
