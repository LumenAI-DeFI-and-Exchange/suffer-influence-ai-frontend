<template>
    <header class="primary-background shadow-[rgba(0,0,15,0.5)_20px_10px_5px_0px]">
        <nav class="flex flex-row gap-5 justify-between pr-100">
            <RouterLink to="/">
                <img
                    class="w-25 h-25 rounded-xl"
                    src="../../public/logo.jpg"
                    alt="SufferInfluence.AI - next gen influencers search by brands"
                />
            </RouterLink>
            <ul class="flex flex-row gap-5 items-center">
                <li>
                    <a
                        @click="() => {
                            console.log('Sign in!')
                        }"
                        class="uppercase font-semibold hover:text-gray-600 transition duration-400 ease-in-out"
                    >
                        Create account
                    </a>
                </li>
                <li>
                    <RouterLink to="/reviews" class="uppercase font-semibold hover:text-gray-600 transition duration-400 ease-in-out">
                        Reviews
                    </RouterLink>
                </li>
                <li>
                    <RouterLink to="/pricing" class="uppercase font-semibold hover:text-gray-600 transition duration-400 ease-in-out">
                        Pricing
                    </RouterLink>
                </li>
            </ul>
        </nav>
    </header>
</template>
