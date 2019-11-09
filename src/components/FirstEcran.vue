<template>
  <div class="first-ecran">
      <div class="row">
          <div class="col">

          </div>
          <div class="col">

          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'FirstEcran',
  data() {
      return {
        pythonImg:require("../assets/pythonbg1.png"),
      }
  },
  methods:{

  },
}
</script>


<style>
    .first-ecran{
        height: 1200px;
        background: url("../assets/pythonbg1.png");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .col{
        padding: 0px;
    }
</style>