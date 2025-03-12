/*! Copyright 2025 Adobe
All Rights Reserved. */
import{merge as se,Initializer as ue}from"@dropins/tools/lib.js";import{events as N}from"@dropins/tools/event-bus.js";import{FetchGraphQL as ae}from"@dropins/tools/fetch-graphql.js";import{s as le}from"./getProductConfigurationValues.js";function Me(e){const n=new URLSearchParams(window.location.search);Object.entries(e).forEach(([r,t])=>{t===null?n.delete(r):n.set(r,String(t))});let i=window.location.pathname;i+=`?${n.toString()}`,i+=window.location.hash,window.history.replaceState({},"",i)}function me(){const e=new URLSearchParams(window.location.search),n={};return e.forEach((i,r)=>{n[r]=i}),n}function ce(e){var n,i,r,t,o,u,l,s,m,a,c,f;return{productId:Number(e==null?void 0:e.externalId),name:e==null?void 0:e.name,sku:(e==null?void 0:e.variantSku)||(e==null?void 0:e.sku),topLevelSku:e==null?void 0:e.sku,specialToDate:void 0,specialFromDate:void 0,newToDate:void 0,newFromDate:void 0,createdAt:void 0,updatedAt:void 0,manufacturer:void 0,countryOfManufacture:void 0,categories:void 0,productType:e==null?void 0:e.productType,pricing:{regularPrice:((i=(n=e==null?void 0:e.prices)==null?void 0:n.regular)==null?void 0:i.amount)||0,minimalPrice:(t=(r=e==null?void 0:e.prices)==null?void 0:r.final)==null?void 0:t.minimumAmount,maximalPrice:(u=(o=e==null?void 0:e.prices)==null?void 0:o.final)==null?void 0:u.maximumAmount,specialPrice:(s=(l=e==null?void 0:e.prices)==null?void 0:l.final)==null?void 0:s.amount,tierPricing:void 0,currencyCode:((a=(m=e==null?void 0:e.prices)==null?void 0:m.final)==null?void 0:a.currency)||"USD"},canonicalUrl:e==null?void 0:e.url,mainImageUrl:(f=(c=e==null?void 0:e.images)==null?void 0:c[0])==null?void 0:f.url}}const fe={PRODUCT_CONTEXT:"productContext"},de={PRODUCT_PAGE_VIEW:"product-page-view"};function ne(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function Pe(e,n){const i=ne();i.push({[e]:null}),i.push({[e]:n})}function ge(e,n){ne().push(r=>{const t=r.getState?r.getState():{};r.push({event:e,eventInfo:{...t,...n}})})}function ye(e){const n=ce(e);Pe(fe.PRODUCT_CONTEXT,n),ge(de.PRODUCT_PAGE_VIEW)}var K=(e=>(e.ComplexProduct="complex",e.SimpleProduct="simple",e))(K||{}),re=(e=>(e.ComplexProductView="ComplexProductView",e.SimpleProductView="SimpleProductView",e))(re||{});function H(e,n){var u,l,s,m,a,c,f,P,g,w,d,E;const i=((m=(s=(l=(u=e==null?void 0:e.options)==null?void 0:u[0])==null?void 0:l.values)==null?void 0:s[0])==null?void 0:m.__typename)==="ProductViewOptionValueProduct",r=Ce(e,i,n==null?void 0:n.preselectFirstOption),t=(e==null?void 0:e.__typename)===re.SimpleProductView?K.SimpleProduct:K.ComplexProduct,o=e?{name:e.name,sku:e.sku,isBundle:i,addToCartAllowed:e.addToCartAllowed,inStock:e.inStock,shortDescription:e.shortDescription,metaDescription:e.metaDescription,metaKeyword:e.metaKeyword,metaTitle:e.metaTitle,description:e.description,images:we(e),prices:Se(e,i,r),attributes:he(e),options:pe(e,i),optionUIDs:r,url:e.url,urlKey:e.urlKey,externalId:e.externalId,externalParentId:e.externalParentId,variantSku:e.variantSku,productType:t}:null;return se(o,((P=(f=(c=(a=k.getConfig())==null?void 0:a.models)==null?void 0:c.ProductDetails)==null?void 0:f.transformer)==null?void 0:P.call(f,e))??((E=(d=(w=(g=k.getConfig())==null?void 0:g.models)==null?void 0:w.ProductDetails)==null?void 0:d.transform)==null?void 0:E.call(d,e)))}function we(e){var n,i;return(i=(n=e.images)==null?void 0:n.filter(r=>{var t;return!((t=r.roles)!=null&&t.includes("hide_from_pdp"))}))==null?void 0:i.map(r=>(r.url=r.url.replace(/^https?:/,""),r))}function he(e){var n,i;return(i=(n=e.attributes)==null?void 0:n.filter(({roles:r})=>(r==null?void 0:r.indexOf("visible_in_pdp"))!==-1))==null?void 0:i.map(({label:r,value:t,name:o})=>({id:o,label:r,value:t.toString().split(",").join(", ")}))}function pe(e,n){const{options:i,optionUIDs:r}=e;return i==null?void 0:i.map(({id:t,title:o,required:u,multi:l,values:s})=>{var c;const m=(c=s==null?void 0:s[0])==null?void 0:c.__typename;let a=s==null?void 0:s[0].type;return a?a=a.replace("COLOR_HEX","color").replace("TEXT","text").replace("IMAGE","image"):a="dropdown",{id:t,type:a,typename:m,label:o,required:u,multiple:l,items:n?De(s,r):xe(s,r,a)}})}function De(e,n){return e==null?void 0:e.filter(({enabled:i})=>typeof i>"u"||i).map(({id:i,title:r,inStock:t,isDefault:o,product:u})=>({id:i,inStock:t,label:r,selected:(n==null?void 0:n.indexOf(i))>-1||o,value:i,product:u}))}function xe(e,n,i){return e==null?void 0:e.map(({id:r,title:t,inStock:o,value:u})=>({id:r,inStock:o,label:t,selected:(n==null?void 0:n.indexOf(r))>-1,value:(i==null?void 0:i.toLowerCase())==="dropdown"?r:u==null?void 0:u.replace(/^https?:/,"")}))}function Se(e,n,i){var d,E,X,B,z;const{price:r,priceRange:t,options:o,optionUIDs:u=i}=e;let{__typename:l}=e;function s(){var x;const p=r.regular.amount.value,y=((x=r.final)==null?void 0:x.amount.value)??r.regular.amount.value,D=r.regular.amount.currency==="NONE"?"USD":r==null?void 0:r.regular.amount.currency;return[p,y,y,D]}function m(){var C,v,b,T,_,V,I,F,U,A,$,L;const p=(C=t==null?void 0:t.minimum)==null?void 0:C.final.amount.value,y=(v=t==null?void 0:t.maximum)==null?void 0:v.final.amount.value;let D;((T=(b=t==null?void 0:t.minimum)==null?void 0:b.regular)==null?void 0:T.amount.value)===((V=(_=t==null?void 0:t.maximum)==null?void 0:_.regular)==null?void 0:V.amount.value)&&(D=(F=(I=t==null?void 0:t.minimum)==null?void 0:I.regular)==null?void 0:F.amount.value);const x=((A=(U=t==null?void 0:t.minimum)==null?void 0:U.final)==null?void 0:A.amount.currency)==="NONE"?"USD":(L=($=t==null?void 0:t.minimum)==null?void 0:$.final)==null?void 0:L.amount.currency;return[D,p,y,x]}function a(){var b,T,_,V,I,F,U,A,$,L,W,Y;let p=0,y=0;o==null||o.forEach(O=>{var J;const j=O==null?void 0:O.values;if(j&&Array.isArray(j)){const S=j.map(h=>{var G,M,Z,R;return(R=(Z=(M=(G=h==null?void 0:h.product)==null?void 0:G.price)==null?void 0:M.regular)==null?void 0:Z.amount)==null?void 0:R.value}).filter(h=>h!==void 0),Q=S.length>0?Math.max(...S):0;p+=Q}(J=O==null?void 0:O.values)==null||J.forEach(S=>{var Q,h,G,M;u!=null&&u.includes(S.id)&&(y+=(M=(G=(h=(Q=S==null?void 0:S.product)==null?void 0:Q.price)==null?void 0:h.final)==null?void 0:G.amount)==null?void 0:M.value)})});const D=(b=t==null?void 0:t.minimum)==null?void 0:b.final.amount.value,x=(T=t==null?void 0:t.maximum)==null?void 0:T.final.amount.value;let C;((V=(_=t==null?void 0:t.minimum)==null?void 0:_.regular)==null?void 0:V.amount.value)===((F=(I=t==null?void 0:t.maximum)==null?void 0:I.regular)==null?void 0:F.amount.value)&&(C=(A=(U=t==null?void 0:t.minimum)==null?void 0:U.regular)==null?void 0:A.amount.value);const v=((L=($=t==null?void 0:t.minimum)==null?void 0:$.final)==null?void 0:L.amount.currency)==="NONE"?"USD":(Y=(W=t==null?void 0:t.minimum)==null?void 0:W.final)==null?void 0:Y.amount.currency;return n&&(u==null?void 0:u.length)<1?[C,D,x,v]:p===(t==null?void 0:t.maximum.regular.amount.value)?[y,y,y,v]:[C,D,x,v]}const[c,f,P,g]=l==="SimpleProductView"?s():n?a():m(),w=l==="SimpleProductView"?(d=r==null?void 0:r.roles)==null?void 0:d.includes("visible"):((X=(E=t==null?void 0:t.maximum)==null?void 0:E.roles)==null?void 0:X.includes("visible"))&&((z=(B=t==null?void 0:t.minimum)==null?void 0:B.roles)==null?void 0:z.includes("visible"));return P&&f===P?{regular:{amount:c,currency:g,variant:c&&f!==c?"strikethrough":"default"},final:{amount:P,currency:g,variant:"default"},visible:w}:{final:{minimumAmount:f,maximumAmount:P,currency:g},visible:w}}function Ce(e,n,i){var r;return n?((r=e==null?void 0:e.options)==null?void 0:r.map(({values:o})=>{var s;const u=((s=o==null?void 0:o.find(({isDefault:m})=>m))==null?void 0:s.id)??null,l=i?o[0].id:null;return u||l})).filter(o=>o!==null):e==null?void 0:e.optionUIDs}const q=new ue({init:async e=>{var o,u,l;const n=(u=(o=e==null?void 0:e.models)==null?void 0:o.ProductDetails)==null?void 0:u.initialData,t={...{defaultLocale:"en-US",persistURLParams:!1,acdl:!1,optionsUIDs:((l=me().optionsUIDs)==null?void 0:l.split(","))||(n==null?void 0:n.optionsUIDs)},...e};if(q.config.setConfig({...t}),t!=null&&t.sku){const s=n?H(n):await te(t.sku,{preselectFirstOption:t.preselectFirstOption});N.emit("pdp/data",s);const m={sku:t.sku,quantity:1,optionsUIDs:s==null?void 0:s.optionUIDs};le(()=>({...m})),Fe(()=>{var a;return s!=null&&s.options?s.options.length===((a=s==null?void 0:s.optionUIDs)==null?void 0:a.length):!0}),t.acdl&&s&&ye(s)}},listeners:()=>[N.on("locale",async()=>{const{sku:e}=q.config.getConfig();if(e){const n=await te(e);N.emit("pdp/data",n)}})]}),k=q.config,{setEndpoint:Ne,setFetchGraphQlHeader:Qe,removeFetchGraphQlHeader:je,setFetchGraphQlHeaders:Ke,fetchGraphQl:ie,getConfig:qe}=new ae().getMethods(),ve=`
fragment ProductOptionFragment on ProductViewOption {
    id
    title
    required
    multi
    values {
      id
      title
      inStock
      __typename
      ... on ProductViewOptionValueProduct {
        title
        quantity
        isDefault
        __typename
        product {
          sku
          shortDescription
          metaDescription
          metaKeyword
          metaTitle
          name
          price {
            final {
              amount {
                value
                currency
              }
            }
            regular {
              amount {
                value
                currency
              }
            }
            roles
          }
        }
      }
      ... on ProductViewOptionValueSwatch {
        id
        title
        type
        value
        inStock
      }
    }
  }
`,oe=`
fragment ProductFragment on ProductView {
  __typename
  id
  sku
  name
  shortDescription
  metaDescription
  metaKeyword
  metaTitle
  description
  inStock
  addToCartAllowed
  url
  urlKey
  externalId

  images(roles: []) {
    url
    label
    roles
  }

  attributes(roles: []) {
    name
    label
    value
    roles
  }

... on SimpleProductView {
    price {
        roles

        regular {
            amount {
                value
                currency
            }
        }

        final {
            amount {
                value
                currency
            }
        }
    }
}


  ... on ComplexProductView {
    options {
      ...ProductOptionFragment
    }

    priceRange {
      maximum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
      minimum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
    }
  }
}

${ve}
`,Oe=`
query GET_PRODUCT_DATA($skus: [String]) {
    products(skus: $skus) {
        ...ProductFragment
    }
}

${oe}
`,ke=async(e,n,i)=>{var o;const{data:r}=await ie(Oe,{method:"GET",variables:{skus:[e]}}),t=(o=r==null?void 0:r.products)==null?void 0:o[0];return n!=null&&n.optionsUIDs&&(t.optionUIDs=n.optionsUIDs),t?i?t:H(t,{preselectFirstOption:n==null?void 0:n.preselectFirstOption}):null},Ee=`
query REFINE_PRODUCT_QUERY(
    $optionIds: [String!]!
    $sku: String!
) {
    # Refined Product
    refineProduct(
        optionIds: $optionIds 
        sku: $sku
    ) {
        ...ProductFragment
    }

    # Parent Product
    products(skus: [$sku]) {
        ...ProductFragment
    }

    # %extendedPlaceholder%
}

${oe}
`;async function ee(e,n){const i=Te(n),r=_e(i,e),t=Ee.replace("# %extendedPlaceholder%",r),{data:o}=await ie(t,{method:"GET",variables:{optionIds:n,sku:e}});return o}const be=async(e,n,i,r)=>{var P,g,w;const t=await ee(e,n);if(!t)return null;let{products:o,refineProduct:u,...l}=t;const s=o==null?void 0:o[0],m=Ve(Object.values(l),s.options,i);if(i!=null&&i.length&&u===null){n=Ie(m,n,i);const d=await ee(e,n);u=d==null?void 0:d.refineProduct}const a={...u||s,sku:s.sku,name:s.name,externalParentId:s==null?void 0:s.externalId,options:m,optionUIDs:n,variantSku:(u==null?void 0:u.__typename)==="SimpleProductView"?u==null?void 0:u.sku:void 0},c=r?a:H(a),f=(w=(g=(P=k==null?void 0:k.getConfig())==null?void 0:P.models)==null?void 0:g.ProductDetails)==null?void 0:w.fallbackData;return f?f(s,c):c};function Te(e){if(e.length<2)return[e];const n=[];return e.forEach(i=>{const r=[];e.forEach(t=>{i!==t&&r.push(t)}),n.push(r)}),n}function _e(e,n){return e.map((i,r)=>`
          ProductOption${r}: refineProduct(
            optionIds: [
              ${i.map(t=>`"${t}"`).join(", ")}
            ]
            sku: "${n}"
          ) {
            ... on ComplexProductView {
              options {
                ...ProductOptionFragment
              }
            }
          }
        `).join("")}function Ve(e,n=[],i){const r=Object.values(e).filter(o=>!!o).reduce((o,u)=>u.options?[...o,...u.options]:[...o],[]),t=new Map(n.map(o=>[o.id,o]));return r.forEach(o=>{i!=null&&i.includes(o.id)||t.set(o.id,o)}),[...t.values()]}function Ie(e,n,i){const r=[];let t;return e.forEach(o=>{var u,l,s,m;i.includes(o.id)?t=((l=(u=o.values)==null?void 0:u.find(a=>n.includes(a==null?void 0:a.id)))==null?void 0:l.id)||((s=o.values[0])==null?void 0:s.id):t=(m=o.values[0])==null?void 0:m.id,r.push(t)}),r}const te=async(e,n)=>{const{anchors:i,optionsUIDs:r}=k.getConfig(),{optionsUIDs:t=r,anchors:o=i,preselectFirstOption:u,isBundle:l,skipTransform:s}=n??{};return!l&&t?await be(e,t,o,s):await ke(e,{preselectFirstOption:u,optionsUIDs:t},s)},Fe=e=>{const n=Ue(),i=e(n);n!==i&&N.emit("pdp/valid",i)},Ue=()=>{var e;return((e=N._lastEvent["pdp/valid"])==null?void 0:e.payload)??null};export{Qe as a,Ke as b,k as c,ke as d,be as e,ie as f,qe as g,te as h,q as i,Fe as j,Ue as k,Me as l,ye as p,je as r,Ne as s,H as t};
