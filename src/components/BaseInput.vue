<script lang="ts">
import { defineComponent, h } from 'vue'

export default defineComponent({
  name: 'BaseInput',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    }
  },
  methods: {
    input(e: Event): void {
      this.$emit('update:modelValue', (e.target as HTMLInputElement).value);
    }
  },
  render() {
    return h('div', {
      class: 'base-input'
    }, [
      this.label != null
        ? h('label', { for: this.id }, this.label)
        : null,
      h('input', {
        ...this.$attrs,
        id: this.id,
        value: this.modelValue,
        onInput: this.input,
      })
    ])
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
  max-width: 100%;
  margin: 0.5em 0;
}

.base-input input {
  height: 3em;
  width: 100%;
  box-sizing: border-box;
}
</style>