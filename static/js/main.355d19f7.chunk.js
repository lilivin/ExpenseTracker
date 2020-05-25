(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{16:function(n,t,e){n.exports=e(24)},23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var r=e(0),a=e.n(r),o=e(11),c=e.n(o),u=e(1),i=e(2);function l(){var n=Object(u.a)(["\n    text-align: center;\n"]);return l=function(){return n},n}var d=i.a.h1(l()),s=function(){return a.a.createElement(d,null,"Expense Tracker")},m=e(4),f=e(15),b=e(5),p=function(n,t){switch(t.type){case"DELETE_TRANSACTION":return Object(b.a)(Object(b.a)({},n),{},{transactions:n.transactions.filter((function(n){return n.id!==t.payload}))});case"ADD_TRANSACTION":return Object(b.a)(Object(b.a)({},n),{},{transactions:[t.payload].concat(Object(f.a)(n.transactions))});default:return n}},h={transactions:[]},x=Object(r.createContext)(h),v=function(n){var t=n.children,e=Object(r.useReducer)(p,h),o=Object(m.a)(e,2),c=o[0],u=o[1];return a.a.createElement(x.Provider,{value:{transactions:c.transactions,deleteTransaction:function(n){u({type:"DELETE_TRANSACTION",payload:n})},addTransaction:function(n){u({type:"ADD_TRANSACTION",payload:n})}}},t)};function E(){var n=Object(u.a)(["\n    border-bottom: 1px solid lightgrey;\n    padding-bottom: 8px;\n"]);return E=function(){return n},n}var g=i.a.h3(E()),O=function(){var n=Object(r.useContext)(x).transactions.map((function(n){return n.amount})).reduce((function(n,t){return n+t}),0).toFixed(2);return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null,"Your balance"),a.a.createElement("h1",null,"$",n))};function j(){var n=Object(u.a)(["\n    color: red;\n"]);return j=function(){return n},n}function y(){var n=Object(u.a)(["\n    color: #03bd32;\n"]);return y=function(){return n},n}function w(){var n=Object(u.a)(["\n    width: 50%;\n    text-align: center;\n"]);return w=function(){return n},n}function T(){var n=Object(u.a)(["\n    display: flex;\n    width: 100%;\n    justify-content: space-evenly;\n    background-color: #fff;\n    border: 1px solid lightgrey;\n    box-sizing: border-box;\n    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n"]);return T=function(){return n},n}var A=i.a.div(T()),C=i.a.div(w()),k=i.a.p(y()),N=i.a.p(j()),I=function(){var n=Object(r.useContext)(x).transactions.map((function(n){return n.amount})),t=n.filter((function(n){return n>0})).reduce((function(n,t){return n+t}),0).toFixed(2),e=(-1*n.filter((function(n){return n<0})).reduce((function(n,t){return n+t}),0)).toFixed(2);return a.a.createElement(A,null,a.a.createElement(C,null,a.a.createElement("h4",null,"Income"),a.a.createElement(k,null,t)),a.a.createElement(C,null,a.a.createElement("h4",null,"Expense"),a.a.createElement(N,null,e)))};function S(){var n=Object(u.a)(["\n    display: flex;\n    height: 40px;\n    align-items: center;\n    border: 1px solid lightgrey;\n    margin: 10px 0;\n    box-sizing: border-box;\n    background-color: white;\n    &:hover "," {\n        transform: translateX(0);\n        width: 30px;\n    }\n"]);return S=function(){return n},n}function D(){var n=Object(u.a)(["\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    transition: 0.3s;\n    padding: 3%;\n    padding-left: 5%;\n"]);return D=function(){return n},n}function F(){var n=Object(u.a)(["\n    cursor: pointer;\n    transform: translateX(100%);\n    height: 100%;\n    width: 8%;\n    transition: .3s;\n    border: none;\n    border-left: 1px solid lightgrey;\n    width: 0;\n"]);return F=function(){return n},n}var R=i.a.button(F()),z=i.a.div(D()),M=i.a.li(S(),R),_=function(n){var t=n.transaction,e=Object(r.useContext)(x).deleteTransaction,o=t.amount<0?"-":"+";return a.a.createElement(M,null,a.a.createElement(z,null,t.text,a.a.createElement("span",null,o,"$",Math.abs(t.amount))),a.a.createElement(R,{onClick:function(){return e(t.id)}},"X"))};function X(){var n=Object(u.a)(["\n    border-bottom: 1px solid lightgrey;\n    padding-bottom: 8px;\n"]);return X=function(){return n},n}function J(){var n=Object(u.a)(["\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n"]);return J=function(){return n},n}function L(){var n=Object(u.a)(["\n    width: 100%;\n"]);return L=function(){return n},n}var $=i.a.div(L()),B=i.a.ul(J()),H=i.a.h3(X()),P=function(){var n=Object(r.useContext)(x).transactions;return a.a.createElement($,null,a.a.createElement(H,null,"History"),a.a.createElement(B,null,0===n.length?"Empty":n.map((function(n){return a.a.createElement(_,{key:n.id,transaction:n})}))))};function Y(){var n=Object(u.a)(["\n    border-bottom: 1px solid lightgrey;\n    padding-bottom: 8px;\n"]);return Y=function(){return n},n}function q(){var n=Object(u.a)(["\n    width: 100%;\n    display: block;\n    margin: 0 auto;\n    height: 3vh;\n    min-height: 40px;\n    color: white;\n    background-color: blue;\n    cursor: pointer;\n    font-weight: bold;\n    border: none;\n"]);return q=function(){return n},n}function G(){var n=Object(u.a)(["\n    display: block;\n    width: 100%;\n    min-height: 30px;\n    padding: 0 7px;\n    margin: 1vh auto;\n    font-size: 16px;\n    box-sizing: border-box;\n"]);return G=function(){return n},n}var K=i.a.input(G()),Q=i.a.button(q()),U=i.a.h3(Y()),V=function(){var n=Object(r.useState)(""),t=Object(m.a)(n,2),e=t[0],o=t[1],c=Object(r.useState)(0),u=Object(m.a)(c,2),i=u[0],l=u[1],d=Object(r.useContext)(x).addTransaction;return a.a.createElement(a.a.Fragment,null,a.a.createElement(U,null,"Add new transaction"),a.a.createElement("form",{onSubmit:function(n){n.preventDefault();var t={id:Math.floor(1e10*Math.random()),text:e,amount:+i};d(t)}},a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"text"},"Text"),a.a.createElement(K,{type:"text",id:"textInput",value:e,onChange:function(n){return o(n.target.value)},placeholder:"Enter text..."})),a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"amount"},"Amount"),a.a.createElement(K,{type:"number",id:"amountInput",value:i,onChange:function(n){return l(n.target.value)},placeholder:"Enter amount..."})),a.a.createElement(Q,null,"Add transaction")))};e(23);function W(){var n=Object(u.a)(["\n    width: 20vw;\n    min-width: 300px;\n    margin: 0 auto;\n    overflow: hidden;\n"]);return W=function(){return n},n}var Z=i.a.div(W());var nn=function(){return a.a.createElement(Z,null,a.a.createElement(v,null,a.a.createElement(s,null),a.a.createElement("div",{className:"container"},a.a.createElement(O,null),a.a.createElement(I,null),a.a.createElement(P,null),a.a.createElement(V,null))))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(nn,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.355d19f7.chunk.js.map