/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as u,jsxs as H}from"@dropins/tools/preact-jsx-runtime.js";import{Slot as Z,classes as $}from"@dropins/tools/lib.js";import{Header as k,InLineAlert as S,InputPassword as W}from"@dropins/tools/components.js";import"@dropins/tools/event-bus.js";import"@dropins/tools/recaptcha.js";import{useState as h,useEffect as z,useCallback as I}from"@dropins/tools/preact-hooks.js";/* empty css              */import{v as O,u as g,a as R}from"../chunks/usePasswordValidationMessage.js";import{a as C}from"../chunks/getCustomerToken.js";import{r as tt}from"../chunks/resetPassword.js";import{c as j,g as et,u as at,F as st,B as rt}from"../chunks/Button2.js";import{useText as K}from"@dropins/tools/i18n.js";import"../chunks/getStoreConfig.js";import"../chunks/network-error.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/initialize.js";import"../fragments.js";import"../chunks/setReCaptchaToken.js";import"@dropins/tools/preact-compat.js";const J=(d,p)=>d.split("&").filter(r=>r.includes(p)).map(r=>r.split("=")[1])[0],it=({isEmailConfirmationRequired:d,signInOnSuccess:p,passwordConfigs:t,routeRedirectOnSignIn:r,routeWrongUrlRedirect:w,onErrorCallback:a,onSuccessCallback:i,handleSetInLineAlertProps:m,routeRedirectOnPasswordUpdate:N,routeSignInPage:o})=>{const s=K({errorNotification:"Auth.Notification.errorNotification",updatePasswordMessage:"Auth.Notification.updatePasswordMessage",updatePasswordActionMessage:"Auth.Notification.updatePasswordActionMessage",customerTokenErrorMessage:"Auth.Api.customerTokenErrorMessage"}),[U,n]=h({userName:"",status:!1}),[x,F]=h(""),[v,A]=h(!1),[P,L]=h(""),[y,M]=h(""),[T,c]=h(!1),[_,q]=h(!1),[b,B]=h([]);z(()=>{v&&!b.length&&(x.length?q(!1):q(!0))},[v,x,b]),z(()=>{const{search:f}=window.location;!f.includes("token=")&&!f.includes("email=")&&j(w)&&(window.location.href=w());const e=decodeURIComponent(f),V=J(e,"token"),E=J(e,"email");L(E),M(V)},[w]);const Q=I(async f=>{f.preventDefault(),c(!0),B([]);const e=et(f.target),V=(e==null?void 0:e.password)&&P&&y;e!=null&&e.password||(q(!0),c(!1));const E=(t==null?void 0:t.requiredCharacterClasses)??0,Y=(t==null?void 0:t.minLength)??0;if(!O(e==null?void 0:e.password,E)||e.password.length<+Y){A(!0),c(!1);return}if(!V){m({type:"error",text:s.errorNotification}),c(!1);return}const{message:D,success:G}=await tt(P,y,e.password);if(G){if(d||!d&&!p){i==null||i(),j(N)&&(window.location.href=N()),A(!0),c(!1),q(!1),F(""),B([{label:s.updatePasswordActionMessage,onClick:()=>{window.location.href=o==null?void 0:o()}}]),m({type:"success",text:s.updatePasswordMessage});return}const l=await C({email:P,password:e.password,handleSetInLineAlertProps:m,onErrorCallback:a,translations:s});l!=null&&l.userName&&(i==null||i(l==null?void 0:l.userName),j(r)?window.location.href=r():n({userName:l==null?void 0:l.userName,status:!0}))}else m({type:"error",text:D}),a==null||a({message:D,success:G});c(!1)},[P,y,t==null?void 0:t.requiredCharacterClasses,t==null?void 0:t.minLength,s,d,p,o,a,i,r,m,N]),X=I(f=>{F(f)},[]);return{additionalActionsAlert:b,passwordError:_,isSuccessful:U,updatePasswordValue:x,isClickSubmit:v,isLoading:T,submitUpdatePassword:Q,handleSetUpdatePasswordValue:X,setIsClickSubmit:A}},ot=({signInOnSuccess:d=!0,formSize:p="default",routeRedirectOnSignIn:t,routeWrongUrlRedirect:r,routeSignInPage:w,slots:a,onErrorCallback:i,onSuccessCallback:m,routeRedirectOnPasswordUpdate:N})=>{const o=K({title:"Auth.UpdatePasswordForm.title",buttonPrimary:"Auth.UpdatePasswordForm.buttonPrimary",placeholder:"Auth.InputPassword.placeholder",floatingLabel:"Auth.InputPassword.floatingLabel",requiredFieldError:"Auth.FormText.requiredFieldError"}),{passwordConfigs:s,isEmailConfirmationRequired:U}=g(),{inLineAlertProps:n,handleSetInLineAlertProps:x}=at(),{additionalActionsAlert:F,passwordError:v,isSuccessful:A,updatePasswordValue:P,isClickSubmit:L,isLoading:y,submitUpdatePassword:M,handleSetUpdatePasswordValue:T}=it({isEmailConfirmationRequired:U,signInOnSuccess:d,passwordConfigs:s,routeRedirectOnSignIn:t,routeWrongUrlRedirect:r,onErrorCallback:i,onSuccessCallback:m,handleSetInLineAlertProps:x,routeRedirectOnPasswordUpdate:N,routeSignInPage:w}),{isValidUniqueSymbols:c,defaultLengthMessage:_}=R({password:P,isClickSubmit:L,passwordConfigs:s});return A.status&&(a!=null&&a.SuccessNotification)?u(Z,{"data-testid":"successNotificationTestId",name:"SuccessNotification",slot:a==null?void 0:a.SuccessNotification,context:{isSuccessful:A}}):H("div",{className:$(["auth-update-password-form",`auth-update-password-form--${p}`]),children:[u(k,{title:o.title,divider:!1,className:"auth-update-password-form__title"}),u(S,{className:$(["auth-update-password-form__notification",["auth-update-password-form__notification--show",!!(n!=null&&n.text)]]),variant:"secondary",heading:n==null?void 0:n.text,icon:n.icon,additionalActions:F}),H(st,{name:"updatePassword_form",className:"auth-update-password-form__form",onSubmit:M,loading:y,fieldsConfig:[],children:[u("div",{style:"display: none;",children:u("input",{type:"text",id:"username",name:"username",autoComplete:"username"})}),u(W,{defaultValue:P,onValue:T,className:"auth-update-password-form__form__item",autoComplete:"new-password",name:"password",errorMessage:v||c==="error"||(_==null?void 0:_.status)==="error"?o.requiredFieldError:void 0,minLength:s==null?void 0:s.minLength,uniqueSymbolsStatus:c,validateLengthConfig:_,requiredCharacterClasses:s==null?void 0:s.requiredCharacterClasses,placeholder:o.placeholder,floatingLabel:o.floatingLabel}),u("div",{className:"auth-update-password-form__button",children:u(rt,{type:"submit",buttonText:o.buttonPrimary,variant:"primary",enableLoader:y})})]})]})},Ut=({slots:d,formSize:p,signInOnSuccess:t,routeRedirectOnPasswordUpdate:r,routeRedirectOnSignIn:w,routeSignInPage:a,routeWrongUrlRedirect:i,onErrorCallback:m,onSuccessCallback:N})=>u("div",{className:"auth-update-password",children:u(ot,{formSize:p,signInOnSuccess:t,routeSignInPage:a,routeRedirectOnSignIn:w,routeWrongUrlRedirect:i,onErrorCallback:m,onSuccessCallback:N,slots:d,routeRedirectOnPasswordUpdate:r})});export{Ut as UpdatePassword,Ut as default};
