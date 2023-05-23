<template>
  <div class="table-title">
    {{ componentTitle }} Employee
  

    <p class="sub-title">Employee Management</p>
    <div class="add-employee">
      <custom-button
        :onClick="goBack"
        :customClass="'btn btn-dark'"
        :style="'font-size: 13px'"
        :customType="'button'"
      >
        Back</custom-button
      >
    </div>
  </div>
  <div class="container card-register">
    <form
      class="reg-form"
      @submit.prevent="addValueToEmployeeList(employeeData)"
      :key="customForm"
    >
      <div class="row">
        <div class="col-md-4">
          <custom-label>Emp.ID</custom-label>
          <custom-text
            v-model="employeeData.id"
            :propData="employeeData.id"
            :disableField="editMode"
            :key="editMode"
          ></custom-text>
        </div>
        <div class="col-md-8">
                   <custom-label>Name</custom-label>
          <custom-text
            v-model="employeeData.name"
            :propData="employeeData.name"
          ></custom-text>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
                   <custom-label>Email</custom-label>

          <email-field
            v-model="employeeData.email"
            :propData="employeeData.email"
          />
        </div>
        <div class="col-md-5" style="margin-top: 42px">
                    <custom-label>Gender</custom-label>

          <custom-check-box
            :gender="['Male', 'Female']"
            :key="editMode"
            :disabled="false"
            :editMode="editMode"
            v-model="employeeData.gender"
            :propData="employeeData.gender"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <custom-label>Status</custom-label>
          <custom-select
            :key="editMode"
            :editMode="editMode"
            v-model="employeeData.status"
            :options="['Active', 'Disabled']"
            :propData="employeeData.status"
          />
        </div>
        <div class="col-md-3">
          <custom-label>Designation</custom-label>
          <custom-text
            v-model="employeeData.designation"
            :propData="employeeData.designation"
          ></custom-text>
        </div>
        <div class="col-md-3">
          <custom-label>Team</custom-label>
          <custom-text
            v-model="employeeData.team"
            :propData="employeeData.team"
          ></custom-text>
        </div>
      </div>
      <div class="address">
        <div class="form-group">
          <custom-label>Address1</custom-label>
          <custom-text
            v-model="employeeData.address1"
            :propData="employeeData.address1"
          ></custom-text>
        </div>
        <div class="form-group">
          <custom-label>Address2</custom-label>
          <custom-text
            v-model="employeeData.address2"
            :propData="employeeData.address2"
          ></custom-text>
        </div>
        <div class="form-group col-md-6">
          <custom-label>City</custom-label>
          <custom-text
            v-model="employeeData.city"
            :propData="employeeData.city"
          ></custom-text>
        </div>
      </div>
       <custom-button
        :customClass="'btn btn-primary'"
        :customType="'submit'"
        style="margin-top: 1rem"
      >
        {{ componentTitle }} Employee</custom-button
      >
    </form>
  </div>
</template>

<script setup>
import { useFiltersStore } from "~/stores/test";
import { storeToRefs } from "pinia";
import customCheckBox from "~/components/customCheckBox.vue";
import useCreateButtonState from "~/modules/buttonState";
import useFormValidation from "~/modules/useFormValidation";

const router = useRouter();
let employeeData = ref({
  id: null,
  name: null,
  email: null,
  gender: null,
  status: null,
  designation: null,
  address1: null,
  address2: null,
  city: null,
  team: null,
});

const inputVal = ref("");
let componentTitle = ref("Create");
let editMode = ref(false);
let customForm = ref(false);
const filtersStore = useFiltersStore();
const { error } = useFormValidation();
onMounted(() => {
   
  if (
    router.currentRoute &&
    router.currentRoute._value &&
    router.currentRoute._value.query &&
    router.currentRoute._value.query.id
  ) {
    const singleEmployee = filtersStore.findEmployee(
      router.currentRoute._value.query.id
    );
    employeeData.value = singleEmployee[0];
    componentTitle = "Edit";
    editMode.value = true;
    customForm = true;
     
  }
});

const { isCreateButtonDisabled } = useCreateButtonState(
  employeeData.value,
  error
);

 
const addValueToEmployeeList = () => {
   router.push("/");
  editMode.value
    ? filtersStore.editValueToEmployeeList(employeeData.value)
    : filtersStore.addValueToEmployeeList(employeeData.value);
};
const { filtersList } = storeToRefs(filtersStore);
const goBack = () => {
  router.go(-1);
};
const inputfrom = (event) => {
  employeeData.id = event.target.value;
 
 };

</script>

<style lang="scss" scoped>
.reg-form {
  padding: 150px;
}
.create-button {
  margin-top: 1rem;
}
.card-register {
  max-width: 90%;
  margin-left: 6%;
  margin-right: 6%;
  /* width: 60%; */
  margin-top: 6%;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
.address {
  border-style: solid;
  border-width: thin;
  border-color: #eaeaea;
  padding: 30px;
  margin-top: 10px;
  margin-bottom: 10 px;
}
.custom-labels {
  margin-bottom: 4px;
}
</style>
