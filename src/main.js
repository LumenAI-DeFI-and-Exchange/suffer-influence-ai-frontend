import { createApp } from 'vue'
import ToastPlugin from 'vue-toast-notification'
import App from './App.vue'
import { router } from './router'
import ReviewsPage from './modules/reviews/ReviewsPage.vue'
import CampaignsPage from './modules/campaigns/CampaignsPage.vue'
import ReachOutPage from './modules/reach-out-templates/ReachOutPage.vue'
import LandingPage from './components/LandingPage.vue'

createApp(App)
  .component('PreviewPage', ReviewsPage)
  .component('CampaignsPage', CampaignsPage)
  .component('LandingPage', LandingPage)
  .component('ReachOutPage', ReachOutPage)
  .use(ToastPlugin)
  .use(router)
  .mount('#app')
