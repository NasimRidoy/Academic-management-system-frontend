<script setup>
import {ref, onMounted} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import departmentsData from '../../data/departmentsData.json';

const route = useRoute();
const form = ref(null);
const router = useRouter();
const id = parseInt(route.params.id);

onMounted(() => {
    const department = departmentsData.find(
        d => d.id === id
    )
    form.value = {
        name: department.name,
        code: department.code 
    }
})

const submitForm = () => {
    console.log('Update payload:', {
        id: route.params.id,
        ...form.value
    })
    alert('Department updated');
    router.push('/departments');
}

const goBack = () => {
    router.push('/departments');
}

</script>

<template>
    <div>
        <h2>
            Edit Department
        </h2>
        <!-- .prevent prevents the page from loading and v-if loads only if data exists -->
         <!-- v-if extremely crucial, otherwise it gives error as the form is initially null-->
        <form @submit.prevent="submitForm" v-if="form">
            <div>
                <label>Name: </label>
                <input type="text"
                v-model="form.name"
                required
            >
            </div>
            
            <div>
                <label>Code: </label>
                <input type="text"
                v-model="form.code"
                required
            >
            </div>
            
            <button type="submit">Update</button>
            <button type="button" @click="goBack">Cancel</button>
        </form>

        <p v-else>Department Not Found</p>
    </div>
</template>