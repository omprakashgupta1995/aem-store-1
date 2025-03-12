/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as f}from"@dropins/tools/preact-jsx-runtime.js";import"@dropins/tools/components.js";import"../chunks/OrderCancel.js";import{classes as $}from"@dropins/tools/lib.js";import{useState as s,useEffect as h,useCallback as I}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{g as y}from"../chunks/getCustomerOrdersReturn.js";import"@dropins/tools/preact.js";import{u as A}from"../chunks/useIsMobile.js";import"@dropins/tools/preact-compat.js";import{R as M}from"../chunks/ReturnsListContent.js";import{useText as T}from"@dropins/tools/i18n.js";import"../chunks/network-error.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/transform-order-details.js";import"../chunks/convertCase.js";import"../chunks/returnOrdersHelper.js";import"../chunks/getFormValues.js";import"../chunks/OrderLoaders.js";const g={totalPages:1,currentPage:1,pageSize:1},V=({returnPageSize:t})=>{const[n,o]=s(!0),[i,u]=s([]),[a,m]=s(g),[d,l]=s(1);h(()=>{y(t).then(r=>{u((r==null?void 0:r.ordersReturn)??[]),m((r==null?void 0:r.pageInfo)??g)}).finally(()=>{o(!1)})},[t]);const c=I(r=>{l(r)},[]);return{pageInfo:a,selectedPage:d,loading:n,orderReturns:i,handleSetSelectPage:c}},Y=({slots:t,withReturnsListButton:n,className:o,minifiedView:i,withHeader:u,withThumbnails:a,returnPageSize:m,returnsInMinifiedView:d,routeReturnDetails:l,routeOrderDetails:c,routeTracking:r,routeReturnsList:p,routeProductDetails:L})=>{const{pageInfo:R,selectedPage:O,handleSetSelectPage:b,loading:w,orderReturns:N}=V({returnPageSize:m}),P=A(),e=i?"minifiedView":"fullSizeView",S=T({viewAllOrdersButton:`Order.Returns.${e}.returnsList.viewAllOrdersButton`,ariaLabelLink:`Order.Returns.${e}.returnsList.ariaLabelLink`,emptyOrdersListMessage:`Order.Returns.${e}.returnsList.emptyOrdersListMessage`,minifiedViewTitle:`Order.Returns.${e}.returnsList.minifiedViewTitle`,orderNumber:`Order.Returns.${e}.returnsList.orderNumber`,returnNumber:`Order.Returns.${e}.returnsList.returnNumber`,carrier:`Order.Returns.${e}.returnsList.carrier`});return f("div",{className:$(["order-returns-list",o]),children:f(M,{minifiedViewKey:e,withOrderNumber:!0,withReturnNumber:!0,slots:t,selectedPage:O,handleSetSelectPage:b,pageInfo:R,withReturnsListButton:n,isMobile:P,orderReturns:N,translations:S,withHeader:u,returnsInMinifiedView:d,withThumbnails:a,minifiedView:i,routeReturnDetails:l,routeOrderDetails:c,routeTracking:r,routeReturnsList:p,routeProductDetails:L,loading:w})})};export{Y as default};
