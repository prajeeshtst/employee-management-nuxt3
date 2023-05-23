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
              :variant="
                employee.status === 'Active' ? 'primary' : 'chip secondary' "
            >
              <template #icon>
                <Icon
                  :name="
                    employee.status === 'Active'
                      ? 'wpf:online'
                      : 'icomoon-free:blocked'
                  "
                  color="white"
                />
              </template>
              <template #default>
                <span>
                  {{ employee.status }}
                </span>
              </template>
            </Chip>
          </td>
          <td>
            <custom-button
              :variant="'success'"
              :rounded="true"
              :size="'xsmall'"
              style="margin-top: 3px; margin: 4px"
              @click="editEmployee(employee)"
              :customType="'button'"
            >
              <template #icon>
                <Icon name="uil:pen" color="black" />
              </template>
            </custom-button>
            <custom-button
              :variant="'warning'"
              :rounded="true"
              :size="'xsmall'"
              style="margin-top: 3px; margin: 4px"
              @click="viewEmployee(employee)"
              :customType="'button'"
            >
              <template #icon>
                <Icon name="uil:eye" color="black" />
              </template>
            </custom-button>
            <custom-button
              :variant="'danger'"
              :rounded="true"
              :size="'xsmall'"
              style="margin-top: 3px; margin: 4px"
              @click="deleteEmployee(employee)"
              :customType="'button'"
            >
              <template #icon>
                <Icon name="uil:trash" color="black" />
              </template>
            </custom-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="no-data" v-else>{{ noDataMessage }}</div>
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
let noDataMessage = ref("No employee found!");
const router = useRouter();
const filtersStore = useFiltersStore();
const deleteEmployee = (employee) => {
  showModal.value = true;
  customEmployee = employee;
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
