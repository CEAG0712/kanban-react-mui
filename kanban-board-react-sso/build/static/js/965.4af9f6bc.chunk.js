"use strict";(self.webpackChunkkanban_board_react=self.webpackChunkkanban_board_react||[]).push([[965],{141:(e,t,o)=>{o.d(t,{A:()=>a});var r=o(9662),n=o(579);const a=(0,r.A)((0,n.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"}),"Add")},5376:(e,t,o)=>{o.d(t,{Ay:()=>u});var r=o(5043),n=o(8828),a=o(8206),s=o(579);const i="function"===typeof(0,n.Dp)({}),l=(e,t)=>({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%",...t&&!e.vars&&{colorScheme:e.palette.mode}}),c=e=>({color:(e.vars||e).palette.text.primary,...e.typography.body1,backgroundColor:(e.vars||e).palette.background.default,"@media print":{backgroundColor:(e.vars||e).palette.common.white}}),d=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const o={};t&&e.colorSchemes&&"function"===typeof e.getColorSchemeSelector&&Object.entries(e.colorSchemes).forEach((t=>{let[r,n]=t;const a=e.getColorSchemeSelector(r);a.startsWith("@")?o[a]={":root":{colorScheme:n.palette?.mode}}:o[a.replace(/\s*&/,"")]={colorScheme:n.palette?.mode}}));let r={html:l(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:{margin:0,...c(e),"&::backdrop":{backgroundColor:(e.vars||e).palette.background.default}},...o};const n=e.components?.MuiCssBaseline?.styleOverrides;return n&&(r=[r,n]),r},m="mui-ecs",h=(0,n.Dp)(i?e=>{let{theme:t,enableColorScheme:o}=e;return d(t,o)}:e=>{let{theme:t}=e;return(e=>{const t=d(e,!1),o=Array.isArray(t)?t[0]:t;return!e.vars&&o&&(o.html[`:root:has(${m})`]={colorScheme:e.palette.mode}),e.colorSchemes&&Object.entries(e.colorSchemes).forEach((t=>{let[r,n]=t;const a=e.getColorSchemeSelector(r);a.startsWith("@")?o[a]={[`:root:not(:has(.${m}))`]:{colorScheme:n.palette?.mode}}:o[a.replace(/\s*&/,"")]={[`&:not(:has(.${m}))`]:{colorScheme:n.palette?.mode}}})),t})(t)});const u=function(e){const t=(0,a.b)({props:e,name:"MuiCssBaseline"}),{children:o,enableColorScheme:n=!1}=t;return(0,s.jsxs)(r.Fragment,{children:[i&&(0,s.jsx)(h,{enableColorScheme:n}),!i&&!n&&(0,s.jsx)("span",{className:m,style:{display:"none"}}),o]})}},8185:(e,t,o)=>{o.d(t,{A:()=>A});var r=o(5043),n=o(8387),a=o(8610);function s(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function i(e){return parseFloat(e)}var l=o(1546),c=o(3290),d=o(4535),m=o(6262),h=o(8206),u=o(2532),p=o(2372);function g(e){return(0,p.Ay)("MuiSkeleton",e)}(0,u.A)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f=o(579);const y=c.i7`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`,v=c.i7`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`,S="string"!==typeof y?c.AH`
        animation: ${y} 2s ease-in-out 0.5s infinite;
      `:null,b="string"!==typeof v?c.AH`
        &::after {
          animation: ${v} 2s linear 0.5s infinite;
        }
      `:null,C=(0,d.Ay)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],!1!==o.animation&&t[o.animation],o.hasChildren&&t.withChildren,o.hasChildren&&!o.width&&t.fitContent,o.hasChildren&&!o.height&&t.heightAuto]}})((0,m.A)((e=>{let{theme:t}=e;const o=s(t.shape.borderRadius)||"px",r=i(t.shape.borderRadius);return{display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,l.X4)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em",variants:[{props:{variant:"text"},style:{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${r}${o}/${Math.round(r/.6*10)/10}${o}`,"&:empty:before":{content:'"\\00a0"'}}},{props:{variant:"circular"},style:{borderRadius:"50%"}},{props:{variant:"rounded"},style:{borderRadius:(t.vars||t).shape.borderRadius}},{props:e=>{let{ownerState:t}=e;return t.hasChildren},style:{"& > *":{visibility:"hidden"}}},{props:e=>{let{ownerState:t}=e;return t.hasChildren&&!t.width},style:{maxWidth:"fit-content"}},{props:e=>{let{ownerState:t}=e;return t.hasChildren&&!t.height},style:{height:"auto"}},{props:{animation:"pulse"},style:S||{animation:`${y} 2s ease-in-out 0.5s infinite`}},{props:{animation:"wave"},style:{position:"relative",overflow:"hidden",WebkitMaskImage:"-webkit-radial-gradient(white, black)","&::after":{background:`linear-gradient(\n                90deg,\n                transparent,\n                ${(t.vars||t).palette.action.hover},\n                transparent\n              )`,content:'""',position:"absolute",transform:"translateX(-100%)",bottom:0,left:0,right:0,top:0}}},{props:{animation:"wave"},style:b||{"&::after":{animation:`${v} 2s linear 0.5s infinite`}}}]}}))),A=r.forwardRef((function(e,t){const o=(0,h.b)({props:e,name:"MuiSkeleton"}),{animation:r="pulse",className:s,component:i="span",height:l,style:c,variant:d="text",width:m,...u}=o,p={...o,animation:r,component:i,variant:d,hasChildren:Boolean(u.children)},y=(e=>{const{classes:t,variant:o,animation:r,hasChildren:n,width:s,height:i}=e,l={root:["root",o,r,n&&"withChildren",n&&!s&&"fitContent",n&&!i&&"heightAuto"]};return(0,a.A)(l,g,t)})(p);return(0,f.jsx)(C,{as:i,ref:t,className:(0,n.A)(y.root,s),ownerState:p,...u,style:{width:m,height:l,...c}})}))},1806:(e,t,o)=>{o.d(t,{A:()=>f});var r=o(5043),n=o(8387),a=o(8610),s=o(1009),i=o(4535),l=o(6262),c=o(8206),d=o(2532),m=o(2372);function h(e){return(0,m.Ay)("MuiTable",e)}(0,d.A)("MuiTable",["root","stickyHeader"]);var u=o(579);const p=(0,i.Ay)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.stickyHeader&&t.stickyHeader]}})((0,l.A)((e=>{let{theme:t}=e;return{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":{...t.typography.body2,padding:t.spacing(2),color:(t.vars||t).palette.text.secondary,textAlign:"left",captionSide:"bottom"},variants:[{props:e=>{let{ownerState:t}=e;return t.stickyHeader},style:{borderCollapse:"separate"}}]}}))),g="table",f=r.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiTable"}),{className:i,component:l=g,padding:d="normal",size:m="medium",stickyHeader:f=!1,...y}=o,v={...o,component:l,padding:d,size:m,stickyHeader:f},S=(e=>{const{classes:t,stickyHeader:o}=e,r={root:["root",o&&"stickyHeader"]};return(0,a.A)(r,h,t)})(v),b=r.useMemo((()=>({padding:d,size:m,stickyHeader:f})),[d,m,f]);return(0,u.jsx)(s.A.Provider,{value:b,children:(0,u.jsx)(p,{as:l,role:l===g?null:"table",ref:t,className:(0,n.A)(S.root,i),ownerState:v,...y})})}))},1009:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(5043).createContext()},1573:(e,t,o)=>{o.d(t,{A:()=>r});const r=o(5043).createContext()},3460:(e,t,o)=>{o.d(t,{A:()=>f});var r=o(5043),n=o(8387),a=o(8610),s=o(1573),i=o(4535),l=o(8206),c=o(2532),d=o(2372);function m(e){return(0,d.Ay)("MuiTableBody",e)}(0,c.A)("MuiTableBody",["root"]);var h=o(579);const u=(0,i.Ay)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),p={variant:"body"},g="tbody",f=r.forwardRef((function(e,t){const o=(0,l.b)({props:e,name:"MuiTableBody"}),{className:r,component:i=g,...c}=o,d={...o,component:i},f=(e=>{const{classes:t}=e;return(0,a.A)({root:["root"]},m,t)})(d);return(0,h.jsx)(s.A.Provider,{value:p,children:(0,h.jsx)(u,{className:(0,n.A)(f.root,r),as:i,ref:t,role:i===g?null:"rowgroup",ownerState:d,...c})})}))},9652:(e,t,o)=>{o.d(t,{A:()=>f});var r=o(5043),n=o(8387),a=o(8610),s=o(1546),i=o(6803),l=o(1009),c=o(1573),d=o(4535),m=o(6262),h=o(8206),u=o(7502),p=o(579);const g=(0,d.Ay)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`size${(0,i.A)(o.size)}`],"normal"!==o.padding&&t[`padding${(0,i.A)(o.padding)}`],"inherit"!==o.align&&t[`align${(0,i.A)(o.align)}`],o.stickyHeader&&t.stickyHeader]}})((0,m.A)((e=>{let{theme:t}=e;return{...t.typography.body2,display:"table-cell",verticalAlign:"inherit",borderBottom:t.vars?`1px solid ${t.vars.palette.TableCell.border}`:`1px solid\n    ${"light"===t.palette.mode?(0,s.a)((0,s.X4)(t.palette.divider,1),.88):(0,s.e$)((0,s.X4)(t.palette.divider,1),.68)}`,textAlign:"left",padding:16,variants:[{props:{variant:"head"},style:{color:(t.vars||t).palette.text.primary,lineHeight:t.typography.pxToRem(24),fontWeight:t.typography.fontWeightMedium}},{props:{variant:"body"},style:{color:(t.vars||t).palette.text.primary}},{props:{variant:"footer"},style:{color:(t.vars||t).palette.text.secondary,lineHeight:t.typography.pxToRem(21),fontSize:t.typography.pxToRem(12)}},{props:{size:"small"},style:{padding:"6px 16px",[`&.${u.A.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}}},{props:{padding:"checkbox"},style:{width:48,padding:"0 0 0 4px"}},{props:{padding:"none"},style:{padding:0}},{props:{align:"left"},style:{textAlign:"left"}},{props:{align:"center"},style:{textAlign:"center"}},{props:{align:"right"},style:{textAlign:"right",flexDirection:"row-reverse"}},{props:{align:"justify"},style:{textAlign:"justify"}},{props:e=>{let{ownerState:t}=e;return t.stickyHeader},style:{position:"sticky",top:0,zIndex:2,backgroundColor:(t.vars||t).palette.background.default}}]}}))),f=r.forwardRef((function(e,t){const o=(0,h.b)({props:e,name:"MuiTableCell"}),{align:s="inherit",className:d,component:m,padding:f,scope:y,size:v,sortDirection:S,variant:b,...C}=o,A=r.useContext(l.A),k=r.useContext(c.A),w=k&&"head"===k.variant;let x;x=m||(w?"th":"td");let M=y;"td"===x?M=void 0:!M&&w&&(M="col");const $=b||k&&k.variant,T={...o,align:s,component:x,padding:f||(A&&A.padding?A.padding:"normal"),size:v||(A&&A.size?A.size:"medium"),sortDirection:S,stickyHeader:"head"===$&&A&&A.stickyHeader,variant:$},R=(e=>{const{classes:t,variant:o,align:r,padding:n,size:s,stickyHeader:l}=e,c={root:["root",o,l&&"stickyHeader","inherit"!==r&&`align${(0,i.A)(r)}`,"normal"!==n&&`padding${(0,i.A)(n)}`,`size${(0,i.A)(s)}`]};return(0,a.A)(c,u.r,t)})(T);let j=null;return S&&(j="asc"===S?"ascending":"descending"),(0,p.jsx)(g,{as:x,ref:t,className:(0,n.A)(R.root,d),"aria-sort":j,scope:M,ownerState:T,...C})}))},7502:(e,t,o)=>{o.d(t,{A:()=>s,r:()=>a});var r=o(2532),n=o(2372);function a(e){return(0,n.Ay)("MuiTableCell",e)}const s=(0,r.A)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"])},9650:(e,t,o)=>{o.d(t,{A:()=>u});var r=o(5043),n=o(8387),a=o(8610),s=o(4535),i=o(8206),l=o(2532),c=o(2372);function d(e){return(0,c.Ay)("MuiTableContainer",e)}(0,l.A)("MuiTableContainer",["root"]);var m=o(579);const h=(0,s.Ay)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"}),u=r.forwardRef((function(e,t){const o=(0,i.b)({props:e,name:"MuiTableContainer"}),{className:r,component:s="div",...l}=o,c={...o,component:s},u=(e=>{const{classes:t}=e;return(0,a.A)({root:["root"]},d,t)})(c);return(0,m.jsx)(h,{ref:t,as:s,className:(0,n.A)(u.root,r),ownerState:c,...l})}))},4882:(e,t,o)=>{o.d(t,{A:()=>f});var r=o(5043),n=o(8387),a=o(8610),s=o(1573),i=o(4535),l=o(8206),c=o(2532),d=o(2372);function m(e){return(0,d.Ay)("MuiTableHead",e)}(0,c.A)("MuiTableHead",["root"]);var h=o(579);const u=(0,i.Ay)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),p={variant:"head"},g="thead",f=r.forwardRef((function(e,t){const o=(0,l.b)({props:e,name:"MuiTableHead"}),{className:r,component:i=g,...c}=o,d={...o,component:i},f=(e=>{const{classes:t}=e;return(0,a.A)({root:["root"]},m,t)})(d);return(0,h.jsx)(s.A.Provider,{value:p,children:(0,h.jsx)(u,{as:i,className:(0,n.A)(f.root,r),ref:t,role:i===g?null:"rowgroup",ownerState:d,...c})})}))},8076:(e,t,o)=>{o.d(t,{A:()=>v});var r=o(5043),n=o(8387),a=o(8610),s=o(1546),i=o(1573),l=o(4535),c=o(6262),d=o(8206),m=o(2532),h=o(2372);function u(e){return(0,h.Ay)("MuiTableRow",e)}const p=(0,m.A)("MuiTableRow",["root","selected","hover","head","footer"]);var g=o(579);const f=(0,l.Ay)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.head&&t.head,o.footer&&t.footer]}})((0,c.A)((e=>{let{theme:t}=e;return{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${p.hover}:hover`]:{backgroundColor:(t.vars||t).palette.action.hover},[`&.${p.selected}`]:{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.selectedOpacity})`:(0,s.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.primary.mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:(0,s.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity)}}}}))),y="tr",v=r.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiTableRow"}),{className:s,component:l=y,hover:c=!1,selected:m=!1,...h}=o,p=r.useContext(i.A),v={...o,component:l,hover:c,selected:m,head:p&&"head"===p.variant,footer:p&&"footer"===p.variant},S=(e=>{const{classes:t,selected:o,hover:r,head:n,footer:s}=e,i={root:["root",o&&"selected",r&&"hover",n&&"head",s&&"footer"]};return(0,a.A)(i,u,t)})(v);return(0,g.jsx)(f,{as:l,ref:t,className:(0,n.A)(S.root,s),role:l===y?null:"row",ownerState:v,...h})}))},5263:(e,t,o)=>{o.d(t,{A:()=>p});var r=o(5043),n=o(8387),a=o(8610),s=o(4535),i=o(6262),l=o(8206),c=o(2532),d=o(2372);function m(e){return(0,d.Ay)("MuiToolbar",e)}(0,c.A)("MuiToolbar",["root","gutters","regular","dense"]);var h=o(579);const u=(0,s.Ay)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disableGutters&&t.gutters,t[o.variant]]}})((0,i.A)((e=>{let{theme:t}=e;return{position:"relative",display:"flex",alignItems:"center",variants:[{props:e=>{let{ownerState:t}=e;return!t.disableGutters},style:{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}}},{props:{variant:"dense"},style:{minHeight:48}},{props:{variant:"regular"},style:t.mixins.toolbar}]}}))),p=r.forwardRef((function(e,t){const o=(0,l.b)({props:e,name:"MuiToolbar"}),{className:r,component:s="div",disableGutters:i=!1,variant:c="regular",...d}=o,p={...o,component:s,disableGutters:i,variant:c},g=(e=>{const{classes:t,disableGutters:o,variant:r}=e,n={root:["root",!o&&"gutters",r]};return(0,a.A)(n,m,t)})(p);return(0,h.jsx)(u,{as:s,className:(0,n.A)(g.root,r),ref:t,ownerState:p,...d})}))},4416:(e,t,o)=>{o.d(t,{A:()=>I});var r=o(5043);const n=r.createContext(null);function a(){return r.useContext(n)}const s="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var i=o(579);const l=function(e){const{children:t,theme:o}=e,l=a(),c=r.useMemo((()=>{const e=null===l?{...o}:function(e,t){if("function"===typeof t)return t(e);return{...e,...t}}(l,o);return null!=e&&(e[s]=null!==l),e}),[o,l]);return(0,i.jsx)(n.Provider,{value:c,children:t})};var c=o(4575),d=o(9948),m=o(875),h=o(3654);const u={};function p(e,t,o){let n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return r.useMemo((()=>{const r=e&&t[e]||t;if("function"===typeof o){const a=o(r),s=e?{...t,[e]:a}:a;return n?()=>s:s}return e?{...t,[e]:o}:{...t,...o}}),[e,t,o,n])}const g=function(e){const{children:t,theme:o,themeId:r}=e,n=(0,d.A)(u),s=a()||u,g=p(r,n,o),f=p(r,s,o,!0),y="rtl"===g.direction;return(0,i.jsx)(l,{theme:f,children:(0,i.jsx)(c.T.Provider,{value:g,children:(0,i.jsx)(m.A,{value:y,children:(0,i.jsx)(h.A,{value:g?.components,children:t})})})})};var f=o(3375);function y(e){let{theme:t,...o}=e;const r=f.A in t?t[f.A]:void 0;return(0,i.jsx)(g,{...o,themeId:r?f.A:void 0,theme:r||t})}var v=o(8812),S=o(869);const b="mode",C="color-scheme",A="data-color-scheme";function k(e){if("undefined"!==typeof window&&"function"===typeof window.matchMedia&&"system"===e){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}}function w(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function x(e,t){if("undefined"===typeof window)return;let o;try{o=localStorage.getItem(e)||void 0,o||localStorage.setItem(e,t)}catch{}return o||t}function M(e){const{defaultMode:t="light",defaultLightColorScheme:o,defaultDarkColorScheme:n,supportedColorSchemes:a=[],modeStorageKey:s=b,colorSchemeStorageKey:i=C,storageWindow:l=("undefined"===typeof window?void 0:window)}=e,c=a.join(","),d=a.length>1,[m,h]=r.useState((()=>{const e=x(s,t),r=x(`${i}-light`,o),a=x(`${i}-dark`,n);return{mode:e,systemMode:k(e),lightColorScheme:r,darkColorScheme:a}})),[,u]=r.useState(!1),p=r.useRef(!1);r.useEffect((()=>{d&&u(!0),p.current=!0}),[d]);const g=function(e){return w(e,(t=>"light"===t?e.lightColorScheme:"dark"===t?e.darkColorScheme:void 0))}(m),f=r.useCallback((e=>{h((o=>{if(e===o.mode)return o;const r=e??t;try{localStorage.setItem(s,r)}catch{}return{...o,mode:r,systemMode:k(r)}}))}),[s,t]),y=r.useCallback((e=>{e?"string"===typeof e?e&&!c.includes(e)?console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`):h((t=>{const o={...t};return w(t,(t=>{try{localStorage.setItem(`${i}-${t}`,e)}catch{}"light"===t&&(o.lightColorScheme=e),"dark"===t&&(o.darkColorScheme=e)})),o})):h((t=>{const r={...t},a=null===e.light?o:e.light,s=null===e.dark?n:e.dark;if(a)if(c.includes(a)){r.lightColorScheme=a;try{localStorage.setItem(`${i}-light`,a)}catch(l){}}else console.error(`\`${a}\` does not exist in \`theme.colorSchemes\`.`);if(s)if(c.includes(s)){r.darkColorScheme=s;try{localStorage.setItem(`${i}-dark`,s)}catch(l){}}else console.error(`\`${s}\` does not exist in \`theme.colorSchemes\`.`);return r})):h((e=>{try{localStorage.setItem(`${i}-light`,o),localStorage.setItem(`${i}-dark`,n)}catch{}return{...e,lightColorScheme:o,darkColorScheme:n}}))}),[c,i,o,n]),v=r.useCallback((e=>{"system"===m.mode&&h((t=>{const o=e?.matches?"dark":"light";return t.systemMode===o?t:{...t,systemMode:o}}))}),[m.mode]),S=r.useRef(v);return S.current=v,r.useEffect((()=>{if("function"!==typeof window.matchMedia||!d)return;const e=function(){return S.current(...arguments)},t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}}),[d]),r.useEffect((()=>{if(l&&d){const e=e=>{const o=e.newValue;"string"!==typeof e.key||!e.key.startsWith(i)||o&&!c.match(o)||(e.key.endsWith("light")&&y({light:o}),e.key.endsWith("dark")&&y({dark:o})),e.key!==s||o&&!["light","dark","system"].includes(o)||f(o||t)};return l.addEventListener("storage",e),()=>{l.removeEventListener("storage",e)}}}),[y,f,s,i,c,t,l,d]),{...m,mode:p.current||!d?m.mode:void 0,systemMode:p.current||!d?m.systemMode:void 0,colorScheme:p.current||!d?g:void 0,setMode:f,setColorScheme:y}}var $=o(3930),T=o(137);const R={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:j,useColorScheme:H,getInitColorSchemeScript:N}=function(e){const{themeId:t,theme:o={},modeStorageKey:n=b,colorSchemeStorageKey:s=C,disableTransitionOnChange:l=!1,defaultColorScheme:c,resolveTheme:d}=e,m={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},h=r.createContext(void 0),u="string"===typeof c?c:c.light,p="string"===typeof c?c:c.dark;return{CssVarsProvider:function(e){const{children:m,theme:u,modeStorageKey:p=n,colorSchemeStorageKey:f=s,disableTransitionOnChange:y=l,storageWindow:v=("undefined"===typeof window?void 0:window),documentNode:b=("undefined"===typeof document?void 0:document),colorSchemeNode:C=("undefined"===typeof document?void 0:document.documentElement),disableNestedContext:A=!1,disableStyleSheetGeneration:k=!1,defaultMode:w="system"}=e,x=r.useRef(!1),$=a(),T=r.useContext(h),R=!!T&&!A,j=r.useMemo((()=>u||("function"===typeof o?o():o)),[u]),H=j[t],{colorSchemes:N={},components:z={},cssVarPrefix:I,...W}=H||j,E=Object.keys(N).filter((e=>!!N[e])).join(","),K=r.useMemo((()=>E.split(",")),[E]),L="string"===typeof c?c:c.light,O="string"===typeof c?c:c.dark,D=N[L]&&N[O]?w:N[W.defaultColorScheme]?.palette?.mode||W.palette?.mode,{mode:_,setMode:P,systemMode:B,lightColorScheme:V,darkColorScheme:X,colorScheme:G,setColorScheme:F}=M({supportedColorSchemes:K,defaultLightColorScheme:L,defaultDarkColorScheme:O,modeStorageKey:p,colorSchemeStorageKey:f,defaultMode:D,storageWindow:v});let q=_,J=G;R&&(q=T.mode,J=T.colorScheme);const Q=J||W.defaultColorScheme,U=W.generateThemeVars?.()||W.vars,Y={...W,components:z,colorSchemes:N,cssVarPrefix:I,vars:U};if("function"===typeof Y.generateSpacing&&(Y.spacing=Y.generateSpacing()),Q){const e=N[Q];e&&"object"===typeof e&&Object.keys(e).forEach((t=>{e[t]&&"object"===typeof e[t]?Y[t]={...Y[t],...e[t]}:Y[t]=e[t]}))}const Z=W.colorSchemeSelector;r.useEffect((()=>{if(J&&C&&Z&&"media"!==Z){const e=Z;let t=Z;if("class"===e&&(t=".%s"),"data"===e&&(t="[data-%s]"),e?.startsWith("data-")&&!e.includes("%s")&&(t=`[${e}="%s"]`),t.startsWith("."))C.classList.remove(...K.map((e=>t.substring(1).replace("%s",e)))),C.classList.add(t.substring(1).replace("%s",J));else{const e=t.replace("%s",J).match(/\[([^\]]+)\]/);if(e){const[t,o]=e[1].split("=");o||K.forEach((e=>{C.removeAttribute(t.replace(J,e))})),C.setAttribute(t,o?o.replace(/"|'/g,""):"")}else C.setAttribute(t,J)}}}),[J,Z,C,K]),r.useEffect((()=>{let e;if(y&&x.current&&b){const t=b.createElement("style");t.appendChild(b.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),b.head.appendChild(t),window.getComputedStyle(b.body),e=setTimeout((()=>{b.head.removeChild(t)}),1)}return()=>{clearTimeout(e)}}),[J,y,b]),r.useEffect((()=>(x.current=!0,()=>{x.current=!1})),[]);const ee=r.useMemo((()=>({allColorSchemes:K,colorScheme:J,darkColorScheme:X,lightColorScheme:V,mode:q,setColorScheme:F,setMode:P,systemMode:B})),[K,J,X,V,q,F,P,B]);let te=!0;(k||!1===W.cssVariables||R&&$?.cssVarPrefix===I)&&(te=!1);const oe=(0,i.jsxs)(r.Fragment,{children:[(0,i.jsx)(g,{themeId:H?t:void 0,theme:d?d(Y):Y,children:m}),te&&(0,i.jsx)(S.A,{styles:Y.generateStyleSheets?.()||[]})]});return R?oe:(0,i.jsx)(h.Provider,{value:ee,children:oe})},useColorScheme:()=>r.useContext(h)||m,getInitColorSchemeScript:e=>function(e){const{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:r="dark",modeStorageKey:n=b,colorSchemeStorageKey:a=C,attribute:s=A,colorSchemeNode:l="document.documentElement",nonce:c}=e||{};let d="",m=s;if("class"===s&&(m=".%s"),"data"===s&&(m="[data-%s]"),m.startsWith(".")){const e=m.substring(1);d+=`${l}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));\n      ${l}.classList.add('${e}'.replace('%s', colorScheme));`}const h=m.match(/\[([^\]]+)\]/);if(h){const[e,t]=h[1].split("=");t||(d+=`${l}.removeAttribute('${e}'.replace('%s', light));\n      ${l}.removeAttribute('${e}'.replace('%s', dark));`),d+=`\n      ${l}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else d+=`${l}.setAttribute('${m}', colorScheme);`;return(0,i.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"===typeof window?c:"",dangerouslySetInnerHTML:{__html:`(function() {\ntry {\n  let colorScheme = '';\n  const mode = localStorage.getItem('${n}') || '${t}';\n  const dark = localStorage.getItem('${a}-dark') || '${r}';\n  const light = localStorage.getItem('${a}-light') || '${o}';\n  if (mode === 'system') {\n    // handle system mode\n    const mql = window.matchMedia('(prefers-color-scheme: dark)');\n    if (mql.matches) {\n      colorScheme = dark\n    } else {\n      colorScheme = light\n    }\n  }\n  if (mode === 'light') {\n    colorScheme = light;\n  }\n  if (mode === 'dark') {\n    colorScheme = dark;\n  }\n  if (colorScheme) {\n    ${d}\n  }\n} catch(e){}})();`}},"mui-color-scheme-init")}({colorSchemeStorageKey:s,defaultLightColorScheme:u,defaultDarkColorScheme:p,modeStorageKey:n,...e})}}({themeId:f.A,theme:()=>(0,$.A)({cssVariables:!0}),colorSchemeStorageKey:R.colorSchemeStorageKey,modeStorageKey:R.modeStorageKey,defaultColorScheme:{light:R.defaultLightColorScheme,dark:R.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:(0,T.A)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,v.A)({sx:e,theme:this})},t}});const z=j;function I(e){let{theme:t,...o}=e;if("function"===typeof t)return(0,i.jsx)(y,{theme:t,...o});return"colorSchemes"in(f.A in t?t[f.A]:t)?(0,i.jsx)(z,{theme:t,...o}):(0,i.jsx)(y,{theme:t,...o})}}}]);
//# sourceMappingURL=965.4af9f6bc.chunk.js.map