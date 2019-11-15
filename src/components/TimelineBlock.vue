<template>
  <div class="d-flex flex-wrap justify-content-center timeline">
    <Timeline
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      order="asc"
      v-scroll-reveal.reset="{ delay: 350 }"
    />
  </div>
</template>


<script>
    import Timeline from 'timeline-vuejs'
    export default {
    name: 'timeline',
    data: () => ({
        messageWhenNoItems: 'There arent items',
    dataTimeline: [
      {
        from: new Date(2017, 5),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2017, 8),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
      {
        from: new Date(2016, 11),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde."
      },
    ]
    }),
    components:{
        Timeline,
    },
    methods:{
        

            }
    }
</script>

<style  scoped>
.timeline{

}
</style>>

