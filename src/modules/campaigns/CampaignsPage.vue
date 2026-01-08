<template>
    <div class="flex flex-col p-20">
        <h1 class="text-2xl text-gray-200">My Campaigns</h1>
        <div class="flex flex-row gap-2">
            <div v-for="campaign in myCampaigns" @click="() => {
                replace(`/campaign-results/${campaign.id}`);
            }">
                <p>{{ campaign.name }}</p>
                <p>{{ campaign.searchRequest }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { onMounted, ref } from 'vue';
    import { useRouter } from 'vue-router';

    const { replace } = useRouter();
    const myCampaigns = ref([]);

    onMounted(() => {
        const headers = {
            Authorization: "Bearer 12345",
        };
        fetch(`${import.meta.env.API_URL}/campaigns`, {
            headers, 
        }).then((response) => {
            response.json().then((data) => {
                myCampaigns.value = data;
            });
        });
    });
</script>
