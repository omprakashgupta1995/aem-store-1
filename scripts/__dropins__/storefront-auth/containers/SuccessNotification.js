/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsxs as a,jsx as o,Fragment as s}from"@dropins/tools/preact-jsx-runtime.js";import{classes as m,Slot as u}from"@dropins/tools/lib.js";import{Button as r}from"@dropins/tools/components.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import"@dropins/tools/preact-hooks.js";import"../chunks/Button.js";import{useText as d}from"@dropins/tools/i18n.js";import{r as f}from"../chunks/revokeCustomerToken.js";import"@dropins/tools/preact-compat.js";import"../chunks/network-error.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";const h=({formSize:c="default",className:n="",slots:i,labels:t})=>{const e=d({headingText:"Auth.SuccessNotification.headingText",messageText:"Auth.SuccessNotification.messageText",primaryButtonText:"Auth.SuccessNotification.primaryButtonText",secondaryButtonText:"Auth.SuccessNotification.secondaryButtonText"});return a("div",{className:m(["auth-success-notification-form",`auth-success-notification-form--${c}`,n]),id:"welcome-message",role:"alert","aria-live":"assertive","aria-labelledby":(t==null?void 0:t.headingText)??e.headingText,"aria-describedby":(t==null?void 0:t.messageText)??e.messageText,"tab-index":"-1",children:[o("p",{id:"welcome-heading",className:"auth-success-notification-form__title","data-testid":"notification-title",children:(t==null?void 0:t.headingText)??e.headingText}),o("p",{id:"welcome-details",className:"auth-success-notification-form__content-text","data-testid":"notification-content",children:(t==null?void 0:t.messageText)??e.messageText}),i!=null&&i.SuccessNotificationActions?o(u,{"data-testid":"successNotificationActions",name:"SuccessNotificationActions",slot:i==null?void 0:i.SuccessNotificationActions,context:{}}):a(s,{children:[o(r,{"data-testid":"primaryButton",type:"button",className:"auth-success-notification-form__button auth-success-notification-form__button--top",onClick:()=>window.location.href="/",children:e.primaryButtonText}),o(r,{"data-testid":"secondaryButton",type:"button",variant:"tertiary",onClick:async()=>{await f(),window.location.href="/"},children:e.secondaryButtonText})]})]})},j=({formSize:c="default",slots:n,className:i,labels:t})=>o("div",{className:"auth-success-notification",children:o(h,{formSize:c,className:i,slots:n,labels:t})});export{j as SuccessNotification,j as default};
