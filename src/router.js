import { createMemoryHistory, createRouter } from 'vue-router'
import CampaignsPage from './modules/campaigns/CampaignsPage.vue'
import ReviewsPage from './modules/reviews/ReviewsPage.vue'
import LandingView from './components/LandingPage.vue'

const routes = [
  { path: '/', component: LandingView },
  { path: '/campaigns', component: CampaignsPage },
  { path: '/reviews', component: ReviewsPage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

