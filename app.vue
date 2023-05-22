<template>
   <div>
     <img class="mt-5 logo" src="https://techgentsia.com/images/logo.png" alt="">
   </div>
  <div class="card mt-5">
    <div class="card-body">
      
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
useHead({
  title: "this is the title",
  link: [
    {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity:
        "sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx",
      crossorigin: "anonymous",
    },
     {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css",
      rel: "stylesheet",
      integrity:
        "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ",
      crossorigin: "anonymous",
    },
   ],
  script: [
    {
      src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js",
      integrity:
        "sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa",
      crossorigin: "anonymous",
    },
     
  ],
});
</script>
<style>
.custom-container {
  padding: 8%;
}
.card {
  max-width: 90%;
  margin-left: 6%;
  margin-right: 6%;
  /* width: 60%; */
  margin-top: 6%;
}
.data-table {
  margin-top: 135px;
}
.table-title {
  position: absolute;
  margin: 80px;
  width: 69rem;
}
.sub-title {
  position: absolute;
  width: 159 px;
  font-family: "Figtree";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #818181;
}
.add-employee {
  float: right;
  margin-left: 57 rem;
}
.logo{
  margin-left: 6rem;
}
</style>
