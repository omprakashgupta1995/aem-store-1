/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as n}from"@dropins/tools/preact-jsx-runtime.js";import{c as d}from"./store-config.js";import"./ServerErrorSignal.js";import"./fetch-graphql.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/lib.js";function u(i){return i.displayName||i.name||"Component"}const h=i=>{const o=u(i),a=({hideOnEmptyCart:s=!0,hideOnVirtualCart:r=!1,...e})=>{const t=d.value.data,l=t!==void 0&&(t===null||t.isEmpty),m=!!(t!=null&&t.isVirtual),c=s&&l||r&&m,p=`conditional-${o.toLowerCase()}`;return n("div",{className:p,children:!c&&n(i,{...e})})};return a.displayName=`Conditional(${o})`,a};export{h as w};
