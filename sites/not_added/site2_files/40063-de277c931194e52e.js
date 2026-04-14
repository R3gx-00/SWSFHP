!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];if(null!=r)for(var l in r)r.hasOwnProperty(l)&&(e[l]=r[l])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:olx-real-estate-key-for-sentry":!0});var t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="834d7741-aa3c-4fe8-bfc8-82e55d354e9f",e._sentryDebugIdIdentifier="sentry-dbid-834d7741-aa3c-4fe8-bfc8-82e55d354e9f")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40063],{11361:function(e,t,r){"use strict";var l=r(73119),o=r(27378),n=r(4645),a=r(40981),i=r(86686),s=r(10043);function u(e){return e&&e.__esModule?e:{default:e}}var d=u(l),c=u(o),f=u(n);let v=(e,t=[])=>{let r=c.default.useRef(e);return c.default.useEffect(()=>{r.current=e}),c.default.useCallback((...e)=>{var t;return null===(t=r.current)||void 0===t?void 0:t.call(r,...e)},t)};function b(e){let{value:t,defaultValue:r,onChange:l,shouldUpdate:n=(e,t)=>e!==t}=e,a=v(l),i=v(n),[s,u]=o.useState(r),d=void 0!==t,c=d?t:s,f=o.useCallback((e,t)=>{let r="function"==typeof e?e(c):e;i(c,r)&&(d||u(r),a(r,t))},[d,a,c,i]);return[c,f]}let g=f.default.div`
    --iconColor: ${({disabled:e,theme:t})=>e?`var(--colorsBorderSubtle, ${t.colors["borders-global-tertiary"]})`:`var(--colorsBorderStrong, ${t.colors["borders-brand-primary"]})`};
    --labelColor: ${({disabled:e,theme:t})=>e?`var(--colorsForegroundDisabled, ${t.colors["text-global-disabled"]})`:`var(--colorsForegroundPrimary, ${t.colors["text-global-primary"]})`};
    --captionColor: ${({disabled:e,theme:t})=>e?`var(--colorsForegroundDisabled, ${t.colors["text-global-disabled"]})`:`var(--colorsForegroundSecondary, ${t.colors["text-global-secondary"]})`};

    align-items: flex-start;
    border-radius: 4px;
    cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
    display: flex;
    margin: 8px 4px;

    &:focus-visible {
        outline: 4px solid
            var(
                --colorsBackgroundAccentSubtle,
                ${({theme:e})=>e.colors["background-brand-chat-highlight"]}
            );
    }

    &:disabled {
        --iconColor: var(
            --colorsBorderSubtle,
            ${({theme:e})=>e.colors["borders-global-tertiary"]}
        );
        --labelColor: var(
            --colorsForegroundDisabled,
            ${({theme:e})=>e.colors["text-global-disabled"]}
        );
        --captionColor: var(
            --colorsForegroundDisabled,
            ${({theme:e})=>e.colors["text-global-disabled"]}
        );
    }
`,p=f.default.span`
    color: var(--labelColor);
    font-size: var(--bodyBaseFontSize, ${({theme:e})=>{var t;return null===(t=e.fontSizes)||void 0===t?void 0:t.p2}});
    font-weight: ${({bold:e,theme:t})=>{var r,l;return e?`var(--fontWeightBold, ${null===(r=t.fontWeights)||void 0===r?void 0:r.bold})`:`var(--fontWeightRegular, ${null===(l=t.fontWeights)||void 0===l?void 0:l.regular})`}};
    line-height: var(--lineHeightRegular, ${({theme:e})=>{var t;return null===(t=e.lineHeights)||void 0===t?void 0:t[20]}});
    margin-left: var(--spacing200, ${({theme:e})=>{var t;return null===(t=e.space)||void 0===t?void 0:t[16]}});
    position: relative;
    top: var(--spacing50, ${({theme:e})=>{var t;return null===(t=e.space)||void 0===t?void 0:t[2]}});
    user-select: none;
`,h=f.default.span`
    color: var(--captionColor);
    display: block;
    font-size: var(--bodyExtraSmallFontSize, ${({theme:e})=>{var t;return null===(t=e.fontSizes)||void 0===t?void 0:t.p5}});
    font-weight: var(--fontWeightRegular, ${({theme:e})=>{var t;return null===(t=e.fontWeights)||void 0===t?void 0:t.regular}});
    line-height: var(--lineHeightRegular, ${({theme:e})=>{var t;return null===(t=e.lineHeights)||void 0===t?void 0:t[14]}});
    margin-top: var(--spacing50, ${({theme:e})=>{var t;return null===(t=e.space)||void 0===t?void 0:t[4]}});
`,x=({targetKey:e,onKeyDown:t=()=>{},onKeyUp:r=()=>{},preventDefault:l})=>{let[n,a]=o.useState(null),i=o.useCallback(r=>{r.key===e&&(l&&r.preventDefault(),t(r))},[e,l,t]),s=o.useCallback(t=>{t.key===e&&(l&&t.preventDefault(),r(t))},[e,l,r]);return o.useEffect(()=>(n&&n.addEventListener("keydown",i),n&&n.addEventListener("keyup",s),()=>{n&&n.removeEventListener("keydown",i),n&&n.removeEventListener("keyup",s)}),[i,s,n]),{element:n,setElement:a}},y=e=>{let{element:t,setElement:r}=x({targetKey:a.SPACE_KEY,onKeyUp:r=>{i.isFocused(t)&&e(r)},preventDefault:!0});return{element:t,setElement:r}},k=e=>e?-1:0,w=({value:e,onFocus:t=()=>{},onBlur:r=()=>{},onKeyDown:l=()=>{},onKeyUp:n=()=>{}})=>{let a=o.useCallback(r=>{t(e,r)},[t,e]);return{handleFocus:a,handleBlur:o.useCallback(t=>{r(e,t)},[r,e]),handleKeyDown:o.useCallback(t=>{l(e,t)},[l,e]),handleKeyUp:o.useCallback(t=>{n(e,t)},[n,e])}},C=f.default(g)`
    & svg {
        display: block;
        fill: var(--iconColor);
        flex-shrink: 0;
    }
`,m=({state:e})=>s.jsx({checked:()=>s.jsx("svg",{role:"presentation",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.jsx("title",null,"checkbox-on"),s.jsx("path",{d:"M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.586 5L8 17.8362L3.414 13.1589H2V14.6016L7.293 20H8.7075L22 6.44217V5H20.586Z",fill:"white"})),unchecked:()=>s.jsx("svg",{role:"presentation",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.jsx("title",null,"checkbox-off"),s.jsx("path",{d:"M20,2a2,2,0,0,1,2,2V20a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H20m0-2H4A4,4,0,0,0,0,4V20a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"})),indeterminate:()=>s.jsx("svg",{role:"presentation",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.jsx("title",null,"checkbox-indeterminate"),s.jsx("path",{d:"M0.5 4C0.5 1.79086 2.29086 0 4.5 0H20.5C22.7091 0 24.5 1.79086 24.5 4V20C24.5 22.2091 22.7091 24 20.5 24H4.5C2.29086 24 0.5 22.2091 0.5 20V4Z"}),s.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.4999 13H4.49988C4.10988 12.609 3.89088 12.391 3.49988 12C3.89088 11.609 4.10988 11.391 4.49988 11H20.4999L21.4999 12L20.4999 13Z",fill:"white"}))}[e],null),$=e=>"indeterminate"!==e&&!!e,_=o.forwardRef(({value:e,defaultValue:t,onChange:r=()=>{},onFocus:l=()=>{},onBlur:n=()=>{},onKeyDown:a=()=>{},onKeyUp:i=()=>{},label:u,disabled:c=!1,bold:f=!1,caption:v,className:g,role:x="checkbox",..._},E)=>{let[R,j]=b({value:e,defaultValue:t,onChange:(e,t)=>{r($(e),t)}}),D=k(c),H=o.useCallback(e=>{null==e||e.stopPropagation(),c||j(!R,e)},[j,R,c]),{setElement:S}=y(H),{handleFocus:M,handleBlur:F,handleKeyDown:L,handleKeyUp:B}=w({value:R,onFocus:l,onBlur:n,onKeyDown:a,onKeyUp:i}),K=$(R);return s.jsx(C,d.default({},_,"option"===x?{"aria-selected":K}:{"aria-checked":K},{ref:e=>{S(e),E&&("function"==typeof E?E(e):E.current=e)},role:x,tabIndex:D,"aria-label":u,className:g,disabled:c,onClick:H,onFocus:M,onBlur:F,onKeyDown:L,onKeyUp:B}),s.jsx(m,{state:(e=>{switch(e){case!0:return"checked";case!1:default:return"unchecked";case"indeterminate":return"indeterminate"}})(R)}),s.jsx(p,{role:"presentation",bold:f},u," ",s.jsx(h,null,v)))});t.Caption=h,t.CheckboxInput=_,t.Container=g,t.Label=p,t.setTabIndex=k,t.useControllableState=b,t.useEventHandlers=w,t.useKeyboardActions=y},13662:function(e,t,r){"use strict";var l=r(73119),o=r(27378),n=r(40981),a=r(85675),i=r(80531),s=r(86686),u=r(48751),d=r(10043);function c(e){return e&&e.__esModule?e:{default:e}}var f=c(l),v=c(a);let b=()=>{let[e,t]=o.useState(),{getRef:r,setRef:l}=i.useCallbackRef({onChange:r=>{let l=Array.from((null==r?void 0:r.querySelectorAll('a:not([disabled]), button:not([disabled]), input[type=text]:not([disabled]), [tabindex]:not([disabled]):not([tabindex="-1"])'))||[]);v.default(l,e)||t(l)}});return{getRef:r,setRef:l,focusableElements:e}},g=(e=[])=>{let t=()=>e.findIndex(e=>s.isFocused(e));return{handleIncrement:()=>{u.loopQueue(e,t()).increment().focus()},handleDecrement:()=>{let r=-1===t()?e.length:t();u.loopQueue(e,r).decrement().focus()}}},p=({children:e,...t})=>{let{setRef:r,focusableElements:l}=b(),{handleIncrement:o,handleDecrement:a}=g(l);return d.jsx("div",f.default({},t,{tabIndex:-1,onKeyDown:e=>{e.key===n.ARROW_DOWN_KEY&&(e.preventDefault(),o()),e.key===n.ARROW_UP_KEY&&(e.preventDefault(),a())},ref:r}),e)};t.FocusableLoop=p,t.withFocusableLoop=e=>o.forwardRef((t,r)=>d.jsx(p,null,d.jsx(e,f.default({ref:r},t))))},79451:function(e,t){"use strict";t.createEventShim=(e,t="change",r={})=>({preventDefault:()=>{},stopPropagation:()=>{},type:t,target:{value:e},...r})},86686:function(e,t){"use strict";t.isFocused=e=>document.activeElement===e},48751:function(e,t){"use strict";t.loopQueue=(e,t)=>({current:e[t],increment:(r=1)=>{let l=t+r;return l>=e.length?e[0]:e[l]},decrement:(r=1)=>{let l=t-r;return l<0?e[e.length-1]:e[l]}})},80531:function(e,t,r){"use strict";var l=r(27378);t.useCallbackRef=({onChange:e=()=>{}})=>{let t=l.useRef(null);return{setRef:r=>{r&&e(r),t.current=r},getRef:t}}},85675:function(e,t,r){var l=r(69924)("isEqual",r(56141));l.placeholder=r(35970),e.exports=l},56141:function(e,t,r){var l=r(32866);e.exports=function(e,t){return l(e,t)}}}]);
//# sourceMappingURL=40063-de277c931194e52e.js.map