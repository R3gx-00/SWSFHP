!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{};e._sentryModuleMetadata=e._sentryModuleMetadata||{},e._sentryModuleMetadata[(new e.Error).stack]=function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];if(null!=t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}return e}({},e._sentryModuleMetadata[(new e.Error).stack],{"_sentryBundlerPluginAppKey:olx-real-estate-key-for-sentry":!0});var r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="bca496db-2311-4d07-88dd-d9de4c870f44",e._sentryDebugIdIdentifier="sentry-dbid-bca496db-2311-4d07-88dd-d9de4c870f44")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[10553],{10553:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=t(73119),o=t(27378),a=t(67485),i=t(54254),l=t(22022),s=t(9908),u=t(36067),d=t(92918),c=t(10043);function v(e){return e&&e.__esModule?e:{default:e}}t(70935),t(4645),t(1979),t(41723),t(65113),t(28661),t(44223),t(55778),t(96476),t(55984),t(40949),t(36051),t(9038),t(97757),t(39300),t(26138);var p=v(n),f=v(o);let g=e=>Math.max(e-1,0),b=(e,r)=>Math.min(r+1,e-1),h=i.withDataTag(function({children:e,defaultActive:r=0,controlledActive:t,showNavigationButtons:n=!1,showSlideCounter:i=!1,hideOutermostArrow:v=!1,renderCounterIcon:m=()=>null,className:w,renderNextSlideButton:O=s.NextSlideButtonDark,renderPrevSlideButton:j=s.PrevSlideButtonDark,renderSlideCounter:x=d.SlideCounterDark,renderProgressIndicator:y=l.ProgressIndicatorDark,onChange:S=()=>{}}){let[M,k]=f.default.useState(r),_=f.default.Children.count(e),$="number"==typeof t,C=f.default.useCallback(()=>{$?S(b(_,M)):k(b(_,M))},[S,$,M,_]),I=f.default.useCallback(()=>{$?S(g(M)):k(g(M))},[S,$,M]),L=v&&M===_-1,D=v&&0===M;o.useEffect(()=>{"number"==typeof t&&k(t)},[t]),o.useEffect(()=>{$||S(M)},[M,S]);let P=a.useSwipeable({onSwipedLeft:C,onSwipedRight:I,preventScrollOnSwipe:!0,trackMouse:!0});return c.jsx(u.CarouselWrapper,p.default({},P,{className:w}),c.jsx(u.Wrapper,null,c.jsx(u.CarouselContainer,{"data-testid":"carousel-container",current:M},f.default.Children.map(e,(e,r)=>c.jsx(h.Item,{key:r,role:"group","aria-label":`${r+1}/${_}`,"aria-hidden":r!==M},e)))),n&&_>1?c.jsx(f.default.Fragment,null,!D&&c.jsx(j,{"aria-label":"Previous slide",onClick:I}),!L&&c.jsx(O,{"aria-label":"Next slide",onClick:C})):null,_>1?c.jsx(y,{numberOfItems:_,activeItemIndex:M,changeItem:k}):null,i?c.jsx(x,{renderIcon:m,currentSlide:M,totalSlides:_}):null)},"Carousel");h.Item=u.Item,r.default=h,r.next=b,r.previous=g},36067:function(e,r,t){var n=t(4645),o=n&&n.__esModule?n:{default:n};let a=o.default.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
`,i=o.default.div`
    display: flex;
    transform: translateX(${e=>-(100*e.current)}%);
    transition: transform 0.4s ease;
`,l=o.default.div`
    overflow: hidden;
    width: 100%;
`,s=o.default.div`
    flex: 1 0 100%;
`;r.CarouselContainer=i,r.CarouselWrapper=a,r.Item=s,r.Wrapper=l},9908:function(e,r,t){var n=t(73119);t(27378);var o=t(96476),a=t(4645),i=t(10043),l=t(55984),s=t(97757);function u(e){return e&&e.__esModule?e:{default:e}}t(40949),t(36051),t(9038);var d=u(n),c=u(a);let v=c.default.button`
    background: none;
    border: none;
    bottom: 0;
    margin: 0;
    padding: ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[4]}};
    position: absolute;
    top: 0;
    ${o.left};
    ${o.right};
`,p=c.default(e=>i.jsx(v,d.default({type:"button"},e,{right:0}),i.jsx(l.default,{color:"inherit"})))`
    color: var(
        --colorsForegroundActionPrimary,
        ${({theme:e})=>e.colors["text-global-primary"]}
    );
`,f=c.default(e=>i.jsx(v,d.default({type:"button"},e,{left:0}),i.jsx(s.default,{color:"inherit"})))`
    color: var(
        --colorsForegroundActionPrimary,
        ${({theme:e})=>e.colors["text-global-primary"]}
    );
`,g=c.default(f)`
    color: var(
        --colorsForegroundOnInverse,
        ${({theme:e})=>e.colors["text-global-inverse"]}
    );
`,b=c.default(p)`
    color: var(
        --colorsForegroundOnInverse,
        ${({theme:e})=>e.colors["text-global-inverse"]}
    );
`;r.NextSlideButtonDark=p,r.NextSlideButtonLight=b,r.PrevSlideButtonDark=f,r.PrevSlideButtonLight=g},22022:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=t(73119);t(27378);var o=t(70935),a=t(10043);t(4645),t(1979),t(54254),t(41723),t(65113),t(28661),t(44223),t(55778);var i=n&&n.__esModule?n:{default:n};let l=({numberOfItems:e,activeItemIndex:r,changeItem:t,indicatorComponent:n,ariaLabelPrefix:i})=>a.jsx(o.ProgressIndicatorWrapper,null,[...Array(e)].map((e,o)=>a.jsx("li",{"data-testid":`indicator-${o}`,key:o,"aria-current":r===o},a.jsx(n,{"data-active":r===o,onClick:()=>t(o),"aria-label":`${i?`${i} `:""}${o+1}`})))),s=e=>a.jsx(l,i.default({indicatorComponent:o.IndicatorDark},e));r.ProgressIndicatorDark=s,r.ProgressIndicatorLight=e=>a.jsx(l,i.default({indicatorComponent:o.IndicatorLight},e)),r.default=s},70935:function(e,r,t){var n=t(4645),o=t(1979);t(54254),t(73119),t(27378),t(10043),t(41723),t(65113),t(28661),t(44223),t(55778);var a=n&&n.__esModule?n:{default:n};let i=a.default.ol`
    align-items: center;
    display: flex;
    list-style-type: none;
    margin-top: ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[32]}};
    padding: 0;
`,l=a.default(o.UnstyledButton)`
    --activeColor: var(
        --colorsBorderStrong,
        ${({theme:e})=>e.colors["borders-global-primary"]}
    );
    --borderColor: var(
        --colorsBorderMedium,
        ${({theme:e})=>e.colors["borders-global-secondary"]}
    );

    border-color: var(--borderColor);
    border-radius: var(--radiusLarge, ${({theme:e})=>{var r;return null===(r=e.radii)||void 0===r?void 0:r.large}});
    border-style: solid;
    border-width: var(--widthSmall, ${({theme:e})=>{var r;return null===(r=e.borderWidths)||void 0===r?void 0:r.small}});
    box-sizing: unset;
    cursor: pointer;
    display: inline-block;
    height: var(--spacing100, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[8]}});
    margin: 0 var(--spacing50, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[4]}})
        var(--spacing200, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[16]}});
    width: var(--spacing100, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[8]}});

    &[data-active='true'] {
        border-color: var(--activeColor);
        box-shadow: inset 0 0 0 3px var(--activeColor);
    }
`,s=a.default(l)`
    --activeColor: var(
        --colorsBorderInverse,
        ${({theme:e})=>e.colors["borders-global-inverse"]}
    );
    --borderColor: var(
        --colorsBorderSubtle,
        ${({theme:e})=>e.colors["borders-global-inverse"]}
    );
`;r.IndicatorDark=l,r.IndicatorLight=s,r.ProgressIndicatorWrapper=i},92918:function(e,r,t){t(27378);var n=t(4645),o=t(10043),a=t(39300);t(73119),t(26138),t(36051),t(96476);var i=n&&n.__esModule?n:{default:n};let l=i.default.div`
    align-items: center;
    border-radius: var(--radiusLarge, ${({theme:e})=>{var r;return null===(r=e.radii)||void 0===r?void 0:r.large}});
    bottom: var(--spacing100, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[8]}});
    display: flex;
    flex-flow: row nowrap;
    padding: var(--spacing50, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[4]}})
        var(--spacing100, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[8]}});
    position: absolute;
    right: var(--spacing100, ${({theme:e})=>{var r;return null===(r=e.space)||void 0===r?void 0:r[8]}});
`,s=({currentSlide:e,totalSlides:r,renderIcon:t,...n})=>o.jsx(l,n,t({size:"icon-small",color:"inherit",mr:8}),o.jsx(a.Paragraph6,{color:"inherit"},e+1," / ",r)),u=i.default(s)`
    background: var(
        --colorsBackgroundInverse,
        ${({theme:e})=>e.colors["background-brand-primary"]}
    );
    color: var(
        --colorsForegroundOnInverse,
        ${({theme:e})=>e.colors["text-global-inverse"]}
    );
`,d=i.default(s)`
    background: var(
        --colorsBackgroundPrimary,
        ${({theme:e})=>e.colors["background-global-primary"]}
    );
    color: var(
        --colorsForegroundOnPrimary,
        ${({theme:e})=>e.colors["text-global-primary"]}
    );
`;r.SlideCounterDark=u,r.SlideCounterLight=d},97757:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=t(73119);t(27378);var o=t(40949),a=t(10043);t(36051),t(96476),t(4645),t(9038);var i=n&&n.__esModule?n:{default:n};let l=o.withIconProps(e=>a.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"m15.547 2-1.305 1.27L6 11.293v1.414l8.242 8.022L15.547 22H17v-1.414l-1.305-1.271L8.18 12l7.515-7.316L17 3.414V2z"})));r.default=l},55984:function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=t(73119);t(27378);var o=t(40949),a=t(10043);t(36051),t(96476),t(4645),t(9038);var i=n&&n.__esModule?n:{default:n};let l=o.withIconProps(e=>a.jsx("svg",i.default({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em"},e),a.jsx("path",{fill:"currentColor",fillRule:"evenodd",d:"M7 2v1.414l1.271 1.27L15.586 12l-7.315 7.315L7 20.585V22h1.414l1.27-1.271L17 13.414l1-1v-.827l-3.942-3.942v-.001L9.686 3.271 8.413 2z"})));r.default=l},67485:function(e,r,t){t.r(r),t.d(r,{DOWN:function(){return l},LEFT:function(){return o},RIGHT:function(){return a},UP:function(){return i},useSwipeable:function(){return p}});var n=t(27378);let o="Left",a="Right",i="Up",l="Down",s={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},u={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},d="mousemove",c="mouseup";function v(e,r){if(0===r)return e;let t=Math.PI/180*r;return[e[0]*Math.cos(t)+e[1]*Math.sin(t),e[1]*Math.cos(t)-e[0]*Math.sin(t)]}function p(e){var r,t,p;let f;let{trackMouse:g}=e,b=n.useRef(Object.assign({},u)),h=n.useRef(Object.assign({},s)),m=n.useRef(Object.assign({},h.current));for(f in m.current=Object.assign({},h.current),h.current=Object.assign(Object.assign({},s),e),s)void 0===h.current[f]&&(h.current[f]=s[f]);let[w,O]=n.useMemo(()=>(function(e,r){let t=r=>{let t="touches"in r;t&&r.touches.length>1||e((e,o)=>{o.trackMouse&&!t&&(document.addEventListener(d,n),document.addEventListener(c,g));let{clientX:a,clientY:i}=t?r.touches[0]:r,l=v([a,i],o.rotationAngle);return o.onTouchStartOrOnMouseDown&&o.onTouchStartOrOnMouseDown({event:r}),Object.assign(Object.assign(Object.assign({},e),u),{initial:l.slice(),xy:l,start:r.timeStamp||0})})},n=r=>{e((e,t)=>{let n="touches"in r;if(n&&r.touches.length>1)return e;if(r.timeStamp-e.start>t.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;let{clientX:u,clientY:d}=n?r.touches[0]:r,[c,p]=v([u,d],t.rotationAngle),f=c-e.xy[0],g=p-e.xy[1],b=Math.abs(f),h=Math.abs(g),m=(r.timeStamp||0)-e.start,w=b>h?f>0?a:o:g>0?l:i,O="number"==typeof t.delta?t.delta:t.delta[w.toLowerCase()]||s.delta;if(b<O&&h<O&&!e.swiping)return e;let j={absX:b,absY:h,deltaX:f,deltaY:g,dir:w,event:r,first:e.first,initial:e.initial,velocity:Math.sqrt(b*b+h*h)/(m||1),vxvy:[f/(m||1),g/(m||1)]};j.first&&t.onSwipeStart&&t.onSwipeStart(j),t.onSwiping&&t.onSwiping(j);let x=!1;return(t.onSwiping||t.onSwiped||t[`onSwiped${w}`])&&(x=!0),x&&t.preventScrollOnSwipe&&t.trackTouch&&r.cancelable&&r.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:j,swiping:!0})})},p=r=>{e((e,t)=>{let n;if(e.swiping&&e.eventData){if(r.timeStamp-e.start<t.swipeDuration){n=Object.assign(Object.assign({},e.eventData),{event:r}),t.onSwiped&&t.onSwiped(n);let o=t[`onSwiped${n.dir}`];o&&o(n)}}else t.onTap&&t.onTap({event:r});return t.onTouchEndOrOnMouseUp&&t.onTouchEndOrOnMouseUp({event:r}),Object.assign(Object.assign(Object.assign({},e),u),{eventData:n})})},f=()=>{document.removeEventListener(d,n),document.removeEventListener(c,g)},g=e=>{f(),p(e)},b=(e,r)=>{let o=()=>{};if(e&&e.addEventListener){let a=Object.assign(Object.assign({},s.touchEventOptions),r.touchEventOptions),i=[["touchstart",t,a],["touchmove",n,Object.assign(Object.assign({},a),r.preventScrollOnSwipe?{passive:!1}:{})],["touchend",p,a]];i.forEach(([r,t,n])=>e.addEventListener(r,t,n)),o=()=>i.forEach(([r,t])=>e.removeEventListener(r,t))}return o},h={ref:r=>{null!==r&&e((e,t)=>{if(e.el===r)return e;let n={};return e.el&&e.el!==r&&e.cleanUpTouch&&(e.cleanUpTouch(),n.cleanUpTouch=void 0),t.trackTouch&&r&&(n.cleanUpTouch=b(r,t)),Object.assign(Object.assign(Object.assign({},e),{el:r}),n)})}};return r.trackMouse&&(h.onMouseDown=t),[h,b]})(e=>b.current=e(b.current,h.current),{trackMouse:g}),[g]);return b.current=(r=b.current,t=h.current,p=m.current,t.trackTouch&&r.el?r.cleanUpTouch?t.preventScrollOnSwipe!==p.preventScrollOnSwipe||t.touchEventOptions.passive!==p.touchEventOptions.passive?(r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:O(r.el,t)})):r:Object.assign(Object.assign({},r),{cleanUpTouch:O(r.el,t)}):(r.cleanUpTouch&&r.cleanUpTouch(),Object.assign(Object.assign({},r),{cleanUpTouch:void 0}))),w}}}]);
//# sourceMappingURL=10553-d735257b70dfe3dc.js.map