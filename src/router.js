import { createMemoryHistory, createRouter } from 'vue-router'
import CampaignsPage from './modules/campaigns/CampaignsPage.vue'
import ReviewsPage from './modules/reviews/ReviewsPage.vue'
import LandingPage from './components/LandingPage.vue'
import PricesPage from './modules/pricing/PricesPage.vue'
import ReachOutPage from './modules/reach-out-templates/ReachOutPage.vue'

const routes = [
  { path: '/', component: LandingPage },
  { path: '/campaigns', component: CampaignsPage },
  { path: '/reviews', component: ReviewsPage },
  { path: '/pricing', component: PricesPage },
  { path: '/reach-out-templates', component: ReachOutPage },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

