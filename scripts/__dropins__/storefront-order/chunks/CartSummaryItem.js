/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as t,jsxs as E,Fragment as w}from"@dropins/tools/preact-jsx-runtime.js";import{Price as u,CartItem as o,Icon as r,Image as U,Incrementer as c}from"@dropins/tools/components.js";import{useCallback as d}from"@dropins/tools/preact-hooks.js";import{classes as X}from"@dropins/tools/lib.js";import*as Q from"@dropins/tools/preact-compat.js";const p=N=>Q.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...N},Q.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),Q.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.75 5.88423V4.75H12.25V5.88423L12.0485 13.0713H11.9515L11.75 5.88423ZM11.7994 18.25V16.9868H12.2253V18.25H11.7994Z",stroke:"currentColor"})),ne=({loading:N,product:e,itemType:Y,taxConfig:D,translations:v,disabledIncrementer:C,showConfigurableOptions:_,onQuantity:y,routeProductDetails:b,isReturnProductList:I})=>{var H,M,Z,j,q,x,z,F,O,R,W,$,B,K,A,G,J;const{taxExcluded:S,taxIncluded:f}=D,m=d((h,g,T)=>t(u,{amount:h,currency:g,weight:"normal",...T}),[]);let k={};const L=Y==="cancelled",P=(M=(H=e==null?void 0:e.product)==null?void 0:H.stockStatus)==null?void 0:M.includes("IN_STOCK"),a=(e==null?void 0:e.giftCard)||{},l=(Z=e==null?void 0:e.itemPrices)==null?void 0:Z.priceIncludingTax,s=(j=e==null?void 0:e.itemPrices)==null?void 0:j.originalPrice,n=(q=e==null?void 0:e.itemPrices)==null?void 0:q.price,i=e.discounted&&((x=e.price)==null?void 0:x.value)!==(s==null?void 0:s.value)*(e==null?void 0:e.totalQuantity),V={..."configurableOptions"in e?e.configurableOptions:{},..."bundleOptions"in e?e.bundleOptions:{},..."senderName"in a?{[v.sender]:a==null?void 0:a.senderName}:{},..."senderEmail"in a&&(a!=null&&a.senderEmail)?{[v.sender]:a==null?void 0:a.senderEmail}:{},..."recipientName"in a&&(a!=null&&a.recipientName)?{[v.recipient]:a==null?void 0:a.recipientName}:{},..."recipientEmail"in a&&(a!=null&&a.recipientEmail)?{[v.recipient]:a==null?void 0:a.recipientEmail}:{},..."message"in a&&(a!=null&&a.message)?{[v.message]:a==null?void 0:a.message}:{},..."downloadableLinks"in e&&(e!=null&&e.downloadableLinks)?{[`${(z=e==null?void 0:e.downloadableLinks)==null?void 0:z.count} ${v.downloadableCount}`]:(F=e==null?void 0:e.downloadableLinks)==null?void 0:F.result}:{}};if(f&&S){const h=i?s==null?void 0:s.value:(l==null?void 0:l.value)*(e==null?void 0:e.totalQuantity);k={taxExcluded:!0,taxIncluded:void 0,price:m(s==null?void 0:s.value,s==null?void 0:s.currency),total:E(w,{children:[m(h,s==null?void 0:s.currency,{variant:e.discounted&&(l==null?void 0:l.value)!==h?"strikethrough":"default"}),e.discounted&&(l==null?void 0:l.value)!==h?m(l==null?void 0:l.value,l==null?void 0:l.currency,{sale:!0,weight:"bold"}):null]}),totalExcludingTax:m((n==null?void 0:n.value)*e.totalQuantity,n==null?void 0:n.currency)}}else if(!f&&S)k={taxExcluded:void 0,taxIncluded:void 0,price:m(s==null?void 0:s.value,s==null?void 0:s.currency),total:E(w,{children:[m((s==null?void 0:s.value)*(e==null?void 0:e.totalQuantity),l==null?void 0:l.currency,{variant:i?"strikethrough":"default"}),i?m((O=e.price)==null?void 0:O.value,(R=e.price)==null?void 0:R.currency,{sale:!0,weight:"bold"}):null]}),totalExcludingTax:m((n==null?void 0:n.value)*(e==null?void 0:e.totalQuantity),n==null?void 0:n.currency)};else if(f&&!S){const h=i?s.value:l.value*e.totalQuantity;k={taxExcluded:void 0,taxIncluded:!0,price:m(l==null?void 0:l.value,l==null?void 0:l.currency),total:E(w,{children:[m(h,l==null?void 0:l.currency,{variant:i?"strikethrough":"default",weight:"bold"}),i?m(l==null?void 0:l.value,l==null?void 0:l.currency,{sale:!0,weight:"bold"}):null]})}}return t(o,{loading:N,alert:L&&P?E("span",{children:[t(r,{source:p}),v.outOfStock]}):t(w,{}),configurations:(_==null?void 0:_(V))??V,title:b?t("a",{"data-testid":"product-name",className:X(["cart-summary-item__title",["cart-summary-item__title--strikethrough",L]]),href:b(e),children:(W=e==null?void 0:e.product)==null?void 0:W.name}):t("div",{"data-testid":"product-name",className:X(["cart-summary-item__title",["cart-summary-item__title--strikethrough",L]]),children:($=e==null?void 0:e.product)==null?void 0:$.name}),sku:t("div",{children:(B=e==null?void 0:e.product)==null?void 0:B.sku}),quantity:e!=null&&e.eligibleForReturn&&(e!=null&&e.returnableQuantity)?(e==null?void 0:e.returnableQuantity)??e.totalQuantity:I?void 0:e.totalQuantity,image:b?t("a",{href:b(e),children:t(U,{src:(K=e==null?void 0:e.product)==null?void 0:K.thumbnail.url,alt:(A=e==null?void 0:e.product)==null?void 0:A.thumbnail.label,loading:"lazy",width:"90",height:"120"})}):t(U,{src:(G=e==null?void 0:e.product)==null?void 0:G.thumbnail.url,alt:(J=e==null?void 0:e.product)==null?void 0:J.thumbnail.label,loading:"lazy",width:"90",height:"120"}),...k,footer:y&&!C?t(c,{value:1,min:1,max:e==null?void 0:e.returnableQuantity,onValue:h=>y==null?void 0:y(Number(h)),name:"quantity"}):void 0})};export{ne as C,p as S};
