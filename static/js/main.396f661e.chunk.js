(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),o=(a(9),function(){return l.a.createElement("div",{className:"text-center font-weight-bold h1 py-3 text-primary bg-light"},"Calculator")}),i=a(1),m=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),o=Object(i.a)(r,2),m=o[0],s=o[1],u=Object(n.useState)(0),d=Object(i.a)(u,2),p=d[0],E=d[1],b=Object(n.useState)("Select Operation"),v=Object(i.a)(b,2),N=v[0],f=v[1];return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"row justify-content-center"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("input",{className:"form-control",placeholder:"Number 1",type:"number",value:a,onChange:function(e){return c(parseInt(e.target.value))}})),l.a.createElement("div",{className:"col-auto"},l.a.createElement("select",{className:"form-control",onChange:function(e){return f(e.target.value)}},l.a.createElement("option",{value:"Select Operation"},"OPERATION"),l.a.createElement("option",{className:"h3 text-primary",value:"addition"},"+"),l.a.createElement("option",{className:"h3 text-primary",value:"subtraction"},"-"),l.a.createElement("option",{className:"h3 text-primary",value:"multiplication"},"X"),l.a.createElement("option",{className:"h3 text-primary",value:"dividation"},"/"),l.a.createElement("option",{className:"h3 text-primary",value:"modulo"},"%"))),l.a.createElement("div",{className:"col-auto"},l.a.createElement("input",{className:"form-control",placeholder:"Number 2",type:"number",value:m,onChange:function(e){return s(parseInt(e.target.value))}})),l.a.createElement("div",{className:"col-auto"},l.a.createElement("button",{className:"btn btn-danger",onClick:function(){return"Select Operation"===N?(alert("Please Select any Operation"),!1):"dividation"===N&&0!==a&&0===m?(alert(a+" can not dividable by 0"),!1):("addition"===N&&E(a+m),"subtraction"===N&&E(a-m),"multiplication"===N&&E(a*m),"dividation"===N&&E(a/m),void("modulo"===N&&E(a%m)))}},"Calculate")),l.a.createElement("div",{className:"col-auto"},l.a.createElement("button",{className:"btn btn-danger",onClick:function(){E(0),c(0),s(0)}},"clear"))),l.a.createElement("div",{className:"row justify-content-center my-5"},l.a.createElement("div",{className:"col-auto"},l.a.createElement("label",{className:"h2 text-info mx-2"},"Total :"),l.a.createElement("label",{className:"h2 text-success mx-2"},p))))},s=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement(m,null))};r.a.render(l.a.createElement(s,null),document.getElementById("root"))},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.396f661e.chunk.js.map