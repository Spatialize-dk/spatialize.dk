<template>

  <div>

    <span v-on:click="sL('dk')"
          v-bind:class="{ bold: isActive('dk') }">DK</span> | <span v-bind:class="{ bold: isActive('en') }"
                                                                      v-on:click="sL('en')">EN</span>
    <br>
    -><b>{{language}}</b><-

  </div>

</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import store, {SetLanguage} from "@/store";
import { mapState } from 'vuex';

@Component(
    {
      computed: mapState([
          'language'])
    }
)
export default class LanguageSelector extends Vue {

  lng = 'dk';

  @Watch('language', { immediate: true, deep: true })
  ssL (newVal: any): void {
    console.log('@Watch ', newVal)
    this.lng = newVal;
  }


    sL(lang: String) {
    store.dispatch({
      type: SetLanguage,
      value: lang
    })
  }

  isActive(lang: string) {
    console.log('isActive', lang)
    if (lang === this.lng) {
      return true
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.bold {
  font-weight: bold;
}

</style>
