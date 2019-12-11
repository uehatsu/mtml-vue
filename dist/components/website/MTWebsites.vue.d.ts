import Vue from 'vue';
import { Website, Websites } from '../../index';
interface Data {
}
interface Methods {
    getWebsites: (websites: Websites) => Websites;
    filterWebsites: (inputObject: Websites | Website) => Websites;
}
interface Computed {
    computedWebsites: Websites;
}
interface Props {
    websites: Websites;
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, Methods, Computed, Props>;
export default _default;
