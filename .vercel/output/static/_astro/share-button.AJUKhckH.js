import{j as n}from"./utils.DpFHxlYG.js";import{r as p}from"./index.CTjT7uj6.js";import{T as b,L as h,b as w,S as g,X as x}from"./index.BSqokZEW.js";import{B as m}from"./button.B-jkt4Q9.js";import"./astro/assets-service.Dt0krELq.js";var _=Object.defineProperty,j=Object.defineProperties,y=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&u(e,r,t[r]);if(d)for(var r of d(t))O.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>j(e,y(t)),S={twitter:"https://twitter.com/intent/tweet",facebook:"https://www.facebook.com/sharer/sharer.php",telegram:"https://t.me/share/url",whatsapp:"https://wa.me",reddit:"https://reddit.com/submit",linkedin:"https://www.linkedin.com/sharing/share-offsite",tumblr:"https://www.tumblr.com/widgets/share/tool",gmail:"https://mail.google.com/mail",pocket:"https://getpocket.com/edit"},v=e=>{const t=new URLSearchParams;for(const[r,a]of Object.entries(e))a&&t.set(r,`${a}`);return t.toString()},i=(e,t)=>{const r=v(o({},e));return`${S[t]}?${r.toString()}`},P=e=>i(e,"twitter"),I=e=>{var t;const r=s(o({},e),{u:(t=e.u)!=null?t:e.url,url:void 0,text:void 0});return i(r,"facebook")},L=e=>i(e,"telegram"),$=e=>{const t=s(o({},e),{text:e.text?`${e.text} ${e.url}`:e.url,url:void 0});return i(t,"whatsapp")},N=e=>{var t;const r=s(o({},e),{title:(t=e.title)!=null?t:e.text,text:void 0});return i(r,"reddit")},T=e=>{const t=o({},e);return i(t,"linkedin")},E=e=>{var t,r;const a=s(o({},e),{posttype:"link",canonicalUrl:(t=e.canonicalUrl)!=null?t:e.url,content:(r=e.text)!=null?r:e.caption,url:void 0,text:void 0});return i(a,"tumblr")},z=e=>{var t,r;const a=s(o({},e),{view:"cm",body:`${(t=e.body)!=null?t:e.text} ${e.url}`,su:(r=e.su)!=null?r:e.subject,url:void 0,text:void 0});return i(a,"gmail")},B=e=>{var t,r;const a=s(o({},e),{body:`${(t=e.body)!=null?t:e.text} ${e.url}`,url:void 0,text:void 0});return`mailto:${(r=e.emailAddress)!=null?r:""}?${v(a)}`},C=e=>{const t=s(o({},e),{text:void 0});return i(t,"pocket")},R=()=>{let e=null;function t(a,l){e===null||e.closed?e=window.open(a,l,"popup,width=600,height=600"):e.focus()}const r=document.querySelectorAll("a[open-win]");for(let a of r)a.removeAttribute("target"),a.addEventListener("click",l=>{t(a.href,"_blank"),l.preventDefault()},!1)};typeof window<"u"&&document.addEventListener("DOMContentLoaded",R);const U=Object.freeze(Object.defineProperty({__proto__:null,facebook:I,gmail:z,linkedin:T,mailto:B,pocket:C,reddit:N,telegram:L,tumblr:E,twitter:P,whatsapp:$},Symbol.toStringTag,{value:"Module"}));function A({title:e,url:t}){const r=({name:a})=>{const l=a.toLocaleLowerCase(),f=U[l]({text:e,url:t});let c;return l==="telegram"?c=b:l==="linkedin"?c=h:c=w,n.jsx("a",{tabIndex:-1,href:f,target:"_blank",rel:"noopener noreferrer",children:n.jsx(m,{variant:"ghost",size:"icon",className:"rounded-none",children:n.jsx(c,{})})})};return n.jsxs("div",{className:"flex size-full",children:[n.jsx(r,{name:"LinkedIn"}),n.jsx(r,{name:"Telegram"}),n.jsx(r,{name:"Twitter"})]})}function Q(e){const[t,r]=p.useState(null),a=()=>{r(!t)};return n.jsxs("div",{className:"inline-flex",children:[n.jsxs(m,{"data-open":t,className:`
          bg-background relative z-10
          data-[open='true']:border
          data-[open='true']:rounded-r-none
          data-[open='true']:text-muted-foreground
        `,variant:"ghost",size:"icon",onClick:a,children:[n.jsx(g,{"data-open":t,className:`
            transition-all duration-base
            data-[open='true']:scale-0
            data-[open='true']:opacity-0
          `}),n.jsx(x,{"data-open":t,className:`
            absolute
            transition-all duration-base
            scale-0 opacity-0
            data-[open='true']:scale-100
            data-[open='true']:opacity-100
          `})]}),n.jsx("div",{"data-open":t,"aria-hidden":!t,inert:t?void 0:"",className:`
          rounded-r-md border border-l-0
          h-9
          bg-background-contrast
          transition-all duration-base
          opacity-0
          pointer-events-none
          ml-[-100%]
          data-[open='true']:animate-im-slide-to-right
          data-[open='false']:animate-im-slide-to-left
        `,children:n.jsx(A,{...e})})]})}export{Q as default};
