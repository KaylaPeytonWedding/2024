import{b as ge,d as ue,e as xe}from"./chunk-3BTB2F5Q.js";import{Aa as pe,Ba as B,Ca as h,D as w,Db as be,E as g,Gb as _e,H as F,Ha as u,I as A,Ib as K,J as l,Jb as $,K as I,Ka as le,Kb as _,La as ce,Lb as v,Ma as k,Mb as X,Na as he,O as ie,Oa as U,Ob as ve,P as ne,Pa as S,S as R,Sb as ye,Ta as H,Ua as me,Z as ae,aa as D,ba as o,c as C,da as f,e as m,ea as c,ga as E,h as J,ha as z,ia as Q,ja as M,ka as oe,la as b,lb as q,o as Z,p as x,pa as se,qa as L,ra as re,s as ee,sa as P,ta as T,u as te,ua as de,xb as j,y as N,yb as fe,za as V}from"./chunk-QALNEO3A.js";var Se=0,Y=new g("CdkAccordion"),Ce=(()=>{let e=class e{constructor(){this._stateChanges=new m,this._openCloseAllActions=new m,this.id=`cdk-accordion-${Se++}`,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=l({type:e,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:["multi","multi",H]},exportAs:["cdkAccordion"],features:[u([{provide:Y,useExisting:e}]),z,I]});let n=e;return n})(),He=0,we=(()=>{let e=class e{get expanded(){return this._expanded}set expanded(t){if(this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}constructor(t,i,a){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=a,this._openCloseAllSubscription=C.EMPTY,this.closed=new c,this.opened=new c,this.destroyed=new c,this.expandedChange=new c,this.id=`cdk-accordion-child-${He++}`,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=a.listen((r,s)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===s&&this.id!==r&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}};e.\u0275fac=function(i){return new(i||e)(o(Y,12),o(f),o(j))},e.\u0275dir=l({type:e,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:["expanded","expanded",H],disabled:["disabled","disabled",H]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[u([{provide:Y,useValue:void 0}]),z]});let n=e;return n})(),Ae=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=A({type:e}),e.\u0275inj=w({});let n=e;return n})();var Ne=["body"];function Fe(n,e){}var Re=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ze=["mat-expansion-panel-header","*","mat-action-row"];function Qe(n,e){if(n&1&&de(0,"span",2),n&2){let Pe=pe();M("@indicatorRotate",Pe._getExpandedState())}}var Le=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],Ve=["mat-panel-title","mat-panel-description","*"],W=new g("MAT_ACCORDION"),Ie="225ms cubic-bezier(0.4,0.0,0.2,1)",De={indicatorRotate:K("indicatorRotate",[v("collapsed, void",_({transform:"rotate(0deg)"})),v("expanded",_({transform:"rotate(180deg)"})),X("expanded <=> collapsed, void => collapsed",$(Ie))]),bodyExpansion:K("bodyExpansion",[v("collapsed, void",_({height:"0px",visibility:"hidden"})),v("expanded",_({height:"*",visibility:""})),X("expanded <=> collapsed, void => collapsed",$(Ie))])},Ee=new g("MAT_EXPANSION_PANEL"),Be=(()=>{let e=class e{constructor(t,i){this._template=t,this._expansionPanel=i}};e.\u0275fac=function(i){return new(i||e)(o(ce),o(Ee,8))},e.\u0275dir=l({type:e,selectors:[["ng-template","matExpansionPanelContent",""]]});let n=e;return n})(),Ue=0,Me=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),qe=(()=>{let e=class e extends we{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=q(t)}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,i,a,r,s,O,y){super(t,i,a),this._viewContainerRef=r,this._animationMode=O,this._hideToggle=!1,this.afterExpand=new c,this.afterCollapse=new c,this._inputChanges=new m,this._headerId=`mat-expansion-panel-header-${Ue++}`,this._bodyAnimationDone=new m,this.accordion=t,this._document=s,this._bodyAnimationDone.pipe(te((p,d)=>p.fromState===d.fromState&&p.toState===d.toState)).subscribe(p=>{p.fromState!=="void"&&(p.toState==="expanded"?this.afterExpand.emit():p.toState==="collapsed"&&this.afterCollapse.emit())}),y&&(this.hideToggle=y.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(N(null),x(()=>this.expanded&&!this._portal),ee(1)).subscribe(()=>{this._portal=new ge(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){let t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}};e.\u0275fac=function(i){return new(i||e)(o(W,12),o(f),o(j),o(se),o(me),o(R,8),o(Me,8))},e.\u0275cmp=F({type:e,selectors:[["mat-expansion-panel"]],contentQueries:function(i,a,r){if(i&1&&U(r,Be,5),i&2){let s;k(s=S())&&(a._lazyContent=s.first)}},viewQuery:function(i,a){if(i&1&&he(Ne,5),i&2){let r;k(r=S())&&(a._body=r.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(i,a){i&2&&b("mat-expanded",a.expanded)("_mat-animation-noopable",a._animationMode==="NoopAnimations")("mat-expansion-panel-spacing",a._hasSpacing())},inputs:{disabled:"disabled",expanded:"expanded",hideToggle:"hideToggle",togglePosition:"togglePosition"},outputs:{opened:"opened",closed:"closed",expandedChange:"expandedChange",afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[u([{provide:W,useValue:void 0},{provide:Ee,useExisting:e}]),E,I],ngContentSelectors:ze,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,a){i&1&&(B(Re),h(0),P(1,"div",0,1),V("@bodyExpansion.done",function(s){return a._bodyAnimationDone.next(s)}),P(3,"div",2),h(4,1),L(5,Fe,0,0,"ng-template",3),T(),h(6,2),T()),i&2&&(D(1),M("@bodyExpansion",a._getExpandedState())("id",a.id),Q("aria-labelledby",a._headerId),D(4),M("cdkPortalOutlet",a._portal))},dependencies:[ue],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[De.bodyExpansion]},changeDetection:0});let n=e;return n})();var G=class{},Ke=ye(G),$e=(()=>{let e=class e extends Ke{constructor(t,i,a,r,s,O,y){super(),this.panel=t,this._element=i,this._focusMonitor=a,this._changeDetectorRef=r,this._animationMode=O,this._parentChangeSubscription=C.EMPTY;let p=t.accordion?t.accordion._stateChanges.pipe(x(d=>!!(d.hideToggle||d.togglePosition))):J;this.tabIndex=parseInt(y||"")||0,this._parentChangeSubscription=Z(t.opened,t.closed,p,t._inputChanges.pipe(x(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe(x(()=>t._containsFocus())).subscribe(()=>a.focusVia(i,"program")),s&&(this.expandedHeight=s.expandedHeight,this.collapsedHeight=s.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case 32:case 13:fe(t)||(t.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t);return}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}};e.\u0275fac=function(i){return new(i||e)(o(qe,1),o(ae),o(_e),o(f),o(Me,8),o(R,8),ne("tabindex"))},e.\u0275cmp=F({type:e,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(i,a){i&1&&V("click",function(){return a._toggle()})("keydown",function(s){return a._keydown(s)}),i&2&&(Q("id",a.panel._headerId)("tabindex",a.tabIndex)("aria-controls",a._getPanelId())("aria-expanded",a._isExpanded())("aria-disabled",a.panel.disabled),oe("height",a._getHeaderHeight()),b("mat-expanded",a._isExpanded())("mat-expansion-toggle-indicator-after",a._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",a._getTogglePosition()==="before")("_mat-animation-noopable",a._animationMode==="NoopAnimations"))},inputs:{tabIndex:"tabIndex",expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight"},features:[E],ngContentSelectors:Ve,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator"],[1,"mat-expansion-indicator"]],template:function(i,a){i&1&&(B(Le),P(0,"span",0),h(1),h(2,1),h(3,2),T(),L(4,Qe,1,1,"span",1)),i&2&&(b("mat-content-hide-toggle",!a._showToggle()),D(4),re(4,a._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[De.indicatorRotate]},changeDetection:0});let n=e;return n})(),Ht=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=l({type:e,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]});let n=e;return n})(),jt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=l({type:e,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]});let n=e;return n})(),Ot=(()=>{let e=class e extends Ce{constructor(){super(...arguments),this._ownHeaders=new le,this._hideToggle=!1,this.displayMode="default",this.togglePosition="after"}get hideToggle(){return this._hideToggle}set hideToggle(t){this._hideToggle=q(t)}ngAfterContentInit(){this._headers.changes.pipe(N(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new be(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}};e.\u0275fac=(()=>{let t;return function(a){return(t||(t=ie(e)))(a||e)}})(),e.\u0275dir=l({type:e,selectors:[["mat-accordion"]],contentQueries:function(i,a,r){if(i&1&&U(r,$e,5),i&2){let s;k(s=S())&&(a._headers=s)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,a){i&2&&b("mat-accordion-multi",a.multi)},inputs:{multi:"multi",hideToggle:"hideToggle",displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[u([{provide:W,useExisting:e}]),E]});let n=e;return n})(),Nt=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=A({type:e}),e.\u0275inj=w({imports:[ve,Ae,xe]});let n=e;return n})();export{qe as a,$e as b,Ht as c,jt as d,Ot as e,Nt as f};