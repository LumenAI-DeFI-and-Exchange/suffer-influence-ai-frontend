import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification'
import App from './App.vue'
import { router } from './router'
import ReviewsPage from './modules/reviews/ReviewsPage.vue'
import CampaignsPage from './modules/campaigns/CampaignsPage.vue'
import LandingPage from './components/LandingPage.vue'

createApp(App)
  .component('PreviewPage', ReviewsPage)
  .component('CampaignsPage', CampaignsPage)
  .component('LandingView', LandingPage)
  .use(ToastPlugin)
  .use(router)
  .mount('#app')
