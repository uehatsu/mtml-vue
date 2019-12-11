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
export declare type Website = iWebsite;
export declare type Websites = iWebsite[];
export default function install(Vue: any, options: any): void;
export {};
