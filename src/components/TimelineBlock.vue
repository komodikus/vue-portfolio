<template>
  <div class="d-flex flex-wrap justify-content-center timeline">
      <div class="work-block work-position"></div>
      <div class="work-block work-position2"></div>
      <div class="work-block work-position3"></div>
  </div>
</template>


<script>
    export default {
    name: 'timeline',
    data() {
        return {
            
        }
    },
    methods:{
        

            }
    }
</script>

<style  scoped>
.work-block{
    width: 320px;
    height: 225px;
}
.work-position{
    background: blue;
}
.work-position2{
    background: red;
}
.work-position3{
    background: green;
}
</style>>

