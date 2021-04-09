<template>
  <div class="base-input">
    <label v-if="label != null" :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    }
  }
})
</script>

<style>
.base-input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 50px;
  width: 100%;
  margin: 0.5em 0;
}

.base-input input {
  height: 25px;
  width: 100%;
}
</style>