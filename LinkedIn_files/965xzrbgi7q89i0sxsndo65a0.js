define.alias("@glimmer/component/-private/ember-component-manager","msg-multisend/component-managers/glimmer")
define.alias("artdeco-button/components/artdeco-button","msg-multisend/components/artdeco-button")
define.alias("artdeco-card/components/artdeco-card-image","msg-multisend/components/artdeco-card-image")
define.alias("artdeco-card/components/artdeco-card","msg-multisend/components/artdeco-card")
define.alias("artdeco-modal/components/artdeco-confirmation-dialog","msg-multisend/components/artdeco-confirmation-dialog")
define.alias("artdeco-dropdown/components/artdeco-dropdown-content","msg-multisend/components/artdeco-dropdown-content")
define.alias("artdeco-dropdown/components/artdeco-dropdown-header","msg-multisend/components/artdeco-dropdown-header")
define.alias("artdeco-dropdown/components/artdeco-dropdown-item","msg-multisend/components/artdeco-dropdown-item")
define.alias("artdeco-dropdown/components/artdeco-dropdown-trigger","msg-multisend/components/artdeco-dropdown-trigger")
define.alias("artdeco-dropdown/components/artdeco-dropdown","msg-multisend/components/artdeco-dropdown")
define.alias("artdeco-hoverables/components/artdeco-hoverable-content","msg-multisend/components/artdeco-hoverable-content")
define.alias("artdeco-hoverables/components/artdeco-hoverable-trigger","msg-multisend/components/artdeco-hoverable-trigger")
define.alias("artdeco-inline-feedback/components/artdeco-inline-feedback","msg-multisend/components/artdeco-inline-feedback")
define.alias("artdeco-loader/components/artdeco-loader","msg-multisend/components/artdeco-loader")
define.alias("artdeco-modal/components/container","msg-multisend/components/artdeco-modal-container")
define.alias("artdeco-modal/components/artdeco-modal-content","msg-multisend/components/artdeco-modal-content")
define.alias("artdeco-modal/components/artdeco-modal-footer","msg-multisend/components/artdeco-modal-footer")
define.alias("artdeco-modal/components/artdeco-modal-header","msg-multisend/components/artdeco-modal-header")
define.alias("artdeco-modal/components/artdeco-modal","msg-multisend/components/artdeco-modal")
define.alias("artdeco-notification-badge/components/artdeco-notification-badge","msg-multisend/components/artdeco-notification-badge")
define.alias("artdeco-pill/components/artdeco-pill-choice-group","msg-multisend/components/artdeco-pill-choice-group")
define.alias("artdeco-pill/components/artdeco-pill-choice","msg-multisend/components/artdeco-pill-choice")
define.alias("artdeco-pill/components/artdeco-pill-dismiss","msg-multisend/components/artdeco-pill-dismiss")
define.alias("artdeco-pill/components/artdeco-pill-input","msg-multisend/components/artdeco-pill-input")
define.alias("artdeco-pill/components/artdeco-pill-link","msg-multisend/components/artdeco-pill-link")
define.alias("artdeco-pill/components/artdeco-pill-toggle","msg-multisend/components/artdeco-pill-toggle")
define.alias("artdeco-toast/components/artdeco-toast-item","msg-multisend/components/artdeco-toast-item")
define.alias("artdeco-toast/components/artdeco-toasts","msg-multisend/components/artdeco-toasts")
define.alias("ember-vector-images/components/custom-image","msg-multisend/components/custom-image")
define.alias("ember-wormhole/components/ember-wormhole","msg-multisend/components/ember-wormhole")
define.alias("ember-vector-images/components/lazy-background","msg-multisend/components/lazy-background")
define.alias("ember-vector-images/components/lazy-image","msg-multisend/components/lazy-image")
define.alias("artdeco-icons-web/components/linkedin-logo","msg-multisend/components/linkedin-logo")
define("msg-multisend/components/multi-send",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/helper","msg-shared/utils/view-data-helpers","msg-typeahead/viewdata/graphql-possible-recipient-viewdata","msg-shared/utils/constants","global-utils/utils/scroll-to-element","global-helpers/helpers/name","tracked-built-ins","@ember/service","ember-lifeline","@glimmer/tracking","@glimmer/component","ember","@ember/object","@ember/destroyable","@ember/utils","ember-set-helper/helpers/set","artdeco-modal/components/artdeco-modal","@ember/render-modifiers/modifiers/did-update","artdeco-button/components/artdeco-button","ember-cli-pemberly-i18n/helpers/t","global-helpers/helpers/sum","msg-multisend/components/social-share","@ember/component","@ember/modifier","global-modifiers/modifiers/focus","hue-web-icons/components/icon","artdeco-loader/components/artdeco-loader","msg-typeahead/components/possible-recipient-presenter","global-helpers/helpers/includes","artdeco-inline-feedback/components/artdeco-inline-feedback","ember-cli-pemberly-tracking/modifiers/track-interaction","global-helpers/helpers/gt","asset-loader/components/asset-loader","rsvp","ember-test-waiters"],(function(e,t,n,i,s,l,r,o,a,d,c,m,u,p,h,g,f,b,y,v,_,S,w,T,R,k,M,x,P,C,D,U,E,O,G,j,z,A,F,L,B){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var N,q,I,H,V,W,Y,J,K,Q,X,Z,$,ee,te,ne,ie,se,le,re,oe,ae
const{GROUP_THREADS:de}=d.MESSAGE_TYPEAHEAD_RESULT_TYPES,ce=(0,B.buildWaiter)("message-send")
let me=(0,P.setComponentTemplate)((0,l.createTemplateFactory)({id:"Rs9ncL/J",block:'[[[1,"\\n"],[1,"    "],[8,[32,0],[[4,[32,1],[[30,0,["fetchSuggestedRecipients"]],[30,0,["multiSend","isMultiSendModalOpen"]]],null]],[["@isOpen","@size","@dismissModal","@modalClasses"],[[30,0,["multiSend","isMultiSendModalOpen"]],"large",[30,0,["closeMultiSend"]],[29,["msg-multisend__modal ",[52,[51,[30,0,["showSendToGroupForm"]]],"full-height"]]]]],[["default"],[[[[1,"\\n      "],[8,[30,1,["artdeco-modal-header"]],null,[["@classNames"],[[29,["display-flex ",[52,[30,0,["hasSocialShare"]],"msg-multisend__modal--no-header-divider"]]]]],[["default"],[[[[1,"\\n"],[41,[30,0,["showSendToGroupForm"]],[[[1,"          "],[8,[32,2],[[4,[32,3],["click",[30,0,["closeSendToGroup"]]],null]],[["@class","@circle","@color","@icon","@type","@controlType","@tabindex"],["mr3",true,"muted","arrow-left","tertiary","button","1"]],null],[1,"\\n          "],[10,0],[12],[1,"\\n            "],[10,2],[14,1,"multi-send-modal-send-to-group-header"],[14,0,"t-16 t-bold"],[12],[1,"\\n              "],[1,[28,[32,4],["i18n_send_to_group_title","msg-multisend/components/multi-send"],[["names"],[[30,0,["selectedRecipientNames"]]]]]],[1,"\\n            "],[13],[1,"\\n            "],[10,2],[14,0,"t-12 t-black--light"],[12],[1,"\\n              "],[1,[28,[32,4],["i18n_send_to_group_subtitle","msg-multisend/components/multi-send"],[["numRecipients"],[[28,[32,5],[[30,0,["selectedRecipients","length"]],1],null]]]]],[1,"\\n            "],[13],[1,"\\n          "],[13],[1,"\\n"]],[]],[[[1,"          "],[10,"h2"],[14,1,"multi-send-modal-header"],[12],[1,"\\n"],[41,[30,0,["multiSend","headerTitle"]],[[[1,"              "],[1,[30,0,["multiSend","headerTitle"]]],[1,"\\n"]],[]],[[[41,[30,0,["postAuthor"]],[[[1,"              "],[1,[28,[32,4],["i18n_sendPost","msg-multisend/components/multi-send"],[["postAuthor"],[[30,0,["postAuthor"]]]]]],[1,"\\n"]],[]],[[[1,"              "],[1,[28,[32,4],["i18n_sendPostNoAuthor","msg-multisend/components/multi-send"],null]],[1,"\\n            "]],[]]]],[]]],[1,"          "],[13],[1,"\\n"]],[]]],[1,"      "]],[]]]]],[1,"\\n      "],[8,[30,1,["artdeco-modal-content"]],[[16,0,[29,["msg-multisend__modal-content full-height\\n          ",[52,[30,0,["showSendToGroupForm"]],"hidden"]]]]],null,[["default"],[[[[1,"\\n"],[41,[30,0,["hasSocialShare"]],[[[1,"          "],[10,"h5"],[14,0,"mb2"],[12],[1,[28,[32,4],["i18n_send_on_linkedin","msg-multisend/components/multi-send"],null]],[13],[1,"\\n"]],[]],null],[1,"\\n        "],[10,0],[14,0,"relative"],[12],[1,"\\n          "],[10,"label"],[14,"for","multisend-typeahead"],[14,0,"visually-hidden"],[12],[1,"\\n            "],[1,[28,[32,4],["i18n_typeahead_label","msg-multisend/components/multi-send"],null]],[1,"\\n          "],[13],[1,"\\n          "],[8,[32,6],[[24,1,"multisend-typeahead"],[24,0,"mb4"],[16,"placeholder",[28,[32,4],["i18n_typeahead_placeholder","msg-multisend/components/multi-send"],null]],[24,"role","combobox"],[24,"aria-controls","multisend-recipient-results-container"],[24,"aria-expanded","true"],[4,[32,3],["input",[30,0,["debounceFetchRecipients"]]],null],[4,[32,7],null,null]],null,null],[1,"\\n"],[41,[30,0,["searchTerm"]],[[[1,"            "],[11,"button"],[24,0,"msg-multisend__typeahead-cancel-icon"],[24,4,"button"],[4,[32,3],["click",[30,0,["clearTypeaheadSearch"]]],null],[12],[1,"\\n              "],[8,[32,8],null,[["@type","@size","@name"],["system","small","close"]],null],[1,"\\n            "],[13],[1,"\\n"]],[]],null],[1,"        "],[13],[1,"\\n        "],[10,0],[14,1,"multisend-recipient-results-container"],[12],[1,"\\n"],[41,[30,0,["isLoading"]],[[[1,"            "],[8,[32,9],null,[["@size","@a11yText"],["small",[28,[32,4],["i18n_loading","msg-multisend/components/multi-send"],null]]],null],[1,"\\n"]],[]],[[[41,[30,0,["searchTerm"]],[[[41,[30,0,["typeaheadRecipients","length"]],[[[42,[28,[31,3],[[28,[31,3],[[30,0,["typeaheadRecipients"]]],null]],null],null,[[[1,"                  "],[8,[32,10],null,[["@index","@viewData","@selectPersonResult","@isSelectedRecipient","@isMultiSend"],[[30,3],[30,2],[30,0,["selectPossibleRecipient"]],[28,[32,11],[[30,0,["selectedRecipientUrns"]],[30,2,["entityUrn"]]],null],true]],null],[1,"\\n"]],[2,3]],null]],[]],[[[1,"                "],[8,[32,12],null,[["@message"],[[28,[32,4],["i18n_no_results","msg-multisend/components/multi-send"],null]]],null],[1,"\\n"]],[]]]],[]],[[[41,[30,0,["selectedRecipients","length"]],[[[1,"                "],[10,0],[14,0,"mb2"],[12],[1,"\\n                  "],[10,0],[14,0,"display-flex justify-space-between"],[12],[1,"\\n                    "],[10,2],[14,0,"t-14 t-black t-normal"],[12],[1,"\\n                      "],[1,[28,[32,4],["i18n_selected","msg-multisend/components/multi-send"],null]],[1,"\\n                    "],[13],[1,"\\n"],[41,[51,[30,0,["isMultiSendProminentCreateGroupEnabled"]]],[[[1,"                      "],[8,[32,2],[[16,"aria-label",[28,[32,4],["i18n_create_group","msg-multisend/components/multi-send"],null]],[4,[32,3],["click",[30,0,["openSendToGroup"]]],null],[4,[32,13],["create_group"],null]],[["@type","@size","@text","@disabled"],["tertiary",1,[28,[32,4],["i18n_create_group","msg-multisend/components/multi-send"],null],[30,0,["disableSendToGroup"]]]],null],[1,"\\n"]],[]],null],[1,"                  "],[13],[1,"\\n"],[42,[28,[31,3],[[28,[31,3],[[30,0,["selectedRecipients"]]],null]],null],null,[[[1,"                    "],[8,[32,10],null,[["@index","@viewData","@selectPersonResult","@isSelectedRecipient","@isMultiSend","@customControlName"],[[30,5],[30,4],[30,0,["selectPossibleRecipient"]],true,true,"deselect"]],null],[1,"\\n"]],[4,5]],null],[1,"                "],[13],[1,"\\n"]],[]],null],[42,[28,[31,3],[[28,[31,3],[[30,0,["possibleRecipientsToShow"]]],null]],null],null,[[[1,"                "],[8,[32,10],null,[["@index","@viewData","@selectPersonResult","@isSelectedRecipient","@isMultiSend","@customControlName"],[[30,7],[30,6],[30,0,["selectPossibleRecipient"]],false,true,"suggested_select"]],null],[1,"\\n"]],[6,7]],null]],[]]]],[]]],[1,"        "],[13],[1,"\\n      "]],[]]]]],[1,"\\n"],[41,[30,0,["showFooter"]],[[[1,"        "],[8,[30,1,["artdeco-modal-footer"]],null,null,[["default"],[[[[1,"\\n"],[41,[30,0,["showSocialShare"]],[[[1,"            "],[8,[32,14],null,[["@shareUrl","@socialShareButtonClickTrackingCallback"],[[30,0,["multiSend","update","socialContent","shareUrl"]],[30,0,["multiSend","socialShareButtonClickTrackingCallback"]]]],null],[1,"\\n"]],[]],[[[1,"            "],[8,[32,15],null,[["@bundle"],["msg-ui"]],[["resolved"],[[[[1,"\\n"],[44,[[28,[30,8,["component"]],["msg-form/base-form-feature"],null]],[[[1,"                  "],[8,[30,9],null,[["@isMessagingExternalSendFlow","@overridePlaceholder","@submitMessage","@update","@externallyValid","@prefilledMessage","@composeIsFullyExpanded"],[true,[28,[32,4],["i18n_write_a_message","msg-multisend/components/multi-send"],null],[30,0,["submitMessage"]],[30,0,["multiSend","update"]],[30,0,["enableMultiSend"]],[30,0,["multiSend","prefilledMessage"]],[30,0,["showSendToGroupForm"]]]],[["default"],[[[[1,"\\n                    "],[10,0],[15,0,[29,["msg-multisend__msg-form\\n                        ",[52,[30,0,["hideMessageContainer"]]," hidden"]]]],[12],[1,"\\n                      "],[8,[30,10,["messageContentContainerPresenter"]],[[24,0,"msg-form__message-texteditor relative flex-grow-1 display-flex"]],null,null],[1,"\\n                      "],[10,0],[14,0,"msg-form__multisend-preview t-12 t-black--light t-normal"],[12],[1,"\\n                        "],[8,[32,8],[[24,0,"msg-multisend__attachment-icon"]],[["@type","@size","@name"],["system","small","newspaper"]],null],[1,[30,0,["attachmentPreviewLabel"]]],[1,"\\n                      "],[13],[1,"\\n                    "],[13],[1,"\\n\\n                    "],[10,0],[14,0,"align-items-center msg-multisend__send-controls"],[12],[1,"\\n"],[41,[30,0,["isMultiSendProminentCreateGroupEnabled"]],[[[41,[30,0,["showSendAsGroupButton"]],[[[1,"                          "],[8,[30,10,["sendControlsPresenter"]],[[4,[32,3],["click",[28,[32,16],[[30,0],"sendingToGroup",true],null]],null],[4,[32,13],["send_as_group"],null]],[["@buttonClass","@customSendButtonText"],["artdeco-button artdeco-button--secondary",[28,[32,4],["i18n_send_message_as_group","msg-multisend/components/multi-send"],null]]],null],[1,"\\n"]],[]],null],[1,"                        "],[8,[30,10,["sendControlsPresenter"]],[[24,0,"ml2"],[4,[32,13],["send"],null]],[["@buttonClass","@customSendButtonText"],["artdeco-button artdeco-button--primary",[52,[28,[32,17],[[30,0,["selectedRecipients","length"]],1],null],[28,[32,4],["i18n_send_message_separately","msg-multisend/components/multi-send"],null],[28,[32,4],["i18n_send_message","msg-multisend/components/multi-send"],null]]]],null],[1,"\\n"]],[]],[[[1,"                        "],[8,[30,10,["sendControlsPresenter"]],[[24,0,"flex-grow-1"],[4,[32,13],[[52,[30,0,["showSendToGroupForm"]],"send_as_group","send"]],null]],[["@buttonClass","@customSendButtonText"],["artdeco-button artdeco-button--primary msg-multisend__send-button",[52,[30,0,["showSendToGroupForm"]],[28,[32,4],["i18n_send_message_as_group","msg-multisend/components/multi-send"],null],[52,[28,[32,17],[[30,0,["selectedRecipients","length"]],1],null],[28,[32,4],["i18n_send_message_separately","msg-multisend/components/multi-send"],null],[28,[32,4],["i18n_send_message","msg-multisend/components/multi-send"],null]]]]],null],[1,"\\n"]],[]]],[1,"                    "],[13],[1,"\\n                  "]],[10]]]]],[1,"\\n"]],[9]]],[1,"              "]],[8]]]]],[1,"\\n"]],[]]],[1,"        "]],[]]]]],[1,"\\n"]],[]],null],[1,"    "]],[1]]]]],[1,"\\n  "]],["modal","recipient","index","recipient","index","recipient","index","resolved","BaseFormFeature","components"],false,["unless","if","each","-track-array","let"]]',moduleName:"msg-multisend/components/multi-send.gjs",scope:()=>[w.default,T.default,R.default,C.on,k.default,M.default,P.Input,D.default,U.default,E.default,O.default,G.default,j.default,z.default,x.default,F.default,S.default,A.default],isStrictMode:!0}),(N=(0,p.inject)("message-button@multi-send"),q=(0,p.inject)("msg-data@data-manager"),I=(0,p.inject)("i18n"),H=(0,p.inject)("persistent-toast-manager@persistent-toast-manager"),V=(0,p.inject)("formatter"),W=(0,p.inject)("tracking"),Y=(0,p.inject)("lix"),J=class e extends f.default{get postAuthor(){var e,t,n,i,s,l,r
return(null===(e=this.multiSend.update)||void 0===e||null===(t=e.actor)||void 0===t||null===(n=t.name)||void 0===n?void 0:n.text)||(null===(i=this.multiSend.update)||void 0===i||null===(s=i.content)||void 0===s||null===(l=s.actor)||void 0===l||null===(r=l.name)||void 0===r?void 0:r.text)}get selectedRecipientNames(){return[...this.selectedRecipients.map((e=>(0,m.getName)(e.profileAPIModel))),{firstName:this.i18n.lookupTranslation(e,"i18n_you")(),isSelf:!0}]}get postAuthorProfileUrn(){var e,t,n,i,s,l,r,o,a,d,c,m,u,p
if(!this.isReplyToAuthorV2Enabled)return
const{update:h}=this.multiSend,g=(null==h||null===(e=h.content)||void 0===e?void 0:e.actor)||(null==h||null===(t=h.content)||void 0===t||null===(n=t.announcementComponent)||void 0===n?void 0:n.actor)||(null==h?void 0:h.actor),f=(null==g?void 0:g.name)||(null==g?void 0:g.image)
return(null==f||null===(i=f.attributes)||void 0===i||null===(s=i[0])||void 0===s||null===(l=s.miniProfile)||void 0===l?void 0:l.entityUrn)||(null==f||null===(r=f.attributesV2)||void 0===r||null===(o=r[0])||void 0===o||null===(a=o.detailData)||void 0===a||null===(d=a.profileFullName)||void 0===d?void 0:d.entityUrn)||(null==f||null===(c=f.attributes)||void 0===c||null===(m=c[0])||void 0===m||null===(u=m.detailData)||void 0===u||null===(p=u.nonEntityProfilePicture)||void 0===p?void 0:p.profileUrn)}get possibleRecipientsToShow(){return this.possibleRecipients.filter((e=>!this.selectedRecipients.includes(e)))}get selectedRecipientUrns(){return this.selectedRecipients.map((e=>e.entityUrn))}get showSendAsGroupButton(){return this.selectedRecipients.length>=2&&!this.selectedRecipients.some((e=>e.isGroupTypeaheadResult))}get isReplyToAuthorV2Enabled(){return this.lix.getTreatmentIsEnabled("voyager.web.messaging-reply-to-author-v2")}get isMultiSendProminentCreateGroupEnabled(){return this.lix.getTreatmentIsEnabled("voyager.web.messaging-multi-send-prominent-create-group")}get disableSendToGroup(){const e=this.selectedRecipients.filter((e=>e.recipientType===de))
return this.selectedRecipients.length<2||e.length}get hasSocialShare(){return!!this.multiSend.showSocialShare}get showSocialShare(){return this.hideMessageContainer&&this.hasSocialShare}get sendToCoworkersEnabled(){return this.lix.getTreatmentIsEnabled("voyager.web.messaging-multisend-coworker-mr")}constructor(){super(...arguments);(0,t.default)(this,"multiSend",K,this);(0,t.default)(this,"msgDataManager",Q,this);(0,t.default)(this,"i18n",X,this);(0,t.default)(this,"persistentToastManager",Z,this);(0,t.default)(this,"formatter",$,this);(0,t.default)(this,"tracking",ee,this);(0,t.default)(this,"lix",te,this);(0,t.default)(this,"searchTerm",ne,this);(0,t.default)(this,"isLoading",ie,this);(0,t.default)(this,"showSendToGroupForm",se,this);(0,t.default)(this,"sendingToGroup",le,this);(0,t.default)(this,"possibleRecipients",re,this);(0,t.default)(this,"selectedRecipients",oe,this);(0,t.default)(this,"typeaheadRecipients",ae,this)
this.fetchSuggestedRecipients()}selectPossibleRecipient(t){const n=this.selectedRecipients.findIndex((e=>e.entityUrn===t.entityUrn))
if(-1!==n)this._removeRecipient(n)
else{if(10===this.selectedRecipients.length){const t=this.i18n.lookupTranslation(e,"i18n_maximum_selected_recipients")([{maxRecipients:10}])
this.persistentToastManager.notice({message:t})
return}this._addRecipient(t)}const i=document.querySelector("#multisend-typeahead");(0,c.default)(i)}debounceFetchRecipients(e){let{target:{value:t}}=e
this.searchTerm=t
if(this.searchTerm){this.isLoading=!0
this.tracking.fireInteractionEvent("begin_recipient_search")
if(b.default.testing)this._fetchTypeaheadRecipients(this.searchTerm)
else{const e=200;(0,h.debounceTask)(this,"_fetchTypeaheadRecipients",this.searchTerm,e)}}else this.typeaheadRecipients=new u.TrackedArray}clearTypeaheadSearch(){const e=document.querySelector("#multisend-typeahead")
e&&(e.value="")
this.typeaheadRecipients=new u.TrackedArray
this.searchTerm=""}closeMultiSend(){this.isMultiSendProminentCreateGroupEnabled||(this.showSendToGroupForm=!1)
this.selectedRecipients=new u.TrackedArray
this.clearTypeaheadSearch()
this.multiSend.closeMultiSend()}_removeRecipient(e){this.selectedRecipients.splice(e,1)
this.clearTypeaheadSearch()}_addRecipient(e){this.selectedRecipients.unshift(e)
this.clearTypeaheadSearch()}get hideMessageContainer(){return!this.selectedRecipients.length}get showFooter(){return!this.searchTerm}get attachmentPreviewLabel(){var t
const n=this.postAuthor,i=null===(t=this.multiSend.update)||void 0===t?void 0:t.content
if(n)return this.i18n.lookupTranslation(e,"i18n_postByAuthor")([{postAuthor:n}])
if(i){var s
return null===(s=i.title)||void 0===s?void 0:s.text}return this.i18n.lookupTranslation(e,"i18n_content")}get enableMultiSend(){return!!this.selectedRecipients.length}openSendToGroup(){this.tracking.firePageViewEvent("flagship3_messaging_multisend_group")
this.showSendToGroupForm=!0}closeSendToGroup(){this.showSendToGroupForm=!1}fetchSuggestedRecipients(){if(this.multiSend.isMultiSendModalOpen){this.isLoading=!0
this.msgDataManager.fetchSuggestedRecipients([],this.postAuthorProfileUrn,this.multiSend.preselectedRecipientUrns).then((t=>{(0,v.isDestroying)(this)||(this.possibleRecipients=t.reduce(((n,i,s)=>{const{suggestedRecipients:l}=i
let r;(0,_.isEmpty)(this.multiSend.preselectedRecipientUrns)&&2===t.length&&0===s&&(r=this.i18n.lookupTranslation(e,"i18n_author"))
return[...n,...l.map((e=>{var t
const n=new a.default({possibleRecipient:e,formatter:this.formatter,label:r})
null!==(t=this.multiSend.preselectedRecipientUrns)&&void 0!==t&&t.includes(n.entityUrn)&&this.selectedRecipients.length<10&&this.selectedRecipients.unshift(n)
return n}))]}),[]))})).finally((()=>{(0,v.isDestroying)(this)||(this.isLoading=!1)}))}}_fetchTypeaheadRecipients(e){const t=["CONNECTIONS","GROUP_THREADS"]
this.sendToCoworkersEnabled&&t.push("COWORKERS")
this.msgDataManager.fetchTypeaheadResults(e,t).then((e=>{(0,v.isDestroying)(this)||e&&(this.typeaheadRecipients=e.map((e=>new a.default({possibleRecipient:e,formatter:this.formatter}))))})).finally((()=>{(0,v.isDestroying)(this)||(this.isLoading=!1)}))}submitMessage(e){var t,n
e.attributedBody.text&&this.tracking.fireInteractionEvent("compose_custom")
const i={renderContent:[],messageRequestContextByRecipient:[]}
i.renderContent.push({hostUrnData:{hostUrn:(null===(t=this.multiSend.update)||void 0===t?void 0:t.dashEntityUrn)||(null===(n=this.multiSend.update)||void 0===n?void 0:n.entityUrn),type:"FEED_UPDATE"}})
return this.showSendToGroupForm||this.isMultiSendProminentCreateGroupEnabled&&this.sendingToGroup?this._sendToGroup(e,i):this._sendSeparately(e,i)}_sendToGroup(e,t){this.sendToCoworkersEnabled&&this.selectedRecipients.forEach((e=>{if(e.contextEntityUrn){const n={contextEntityUrn:e.contextEntityUrn,hostRecipientUrn:e.entityUrn}
t.messageRequestContextByRecipient.push(n)}}))
return this.msgDataManager.getMailbox().then((e=>e.createDraftConversation(this.selectedRecipients.map((e=>(0,o.getProfileDashUrn)(e.profileAPIModel)))))).then((n=>{this.isDestroying||this._sendMessageAndHandleResponse(n.clientId,e.attributedBody,t)}))}_sendSeparately(e,t){const n=ce.beginAsync()
return Promise.all(this.selectedRecipients.map((n=>n.recipientType===de?this.msgDataManager.fetchConversation(n.groupThreadConversationId).then((n=>{if(!(0,v.isDestroying)(this))return n.entityUrn?this._sendMessageAndHandleResponse(n.entityUrn,e.attributedBody,t):(0,L.resolve)()})):this.msgDataManager.fetchLatestConversationByRecipients([n.entityUrn]).then((i=>{if((0,v.isDestroying)(this))return
if(!i)return(0,L.resolve)()
const s=i.entityUrn??i.clientId,l={...t}
if(this.sendToCoworkersEnabled&&n.contextEntityUrn){const e={contextEntityUrn:n.contextEntityUrn,hostRecipientUrn:n.entityUrn}
l.messageRequestContextByRecipient=[e]}return this._sendMessageAndHandleResponse(s,e.attributedBody,l)}))))).finally((()=>{ce.endAsync(n)}))}_sendMessageAndHandleResponse(e,t,n){return this.msgDataManager.sendMessage(e,t,n,!0).then((e=>{let{conversation:t}=e
if((0,v.isDestroying)(this))return
const{entityUrn:n}=t
return this.msgDataManager.fetchMailboxConversation(n)})).then((e=>{if(!(0,v.isDestroying)(this))return e?this._onMessageSendSuccess(e):e})).catch((e=>{if((0,v.isDestroying)(this))throw e
this._onMessageSendFail(e)
throw e})).finally((()=>{(0,v.isDestroying)(this)||this.closeMultiSend()}))}_onMessageSendFail(t){const n=this.i18n.lookupTranslation(e,"i18n_send_failed_message")
this.persistentToastManager.error({message:n})
return t}_onMessageSendSuccess(t){var n,i
const s=this.i18n.lookupTranslation(e,"i18n_send_success_message")
null===(n=(i=this.multiSend).afterSend)||void 0===n||n.call(i)
this.persistentToastManager.success({message:s})
return t}},K=(0,i.default)(J.prototype,"multiSend",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=(0,i.default)(J.prototype,"msgDataManager",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=(0,i.default)(J.prototype,"i18n",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=(0,i.default)(J.prototype,"persistentToastManager",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$=(0,i.default)(J.prototype,"formatter",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ee=(0,i.default)(J.prototype,"tracking",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),te=(0,i.default)(J.prototype,"lix",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ne=(0,i.default)(J.prototype,"searchTerm",[g.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ie=(0,i.default)(J.prototype,"isLoading",[g.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),se=(0,i.default)(J.prototype,"showSendToGroupForm",[g.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),le=(0,i.default)(J.prototype,"sendingToGroup",[g.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),re=(0,i.default)(J.prototype,"possibleRecipients",[g.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u.TrackedArray}}),oe=(0,i.default)(J.prototype,"selectedRecipients",[g.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u.TrackedArray}}),ae=(0,i.default)(J.prototype,"typeaheadRecipients",[g.tracked],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return new u.TrackedArray}}),(0,i.default)(J.prototype,"selectPossibleRecipient",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"selectPossibleRecipient"),J.prototype),(0,i.default)(J.prototype,"debounceFetchRecipients",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"debounceFetchRecipients"),J.prototype),(0,i.default)(J.prototype,"clearTypeaheadSearch",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"clearTypeaheadSearch"),J.prototype),(0,i.default)(J.prototype,"closeMultiSend",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"closeMultiSend"),J.prototype),(0,i.default)(J.prototype,"openSendToGroup",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"openSendToGroup"),J.prototype),(0,i.default)(J.prototype,"closeSendToGroup",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"closeSendToGroup"),J.prototype),(0,i.default)(J.prototype,"fetchSuggestedRecipients",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"fetchSuggestedRecipients"),J.prototype),(0,i.default)(J.prototype,"submitMessage",[y.action],Object.getOwnPropertyDescriptor(J.prototype,"submitMessage"),J.prototype),J))
e.default=me}))
define("msg-multisend/components/social-share-button",["exports","@ember/template-factory","@ember/helper","@ember/component/template-only","@ember/component","artdeco-button/components/artdeco-button","@ember/modifier"],(function(e,t,n,i,s,l,r){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var o=(0,s.setComponentTemplate)((0,t.createTemplateFactory)({id:"ulj/T8QL",block:'[[[1,"\\n  "],[8,[32,0],[[17,1],[4,[32,1],["click",[30,5]],null]],[["@type","@controlType","@icon","@ariaLabel","@text"],["tertiary","button",[30,2],[30,3],[30,4]]],null],[1,"\\n"]],["&attrs","@icon","@ariaLabel","@text","@onClick"],false,[]]',moduleName:"msg-multisend/components/social-share-button.gjs",scope:()=>[l.default,r.on],isStrictMode:!0}),(0,i.default)("social-share-button","SocialShareButton"))
e.default=o}))
define("msg-multisend/components/social-share",["exports","@babel/runtime/helpers/esm/initializerDefineProperty","@babel/runtime/helpers/esm/defineProperty","@babel/runtime/helpers/esm/applyDecoratedDescriptor","@babel/runtime/helpers/esm/initializerWarningHelper","@ember/template-factory","@ember/component","feed-utils/utils/share-via","@glimmer/component","@ember/service","@ember/object","msg-multisend/components/social-share-button","ember-cli-pemberly-i18n/helpers/t"],(function(e,t,n,i,s,l,r,o,a,d,c,m,u){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
var p,h,g,f,b,y,v
const _="COPY_LINK"
let S=(0,r.setComponentTemplate)((0,l.createTemplateFactory)({id:"9VW04C5r",block:'[[[1,"\\n"],[1,"    "],[10,"ul"],[14,0,"display-flex list-style-none m1"],[12],[1,"\\n      "],[10,"li"],[12],[1,"\\n        "],[8,[32,0],null,[["@icon","@ariaLabel","@text","@onClick"],["link",[28,[32,1],["i18n_social_share_copy_link_to_post","msg-multisend/components/social-share"],null],[28,[32,1],["i18n_social_share_copy_link_to_post","msg-multisend/components/social-share"],null],[30,0,["copyLink"]]]],null],[1,"\\n      "],[13],[1,"\\n    "],[13],[1,"\\n  "]],[],false,[]]',moduleName:"msg-multisend/components/social-share.gjs",scope:()=>[m.default,u.default],isStrictMode:!0}),(p=(0,d.inject)("i18n"),h=(0,d.inject)("global-services@clipboard"),g=(0,d.inject)("persistent-toast-manager@persistent-toast-manager"),f=class extends a.default{constructor(){super(...arguments);(0,t.default)(this,"i18n",b,this);(0,t.default)(this,"clipboard",y,this);(0,t.default)(this,"persistentToastManager",v,this)}copyLink(){var e,t
const{shareUrl:n}=this.args
null===(e=(t=this.args).socialShareButtonClickTrackingCallback)||void 0===e||e.call(t,_);(0,o.default)(this.clipboard,this.i18n,this.persistentToastManager,n)}},b=(0,i.default)(f.prototype,"i18n",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=(0,i.default)(f.prototype,"clipboard",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=(0,i.default)(f.prototype,"persistentToastManager",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),(0,i.default)(f.prototype,"copyLink",[c.action],Object.getOwnPropertyDescriptor(f.prototype,"copyLink"),f.prototype),f))
e.default=S}))
define("msg-multisend/config/environment",["exports"],(function(e){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
let t
try{const e="msg-multisend/config/environment",n=document.querySelector('meta[name="'+e+'"]').getAttribute("content")
t=JSON.parse(unescape(n))}catch(e){t={}}var n=t
e.default=n}))
define.alias("ember-truth-helpers/helpers/and","msg-multisend/helpers/and")
define.alias("ember-holy-futuristic-template-namespacing-batman/helpers/-translate-dynamic-2","msg-multisend/helpers/ember-holy-futuristic-template-namespacing-batman-translate-dynamic-2")
define.alias("ember-truth-helpers/helpers/eq","msg-multisend/helpers/eq")
define.alias("ember-cli-pemberly-i18n/helpers/format-number","msg-multisend/helpers/format-number")
define.alias("ember-truth-helpers/helpers/gt","msg-multisend/helpers/gt")
define.alias("ember-truth-helpers/helpers/gte","msg-multisend/helpers/gte")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-name","msg-multisend/helpers/hue-web-artdeco-icon-migration-runtime")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-v2","msg-multisend/helpers/hue-web-artdeco-li-icon-migration-runtime-v2")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-to-icon-path","msg-multisend/helpers/hue-web-artdeco-li-icon-migration-runtime")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/helpers/convert-argument","msg-multisend/helpers/hue-web-artdeco-migration-runtime")
define.alias("ember-truth-helpers/helpers/is-array","msg-multisend/helpers/is-array")
define.alias("ember-truth-helpers/helpers/is-empty","msg-multisend/helpers/is-empty")
define.alias("ember-truth-helpers/helpers/is-equal","msg-multisend/helpers/is-equal")
define.alias("artdeco-icons-web/helpers/li-icon","msg-multisend/helpers/li-icon")
define.alias("ember-async-data/helpers/load","msg-multisend/helpers/load")
define.alias("ember-truth-helpers/helpers/lt","msg-multisend/helpers/lt")
define.alias("ember-truth-helpers/helpers/lte","msg-multisend/helpers/lte")
define.alias("ember-truth-helpers/helpers/not-eq","msg-multisend/helpers/not-eq")
define.alias("ember-truth-helpers/helpers/not","msg-multisend/helpers/not")
define.alias("ember-truth-helpers/helpers/or","msg-multisend/helpers/or")
define.alias("ember-app-scheduler/helpers/route-idle","msg-multisend/helpers/route-idle")
define.alias("ember-set-helper/helpers/set","msg-multisend/helpers/set")
define.alias("ember-cli-pemberly-i18n/helpers/t","msg-multisend/helpers/t")
define.alias("ember-truth-helpers/helpers/xor","msg-multisend/helpers/xor")
define.alias("ember-uuid","msg-multisend/index")
define("msg-multisend/initializers/icons",["exports","artdeco-icons-web/src/icons","msg-multisend/config/environment"],(function(e,t,n){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
e.default=void 0
function i(e){throw e}var s={name:"icons",initialize:function(){const{environment:e,APP:s}=n.default
let l,r
s&&({artdecoCustomSpriteUrl:l,artdecoCustomSpriteName:r}=s)
const o="test"!==e
t.default.load(o,l,r).catch(i)}}
e.default=s}))
define.alias("ember-cli-pemberly-lix/initializers/lix","msg-multisend/initializers/lix")
define.alias("ember-m3/initializers/m3-store","msg-multisend/initializers/m3-store")
define.alias("@ember/render-modifiers/modifiers/did-insert","msg-multisend/modifiers/did-insert")
define.alias("@ember/render-modifiers/modifiers/did-update","msg-multisend/modifiers/did-update")
define.alias("@ember/render-modifiers/modifiers/will-destroy","msg-multisend/modifiers/will-destroy")
define.alias("artdeco-hoverables/services/artdeco-hoverable","msg-multisend/services/artdeco-hoverable")
define.alias("artdeco-modal/services/artdeco-modal","msg-multisend/services/artdeco-modal")
define.alias("artdeco-toast/services/artdeco-toast","msg-multisend/services/artdeco-toast")
define.alias("client-sensor-web/services/client-sensor","msg-multisend/services/client-sensor")
define.alias("ember-date-service/services/date","msg-multisend/services/date")
define.alias("@linkedin/ember-restli-graphql/services/graphql","msg-multisend/services/graphql")
define.alias("@linkedin/ember-pem/services/internal-event-utils","msg-multisend/services/internal-event-utils")
define.alias("@linkedin/ember-pem/services/internal-pem-tracking","msg-multisend/services/internal-pem-tracking")
define.alias("ember-cli-pemberly-lix/services/lix","msg-multisend/services/lix")
define.alias("ember-m3/services/m3-schema-manager","msg-multisend/services/m3-schema-manager")
define.alias("@linkedin/ember-pem/services/pem-response-metadata","msg-multisend/services/pem-response-metadata")
define.alias("@linkedin/ember-pem/services/pem-tracking","msg-multisend/services/pem-tracking")
define.alias("persistent-toast-manager/services/persistent-toast-manager","msg-multisend/services/persistent-toast-manager")
define.alias("ember-cli-pemberly-m3/services/store","msg-multisend/services/store")
define.alias("ember-cli-pemberly-litms/services/tag-manager","msg-multisend/services/tag-manager")
define.alias("@linkedin/ember-pem/services/tracer","msg-multisend/services/tracer")
define.alias("ember-cli-pemberly-litms/services/tracking-adapter-for-tag-manager","msg-multisend/services/tracking-adapter-for-tag-manager")
define("msg-multisend/template-registry",[],(function(){}))
define.alias("ember-async-data/tracked-async-data","msg-multisend/tracked-async-data")
define.alias("client-sensor-web/utils/helpers","msg-multisend/utils/helpers")
define.alias("@linkedin/hue-web-artdeco-migration-runtime/utils/mapping-data","msg-multisend/utils/mapping-data")
define("msg-multisend/utils/uuid-generator",["exports","ember-uuid/utils/uuid-generator"],(function(e,t){"use strict"
Object.defineProperty(e,"__esModule",{value:!0})
Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})
Object.defineProperty(e,"parse",{enumerable:!0,get:function(){return t.parse}})
Object.defineProperty(e,"unparse",{enumerable:!0,get:function(){return t.unparse}})
Object.defineProperty(e,"v1",{enumerable:!0,get:function(){return t.v1}})
Object.defineProperty(e,"v4",{enumerable:!0,get:function(){return t.v4}})}))
define.alias("ember-vector-images/utils/vector-url","msg-multisend/utils/vector-url")

//# sourceMappingURL=engine.map