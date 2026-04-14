!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(e[a]=r[a])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:olx-real-estate-key-for-sentry":!0});var t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="e5bbbacf-6a08-42de-a088-9168c6f7f7f5",e._sentryDebugIdIdentifier="sentry-dbid-e5bbbacf-6a08-42de-a088-9168c6f7f7f5")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81275],{89198:function(e,t,r){"use strict";var a=r(73119);r(27378);var o=r(40949),i=r(10043);r(36051),r(96476),r(4645),r(9038);var l=a&&a.__esModule?a:{default:a};let n=o.withIconProps(e=>i.jsx("svg",l.default({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},e),i.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2m0 2c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0 6 1 1v5l-1 1-1-1v-5zm0-3a1 1 0 1 1 0 2 1 1 0 0 1 0-2"})));t.Z=n},57132:function(e,t,r){"use strict";var a=r(54254),o=r(73119);r(27378);var i=r(41723),l=r(4645),n=r(28608),d=r(10043),s=r(92465),u=r(37239);function f(e){return e&&e.__esModule?e:{default:e}}r(65113),r(28661),r(44223),r(55778),r(40949),r(36051),r(96476),r(9038),r(60042),r(69482);var c=f(o),p=f(l),g=f(s);let v=p.default.div`
    background: var(
        --colorsBackgroundPrimary,
        ${({theme:e})=>e.colors["background-global-primary"]}
    );
    padding: 24px 16px;
    width: 336px;
`,h=(p.default.h3`
    font-size: var(--fontSizeBodyBase, ${({theme:e})=>{var t;return null===(t=e.typography.p2)||void 0===t?void 0:t.fontSize}});
    font-weight: normal;
    line-height: var(
        --lineHeightRegular,
        ${({theme:e})=>{var t;return null===(t=e.typography.p2)||void 0===t?void 0:t.lineHeight}}
    );
    margin-bottom: 8px;
    margin-top: 0;
`,p.default.div`
    align-items: center;
    border-bottom: 1px solid
        var(
            --colorsBorderSubtle,
            ${({theme:e})=>e.colors["borders-global-tertiary"]}
        );
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    min-height: 56px;
    padding: 8px 0;
    user-select: none;

    &:focus-visible {
        outline: ${({theme:e})=>`4px solid ${e.colors["background-brand-chat-highlight"]}`};
        outline: 4px solid
            var(
                --colorsBackgroundAccentSubtle,
                ${({theme:e})=>e.colors["background-brand-chat-highlight"]}
            );
    }
`),b=p.default.div`
    & svg {
        display: block;
    }
`,x=p.default.div``,m=p.default.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-left: auto;
`,y=p.default.div`
    font-size: var(--fontSizeBodyBase, ${({theme:e})=>{var t;return null===(t=e.typography.p2)||void 0===t?void 0:t.fontSize}});
    font-weight: normal;
    line-height: var(
        --lineHeightRegular,
        ${({theme:e})=>{var t;return null===(t=e.typography.p2)||void 0===t?void 0:t.lineHeight}}
    );

    &:not(:first-of-type) {
        margin-left: 16px;
    }

    &:not(:last-of-type) {
        margin-right: 16px;
    }
`,w=p.default(b)`
    &:not(:last-of-type) {
        margin-right: 16px;
    }
`,$=p.default(n.default)`
    height: 24px;
    width: 24px;

    & path {
        fill: var(
            --colorsForegroundAccent,
            ${({theme:e})=>e.colors["icon-global-highlight"]}
        );
    }
`,j=p.default(w)``,_=a.withDataTag(({children:e,dataAttributes:t={},className:r,innerRef:a,...o})=>d.jsx(v,c.default({},o,i.parseDataAttributes(t),{ref:a,className:r}),e),"ListContainer");t.Vm=_,t.HC=({children:e,suffixIcon:t,prefixIcon:r,isSelected:a,counterValue:o,maxCounterValue:l=99,onClick:n=()=>{},className:s,tabIndex:f=0,dataAttributes:p={},innerRef:v,..._})=>{let z=!g.default(o);return d.jsx(h,c.default({},_,i.parseDataAttributes(p),{ref:v,className:s,tabIndex:f,onClick:n}),r&&d.jsx(x,null,d.jsx(b,null,d.jsx(r,null))),d.jsx(y,null,e),d.jsx(m,null,z&&d.jsx(j,null,d.jsx(u.Badge,{value:o,maxDisplayValue:l,variant:"selected"})),a&&d.jsx(w,null,d.jsx($,null)),t&&d.jsx(b,null,d.jsx(t,null))))}},48837:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(73119);r(27378);var o=r(54254),i=r(2827),l=r(10043);r(96476),r(4645);var n=a&&a.__esModule?a:{default:a};let d=.8,s=60,u=o.withDataTag(({animationDuration:e=d,size:t=s,borderColor:r="borders-brand-primary",...a})=>l.jsx(i.SOLoader,n.default({borderColor:r,animationDuration:e,size:t},a)),"OLoader");t.OLoader=u,t.default=u},2827:function(e,t,r){"use strict";var a=r(10043),o=r(96476),i=r(4645),l=i&&i.__esModule?i:{default:i};let n=a.keyframes`
    0% {
        transform: scale(0.9);
    }
    100% {
        transform: scale(1.8);
    }
`,d=l.default.div`
    animation: ${n}
        ${({animationDuration:e})=>e+"s"} alternate infinite ease-in;
    border-radius: 50%;
    border-style: solid;
    /* stylelint-disable-next-line unit-no-unknown */
    border-width: ${({size:e})=>`${.3*e}px`};
    ${o.borderColor};
    box-sizing: border-box;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
`;t.SOLoader=d},79850:function(e,t,r){"use strict";var a=r(27378),o=r(54254),i=r(98640),l=r(10043);r(73119),r(4645);var n=a&&a.__esModule?a:{default:a};let d=o.withDataTag(({className:e,linesCountInPreview:t,maxLinesCountBeforeCollapse:r,children:a,toggleButton:o,animationTimePerLine:d=.025,as:s="p"})=>{let[u,f]=n.default.useState(!1),[c,p]=n.default.useState(!0),[g,v]=n.default.useState({collapsedHeight:"auto",expandedHeight:"auto",linesCount:0}),h=n.default.useRef(null),b=n.default.useRef(null),x=()=>{if(b.current)return b.current.clientHeight};n.default.useLayoutEffect(()=>{if(!h.current)return;let e=x();if(!e)return;let a=h.current.children[0].clientHeight,o=Math.max(1,a/e-1);v({collapsedHeight:t*e,expandedHeight:a+2*e,linesCount:o}),o>r?(p(!1),f(!0)):(p(!0),f(!1))},[t,r]);let m=d*g.linesCount,y=c?g.expandedHeight:g.collapsedHeight;return l.jsx("div",{className:e},l.jsx(i.TextWrapper,{ref:h,transitionTime:m,height:y,"data-testid":"textWrapper"},l.jsx(s,{style:{marginTop:0,marginBottom:0}},a,l.jsx(i.InvisibleSpan,{ref:b,"data-testid":"invisibleSpan"},"\xa0"))),u&&o({handleShowToggle:()=>p(!c),isExpanded:c}))},"ReadMore");t.y=d},98640:function(e,t,r){"use strict";var a=r(4645),o=a&&a.__esModule?a:{default:a};let i=o.default.span`
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 0;
`,l=o.default.div`
    ${({transitionTime:e,height:t})=>`
        max-height: ${isNaN(Number(t))?t:`${t}px`};
        transition: ${e}s max-height ease;
        overflow: hidden;
    `}
`;t.InvisibleSpan=i,t.TextWrapper=l},14658:function(e,t,r){"use strict";r(27378);var a=r(44805),o=r(10043),i=r(95753),l=r(99317);r(4645),r(48029),r(73119),r(4272),r(96476),r(59098),r(54254),r(22048),r(48837),r(2827),r(40949),r(36051),r(9038),t.e=({onClick:e,isExpanded:t,showMoreText:r,showLessText:n})=>o.jsx(a.StyledButton,{onClick:e},o.jsx(a.TextWrapper,null,t?n:r),t?o.jsx(i.default,{marginLeft:6,"data-testid":"arrowUp",color:"icon-brand-primary",size:"icon-small"}):o.jsx(l.default,{marginLeft:6,"data-testid":"arrowDown",color:"icon-brand-primary",size:"icon-small"}))},44805:function(e,t,r){"use strict";var a=r(4645),o=r(48029);r(73119),r(27378),r(10043),r(4272),r(96476),r(59098),r(54254),r(22048),r(48837),r(2827);var i=a&&a.__esModule?a:{default:a};let l=i.default(o.ButtonNoBackground)`
    min-height: unset;
    text-transform: none;

    ${({theme:e})=>{var t,r,a,o;return`
        height: var(--spacing300, ${null===(t=e.space)||void 0===t?void 0:t[24]});
        margin-top: var(--spacing150, ${null===(r=e.space)||void 0===r?void 0:r[12]});
        font-size: var(--fontSizeBodyBase, ${null===(a=e.typography.p2)||void 0===a?void 0:a.fontSize});
        line-height: var(--lineHeightRegular, ${null===(o=e.typography.p2)||void 0===o?void 0:o.lineHeight});
        color: var(--colorsForegroundActionPrimary, ${e.colors["text-brand-primary"]});
    `}}
`,n=i.default.span`
    margin-bottom: var(--spacing50, ${({theme:e})=>{var t;return null===(t=e.space)||void 0===t?void 0:t[2]}});
`;t.StyledButton=l,t.TextWrapper=n},4272:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(73119),o=r(27378),i=r(10043),l=r(96476),n=r(4645),d=r(59098),s=r(48837);function u(e){return e&&e.__esModule?e:{default:e}}r(54254),r(22048),r(2827);var f=u(a),c=u(o),p=u(n);let g=({theme:e})=>{var t;return i.css("font-size:",null===(t=e.fontSizes)||void 0===t?void 0:t.p3,";line-height:20px;","")},v=({theme:e})=>{var t;return i.css("font-size:",null===(t=e.fontSizes)||void 0===t?void 0:t.p2,";line-height:18px;","")},h=({theme:e})=>i.css("align-items:center;border:0;border-radius:0;box-sizing:border-box;color:",e.colors["text-global-inverse"],";cursor:pointer;display:inline-flex;justify-content:center;margin:0;min-height:40px;padding:13px 48px 15px;position:relative;text-decoration:none;&:disabled{cursor:default;}",""),b=p.default.button`
    ${h};
    ${({theme:e})=>{var t;return`
        background-color: ${e.colors["background-brand-primary"]};
        font-weight: ${null===(t=e.fontWeights)||void 0===t?void 0:t.bold};
    `}}
    ${e=>"small"===e.size?g(e):v(e)};
    ${l.margin};

    &:disabled {
        cursor: default;
    }
`,x=p.default.a`
    ${h};

    background-color: ${({theme:e})=>e.colors["background-brand-primary"]};
    font-weight: ${({theme:e})=>{var t;return null===(t=e.fontWeights)||void 0===t?void 0:t.bold}};
`,m=p.default.span`
    align-items: center;
    display: inline-flex;
    justify-content: center;
    visibility: hidden;
`,y=p.default.div`
    align-items: center;
    display: inline-flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    visibility: visible;
    width: 100%;
`,w={type:"button",size:"default"},$=()=>{},j=({type:e="dots",size:t="default",color:r="text-global-inverse"})=>{let a;return a="o"===e?i.jsx(s.OLoader,{size:12,borderColor:r}):i.jsx(d.DotsLoader,{size:"small"===t?12:16,borderColor:r}),i.jsx(y,{"data-testid":"button-loader-wrapper"},a)},_=c.default.forwardRef(({link:e,children:t,renderIcon:r,size:a,disabled:o,isLoading:l,...n},d)=>{let s=e?x:b,u=r?r({size:"small"===a?"icon-small":"icon-medium",color:"inherit",mr:8,mt:-2,mb:-2,ml:-2}):null;return i.jsx(s,f.default({},w,e?{href:e}:{},n,{disabled:!!l||o,ref:d,size:a,onTouchStart:$}),l?i.jsx(m,null,u,t):i.jsx(c.default.Fragment,null,u,t))}),z=(e,t)=>{let r=r=>{let{forwardedRef:a,...o}=r,{children:l,isLoading:n,size:d}=r;return i.jsx(e,f.default({ref:a},o),l,n&&i.jsx(j,{type:null==t?void 0:t.type,size:d,color:null==t?void 0:t.color}))};return c.default.forwardRef((e,t)=>i.jsx(r,f.default({},e,{forwardedRef:t})))};var k=z(_);t.ButtonBase=_,t.Link=x,t.default=k,t.withLoader=z},48029:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(73119),o=r(27378),i=r(10043),l=r(4645),n=r(4272);function d(e){return e&&e.__esModule?e:{default:e}}r(96476),r(59098),r(54254),r(22048),r(48837),r(2827);var s=d(a),u=d(o),f=d(l);let c=({theme:e})=>i.css("color:",e.colors["text-brand-primary"],";",""),p=({theme:e})=>i.css("color:",e.colors["text-brand-primary"],";",""),g=({theme:e})=>i.css("color:",e.colors["text-global-disabled"],";",""),v=f.default(n.ButtonBase)`
    background: transparent;
    border: 0;
    color: ${({theme:e})=>e.colors["text-brand-primary"]};
    font-size: ${({theme:e})=>{var t;return null===(t=e.fontSizes)||void 0===t?void 0:t.p4}};
    font-weight: ${({theme:e})=>{var t;return null===(t=e.fontWeights)||void 0===t?void 0:t.bold}};
    letter-spacing: ${({theme:e})=>e.letterSpacings["0.8"]};
    padding: 0;
    text-transform: uppercase;

    @media (hover) {
        &:not(:disabled):hover {
            ${c}
        }

        &:not(:disabled):active {
            ${p}
        }
    }

    @media (hover: none) {
        &:not(:disabled):active {
            ${c}
        }
    }

    &:disabled {
        ${e=>e.isLoading?p:g}
    }
`,h={size:"default",type:"button"},b=n.withLoader(u.default.forwardRef((e,t)=>i.jsx(v,s.default({},h,e,{ref:t}))),{type:"dots",color:"text-brand-primary"});t.ButtonNoBackground=b,t.default=b},92465:function(e){e.exports=function(e){return void 0===e}}}]);
//# sourceMappingURL=81275.6349048ea6476ef8.js.map