import {createRouter, createWebHistory} from 'vue-router';
import DepartmentView from '../views/Department/DepartmentView.vue';
import DepartmentDetailsView from '../views/Department/DepartmentDetailsView.vue';
import DepartmentEditView from '../views/Department/DepartmentEditView.vue'
import DepartmentCreateView from '../views/Department/DepartmentCreateView.vue'
import InstructorListView from '../views/Instructor/InstructorListView.vue';
import InstructorDetailsView from '../views/Instructor/InstructorDetailsView.vue';

const routes = [
    //departments
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
    },
    {
        path: '/departments/:id/edit',
        name: 'departments.edit',
        component: DepartmentEditView
    },
    {
        path: '/departments/create',
        name: 'departments.create',
        component: DepartmentCreateView
    },



    //instructors
    {
        path: '/instructors',
        name: 'instructors.index',
        component: InstructorListView
    },
    {
        path: '/instructors/:id',
        name: 'instructors.show',
        component: InstructorDetailsView
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router