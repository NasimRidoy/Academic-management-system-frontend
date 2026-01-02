import {createRouter, createWebHistory} from 'vue-router';
import DepartmentView from '../views/DepartmentView.vue'
import DepartmentDetailsView from '@/views/DepartmentDetailsView.vue';

const routes = [
    {
        path: '/',
        redirect: '/departments'
    },
    {
        path: '/departments',
        name: 'departments.index',
        component: DepartmentView
    },
    {
        path: '/departments/:id',
        name: 'department.show',
        component: DepartmentDetailsView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router