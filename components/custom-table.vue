<template>
  <div>
   
    <table class="table table-hover data-table" v-if="filtersList.length > 0">
      <thead>
        <tr>
          <th scope="col" v-for="(column, index) in headings" :key="index">
             
            {{ column.toUpperCase() }}
          </th>
        </tr>
      </thead>
      <tbody>
                      

        <tr v-for="employee in filtersList" :key="employee.id">
           <td v-for="(column, indexColumn) in headings" :key="indexColumn">
           <template v-if="column === 'status'">
            <Chip
              :variant="
                employee[column] === 'Active' ? 'primary' : 'chip secondary' "
            >
              <template #icon>
                <Icon
                  :name="
                    employee[column] === 'Active'
                      ? 'wpf:online'
                      : 'icomoon-free:blocked'
                  "
                  color="white"
                />
              </template>
              
              <template #default>
                <span>
                  {{ employee[column] }}
                </span>
              </template>
            </Chip>
          </template>
          <template v-else-if="column ==='action'">
 <custom-button
              :variant="'success'"
              :rounded="true"
              :size="'xsmall'"
              style="margin-top: 3px; margin: 4px"
              @click="handleEdit(employee)"
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
              @click="handleView(employee)"
              :customType="'button'"
            >
              <template #icon>
                <Icon name="uil:eye" color="black" />
              </template>
            </custom-button>
            <custom-button
              :variant="'danger'"
              :rounded="true"
              :isLoading="true"
              :size="'xsmall'"
              style="margin-top: 3px; margin: 4px"
              @click="handleDelete(employee)"
              :customType="'button'"
            >
              <template #icon>
                <Icon name="uil:trash" color="black" />
              </template>
            </custom-button>
                
              </template>
          <template v-else>  {{ employee[column] }}</template>
          </td>
           
        </tr>
      </tbody>
    </table>
    <div class="no-data" v-else>{{ noDataMessage }}</div>
  </div>
</template>

<script setup lang="ts">
import { useFiltersStore } from "~/stores/test";
import { storeToRefs } from "pinia";
const emit = defineEmits(['deleteOnClick','editOnClick','viewOnClick']);
interface CTable {
		filtersList: Array<string>|[],
		headings: Array<string>|[], 
	}

	const props = withDefaults(defineProps<CTable>(),{});
//  const props = defineProps({
//   filtersList:{
//     type: Array,
//     default: [],
//     required: true
//   },
//   headings: {
//     type:Array,
//     default: [],
//     required: true}
// });
let showModal = ref(false);
let customEmployee = ref({});
let noDataMessage = ref("No employee found!");
const router = useRouter();
const handleDelete = (event:any) => {
  emit("deleteOnClick", event);
};
const handleEdit = (event:any) => {
  emit("editOnClick", event);
};
const handleView = (event:any) => {
  emit("viewOnClick", event);
};

</script>

<style lang="scss" scoped>
.no-data {
  margin-top: 6rem;
  margin-left: 27rem;
}
</style>
