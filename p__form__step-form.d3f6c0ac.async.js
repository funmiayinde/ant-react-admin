(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8442],{31199:function(V,Z,t){"use strict";var _=t(22122),F=t(28991),f=t(81253),r=t(67294),j=t(62404),C=["fieldProps","min","proFieldProps","max"],x=function(B,R){var d=B.fieldProps,m=B.min,S=B.proFieldProps,v=B.max,s=(0,f.Z)(B,C);return r.createElement(j.Z,(0,_.Z)({mode:"edit",valueType:"digit",fieldProps:(0,F.Z)({min:m,max:v},d),ref:R,filedConfig:{defaultProps:{width:"100%"}},proFieldProps:S},s))};Z.Z=r.forwardRef(x)},64317:function(V,Z,t){"use strict";var _=t(22122),F=t(28991),f=t(81253),r=t(67294),j=t(62404),C=t(22270),x=t(66758),O=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],B=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"],R=r.forwardRef(function(s,T){var G=s.fieldProps,I=s.children,K=s.params,Q=s.proFieldProps,A=s.mode,N=s.valueEnum,H=s.request,b=s.showSearch,J=s.options,z=(0,f.Z)(s,O),$=(0,r.useContext)(x.Z);return r.createElement(j.Z,(0,_.Z)({mode:"edit",valueEnum:(0,C.h)(N),request:H,params:K,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,F.Z)({options:J,mode:A,showSearch:b,getPopupContainer:$.getPopupContainer},G),ref:T,proFieldProps:Q},z),I)}),d=r.forwardRef(function(s,T){var G=s.fieldProps,I=s.children,K=s.params,Q=s.proFieldProps,A=s.mode,N=s.valueEnum,H=s.request,b=s.options,J=(0,f.Z)(s,B),z=(0,F.Z)({options:b,mode:A||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},G),$=(0,r.useContext)(x.Z);return r.createElement(j.Z,(0,_.Z)({mode:"edit",valueEnum:(0,C.h)(N),request:H,params:K,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:(0,F.Z)({getPopupContainer:$.getPopupContainer},z),ref:T,proFieldProps:Q},J),I)}),m=R,S=d,v=m;v.SearchSelect=S,v.displayName="ProFormComponent",Z.Z=v},5966:function(V,Z,t){"use strict";var _=t(22122),F=t(81253),f=t(67294),r=t(62404),j=["fieldProps","proFieldProps"],C=["fieldProps","proFieldProps"],x="text",O=function(m){var S=m.fieldProps,v=m.proFieldProps,s=(0,F.Z)(m,j);return f.createElement(r.Z,(0,_.Z)({mode:"edit",valueType:x,fieldProps:S,filedConfig:{valueType:x},proFieldProps:v},s))},B=function(m){var S=m.fieldProps,v=m.proFieldProps,s=(0,F.Z)(m,C);return f.createElement(r.Z,(0,_.Z)({mode:"edit",valueType:"password",fieldProps:S,proFieldProps:v,filedConfig:{valueType:x}},s))},R=O;R.Password=B,R.displayName="ProFormComponent",Z.Z=R},88227:function(V){V.exports={card:"card___2gwEq",result:"result___OtC7Q"}},52953:function(){},33208:function(V,Z,t){"use strict";t.r(Z);var _=t(58024),F=t(39144),f=t(48736),r=t(27049),j=t(17462),C=t(76772),x=t(3182),O=t(2824),B=t(57106),R=t(99683),d=t(57663),m=t(71577),S=t(95300),v=t(7277),s=t(98858),T=t(4914),G=t(94043),I=t.n(G),K=t(67294),Q=t(75362),A=t(65554),N=t(64317),H=t(952),b=t(5966),J=t(31199),z=t(88227),$=t.n(z),e=t(85893),n=function(l){var a=l.stepData,p=l.bordered,D=a.payAccount,M=a.receiverAccount,E=a.receiverName,P=a.amount;return(0,e.jsxs)(T.Z,{column:1,bordered:p,children:[(0,e.jsxs)(T.Z.Item,{label:"\u4ED8\u6B3E\u8D26\u6237",children:[" ",D]}),(0,e.jsxs)(T.Z.Item,{label:"\u6536\u6B3E\u8D26\u6237",children:[" ",M]}),(0,e.jsxs)(T.Z.Item,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",children:[" ",E]}),(0,e.jsx)(T.Z.Item,{label:"\u8F6C\u8D26\u91D1\u989D",children:(0,e.jsx)(v.Z,{value:P,suffix:(0,e.jsx)("span",{style:{fontSize:14},children:"\u5143"}),precision:2})})]})},u=function(l){return(0,e.jsx)(R.ZP,{status:"success",title:"\u64CD\u4F5C\u6210\u529F",subTitle:"\u9884\u8BA1\u4E24\u5C0F\u65F6\u5185\u5230\u8D26",extra:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(m.Z,{type:"primary",onClick:l.onFinish,children:"\u518D\u8F6C\u4E00\u7B14"}),(0,e.jsx)(m.Z,{children:"\u67E5\u770B\u8D26\u5355"})]}),className:$().result,children:l.children})},o=function(){var l=(0,K.useState)({payAccount:"ant-design@alipay.com",receiverAccount:"test@example.com",receiverName:"Alex",amount:"500",receiverMode:"alipay"}),a=(0,O.Z)(l,2),p=a[0],D=a[1],M=(0,K.useState)(0),E=(0,O.Z)(M,2),P=E[0],w=E[1],L=(0,K.useRef)();return(0,e.jsx)(Q.ZP,{content:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002",children:(0,e.jsxs)(F.Z,{bordered:!1,children:[(0,e.jsxs)(A.L,{current:P,onCurrentChange:w,submitter:{render:function(h,g){return h.step===2?null:g}},children:[(0,e.jsxs)(A.L.StepForm,{formRef:L,title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",initialValues:p,onFinish:function(){var i=(0,x.Z)(I().mark(function h(g){return I().wrap(function(U){for(;;)switch(U.prev=U.next){case 0:return D(g),U.abrupt("return",!0);case 2:case"end":return U.stop()}},h)}));return function(h){return i.apply(this,arguments)}}(),children:[(0,e.jsx)(N.Z,{label:"\u4ED8\u6B3E\u8D26\u6237",width:"md",name:"payAccount",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{"ant-design@alipay.com":"ant-design@alipay.com"}}),(0,e.jsxs)(H.ZP.Group,{title:"\u6536\u6B3E\u8D26\u6237",size:8,children:[(0,e.jsx)(N.Z,{name:"receiverMode",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237"}],valueEnum:{alipay:"\u652F\u4ED8\u5B9D",bank:"\u94F6\u884C\u8D26\u6237"}}),(0,e.jsx)(b.Z,{name:"receiverAccount",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u8D26\u6237"},{type:"email",message:"\u8D26\u6237\u540D\u5E94\u4E3A\u90AE\u7BB1\u683C\u5F0F"}],placeholder:"test@example.com"})]}),(0,e.jsx)(b.Z,{label:"\u6536\u6B3E\u4EBA\u59D3\u540D",width:"md",name:"receiverName",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}],placeholder:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D"}),(0,e.jsx)(J.Z,{label:"\u8F6C\u8D26\u91D1\u989D",name:"amount",width:"md",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u8F6C\u8D26\u91D1\u989D"},{pattern:/^(\d+)((?:\.\d+)?)$/,message:"\u8BF7\u8F93\u5165\u5408\u6CD5\u91D1\u989D\u6570\u5B57"}],placeholder:"\u8BF7\u8F93\u5165\u91D1\u989D",fieldProps:{prefix:"\uFFE5"}})]}),(0,e.jsx)(A.L.StepForm,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",children:(0,e.jsxs)("div",{className:$().result,children:[(0,e.jsx)(C.Z,{closable:!0,showIcon:!0,message:"\u786E\u8BA4\u8F6C\u8D26\u540E\uFF0C\u8D44\u91D1\u5C06\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002",style:{marginBottom:24}}),(0,e.jsx)(n,{stepData:p,bordered:!0}),(0,e.jsx)(r.Z,{style:{margin:"24px 0"}}),(0,e.jsx)(b.Z.Password,{label:"\u652F\u4ED8\u5BC6\u7801",width:"md",name:"password",required:!1,rules:[{required:!0,message:"\u9700\u8981\u652F\u4ED8\u5BC6\u7801\u624D\u80FD\u8FDB\u884C\u652F\u4ED8"}]})]})}),(0,e.jsx)(A.L.StepForm,{title:"\u5B8C\u6210",children:(0,e.jsx)(u,{onFinish:(0,x.Z)(I().mark(function i(){var h;return I().wrap(function(W){for(;;)switch(W.prev=W.next){case 0:w(0),(h=L.current)===null||h===void 0||h.resetFields();case 2:case"end":return W.stop()}},i)})),children:(0,e.jsx)(n,{stepData:p})})})]}),(0,e.jsx)(r.Z,{style:{margin:"40px 0 24px"}}),(0,e.jsxs)("div",{className:$().desc,children:[(0,e.jsx)("h3",{children:"\u8BF4\u660E"}),(0,e.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u652F\u4ED8\u5B9D\u8D26\u6237"}),(0,e.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"}),(0,e.jsx)("h4",{children:"\u8F6C\u8D26\u5230\u94F6\u884C\u5361"}),(0,e.jsx)("p",{children:"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u4E00\u4E9B\u5173\u4E8E\u4EA7\u54C1\u7684\u5E38\u89C1\u95EE\u9898\u8BF4\u660E\u3002"})]})]})})};Z.default=o},4914:function(V,Z,t){"use strict";t.d(Z,{K:function(){return A},Z:function(){return $}});var _=t(96156),F=t(28481),f=t(90484),r=t(67294),j=t(94184),C=t.n(j),x=t(50344),O=t(24308),B=t(21687),R=t(65632),d=t(22122);function m(e){return e!=null}var S=function(n){var u=n.itemPrefixCls,o=n.component,c=n.span,l=n.className,a=n.style,p=n.labelStyle,D=n.contentStyle,M=n.bordered,E=n.label,P=n.content,w=n.colon,L=o;if(M){var i;return r.createElement(L,{className:C()((i={},(0,_.Z)(i,"".concat(u,"-item-label"),m(E)),(0,_.Z)(i,"".concat(u,"-item-content"),m(P)),i),l),style:a,colSpan:c},m(E)&&r.createElement("span",{style:p},E),m(P)&&r.createElement("span",{style:D},P))}return r.createElement(L,{className:C()("".concat(u,"-item"),l),style:a,colSpan:c},r.createElement("div",{className:"".concat(u,"-item-container")},(E||E===0)&&r.createElement("span",{className:C()("".concat(u,"-item-label"),(0,_.Z)({},"".concat(u,"-item-no-colon"),!w)),style:p},E),(P||P===0)&&r.createElement("span",{className:C()("".concat(u,"-item-content")),style:D},P)))},v=S;function s(e,n,u){var o=n.colon,c=n.prefixCls,l=n.bordered,a=u.component,p=u.type,D=u.showLabel,M=u.showContent,E=u.labelStyle,P=u.contentStyle;return e.map(function(w,L){var i=w.props,h=i.label,g=i.children,W=i.prefixCls,U=W===void 0?c:W,X=i.className,y=i.style,q=i.labelStyle,Y=i.contentStyle,ee=i.span,te=ee===void 0?1:ee,k=w.key;return typeof a=="string"?r.createElement(v,{key:"".concat(p,"-").concat(k||L),className:X,style:y,labelStyle:(0,d.Z)((0,d.Z)({},E),q),contentStyle:(0,d.Z)((0,d.Z)({},P),Y),span:te,colon:o,component:a,itemPrefixCls:U,bordered:l,label:D?h:null,content:M?g:null}):[r.createElement(v,{key:"label-".concat(k||L),className:X,style:(0,d.Z)((0,d.Z)((0,d.Z)({},E),y),q),span:1,colon:o,component:a[0],itemPrefixCls:U,bordered:l,label:h}),r.createElement(v,{key:"content-".concat(k||L),className:X,style:(0,d.Z)((0,d.Z)((0,d.Z)({},P),y),Y),span:te*2-1,component:a[1],itemPrefixCls:U,bordered:l,content:g})]})}var T=function(n){var u=r.useContext(A),o=n.prefixCls,c=n.vertical,l=n.row,a=n.index,p=n.bordered;return c?r.createElement(r.Fragment,null,r.createElement("tr",{key:"label-".concat(a),className:"".concat(o,"-row")},s(l,n,(0,d.Z)({component:"th",type:"label",showLabel:!0},u))),r.createElement("tr",{key:"content-".concat(a),className:"".concat(o,"-row")},s(l,n,(0,d.Z)({component:"td",type:"content",showContent:!0},u)))):r.createElement("tr",{key:a,className:"".concat(o,"-row")},s(l,n,(0,d.Z)({component:p?["th","td"]:"td",type:"item",showLabel:!0,showContent:!0},u)))},G=T,I=function(n){var u=n.children;return u},K=I,Q=t(96159),A=r.createContext({}),N={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1};function H(e,n){if(typeof e=="number")return e;if((0,f.Z)(e)==="object")for(var u=0;u<O.c4.length;u++){var o=O.c4[u];if(n[o]&&e[o]!==void 0)return e[o]||N[o]}return 3}function b(e,n,u){var o=e;return(n===void 0||n>u)&&(o=(0,Q.Tm)(e,{span:u}),(0,B.Z)(n===void 0,"Descriptions","Sum of column `span` in a line not match `column` of Descriptions.")),o}function J(e,n){var u=(0,x.Z)(e).filter(function(a){return a}),o=[],c=[],l=n;return u.forEach(function(a,p){var D,M=(D=a.props)===null||D===void 0?void 0:D.span,E=M||1;if(p===u.length-1){c.push(b(a,M,l)),o.push(c);return}E<l?(l-=E,c.push(a)):(c.push(b(a,E,l)),o.push(c),l=n,c=[])}),o}function z(e){var n,u=e.prefixCls,o=e.title,c=e.extra,l=e.column,a=l===void 0?N:l,p=e.colon,D=p===void 0?!0:p,M=e.bordered,E=e.layout,P=e.children,w=e.className,L=e.style,i=e.size,h=e.labelStyle,g=e.contentStyle,W=r.useContext(R.E_),U=W.getPrefixCls,X=W.direction,y=U("descriptions",u),q=r.useState({}),Y=(0,F.Z)(q,2),ee=Y[0],te=Y[1],k=H(a,ee);r.useEffect(function(){var ne=O.ZP.subscribe(function(re){(0,f.Z)(a)==="object"&&te(re)});return function(){O.ZP.unsubscribe(ne)}},[]);var ue=J(P,k),se=r.useMemo(function(){return{labelStyle:h,contentStyle:g}},[h,g]);return r.createElement(A.Provider,{value:se},r.createElement("div",{className:C()(y,(n={},(0,_.Z)(n,"".concat(y,"-").concat(i),i&&i!=="default"),(0,_.Z)(n,"".concat(y,"-bordered"),!!M),(0,_.Z)(n,"".concat(y,"-rtl"),X==="rtl"),n),w),style:L},(o||c)&&r.createElement("div",{className:"".concat(y,"-header")},o&&r.createElement("div",{className:"".concat(y,"-title")},o),c&&r.createElement("div",{className:"".concat(y,"-extra")},c)),r.createElement("div",{className:"".concat(y,"-view")},r.createElement("table",null,r.createElement("tbody",null,ue.map(function(ne,re){return r.createElement(G,{key:re,index:re,colon:D,prefixCls:y,vertical:E==="vertical",bordered:M,row:ne})}))))))}z.Item=K;var $=z},98858:function(V,Z,t){"use strict";var _=t(38663),F=t.n(_),f=t(52953),r=t.n(f)}}]);
