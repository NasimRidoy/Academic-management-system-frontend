<script setup>
import departmentsData from '../../data/departmentsData.json';
import { ref, onMounted } from 'vue';
import {useRouter} from 'vue-router';

const router = useRouter();
const departments = ref([]); //reactive state. an array of objects or empty array

onMounted(() => {
  // mock API call
  departments.value = departmentsData
})



const updateDepartment = (department) => {
  console.log("The department: ", department);
  router.push(`/departments/${department.id}/edit`);
}
const showDepartment = (department) => {
  router.push(`/departments/${department.id}`);
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
  router.push('departments/create')
}

</script>

<template>
  <div class="department-view">
    <h2>
      Departments
    </h2>
    <button @click="goToCreate">
        Create Department
    </button>

    <table class="admin-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Code</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(department, index) in departments"
          :key="department.id"
        >
          <td>{{ index + 1 }}</td>
          <td>{{ department.name }}</td>
          <td>{{ department.code ?? '-' }}</td>
          <td class="actions">
            <button class="btn update" @click="updateDepartment(department)">
              Update
            </button>
            <button class="btn delete" @click="deleteDepartment(department.id)">
              Delete
            </button>
            <button class="btn show" @click="showDepartment(department)">
              Details
            </button>
          </td>
        </tr>
        <!-- if no department data exists. -->
        <tr v-if="departments.length === 0"> 
          <td colspan="4" class="empty">
            No departments found
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>



<style scoped>

</style>