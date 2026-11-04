import{G as f,L as v,d as x,X as R,Y as _,bf as $,a5 as w,b as T,a8 as E,D as u,a9 as d,p as N,o as y,c as F,w as P,aZ as V,k as c,i as l,aW as k,g as M,a_ as W}from"./index-028f85e7.js";const L=f("statistic",[v("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),f("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[v("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[f("icon",{verticalAlign:"-0.125em"})]),v("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),v("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[f("icon",{verticalAlign:"-0.125em"})])])]),O=Object.assign(Object.assign({},_.props),{tabularNums:Boolean,label:String,value:[String,Number]}),j=x({name:"Statistic",props:O,setup(s){const{mergedClsPrefixRef:e,inlineThemeDisabled:a,mergedRtlRef:n}=R(s),i=_("Statistic","-statistic",L,$,s,e),o=w("Statistic",n,e),t=T(()=>{const{self:{labelFontWeight:p,valueFontSize:m,valueFontWeight:b,valuePrefixTextColor:g,labelTextColor:h,valueSuffixTextColor:z,valueTextColor:B,labelFontSize:C},common:{cubicBezierEaseInOut:S}}=i.value;return{"--n-bezier":S,"--n-label-font-size":C,"--n-label-font-weight":p,"--n-label-text-color":h,"--n-value-font-weight":b,"--n-value-font-size":m,"--n-value-prefix-text-color":g,"--n-value-suffix-text-color":z,"--n-value-text-color":B}}),r=a?E("statistic",void 0,t,s):void 0;return{rtlEnabled:o,mergedClsPrefix:e,cssVars:a?void 0:t,themeClass:r?.themeClass,onRender:r?.onRender}},render(){var s;const{mergedClsPrefix:e,$slots:{default:a,label:n,prefix:i,suffix:o}}=this;return(s=this.onRender)===null||s===void 0||s.call(this),u("div",{class:[`${e}-statistic`,this.themeClass,this.rtlEnabled&&`${e}-statistic--rtl`],style:this.cssVars},d(n,t=>u("div",{class:`${e}-statistic__label`},this.label||t)),u("div",{class:`${e}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},d(i,t=>t&&u("span",{class:`${e}-statistic-value__prefix`},t)),this.value!==void 0?u("span",{class:`${e}-statistic-value__content`},this.value):d(a,t=>t&&u("span",{class:`${e}-statistic-value__content`},t)),d(o,t=>t&&u("span",{class:`${e}-statistic-value__suffix`},t))))}});function A(s){return new TextEncoder().encode(s).buffer.byteLength}function D(s,e=2){if(s===0)return"0 Bytes";const a=1024,n=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],i=Math.floor(Math.log(s)/Math.log(a));return`${Number.parseFloat((s/a**i).toFixed(e))} ${n[i]}`}const G={"mt-5":"",flex:""},Y=x({__name:"text-statistics",setup(s){const e=N("");return(a,n)=>{const i=W,o=j,t=V;return y(),F(t,null,{default:P(()=>[c(i,{value:l(e),"onUpdate:value":n[0]||(n[0]=r=>k(e)?e.value=r:null),multiline:"",placeholder:"在这里粘贴需要统计的文字",rows:"5"},null,8,["value"]),M("div",G,[c(o,{label:"字符数",value:l(e).length,"flex-1":""},null,8,["value"]),c(o,{label:"空白分隔词段",value:l(e)===""?0:l(e).split(/\s+/).length,"flex-1":""},null,8,["value"]),c(o,{label:"行数",value:l(e)===""?0:l(e).split(/\r\n|\r|\n/).length,"flex-1":""},null,8,["value"]),c(o,{label:"文件字节数",value:l(D)(l(A)(l(e))),"flex-1":""},null,8,["value"])])]),_:1})}}});export{Y as default};
