/*! Copyright 2025 Adobe
All Rights Reserved. */
var t=Object.defineProperty;var m=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s;var a=(e,r,s)=>m(e,typeof r!="symbol"?r+"":r,s);class n{constructor(){a(this,"_map")}get map(){return this._map}set map(r){this._map=r}getMethods(){return{setMap:r=>{this.map=r},getMap:()=>this.map}}}const o=new n,{setMap:h,getMap:M}=o.getMethods();class g{constructor(){a(this,"_transformer")}get transformer(){return this._transformer}set transformer(r){this._transformer=r}getMethods(){return{setTransformer:r=>{this.transformer=r},getTransformer:()=>this.transformer}}}const p=new g,{setTransformer:c,getTransformer:i}=p.getMethods();export{c as a,i as b,M as g,h as s};
