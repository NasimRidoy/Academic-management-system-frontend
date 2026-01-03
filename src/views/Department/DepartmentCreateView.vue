<script setup>
import {ref} from 'vue'
import {useRouter } from 'vue-router';


const router = useRouter()
const form = ref(
    {
        name: "",
        code: ""
    }
)

const submitForm = () => {
    console.log('Created payload', form.value)
    alert('Department created')

    // later:
    // await axios.post('/api/departments', form.value)
    router.push('/departments')
}


const goBack = () => {
    router.push('/departments')
}

</script>

<template>
    <div>
        <h2>Create Department</h2>
        
        <form @submit.prevent="submitForm">
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
            
            <button 
                type="submit"
            >
                Create
            </button>
            <button 
                type="button"
                @click="goBack"
            >
                Cancel
            </button>
        </form>
    </div>
</template>