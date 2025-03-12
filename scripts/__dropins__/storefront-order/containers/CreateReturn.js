import{jsx as a,jsxs as A}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as H,classes as Q}from"@dropins/tools/lib.js";import{Button as M,CartItem as V,Image as W,Header as $,InLineAlert as Z}from"@dropins/tools/components.js";import{S as z,u as D,a as U,R as K}from"../chunks/OrderCancel.js";import{useState as O,useRef as G,useEffect as T,useCallback as N}from"@dropins/tools/preact-hooks.js";import{events as J}from"@dropins/tools/event-bus.js";import{g as X}from"../chunks/getFormValues.js";import{s as Y}from"../chunks/setTaxStatus.js";import{createRef as I,Fragment as ee}from"@dropins/tools/preact.js";import{o as te,c as ne,n as se,r as ae,m as re}from"../chunks/returnOrdersHelper.js";import{g as ie,r as ce}from"../chunks/requestReturn.js";import{g as ue}from"../chunks/getStoreConfig.js";import*as f from"@dropins/tools/preact-compat.js";import{O as oe}from"../chunks/OrderLoaders.js";import{useText as le}from"@dropins/tools/i18n.js";import"../chunks/form.types.js";import"../chunks/network-error.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/transform-attributes-form.js";import"../chunks/convertCase.js";const de=s=>f.createElement("svg",{id:"Icon_Warning_Base",width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},f.createElement("g",{clipPath:"url(#clip0_841_1324)"},f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.9949 2.30237L0.802734 21.6977H23.1977L11.9949 2.30237Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M12.4336 10.5504L12.3373 14.4766H11.6632L11.5669 10.5504V9.51273H12.4336V10.5504ZM11.5883 18.2636V17.2687H12.4229V18.2636H11.5883Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"})),f.createElement("defs",null,f.createElement("clipPath",{id:"clip0_841_1324"},f.createElement("rect",{width:24,height:21,fill:"white",transform:"translate(0 1.5)"})))),pe=s=>f.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s},f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M0.75 12C0.75 5.78421 5.78421 0.75 12 0.75C18.2158 0.75 23.25 5.78421 23.25 12C23.25 18.2158 18.2158 23.25 12 23.25C5.78421 23.25 0.75 18.2158 0.75 12Z",stroke:"currentColor"}),f.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.75 12.762L10.2385 15.75L17.25 9",stroke:"currentColor"})),he=({onSuccess:s,onError:r,handleSetInLineAlert:i,orderData:p})=>{const[o,h]=O(p),[S,k]=O("products"),[w,R]=O(!0),[b,y]=O([]),[x,E]=O([]),[t,m]=O({taxIncluded:!1,taxExcluded:!1}),[e,l]=O([]),g=G([]);g.current.length!==b.length&&(g.current=b.map((n,c)=>g.current[c]||I())),T(()=>{const n=J.on("order/data",c=>{h(c),l(te(c)),R(!1)},{eager:!0});return()=>{n==null||n.off()}},[]),T(()=>{ue().then(n=>{if(n){const c=Y(n==null?void 0:n.shoppingCartDisplayPrice);m(c)}})},[]),T(()=>{ie("RMA_ITEM").then(n=>{n.length&&(E(n),R(!1))})},[]);const v=N(n=>{y(c=>c.findIndex(u=>(u==null?void 0:u.productSku)===(n==null?void 0:n.productSku))>-1?c.filter(u=>(u==null?void 0:u.productSku)!==(n==null?void 0:n.productSku)):[...c,n])},[]),C=N(n=>{k(n),i(),n==="products"&&y([])},[i]),_=N((n,c)=>{const L=b.map(u=>u.productSku===c?{...u,currentReturnOrderQuantity:n}:u);y(L)},[b]),F=N(async(n,c)=>{if(!c)return null;R(!0);const L={orderUid:(o==null?void 0:o.id)??"",contactEmail:(o==null?void 0:o.email)??""},u=[];g.current.length&&g.current.forEach(({current:d})=>{var P;const j=d==null?void 0:d.name.replace(/_\d+$/,""),q=((P=d==null?void 0:d.dataset)==null?void 0:P.quantity)??1,B=ne(X(d));u.push({orderItemUid:j,quantityToReturn:+q,...se(B)})}),ce({...L,items:u}).then(d=>{d&&(s==null||s(d),C("success"),i())}).catch(d=>{r==null||r(d.message),i({type:"error",heading:d.message})}),R(!1)},[C,r,s,i,o]);return{order:o,steps:S,loading:w,formsRef:g,taxConfig:t,attributesList:x,selectedProductList:b,itemsEligibleForReturn:e,handleSelectedProductList:v,handleSetQuantity:_,handleChangeStep:C,onSubmit:F}},me={success:a(pe,{}),warning:a(de,{}),error:a(z,{})},ge=()=>{const[s,r]=O({type:"success",heading:""}),i=N(p=>{if(!(p!=null&&p.type)){r({type:"success",heading:""});return}const o=me[p.type];r({...p,icon:o})},[]);return{inLineAlertProps:s,handleSetInLineAlert:i}},fe=({routeReturnSuccess:s,translations:r})=>{const i=()=>{window.location.href=(s==null?void 0:s())??""};return A("div",{className:"order-return-order-message",children:[a("p",{className:"order-return-order-message__title",children:r.successTitle}),a("p",{className:"order-return-order-message__subtitle",children:r.successMessage}),a(M,{onClick:i,type:"button",children:r.backStore})]})},be=({slots:s,formsRef:r,selectedProductList:i,loading:p,fieldsConfig:o,translations:h,handleChangeStep:S,onSubmit:k})=>{const{formData:w,errors:R,formRef:b,handleChange:y,handleBlur:x,handleSubmit:E}=D({fieldsConfig:ae(o,i==null?void 0:i.length),onSubmit:k});return A("form",{className:"order-return-reason-form",ref:b,onSubmit:E,name:"returnReasonForm",children:[i.map((t,m)=>{var F,n,c,L,u;const e=(t==null?void 0:t.giftCard)||{},l=t==null?void 0:t.product,g=re(o,m),v=`${t==null?void 0:t.id}_${m}`,C=(t==null?void 0:t.currentReturnOrderQuantity)??1,_={...t!=null&&t.currentReturnOrderQuantity?{Quantity:C}:{},..."configurableOptions"in t?t.configurableOptions:{},..."bundleOptions"in t?t.bundleOptions:{},..."senderName"in e&&(e!=null&&e.senderName)?{[h.sender]:e==null?void 0:e.senderName}:{},..."senderEmail"in e&&(e!=null&&e.senderEmail)?{[h.sender]:e==null?void 0:e.senderEmail}:{},..."recipientName"in e&&(e!=null&&e.recipientName)?{[h.recipient]:e==null?void 0:e.recipientName}:{},..."recipientEmail"in e&&(e!=null&&e.recipientEmail)?{[h.recipient]:e==null?void 0:e.recipientEmail}:{},..."message"in e&&(e!=null&&e.message)?{[h.message]:e==null?void 0:e.message}:{},..."downloadableLinks"in t&&(t!=null&&t.downloadableLinks)?{[`${(F=t==null?void 0:t.downloadableLinks)==null?void 0:F.count} ${h.downloadableCount}`]:(n=t==null?void 0:t.downloadableLinks)==null?void 0:n.result}:{}};return A(ee,{children:[a(V,{loading:p,title:a("div",{"data-testid":"product-name",children:(c=t==null?void 0:t.product)==null?void 0:c.name}),sku:a("div",{children:l==null?void 0:l.sku}),image:a(W,{src:((L=l==null?void 0:l.thumbnail)==null?void 0:L.url)??"",alt:((u=l==null?void 0:l.thumbnail)==null?void 0:u.label)??"",loading:"lazy",width:"90",height:"120"}),configurations:_}),a("form",{name:v,ref:r==null?void 0:r.current[m],"data-quantity":C,children:a(U,{className:"className",loading:p,fields:g,onChange:y,onBlur:x,errors:R,values:w})})]},m)}),s!=null&&s.ReturnFormActions?a(H,{"data-testid":"returnFormActions",name:"ReturnFormActions",slot:s==null?void 0:s.ReturnFormActions,context:{handleChangeStep:S}}):A("div",{className:"order-return-reason-form__actions",children:[a(M,{variant:"secondary",type:"button",onClick:()=>{S("products")},children:h.backStep}),a(M,{children:h.submit})]})]})},Be=({className:s,orderData:r,slots:i,onSuccess:p,onError:o,routeReturnSuccess:h,showConfigurableOptions:S})=>{const k=le({headerText:"Order.CreateReturn.headerText",successTitle:"Order.CreateReturn.success.title",successMessage:"Order.CreateReturn.success.message",sender:"Order.CreateReturn.giftCard.sender",recipient:"Order.CreateReturn.giftCard.recipient",message:"Order.CreateReturn.giftCard.message",outOfStock:"Order.CreateReturn.stockStatus.outOfStock",nextStep:"Order.CreateReturn.buttons.nextStep",backStep:"Order.CreateReturn.buttons.backStep",submit:"Order.CreateReturn.buttons.submit",backStore:"Order.CreateReturn.buttons.backStore",downloadableCount:"Order.CreateReturn.downloadableCount",returnedItems:"Order.CreateReturn.returnedItems"}),{inLineAlertProps:w,handleSetInLineAlert:R}=ge(),{itemsEligibleForReturn:b,formsRef:y,taxConfig:x,attributesList:E,steps:t,loading:m,selectedProductList:e,handleSelectedProductList:l,handleSetQuantity:g,handleChangeStep:v,onSubmit:C}=he({orderData:r,onSuccess:p,onError:o,handleSetInLineAlert:R});if(m)return a("div",{children:a(oe,{})});if(!m&&!E.length)return a("div",{});const _={products:a(K,{itemsEligibleForReturn:b,slots:i,translations:k,loading:m,taxConfig:x,selectedProductList:e,handleSelectedProductList:l,showConfigurableOptions:S,handleSetQuantity:g,handleChangeStep:v}),attributes:a(be,{slots:i,formsRef:y,loading:m,fieldsConfig:E,selectedProductList:e,handleChangeStep:v,translations:k,onSubmit:C}),success:a(fe,{translations:k,routeReturnSuccess:h}),error:null};return A("div",{className:Q(["order-create-return",s]),children:[a($,{title:k.headerText}),w.heading?a(Z,{className:"order-create-return_notification",variant:"secondary","data-testid":"orderCreateReturnNotification",...w}):null,_[t]]})};export{Be as CreateReturn,Be as default};
