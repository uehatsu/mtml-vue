<template>
  <div>
    MTWebsites
    <slot v-for="(website, index) of computedWebsites" :website="website" :index="index" :length="computedWebsites.length" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import { Website, Websites } from '../../index';

interface Data {}
interface Methods {
  getWebsites: (websites: Websites) => Websites,
  filterWebsites: (inputObject: Websites|Website) => Websites,
}
interface Computed {
  computedWebsites: Websites,
}
interface Props {
  websites: Websites,
}

const options: ThisTypedComponentOptionsWithRecordProps<Vue, Data, Methods, Computed, Props> = {
  props: {
    websites: {
      type: Array,
      required: true,
    },
  },
  mounted(): void {
    console.log(this)
    console.log(this.computedWebsites);
  },
  methods: {
    getWebsites(websites: Websites): Websites {
      const filteredWebsites = this.filterWebsites(websites)
        .map((website: Website): Website => {
          delete website.websites;
          return website
        })
        .sort((a: Website, b: Website) => {
          return a.id - b.id;
        });
      return filteredWebsites;
    },
    filterWebsites(inputObject: Websites|Website): Websites {
      let result = [];
      if (inputObject instanceof Array) {
        for (let i = 0; i < inputObject.length; i++) {
          const tmpObject = this.filterWebsites(inputObject[i]);
          if (tmpObject.length > 0) {
            for (let j = 0; j < tmpObject.length; j++) {
              result.push(tmpObject[j]);
            }
          }
        }
      } else {
        for (let prop in inputObject) {
          if (prop === 'type' && inputObject['type'] === 'website') {
            result.push(inputObject)
          }
          if (prop === 'websites' && inputObject['websites'] instanceof Array) {
            const tmpObject = this.filterWebsites(inputObject['websites']);
            if (tmpObject.length > 0) {
              for (let j = 0; j < tmpObject.length; j++) {
                result.push(tmpObject[j]);
              }
            }
          }
        }
      }
      return result;
    }
  },
  computed: {
    computedWebsites(): Websites {
      return this.getWebsites(this.$props.websites);
    },
  },
};

export default Vue.extend(options);
</script>
