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
            :editData="employeeData.id"
            :disableField="editMode"
            :key="editMode"
          ></custom-text>
        </div>
        <div class="col-md-4">
          <custom-label>Name</custom-label>
          <custom-text
            :placeholder="'Enter Name'"
            v-model="employeeData.name"
            :editData="employeeData.name"
          ></custom-text>
        </div>
        <div class="col-md-4">
          <custom-label>Email</custom-label>

          <custom-text
            :type="'email'"
            :placeholder="'Enter Email'"
            v-model="employeeData.email"
            :editData="employeeData.email"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 skills">
           <custom-label>Skills</custom-label>
          <custom-check-box
            :items="checkboxItems"
            label="Skills"
            checkClass="'checkbox-container'"
            align="left"
            :valuesSelected="employeeData.skills"
            @update:selectedValues="handleSelectedValuesUpdate"
            checkboxClass="custom-checkbox"
            colour="#007bff"
          />
        </div>
        <div class="col-md-5" style="margin-top: 42px; margin-left: 85px;">
          <custom-label>Gender</custom-label>

          <custom-radio
            :gender="['Male', 'Female']"
            :key="editMode"
            :disabled="false"
            :editMode="editMode"
            v-model="employeeData.gender"
            :editData="employeeData.gender"
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
            :editData="employeeData.status"
          />
        </div>
        <div class="col-md-3">
          <custom-label>Designation</custom-label>
          <custom-text
            :placeholder="'Enter Designation'"
            v-model="employeeData.designation"
            :editData="employeeData.designation"
          ></custom-text>
        </div>
        <div class="col-md-3">
          <custom-label>Team</custom-label>
          <custom-text
            :placeholder="'Enter Team'"
            v-model="employeeData.team"
            :editData="employeeData.team"
          ></custom-text>
        </div>
      </div>
      <div class="address">
        <div class="form-group">
          <custom-label>Address1</custom-label>
          <custom-text
            :placeholder="'Enter Address1'"
            v-model="employeeData.address1"
            :editData="employeeData.address1"
          ></custom-text>
        </div>
        <div class="form-group">
          <custom-label>Address2</custom-label>
          <custom-text
            :placeholder="'Enter Address2'"
            v-model="employeeData.address2"
            :editData="employeeData.address2"
          ></custom-text>
        </div>
        <div class="form-group col-md-6">
          <custom-label>City</custom-label>
          <custom-text
            :placeholder="'Enter City'"
            v-model="employeeData.city"
            :editData="employeeData.city"
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

const router = useRouter();
let employeeData = ref({
  id: null,
  name: null,
  email: null,
  gender: null,
  status: null,
  skills: null,
  designation: null,
  address1: null,
  address2: null,
  city: null,
  team: null,
});

const inputVal = ref("");
let componentTitle = ref("Create");
const checkboxItems = ref(["Vue","Nuxt","Nodejs"]);
let editMode = ref(false);
let customForm = ref(false);
const selectedCheckboxValues = ref([]);
const filtersStore = useFiltersStore();
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

 
const handleSelectedValuesUpdate = (newValues) => {
   selectedCheckboxValues.value = newValues;
 
 };
const addValueToEmployeeList = () => {
   employeeData.value.skills = selectedCheckboxValues.value
   console.log('employeeData.value',employeeData.value)
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
.skills {
  margin-top: 41px;
}
.row{
  margin-top: 15px;
}
</style>
