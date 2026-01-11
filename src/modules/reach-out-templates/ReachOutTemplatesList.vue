<template>
    <div class="flex flex-col gap-3">
        <h1 class="text-4xl text-gray-800">Reach Out Templates</h1>
        <p class="text-2xl text-gray-600">You can select one template looks more prettier to you to use in your campaign</p>
        <div v-for="template in reachOutTemplates" class="p-5">
            <h2 class="font-bold">{{ template.name }}</h2>
            <p class="text-sm">{{ template.description }}</p>
        </div>
    </div>
</template>
<script>
    import { ref } from 'vue';
    import GetReachOutTemplatesResponse from '../../mock-server/get-reach-out-templates-response.json'

    const reachOutTemplates = ref(GetReachOutTemplatesResponse);
</script>
