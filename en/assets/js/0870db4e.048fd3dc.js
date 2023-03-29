"use strict";(self.webpackChunkchatgpt_shortcut=self.webpackChunkchatgpt_shortcut||[]).push([[129],{5779:(e,t,a)=>{a.r(t),a.d(t,{default:()=>M,prepareUserState:()=>T});var s=a(7294),n=a(6010),r=a(6136),c=a(7325),l=a(6550),o=a(3777),i=a(6486),m=a(3699),u=a(1764),d=a(5817),h=a(2234),g=a(3899),E=a(5542),p=a(6300),Z=a(7462),f=a(4358),b=a(2495),v=a(93),w=a(9925);const N=s.forwardRef(((e,t)=>{let{label:a,color:n,description:r}=e;return s.createElement("li",{ref:t,className:w.Z.tag,title:r},s.createElement("span",{className:w.Z.textLabel},a.toLowerCase()),s.createElement("span",{className:w.Z.colorLabel,style:{backgroundColor:n}}))}));function C(e){let{tags:t}=e;const a=t.map((e=>({tag:e,...h.$G[e]}))),n=(0,b.M)(a,(e=>h.PS.indexOf(e.tag)));return s.createElement(s.Fragment,null,n.map(((e,t)=>{const a=`showcase_card_tag_${e.tag}`;return s.createElement(v.Z,{key:t,text:e.description,anchorEl:"#__docusaurus",id:a},s.createElement(N,(0,Z.Z)({key:t},e)))})))}function k(e){let{user:t}=e;!function(e){e.preview??encodeURIComponent(e.website)}(t);const[a,r]=(0,s.useState)(!1),[l,o]=(0,s.useState)(t.desc_cn);return s.createElement("li",{key:t.title,className:"card shadow--md"},s.createElement("div",{className:(0,n.Z)("card__body",w.Z.cardBodyHeight)},s.createElement("div",{className:(0,n.Z)(w.Z.showcaseCardHeader)},s.createElement(g.Z,{as:"h4",className:w.Z.showcaseCardTitle},s.createElement(m.Z,{href:t.website,className:w.Z.showcaseCardLink},t.title)),t.tags.includes("favorite")&&s.createElement(d.Z,{svgClass:w.Z.svgIconFavorite,size:"small"}),s.createElement("button",{className:(0,n.Z)("button button--secondary button--sm",w.Z.showcaseCardSrcBtn),type:"button",onClick:()=>{t.description&&(0,f.Z)(t.description),r(!0),setTimeout((()=>r(!1)),2e3)}},a?s.createElement(c.Z,null,"\u5df2\u590d\u5236"):s.createElement(c.Z,null,"\u590d\u5236"))),s.createElement("p",{className:w.Z.showcaseCardBody},"\ud83d\udc49 ",t.remark),s.createElement("p",{onClick:function(){l===t.desc_cn?o(t.description):o(t.desc_cn)},className:w.Z.showcaseCardBody},l)),s.createElement("ul",{className:(0,n.Z)("card__footer",w.Z.cardFooter)},s.createElement(C,{tags:t.tags})))}const _=s.memo(k);var y=a(5812);const S=(0,c.I)({message:"ChatGPT Shortcut - \u7b80\u5355\u6613\u7528\u7684 ChatGPT \u5feb\u6377\u6307\u4ee4\u8868\uff0c\u8ba9\u751f\u4ea7\u529b\u500d\u589e\uff01\u6807\u7b7e\u7b5b\u9009\u3001\u5173\u952e\u8bcd\u641c\u7d22\u548c\u4e00\u952e\u590d\u5236 Prompts"}),x=(0,c.I)({message:"\u8ba9\u751f\u4ea7\u529b\u52a0\u500d\u7684 ChatGPT \u5feb\u6377\u6307\u4ee4"}),L="https://github.com/rockbenben/ChatGPT-Shortcut/discussions/11";function T(){if(r.Z.canUseDOM)return{scrollTopPosition:window.scrollY,focusedElementId:document.activeElement?.id}}const P="name";function I(e){return new URLSearchParams(e).get(P)}function R(){const e=(0,l.TH)(),[t,a]=(0,s.useState)("OR"),[n,r]=(0,s.useState)([]),[c,o]=(0,s.useState)(null);return(0,s.useEffect)((()=>{r((0,E.t)(e.search)),a((0,p.Rl)(e.search)),o(I(e.search)),function(e){const{scrollTopPosition:t,focusedElementId:a}=e??{scrollTopPosition:0,focusedElementId:void 0};document.getElementById(a)?.focus(),window.scrollTo({top:t})}(e.state)}),[e]),(0,s.useMemo)((()=>function(e,t,a,s){return s&&(e=e.filter((e=>(e.title+e.description+e.desc_cn+e.remark+e.desc_en+e.remark_en).toLowerCase().includes(s.toLowerCase())))),0===t.length?e:e.filter((e=>0!==e.tags.length&&("AND"===a?t.every((t=>e.tags.includes(t))):t.some((t=>e.tags.includes(t))))))}(h._J,n,t,c)),[n,t,c])}function F(){return s.createElement("section",{className:"margin-top--lg margin-bottom--lg text--center"},s.createElement(g.Z,{as:"h1"},"ChatGPT Shortcut"),s.createElement("p",null,x),s.createElement(m.Z,{className:"button button--primary",to:L},s.createElement(c.Z,{id:"showcase.header.button"},"\ud83d\ude4f \u8bf7\u6dfb\u52a0\u4f60\u7684\u63d0\u793a\u8bcd")))}function U(){const e=R(),t=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({id:"showcase.filters.resultCount",description:'Pluralized label for the number of sites found on the showcase. Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"{sitesCount} prompts"},{sitesCount:t}))}();return s.createElement("section",{className:"container margin-top--l margin-bottom--lg"},s.createElement("div",{className:(0,n.Z)("margin-bottom--sm",y.Z.filterCheckbox)},s.createElement("div",null,s.createElement(g.Z,{as:"h2"},s.createElement(c.Z,{id:"showcase.filters.title"},"Filters")),s.createElement("span",null,t(e.length))),s.createElement(m.Z,{style:{display:"inline-block",backgroundColor:"#18816a",color:"var(--site-color-favorite-background)",padding:"5px 10px",borderRadius:"5px",textDecoration:"none",fontSize:"8px",fontWeight:"bold",marginRight:"8px"},to:"/",title:"\u5c06\u63d0\u793a\u8bcd\u7684\u9ed8\u8ba4\u8bed\u8a00\u5207\u6362\u4e3a\u82f1\u6587\u3002"},"EN"),s.createElement(p.ZP,null)),s.createElement("ul",{className:(0,n.Z)("clean-list",y.Z.checkboxList)},h.PS.map(((e,t)=>{const{label:a,description:n,color:r}=h.$G[e],c=`showcase_checkbox_id_${e}`;return s.createElement("li",{key:t,className:y.Z.checkboxListItem},s.createElement(v.Z,{id:c,text:n,anchorEl:"#__docusaurus"},s.createElement(E.Z,{tag:e,id:c,label:a,icon:"favorite"===e?s.createElement(d.Z,{svgClass:y.Z.svgIconFavoriteXs}):s.createElement("span",{style:{backgroundColor:r,width:10,height:10,borderRadius:"50%",marginLeft:8}})})))}))))}const B=h._J.filter((e=>e.tags.includes("favorite"))),G=h._J.filter((e=>!e.tags.includes("favorite")));function H(){const e=(0,l.k6)(),t=(0,l.TH)(),[a,n]=(0,s.useState)(null);(0,s.useEffect)((()=>{n(I(t.search))}),[t]),(0,s.useEffect)((()=>{const e=document.getElementById("searchbar");e&&e.focus()}),[a]);const r=(0,s.useCallback)((0,i.debounce)((a=>{const s=new URLSearchParams(t.search);s.delete(P),a&&s.set(P,a),e.push({...t,search:s.toString(),state:T()})}),800),[t,e]);return s.createElement("div",{className:y.Z.searchContainer},s.createElement("input",{id:"searchbar",placeholder:(0,c.I)({message:"Search for prompts...",id:"showcase.searchBar.placeholder"}),value:a??void 0,onInput:a=>{if(window.innerWidth>=768)n(a.currentTarget.value),r(a.currentTarget.value);else{n(a.currentTarget.value);const s=new URLSearchParams(t.search);s.delete(P),a.currentTarget.value&&s.set(P,a.currentTarget.value),e.push({...t,search:s.toString(),state:T()})}}}))}function J(){const e=R();return 0===e.length?s.createElement("section",{className:"margin-top--lg margin-bottom--xl"},s.createElement("div",{className:"container padding-vert--md text--center"},s.createElement(g.Z,{as:"h2"},s.createElement(c.Z,{id:"showcase.usersList.noResult"},"\ud83d\ude12 \u627e\u4e0d\u5230\u7ed3\u679c\uff0c\u8bf7\u7f29\u77ed\u641c\u7d22\u8bcd")),s.createElement(H,null))):s.createElement("section",{className:"margin-top--lg margin-bottom--xl"},e.length===h._J.length?s.createElement(s.Fragment,null,s.createElement("div",{className:y.Z.showcaseFavorite},s.createElement("div",{className:"container"},s.createElement("div",{className:(0,n.Z)("margin-bottom--md",y.Z.showcaseFavoriteHeader)},s.createElement(g.Z,{as:"h2"},s.createElement(c.Z,{id:"showcase.favoritesList.title"},"Our favorites")),s.createElement(d.Z,{svgClass:y.Z.svgIconFavorite}),s.createElement(H,null)),s.createElement("ul",{className:(0,n.Z)("clean-list",y.Z.showcaseList)},B.map((e=>s.createElement(_,{key:e.title,user:e})))))),s.createElement("div",{className:"container margin-top--lg"},s.createElement(g.Z,{as:"h2",className:y.Z.showcaseHeader},s.createElement(c.Z,{id:"showcase.usersList.allUsers"},"All prompts")),s.createElement("ul",{className:(0,n.Z)("clean-list",y.Z.showcaseList)},G.map((e=>s.createElement(_,{key:e.title,user:e})))))):s.createElement("div",{className:"container"},s.createElement("div",{className:(0,n.Z)("margin-bottom--md",y.Z.showcaseFavoriteHeader)},s.createElement(H,null)),s.createElement("ul",{className:(0,n.Z)("clean-list",y.Z.showcaseList)},e.map((e=>s.createElement(_,{key:e.title,user:e}))))))}function M(){return s.createElement(u.Z,{title:S,description:x},s.createElement("main",{className:"margin-vert--lg"},s.createElement(F,null),s.createElement(U,null),s.createElement(J,null)))}}}]);