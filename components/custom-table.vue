<template>
  <div>
    <custom-modal
      :showModal="showModal"
      :modalTitle="'Confirmation'"
      :modalData="`Are you sure want to delete ${customEmployee.name}`"
      :confirmButton="'Yes'"
      :cancelButton="'No'"
      @confirmPopup="confirmDelete"
      @cancelPopup="closeModal"
    ></custom-modal>
    <table class="table table-hover data-table" v-if="filtersList.length > 0">
      <thead>
        <tr>
          <th scope="col" v-for="(column, index) in headings" :key="index">
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in filtersList" :key="employee.id">
          <td>{{ employee.id }}</td>
          <td>{{ employee.name }}</td>
          <td>{{ employee.team }}</td>
          <td>{{ employee.designation }}</td>
          <td>
            <Chip
              :customClass="
                employee.status === 'Active' ? 'chip primary' : 'chip secondary'
              "
              >{{ employee.status }}</Chip
            >
          </td>
          <td>
            <custom-button
              style="margin-top: 3px; margin:4px;"
              @click="editEmployee(employee)"
              :customClass="'btn btn-success btn-sm'"
              :customType="'button'"
            >
              <Icon name="uil:pen" color="black" />
            </custom-button>
            <custom-button
              style="margin-top: 3px; margin:4px;"
              @click="viewEmployee(employee)"
              :customClass="'btn btn-info btn-sm'"
              :customType="'button'"
            >
              <Icon name="uil:eye" color="black" />
            </custom-button>
            <custom-button
              style="margin-top: 3px; margin:4px;"
              @click="deleteEmployee(employee)"
              :customClass="'btn btn-danger btn-sm'"
              :customType="'button'"
            >
              <Icon name="uil:trash" color="black" />
            </custom-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="no-data" v-else>{{noDataMessage}}</div>
  </div>
</template>

<script setup>
import { useFiltersStore } from "~/stores/test";
import { storeToRefs } from "pinia";
const props = defineProps({
  filtersList: Array,
  headings: Array,
});
let showModal = ref(false);
let customEmployee = ref({});
let noDataMessage = ref("No users found!")
const router = useRouter();
const filtersStore = useFiltersStore();
const deleteEmployee = (employee) => {
  showModal.value = true;
  customEmployee = employee;
  console.log("employee", customEmployee);
  // filtersStore.deleteEmployee(employee.id)
};
const confirmDelete = (value) => {
  if (value) {
    filtersStore.deleteEmployee(customEmployee.id);
    showModal.value = false;
  }
};
const closeModal = (value) => {
  showModal.value = value;
};
const editEmployee = (emp) => {
  router.push({
    path: `/employee/add`,
    query: { id: emp.id },
  });
};
const viewEmployee = async (emp) => {
  filtersStore.setCustomEmployee(emp);
  // const { setCustomEmployee } = filtersStore;

  router.push({
    path: `/employee/${emp.id}`,
  });
};
</script>

<style lang="scss" scoped>
.no-data {
  margin-top: 6rem;
  margin-left: 27rem;
}
</style>
