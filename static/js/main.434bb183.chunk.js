(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),a=n(4),s=n.n(a),r=n(3),c=(n(9),n(0));var l=function(e){var t=e.titleColor,n=Object(c.jsx)("span",{className:t?"react":"",children:"React"});return Object(c.jsxs)("h1",{children:["My first ",n," project"]})};var d=function(e){var t=e.faq,n=e.index,i=e.toggleQandA,o=e.toggleTitleColor;return Object(c.jsxs)("div",{className:"faq "+(t.open?"open":""),onClick:function(){i(n),o(t)},children:[Object(c.jsx)("h3",{className:"faq-question",children:t.title}),Object(c.jsx)("div",{className:"faq-answer",children:t.answer})]},n)},h=[{title:"When did you learn React?",answer:"I watched 4 hour introduction course on the day i received the email with the task, to prepare myself :)",open:!1},{title:"Why did you choose JavaScript?",answer:"It gives me the freedom to mix my creative background with engineering, which i'm very keen to learn.",open:!1},{title:"Do you like challenges?",answer:"I certainly do and this is a small sample :)",open:!1},{title:"What is your motivation?",answer:"I take pride in everything i do, as i'm result driven person, that motivates me to get things done!",open:!1},{title:"What do you expect from us?",answer:"Possibilities, that will put me in a position to grow and nothing less!",open:!1},{title:"Any final message for us?",answer:"I enjoyed the process of creating this task, and i'm looking forward to the next step :)!",open:!1}];var u=function(){var e=Object(i.useState)(h),t=Object(r.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)(!1),s=Object(r.a)(a,2),u=s[0],p=s[1],m=function(e){e.open?p(!0):p(!1)},j=function(e){o(n.map((function(t,n){return t.open=e===n&&!t.open,t})))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(l,{titleColor:u}),n.map((function(e,t){return Object(c.jsx)("div",{className:"faqs",children:Object(c.jsx)(d,{faq:e,index:t,toggleQandA:j,toggleTitleColor:m})},t)}))]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),a(e),s(e)}))};s.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),p()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.434bb183.chunk.js.map