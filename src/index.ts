import MTWebsites from './components/website/MTWebsites.vue';
import MTWebsiteName from './components/website/MTWebsiteName.vue';

interface iWebsite {
  id: number;
  type: "website" | "blog";
  name?: string;
  websites?: iWebsite[];
  entries?: iEntry[];
}

interface iEntry {
  id: number;
  type: "entry" | "page";
  title?: string;
  body?: string;
}

export type Website = iWebsite;
export type Websites = iWebsite[];

export default function install(Vue: any, options: any) {
  Vue.component('MTWebsiteName', MTWebsiteName);
  Vue.component('MTWebsites', MTWebsites);
}
