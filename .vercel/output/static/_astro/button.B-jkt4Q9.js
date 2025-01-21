import{j as i,c as d,a as g,S as c}from"./utils.DpFHxlYG.js";import{r as u}from"./index.CTjT7uj6.js";const p=g(`
    inline-flex items-center justify-center gap-2
    whitespace-nowrap
    rounded-md
    text-sm font-medium
    ring-offset-background
    transition-all duration-base
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-ring
    focus-visible:ring-offset-2
    disabled:pointer-events-none
    disabled:opacity-50
    [&_svg]:pointer-events-none
    [&_svg]:size-4
    [&_svg]:shrink-0
  `,{variants:{variant:{primary:"bg-primary text-primary-foreground hover:bg-primary/90",danger:"bg-danger text-danger-foreground hover:bg-danger/90",outline:`
          border bg-background-contrast
          hover:bg-accent
          hover:text-accent-foreground
        `,ghost:`
          bg-transparent
          hover:bg-accent
          hover:text-accent-foreground
        `,popover:`
          bg-transparent text-popover-foreground
          hover:bg-accent hover:text-accent-foreground
          w-full justify-start
        `},size:{sm:"h-8 rounded-md px-3 text-xs",md:"h-9 px-4 py-2",lg:"h-10 rounded-md px-8",icon:"size-9"}},defaultVariants:{variant:"primary",size:"md"}}),f=u.forwardRef(({className:e,variant:r,size:t,asChild:n=!1,...o},a)=>{const s=n?c:"button";return i.jsx(s,{className:d(p({variant:r,size:t,className:e})),ref:a,...o})});f.displayName="Button";export{f as B};
