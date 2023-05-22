<script setup>
// import customTable from "../components/custom-table.vue";
import { storeToRefs } from 'pinia'
const router = useRouter();
const tableHeadings = ref([ 'ID', 'Name', 'Team', 'Designation', 'Status', 'Actions'])
import { useFiltersStore } from '~/stores/test'
const filtersStore = useFiltersStore()

const { filtersList } = storeToRefs(filtersStore)
const addNewEmployee = () =>{

router.push('/employee/add')

}
</script>

<template>
   <custom-modal></custom-modal>

  <div class="table-title">
    Employee Management
    <p class="sub-title">Manage all employees</p>
    <div class="add-employee">
     <custom-button :onClick="addNewEmployee" :customClass="'btn btn-primary'" :customType="'button'"> Add Employee</custom-button>
    </div>
  </div>

  <div class="custom-container">
    <custom-table :filtersList="filtersList" :headings="tableHeadings"/>
  </div>

</template>
