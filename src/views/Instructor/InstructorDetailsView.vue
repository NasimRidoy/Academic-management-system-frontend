<script setup>
import {ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import instructorsData from '../../data/instructorsData.json';
const route = useRoute()
const router = useRouter()
const instructor = ref(null) //can be const but it can change then why? an object or nothing

onMounted(() => {
    const id = parseInt(route.params.id); //id is returned as string
    console.log('id', id)
    instructor.value = instructorsData.find( //must add .value here. otherwise gives runtime error.
        d => d.id === id   //loops through each object d and returns the d that returns true for the condition
    )
})
const goBack = () => {
    router.push('/instructors')
}
</script>

<template>
    <div>
        <h2>
            Instructor Details
        </h2>
        <div v-if="instructor">
            <p>Name : {{instructor.name}}</p>
            <p>Email : {{instructor.email}}</p>
            <p>Phone : {{instructor.phone}}</p>
            <p>Department : {{instructor.department.name}}</p>
            <p>Created : {{instructor.created_at}}</p>
            <p>Updated : {{instructor.updated_at}}</p>
        </div>
        <div v-else>
            <p>Instructor not found</p>
        </div>
        <button @click="goBack">Back</button>
    </div>

</template>
