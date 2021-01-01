<template>
  <button
    class="button"
    :class="btnStyle"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnStyle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
.button {
  font: inherit;
  background-color: #aeaeae;
  color: #000;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 1px 1px 2px gray;
  transition: all 200ms;

  &:hover,
  &:active {
    background-color: rgb(126, 126, 126);
    border: 1px solid black;
    box-shadow: none;
    color: white;
  }
}

.inverted {
  background-color: white;
  color: black;
  border: 1px solid transparent;
}

.inverted:hover,
.inverted:active {
  color: #ccc;
  background-color: white;
  border: 1px solid transparent;
}

.cancel {
  background-color: red;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background-color: salmon;
  border: 1px solid transparent;
  color: white;
}
</style>
