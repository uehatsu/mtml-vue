<template>
  <span>{{ website.name }}</span>
</template>

<script lang="ts">
import Vue from 'vue';
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';

interface Data {}
interface Methods {}
interface Computed {}
interface Props {}

const options: ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props> = {
  props: {
    website: Object,
  },
  mounted(): void {
    console.log('attrs', this.$attrs)
    console.log('props', this.$props)
    console.log('scopedSlots', this.$scopedSlots)
    console.log('this', this)
  }
};

export default Vue.extend(options);
</script>
