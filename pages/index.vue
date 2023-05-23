<script setup>
// import customTable from "../components/custom-table.vue";
import { storeToRefs } from "pinia";
const router = useRouter();
const tableHeadings = ref([
  "ID",
  "Name",
  "Team",
  "Designation",
  "Status",
  "Actions",
]);
import { useFiltersStore } from "~/stores/test";
const filtersStore = useFiltersStore();

const { filtersList } = storeToRefs(filtersStore);
const addNewEmployee = () => {
  router.push("/employee/add");
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

  <div class="custom-container">
    <custom-table :filtersList="filtersList" :headings="tableHeadings" />
  </div>
</template>
