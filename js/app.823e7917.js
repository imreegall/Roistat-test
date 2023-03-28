(function(){"use strict";var e={9696:function(e,t,n){var r=n(9242),s=n(3396);const l=(0,s._)("h1",null,"Добавить",-1);function i(e,t,n,i,o,a){const u=(0,s.up)("FillLocalStorageButton"),c=(0,s.up)("BlueButton"),d=(0,s.up)("AddUsersModal"),p=(0,s.up)("UsersTable");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u,{onFillLocalStorage:a.setUsersList},null,8,["onFillLocalStorage"]),(0,s.Wm)(c,{onButtonClick:t[0]||(t[0]=e=>o.isVisibleModalWindow=!o.isVisibleModalWindow)},{default:(0,s.w5)((()=>[l])),_:1}),(0,s.wy)((0,s.Wm)(d,{onCloseModalWindow:t[1]||(t[1]=e=>o.isVisibleModalWindow=!1),onGetNewUserData:a.addUser,usersList:o.usersList},null,8,["onGetNewUserData","usersList"]),[[r.F8,o.isVisibleModalWindow]]),(0,s.Wm)(p,{onSortingUsersList:a.sortUsersList,usersList:o.usersList},null,8,["onSortingUsersList","usersList"])],64)}const o=["disabled"];function a(e,t,n,r,l,i){return(0,s.wg)(),(0,s.iD)("button",{onClick:t[0]||(t[0]=()=>this.$emit("buttonClick")),disabled:!n.isActive},[(0,s.WI)(e.$slots,"default",{},void 0,!0)],8,o)}var u={name:"BlueButton",props:{isActive:{type:Boolean,default:!0}}},c=n(89);const d=(0,c.Z)(u,[["render",a],["__scopeId","data-v-f10715ec"]]);var p=d;const f=e=>((0,s.dD)("data-v-6e928ead"),e=e(),(0,s.Cn)(),e),m={class:"modalWindow"},v={class:"title"},h=f((()=>(0,s._)("h1",null,"Добавить пользователя",-1))),g={class:"forms"},w={class:"form"},b=f((()=>(0,s._)("div",{class:"formTitle"},[(0,s._)("h2",null,"Имя")],-1))),L={class:"form"},y=f((()=>(0,s._)("div",{class:"formTitle"},[(0,s._)("h2",null,"Телефон")],-1))),_={class:"form"},C=f((()=>(0,s._)("div",{class:"formTitle"},[(0,s._)("h2",null,"Начальник")],-1))),k=f((()=>(0,s._)("h1",null,"Сохранить",-1)));function B(e,t,n,l,i,o){const a=(0,s.up)("CloseButtonX"),u=(0,s.up)("InputText"),c=(0,s.up)("SelectUser"),d=(0,s.up)("BlueButton");return(0,s.wg)(),(0,s.iD)("div",{class:"backgroundModal",onClick:t[4]||(t[4]=(0,r.iM)((()=>this.$emit("closeModalWindow")),["self"]))},[(0,s._)("div",m,[(0,s._)("div",v,[h,(0,s.Wm)(a,{onButtonClick:t[0]||(t[0]=()=>this.$emit("closeModalWindow"))})]),(0,s._)("div",g,[(0,s._)("div",w,[b,(0,s.Wm)(u,{inputPlaceholder:"Фёдор",onInputText:t[1]||(t[1]=e=>i.newUser.name=e)})]),(0,s._)("div",L,[y,(0,s.Wm)(u,{inputPlaceholder:"+7...",onInputText:t[2]||(t[2]=e=>i.newUser.tel=e)},null,8,["inputPlaceholder"])]),(0,s._)("div",_,[C,(0,s.Wm)(c,{usersList:n.usersList,onChangeSelect:t[3]||(t[3]=e=>i.newUser.parent=e)},null,8,["usersList"])])]),(0,s.Wm)(d,{onButtonClick:o.checkValidForm,isActive:""!==i.newUser.name&&""!==i.newUser.tel},{default:(0,s.w5)((()=>[k])),_:1},8,["onButtonClick","isActive"])])])}const S=e=>((0,s.dD)("data-v-63a7d0a7"),e=e(),(0,s.Cn)(),e),U=S((()=>(0,s._)("div",{class:"line line1"},null,-1))),T=S((()=>(0,s._)("div",{class:"line line2"},null,-1))),I=[U,T];function W(e,t,n,r,l,i){return(0,s.wg)(),(0,s.iD)("div",{class:"button",onClick:t[0]||(t[0]=()=>this.$emit("buttonClick"))},I)}var D={name:"CloseButtonX"};const O=(0,c.Z)(D,[["render",W],["__scopeId","data-v-63a7d0a7"]]);var M=O;const $=["placeholder"];function j(e,t,n,r,l,i){return(0,s.wg)(),(0,s.iD)("input",{type:"text",onInput:t[0]||(t[0]=e=>this.$emit("inputText",e.target.value)),placeholder:n.inputPlaceholder},null,40,$)}var x={name:"TextInput",props:["inputPlaceholder"]};const A=(0,c.Z)(x,[["render",j],["__scopeId","data-v-6bde04dc"]]);var N=A,Z=n(7139);const H=e=>((0,s.dD)("data-v-ff5e12d0"),e=e(),(0,s.Cn)(),e),F=H((()=>(0,s._)("option",{id:0},null,-1))),P=["id"];function V(e,t,n,r,l,i){return(0,s.wg)(),(0,s.iD)("select",{onChange:t[0]||(t[0]=()=>this.$emit("changeSelect",i.getSelectedUserId()))},[F,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.usersList,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.id,id:e.id},(0,Z.zw)(e.name),9,P)))),128))],32)}var Y={name:"UserSelect",props:["usersList","callBackPropertyName"],methods:{getSelectedUserId(){const e=Array.from(document.getElementsByTagName("option")).filter((e=>e.selected))[0].id;return Number(e)}}};const E=(0,c.Z)(Y,[["render",V],["__scopeId","data-v-ff5e12d0"]]);var J=E,K={name:"AddUsersModal",components:{CloseButtonX:M,InputText:N,SelectUser:J,BlueButton:p},props:["usersList"],data(){return{newUser:{name:"",tel:"",parent:0}}},methods:{checkValidForm(){""!==this.newUser.name&&""!==this.newUser.tel&&(this.$emit("getNewUserData",this.newUser),this.$emit("closeModalWindow"))}}};const X=(0,c.Z)(K,[["render",B],["__scopeId","data-v-6e928ead"]]);var z=X;const G={class:"table"};function R(e,t,n,r,l,i){const o=(0,s.up)("TableHeader"),a=(0,s.up)("TableBody");return(0,s.wg)(),(0,s.iD)("div",G,[(0,s.Wm)(o,{onHeaderCellClick:t[0]||(t[0]=e=>this.$emit("sortingUsersList",e))}),(0,s.Wm)(a,{usersList:n.usersList},null,8,["usersList"])])}function q(e,t,n,r,l,i){const o=(0,s.up)("TableLine");return(0,s.wg)(),(0,s.j4)(o,{columns:[{title:"Имя",width:40},{title:"Телефон",width:60}],style:{cursor:"pointer"},onCellClick:t[0]||(t[0]=e=>this.$emit("headerCellClick",e))})}const Q={class:"lineContainer"};function ee(e,t,n,r,l,i){const o=(0,s.up)("TableCell");return(0,s.wg)(),(0,s.iD)("div",Q,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.columns,(e=>((0,s.wg)(),(0,s.j4)(o,{key:e.title,onClick:()=>this.$emit("cellClick",e.title),style:(0,Z.j5)(`width: ${e.width}%`)},{default:(0,s.w5)((()=>[(0,s._)("h1",null,(0,Z.zw)(e.title),1)])),_:2},1032,["onClick","style"])))),128))])}const te={class:"cell"};function ne(e,t,n,r,l,i){return(0,s.wg)(),(0,s.iD)("div",te,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])}var re={name:"TableCell"};const se=(0,c.Z)(re,[["render",ne],["__scopeId","data-v-79169767"]]);var le=se,ie={name:"TableLine",components:{TableCell:le},props:["columns"]};const oe=(0,c.Z)(ie,[["render",ee],["__scopeId","data-v-36165faf"]]);var ae=oe,ue={name:"TableHeader",components:{TableLine:ae}};const ce=(0,c.Z)(ue,[["render",q]]);var de=ce;function pe(e,t,n,r,l,i){const o=(0,s.up)("TableLine"),a=(0,s.up)("TableBody");return n.usersList.filter((e=>e.parent.toString()===this.parentId)).length?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"childrenContainer",style:(0,Z.j5)(`background-color: ${n.color}`)},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(n.usersList.filter((e=>e.parent.toString()===this.parentId)),(e=>((0,s.wg)(),(0,s.iD)(s.HY,{key:e.id},[n.usersList.filter((t=>t.parent.toString()===e.id.toString())).length?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[(0,s.Wm)(o,{onClick:t[0]||(t[0]=e=>e.currentTarget.nextElementSibling.classList.toggle("visible")),columns:[{title:"+ "+e.name,width:40},{title:e.tel,width:60}],style:{cursor:"pointer"}},null,8,["columns"]),(0,s.Wm)(a,{usersList:n.usersList,color:l.getRainbowColorByNumber(n.layerLevel),layerLevel:n.layerLevel+1,parentId:e.id,style:{display:"none"}},null,8,["usersList","color","layerLevel","parentId"])],64)):((0,s.wg)(),(0,s.j4)(o,{key:1,columns:[{title:e.name,width:40},{title:e.tel,width:60}]},null,8,["columns"]))],64)))),128))],4)):(0,s.kq)("",!0)}function fe(e){const t=["#ff4646","#ff6f37","#ffff62","#48c948","#5858ff","#7c44a6","#fc90fc"],n=e%t.length;return t[n]}var me={name:"TableBody",components:{TableLine:ae},props:{usersList:Array,parentId:{type:String,default:"0"},color:{type:String,default:"transparent"},layerLevel:{type:Number,default:0}},data(){return{isChildrenVisible:!1,getRainbowColorByNumber:fe}}};const ve=(0,c.Z)(me,[["render",pe],["__scopeId","data-v-bf10273a"]]);var he=ve,ge={name:"UserTable",components:{TableHeader:de,TableBody:he},props:["usersList"]};const we=(0,c.Z)(ge,[["render",R],["__scopeId","data-v-391cc7da"]]);var be=we;const Le=(0,s._)("h1",null,"[Test] Заполнить localStorage",-1);function ye(e,t,n,r,l,i){const o=(0,s.up)("BlueButton");return(0,s.wg)(),(0,s.j4)(o,{onButtonClick:t[0]||(t[0]=()=>{l.fillLocalStorage(),this.$emit("fillLocalStorage")})},{default:(0,s.w5)((()=>[Le])),_:1})}function _e(){const e=[{id:974128150,user:{name:"Марина",tel:"+79411232142",parent:0}},{id:797877627,user:{name:"Петр",tel:"+79411232142",parent:0}},{id:928742785,user:{name:"Алексей",tel:"+79411232142",parent:0}},{id:997930970,user:{name:"Иван",tel:"+79411232142",parent:928742785}},{id:730707266,user:{name:"Ренат",tel:"+79411232142",parent:928742785}},{id:932665228,user:{name:"Анастасия",tel:"+79411232142",parent:928742785}},{id:719749202,user:{name:"Дмитрий",tel:"+79411232142",parent:932665228}},{id:359159959,user:{name:"Олег",tel:"+79411232142",parent:932665228}},{id:799019496,user:{name:"Камилла",tel:"+79411232142",parent:932665228}},{id:676903557,user:{name:"Борис",tel:"+79411232142",parent:932665228}},{id:199942857,user:{name:"Анна",tel:"+79411232142",parent:928742785}},{id:903432328,user:{name:"Константин",tel:"+79411232142",parent:0}},{id:76364197,user:{name:"Игнат",tel:"+79411232142",parent:903432328}},{id:126675778,user:{name:"Валерий",tel:"+79411232142",parent:0}},{id:652755857,user:{name:"Юрий",tel:"+79411232142",parent:0}}];localStorage.clear(),e.forEach((e=>{localStorage.setItem(e.id,JSON.stringify(e.user))}))}var Ce={name:"FillLocalStorageButton",components:{BlueButton:p},data(){return{fillLocalStorage:_e}}};const ke=(0,c.Z)(Ce,[["render",ye]]);var Be=ke;n(7658);function Se(){let e=[],t=Object.keys(localStorage);return t.forEach((t=>{let n=JSON.parse(localStorage[t]);n.id=t,e.push(n)})),e}function Ue(e){return Math.floor(Math.random()*10**e)}var Te={name:"App",components:{BlueButton:p,AddUsersModal:z,UsersTable:be,FillLocalStorageButton:Be},data(){return{isVisibleModalWindow:!1,sortingOption:null,usersList:[]}},methods:{addUser(e){localStorage.setItem(Ue(9).toString(),JSON.stringify(e)),this.setUsersList()},setUsersList(){this.usersList=Se()},sortUsersList(e){const t="Имя"===e?"name":"tel",n=this.sortingOption===t;this.sortArray(this.usersList,t,n),this.sortingOption=n?"":t},sortArray(e,t,n){n?e.sort(((e,n)=>e[t]>n[t]?-1:e[t]<n[t]?1:0)):e.sort(((e,n)=>e[t]<n[t]?-1:e[t]>n[t]?1:0))}},mounted(){this.setUsersList()}};const Ie=(0,c.Z)(Te,[["render",i]]);var We=Ie;(0,r.ri)(We).mount("#app")}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,r,s,l){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],s=e[c][1],l=e[c][2];for(var o=!0,a=0;a<r.length;a++)(!1&l||i>=l)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(o=!1,l<i&&(i=l));if(o){e.splice(c--,1);var u=s();void 0!==u&&(t=u)}}return t}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[r,s,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var s,l,i=r[0],o=r[1],a=r[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(s in o)n.o(o,s)&&(n.m[s]=o[s]);if(a)var c=a(n)}for(t&&t(r);u<i.length;u++)l=i[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(c)},r=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9696)}));r=n.O(r)})();
//# sourceMappingURL=app.823e7917.js.map