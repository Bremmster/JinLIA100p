define("organization-view-wrapper/components/-private/button-bar",["exports","@ember/template-factory","@ember/component","organization-view-wrapper/components/-private/button","@glimmer/component","@ember/debug"],(function(e,t,n,o,a,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const i=Object.freeze({START:"org-view-button-bar--align-start",CENTER:"org-view-button-bar--align-center",END:"org-view-button-bar--align-end"})
class l extends a.default{get alignClass(){const e=this.args.align??"START"
return i[e]}}e.default=l;(0,n.setComponentTemplate)((0,t.createTemplateFactory)({id:"V2jwiAx/",block:'[[[1,"\\n    "],[11,0],[16,0,[29,["org-view-button-bar ",[30,0,["alignClass"]]]]],[17,1],[12],[1,"\\n"],[1,"      "],[18,2,[[32,0]]],[1,"\\n"],[1,"    "],[13],[1,"\\n  "]],["&attrs","&default"],false,["yield"]]',moduleName:"organization-view-wrapper/components/-private/button-bar.gts",scope:()=>[o.default],isStrictMode:!0}),l)}))
define("organization-view-wrapper/components/-private/button",["exports","@ember/template-factory","@ember/helper","@babel/runtime/helpers/esm/classPrivateFieldGet","@ember/component","artdeco-button/components/artdeco-button","@glimmer/component","@ember/debug","organization-view-wrapper/components/action-container","hue-web-icons/components/icon","@ember/modifier","global-helpers/helpers/noop"],(function(e,t,n,o,a,r,i,l,s,c,u,p){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
const d=Object.freeze({PRIMARY:"primary",SECONDARY:"secondary",SECONDARY_MUTED:"secondary",TERTIARY:"tertiary",TERTIARY_MUTED:"tertiary"}),m=Object.freeze({HUG:void 0,STRETCH:"full",FLUID:"fluid"}),f=Object.freeze({primary:"artdeco-button--primary",secondary:"artdeco-button--secondary",tertiary:"artdeco-button--tertiary"}),b=Object.freeze({1:"artdeco-button--1",2:"artdeco-button--2",3:"artdeco-button--3",4:"artdeco-button--4"}),g=Object.freeze({full:"artdeco-button--full",fluid:"artdeco-button--fluid"})
var h=new WeakMap
class v extends i.default{constructor(){super(...arguments)
h.set(this,{get:w,set:void 0})}get actionModel(){var e
const t=(0,o.default)(this,h).action,n=null===(e=this.args.actionsMap)||void 0===e?void 0:e[t]
return n}get buttonClasses(){const e=["artdeco-button"]
e.push(f[this.category],b[this.size])
this.isCircle&&e.push("artdeco-button--circle")
"muted"===this.color&&e.push("artdeco-button--muted")
this.iconRight&&e.push("artdeco-button--icon-right")
this.stretch&&e.push(g[this.stretch]);(0,o.default)(this,h).disabled&&e.push("org-button--disabled","artdeco-button--disabled")
return e.join(" ")}get category(){const{category:e}=(0,o.default)(this,h)
return d[e??"PRIMARY"]}get color(){var e
return null!==(e=(0,o.default)(this,h).category)&&void 0!==e&&e.endsWith("_MUTED")?"muted":"default"}get iconRight(){return!!(0,o.default)(this,h).iconAfterText}get iconSize(){return this.isCircle&&1===this.size||!this.isCircle&&this.size<4?"small":"medium"}get isCircle(){return void 0===(0,o.default)(this,h).text}get size(){var e
return"small"===((null===(e=(0,o.default)(this,h).size)||void 0===e?void 0:e.toLowerCase())??"medium")?this.isCircle?1:2:this.isCircle?3:4}get stretch(){const{width:e}=(0,o.default)(this,h)
if(!this.isCircle&&e)return m[e]}get text(){const{text:e,accessibilityText:t}=(0,o.default)(this,h)
return e||t}}e.default=v
function w(){return this.args.model}(0,a.setComponentTemplate)((0,t.createTemplateFactory)({id:"iXzSYqyq",block:'[[[1,"\\n"],[41,[30,0,["actionModel"]],[[[1,"      "],[8,[32,0],[[16,0,[30,0,["buttonClasses"]]]],[["@actionType","@actionData","@a11yText","@controlName","@disabled"],[[30,0,["actionModel","actionType"]],[30,0,["actionModel","actionData"]],[30,1,["accessibilityText"]],[30,0,["actionModel","controlName"]],[30,1,["disabled"]]]],[["default"],[[[[1,"\\n"],[41,[30,2,["isInteractive"]],[[[41,[30,1,["icon"]],[[[1,"            "],[8,[32,1],[[24,0,"artdeco-button__icon"]],[["@name","@size","@type"],[[30,1,["icon"]],[30,0,["iconSize"]],"system"]],null],[1,"\\n"]],[]],null],[1,"          "],[10,1],[14,0,"artdeco-button__text"],[12],[1,"\\n            "],[1,[30,0,["text"]]],[1,"\\n          "],[13],[1,"\\n"]],[]],[[[1,"          "],[8,[32,2],[[24,0,"org-view-button"],[4,[32,3],["click",[52,[30,2,["handleAction"]],[30,2,["handleAction"]],[28,[32,4],null,null]]],null]],[["@aria-label","@circle","@color","@disabled","@icon","@iconRight","@size","@stretch","@text","@type"],[[30,1,["accessibilityText"]],[30,0,["isCircle"]],[30,0,["color"]],[30,1,["disabled"]],[30,1,["icon"]],[30,0,["iconRight"]],[30,0,["size"]],[30,0,["stretch"]],[30,0,["text"]],[30,0,["category"]]]],null],[1,"\\n"]],[]]],[1,"      "]],[2]]]]],[1,"\\n"]],[]],null],[1,"  "]],["@model","actionProps"],false,["if"]]',moduleName:"organization-view-wrapper/components/-private/button.gts",scope:()=>[s.default,c.default,r.default,u.on,p.default],isStrictMode:!0}),v)}))
define("organization-view-wrapper/components/-private/navigation",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/classPrivateFieldGet","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","@glimmer/component","@ember/object","@ember/helper","@ember/debug","@ember/modifier","@ember/service","global-utils/utils/url","organization-view-wrapper/utils/constants"],(function(e,t,n,o,a,r,i,l,s,c,u,p,d,m,f,b){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var g,h,v,w,y,_
let M=(0,l.setComponentTemplate)((0,i.createTemplateFactory)({id:"ZLAqtAjg",block:'[[[1,"\\n    "],[11,3],[16,"aria-label",[30,1]],[16,6,[30,0,["url"]]],[16,"target",[52,[30,0,["openExternally"]],"_blank","_self"]],[16,"rel",[52,[30,0,["openExternally"]],"noopener noreferrer"]],[17,2],[4,[32,0],["click",[30,0,["onClick"]]],null],[12],[1,"\\n      "],[18,3,[[28,[32,1],null,[["isInteractive"],[true]]]]],[1,"\\n    "],[13],[1,"\\n  "]],["@a11yText","&attrs","&default"],false,["if","yield"]]',moduleName:"organization-view-wrapper/components/-private/navigation.gts",scope:()=>[d.on,u.hash],isStrictMode:!0}),(g=(0,m.inject)("router"),h=(0,m.inject)("tracking"),v=(_=new WeakMap,class extends s.default{constructor(){super(...arguments)
_.set(this,{get:T,set:void 0});(0,t.default)(this,"router",w,this);(0,t.default)(this,"tracking",y,this)}get currentUrl(){return`${(0,f.getDomainUrl)()}${this.router.currentURL}`.split("?").shift()??"/"}get url(){var e,t
let n
null!==(e=(0,o.default)(this,_).urlV2)&&void 0!==e&&e.absoluteUrl&&(n=(0,o.default)(this,_).urlV2.absoluteUrl)
if(null!==(t=(0,o.default)(this,_).urlV2)&&void 0!==t&&t.queryParams){const e=(0,f.parseQueryString)((0,o.default)(this,_).urlV2.queryParams)
e&&(n=(0,f.addQueryParams)(this.currentUrl,e))}return n}get openExternally(){return!!(0,o.default)(this,_).navigationActionContext&&(0,o.default)(this,_).navigationActionContext===b.ORGANIZATION_NAVIGATION_ACTION_CONTEXT.OPENS_IN_NEW_TAB}onClick(e){if(this.args.disabled)e.preventDefault()
else{if(!this.openExternally){const t=(0,f.getInAppParams)(this.router,this.url)
if(t){e.preventDefault()
this.router.transitionTo(t)}else"#"===this.url&&e.preventDefault()}this.args.controlName&&this.tracking.fireInteractionEvent(this.args.controlName)}}}),w=(0,a.default)(v.prototype,"router",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=(0,a.default)(v.prototype,"tracking",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,a.default)(v.prototype,"onClick",[c.action],Object.getOwnPropertyDescriptor(v.prototype,"onClick"),v.prototype),v))
e.default=M
function T(){return this.args.actionData}}))
define("organization-view-wrapper/components/action-container",["exports","@ember/template-factory","@ember/component/template-only","@ember/component","@ember/debug","organization-view-wrapper/utils/action-types"],(function(e,t,n,o,a,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
function i(e){return r.ACTION_TYPE_TO_COMPONENT_MAP[e]}var l=(0,o.setComponentTemplate)((0,t.createTemplateFactory)({id:"3ZHBxzV+",block:'[[[1,"\\n"],[44,[[28,[32,0],[[30,1]],null]],[[[1,"    "],[8,[30,2],[[16,"aria-disabled",[30,3]],[17,4]],[["@actionData","@a11yText","@controlName","@disabled"],[[30,5],[30,6],[30,7],[30,3]]],[["default"],[[[[1,"\\n      "],[18,9,[[30,8]]],[1,"\\n    "]],[8]]]]],[1,"\\n"]],[2]]]],["@actionType","ActionComponent","@disabled","&attrs","@actionData","@a11yText","@controlName","actionProps","&default"],false,["let","yield"]]',moduleName:"organization-view-wrapper/components/action-container.gts",scope:()=>[i],isStrictMode:!0}),(0,n.default)("action-container","ActionContainer"))
e.default=l}))
define("organization-view-wrapper/components/button-bar-view-model",["exports","@ember/template-factory","@ember/component/template-only","@ember/component","organization-view-wrapper/components/-private/button-bar"],(function(e,t,n,o,a){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var r=(0,o.setComponentTemplate)((0,t.createTemplateFactory)({id:"l5kG1cL8",block:'[[[1,"\\n    "],[8,[32,0],[[17,1]],[["@align"],[[30,2,["align"]]]],[["default"],[[[[1,"\\n"],[42,[28,[31,1],[[28,[31,1],[[30,2,["buttons"]]],null]],null],null,[[[1,"        "],[8,[30,3],null,[["@model","@actionsMap"],[[30,4],[30,5]]],null],[1,"\\n"]],[4]],null],[1,"    "]],[3]]]]],[1,"\\n  "]],["&attrs","@model","Button","button","@actionsMap"],false,["each","-track-array"]]',moduleName:"organization-view-wrapper/components/button-bar-view-model.gts",scope:()=>[a.default],isStrictMode:!0}),(0,n.default)("button-bar-view-model","buttonBarViewModelTemplate"))
e.default=r}))
define("organization-view-wrapper/components/header-view-model",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/classPrivateFieldGet","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","@glimmer/component","@ember/debug","@ember/service","organization-view-wrapper/components/button-bar-view-model","ember-element-helper/helpers/element","text-view-model/components/text-view-model-v2"],(function(e,t,n,o,a,r,i,l,s,c,u,p,d,m){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var f,b,g,h,v,w
const y=Object.freeze({SMALL:"pt1",MEDIUM:"pt1",LARGE:"pt2"}),_=Object.freeze({1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"}),M=Object.freeze({SMALL:"text-heading-medium",MEDIUM:"text-heading-large",LARGE:"text-heading-xlarge"}),T=Object.freeze({MEDIUM:"mt1",LARGE:"mt2"}),C=Object.freeze({XSMALL:"text-body-xsmall",SMALL:"text-body-small"})
let O=(0,l.setComponentTemplate)((0,i.createTemplateFactory)({id:"Rw0FRMfX",block:'[[[1,"\\n"],[1,"    "],[11,0],[24,0,"org-view-header"],[17,1],[12],[1,"\\n      "],[10,0],[14,0,"org-view-header__container"],[12],[1,"\\n"],[41,[30,2,["backAction"]],[[[1,"          "],[8,[32,0],[[24,0,"org-view-header__back-action"]],[["@model","@actionsMap"],[[30,0,["backActionModel"]],[30,3]]],null],[1,"\\n"]],[]],null],[1,"\\n        "],[10,0],[15,0,[30,0,["headingContainerClass"]]],[12],[1,"\\n"],[44,[[28,[32,1],[[30,0,["tagName"]]],null]],[[[1,"            "],[8,[30,4],[[16,0,[30,0,["headingClass"]]]],null,[["default"],[[[[1,"\\n\\n              "],[8,[32,2],null,[["@tvm"],[[30,2,["heading"]]]],null],[1,"\\n            "]],[]]]]],[1,"\\n"]],[4]]],[1,"\\n"],[41,[30,2,["subheading"]],[[[1,"            "],[10,2],[15,0,[30,0,["subheadingClasses"]]],[12],[1,"\\n              "],[8,[32,2],null,[["@tvm"],[[30,2,["subheading"]]]],null],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n\\n"],[41,[30,2,["moreInfoAction"]],[[[1,"          "],[8,[32,0],[[16,0,[30,0,["moreInfoActionClasses"]]]],[["@model","@actionsMap"],[[30,0,["moreInfoActionModel"]],[30,3]]],null],[1,"\\n"]],[]],null],[1,"      "],[13],[1,"\\n\\n"],[41,[30,2,["actions"]],[[[1,"        "],[8,[32,0],[[24,0,"org-view-header__actions"]],[["@model","@actionsMap"],[[30,2,["actions"]],[30,3]]],null],[1,"\\n"]],[]],null],[1,"    "],[13],[1,"\\n  "]],["&attrs","@model","@actionsMap","Tag"],false,["if","let"]]',moduleName:"organization-view-wrapper/components/header-view-model.gts",scope:()=>[p.default,d.default,m.default],isStrictMode:!0}),(f=(0,u.inject)("i18n"),b=(h=new WeakMap,v=new WeakMap,w=new WeakMap,class e extends s.default{constructor(){super(...arguments)
w.set(this,{get:A,set:void 0})
v.set(this,{get:z,set:void 0})
h.set(this,{get:N,set:void 0});(0,t.default)(this,"i18n",g,this)}get backActionModel(){return{buttons:[{accessibilityText:this.i18n.lookupTranslation(e,"i18n_back_action_a11y_text")([]),category:"TERTIARY",icon:"arrow-left",size:(0,o.default)(this,w),action:(0,o.default)(this,h).backAction}]}}get moreInfoActionModel(){return{buttons:[{accessibilityText:this.i18n.lookupTranslation(e,"i18n_more_info_action_a11y_text")([{heading:(0,o.default)(this,h).heading.text}]),category:"TERTIARY",icon:"question",size:"SMALL",action:(0,o.default)(this,h).moreInfoAction}]}}get headingClass(){return M[(0,o.default)(this,v)]}get headingContainerClass(){return y[(0,o.default)(this,v)]}get moreInfoActionClasses(){const e=["org-header__more-info-action"]
"MEDIUM"!==(0,o.default)(this,v)&&"LARGE"!==(0,o.default)(this,v)||e.push(T[(0,o.default)(this,v)])
return e.join(" ")}get subheadingClasses(){const e=["org-header__subheading"],t="LARGE"===(0,o.default)(this,v)?"SMALL":"XSMALL"
e.push(C[t])
return e.join(" ")}get tagName(){const e=(0,o.default)(this,h).level??2
return _[e]}}),g=(0,a.default)(b.prototype,"i18n",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b))
e.default=O
function N(){return this.args.model}function z(){return(0,o.default)(this,h).size??"MEDIUM"}function A(){return"LARGE"===(0,o.default)(this,v)?"MEDIUM":"SMALL"}}))
define("organization-view-wrapper/components/nested-component",["exports","@ember/template-factory","@ember/component","@glimmer/component","@ember/debug","organization-view-wrapper/utils/mappers"],(function(e,t,n,o,a,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
class i extends o.default{get nestedComponentData(){const e=this.args.nestedComponentsMap[this.args.associationUrn]
return e}}e.default=i;(0,n.setComponentTemplate)((0,t.createTemplateFactory)({id:"kwAY5Qrl",block:'[[[1,"\\n"],[44,[[28,[32,0],[[30,0,["nestedComponentData","componentName"]]],null]],[[[1,"      "],[8,[30,1],[[17,2]],[["@model","@actionsMap","@nestedComponentsMap"],[[30,0,["nestedComponentData","props"]],[30,3],[30,4]]],null],[1,"\\n"]],[1]]],[1,"  "]],["ResolvedComponent","&attrs","@actionsMap","@nestedComponentsMap"],false,["let"]]',moduleName:"organization-view-wrapper/components/nested-component.gts",scope:()=>[r.getComponentToRender],isStrictMode:!0}),i)}))
define("organization-view-wrapper/components/non-supported-component",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","@ember/service","@glimmer/component"],(function(e,t,n,o,a,r,i,l,s){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var c,u,p
let d=(0,i.setComponentTemplate)((0,r.createTemplateFactory)({id:"AZxEdMhb",block:'[[[1,"\\n    "],[10,0],[12],[13],[1,"\\n  "]],[],false,[]]',moduleName:"organization-view-wrapper/components/non-supported-component.gts",isStrictMode:!0}),(c=(0,l.inject)("client-sensor-web@client-sensor"),u=class extends s.default{constructor(e,n){super(e,n);(0,t.default)(this,"clientSensor",p,this)
this.clientSensor.incrementMetricCounter({groupName:"pages-home",metricName:"non-supported-component"})}},p=(0,o.default)(u.prototype,"clientSensor",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),u))
e.default=d}))
define("organization-view-wrapper/components/organization-view",["exports","@ember/template-factory","@ember/component/template-only","@ember/component","@ember/helper","organization-view-wrapper/utils/mappers","organization-view-wrapper/utils/transformer"],(function(e,t,n,o,a,r,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var l=(0,o.setComponentTemplate)((0,t.createTemplateFactory)({id:"SGpdOq0N",block:'[[[1,"\\n"],[42,[28,[31,1],[[28,[31,1],[[30,1,["elements"]]],null]],null],null,[[[44,[[28,[32,0],[[30,2]],null]],[[[42,[28,[31,1],[[28,[31,1],[[30,3,["topLevelComponents"]]],null]],null],null,[[[41,[30,4,["isExternal"]],[[[1,"          "],[18,6,[[28,[32,1],null,[["componentData","nestedComponentsMap"],[[30,4],[30,3,["nestedComponentsMap"]]]]]]],[1,"\\n"]],[]],[[[44,[[28,[32,2],[[30,4,["componentName"]]],null]],[[[1,"            "],[8,[30,5],null,[["@model","@actionsMap","@nestedComponentsMap"],[[30,4,["props"]],[30,3,["actionsMap"]],[30,3,["nestedComponentsMap"]]]],null],[1,"\\n"]],[5]]]],[]]]],[4]],null]],[3]]]],[2]],null]],["@response","element","viewData","topLevelComponentData","ContentViewItem","&default"],false,["each","-track-array","let","if","yield"]]',moduleName:"organization-view-wrapper/components/organization-view.gts",scope:()=>[i.default,a.hash,r.getComponentToRender],isStrictMode:!0}),(0,n.default)("organization-view","OrganizationView"))
e.default=l}))
define("organization-view-wrapper/components/section-view-model",["exports","@ember/template-factory","@ember/component/template-only","@ember/component","artdeco-card/components/artdeco-card","organization-view-wrapper/components/nested-component"],(function(e,t,n,o,a,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var i=(0,o.setComponentTemplate)((0,t.createTemplateFactory)({id:"xcpywzls",block:'[[[1,"\\n  "],[8,[32,0],[[24,0,"mb3"],[17,1]],null,[["default"],[[[[1,"\\n"],[41,[30,2,["header"]],[[[1,"      "],[10,"header"],[14,0,"artdeco-card__header"],[12],[1,"\\n        "],[8,[32,1],null,[["@associationUrn","@actionsMap","@nestedComponentsMap"],[[30,2,["header"]],[30,3],[30,4]]],null],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[42,[28,[31,2],[[28,[31,2],[[30,2,["components"]]],null]],null],null,[[[1,"      "],[8,[32,1],null,[["@associationUrn","@actionsMap","@nestedComponentsMap"],[[30,5],[30,3],[30,4]]],null],[1,"\\n"]],[5]],null],[41,[30,2,["footer"]],[[[1,"      "],[10,"footer"],[14,0,"artdeco-card__actions"],[12],[1,"\\n        "],[8,[32,1],null,[["@associationUrn","@actionsMap","@nestedComponentsMap"],[[30,2,["footer"]],[30,3],[30,4]]],null],[1,"\\n      "],[13],[1,"\\n"]],[]],null],[1,"  "]],[]]]]],[1,"\\n"]],["&attrs","@model","@actionsMap","@nestedComponentsMap","componentUrn"],false,["if","each","-track-array"]]',moduleName:"organization-view-wrapper/components/section-view-model.gts",scope:()=>[a.default,r.default],isStrictMode:!0}),(0,n.default)("section-view-model","SectionViewModel"))
e.default=i}))
define("organization-view-wrapper/template-registry",[],(function(){}))
define("organization-view-wrapper/types/shared-types",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})}))
define("organization-view-wrapper/utils/action-types",["exports","organization-view-wrapper/components/-private/navigation"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.SUPPORTED_ACTION_TYPES=e.ACTION_TYPE_TO_COMPONENT_MAP=void 0
const n=Object.freeze({navigationAction:t.default})
e.ACTION_TYPE_TO_COMPONENT_MAP=n
const o=Object.freeze(Object.keys(n))
e.SUPPORTED_ACTION_TYPES=o}))
define("organization-view-wrapper/utils/constants",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.SUPPORTED_COMPONENTS=e.ORGANIZATION_NAVIGATION_ACTION_CONTEXT=e.NON_SUPORTED_COMPONENT=void 0
const t=Object.freeze({OPENS_IN_SAME_SESSION:"OPENS_IN_SAME_SESSION",OPENS_IN_NEW_TAB:"OPENS_IN_NEW_TAB"})
e.ORGANIZATION_NAVIGATION_ACTION_CONTEXT=t
e.SUPPORTED_COMPONENTS=["informationCallout","organizationPeopleGrouping","entityCard","buttonBar","header","section","carousel","horizontalList","suggestedPageActionCard","organizationalPageMenuUrn","updatesCarousel","targetedContentWrapper","updateWrapper","eventWrapper","premiumCompanyInsightCardWrapper"]
e.NON_SUPORTED_COMPONENT="nonSupportedComponent"}))
define("organization-view-wrapper/utils/mappers",["exports","organization-view-wrapper/utils/action-types","@ember/debug","organization-view-wrapper/utils/constants","organization-view-wrapper/components/non-supported-component","organization-view-wrapper/components/header-view-model","organization-view-wrapper/components/section-view-model"],(function(e,t,n,o,a,r,i){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.getActionsMap=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]
return e.reduce(((e,n)=>{const{action:o}=n
if(o){const a=t.SUPPORTED_ACTION_TYPES.find((e=>!!o[e]))
if(a){const t=o[a]
e[n.associationUrn]={actionType:a,actionData:t,controlName:null==n?void 0:n.controlName}}}return e}),{})}
e.getComponentToRender=function(e){const t=l[e]
return t}
const l={[o.NON_SUPORTED_COMPONENT]:a.default,buttonBar:a.default,carousel:a.default,entityCard:a.default,header:r.default,horizontalList:a.default,informationCallout:a.default,organizationPeopleGrouping:a.default,organizationalPageMenuUrn:a.default,section:i.default,suggestedPageActionCard:a.default,targetedContentWrapper:a.default,updatesCarousel:a.default}}))
define("organization-view-wrapper/utils/transformer",["exports","organization-view-wrapper/utils/constants","organization-view-wrapper/utils/mappers"],(function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=function(e){return e?{topLevelComponents:r(e.topLevelComponents),nestedComponentsMap:i(e.nestedComponents),actionsMap:(0,n.getActionsMap)(e.actions)}:{}}
function o(e,n){const o=t.SUPPORTED_COMPONENTS.find((t=>e[t]))
if(o){return{componentName:o,props:e[o],isExternal:n}}return{componentName:t.NON_SUPORTED_COMPONENT,isExternal:!1}}function a(e){return null!=e&&e.component?o(e.component,!1):null!=e&&e.externalComponent?o(e.externalComponent,!0):null}function r(e){const t=[]
e.forEach((e=>{if(!e)return
const n=a(e)
n&&t.push(n)}))
return t}function i(e){const t={}
null==e||e.forEach((e=>{if(!e)return
const n=a(e)
n&&(t[e.associationUrn]=n)}))
return t}}))
define("school/template-registry",[],(function(){}))
define("school/utils/data-providers",["exports","global-utils/utils/api-compat","graphql-queries/queries/organizations/organization-companies-by-school.graphql","@ember/debug"],(function(e,t,n,o){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.fetchSchoolV2Id=function(e,o){return o.executeQuery(n.default,{schoolUrn:e}).then((e=>{var n,o
const a=null===(n=e.data.organizationDashCompaniesBySchool)||void 0===n||null===(o=n.elements)||void 0===o?void 0:o[0]
return(0,t.entityUrnToId)(a.entityUrn)}))}}))
define("school/utils/school-utils",["exports","global-utils/utils/url"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.SCHOOL_HOME_URL=void 0
const n=`https://university.${(0,t.getDomainWithoutWWW)()}/linkedin-for-students`
e.SCHOOL_HOME_URL=n}))

//# sourceMappingURL=engine-vendor.map