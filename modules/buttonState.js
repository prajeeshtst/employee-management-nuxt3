import { computed } from "vue";
export default function useCreateButtonState(user, errors) {
 
  const isCreateButtonDisabled = computed(() => {
     let disabled = true;
   
     for (let prop in user) {
       if (!user[prop] || errors[prop]) {
         disabled = true;
         break;
      }
      disabled = false;
    }
    return disabled;
  });
  return { isCreateButtonDisabled };
}
