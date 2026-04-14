!function(){try{var n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};n._sentryModuleMetadata=n._sentryModuleMetadata||{},n._sentryModuleMetadata[(new n.Error).stack]=function(n){for(var a=1;a<arguments.length;a++){var e=arguments[a];if(null!=e)for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i])}return n}({},n._sentryModuleMetadata[(new n.Error).stack],{"_sentryBundlerPluginAppKey:olx-real-estate-key-for-sentry":!0});var a=(new n.Error).stack;a&&(n._sentryDebugIds=n._sentryDebugIds||{},n._sentryDebugIds[a]="f96fe630-fcbb-4ce1-89ff-0e2fa8ac3df7",n._sentryDebugIdIdentifier="sentry-dbid-f96fe630-fcbb-4ce1-89ff-0e2fa8ac3df7")}catch(n){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[92639],{13638:function(n,a,e){var i=e(10043);let o=i.keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`,t=i.keyframes`
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
`,l=i.keyframes`
    from {
        transform: translateY(100%);
        visibility: visible;
    }

    to {
        transform: translateY(0);
    }
`,d=i.keyframes`
    from {
        transform: translate3d(0, 0, 0);
    }

    to {
        transform: translate3d(0, 100%, 0);
        visibility: visible;
    }
`;a.FadeIn=o,a.FadeOut=t,a.SlideInDown=d,a.SlideInUp=l},67931:function(n,a,e){var i,o,t=e(54254),l=e(73119),d=e(27378),s=e(41723),c=e(43306),u=e(66800),v=e(4645),p=e(10043),f=e(73386),g=e(7674);function b(n){return n&&n.__esModule?n:{default:n}}e(65113),e(28661),e(44223),e(55778),e(45437),e(69482),e(43013),e(40949),e(36051),e(96476),e(9038);var m=b(l),h=b(v);let y=h.default.button`
    --backgroundColor: transparent;
    --color: var(
        --colorsForegroundPrimary,
        ${({theme:n})=>n.colors["text-global-primary"]}
    );
    --iconColor: var(
        --colorsForegroundPrimary,
        ${({theme:n})=>n.colors["icon-global-primary"]}
    );

    background: var(--backgroundColor);
    border: none;
    border-radius: var(--radiusMedium, ${({theme:n})=>{var a;return null===(a=n.radii)||void 0===a?void 0:a.medium}});
    box-sizing: border-box;
    color: var(--color);
    display: inline-block;
    font: inherit;
    font-size: var(
        --bodyExtraSmallFontSize,
        ${({theme:n})=>{var a;return null===(a=n.typography.lb2)||void 0===a?void 0:a.fontSize}}
    );
    font-weight: var(--fontWeightBold, ${({theme:n})=>{var a;return null===(a=n.fontWeights)||void 0===a?void 0:a.bold}});
    letter-spacing: var(
        --letterSpacingWide,
        ${({theme:n})=>{var a;return null===(a=n.letterSpacings)||void 0===a?void 0:a.xWide}}
    );
    line-height: var(
        --lineHeightRegular,
        ${({theme:n})=>{var a;return null===(a=n.typography.lb2)||void 0===a?void 0:a.lineHeight}}
    );
    padding: var(--spacing200, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[16]}})
        var(--spacing150, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[12]}});
    text-transform: uppercase;

    &:disabled {
        --color: var(
            --colorsForegroundDisabled,
            ${({theme:n})=>n.colors["text-global-disabled"]}
        );
        --iconColor: var(
            --colorsForegroundDisabled,
            ${({theme:n})=>n.colors["icon-global-disabled"]}
        );
    }

    &:not(:disabled) {
        &:active {
            --backgroundColor: var(
                --colorsOpacityPrimaryMedium,
                ${({theme:n})=>n.colors["dark-m"]}
            );
        }

        &:not(:active):hover {
            --backgroundColor: var(
                --colorsOpacityPrimarySubtle,
                ${({theme:n})=>n.colors["dark-s"]}
            );
        }

        &:not(:focus-visible):focus {
            outline: none;
        }

        &:focus-visible,
        &:focus {
            outline-color: var(
                --colorsBorderFocus,
                ${({theme:n})=>n.colors["borders-global-focus"]}
            );
            outline-offset: 1px;
            outline-style: solid;
            outline-width: var(--widthLarge, ${({theme:n})=>{var a;return null===(a=n.borderWidths)||void 0===a?void 0:a.large}});
        }
    }

    & svg {
        color: var(--iconColor);
        display: block;
        height: var(--iconSize);
        width: var(--iconSize);
    }

    &[data-internal-button-icon='true'] {
        --iconSize: var(--spacing300, ${({theme:n})=>{var a;return null===(a=n.sizes)||void 0===a?void 0:a["icon-medium"]}});
        --buttonSize: var(--spacing500, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[40]}});

        height: var(--buttonSize);
        padding: var(--spacing100, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[8]}});
        width: var(--buttonSize);

        &[data-internal-button-small='true'] {
            --iconSize: var(--spacing200, ${({theme:n})=>{var a;return null===(a=n.sizes)||void 0===a?void 0:a["icon-small"]}});
            --buttonSize: var(--spacing300, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[24]}});

            padding: var(--spacing50, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[4]}});
        }
    }
`,x=d.forwardRef(({type:n="button",children:a,small:e,icon:i,...o},t)=>p.jsx(y,m.default({type:n,ref:t},o,{"data-internal-button-small":e,"data-internal-button-icon":!!i}),!!i&&p.jsx("span",{className:"n-internal-button-icon-wrapper"},i),a)),w=h.default.div`
    --bannerBackground: ${({theme:n})=>f.getTokenOverride_DO_NOT_USE(n,"background-brand-notification-neutral")};
    --prefixSize: var(--spacing300, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[24]}});
    --prefixAdditionalMargin: var(--spacing0, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[0]}});
    --negativeMargin: var(--spacing0, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[0]}});

    background: var(--bannerBackground);
    border-radius: var(--radiusMedium, ${({theme:n})=>{var a;return null===(a=n.radii)||void 0===a?void 0:a.medium}});
    box-sizing: border-box;
    padding: var(--spacing200, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[16]}});

    & .n-banner-content-wrapper {
        display: flex;
        flex-direction: row;
        gap: var(--spacing100, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[8]}});

        & .n-banner-prefix-wrapper {
            margin-right: var(--prefixAdditionalMargin);

            & svg {
                color: var(
                    --colorsForegroundPrimary,
                    ${({theme:n})=>n.colors["icon-global-primary"]}
                );
                display: block;
                height: var(--prefixSize);
                width: var(--prefixSize);
            }
        }

        & .n-banner-text-wrapper {
            color: var(
                --colorsForegroundPrimary,
                ${({theme:n})=>n.colors["text-global-primary"]}
            );
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: center;
            min-height: 100%;

            & .n-banner-title {
                margin-bottom: var(--spacing50, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[4]}});
            }

            & .n-banner-text {
                font-size: var(
                    --bodySmallFontSize,
                    ${({theme:n})=>{var a;return null===(a=n.typography.p3)||void 0===a?void 0:a.fontSize}}
                );
                line-height: var(
                    --lineHeightWide,
                    ${({theme:n})=>{var a;return null===(a=n.typography.p3)||void 0===a?void 0:a.lineHeight}}
                );
                margin-block-end: unset;
                margin-block-start: unset;
            }

            & > p:first-of-type {
                margin-top: 0;
            }

            & > p:last-of-type {
                margin-bottom: 0;
            }

            & svg {
                color: var(
                    --colorsForegroundPrimary,
                    ${({theme:n})=>n.colors["icon-global-primary"]}
                );
            }
        }
    }

    & .n-banner-actions-wrapper {
        display: flex;
        flex-shrink: 1;
        gap: var(--spacing100, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[8]}});
        justify-content: flex-end;
        margin-bottom: var(--negativeMargin);
        margin-top: var(--negativeMargin);

        &:empty {
            display: none;
        }

        &--bottom {
            margin: var(--spacing50, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[4]}}) 0 0 0;
        }
    }

    &[data-banner-size='small'] {
        padding: var(--spacing100, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[8]}})
            var(--spacing200, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[16]}});
    }

    &[data-banner-actions-location='inline'] {
        --negativeMargin: calc(
            -1 * var(--spacing100, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[8]}})
        );

        & .n-banner-actions-wrapper,
        & .n-banner-content-wrapper {
            align-items: center;
        }
    }

    &[data-banner-size='normal'][data-banner-prefix-type='illustration'] {
        --prefixSize: var(--spacing500, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[40]}});
        --prefixAdditionalMargin: var(--spacing100, ${({theme:n})=>{var a;return null===(a=n.space)||void 0===a?void 0:a[8]}};);

        & .n-banner-prefix-wrapper {
            margin-bottom: var(--negativeMargin);
            margin-top: var(--negativeMargin);
        }
    }

    &[data-banner-variant='positive'] {
        --bannerBackground: var(
            --colorsBackgroundStatusSuccessSubtle,
            ${({theme:n})=>n.colors["background-brand-notification-success"]}
        );
    }

    &[data-banner-variant='warning'] {
        --bannerBackground: var(
            --colorsBackgroundStatusWarningSubtle,
            ${({theme:n})=>n.colors["background-brand-notification-warning"]}
        );
    }

    &[data-banner-variant='negative'] {
        --bannerBackground: var(
            --colorsBackgroundStatusErrorSubtle,
            ${({theme:n})=>n.colors["background-brand-notification-error"]}
        );
    }
`;a.I0=void 0,(i=a.I0||(a.I0={})).small="small",i.normal="normal",a.uL=void 0,(o=a.uL||(a.uL={})).neutral="neutral",o.positive="positive",o.warning="warning",o.negative="negative";let k=d.forwardRef(({children:n,title:a,variant:e="neutral",className:i,actions:o,actionsLocation:t,dismissible:l,onDismiss:v=()=>{},prefix:f,prefixType:b="icon",size:h="normal",dataAttributes:y={},"aria-label":k,innerRef:$,role:M="status",childrenAs:S="div","n-aria-dismiss-label":z="close",..._},j)=>{let N=d.useCallback(()=>{v()},[v]),I=Array.isArray(o)&&o.length>0?o.slice(0,2).map((n,a)=>p.jsx("div",{key:`ActionComponent-${a}`},c.getReactNode(n))):null,O=!!a,C=O&&"bottom"||t||"inline";return p.jsx(w,m.default({},_,s.parseDataAttributes(y),{ref:j||$,className:i,"data-banner-size":h,"data-banner-variant":e,"data-banner-actions-location":C,role:M,"aria-label":a||k,"data-banner-prefix-type":b}),p.jsx("div",{className:"n-banner-content-wrapper"},!!f&&p.jsx("div",{className:"n-banner-prefix-wrapper","aria-hidden":!0},c.getReactNode(f)),p.jsx("div",{className:"n-banner-text-wrapper"},O&&p.jsx(u.P3,{variant:"bold",className:"n-banner-title"},a),p.jsx(S,{className:"n-banner-text"},n)),p.jsx("div",{className:"n-banner-actions-wrapper"},"inline"===C&&I,l&&p.jsx(x,{"aria-label":z,onClick:N,small:!0,icon:p.jsx(g.default,null)}))),"bottom"===C&&p.jsx("div",{className:"n-banner-actions-wrapper n-banner-actions-wrapper--bottom"},I))}),$=t.withDataTag(k,"Banner");a.jL=$},7674:function(n,a,e){Object.defineProperty(a,"__esModule",{value:!0});var i=e(73119);e(27378);var o=e(40949),t=e(10043);e(36051),e(96476),e(4645),e(9038);var l=i&&i.__esModule?i:{default:i};let d=o.withIconProps(n=>t.jsx("svg",l.default({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},n),t.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M20.586 2 12 10.586 3.414 2H2v1.414L10.586 12 2 20.586V22h1.414L12 13.414 20.586 22H22v-1.414L13.415 12 22 3.414V2z",clipRule:"evenodd"})));a.default=d},39511:function(n,a,e){var i=e(73119);e(27378);var o=e(40949),t=e(10043);e(36051),e(96476),e(4645),e(9038);var l=i&&i.__esModule?i:{default:i};let d=o.withIconProps(n=>t.jsx("svg",l.default({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},n),t.jsx("path",{fill:"currentColor",d:"M8 6H6v2h2zM8 10H6v2h2zM16 16h2v2h-2z"}),t.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M11.958 11.826 15 9.798v-.001l7 4.667V22H2V2h9.958zM8 20v-5.535l1.958-1.306V12H9v-2h.958V8H9V6h.958V4H4v2h1v2H4v2h1v2H4v8zm6 0h6v-4.465l-5-3.333-5 3.333V20h2v-4h2z",clipRule:"evenodd"})));a.Z=d},91895:function(n){n.exports=function(){}},47169:function(n,a,e){e.d(a,{Z:function(){return i}});function i(n){if(void 0===n)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return n}},30808:function(n,a,e){e.d(a,{Z:function(){return i}});function i(n,a){if(null==n)return{};var e={};for(var i in n)if(({}).hasOwnProperty.call(n,i)){if(-1!==a.indexOf(i))continue;e[i]=n[i]}return e}},6983:function(n,a,e){e.d(a,{Z:function(){return i}});function i(n,a){return(i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,a){return n.__proto__=a,n})(n,a)}},70070:function(n,a,e){e.d(a,{m$:function(){return l}});var i=e(7846),o=0,t=new Set;function l(){function n(n,a){var e,l,d=(0,i.Qc)(n).definitions,s=new Set;for(var c of a||[])for(var u of c.definitions)u.kind!==i.hY.FRAGMENT_DEFINITION||s.has(u)||(d.push(u),s.add(u));return(e=d[0].kind===i.hY.FRAGMENT_DEFINITION)&&d[0].directives&&(d[0].directives=d[0].directives.filter(n=>"_unmask"!==n.name.value)),{kind:i.hY.DOCUMENT,definitions:d,get loc(){if(!l&&e){var v=n+function(n){try{o++;var a="";for(var e of n)if(!t.has(e)){t.add(e);var{loc:i}=e;i&&(a+=i.source.body)}return a}finally{0==--o&&t.clear()}}(a||[]);return{start:0,end:v.length,source:{body:v,name:"GraphQLTada",locationOffset:{line:1,column:1}}}}return l},set loc(r){l=r}}}return n.scalar=function(n,a){return a},n.persisted=function(n,a){return{kind:i.hY.DOCUMENT,definitions:a?a.definitions:[],documentId:n}},n}l()}}]);
//# sourceMappingURL=92639-92c5e52372f98453.js.map