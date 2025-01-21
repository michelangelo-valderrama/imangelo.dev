import{j as e,c as r}from"./utils.DpFHxlYG.js";import{c as d}from"./index.BSqokZEW.js";import{B as m}from"./button.B-jkt4Q9.js";import{r as u}from"./index.CTjT7uj6.js";function b({isLoading:a,className:t,disabled:s,children:n,...l}){return e.jsxs(m,{className:r("relative",t),disabled:s??!!a,...l,children:[e.jsx("span",{"data-loading":a,className:`
          absolute
          mx-auto
          opacity-0
          transition-all
          data-[loading=true]:animate-im-jump-in
          data-[loading=false]:animge-im-jump-out
        `,children:e.jsx(d,{className:"animate-spin"})}),e.jsx("span",{"data-loading":a,className:`
          transition-all
          data-[loading=false]:animge-im-jump-in
          data-[loading=true]:animate-im-jump-out
        `,children:n})]})}const o=u.forwardRef(({className:a,type:t,...s},n)=>e.jsx("input",{type:t,className:r(`
            flex
            h-9
            w-full
            rounded-md border border-input-border
            bg-transparent
            px-3 py-1
            text-sm sm:text-base
            shadow-sm
            transition-colors duration-base
            file:border-0
            file:bg-transparent
            file:text-sm
            file:font-medium
            file:text-foreground
            placeholder:text-muted-foreground
            focus-visible:border-foreground
            focus-visible:outline-none
            focus-visible:ring-1
            focus-visible:ring-ring
            disabled:cursor-not-allowed
            disabled:opacity-50
          `,a),ref:n,...s}));o.displayName="Input";function i({className:a,...t}){return e.jsx("div",{className:r(`
          pointer-events-none
          absolute inset-y-0
          flex items-center justify-center
          text-muted-foreground/80
          peer-focus-visible:text-foreground
          peer-disabled:opacity-50
        `,a),...t})}function g({className:a,prefix:t,suffix:s,...n}){return e.jsxs("div",{className:r("relative",a),children:[t&&e.jsx(i,{className:"start-0 ps-3",children:t}),e.jsx(o,{className:r("peer",{"ps-9":t,"pe-9":s}),...n}),s&&e.jsx(i,{className:"end-0 pe-3",children:s})]})}export{b as B,g as I};
