<script setup lang="ts">
// import customTable from "../components/custom-table.vue";
import { storeToRefs } from "pinia";
import { useFiltersStore } from "~/stores/test";

const router = useRouter();
const tableHeadings = ref([
  "id",
  "name",
  "team",
  "designation",
  "status",
  "action"
]);
let showModal = ref(false);
let customEmployee = ref({});
let noDataMessage = ref("No employee found!");
const filtersStore = useFiltersStore();

const { filtersList } = storeToRefs(filtersStore);
const addNewEmployee = () => {
  router.push("/employee/add");
};
 const deleteEmployee = (employee:any) => {
  showModal.value = true;
  customEmployee = employee;
 };
const confirmDelete = (value:any) => {
  if (value) {
    filtersStore.deleteEmployee(customEmployee.id);
    showModal.value = false;
  }
};
const closeModal = (value:any) => {
  showModal.value = value;
};
const editEmployee = (emp:any) => {
  router.push({
    path: `/employee/add`,
    query: { id: emp.id },
  });
};
const viewEmployee = async (emp:any) => {
  filtersStore.setCustomEmployee(emp);
 
  router.push({
    path: `/employee/${emp.id}`,
  });
};
</script>

<template>
  <div class="table-title">
    Employee Management
    <p class="sub-title">Manage all employees</p>
    <div class="add-employee">
      <custom-button
        :onClick="addNewEmployee"
        :variant="'primary'"
        :rounded="true"
        :size="'small'"
        :customType="'button'"
      >
        <template #icon>
          <span>
            <Icon name="uil:plus" color="black" />
          </span>
        </template>
        <template #default>
          <span> Add Employee</span>
        </template>
      </custom-button>
    </div>
  </div>
 <custom-modal
      :showModal="showModal"
      :modalTitle="'Confirmation'"
      :modalData="`Are you sure want to delete ${customEmployee.name}`"
      :confirmButton="'Yes'"
      :cancelButton="'No'"
      @confirmPopup="confirmDelete"
      @cancelPopup="closeModal"
    ></custom-modal>
  <div class="custom-container">
    <custom-table :filtersList="filtersList" :headings="tableHeadings" @deleteOnClick="deleteEmployee" @editOnClick="editEmployee" @viewOnClick="viewEmployee">
    </custom-table>
  </div>
</template>
