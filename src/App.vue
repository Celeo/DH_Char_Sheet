<template lang="pug">
div
  v-app
    v-content
      v-container(fluid grid-list-md)
        v-layout(row)
          v-flex(xs12)
            v-card.elevation-10(light color="blue lighten-3")
              v-card-text
                h2.headline.text-xs-center Kyreen Cromwell - Tech-Priest
        v-layout(row wrap)
          v-flex(md4 sm6 xs12)
            v-card.elevation-10(light color="blue lighten-3")
              v-card-text.text-xs-center
                h3.headline Attributes
                my-table(
                  :headers="attributes.headers"
                  :items="attributes.items"
                )
          v-flex(md4 sm6 xs12)
            v-card.elevation-10(light color="blue lighten-3")
              v-card-text.text-xs-center
                h3.headline Characteristics
                my-table(
                  :headers="characteristics.headers"
                  :items="characteristics.items"
                )
          v-flex(md4 sm6 xs12)
            v-card.elevation-10(light color="blue lighten-3")
              v-card-text.text-xs-center
                h3.headline Skills
                my-table(
                  :headers="skills.headers"
                  :items="skills.items"
                  :columns="['name', 'characteristic', 'trained', 'bonus']"
                )
</template>

<script>
import Table from '@/components/Table'
import data from '@/data'


export default {
  components: {
    'my-table': Table
  },
  data() {
    return data
  }
}
</script>
