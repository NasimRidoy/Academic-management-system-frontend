<script setup>
import instructorsData from '../../data/instructorsData.json';
import { ref, onMounted } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const instructors = ref([]); //reactive state. an array of objects or empty array

onMounted(() => {
  // mock API call
  instructors.value = instructorsData
})



const updateInstructor = (instructor) => {
  console.log("The department: ", department);
  router.push(`/departments/${department.id}/edit`);
}
const showInstructor = (instructor) => {
  router.push(`/instructors/${instructor.id}`);
}
const deleteDepartment = (id) => {
  if (!confirm('Are you sure you want to delete this department?')) {
    return
  }

  // mock delete
  departments.value = departments.value.filter(
    department => department.id !== id
  )

  // later:
  // await axios.delete(`/api/departments/${id}`)
}

const goToCreate = () => {
  router.push('instructors/create')
}

</script>

<template>
  <div class="instructor-view">
    <h2>
      Instructors
    </h2>
    <button @click="goToCreate">
        Create Instructor
    </button>

    <table class="admin-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(instructor, index) in instructors"
          :key="instructor.id"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ instructor.name }}</td>
          <td>{{ instructor.email ?? '-' }}</td>
          <td class="actions">
            <!-- <button class="btn update" @click="updateDepartment(department)">
              Update
            </button> -->
            <!-- <button class="btn delete" @click="deleteDepartment(department.id)">
              Delete
            </button> -->
            <button class="btn show" @click="showInstructor(instructor)">
              Details
            </button>
          </td>
        </tr>
        <!-- if no instructor data exists. -->
        <tr v-if="instructors.length === 0"> 
          <td colspan="4" class="empty">
            No Instructor found
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style scoped>

</style>