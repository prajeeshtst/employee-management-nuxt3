import { defineStore } from "pinia";
const router = useRouter();
export const useFiltersStore = defineStore(
  "filterStore",
  () => {
    const filtersList = ref([]);

    let customEmployee = ref({});

    function addValueToEmployeeList(value:any) {
 
      const isEmpty = Object.values(value).every((x) => x === null || x === "");
      if (!isEmpty) {
        filtersList.value.push(value);
        router.push('/')
      } else {
        alert("Please enter all fields");
      }
    }
    function editValueToEmployeeList(value:any) {
       filtersList.value.map(obj => value.find(o => o.id === obj.id) || obj);
      router.push('/')
    }
    
    function deleteEmployee(id:any) {
      const index = filtersList.value.findIndex((emp) => emp.id == id);
       filtersList.value.splice(index, 1);
    }
    function findEmployee(id:any){
      const employee = filtersList.value.filter(obj => {
        return obj.id === id
      })
      return employee
    }
    function setCustomEmployee(data) {
      customEmployee.value = data;
    }
    return {
      addValueToEmployeeList,
      setCustomEmployee,
      filtersList,
      customEmployee,
      deleteEmployee,
      findEmployee,
      editValueToEmployeeList
    };
  },
  { persist: true }
);
