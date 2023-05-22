import { computed } from "vue";
export default function useCreateButtonState(user, errors) {
 
  const isCreateButtonDisabled = computed(() => {
     let disabled = true;
     console.log('errors',errors)
     console.log('user',user)

     for (let prop in user) {
       if (!user[prop] || errors[prop]) {
         disabled = true;
         console.log('disabled !!!!!!',!user[prop] )
        //  console.log('disabled @@@@@@',errors[prop] )
        break;
      }
      disabled = false;
    }
    return disabled;
  });
  return { isCreateButtonDisabled };
}
