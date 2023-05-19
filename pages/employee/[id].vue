<template>
  <div>
    <div class="table-title">
      <div class="wrapper">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
      </div>

      {{ customEmployee.name }}
      <p class="sub-title">{{ customEmployee.designation }}</p>
      <div class="add-employee">
        <Chip :customClass="customEmployee.status==='Active'?'chip primary':'chip secondary'">{{ customEmployee.status }}</Chip>
        <!-- <span class="chip primary"> {{ customEmployee.status }} </span> -->
      </div>
    </div>

    <div class="custom-container">
      <div class="card details-card">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <div class="custom-sub-title">Date of join</div>
              <span class="custom-title"> 12 March 2022</span>
            </div>
            <div class="col">
              <div class="custom-sub-title">Team</div>
              <span class="custom-title"> {{ customEmployee.team }}</span>
            </div>
            <div class="col">
              <div class="custom-sub-title">Email</div>
              <span class="custom-title"> {{ customEmployee.email }}</span>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="custom-sub-title">Address</div>
              <span class="custom-title"
                >{{ customEmployee.address1 }},{{ customEmployee.address2 }},{{
                  customEmployee.city
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useFiltersStore } from "~/stores/test";
 

const router = useRouter();
const filtersStore = useFiltersStore();

const { customEmployee } = storeToRefs(filtersStore);

onMounted(() => {
  console.log(router.path);
});
</script>

<style lang="scss" scoped>
.chip {
  padding: 8px 10px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
  margin: 0 10px;

  cursor: pointer;
}

.chip.primary {
  background: #5fd6d4;
  color: whitesmoke;
}
.custom-title {
}
.custom-sub-title {
  width: 159 px;
  font-family: "Figtree";

  font-size: 16px;
  line-height: 19px;
  color: #818181;
}
.row {
  margin-top: 2%;
}
.details-card {
  height: 320px;
}
.wrapper {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
}

.wrapper img {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: auto;
  transform: translate(-50%, -50%);
}
</style>
