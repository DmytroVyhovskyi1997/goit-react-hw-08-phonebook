"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[11],{6011:function(n,e,r){r.r(e),r.d(e,{default:function(){return M}});var t,o,i,a,c,d,l,s,p,x,u,b,g,f=r(2791),h=r(9434),m=r(4270),w=r(9439),Z=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&r[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e},v=r(3634),k=function(n){return n.contacts.items},j=function(n){return n.filter.filter},y=r(168),z=r(6444),P=z.ZP.form(t||(t=(0,y.Z)(["\nmargin: 50px auto 0;\n    padding: 48px 64px;\n    max-width: 400px;\n    display: flex;\n    flex-direction: column;\n    -webkit-box-align: center;\n    align-items: center;\n    border-radius: 32px;\n    background-color: #e9f4f2;\n    box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;\n"]))),C=z.ZP.label(o||(o=(0,y.Z)(["\nmargin-bottom: 16px;\nmargin-top: 16px;\n    width: 100%;\n    font-size: 20px;\n    font-weight: bold;\n"]))),_=(z.ZP.div(i||(i=(0,y.Z)(["\n\n    margin-bottom: 32px;\n    width: 100%;\n"]))),z.ZP.input(a||(a=(0,y.Z)(["\n    width: 100%;\n    font-size: 18px;\n    line-height: 1.5;\n    border-bottom: 2px solid rgb(209, 229, 244);\n    border-top:none;\n    border-left:none;\n    border-right:none;\nmargin-top:20px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    background-color: #e9f4f2;\n    &:focus{\n      outline:none;\n        border-color: red;\n        background-color: #e9f4f2;\n    }\n"])))),A=z.ZP.button(c||(c=(0,y.Z)(["\npadding: 8px 24px;\ndisplay: inline-flex;\nmargin-top:20px;\n-webkit-box-align: center;\nalign-items: center;\ngap: 4px;\ncolor: rgb(24, 24, 24);\nfont-size: 16px;\nfont-weight: 500;\nbackground-color: rgb(255, 255, 255);\nborder-radius: 12px;\nborder:none;\nbox-shadow: rgb(209 229 244) 0px 0px 0px 2px;\n\n\n&:hover,focus{\n    color:white;\n    background-color: red;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s\n}\n"]))),F=r(3329),N=function(){var n=(0,f.useState)(""),e=(0,w.Z)(n,2),r=e[0],t=e[1],o=(0,f.useState)(""),i=(0,w.Z)(o,2),a=i[0],c=i[1],d=(0,h.v9)(k),l=(0,h.I0)(),s=function(n){var e=n.target,r=e.name,o=e.value;switch(r){case"name":t(o);break;case"number":c(o)}};return(0,F.jsxs)(P,{onSubmit:function(n){n.preventDefault();var e={id:Z(),name:r,number:a},o=d.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}));o?alert("".concat(r," is already in contacts")):l((0,v.uK)(e)),t(""),c("")},children:[(0,F.jsx)(C,{children:"Name "}),(0,F.jsx)(_,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"Name",onChange:s,value:r}),(0,F.jsx)(C,{children:"Number "}),(0,F.jsx)(_,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"111-11-11",onChange:s,value:a}),(0,F.jsx)(A,{type:"submit",children:"Add contact"})]})},S=r(4289),q=z.ZP.div(d||(d=(0,y.Z)(["\nmargin: 30px auto 50px;\n    padding: 48px 64px;\n    max-width: 400px;\n    display: flex;\n    flex-direction: column;\n    -webkit-box-align: center;\n    align-items: center;\n    border-radius: 32px;\n    background-color: #e9f4f2;\n    box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;\n"]))),I=z.ZP.button(l||(l=(0,y.Z)(["\npadding: 8px 24px;\nfont-size: 14px;\n    line-height: 1.5;\n    font-weight:bold;\ndisplay: inline-flex;\nmargin-left:20px;\n-webkit-box-align: center;\nalign-items: center;\ngap: 4px;\ncolor: rgb(24, 24, 24);\n\nbackground-color: rgb(255, 255, 255);\nborder-radius: 12px;\nborder:none;\nbox-shadow: rgb(209 229 244) 0px 0px 0px 2px;\n\n\n&:hover,focus{\n    color:white;\n    background-color: red;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s\n}\n"]))),L=z.ZP.ul(s||(s=(0,y.Z)(["\ndisplay: grid;\npadding:0;\n    align-items: center;\n    justify-content: space-around;\n"]))),E=z.ZP.li(p||(p=(0,y.Z)(["\ndisplay: flex;\n    justify-content: space-around;\n    align-items: center;\n"]))),D=z.ZP.p(x||(x=(0,y.Z)(["\nfont-size: 18px;\n    line-height: 1.5;\n    font-weight:bold;\n"]))),K=function(){var n=(0,h.I0)(),e=(0,h.v9)(k),r=(0,h.v9)(j);(0,f.useEffect)((function(){n((0,v.yF)())}),[n]);var t=function(){var n=r?r.toLowerCase():"";return e?e.filter((function(e){return e.name.toLowerCase().includes(n)})):[]}();return(0,F.jsx)(q,{children:(0,F.jsx)(L,{children:t.map((function(e){var r=e.id,t=e.name,o=e.number;return(0,F.jsxs)(E,{children:[(0,F.jsxs)(D,{children:[t,": ",o]}),(0,F.jsx)(I,{onClick:function(){return n((0,v.GK)(r))},children:"Delete"})]},r)}))})})},R=r(1833),U=z.ZP.form(u||(u=(0,y.Z)(["\nmargin: 50px auto 50px;\n    padding: 48px 64px;\n    max-width: 400px;\n    display: flex;\n    flex-direction: column;\n    -webkit-box-align: center;\n    align-items: center;\n    border-radius: 32px;\n    background-color: #e9f4f2;\n    box-shadow: rgb(0 0 0 / 25%) 0px 0px 20px;\n"]))),B=z.ZP.label(b||(b=(0,y.Z)(["\nmargin-bottom: 16px;\n    width: 100%;\n    font-size: 20px;\n    font-weight: bold;\n"]))),G=z.ZP.input(g||(g=(0,y.Z)(["\n    width: 100%;\n    font-size: 18px;\n    line-height: 1.5;\n    border-bottom: 2px solid rgb(209, 229, 244);\n    border-top:none;\n    border-left:none;\n    border-right:none;\nmargin-top:20px;\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n    background-color: #e9f4f2;\n    &:focus{\n      outline:none;\n        border-color: red;\n        background-color: #e9f4f2;\n    }\n"]))),J=function(){var n=(0,h.I0)(),e=(0,h.v9)(j);return(0,F.jsxs)(U,{children:[(0,F.jsx)(B,{children:"Find contacts by Name "}),(0,F.jsx)(G,{type:"text",placeholder:"Enter filter",name:"filter",onChange:function(e){n((0,R.T)(e.target.value))},value:e})]})};function M(){var n=(0,h.I0)(),e=(0,h.v9)(S.Qb);return(0,f.useEffect)((function(){n((0,v.yF)())}),[n]),(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(m.q,{children:(0,F.jsx)("title",{children:"Phonebook"})}),(0,F.jsx)(N,{}),(0,F.jsx)("div",{children:e&&"Request in progress..."}),(0,F.jsx)(J,{}),(0,F.jsx)(K,{})]})}}}]);
//# sourceMappingURL=11.15009ab6.chunk.js.map