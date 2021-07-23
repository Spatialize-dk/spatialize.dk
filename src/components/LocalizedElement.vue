<template>
  <div>{{foo}}</div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class LocalizedElement extends Vue {

  private foo = undefined;

  public mount() {
    this.foo = require('@/content/xxx.html');
  }

}
</script>

<style scoped>

</style>
