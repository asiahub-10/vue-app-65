import { createRouter, createWebHistory } from 'vue-router'
import Pricing from '@/views/pages/Pricing.vue'
import ComparePlans from '@/views/pages/ComparePlans.vue'
import Home from '@/views/pages/Home.vue'
import Form from '@/views/pages/Form.vue';
import PlanDetails from '@/views/pages/PlanDetails.vue';
import PostManage from '@/views/pages/posts/PostManage.vue';
import PostDetails from '@/views/pages/posts/PostDetails.vue';
import PostCreate from '@/views/pages/posts/PostCreate.vue';
import CategoryManage from '@/views/pages/categories/CategoryManage.vue';
import CategoryCreate from '@/views/pages/categories/CategoryCreate.vue';
import CategoryUpdate from '@/views/pages/categories/CategoryUpdate.vue';
import FormObject from '@/views/pages/FormObject.vue';

const myRouter = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/price', component: Pricing },
        { path: '/compare-plans', component: ComparePlans },
        { path: '/form', component: Form },
        { path: '/form2', component: FormObject },
        { path: '/plan-details/:id', component: PlanDetails },
        { path: '/posts', component: PostManage },
        { path: '/post/:id/details/:userid', component: PostDetails },
        { path: '/post/create', component: PostCreate },
        { path: '/categories', component: CategoryManage },
        { path: '/category/create', component: CategoryCreate },
        { path: '/category/:id/edit', component: CategoryUpdate },
    ]
});

export default myRouter