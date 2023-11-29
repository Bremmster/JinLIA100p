define("@linkedin/xmessageformat-js",["exports","@linkedin/jsecure"],(function(e,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.PossessiveFormatter=e.PluralFormatter=e.NumberFormatter=e.NameFormatter=e.NAME_STYLES=e.DateFormatter=e.DEFAULT_TIME_PATTERN=e.DEFAULT_NAME_STYLE=e.DEFAULT_DATE_PATTERN=e.DATE_FORMAT_MAP=e.ChooserFormatter=void 0
e.Rtl=function(){return{isRtl:(n=" \n\r\t\f \u2028\u2029".split(""),a="~!@#$%^&*()_+`1234567890-={}|[]\\:\";'<>?,./".split(""),t=n.concat(a),"֐","ۿ",i=(e=/&(?:(lt|gt|amp|quot|nbsp)|#x([\da-f]{1,4})|#(\d{1,5}));/gi,function(n){return null==n?null:"".concat(n).replace(e,oa)}),r=_a(t,"֐","ۿ"),function(e){return-1!==r(i(e))})}
var e
var n,a,t,i,r}
e.TruncationFormatter=e.TimeFormatter=e.TIME_FORMAT_MAP=void 0
e.default=Ea
e.formatCurrency=function(e,n,a){return na({amount:e,currencyCode:n},a)}
e.formatDate=Nn
e.formatInteger=function(e,n){return aa(e,n,{parameters:{integer:{key:"integer",value:[],delimiter:"",order:-1}}})}
e.formatName=Zn
e.formatNumber=function(e,n){return aa(e,n)}
e.formatTime=ga
e.fromString=function(e,n){return Oa(Va(e),n)}
e.getOutputFilter=function(){return Fa}
e.getRules=hn
e.getSantizeUrl=ge
e.getUserDataFilter=function(){return le()}
e.isRule=vn
e.makeInterpolator=Oa
e.render=function(e,n,a){if(1===e.length&&"string"==typeof e[0])return Fa(e[0])
return Fa(Ma(e,n,a))}
e.setOutputFilter=function(e){Fa=e}
e.setSanitizeUrl=function(e){pe=e}
e.setUserDataFilter=function(e){de(e)}
e.toAst=Va
function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}})
Object.defineProperty(e,"prototype",{writable:!1})
n&&t(e,n)}function t(e,n){t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){e.__proto__=n
return e}
return t(e,n)}function i(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))
return!0}catch(e){return!1}}()
return function(){var a,t=o(e)
if(n){var i=o(this).constructor
a=Reflect.construct(t,arguments,i)}else a=t.apply(this,arguments)
return r(this,a)}}function r(e,n){if(n&&("object"===g(n)||"function"==typeof n))return n
if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined")
return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}(e)}function o(e){o=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)}
return o(e)}function _(){_=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]
for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e}
return _.apply(this,arguments)}function s(e,n){var a=Object.keys(e)
if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e)
n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{}
n%2?s(Object(a),!0).forEach((function(n){d(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n,a){(n=f(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a
return e}function m(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=a){var t,i,r,o,_=[],s=!0,l=!1
try{if(r=(a=a.call(e)).next,0===n){if(Object(a)!==a)return
s=!1}else for(;!(s=(t=r.call(a)).done)&&(_.push(t.value),_.length!==n);s=!0);}catch(e){l=!0,i=e}finally{try{if(!s&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(l)throw i}}return _}}(e,n)||function(e,n){if(!e)return
if("string"==typeof e)return p(e,n)
var a=Object.prototype.toString.call(e).slice(8,-1)
"Object"===a&&e.constructor&&(a=e.constructor.name)
if("Map"===a||"Set"===a)return Array.from(e)
if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,n){(null==n||n>e.length)&&(n=e.length)
for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a]
return t}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function c(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e,n){for(var a=0;a<n.length;a++){var t=n[a]
t.enumerable=t.enumerable||!1
t.configurable=!0
"value"in t&&(t.writable=!0)
Object.defineProperty(e,f(t.key),t)}}function k(e,n,a){n&&u(e.prototype,n)
a&&u(e,a)
Object.defineProperty(e,"prototype",{writable:!1})
return e}function f(e){var n=function(e,n){if("object"!==g(e)||null===e)return e
var a=e[Symbol.toPrimitive]
if(void 0!==a){var t=a.call(e,n||"default")
if("object"!==g(t))return t
throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string")
return"symbol"===g(n)?n:String(n)}var b=function(){function e(n){c(this,e)
this.source=n
this.index=0
this.cursor=n.charCodeAt(0)
this.previousCharCode=0
0===n.length&&(this.cursor=0)}k(e,[{key:"isEscaped",get:function(){return 92===this.previousCharCode}},{key:"hasNext",get:function(){return 0!==this.cursor}},{key:"currentChar",get:function(){return this.index<this.source.length?this.source.charAt(this.index):""}},{key:"currentCharCode",get:function(){return this.cursor}},{key:"next",value:function(){this.previousCharCode=this.cursor
this.index++
this.index<this.source.length?this.cursor=this.source.charCodeAt(this.index):this.cursor=0}},{key:"toString",value:function(){return"index ".concat(this.index,' in string "').concat(this.source,'"')}}])
return e}(),h="",v=/[a-zA-Z]/,y=/[1-9]/,j=/[0-9]/,w=/[a-zA-Z0-9]/,x=/[a-zA-Z0-9_\-~.|\[\]\/]/,L=/[#]/,D=/[#+<]/,S=/[#+<]/,A={number:-1,keyword:h},I="simple"
function N(e,n){throw new SyntaxError("XMessage parsing error: ".concat(e," at ").concat(n.toString()))}function T(e,n,a){var t={},i=function(e){for(var n=[],a=[],t=[];e.hasNext;){123===e.currentCharCode?n.push(e.currentChar):125===e.currentCharCode&&n.pop()
if(0===n.length&&124===e.currentCharCode){0===t.length&&N('Unexpected "|" in style list.',e)
a.push(t.join(h))
t.length=0
e.next()}else{t.push(e.currentChar)
e.next()}}if(t.length>0){a.push(t.join(h))
t.length=0}return a}(e)
i.map((function(e,t){return function(e,n,a){var t=L
"choice"===n&&(t=D)
"plural"===n&&(t=S)
for(var i=[],r="",o="",_=[];e.hasNext;){if(t.test(e.currentChar))if(0===i.length)N('Error parsing style key/value. Found delimiter "'.concat(e.currentChar,'" but expected key.'),e)
else if(""===o){o=i.join(h)
i.length=0
r=e.currentChar
e.next()}i.push(e.currentChar)
e.next()}if(""===r){o=i.join(h)
i.length=0}else{if(i.length>0){var s=i.join(h)
void 0!==s&&(_=O(s))}i.length=0}(o.startsWith(" ")||o.endsWith(" "))&&N("leading/trailing spaces not allowed in keys",e)
"map"===n&&""!==o&&void 0===_&&N('missing style value for "'.concat(o,'"'),e)
return{key:o,value:_,delimiter:r,order:a}}(new b(e),n,t+a)})).forEach((function(n,i){n.order=i+a
Object.prototype.hasOwnProperty.call(t,n.key)?N('Found duplicate style key "'.concat(n.key,'". Styles must have unique names.'),e):t[n.key]=n}))
return t}function E(e,n){switch(n){case"date":case"number":return function(e){for(var n={};e.hasNext;){for(var a=[];e.hasNext&&124!==e.currentCharCode;){a.push(e.currentChar)
e.next()}var t=a.join(h);(t.startsWith(" ")||t.endsWith(" "))&&N("leading/trailing spaces not allowed in values",e)
n[t]={key:t,value:null,delimiter:"",order:0}
e.hasNext&&e.next()}return n}(e)
default:return T(e,n,0)}}function V(e){var n=A,a=I,t=h,i={}
if(e.hasNext){n=function(e){var n=[],a=[],t=-1,i=h,r=!1
if(48===e.currentCharCode){n.push(e.currentChar)
e.next()
r=!0}r&&e.hasNext&&44!==e.currentCharCode&&58!==e.currentCharCode&&N('Could not parse index; expected ":" or end of identifier but found "'.concat(e.currentChar,'"'),e)
if(y.test(e.currentChar))for(;e.currentChar&&j.test(e.currentChar);){n.push(e.currentChar)
e.next()}if(58===e.currentCharCode){e.next()
if(e.currentChar&&w.test(e.currentChar)){a.push(e.currentChar)
e.next()}else N('Expected letter (a-zA-Z) or number (0-9) but found "'.concat(e.currentChar,'"'),e)
for(;e.currentChar&&x.test(e.currentChar);){a.push(e.currentChar)
e.next()}}else 0===n.length&&e.hasNext&&N('Unexpected character; expected ":" but found "'.concat(e.currentChar,'"'),e)
if(44===e.currentCharCode||0===e.currentCharCode){t=parseInt(n.join(h),10)
isNaN(t)&&(t=-1)
i=a.join(h)}else N('Unexpected character; expected "," or end of identifier but found "'.concat(e.currentChar,'"'),e)
return{number:t,keyword:i}}(e)
if(44===e.currentCharCode){e.next()
a=function(e){var n=[]
if(0===e.currentCharCode)N('Unable to parse type. Expected letter (a-zA-Z) but found end of identifier after ","',e)
else for(;e.currentChar&&v.test(e.currentChar);){n.push(e.currentChar)
e.next()}return n.join(h)}(e)
if(44===e.currentCharCode){e.next()
t=function(e,n){var a=h
if("list"===n){for(var t=[];e.hasNext&&44!==e.currentCharCode;){t.push(e.currentChar)
e.next()}a=t.join(h)}return a}(e,a)
44!==e.currentCharCode&&124!==e.currentCharCode||e.next()
e.currentCharCode&&(i=E(e,a))}}else a=I}else N("Error parsing placeholder. Unexpected end of input.",e)
e.currentCharCode&&N('Unexpected character "'.concat(e.currentChar,'".'),e)
return"list"===a?{type:"list",parameters:i,subType:t,index:n}:{type:a,parameters:i,index:n}}function F(e){return"string"==typeof e?e:(n=e.text,V(new b(n)))
var n}function O(e){if(-1===e.indexOf("{")&&-1===e.indexOf("'"))return[e]
for(var n=function(e){for(var n=[],a=[],t=[],i=new b(e),r=!1;i.hasNext;)if(92!==i.currentCharCode||i.isEscaped)if(i.isEscaped){t.push(i.currentChar)
i.next()}else{if(0===a.length&&39===i.currentCharCode){i.next()
if(39===i.currentCharCode){t.push("'")
i.next()
continue}r=!r
if(t.length>0){n.push(t.join(h))
t.length=0}}if(r){i.hasNext&&t.push(i.currentChar)
i.next()}else if(125!==i.currentCharCode||i.isEscaped||0!==a.length)if(123===i.currentCharCode){if(0===a.length){if(t.length>0){n.push(t.join(h))
t.length=0}}else t.push(i.currentChar)
a.push(i.currentChar)
i.next()}else if(125===i.currentCharCode){a.pop()
if(0===a.length)if(t.length>0){n.push({text:t.join(h)})
t.length=0}else N("Unexpected end of placeholder (found no content)",i)
else t.push(i.currentChar)
i.next()}else{i.hasNext&&t.push(i.currentChar)
i.next()}else N('Unexpected "}"',i)}else i.next()
0!==a.length&&N('Unexpected end of placeholder (unmatched "{")',i)
if(t.length>0){n.push(t.join(h))
t.length=0}return n}(e),a=[],t=0;t<n.length;++t){var i=n[t]
i&&(a[t]=F(i))}return a}var M=function(){function e(n){c(this,e)
this.value=z(n)}k(e,[{key:"toString",value:function(){switch(g(this.value)){case"object":case"function":break
default:return String(this.value)}return""}}])
return e}()
function z(e){return e instanceof M?e.value:e}function R(e){return e instanceof M?e:new M(e)}function P(e,n){var a=e.parameters
return Object.prototype.hasOwnProperty.call(a,n)}var C={eq:function(e,n){return e===n},gt:function(e,n){return e>n},gte:function(e,n){return e>=n},endsWith:function(e,n){return"".concat(e).endsWith("".concat(n))}}
function B(e,n,a){var t=""
if(e.parameters){var i=e.parameters
for(var r in i)if(Object.prototype.hasOwnProperty.call(i,r)&&!n.test(r)){t='Invalid style "'.concat(r,'"')
a&&(t+=" ".concat(a))
break}}return t}function K(e,n,a){var t,i="Placeholder must have exactly ".concat(n," style(s)"),r="Placeholder must have at least ".concat(n," style(s)"),o=Object.keys(e.parameters)
o.length>0?"eq"===a&&o.length!==n?t=i:"gte"===a&&o.length<n&&(t=r):n>0&&(t="Placeholder must have styles")
return t}function G(e,n){return K(e,n,"eq")}function q(e,n,a){var t
n.forEach((function(n){var i=e[n]
i&&("without"===a?(!i.value||i.value.length>0)&&(t='Invalid value for style "'.concat(n,'"')):"with"===a&&(i.value||(t='Style "'.concat(n,'" must have a value'))))}))
return t}function U(e,n){return q(e.parameters,n,"with")}var H=new RegExp("^(".concat(["text","title"].join("|"),")$"))
function J(e){var n=function(e,n){var a
if(e.parameters)for(var t=e.parameters,i=0;i<n.length;i++){var r=n[i]
r&&!Object.prototype.hasOwnProperty.call(t,r)&&(a='Missing required style key "'.concat(String(r),'"'))}else a="Placeholder must have styles"
return a}(e,["text"])
n||(n=B(e,H,'The anchor placeholder only supports "text" and "title" styles.'))
return n}var W=new RegExp("^(true|false)$")
function Y(e){var n=function(e,n){return K(e,n,"gte")}(e,1)
n||(n=B(e,W,'The key must be either "true" or "false".'))
return n}var X=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/,Q=/^(zero|singular|dual|few|many|plural|other)$/
var Z=["name","text"],$=/^(?:familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix)$/
var ee=/^(familiar|family|full|given|list|maiden|micro|possessive|salutation|prefix|suffix|compact)$/
var ne=new RegExp("^(".concat(["sep","nosep"].join("|"),")$"))
function ae(e){var n=G(e,1)
n||(n=B(e,ne,"Invalid style for suffix placeholder."))
n||(n=function(e,n){return q(e.parameters,n,"without")}(e,["nosep","sep"]))
return n}var te=new RegExp("prefix|possessive|suffix")
function ie(e){switch(e.type){case"anchor":return J(e)
case"boolean":return Y(e)
case"choice":return function(e){var n,a,t,i,r=e.parameters,o=!1,_=[]
for(i in r){var s=r[i]
s&&(_[s.order]=s)
Q.test(i)&&(o=!0)}for(var l=0;l<_.length;l++){var d=_[l]
if(d&&X.test(d.key)){t=parseInt(d.key,10)
if(void 0===a)a=t
else{if(!(a<t)){n="Invalid number order. Cannot list ".concat(t," after ").concat(a,". Numbers must be ascending.")
break}a=t}}else if(d&&Q.test(d.key))o=!0
else if(d){n='Invalid category key "'.concat(d.key,'".')
break}}o&&(r.singular?r.plural||(n='Missing required category "plural"'):n='Missing required category "singular"')
return n}(e)
case"list":return function(e){var n
""!==e.subType&&-1===Z.indexOf(e.subType)&&(n='Invalid list subtype "'.concat(e.subType,'"'))
n||(n=B(e,$,"Invalid style for list placeholder."))
n||(n=U(e,["prefix","suffix"]))
return n}(e)
case"map":case"select":return function(e){var n
e.parameters?0===Object.keys(e.parameters).length&&(n="MapPlaceholder must have at least one style argument."):n="MapPlaceholder must have parameters."
return n}(e)
case"name":return function(e){var n=B(e,ee,"Invalid style for name placeholder.")
n||(n=U(e,["prefix","suffix"]))
return n}(e)
case"suffix":return ae(e)
case"text":return function(e){return B(e,te,"Invalid style for text placeholder.")}(e)
case"possessive":return function(e){return G(e,0)}(e)
default:return}}function re(e){var n
if("string"!=typeof e){n=function(e){return e?e.index?void 0:"Placeholder must have an index.":"Placeholder is invalid."}(e)
n||(n=ie(e))
if(n)throw new Error("".concat(n))
for(var a in e.parameters)if(oe(e.parameters,a)){var t=e.parameters[a]
t&&t.value&&t.value instanceof Array&&t.value.forEach(re)}}}function oe(e,n){return n in e}var _e,se=/{(\d+)}/g
function le(){return _e}function de(e){_e=function(n){if(n instanceof M)return n
var a=e(n)
return new M(a)}}function me(e){return n.default.htmlEncode(e)}de(me)
var pe=function(e){return n.default.sanitizeUrl(null!==e?e:void 0)}
function ge(){return pe}function ce(e){console.warn(e)}function ue(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return e.replace(se,(function(e,a){if(a){var t=n[a]
if(t)return t}return e||""}))}function ke(e,n){for(var a=e.length,t=0;t<a;++t){var i=e[t]
if(Object.prototype.hasOwnProperty.call(n,i))return n[i]}return null}function fe(e,n){var a=e.parameters[n]
if(a)return a.value}function be(e,n){var a=e.parameters
if(a)for(var t=Object.keys(a),i=0;i<t.length;i++){var r=a[t[i]]
if(r.order===n)return r}}function he(e,n,a,t,i){var r=fe(n,a),o=le()
if("string"==typeof r&&""===r)return r
if(void 0!==r){for(var _="",s=0;s<r.length;++s){var l=r[s]
l&&(_+="string"==typeof l?l:z(o(e(l,t,i))))}return R(_)}return""}var ve=/['"<>]/
function ye(e){if(null==e)return""
var n=String(z(e)),a=ve.test(n)?me(n):n
return null!==a?a:""}function je(e){return null===e||"string"==typeof e}var we="true",xe="false"
var Le={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"},De={month:"long"},Se={year:"numeric",month:"long",day:"numeric"},Ae={year:"numeric",month:"long"},Ie={month:"long",day:"numeric"},Ne={year:"numeric",month:"short"},Te={month:"short",day:"numeric"},Ee={month:"short"},Ve={month:"numeric"},Fe={weekday:"long"},Oe={year:"numeric"},Me={year:"numeric",month:"short",day:"numeric"},ze={weekday:"short"},Re={day:"numeric"},Pe={year:"numeric",month:"numeric",day:"numeric"},Ce=Ee,Be={month:"long"},Ke=Fe,Ge=ze,qe=Re,Ue=Oe,He=l(l({},De),qe),Je=l(l({},Ce),qe),We=l(l(l({},De),qe),Ue),Ye=l(l(l({},Ce),qe),Ue),Xe=l(l(l({},Be),qe),Ue),Qe=l(l({},De),Ue),Ze=l(l({},Ce),Ue),$e={mdy:We,"mdy.long":We,"mdy.medium":Ye,"mdy.short":Xe,my:Qe,"my.long":Qe,"my.medium":Ze,"my.short":Ze,md:He,"md.long":He,"md.medium":Je,"md.short":Je,m:De,"m.long":De,"m.medium":Ce,"m.short":Ve,d:Ke,"d.long":Ke,"d.medium":Ge,"d.short":qe,y:Ue,"y.long":Ue,"y.medium":Ue,"y.short":Ue},en={year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"numeric"}
var nn={sv_SE:{intlLocale:"sv",possessive:{fallback:"s",rules:{".*[SsXxZz]$":"",".*[A-RT-WYÅÄÖ]$":"s",".*[a-rt-wyåäö]$":"s"}},date:{narrowDayNames:["S","M","T","O","T","F","L"],intlOptions:{time:en,"time.long":en,"time.medium":en,"time.short":{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"numeric"},mdy:Se,"mdy.long":Se,"mdy.medium":Me,"mdy.short":Pe,my:Ae,"my.long":Ae,"my.medium":Ne,"my.short":Ne,md:Ie,"md.long":Ie,"md.medium":Te,"md.short":Te,m:Be,"m.long":Be,"m.medium":Ee,"m.short":Ve,d:Fe,"d.long":Fe,"d.medium":ze,"d.short":Re,"d.narrow":{weekday:"narrow"},y:Oe,"y.long":Oe,"y.medium":Oe,"y.short":Oe}},currency:{postFormatting:function(e,n,a){n<0&&(a=a.replace("-","−"))
return(a=a.replace(":",",")).replace(/\./g," ")}},number:{percent:"{0} %",postFormatting:function(e,n){e<0&&(n=n.replace("−","-"))
return n}},time:{postFormatting:function(e,n,a){/^\d:/.test(a)&&(a="0".concat(a))
return a}},list:{start:"{0}, {1}",middle:"{0}, {1}",end:"{0} och {1}",2:"{0} och {1}"}}}
function an(e){return nn[e]}var tn=1,rn=[0,1,2,3,4,5],on=["SINGULAR","PLURAL","DUAL","FEW","MANY","ZERO"],_n={equals:{1:0},endsWith:{0:tn,1:tn,2:tn,3:tn,4:tn,5:tn,6:tn,7:tn,8:tn,9:tn}}
function sn(e,n,a){var t=Math.floor(e),i=function(e,n){var a
n.forEach((function(n){void 0!==n.arg&&null!==n.arg&&"gte"===n.comparison?(0,C.eq)(e,n.arg)&&(!a||n.arg>a.arg)&&(a=n):n.comparison&&(0,C[n.comparison])(e,n.arg)&&(!a||n.arg>a.arg)&&(a=n)}))
return a}(t,n)
if(i)return i
var r=function(e,n){if(e&&null!=n){var a="".concat(n)
if(e.equals&&void 0!==e.equals[a])return e.equals[a]
if(e.endsWith)for(var t=Math.min(2,a.length);t>0;t--){var i=a.slice(-1*t)
if(void 0!==e.endsWith[i])return e.endsWith[i]}}}(a,t)
if(void 0!==r){var o,_,s=rn.indexOf(r)
if(-1!==s){var l
o=null===(l=on[s])||void 0===l?void 0:l.toLowerCase()}for(var d=0;d<n.length;d++){var m=n[d]
if((null==m?void 0:m.category)===o)return m
"plural"===(null==m?void 0:m.category)&&(_=m)}if(_)return _}}var ln=function(){function e(){c(this,e)}k(e,[{key:"format",value:function(e,n,a){var t,i,r=an(a),o=r&&r.chooser?r.chooser:_n
n.some((function(e){return!!e.category}))?t=sn(e,n,o):n.forEach((function(n){if(n.comparison){(0,C[n.comparison])(e,n.arg)&&(!t||void 0!==n.arg&&void 0!==t.arg&&n.arg>t.arg)&&(t=n)}}))
return t?"function"==typeof(i=t.text)?i():i:""}}])
return e}()
e.ChooserFormatter=ln
var dn=function(){function e(){c(this,e)
this._formatters=new Map}k(e,[{key:"getWithDefault",value:function(e,n){return function(e,n,a){if(e.has(n))return e.get(n)
var t=a()
e.set(n,t)
return t}(this._formatters,e,n)}}])
return e}()
function mn(e){var n=new Date(e.getTime())
n.setMinutes(e.getMinutes()-e.getTimezoneOffset())
return n}function pn(e){return e instanceof Date}function gn(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
if(pn(e)){if(n)return mn(e)}else{if("number"==typeof e)return new Date(e)
if("string"==typeof e){var a=Date.parse(e)
return isNaN(a)?new Date(Number(e)):new Date(a)}}return e}function cn(e,n){var a=e[n]
return a?_(Object.create(null),a):void 0}var un={time:Le,"time.long":Le,"time.medium":Le,"time.short":{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}},kn={intlOptions:l(l({},$e),un)},fn={fmt_d:Fe,fmt_d_short:Re,fmt_d_medium:ze,fmt_d_long:Fe,fmt_m:Be,fmt_m_short:Ve,fmt_m_medium:Ee,fmt_m_long:Be,fmt_y:Oe,fmt_y_short:{year:"2-digit"},fmt_md_medium:Te,fmt_md_long:Ie,fmt_my_medium:Ne,fmt_my_long:Ae,fmt_mdy_short:Pe,fmt_mdy_medium:Me,fmt_mdy_long:Se,fmt_mdy_hm_short:{year:"2-digit",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"},fmt_mdy_hm_long:Le},bn={hm:{hour:"numeric",minute:"numeric"},hms:{hour:"numeric",minute:"numeric",second:"numeric"}}
function hn(e,n){var a=an(e),t=null==a?void 0:a[n]
return t||a}function vn(e){return"object"===g(e)&&!("intlLocale"in e)}function yn(e){return e.split("_")[0]||"en"}function jn(e){var n=an(e)
return{intlLocale:(null==n?void 0:n.intlLocale)||yn(e),localeData:n}}function wn(e){return e<10?"0".concat(e):e}var xn,Ln=function(e){a(t,e)
var n=i(t)
function t(){c(this,t)
return n.apply(this,arguments)}k(t,[{key:"format",value:function(e,n,a,t){var i=jn(n),r=i.localeData,o=i.intlLocale,_=((null==r?void 0:r.date)||kn).calendar
if("fmt_mdy_iso"===a)return function(e){return"".concat(e.getUTCFullYear(),"-").concat(wn(e.getUTCMonth()+1),"-").concat(wn(e.getUTCDate()))}(gn(e,t))
var s=cn(fn,a)
if(!s)throw new Error("[XMessage] Unsupported date format")
t||(s.timeZone="UTC")
return this.getWithDefault("".concat(o,"-").concat(a,"-").concat(!!s.timeZone),(function(){s.calendar=_
return new Intl.DateTimeFormat(o,s)})).format(gn(e))}}])
return t}(dn)
e.DateFormatter=Ln
var Dn={fmt_d:"d",fmt_d_short:"d.short",fmt_d_narrow:"d.narrow",fmt_d_medium:"d.medium",fmt_d_long:"d.long",fmt_m:"m",fmt_m_short:"m.short",fmt_m_medium:"m.medium",fmt_m_long:"m.long",fmt_y:"y",fmt_y_short:"y.short",fmt_md_medium:"md.medium",fmt_md_long:"md.long",fmt_my_medium:"my.medium",fmt_my_long:"my.long",fmt_mdy_short:"mdy.short",fmt_mdy_medium:"mdy.medium",fmt_mdy_long:"mdy.long",fmt_mdy_hm_short:"time.short",fmt_mdy_hm_long:"time.long",fmt_mdy_iso:"iso",iso:"iso"}
e.DATE_FORMAT_MAP=Dn
var Sn,An={short:"fmt_mdy_short",medium:"fmt_mdy_medium",long:"fmt_mdy_long",full:"fmt_mdy_long"},In="fmt_mdy_medium"
e.DEFAULT_DATE_PATTERN=In
function Nn(e,n,a,t){if(!Dn[n])if(function(e){return!!An[e]}(n)){console.log('The date pattern "'.concat(n,'" is deprecated, falling back to "').concat(An[n],'".'))
n=An[n]}else{console.log('Unknown date pattern "'.concat(n,'", falling back to "').concat(In,'". Note: custom date patterns are not supported.'))
n=In}xn||(xn=new Ln)
return xn.format(e,a,n,t)}!function(e){e[e.FAMILIAR_NAME=0]="FAMILIAR_NAME"
e[e.FULL_NAME=1]="FULL_NAME"
e[e.LIST_VIEW=2]="LIST_VIEW"
e[e.MICROFORMAT=3]="MICROFORMAT"}(Sn||(Sn={}))
var Tn="familiar"
e.DEFAULT_NAME_STYLE=Tn
var En,Vn=["familiar","family","full","given","list","maiden","micro","salutation"]
e.NAME_STYLES=Vn
var Fn=function(e,n){return"".concat(e," ").concat(n)},On=function(e,n){return"".concat(n," ").concat(e)},Mn=function(e,n){return"".concat(n).concat(e)},zn=function(e,n,a){return"".concat(a?" (".concat(a,")"):""," ")},Rn=function(e){return"".concat(e?" ".concat(e):"")},Pn=function(e){return function(n){return n?'<span class="'.concat(e,'">').concat(n,"</span>"):""}},Cn=Pn("given-name"),Bn=Pn("family-name"),Kn=Pn("additional-name"),Gn=function(e,n,a){return"".concat(e).concat(Rn(a)).concat(Rn(n))},qn=function(e){return function(n,a,t){return"".concat(n).concat(Rn(a)).concat(t?" ".concat(e," ").concat(t):"")}},Un=/(^\s+|\s+$)/g
function Hn(e,n){if(!e)return""
var a,t=e.replace(Un,"")
n&&(t="".concat(null==(a=t)?null:a.toString().replace(/(.)/g,(function(e){return"<"===e?"&lt;":">"===e?"&gt;":"&"===e?"&amp;":'"'===e?"&quot;":"'"===e?"&#39;":"\\"===e?"&#92;":"="===e?"&#61;":"\0"===e?"�;":e}))))
return t}var Jn=[19968,40895,12448,12543,65377,65439,12352,12447]
function Wn(e,n){return function(e){if(!e)return!1
var n=e.charCodeAt(0)
return n>=44032&&n<=55215}(e.lastName)?"CJK":function(e){if(!e)return!1
for(var n=e.charCodeAt(0),a=0;a<Jn.length;a+=2){var t=Jn[a],i=Jn[a+1]
if(t&&i&&n>=t&&n<=i)return!0}return!1}(e.lastName)?"ja_JP"===n?"CJK-ja_JP":"CJK":n}var Yn=function(){function e(){c(this,e)
this.templates=[]}k(e,[{key:"preprocess",value:function(e,n,a){return[Cn(e),Bn(n),Kn(a)]}},{key:"add",value:function(e,n,a){var t=this.templates.indexOf(e)
if(-1===t)this.templates.push(e,[n,a])
else{this.templates[t+1].push(n,a)}}},{key:"run",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",a=arguments.length>2?arguments[2]:void 0,t=this.templates.indexOf(e)
if(t>-1){var i=this.templates[t+1],r=i.indexOf(n);-1===r&&(r=i.indexOf("default"))
var o=i[r+1]
return o(a[0]||"",a[1]||"",a[2]||"")}throw new Error("Could not find template function for ".concat(e," with ").concat(n," locale."))}}])
return e}(),Xn=new Yn
Xn.add(Sn.FAMILIAR_NAME,"default",(function(e){return e}))
Xn.add(Sn.FAMILIAR_NAME,"de_DE",Fn)
Xn.add(Sn.FAMILIAR_NAME,"pl_PL",Fn)
Xn.add(Sn.FAMILIAR_NAME,"hi_IN",Fn)
Xn.add(Sn.FAMILIAR_NAME,"ro_RO",Fn)
Xn.add(Sn.FAMILIAR_NAME,"tr_TR",Fn)
Xn.add(Sn.FAMILIAR_NAME,"CJK",Mn)
Xn.add(Sn.FAMILIAR_NAME,"CJK-ja_JP",On)
Xn.add(Sn.FULL_NAME,"default",(function(e,n,a){return"".concat(e).concat(zn(0,0,a)).concat(n)}))
Xn.add(Sn.FULL_NAME,"ar_AE",Gn)
Xn.add(Sn.FULL_NAME,"hi_IN",Gn)
Xn.add(Sn.FULL_NAME,"th_TH",Gn)
Xn.add(Sn.FULL_NAME,"cs_CZ",(function(e,n,a){return"".concat(e).concat(Rn(n)).concat(a?" (roz. ".concat(a,")"):"")}))
Xn.add(Sn.FULL_NAME,"de_DE",qn("geb."))
Xn.add(Sn.FULL_NAME,"CJK-ja_JP",(function(e,n,a){return"".concat(n).concat(Rn(e)).concat(zn(0,0,a))}))
Xn.add(Sn.FULL_NAME,"CJK",(function(e,n,a){return"".concat(Mn(e,n)).concat(zn(0,0,a))}))
Xn.add(Sn.FULL_NAME,"ms_MY",(function(e,n,a){return"".concat(e).concat(Rn(n)).concat(zn(0,0,a))}))
Xn.add(Sn.FULL_NAME,"nl_NL",(function(e,n,a){return"".concat(e," ").concat(n).concat(a?"-".concat(a):"")}))
Xn.add(Sn.FULL_NAME,"pl_PL",qn("z d."))
Xn.add(Sn.LIST_VIEW,"default",(function(e,n){return"".concat(n?"".concat(n,", "):"").concat(e)}))
Xn.add(Sn.LIST_VIEW,"CJK",Mn)
Xn.add(Sn.LIST_VIEW,"CJK-ja_JP",On)
Xn.add(Sn.LIST_VIEW,"ar_AE",Fn)
Xn.add(Sn.LIST_VIEW,"hi_IN",Fn)
Xn.add(Sn.LIST_VIEW,"in_ID",Fn)
Xn.add(Sn.LIST_VIEW,"ms_MY",Fn)
Xn.add(Sn.LIST_VIEW,"th_TH",Fn)
var Qn=function(){function e(){c(this,e)}k(e,[{key:"format",value:function(e,n,a){var t=function(e){var n="MICROFORMAT"
if(e){if(Array.isArray(e))return e.indexOf(n)>-1
if("string"==typeof e)return e===n}return!1}(n),i=t||!!e.lastNameWithHighlight,r=Hn(e.firstName,i),o=e.lastNameWithHighlight?Hn(e.lastNameWithHighlight,!1):Hn(e.lastName,i),_=Hn(e.maidenName,i),s=Wn(e,a)
if(t){var l=m(Xn.preprocess(r,o,_),3)
r=l[0]
o=l[1]
_=l[2]}var d=Xn.run(function(e){if(!e)return Sn.FAMILIAR_NAME
var n="string"==typeof e?[e]:e
return Array.isArray(n)?n.indexOf("FULL_NAME")>-1?Sn.FULL_NAME:n.indexOf("LIST_VIEW")>-1?Sn.LIST_VIEW:Sn.FAMILIAR_NAME:Sn.FAMILIAR_NAME}(n),s,[r,o,_])
return d.replace(Un,"")}}])
return e}()
e.NameFormatter=Qn
function Zn(e,n,a){var t=""
if(void 0!==e){var i={firstName:e.givenName||e.firstName,lastName:e.familyName||e.lastName,maidenName:e.maidenName},r=n||Tn
if(-1===Vn.indexOf(r)){console.log('Unrecognized name format "'.concat(r,'", falling back to "').concat(Tn,'".'))
r=Tn}switch(r){case"given":t=i.firstName||""
break
case"family":t=i.lastName||""
break
case"maiden":t=i.maidenName||""
break
default:var o="full"===r?"FULL_NAME":"familiar"===r?"FAMILIAR_NAME":"list"===r?"LIST_VIEW":"FULL_NAME"
En||(En=new Qn)
t=En.format(i,o,a)}}return t}var $n,ea=function(e){a(t,e)
var n=i(t)
function t(){c(this,t)
return n.apply(this,arguments)}k(t,[{key:"formatNumber",value:function(e,n,a){var t=jn(n).intlLocale,i=a?Object.keys(a):[]
if(i.length>0&&i[0]&&!["integer","percent"].includes(i[0]))throw new Error("[XMessage] Unsupported number argument")
var r=i.length>1&&"compact"===i[1]?"compact":void 0,o=i.length>0&&"percent"===i[0]?i[0]:"decimal",_=i.length>0&&"integer"===i[0]?0:void 0
return this.getWithDefault("".concat(n,"-").concat(o,"-").concat(r,"-").concat(_),(function(){var e={style:o,maximumFractionDigits:_,notation:r}
return new Intl.NumberFormat(t,e)})).format(e)}},{key:"formatCurrency",value:function(e,n,a){var t=a?Object.keys(a.parameters):[],i=t.length>1?t[1]:"symbol",r=jn(n).intlLocale,o=t.length>2?t[2]:void 0
return this.getWithDefault("".concat(n,"-").concat(e.currencyCode,"-").concat(i,"-").concat(o),(function(){var n={style:"currency",currency:e.currencyCode,currencyDisplay:i,notation:o}
return new Intl.NumberFormat(r,n)})).format(e.amount)}}])
return t}(dn)
e.NumberFormatter=ea
function na(e,n,a){$n||($n=new ea)
return $n.formatCurrency(e,n,a)}function aa(e,n,a){$n||($n=new ea)
return $n.formatNumber(e,n,a?a.parameters:void 0)}var ta=function(e){a(t,e)
var n=i(t)
function t(){c(this,t)
return n.apply(this,arguments)}k(t,[{key:"format",value:function(e,n){var a=jn(n).intlLocale,t={}
return this.getWithDefault(a,(function(){return new Intl.PluralRules(a,t)})).select(e)}}])
return t}(dn)
e.PluralFormatter=ta
var ia=function(){function e(){c(this,e)}k(e,[{key:"format",value:function(e,n){var a,t=an(n),i=null==t?void 0:t.possessive
if(i){a=i.fallback
for(var r=Object.keys(i.rules),o=0;o<r.length;o++){var _=r[o]
if(_&&new RegExp(_).test(e)){a=i.rules[_]
break}}return a||""}return""}}])
return e}()
e.PossessiveFormatter=ia
var ra=["nbsp"," ","lt","<","gt",">","amp","&","quot",'"'],oa=function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),t=1;t<n;t++)a[t-1]=arguments[t]
var i=a[0],r=a[1],o=a[2]
return i?ra[ra.indexOf(i)+1]||"":r?String.fromCharCode(parseInt(r,16)||65533):o?String.fromCharCode(parseInt(o,10)||65533):"�"}
function _a(e,n,a){return function(t){if(null==t)return-1
var i=0,r="\0",o=t.length
for(i=0;i<o;i++){r=t.charAt(i)
if(e.indexOf(r)<0)break}return i>=o?-1:r>=n&&r<=a?i:-1}}var sa,la=function(e){a(t,e)
var n=i(t)
function t(){c(this,t)
return n.apply(this,arguments)}k(t,[{key:"format",value:function(e,n,a,t){var i=jn(n).intlLocale,r=cn(bn,a)
t||(r.timeZone="UTC")
return this.getWithDefault("".concat(i,"-").concat(a,"-").concat(!!r.timeZone),(function(){return new Intl.DateTimeFormat(i,r)})).format(e)}}])
return t}(dn)
e.TimeFormatter=la
var da={fmt_hm:"hm",fmt_hms:"hms"}
e.TIME_FORMAT_MAP=da
var ma={short:"fmt_hm",medium:"fmt_hms",long:"fmt_hms",full:"fmt_hms"},pa="fmt_hms"
e.DEFAULT_TIME_PATTERN=pa
function ga(e,n,a,t){var i=n
if(!da[n])if(ma[n]){console.log('The time pattern "'.concat(n,'" is deprecated, falling back to "').concat(ma[n],'".'))
var r=ma[n]
r&&(i=r)}else{console.log('Unknown time pattern "'.concat(n,'", falling back to "').concat(pa,'". Note: custom time patterns are not supported.'))
i=pa}var o=da[i]||"hm"
sa||(sa=new la)
return sa.format(e,a,o,t)}var ca=function(){function e(n){c(this,e)
this.ellipsis="..."
void 0!==n&&(this.ellipsis=n)}k(e,[{key:"format",value:function(e,n){if(!e||"string"!=typeof e)return""
if(void 0===n)return"..."
if(!n||"number"!=typeof n||n>=e.length||n<0)return e
for(var a=e.substr(0,n),t=a.split(""),i=n-1,r="",o=/\s|\?|!|\.|,|;|:/g;i>=0;){var _=t[i]
if(void 0===_||o.test(_))break
i--}r=i>0?a.substr(0,i):a
return r+=this.ellipsis}}])
return e}()
e.TruncationFormatter=ca
var ua,ka=/-?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?/,fa=/^(zero|singular|dual|few|many|plural|other)$/
function ba(e,n){var a=n instanceof M,t=a?z(n):n
if(e){var i=e.prefix,r=e.suffix
i&&"string"==typeof i.value[0]&&(t=i.value[0]+t)
r&&"string"==typeof r.value[0]&&(t+=r.value[0])}return a?R(t):t}var ha="list",va="start"
function ya(e,n,a,t){var i
"name"===e?a&&"object"===g(a)&&(i=function(e,n,a){var t=ke(Vn,n)
return Zn(e,t?t.key:Tn,a)}(a,n,t)):"string"!=typeof a&&"number"!=typeof a||(i=a)
return void 0===i?"":ba(n,le()(i))}var ja="DEFAULT_TEXT"
var wa,xa=new ia
function La(e,n,a,t,i){var r,o=n.parameters
if(void 0!==a)if(o.currency&&"object"===g(a))r=na(a,i,n)
else if("number"==typeof a)r=aa(a,i,n)
else if("string"==typeof a){var _=Number(a)
isNaN(_)||(r=aa(_,i,n))}return le()(r)}function Da(e,n,a,t){return n?"string"==typeof n?n:e(n,a,t):""}function Sa(e,n,a,t){return n?n.map((function(n){return Da(e,n,a,t)})).join(""):""}function Aa(e,n,a,t){return"string"==typeof n?function(e,n){return"string"==typeof e?e:"function"==typeof n?n(e.index.number,e.index.keyword):n[e.index.number]}(n,a):e(n,a,t)}function Ia(e,n,a,t,i){var r,o
!function(e){for(var n=Object.keys(e.parameters),a=0;a<n.length;a++){var t=n[a]
if(t&&n.indexOf(t,a+1)>0)throw new Error("[XMessage] duplicate ".concat(t," keys in select placeholder"))
if(t){var i=e.parameters[t]
if(!i||0===i.value.length)throw new Error("[XMessage] select key ".concat(t," without a value"))}}}(n)
var _=n.parameters[a]
null!==(r=_)&&void 0!==r&&r.value||(_=n.parameters.default)
if(null!==(o=_)&&void 0!==o&&o.value){for(var s="",l=0;l<_.value.length;l++){var d=_.value[l];(d||"string"==typeof d)&&(s+=Aa(e,d,t,i))}return s}throw new Error("[XMessage] No value resolved for select placeholder")}function Na(e,n,a){var t=""
t=void 0===a?"{".concat(-1!==n.index.number?n.index.number:"").concat(""!==n.index.keyword?":".concat(n.index.keyword):"","}"):String(a)
return le()(t)}var Ta=new ia
function Ea(e,n,a){if(e&&n&&a){var t=function(e,n){if(e&&e.index&&n){var a=e.index,t=a.number,i=a.keyword
if("function"==typeof n)return n(t,i)
var r=n[t>-1?t:0]
if(null!=r)return"string"==typeof i&&""!==i?r[i]:r
if("string"==typeof i&&""!==i&&n&&"object"===g(n)&&!Array.isArray(n))return n[i]}}(e,n)
if(null==t)return R((i=e.index,r=i.number,o=i.keyword,_=-1!==r?r.toString():"",s=""!==o?":".concat(o):"","{".concat(_).concat(s,"}")))
switch(e.type){case"anchor":return function(e,n,a,t,i){var r=ge(),o=le(),_=a,s=ye(r(je(_)?_:_.href)),l=ye(je(_)?null:o(_.id)),d=ye(je(_)?null:o(_.class)),p=z(he(e,n,"text",t,i)),g=ye(he(e,n,"title",t,i)),c={}
if(je(_)){d&&(c.class=d)
l&&(c.id=l)}else Object.keys(_).forEach((function(e){"href"!==e&&"title"!==e&&(c[ye(o(e))]=ye(o(_[e])))}))
var u="<a"
s&&(u+=' href="'.concat(s,'"'))
Object.entries(c).forEach((function(e){var n=m(e,2),a=n[0],t=n[1]
u+=" ".concat(a,'="').concat(t,'"')}))
g&&(u+=' title="'.concat(g,'"'))
return R(u+=">".concat(p,"</a>"))}(Ea,e,t,n,a)
case"boolean":return function(e,n,a,t,i){var r=a,o=""
if(!0===r||r===we)P(n,we)&&(o=he(e,n,we,t,i))
else{if(!1!==r&&r!==xe)throw new Error('Invalid argument for BooleanPlaceholder. Expected boolean or "true" or "false" but found "'.concat(r,'"'))
P(n,xe)&&(o=he(e,n,xe,t,i))}return o}(Ea,e,t,n,a)
case"choice":return function(e,n,a,t,i){for(var r,o=a,_=[],s=n.parameters,l=0,d=Object.keys(s),m=0;m<d.length;m++)(r=s[d[m]])&&(_[r.order]=r)
var p,c=g(o)
if("number"!=typeof o||isNaN(o))if("string"==typeof o)if(ka.test(o))l=parseFloat(o)
else{ce("Invalid value for 'choice' placeholder. \"".concat(o,'" is not a number. Defaulting to 0.'))
l=0}else"object"===c&&(l=Array.isArray(o)?o.length:Object.keys(o).length)
else l=o
var u=_.map((function(e,n){var a={text:n.toString(),comparison:"eq",arg:-1}
if(fa.test(e.key)){a.text=n.toString()
a.comparison="eq"
a.category=e.key}else{a.text=n.toString()
switch(e.delimiter){case"<":a.comparison="gt"
break
case"+":case"#":a.comparison="gte"
break
default:a.comparison="eq"}a.arg=parseFloat(e.key)
p||(p=a)}return a}))
ua||(ua=new ln)
var k=ua.format(l,u,i)
return void 0!==k&&""!==k?he(e,n,_[parseInt(k,10)].key,t,i):p?he(e,n,"".concat(p.arg),t,i):""}(Ea,e,t,n,a)
case"date":return function(e,n,a,t,i){var r=be(n,0),o=In
r&&(o=r.key)
if("fmt_d_narrow"===o){ce('The pattern "'.concat(o,'" is not to be used in XMessage strings. Falling back to "').concat(In,'".'))
o=In}return Nn(a,o,i,!1)}(0,e,t,0,a)
case"list":return function(e,n,a,t,i){var r,o,_,s,l,d=n.subType||"text",m="",p=hn(i,ha)||hn("default",ha)
if(a&&a instanceof Array){o=(r=a.length)-1
if(r>0&&"object"===g(p)&&"start"in p)switch(r){case 1:m="".concat(ya(d,n.parameters,a[0],i))
break
case 2:m=ue(p[2],["".concat(ya(d,n.parameters,a[0],i)),"".concat(ya(d,n.parameters,a[1],i))])
break
default:s=0
l=1
do{m=ue(p[_=0===s?va:l<o?"middle":"end"],_===va?["".concat(ya(d,n.parameters,a[s],i)),"".concat(ya(d,n.parameters,a[l],i))]:[m,"".concat(ya(d,n.parameters,a[l],i))])
s++
l++}while("end"!==_)}}return m}(0,e,t,0,a)
case"map":return function(e,n,a,t,i){var r=a
return he(e,n,void 0!==r&&fe(n,r=r.toString())?r:ja,t,i)}(Ea,e,t,n,a)
case"name":return function(e,n,a,t,i){var r,o=ke(Vn,n.parameters)
r=Zn(a,o?o.key:void 0,i)
n.parameters.possessive&&(r+=xa.format(r,i))
var _=le()(r)
return ba(n.parameters,_)}(0,e,t,0,a)
case"number":return La(0,e,t,0,a)
case"plural":return function(e,n,a,t,i){var r
wa||(wa=new ta)
var o,_=n.parameters[a]
if(_&&"#"===_.delimiter)o=_
else if("number"==typeof a)o=n.parameters[wa.format(a,i)]
else if("string"==typeof a){var s=Number(a)
isNaN(s)||(o=n.parameters[wa.format(s,i)])}for(var d=n.parameters,m=[],p=Object.keys(d),g=0;g<p.length;g++){var c=p[g]
if(c){var u=d[c]
"number"==typeof(null==u?void 0:u.order)&&(m[u.order]=u)}}var k=m.map((function(e,n){var a={text:n.toString(),comparison:"eq",arg:parseFloat(e.key)}
switch(e.delimiter){case"<":a.comparison="gt"
break
case"+":case"#":a.comparison="gte"
break
default:a.comparison="eq"}if(isNaN(a.arg)&&!e.key.match(/zero|one|two|few|many|other/))throw new Error("Invalid plural key: ".concat(e.key))
return a}))
if(o&&o.value){var f=n.index.number
if(!(f>-1))return Sa(e,o.value,t,i)
var b=o.value[f]
if(b)return Da(e,b,t,i)}if("number"==typeof a){var h
k.forEach((function(e){e.comparison&&(0,C[e.comparison])(a,e.arg)&&(!h||void 0!==e.arg&&e.arg>h.arg)&&(h=e)}))
if(h){var v=m[parseInt(h.text,10)]
if(!v)throw new Error("No plural style found from ".concat(h.text))
return v.value&&"string"!=typeof v.value&&"string"!=typeof v.value[0]?aa(a,i,{parameters:{integer:l(l({},v),{},{key:"integer",delimiter:"#"})}}):Sa(e,v.value,t,i)}}var y=m[null!=k&&null!==(r=k[0])&&void 0!==r&&r.arg&&("number"!=typeof a||a<=k[0].arg)?0:k.length-1]
if(y)return Sa(e,y.value,t,i)
throw new Error("Malformed plural placeholder. Please open an issue with the following info:\n\n  Placeholder:\n  ".concat(JSON.stringify(n,null,2),"\n\n  Resolved Value:\n  ").concat(JSON.stringify(a,null,2),"\n\n  Locale:\n  ").concat(i,"\n\n  Context:\n  ").concat(JSON.stringify(t,null,2),"\n  "))}(Ea,e,t,n,a)
case"possessive":return function(e,n,a,t,i){var r="",o=new ia
void 0!==a&&(r=o.format(a,i))
return r}(0,0,t,0,a)
case"select":return Ia(Ea,e,t,n,a)
case"simple":return Na(0,e,t)
case"suffix":return function(e,n,a,t,i){var r,o,_,s,l,d,m,p,g="",c=!1,u=n.parameters
if(void 0!==a){u&&(c=!!u.sep)
var k=hn(i,"suffix")
if(vn(k)&&"hardVowels"in k){m=(k.hardVowels||"")+(k.softVowels||"")
switch(k.strategy){case"reverseSearchForVowel":if(a.length>0){for(l=d=a.length-1;l>=0&&" "!==s&&"\t"!==s;l--){s=a.charAt(l)
if(-1!==m.indexOf(s)){p=l===d
_=k.hardVowels&&k.hardVowels.indexOf(s)>-1?k.hardVowelSuffix:k.fallbackSuffix
g=String(p?k.bufferChar:"")+_
return c?k.separator+g:g}}for(r in k.nonVowelToSuffix)if(Object.prototype.hasOwnProperty.call(k.nonVowelToSuffix,r)){o=k.nonVowelToSuffix[r]
if(new RegExp(r).test(a.charAt(d))){_=o
break}}_||(_=k.defaultBufferChar)
g=c?k.separator+_:_
break}}}}return g}(0,e,t,0,a)
case"text":return function(e,n,a,t,i){var r=Na(0,n,a)
void 0!==r&&n.parameters.possessive&&(r=R("".concat(r).concat(Ta.format(r,i))))
return ba(n.parameters,r)}(0,e,t,0,a)
case"time":return function(e,n,a,t,i){var r=be(n,0),o=pa
r&&(o=r.key)
return ga(a,o,i,!1)}(0,e,t,0,a)}}var i,r,o,_,s
return""}function Va(e){var n=O(e)
n.forEach((function(e){return re(e)}))
return n}var Fa=function(e){return n.default.sanitizeHTML(e)}
function Oa(e,n){if(e&&1===e.length&&"string"==typeof e[0]){var a=e[0]
return function(){return Fa(a)}}return function(a){return Fa(Ma(e,n,a))}}function Ma(e,n,a){for(var t="",i=0;i<e.length;++i){var r=e[i]
r&&(t+="string"==typeof r?r:Ea(r,a,n))}return t}}))
define("@linkedin/ember-cli-pemberly-i18n/app-strings",["exports"],(function(e){"use strict"
define("@linkedin/ember-cli-pemberly-i18n/root-dir",["exports"],(function(e){"use strict"
e.default="/export/content/data/multiproduct-post-commit/i001/workspace/voyager-web_2d5b0a17fb11ce480dd2a78bee6f0affb98d6ccc/packages/voyager-web"}))

//# sourceMappingURL=support_sv_SE.map