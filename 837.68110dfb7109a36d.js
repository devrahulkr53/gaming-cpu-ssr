"use strict";(self.webpackChunkgaming_cpu=self.webpackChunkgaming_cpu||[]).push([[837],{3837:(y,m,r)=>{r.r(m),r.d(m,{GamingPcModule:()=>Z});var a=r(9808),s=r(4414),e=r(1223),l=r(6082),g=r(2313);function p(t,o){1&t&&(e.TgZ(0,"p",13),e._uU(1," Enjoy all your favourite latest games without breaking the bank. "),e.qZA())}function u(t,o){1&t&&(e.TgZ(0,"p",13),e._uU(1," Extreme grade with high-end 4k and VR gaming experience. "),e.qZA())}function f(t,o){1&t&&(e.TgZ(0,"p",13),e._uU(1," Top of the line Streaming ready gaming system. "),e.qZA())}const h=function(t){return{"d-none":t}},T=function(){return["/product"]},x=function(t){return{id:t}};function G(t,o){if(1&t&&(e.TgZ(0,"div",16)(1,"div",17),e._UZ(2,"img",18)(3,"img",19),e.TgZ(4,"h3"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA()()()),2&t){const n=o.$implicit,i=e.oxw(2);e.Q6J("ngClass",e.VKq(7,h,i.selectedTab!==(null==n?null:n.name))),e.xp6(1),e.Q6J("routerLink",e.DdM(9,T))("queryParams",e.VKq(10,x,n.id)),e.xp6(1),e.Q6J("src",n.productImage,e.LSH),e.xp6(1),e.Q6J("src",n.productImage,e.LSH),e.xp6(2),e.hij("Rs. ",n.sellingPrice,""),e.xp6(2),e.Oqu(n.name)}}function b(t,o){if(1&t&&(e.TgZ(0,"div",12)(1,"h3",13),e._uU(2),e.qZA(),e.YNc(3,p,2,0,"p",14),e.YNc(4,u,2,0,"p",14),e.YNc(5,f,2,0,"p",14),e.YNc(6,G,8,12,"div",15),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.hij(" ",n.selectedTab," "),e.xp6(1),e.Q6J("ngIf","BUDGET GAMING"===n.selectedTab),e.xp6(1),e.Q6J("ngIf","EXTREME GAMING"===n.selectedTab),e.xp6(1),e.Q6J("ngIf","STREAMING"===n.selectedTab),e.xp6(1),e.Q6J("ngForOf",n.productList)}}function v(t,o){1&t&&(e.TgZ(0,"div",20)(1,"div",21),e._UZ(2,"div",22),e.qZA()())}const d=function(t){return{"border border-4 border-dark":t}},_=[{path:"",component:(()=>{class t{constructor(n,i,c){this.productService=n,this.meta=i,this.title=c,this.selectedPC=0,this.isPageLoading=!0,this.selectedTab="BUDGET GAMING",this.meta.addTags([{name:"description",content:""},{name:"author",content:""},{name:"keywords",content:""}]),this.title.setTitle("Budget, Extreme and Streaming Gaming PC")}ngOnInit(){this.getProducts()}getProducts(){this.productService.getAllProducts().subscribe(n=>{this.productList=this.mergeKeyValues(n),this.isPageLoading=!1})}mergeKeyValues(n){let i=Object.keys(n);return Object.values(n).map((C,A)=>Object.assign(Object.assign({},C),{id:i[A]}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(l.M),e.Y36(g.h_),e.Y36(g.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-gaming-pc"]],decls:20,vars:11,consts:[[1,"container"],[1,"d-flex","mt-2"],[1,"mx-1"],["href","","routerLink","/",1,"text-decoration-none","text-dark"],[1,"container-fluid","my-3"],[1,"d-flex","align-items-center",2,"margin-bottom","-4px"],[1,"p-2","cursor-pointer","rounded",3,"ngClass","click"],["src","assets/pc-images/budget/3.png","width","50px","height","50px","alt",""],["src","assets/pc-images/extreme/1.png","width","50px","height","50px","alt",""],["src","assets/pc-images/streaming/2.png","width","50px","height","50px","alt",""],["class","row text-center border border-5 border-dark pt-3","style","border-bottom: none !important;border-left: none !important;border-right: none !important;",4,"ngIf"],["class","row py-5 my-5",4,"ngIf"],[1,"row","text-center","border","border-5","border-dark","pt-3",2,"border-bottom","none !important","border-left","none !important","border-right","none !important"],[1,"text-start"],["class","text-start",4,"ngIf"],["class","col-6 col-md-3 p-1",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-6","col-md-3","p-1",3,"ngClass"],[1,"card","cursor-pointer","bg-dark","text-white","my-1",3,"routerLink","queryParams"],["width","70%","height","280px","alt","",1,"d-none","d-md-block","mx-auto","p-4",3,"src"],["width","90%","height","180px","alt","",1,"d-block","d-md-none","mx-auto","p-4",3,"src"],[1,"row","py-5","my-5"],[1,"text-center"],[1,"spinner-border","text-dark"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e._uU(4,"Home"),e.qZA(),e._uU(5," /"),e.qZA(),e.TgZ(6,"div",2),e._uU(7,"Gaming PCs"),e.qZA()(),e.TgZ(8,"h1"),e._uU(9,"Gaming PCs"),e.qZA()(),e.TgZ(10,"div",4)(11,"div",5)(12,"div",6),e.NdJ("click",function(){return i.selectedTab="BUDGET GAMING"}),e._UZ(13,"img",7),e.qZA(),e.TgZ(14,"div",6),e.NdJ("click",function(){return i.selectedTab="EXTREME GAMING"}),e._UZ(15,"img",8),e.qZA(),e.TgZ(16,"div",6),e.NdJ("click",function(){return i.selectedTab="STREAMING"}),e._UZ(17,"img",9),e.qZA()(),e.YNc(18,b,7,5,"div",10),e.YNc(19,v,3,0,"div",11),e.qZA()),2&n&&(e.xp6(12),e.Q6J("ngClass",e.VKq(5,d,"BUDGET GAMING"===i.selectedTab)),e.xp6(2),e.Q6J("ngClass",e.VKq(7,d,"EXTREME GAMING"===i.selectedTab)),e.xp6(2),e.Q6J("ngClass",e.VKq(9,d,"STREAMING"===i.selectedTab)),e.xp6(2),e.Q6J("ngIf",!i.isPageLoading),e.xp6(1),e.Q6J("ngIf",i.isPageLoading))},directives:[s.yS,a.mk,a.O5,a.sg,s.rH],styles:[".active[_ngcontent-%COMP%]{background-color:#525151!important}.active-tab[_ngcontent-%COMP%]{border-bottom:8px solid black}"]}),t})()}];let P=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.Bz.forChild(_)],s.Bz]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[a.ez,P]]}),t})()}}]);