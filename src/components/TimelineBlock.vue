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
        from: new Date(2013, 6),
        title: "Student of Belarussian State University of Informatics and Radioelectronics",
        description:
          "I received a master's degree in modeling and computer design of electronic components."
      },
      {
        from: new Date(2017, 5),
        title: "Minsk Central Custom",
        description:
          "Worked as a system administrator, i solved the problems of automation, delimiting security policies, and ensuring uninterrupted operation of the network."
      },
      {
        from: new Date(2018, 5),
        title: "Army",
        description:
          "I jumped from an airplane, shot from a machine gun and detonated bombs."
      },
      {
        from: new Date(2019, 5),
        title: "Freelance",
        description:
          "Developed sites using django, vue, fixed bugs."
      },
      {
        from: new Date(2019, 8),
        title: "LaciT",
        description:
          ` 
          Configure CI / SD with Jenkins and Docker.
          Creating streaming server with a counter of people who have entered the building.
          Developing a component which collects data from ROS and displays them on the frontend.
          `
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

