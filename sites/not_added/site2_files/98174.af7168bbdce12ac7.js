!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];if(null!=t)for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:olx-real-estate-key-for-sentry":!0});var r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="b829692e-0c8a-47c6-90fb-f5e3d217ec18",e._sentryDebugIdIdentifier="sentry-dbid-b829692e-0c8a-47c6-90fb-f5e3d217ec18")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[98174],{44062:function(e,r,t){var a=t(73119);t(27378);var o=t(41723),i=t(4645),n=t(85371),l=t(10043);function s(e){return e&&e.__esModule?e:{default:e}}var d=s(a),c=s(i);let u=c.default.div`
    --base: 12;
    --gap: ${16}px;
    --containerWidth: ${({containerWidth:e})=>e};

    margin: auto;
    max-width: 100%;
    width: var(--containerWidth);
`,p=c.default.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    /* gap variable is taken from Container */
    gap: var(--gap);
`,f=e=>"fluid"===e&&n.css`
        flex-grow: 1;
    `,g=c.default.div`
    --totalGaps: calc(var(--gap) * (var(--base) - 1));
    --includedGaps: calc(var(--gap) * (var(--span) - 1));
    --singleWidth: calc((var(--containerWidth) - var(--totalGaps)) / var(--base));
    --totalWidth: calc(var(--singleWidth) * var(--span) + var(--includedGaps));
    --offsetWidth: calc(var(--singleWidth) * var(--offset) + var(--gap) * var(--offset));

    flex: var(--span);
    margin-left: var(--offsetWidth);
    max-width: var(--totalWidth);

    ${({theme:e})=>{var r;return`@media ${null===(r=e.mediaQueries)||void 0===r?void 0:r.xsMin}`}} {
        --offset: ${({offsetXS:e})=>e};
        --span: ${({xs:e=1})=>e};

        ${({xs:e})=>f(e)};
    }

    ${({theme:e})=>{var r;return`@media ${null===(r=e.mediaQueries)||void 0===r?void 0:r.smMin}`}} {
        --offset: ${({offsetSM:e})=>e};
        --span: ${({sm:e})=>e};

        ${({sm:e})=>f(e)}
    }

    ${({theme:e})=>{var r;return`@media ${null===(r=e.mediaQueries)||void 0===r?void 0:r.mdMin}`}} {
        --offset: ${({offsetMD:e})=>e};
        --span: ${({md:e})=>e};
        ${({sm:e})=>f(e)}
    }

    ${({theme:e})=>{var r;return`@media ${null===(r=e.mediaQueries)||void 0===r?void 0:r.lgMin}`}} {
        --offset: ${({offsetLG:e})=>e};
        --span: ${({lg:e})=>e};
        ${({sm:e})=>f(e)}
    }

    ${({theme:e})=>{var r;return`@media ${null===(r=e.mediaQueries)||void 0===r?void 0:r.xlMin}`}} {
        --offset: ${({offsetXL:e})=>e};
        --span: ${({xl:e})=>e};
        ${({sm:e})=>f(e)}
    }
`;c.default.div`
    align-items: center;
    background: var(
        --colorsBackgroundActionPrimary,
        ${({theme:e})=>e.colors["background-brand-primary"]}
    );
    border-radius: 4px;
    color: var(
        --colorsForegroundOnInverse,
        ${({theme:e})=>e.colors["text-global-inverse"]}
    );
    display: flex;
    flex-direction: column;
    height: 64px;
    justify-content: center;
    width: 100%;
`,r.Col=g,r.Container=u,r.Row=({className:e,children:r,as:t="div",dataAttributes:a={},innerRef:i,...n})=>l.jsx(p,d.default({},n,o.parseDataAttributes(a),{ref:i,as:t,className:e}),r)},25181:function(e,r,t){var a,o,i,n,l,s,d=t(54254),c=t(73119),u=t(27378),p=t(41723),f=t(4645),g=t(10043),v=t(99317);function m(e){return e&&e.__esModule?e:{default:e}}t(65113),t(28661),t(44223),t(55778),t(40949),t(36051),t(96476),t(9038);var h=m(c),y=m(u),b=m(f);(a=n||(n={})).primary="primary",a["primary-outlined"]="primary-outlined",a.secondary="secondary",a["secondary-outlined"]="secondary-outlined";let x=(e,r)=>({[n.primary]:`var(--colorsBackgroundPrimary, ${e.colors["background-global-primary"]})`,[n["primary-outlined"]]:`var(--colorsBackgroundPrimary, ${e.colors["background-global-primary"]})`,[n.secondary]:`var(--colorsBackgroundSecondary, ${e.colors["background-global-secondary"]})`,[n["secondary-outlined"]]:`var(--colorsBackgroundSecondary, ${e.colors["background-global-secondary"]})`})[r],k=(e,r)=>({[n.primary]:"none",[n["primary-outlined"]]:`1px solid var(--colorsBorderSubtle, ${e.colors["borders-global-tertiary"]})}`,[n.secondary]:"none",[n["secondary-outlined"]]:`1px solid var(--colorsBorderSubtle, ${e.colors["borders-global-tertiary"]})`})[r],w=b.default.div`
    --borderRadius: var(--radiusMedium, ${({theme:e})=>{var r;return null===(r=e.radii)||void 0===r?void 0:r.medium}});
    --spacing: var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[16]}});

    background: ${({theme:e,variant:r})=>x(e,r)};
    border: ${({theme:e,variant:r})=>k(e,r)};
    border-radius: var(--borderRadius);
    box-sizing: border-box;
    margin: var(--borderRadius);
    width: 320px;
`,$=b.default.button`
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
`,S=b.default.span`
    margin-left: auto;

    & svg {
        transition: transform 0.2s ease;
    }

    &[data-isopen='true'] svg {
        transform: rotate(180deg);
    }
`,_=b.default.div`
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
`,M=b.default.span`
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
`,T=b.default.div`
    color: var(
        --colorsForegroundPrimary,
        ${({theme:e})=>e.colors["text-global-primary"]}
    );
    font-size: var(--fontSizeBodyBase, ${({theme:e})=>{var r;return null===(r=e.fontSizes)||void 0===r?void 0:r[16]}});
    font-weight: var(--fontWeightRegular, ${({theme:e})=>{var r;return null===(r=e.fontWeights)||void 0===r?void 0:r.regular}});
    line-height: var(--lineHeightRegular, ${({theme:e})=>{var r;return null===(r=e.lineHeights)||void 0===r?void 0:r[20]}});
`,L=(e,r)=>"function"==typeof e?g.jsx(e,null):g.jsx(r,null,e),P=({id:e,header:r,content:t,onToggle:a,isOpen:o=!1,onItemOpen:i,onItemCollapse:n})=>{let l=L(r,M),s=L(t,T);return g.jsx(y.default.Fragment,null,g.jsx($,{onClick:()=>{a(e),o?n(e):i(e)},"aria-expanded":o,type:"button"},g.jsx("span",{className:"n-accordionitem-header__content"},l,g.jsx(S,{"data-isopen":o},g.jsx(v.default,null)))),g.jsx(_,{"data-isopen":o,"aria-hidden":!o,className:"n-accordionitem-content"},g.jsx("div",{className:"n-accordionitem-content__inner"},s)))};(o=l||(l={})).TOGGLE_UNIQUE="TOGGLE_UNIQUE",o.TOGGLE_MULTIPLE="TOGGLE_MULTIPLE",(i=s||(s={})).unique="unique",i.multiple="multiple";let R=(e,r)=>{switch(r.type){case l.TOGGLE_MULTIPLE:return e.includes(r.id)?e.filter(e=>e!==r.id):[...e,r.id];case l.TOGGLE_UNIQUE:return e.includes(r.id)?e.filter(e=>e!==r.id):[r.id];default:return e}},C=(e,r)=>{let[t,a]=u.useReducer(R,e),o=u.useCallback(e=>{a({type:l.TOGGLE_MULTIPLE,id:e})},[a]);return{toggle:({unique:u.useCallback(e=>{a({type:l.TOGGLE_UNIQUE,id:e})},[a]),multiple:o})[r],openItems:t,isOpen:e=>t.includes(e)}},A=d.withDataTag(({className:e,content:r,openBehavior:t="unique",onItemOpen:a=()=>{},onItemCollapse:o=()=>{},variant:i="primary",dataAttributes:n={},innerRef:l,...s})=>{let{toggle:d,isOpen:c}=C(r.filter(e=>!!e.isOpen&&e.id).map(e=>e.id),t);return g.jsx(w,h.default({},s,p.parseDataAttributes(n),{ref:l,className:e,variant:i}),r.map(({id:e,header:r,content:t})=>g.jsx(P,{isOpen:c(e),onToggle:d,onItemOpen:a,onItemCollapse:o,key:e,id:e,header:r,content:t})))},"Accordion");r.UQ=A,r.vF=({children:e,className:r,dataAttributes:t={},innerRef:a,...o})=>g.jsx(T,h.default({},o,p.parseDataAttributes(t),{ref:a,className:r}),e),r._m=({children:e,className:r,dataAttributes:t={},innerRef:a,...o})=>g.jsx(M,h.default({},o,p.parseDataAttributes(t),{ref:a,className:r}),e)},99317:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var a=t(73119);t(27378);var o=t(40949),i=t(10043);t(36051),t(96476),t(4645),t(9038);var n=a&&a.__esModule?a:{default:a};let l=o.withIconProps(e=>i.jsx("svg",n.default({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),i.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M2.001 6.5h1.414l1.27 1.271 7.316 7.315 7.315-7.315L20.587 6.5h1.414v1.414l-1.27 1.27-7.316 7.316-1 1h-.827l-3.942-3.942-4.374-4.374-1.27-1.27z"})));r.default=l},40949:function(e,r,t){var a=t(73119);t(27378);var o=t(36051),i=t(96476),n=t(4645),l=t(9038),s=t(10043);function d(e){return e&&e.__esModule?e:{default:e}}var c=d(a),u=d(o),p=d(n);r.withIconProps=e=>{let r=p.default(e,{shouldForwardProp:u.default})`
        height: ${({size:e})=>l.getSize(e)};
        width: ${({size:e})=>l.getSize(e)};
        ${i.margin};
        ${i.color};
    `;return({children:e,size:t="icon-medium",color:a="icon-global-primary",...o})=>s.jsx(r,c.default({color:a,size:t},o),e)}},23978:function(e,r,t){var a=t(73119),o=t(41723),i=t(44062),n=t(10043);t(27378),t(65113),t(28661),t(44223),t(55778),t(4645),t(85371);var l=a&&a.__esModule?a:{default:a};let s=e=>"fluid"===e?"100%":void 0!==e?`${e}px`:e;r.X2=i.Row,r.JX=({as:e="div",children:r,className:t,xs:a,sm:s,md:d,lg:c,xl:u,offsetXS:p,offsetSM:f,offsetMD:g,offsetLG:v,offsetXL:m,dataAttributes:h={},innerRef:y,...b})=>n.jsx(i.Col,l.default({},b,o.parseDataAttributes(h),{ref:y,as:e,xs:a,sm:s,md:d,lg:c,xl:u,offsetXS:p,offsetSM:f,offsetMD:g,offsetLG:v,offsetXL:m,className:t}),r),r.W2=({containerWidth:e=1280,className:r,as:t="div",children:a,dataAttributes:d={},innerRef:c,...u})=>{let p=s(e);return n.jsx(i.Container,l.default({},u,o.parseDataAttributes(d),{ref:c,containerWidth:p,as:t,className:r}),a)}},9038:function(e,r){r.getSize=function(e){if(e){if("string"==typeof e&&["0","50","100","150","200","300","500","800","1200"].includes(e))return`var(--spacing${e})`;if("number"==typeof e)return`${e}px`;switch(e){case"icon-small":return"16px";case"icon-medium":return"24px";case"icon-large":return"32px";case"icon-xLarge":return"40px";case"icon-xxLarge":return"48px";default:return e}}}},85371:function(e,r,t){var a=t(10043);let o=a.useTheme,i=a.css,n=a.keyframes,l=a.Global;r.Global=l,r.css=i,r.keyframes=n,r.useTheme=o},36051:function(e,r,t){t.r(r),t.d(r,{createShouldForwardProp:function(){return c},default:function(){return u},props:function(){return d}});var a,o,i=function(e){var r=Object.create(null);return function(t){return void 0===r[t]&&(r[t]=e(t)),r[t]}},n=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,l=(a=function(e){return n.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&91>e.charCodeAt(2)},o={},function(e){return void 0===o[e]&&(o[e]=a(e)),o[e]}),s=t(96476),d=(0,s.compose)(s.space,s.typography,s.color,s.layout,s.flexbox,s.border,s.background,s.position,s.grid,s.shadow,s.buttonStyle,s.textStyle,s.colorStyle).propNames,c=function(e){var r=RegExp("^("+e.join("|")+")$");return i(function(e){return l(e)&&!r.test(e)})},u=c(d)}}]);
//# sourceMappingURL=98174.af7168bbdce12ac7.js.map