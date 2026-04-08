!function(){try{var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};r._sentryModuleMetadata=r._sentryModuleMetadata||{},r._sentryModuleMetadata[(new r.Error).stack]=function(r){for(var e=1;e<arguments.length;e++){var a=arguments[e];if(null!=a)for(var o in a)a.hasOwnProperty(o)&&(r[o]=a[o])}return r}({},r._sentryModuleMetadata[(new r.Error).stack],{"_sentryBundlerPluginAppKey:olx-real-estate-key-for-sentry":!0});var e=(new r.Error).stack;e&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[e]="e92f184d-a63e-4d24-8602-fb595bfff588",r._sentryDebugIdIdentifier="sentry-dbid-e92f184d-a63e-4d24-8602-fb595bfff588")}catch(r){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56965,82949],{53478:function(r,e,a){a(27378);var o=a(66800),t=a(80069),l=a(10043);e.Affix=({children:r,disabled:e,className:a})=>"string"==typeof r||"number"==typeof r?l.jsx(t.AffixWrapper,{className:a,"data-affix-disabled":e},l.jsx(o.P2,{className:"n-affix-text"},r)):l.jsx(t.AffixWrapper,{className:a,"data-affix-disabled":e},r)},89738:function(r,e,a){a(27378);var o=a(80069),t=a(10043);e.InputStatusIcon=({status:r,"aria-hidden":e})=>{switch(r){case"hasError":return t.jsx(o.ErrorIcon,{"aria-hidden":e,role:"img"});case"isFilled":return t.jsx(o.FilledIcon,{"aria-hidden":e,role:"img"});default:return null}}},44062:function(r,e,a){var o=a(73119);a(27378);var t=a(41723),l=a(4645),i=a(85371),n=a(10043);function d(r){return r&&r.__esModule?r:{default:r}}var s=d(o),u=d(l);let c=u.default.div`
    --base: 12;
    --gap: ${16}px;
    --containerWidth: ${({containerWidth:r})=>r};

    margin: auto;
    max-width: 100%;
    width: var(--containerWidth);
`,v=u.default.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* gap variable is taken from Container */
    gap: var(--gap);
`,f=r=>"fluid"===r&&i.css`
        flex-grow: 1;
    `,p=u.default.div`
    --totalGaps: calc(var(--gap) * (var(--base) - 1));
    --includedGaps: calc(var(--gap) * (var(--span) - 1));
    --singleWidth: calc((var(--containerWidth) - var(--totalGaps)) / var(--base));
    --totalWidth: calc(var(--singleWidth) * var(--span) + var(--includedGaps));
    --offsetWidth: calc(var(--singleWidth) * var(--offset) + var(--gap) * var(--offset));

    flex: var(--span);
    margin-left: var(--offsetWidth);
    max-width: var(--totalWidth);

    ${({theme:r})=>{var e;return`@media ${null===(e=r.mediaQueries)||void 0===e?void 0:e.xsMin}`}} {
        --offset: ${({offsetXS:r})=>r};
        --span: ${({xs:r=1})=>r};

        ${({xs:r})=>f(r)};
    }

    ${({theme:r})=>{var e;return`@media ${null===(e=r.mediaQueries)||void 0===e?void 0:e.smMin}`}} {
        --offset: ${({offsetSM:r})=>r};
        --span: ${({sm:r})=>r};

        ${({sm:r})=>f(r)}
    }

    ${({theme:r})=>{var e;return`@media ${null===(e=r.mediaQueries)||void 0===e?void 0:e.mdMin}`}} {
        --offset: ${({offsetMD:r})=>r};
        --span: ${({md:r})=>r};
        ${({sm:r})=>f(r)}
    }

    ${({theme:r})=>{var e;return`@media ${null===(e=r.mediaQueries)||void 0===e?void 0:e.lgMin}`}} {
        --offset: ${({offsetLG:r})=>r};
        --span: ${({lg:r})=>r};
        ${({sm:r})=>f(r)}
    }

    ${({theme:r})=>{var e;return`@media ${null===(e=r.mediaQueries)||void 0===e?void 0:e.xlMin}`}} {
        --offset: ${({offsetXL:r})=>r};
        --span: ${({xl:r})=>r};
        ${({sm:r})=>f(r)}
    }
`;u.default.div`
    align-items: center;
    background: var(
        --colorsBackgroundActionPrimary,
        ${({theme:r})=>r.colors["background-brand-primary"]}
    );
    border-radius: 4px;
    color: var(
        --colorsForegroundOnInverse,
        ${({theme:r})=>r.colors["text-global-inverse"]}
    );
    display: flex;
    flex-direction: column;
    height: 64px;
    justify-content: center;
    width: 100%;
`,e.Col=p,e.Container=c,e.Row=({className:r,children:e,as:a="div",dataAttributes:o={},innerRef:l,...i})=>n.jsx(v,s.default({},i,t.parseDataAttributes(o),{ref:l,as:a,className:r}),e)},76667:function(r,e,a){a(27378);var o=a(80069),t=a(10043);e.SymbolsCounter=({value:r="",maxLength:e})=>{let a=Array.isArray(r)?r.length:String(r).length,l=e||"∞",i=String(a),n=2*String(e).length+1+"ch";return t.jsx(o.SymbolsCounterStyled,{style:{minWidth:n}},i,"/",l)}},80069:function(r,e,a){var o=a(4645),t=a(67528),l=a(28608),i=a(66800),n=o&&o.__esModule?o:{default:o};n.default.input`
    --inputTextColorDisabled: var(
        --colorsForegroundDisabled,
        ${({theme:r})=>r.colors["text-global-disabled"]}
    );
    --inputBorderBottomWidth: 2px;

    background: var(
        --colorsBackgroundSecondary,
        ${({theme:r})=>r.colors["background-global-secondary"]}
    );
    border: none;
    border-bottom: var(--inputBorderBottomWidth) solid transparent;
    border-radius: var(--radiusMedium, ${({theme:r})=>{var e;return null===(e=r.radii)||void 0===e?void 0:e.medium}});
    box-sizing: border-box;
    color: var(
        --colorsForegroundPrimary,
        ${({theme:r})=>r.colors["text-global-primary"]}
    );
    font-family: var(--fontFamilyPrimary, ${({theme:r})=>{var e;return null===(e=r.fonts)||void 0===e?void 0:e.family}});
    font-size: var(--bodyBaseFontSize, ${({theme:r})=>{var e;return null===(e=r.typography.p2)||void 0===e?void 0:e.fontSize}});
    outline: none;
    padding-bottom: ${({theme:r})=>{var e;return`calc(${null===(e=r.space)||void 0===e?void 0:e[14]} - var(--inputBorderBottomWidth))`}};
    padding-bottom: calc(var(--spacing150) - var(--inputBorderBottomWidth));
    padding-left: var(--spacing200, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[16]}});
    padding-right: var(--spacing200, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[16]}});
    padding-top: var(--spacing150, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[14]}});
    width: 100%;

    &::placeholder {
        color: var(
            --colorsForegroundSecondary,
            ${({theme:r})=>r.colors["text-global-secondary"]}
        );
        opacity: 1;
    }

    &:disabled {
        color: var(--inputTextColorDisabled);

        &::placeholder {
            color: var(--inputTextColorDisabled);
        }
    }

    &:read-only {
        color: var(--inputTextColorDisabled);
    }

    &:focus {
        border-bottom-color: ${({hasError:r,theme:e})=>r?`var(--colorsBorderStatusError, ${e.colors["borders-global-error"]})`:`var(--colorsBackgroundActionPrimary, ${e.colors["background-brand-primary"]})`};
        border-radius: var(--radiusMedium, ${({theme:r})=>{var e;return null===(e=r.radii)||void 0===e?void 0:e.medium}})
            var(--radiusMedium, ${({theme:r})=>{var e;return null===(e=r.radii)||void 0===e?void 0:e.medium}}) 0 0;
    }
`;let d=n.default.div`
    box-sizing: border-box;
    display: ${({fullWidth:r=!1})=>r?"block":"inline-block"};
    position: relative;
    width: inherit;

    & svg {
        color: ${({disabled:r,theme:e})=>r?`var(--colorsForegroundDisabled, ${e.colors["text-global-disabled"]})`:`var(--colorsForegroundPrimary, ${e.colors["icon-global-primary"]})`};
    }
`,s=n.default(t.default)`
    color: var(
        --colorsForegroundStatusError,
        ${({theme:r})=>r.colors["icon-global-error"]}
    ) !important;
`,u=n.default(l.default)`
    color: var(
        --colorsForegroundStatusSuccess,
        ${({theme:r})=>r.colors["icon-status-success"]}
    ) !important;
`,c=n.default.div`
    --textColor: var(
        --colorsForegroundSecondary,
        ${({theme:r})=>r.colors["text-global-secondary"]};
    );
    --iconColor: var(
        --colorsForegroundPrimary,
        ${({theme:r})=>r.colors["icon-global-primary"]}
    );

    color: var(--textColor);

    & svg {
        color: var(--iconColor);
        display: block;
    }

    &[data-affix-disabled='true'] {
        --textColor: var(
            --colorsForegroundDisabled,
            ${({theme:r})=>r.colors["text-global-disabled"]}
        );
        --iconColor: var(
            --colorsForegroundDisabled,
            ${({theme:r})=>r.colors["icon-global-disabled"]}
        );
    }

    & .n-affix-text {
        color: inherit;
    }
`,v=n.default(i.P4)`
    color: var(
        --colorsForegroundSecondary,
        ${({theme:r})=>r.colors["text-global-secondary"]}
    );
    text-align: right;
`;e.AffixWrapper=c,e.ErrorIcon=s,e.FilledIcon=u,e.InputWrapper=d,e.SymbolsCounterStyled=v},20565:function(r,e,a){var o=a(73119),t=a(27378),l=a(41723);a(80069);var i=a(10043),n=a(76667),d=a(4645),s=a(66800),u=a(85371),c=a(44062);function v(r){return r&&r.__esModule?r:{default:r}}a(65113),a(28661),a(44223),a(55778),a(67528),a(40949),a(36051),a(96476),a(9038),a(28608),a(54254),a(45437),a(69482),a(43013);var f=v(o),p=v(t),g=v(d);let b=g.default("label",{shouldForwardProp:r=>"required"!==r})`
    color: var(
        --colorsForegroundPrimary,
        ${({theme:r})=>r.colors["text-global-primary"]}
    );
    cursor: pointer;
    display: block;
    font-size: var(--fontSizeBodySmall, ${({theme:r})=>{var e;return null===(e=r.fontSizes)||void 0===e?void 0:e.p3}});
    line-height: 1;
    margin-bottom: var(--spacing50, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[4]}});

    ${({required:r})=>r&&u.css`
            &::after {
                content: '*';
                margin-left: 3px;
            }
        `}
`,x=g.default(s.P4)`
    color: ${({theme:r,hasError:e})=>e?`var(--colorsForegroundStatusError, ${r.colors["text-global-error"]})`:`var(--colorsForegroundSecondary, ${r.colors["text-global-secondary"]})`};
    flex: 1;
`,m=g.default(c.Row)`
    flex-wrap: nowrap;
    gap: var(--spacing50, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[4]}});
    margin-top: var(--spacing50, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[4]}});
`,h=p.default.forwardRef(({label:r,hint:e,error:a,inputProps:o={},inputComponent:d,labelComponent:s=b,enableRequiredIndicator:u=!1,className:c,dataAttributes:v={},innerRef:p,...g},h)=>{let{showSymbolsCount:y=!1,validationStatus:$,...w}=o,[C,k]=t.useState((null==o?void 0:o.value)||(null==o?void 0:o.defaultValue)||""),S=a||e||y,F=$||(a?"hasError":void 0);return i.jsx("div",f.default({},g,l.parseDataAttributes(v),{ref:h||p,className:c,onChange:r=>{var e;k(null===(e=r.nativeEvent.target)||void 0===e?void 0:e.value)},"data-nx-name":"FormControl"}),r&&i.jsx(s,{htmlFor:o.id,required:u&&w.required},r),i.jsx(d,f.default({},w,{"aria-invalid":!!a,"aria-describedby":S?`${o.id}-hint`:void 0,validationStatus:F})),S&&i.jsx(m,null,i.jsx(x,{id:`${o.id}-hint`,hasError:!!a},a||e||""),y&&i.jsx(n.SymbolsCounter,{maxLength:w.maxLength,value:C})))});e.N=h,e.D=b},28608:function(r,e,a){Object.defineProperty(e,"__esModule",{value:!0});var o=a(73119);a(27378);var t=a(40949),l=a(10043);a(36051),a(96476),a(4645),a(9038);var i=o&&o.__esModule?o:{default:o};let n=t.withIconProps(r=>l.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"},r),l.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"m20.586 5-1.271 1.296L8 17.836l-3.315-3.38-1.271-1.297H2v1.443l1.271 1.296L7.293 20h1.414L20.73 7.738 22 6.442V5z"})));e.default=n},67528:function(r,e,a){Object.defineProperty(e,"__esModule",{value:!0});var o=a(73119);a(27378);var t=a(40949),l=a(10043);a(36051),a(96476),a(4645),a(9038);var i=o&&o.__esModule?o:{default:o};let n=t.withIconProps(r=>l.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",width:"1em",height:"1em"},r),l.jsx("path",{d:"m12 8.47-1 1v4l1 1 1-1v-4zm-1 8c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1"}),l.jsx("path",{fillRule:"evenodd",d:"M2.89 20.685h18.22l.89-1.487L12.895 2h-1.79L2 19.198zm16.53-2.023H4.57L11.995 4.64z",clipRule:"evenodd"})));e.default=n},82949:function(r,e,a){var o=a(54254),t=a(73119),l=a(27378);a(80069);var i=a(53478),n=a(89738),d=a(68694),s=a(99006),u=a(10043),c=a(41723),v=a(43306),f=a(4645);function p(r){return r&&r.__esModule?r:{default:r}}a(65113),a(28661),a(44223),a(55778),a(67528),a(40949),a(36051),a(96476),a(9038),a(28608),a(66800),a(45437),a(69482),a(43013),a(8732);var g=p(t),b=p(f);let x=b.default.div`
    --focusColor: var(
        --colorsBorderFocus,
        ${({theme:r})=>r.colors["borders-global-focus"]}
    );
    --textColor: var(
        --colorsForegroundPrimary,
        ${({theme:r})=>r.colors["text-global-primary"]}
    );
    --size: var(--spacing300, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[24]}});

    background: var(
        --colorsBackgroundPrimary,
        ${({theme:r})=>r.colors["background-brand-fields-inverse"]}
    );
    border-color: var(
        --colorsBorderMedium,
        ${({theme:r})=>r.colors["borders-global-secondary"]}
    );
    border-radius: var(--radiusMedium, ${({theme:r})=>{var e;return null===(e=r.radii)||void 0===e?void 0:e.medium}});
    border-style: solid;
    border-width: var(--widthSmall, ${({theme:r})=>{var e;return null===(e=r.borderWidths)||void 0===e?void 0:e.small}});
    box-sizing: border-box;
    display: inline-block;
    font-family: var(--fontFamilyPrimary, ${({theme:r})=>{var e;return null===(e=r.fonts)||void 0===e?void 0:e.family}});
    font-size: var(--fontSizeBodyBase, ${({theme:r})=>{var e;return null===(e=r.typography.p2)||void 0===e?void 0:e.fontSize}});
    line-height: var(--lineHeightWide, ${({theme:r})=>{var e;return null===(e=r.typography.p2)||void 0===e?void 0:e.lineHeight}});
    position: relative;
    vertical-align: top;
    width: inherit;

    &[data-textinput-full-width='true'] {
        display: block;
    }

    &[data-error='true'] {
        background-color: var(
            --colorsBackgroundStatusErrorSubtle,
            ${({theme:r})=>r.colors["background-brand-fields-error"]}
        );
        border-color: var(
            --colorsForegroundStatusError,
            ${({theme:r})=>r.colors["text-global-error"]}
        );
    }

    &[data-disabled='true'] {
        background-color: var(
            --colorsBackgroundDisabled,
            ${({theme:r})=>r.colors["background-brand-fields-disabled"]}
        );
        border-color: var(
            --colorsBorderSubtle,
            ${({theme:r})=>r.colors["borders-global-tertiary"]}
        );
    }

    &:focus-within {
        outline-color: var(--focusColor);
        outline-offset: calc(
            var(--widthSmall, ${({theme:r})=>{var e;return null===(e=r.borderWidths)||void 0===e?void 0:e.small}}) * -1
        );
        outline-style: solid;
        outline-width: var(--widthMedium, ${({theme:r})=>{var e;return null===(e=r.borderWidths)||void 0===e?void 0:e.medium}});
    }

    & .n-textinput-layout {
        display: flex;
        flex-direction: row;
        gap: var(--spacing100, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[8]}});

        & > .n-textinput-input,
        & > .n-textinput-affix--pre {
            padding-left: var(--spacing200, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[16]}});
        }

        & > :only-child {
            padding-right: var(--spacing200, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[16]}});
        }

        &:has(.n-textinput-status-wrapper),
        &:has(.n-textinput-affix--suf) {
            padding-right: var(--spacing200, ${({theme:r})=>{var e;return null===(e=r.space)||void 0===e?void 0:e[16]}});
        }
    }

    & .n-textinput-affix {
        align-items: center;
        display: flex;
        text-wrap: nowrap;

        & svg {
            height: var(--size);
            width: var(--size);
        }
    }

    & .n-textinput-input {
        background: transparent;
        border: none;
        border-radius: var(--radiusMedium, ${({theme:r})=>{var e;return null===(e=r.radii)||void 0===e?void 0:e.medium}});
        box-sizing: content-box;
        color: var(--textColor);
        flex: auto;
        font: inherit;
        height: var(--size);
        outline: none;
        padding: ${({theme:r})=>{var e;return`var(--spacing150, ${null===(e=r.space)||void 0===e?void 0:e[12]}) 0`}};
        width: 100%;

        &::placeholder {
            color: var(
                --colorsForegroundSecondary,
                ${({theme:r})=>r.colors["text-global-secondary"]}
            );
        }

        &:disabled,
        &:read-only {
            --textColor: var(
                --colorsForegroundDisabled,
                ${({theme:r})=>r.colors["text-global-disabled"]}
            );

            &::placeholder {
                color: var(--textColor);
            }
        }
    }

    & .n-textinput-layout > .n-textinput-affix--pre + .n-textinput-input {
        padding-left: 0;
    }

    & .n-textinput-focus {
        background: var(--focusColor);
        bottom: 0;
        height: var(--widthMedium, ${({theme:r})=>{var e;return null===(e=r.borderWidths)||void 0===e?void 0:e.medium}});
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
    }

    & .n-textinput-status-wrapper {
        align-items: center;
        display: flex;
    }

    & .n-textinput-status-icon__rearranged {
        order: 1;
    }

    @media (forced-colors: active) {
        --focusColor: FieldText;
        --textColor: FieldText;

        background: Field;
        border: 1px solid FieldText;

        & .n-textinput-layout {
            margin: -1px;
        }

        & .n-textinput-affix,
        & svg {
            color: CanvasText;
        }

        &:disabled {
            --textColor: GrayText;

            & .n-textinput-affix,
            & svg {
                color: GrayText;
            }
        }
    }
`,m=l.forwardRef(({type:r="text",prefix:e,suffix:a,disabled:o,value:t,onChange:f=()=>{},onFocus:p=()=>{},onBlur:b=()=>{},onKeyDown:m=()=>{},onKeyUp:h=()=>{},defaultValue:y,className:$,validationStatus:w,dataAttributes:C={},readOnly:k,fullWidth:S,"aria-invalid":F,..._},M)=>{let j=!!w,B="hasError"===w,P=j||!!a,[W,D]=s.useControllableStateAsEvent({value:t,defaultValue:y,onChange:f}),E=c.parseDataAttributes(C),z=l.useCallback(r=>{D(r.target.value,r)},[D]),{handleFocus:I,handleBlur:N,handleKeyDown:T,handleKeyUp:A}=d.useEventHandlers({onFocus:p,onBlur:b,onKeyDown:m,onKeyUp:h});return u.jsx(x,{className:$,"data-textinput-full-width":S,"data-error":B,"data-disabled":o},u.jsx("div",{className:"n-textinput-layout"},!!e&&u.jsx(i.Affix,{disabled:o||k,className:"n-textinput-affix n-textinput-affix--pre"},v.getReactNode(e)),u.jsx("input",g.default({},_,E,{className:"n-textinput-input",ref:M,type:r,disabled:o,readOnly:k,value:null!=W?W:"",onChange:z,onFocus:I,onBlur:N,onKeyDown:T,onKeyUp:A,"aria-invalid":F||B,"data-textinput-has-suffix":P})),j&&u.jsx("div",{className:`n-textinput-status-wrapper ${"string"==typeof a&&"n-textinput-status-icon__rearranged"}`},u.jsx(n.InputStatusIcon,{status:w,"aria-hidden":!0})),!!a&&u.jsx(i.Affix,{disabled:o||k,className:"n-textinput-affix n-textinput-affix--suf"},v.getReactNode(a))))}),h=o.withDataTag(m,"TextInput");e.TextInput=h,e.withLegacyProps=r=>l.forwardRef(({type:e="text",placeholder:a,prefix:o,suffix:t,disabled:l,value:i,defaultValue:n,onChange:d=()=>{},onFocus:s=()=>{},onBlur:c=()=>{},onKeyDown:v=()=>{},onKeyUp:f=()=>{},className:p,validationStatus:b,...x},m)=>u.jsx(r,g.default({},x,{ref:m,onChange:r=>{d(r.target.value,r)},onFocus:r=>{s(r.target.value,r)},onBlur:r=>{c(r.target.value,r)},onKeyDown:r=>{v(r.target.value,r)},onKeyUp:r=>{f(r.target.value,r)},validationStatus:b,defaultValue:n,value:i,disabled:l,type:e,placeholder:a,className:p,prefix:o,suffix:t})))},85371:function(r,e,a){var o=a(10043);let t=o.useTheme,l=o.css,i=o.keyframes,n=o.Global;e.Global=n,e.css=l,e.keyframes=i,e.useTheme=t},99006:function(r,e,a){var o=a(27378),t=a(8732);e.useControllableStateAsEvent=function(r){let{value:e,defaultValue:a,onChange:l,shouldUpdate:i=(r,e)=>r!==e}=r,n=t.usePersistentCallback(l),d=t.usePersistentCallback(i),[s,u]=o.useState(a),c=void 0!==e,v=c?e:s,f=o.useCallback((r,e)=>{let a="function"==typeof r?r(v):r;d(v,a)&&(c||u(a),n(e))},[c,n,v,d]);return[v,f]}},68694:function(r,e,a){var o=a(27378);e.useEventHandlers=({onFocus:r=()=>{},onBlur:e=()=>{},onKeyDown:a=()=>{},onKeyUp:t=()=>{}})=>{let l=o.useCallback(e=>{r(e)},[r]);return{handleFocus:l,handleBlur:o.useCallback(r=>{e(r)},[e]),handleKeyDown:o.useCallback(r=>{a(r)},[a]),handleKeyUp:o.useCallback(r=>{t(r)},[t])}}},8732:function(r,e,a){var o=a(27378),t=o&&o.__esModule?o:{default:o};e.usePersistentCallback=(r,e=[])=>{let a=t.default.useRef(r);return t.default.useEffect(()=>{a.current=r}),t.default.useCallback((...r)=>{var e;return null===(e=a.current)||void 0===e?void 0:e.call(a,...r)},e)}}}]);
//# sourceMappingURL=56965-5703bcebef1d04f8.js.map