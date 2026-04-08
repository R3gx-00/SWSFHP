!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o)for(var t in o)o.hasOwnProperty(t)&&(e[t]=o[t])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:olx-real-estate-key-for-sentry":!0});var r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="8fbadd70-b616-45e8-a83e-a286b886b69c",e._sentryDebugIdIdentifier="sentry-dbid-8fbadd70-b616-45e8-a83e-a286b886b69c")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3088],{25181:function(e,r,o){"use strict";var t,a,n,i,l,s,d=o(54254),c=o(73119),u=o(27378),v=o(41723),p=o(4645),b=o(10043),f=o(99317);function g(e){return e&&e.__esModule?e:{default:e}}o(65113),o(28661),o(44223),o(55778),o(40949),o(36051),o(96476),o(9038);var m=g(c),y=g(u),h=g(p);(t=i||(i={})).primary="primary",t["primary-outlined"]="primary-outlined",t.secondary="secondary",t["secondary-outlined"]="secondary-outlined";let x=(e,r)=>({[i.primary]:`var(--colorsBackgroundPrimary, ${e.colors["background-global-primary"]})`,[i["primary-outlined"]]:`var(--colorsBackgroundPrimary, ${e.colors["background-global-primary"]})`,[i.secondary]:`var(--colorsBackgroundSecondary, ${e.colors["background-global-secondary"]})`,[i["secondary-outlined"]]:`var(--colorsBackgroundSecondary, ${e.colors["background-global-secondary"]})`})[r],k=(e,r)=>({[i.primary]:"none",[i["primary-outlined"]]:`1px solid var(--colorsBorderSubtle, ${e.colors["borders-global-tertiary"]})}`,[i.secondary]:"none",[i["secondary-outlined"]]:`1px solid var(--colorsBorderSubtle, ${e.colors["borders-global-tertiary"]})`})[r],w=h.default.div`
    --borderRadius: var(--radiusMedium, ${({theme:e})=>{var r;return null===(r=e.radii)||void 0===r?void 0:r.medium}});
    --spacing: var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[16]}});

    background: ${({theme:e,variant:r})=>x(e,r)};
    border: ${({theme:e,variant:r})=>k(e,r)};
    border-radius: var(--borderRadius);
    box-sizing: border-box;
    margin: var(--borderRadius);
    width: 320px;
`,C=h.default.button`
    align-items: center;
    all: unset;
    border-radius: var(--borderRadius);
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    position: relative;
    width: 100%;

    & .n-accordionitem-header__content {
        border-bottom: 1px solid
            var(
                --colorsBorderSubtle,
                ${({theme:e})=>e.colors["background-brand-tertiary"]}
            );
        display: flex;
        margin: 0 var(--spacing);
        padding: var(--spacing) 0;
        width: 100%;
    }

    /* Remove border from the last item */
    &[aria-expanded='false']:last-of-type .n-accordionitem-header__content {
        border-bottom: none;
    }

    /* interactions states */
    &::after {
        bottom: 0;
        box-sizing: border-box;
        content: '';
        left: 0;
        opacity: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        transition: opacity ease-out 200ms;
    }

    &:hover::after {
        background: var(
            --colorsOpacityPrimarySubtle,
            ${({theme:e})=>e.colors["dark-s"]}
        );
        opacity: 1;
    }

    &:active::after {
        background: var(
            --colorsOpacityPrimaryMedium,
            ${({theme:e})=>e.colors["dark-m"]}
        );
        opacity: 1;
    }

    /* Round the corners of the first and last pseudoelements */
    &:first-of-type:hover::after {
        border-top-left-radius: var(--borderRadius);
        border-top-right-radius: var(--borderRadius);
    }

    &:last-of-type:not([aria-expanded='true']):hover::after {
        border-bottom-left-radius: var(--borderRadius);
        border-bottom-right-radius: var(--borderRadius);
    }

    &:focus-visible,
    &:focus {
        outline-color: var(
            --colorsBorderFocus,
            ${({theme:e})=>e.colors["borders-global-focus"]}
        );
        outline-style: solid;
        outline-width: var(--widthLarge, ${({theme:e})=>{var r;return null===(r=e.borderWidths)||void 0===r?void 0:r.large}});
    }

    &:focus:not(:focus-visible) {
        outline: none;
    }
`,$=h.default.span`
    margin-left: auto;

    & svg {
        transition: transform 0.2s ease;
    }

    &[data-isopen='true'] svg {
        transform: rotate(180deg);
    }
`,_=h.default.div`
    border-bottom: ${({theme:e})=>{var r;return`var(--widthSmall, ${null===(r=e.borderWidths)||void 0===r?void 0:r.small}) solid var(--colorsBorderSubtle, ${e.colors["background-brand-tertiary"]})`}};
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 1fr;
    margin: 0 var(--spacing);
    padding: var(--spacing) 0;
    transition: all ease-out 0.2s;

    & > .n-accordionitem-content__inner {
        overflow: hidden;
    }

    &[data-isopen='false'] {
        border-bottom: none;
        border-color: transparent;
        grid-template-rows: 0fr;
        padding: 0;
        visibility: hidden;
    }

    &:last-child {
        border-bottom: none;
    }
`,E=h.default.span`
    align-items: center;
    color: var(
        --colorsForegroundPrimary,
        ${({theme:e})=>e.colors["text-global-primary"]}
    );
    display: flex;
    flex-direction: row;
    font-size: var(--fontSizeBodyBase, ${({theme:e})=>{var r;return null===(r=e.fontSizes)||void 0===r?void 0:r[16]}});
    font-weight: var(--fontWeightBold, ${({theme:e})=>{var r;return null===(r=e.fontWeights)||void 0===r?void 0:r.bold}});

    & svg {
        display: block;
    }
`,j=h.default.div`
    color: var(
        --colorsForegroundPrimary,
        ${({theme:e})=>e.colors["text-global-primary"]}
    );
    font-size: var(--fontSizeBodyBase, ${({theme:e})=>{var r;return null===(r=e.fontSizes)||void 0===r?void 0:r[16]}});
    font-weight: var(--fontWeightRegular, ${({theme:e})=>{var r;return null===(r=e.fontWeights)||void 0===r?void 0:r.regular}});
    line-height: var(--lineHeightRegular, ${({theme:e})=>{var r;return null===(r=e.lineHeights)||void 0===r?void 0:r[20]}});
`,S=(e,r)=>"function"==typeof e?b.jsx(e,null):b.jsx(r,null,e),I=({id:e,header:r,content:o,onToggle:t,isOpen:a=!1,onItemOpen:n,onItemCollapse:i})=>{let l=S(r,E),s=S(o,j);return b.jsx(y.default.Fragment,null,b.jsx(C,{onClick:()=>{t(e),a?i(e):n(e)},"aria-expanded":a,type:"button"},b.jsx("span",{className:"n-accordionitem-header__content"},l,b.jsx($,{"data-isopen":a},b.jsx(f.default,null)))),b.jsx(_,{"data-isopen":a,"aria-hidden":!a,className:"n-accordionitem-content"},b.jsx("div",{className:"n-accordionitem-content__inner"},s)))};(a=l||(l={})).TOGGLE_UNIQUE="TOGGLE_UNIQUE",a.TOGGLE_MULTIPLE="TOGGLE_MULTIPLE",(n=s||(s={})).unique="unique",n.multiple="multiple";let R=(e,r)=>{switch(r.type){case l.TOGGLE_MULTIPLE:return e.includes(r.id)?e.filter(e=>e!==r.id):[...e,r.id];case l.TOGGLE_UNIQUE:return e.includes(r.id)?e.filter(e=>e!==r.id):[r.id];default:return e}},D=(e,r)=>{let[o,t]=u.useReducer(R,e),a=u.useCallback(e=>{t({type:l.TOGGLE_MULTIPLE,id:e})},[t]);return{toggle:({unique:u.useCallback(e=>{t({type:l.TOGGLE_UNIQUE,id:e})},[t]),multiple:a})[r],openItems:o,isOpen:e=>o.includes(e)}},L=d.withDataTag(({className:e,content:r,openBehavior:o="unique",onItemOpen:t=()=>{},onItemCollapse:a=()=>{},variant:n="primary",dataAttributes:i={},innerRef:l,...s})=>{let{toggle:d,isOpen:c}=D(r.filter(e=>!!e.isOpen&&e.id).map(e=>e.id),o);return b.jsx(w,m.default({},s,v.parseDataAttributes(i),{ref:l,className:e,variant:n}),r.map(({id:e,header:r,content:o})=>b.jsx(I,{isOpen:c(e),onToggle:d,onItemOpen:t,onItemCollapse:a,key:e,id:e,header:r,content:o})))},"Accordion");r.UQ=L,r.vF=({children:e,className:r,dataAttributes:o={},innerRef:t,...a})=>b.jsx(j,m.default({},a,v.parseDataAttributes(o),{ref:t,className:r}),e),r._m=({children:e,className:r,dataAttributes:o={},innerRef:t,...a})=>b.jsx(E,m.default({},a,v.parseDataAttributes(o),{ref:t,className:r}),e)},36844:function(e,r,o){"use strict";var t=o(73119);o(27378);var a=o(40949),n=o(10043);o(36051),o(96476),o(4645),o(9038);var i=t&&t.__esModule?t:{default:t};let l=a.withIconProps(e=>n.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),n.jsx("path",{d:"m14.54 9.46-2-5.42h-1.07l-2 5.42-5.42 2v1.07l5.42 2 2 5.42h1.07l2-5.42 5.42-2v-1.07zm4.91-4.9L18.5 2l-.95 2.56L15 5.5l2.55.95L18.5 9l.95-2.55L22 5.5z"})));r.Z=l},95753:function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=o(73119);o(27378);var a=o(40949),n=o(10043);o(36051),o(96476),o(4645),o(9038);var i=t&&t.__esModule?t:{default:t};let l=a.withIconProps(e=>n.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),n.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.001 17.5h1.414l1.27-1.271 7.316-7.315 7.315 7.315 1.271 1.271h1.414v-1.414l-1.27-1.27L13.414 7.5l-1-1h-.827l-3.942 3.942-4.374 4.374-1.27 1.27z"})));r.default=l},55523:function(e,r,o){"use strict";var t=o(73119);o(27378);var a=o(40949),n=o(10043);o(36051),o(96476),o(4645),o(9038);var i=t&&t.__esModule?t:{default:t};let l=a.withIconProps(e=>n.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},e),n.jsx("path",{fill:"currentColor",d:"m9.397 10.942 1.937 1.937 4.272-4.272h1.415v1.414L12.041 15h-1.414l-2.644-2.644v-1.414z"}),n.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12m2 0c0 4.411 3.589 8 8 8s8-3.589 8-8-3.589-8-8-8-8 3.589-8 8",clipRule:"evenodd"})));r.Z=l},89896:function(e,r,o){"use strict";var t=o(73119);o(27378);var a=o(40949),n=o(10043);o(36051),o(96476),o(4645),o(9038);var i=t&&t.__esModule?t:{default:t};let l=a.withIconProps(e=>n.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},e),n.jsx("path",{fill:"currentColor",d:"m15 3.001 1-1h6v6l-1 1-1-1V5.416l-4.292 4.292h-1.415V8.294l4.293-4.292H16z"}),n.jsx("path",{fill:"currentColor",d:"m2 5 1-1h9l1 1-1 1H4v14h14v-8l2-2L20 12v9l-1 1H3l-1-1z"})));r.Z=l},80295:function(e,r,o){"use strict";var t,a,n,i,l=o(54254),s=o(73119),d=o(27378),c=o(41723),u=o(43306),v=o(4645),p=o(13638),b=o(10043),f=o(54059),g=o(66800),m=o(7674);function y(e){return e&&e.__esModule?e:{default:e}}o(65113),o(28661),o(44223),o(55778),o(45437),o(69482),o(43013),o(40949),o(36051),o(96476),o(9038);var h=y(s),x=y(v);let k=x.default.div`
    bottom: attr(data-snackbar-offset px, 0);
    display: flex;
    left: 0;
    pointer-events: none;
    position: fixed;
    right: 0;
    z-index: 1;

    &[data-snackbar-position='bottom-center'] {
        justify-content: center;
    }

    ${({theme:e})=>{var r;return`@media ${null===(r=e.mediaQueries)||void 0===r?void 0:r.md}`}} {
        justify-content: center;
    }
`,w=x.default.div`
    --backgroundColor: var(
        --colorsBackgroundInverse,
        ${({theme:e})=>e.colors["background-global-inverse"]}
    );
    --textColor: var(
        --colorsForegroundOnInverse,
        ${({theme:e})=>e.colors["text-global-inverse"]}
    );
    --iconColor: var(
        --colorsForegroundOnInverse,
        ${({theme:e})=>e.colors["icon-global-inverse"]}
    );

    align-items: center;
    animation: ${p.SlideInUp} 0.3s ease-in;
    background: var(--backgroundColor);
    border-radius: var(--radiusMedium, ${({theme:e})=>{var r;return null===(r=e.radii)||void 0===r?void 0:r.medium}});
    display: inline-flex;
    gap: var(--spacing100, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[8]}});
    margin-bottom: 56px;
    margin-left: var(--spacing500, ${({theme:e})=>{var r;return null===(r=e.sizes)||void 0===r?void 0:r[48]}});
    margin-right: var(--spacing500, ${({theme:e})=>{var r;return null===(r=e.sizes)||void 0===r?void 0:r[48]}});
    max-width: calc(100% - 96px);
    padding: var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[16]}});
    pointer-events: auto;

    /** Target < 768px. @see http://localhost:6006/?path=/docs/experimental-layout-breakpoints--greedy-queries-smaller */
    ${({theme:e})=>{var r;return`@media ${null===(r=e.mediaQueries)||void 0===r?void 0:r.md}`}} {
        margin-bottom: var(--spacing300, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[24]}});
        margin-left: var(--spacing300, ${({theme:e})=>{var r;return null===(r=e.sizes)||void 0===r?void 0:r[24]}});
        margin-right: var(--spacing300, ${({theme:e})=>{var r;return null===(r=e.sizes)||void 0===r?void 0:r[24]}});
        max-width: calc(100% - 48px);
        padding: ${({theme:e})=>{var r,o;return`var(--spacing100, ${null===(r=e.space)||void 0===r?void 0:r["8"]}) var(--spacing200, ${null===(o=e.space)||void 0===o?void 0:o["16"]})`}};
    }

    & .n-snackbar-children {
        color: var(--textColor);
        flex: 1;

        &:empty {
            display: none;
        }
    }

    & .n-snackbar-prefix {
        height: var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r["16"]}});
        width: var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r["16"]}});

        & svg {
            color: var(--iconColor);
            display: block;
            height: var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r["16"]}});
            width: var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r["16"]}});
        }
    }

    & .n-snackbar-button--reset {
        background: none;
        border: none;
        flex: 0;
        padding: 0;
        white-space: nowrap;
    }

    & .n-snackbar-action-text {
        color: var(--textColor);
        text-decoration: underline;
    }

    & .n-snackbar-dismiss {
        & svg {
            color: var(--iconColor);
            display: block;
        }
    }

    &[data-snackbar-variant='success'] {
        --backgroundColor: var(
            --colorsBackgroundAccent,
            ${({theme:e})=>e.colors["background-brand-secondary"]}
        );
        --textColor: var(
            --colorsForegroundPrimary,
            ${({theme:e})=>e.colors["text-global-primary"]}
        );
        --iconColor: var(
            --colorsForegroundPrimary,
            ${({theme:e})=>e.colors["icon-global-primary"]}
        );
    }

    &[data-snackbar-variant='error'] {
        --backgroundColor: var(
            --colorsBackgroundStatusError,
            ${({theme:e})=>e.colors["background-brand-error"]}
        );
    }
`,C={OLX:"bottom-center",Motors:"bottom-left",Otodom:"bottom-center",Storia:"bottom-center",Imovirtual:"bottom-center"},$=e=>{let{consumerName:r}=b.useTheme();return e||C[r]||"bottom-center"},_=e=>{let{state:r}=f.useSnackbarContext();return e(r)},E=e=>{let{dispatch:r}=f.useSnackbarContext();return{openSnackbar:d.useCallback(()=>{r({type:f.Actions.SNACKBAR_OPEN,id:e})},[r,e]),closeSnackbar:d.useCallback(()=>{r({type:f.Actions.SNACKBAR_CLOSE,id:e})},[r,e]),isOpen:e===_(e=>e.open)}};(t=n||(n={}))["bottom-left"]="bottom-left",t["bottom-center"]="bottom-center",(a=i||(i={})).neutral="neutral",a.success="success",a.error="error";let j=l.withDataTag(({variant:e="neutral",content:r,prefixIcon:o,actionText:t,onActionClick:a=()=>{},dismissible:n=!0,position:i,className:l,onDismiss:s=()=>{},id:v,hideAfter:p,offset:f=0,dataAttributes:y={},innerRef:x,...C})=>{let _=$(i),{closeSnackbar:j,isOpen:S}=E(v);return(d.useEffect(()=>{let e;return p&&S&&(e=setTimeout(()=>{j()},1e3*p)),()=>{clearTimeout(e)}},[p,j,S]),S)?b.jsx(k,{"data-snackbar-position":_,"data-snackbar-offset":f},b.jsx(w,h.default({},C,c.parseDataAttributes(y),{ref:x,className:l,"data-snackbar-variant":e}),!!o&&b.jsx("div",{className:"n-snackbar-prefix","aria-hidden":!0},u.getReactNode(o)),b.jsx(g.P3,{className:"n-snackbar-children"},r),t&&b.jsx("button",{className:"n-snackbar-button--reset",onClick:e=>{a(v,e)}},b.jsx(g.P3,{as:"span",className:"n-snackbar-action-text"},t)),n&&b.jsx("button",{className:"n-snackbar-button--reset n-snackbar-dismiss",onClick:e=>{j(),s(v,e)}},b.jsx(m.default,{size:"icon-small"})))):null},"Snackbar");r.A=j,r.G=E},36012:function(e,r,o){"use strict";var t=o(93185),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,r){var o,n,i,l,s,d,c,u,v=!1;r||(r={}),i=r.debug||!1;try{if(s=t(),d=document.createRange(),c=document.getSelection(),(u=document.createElement("span")).textContent=e,u.ariaHidden="true",u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",function(o){if(o.stopPropagation(),r.format){if(o.preventDefault(),void 0===o.clipboardData){i&&console.warn("unable to use e.clipboardData"),i&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var t=a[r.format]||a.default;window.clipboardData.setData(t,e)}else o.clipboardData.clearData(),o.clipboardData.setData(r.format,e)}r.onCopy&&(o.preventDefault(),r.onCopy(o.clipboardData))}),document.body.appendChild(u),d.selectNodeContents(u),c.addRange(d),!document.execCommand("copy"))throw Error("copy command was unsuccessful");v=!0}catch(t){i&&console.error("unable to copy using execCommand: ",t),i&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(r.format||"text",e),r.onCopy&&r.onCopy(window.clipboardData),v=!0}catch(t){i&&console.error("unable to copy using clipboardData: ",t),i&&console.error("falling back to prompt"),o="message"in r?r.message:"Copy to clipboard: #{key}, Enter",n=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=o.replace(/#{\s*key\s*}/g,n),window.prompt(l,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(d):c.removeAllRanges()),u&&document.body.removeChild(u),s()}return v}},97384:function(e,r,o){"use strict";o.d(r,{Z:function(){return l}});var t=o(36012),a=o.n(t),n=o(27378),i=function(e){void 0===e&&(e={});var r=(0,n.useState)(e),o=r[0],t=r[1];return[o,(0,n.useCallback)(function(e){t(function(r){return Object.assign({},r,e instanceof Function?e(r):e)})},[])]},l=function(){var e,r,o=(e=(0,n.useRef)(!1),r=(0,n.useCallback)(function(){return e.current},[]),(0,n.useEffect)(function(){return e.current=!0,function(){e.current=!1}},[]),r),t=i({value:void 0,error:void 0,noUserInteraction:!0}),l=t[0],s=t[1];return[l,(0,n.useCallback)(function(e){if(o())try{if("string"!=typeof e&&"number"!=typeof e){var r,t,n=Error("Cannot copy typeof "+typeof e+" to clipboard, must be a string");s({value:e,error:n,noUserInteraction:!0});return}if(""===e){var n=Error("Cannot copy empty string to clipboard.");s({value:e,error:n,noUserInteraction:!0});return}t=e.toString(),r=a()(t),s({value:t,error:void 0,noUserInteraction:r})}catch(e){s({value:t,error:e,noUserInteraction:r})}},[])]}},93185:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var r=document.activeElement,o=[],t=0;t<e.rangeCount;t++)o.push(e.getRangeAt(t));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||o.forEach(function(r){e.addRange(r)}),r&&r.focus()}}}}]);
//# sourceMappingURL=3088-e384d32da3691705.js.map