<template lang="pug">
  v-data-table(v-bind:headers="headers" v-bind:items="items" hide-actions light)
    template(slot="items" slot-scope="props")
      td.text-xs-left(v-for="c in columns") {{ props.item[c] }}
</template>

<script>
export default {
  props: {
    headers: Array,
    items: Array,
    columns: {
      type: Array,
      default() {
        return [
          'name',
          'value'
        ]
      }
    }
  }
}
</script>
