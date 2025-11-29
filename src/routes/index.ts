import { createRouter, createWebHistory } from 'vue-router'
import Pricing from '@/views/pages/Pricing.vue'
import ComparePlans from '@/views/pages/ComparePlans.vue'
import Home from '@/views/pages/Home.vue'
import Form from '@/views/pages/Form.vue';
import PlanDetails from '@/views/pages/PlanDetails.vue';
import PostManage from '@/views/pages/posts/PostManage.vue';

const myRouter = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/price', component: Pricing },
        { path: '/compare-plans', component: ComparePlans },
        { path: '/form', component: Form },
        { path: '/plan-details/:id', component: PlanDetails },
        { path: '/posts', component: PostManage },
    ]
});

export default myRouter