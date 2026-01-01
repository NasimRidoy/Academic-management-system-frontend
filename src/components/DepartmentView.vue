<script setup>
import departments from '../data/departmentsData.json';
</script>

<template>
  <div class="department-view">
    <h2>Departments</h2>

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
          </td>
        </tr>

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