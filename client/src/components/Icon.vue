<template>
  <svg class="bi" width="32" height="32" fill="currentColor">
    <use :xlink:href="url" />
  </svg>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue';

const { iconName } = defineComponent({
  name: 'Icon',
  props: {
    iconName: {
      type: String,
      required: true,
      default: 'heart-fill'
    },
  },
})

const url = ref(`bootstrap-icons.svg#${iconName}`)

</script>

<style scoped></style>