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
import ProductManage from '@/views/pages/products/ProductManage.vue';
import ProductCreate from '@/views/pages/products/ProductCreate.vue';
import Login from '@/views/pages/Login.vue';

const myRouter = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home, name: 'Home', meta: { auth: true } },

        { path: '/login', component: Login, name: 'Login', meta: { auth: false, noLayout: true } },
        { path: '/register', component: Login, name: 'Register', meta: { auth: false, noLayout: true } },

        { path: '/price', component: Pricing, name: 'Pricing', meta: { guard: false } },
        { path: '/compare-plans', component: ComparePlans, meta: { guard: false } },

        { path: '/form', component: Form, meta: { auth: true } },
        { path: '/form2', component: FormObject, meta: { auth: true } },
        { path: '/plan-details/:id', component: PlanDetails, meta: { auth: true } },
        { path: '/posts', component: PostManage, meta: { auth: true } },
        { path: '/post/:id/details/:userid', component: PostDetails, meta: { auth: true } },
        { path: '/post/create', component: PostCreate, meta: { auth: true } },
        { path: '/categories', component: CategoryManage, meta: { auth: true } },
        { path: '/category/create', component: CategoryCreate, meta: { auth: true } },
        { path: '/category/:id/edit', component: CategoryUpdate, meta: { auth: true } },
        { path: '/products', component: ProductManage, meta: { auth: true } },
        { path: '/product/create', component: ProductCreate, meta: { auth: true } },
    ]
});

myRouter.beforeEach((to, from, next) => {
    // const authenticated = !!localStorage.getItem('token');
    const hasToken = localStorage.getItem('token') ? true : false;
    if(!hasToken && to.meta.auth) {
        // return { path: '/login' }
        next('/login');
    }else if(hasToken && !to.meta.auth && to.meta.guard !== false) {
        next('/');
    } else{
        next();
    }
});



export default myRouter