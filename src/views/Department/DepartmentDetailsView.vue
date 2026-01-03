
<script setup>
import {ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import departmentsData from '../../data/departmentsData.json';
const route = useRoute()
const router = useRouter()
const department = ref(null) //can be const but it can change then why? an object or nothing

onMounted(() => {
    const id = parseInt(route.params.id); //id is returned as string
    console.log('id', id)
    department.value = departmentsData.find( //must add .value here. otherwise gives runtime error.
        d => d.id === id   //loops through each object d and returns the d that returns true for the condition
    )
})
const goBack = () => {
    router.push('/departments')
}

</script>
<template>
    <div>
        <h2>
            Department Details
        </h2>
        <div v-if="department">
            <p>Department Name : {{department.name}}</p>
            <p>Code : {{department.code}}</p>
            <p>Created : {{department.created_at}}</p>
            <p>Updated : {{department.updated_at}}</p>
        </div>
        <div v-else>
            <p>Department not found</p>
        </div>

        <button @click="goBack">Back</button>

    </div>

</template>

