"use strict";(self.webpackChunkgaming_cpu=self.webpackChunkgaming_cpu||[]).push([[837],{3837:(C,m,a)=>{a.r(m),a.d(m,{GamingPcModule:()=>y});var c=a(9808),s=a(4414),t=a(1223),u=a(6082),l=a(2313);const g=function(e){return{"border border-4 border-dark":e}};function f(e,i){if(1&e&&(t.TgZ(0,"div",8)(1,"a",9)(2,"div",10),t._UZ(3,"img",11),t.qZA()(),t.TgZ(4,"a",12)(5,"div",10),t._UZ(6,"img",13),t.qZA()(),t.TgZ(7,"a",14)(8,"div",10),t._UZ(9,"img",15),t.qZA()()()),2&e){const n=t.oxw();t.xp6(2),t.Q6J("ngClass",t.VKq(3,g,"BUDGET GAMING"===n.selectedTab)),t.xp6(3),t.Q6J("ngClass",t.VKq(5,g,"EXTREME GAMING"===n.selectedTab)),t.xp6(3),t.Q6J("ngClass",t.VKq(7,g,"STREAMING"===n.selectedTab))}}function h(e,i){1&e&&(t.TgZ(0,"p",17),t._uU(1," Enjoy all your favourite latest games without breaking the bank. "),t.qZA())}function x(e,i){1&e&&(t.TgZ(0,"p",17),t._uU(1," Extreme grade with high-end 4k and VR gaming experience. "),t.qZA())}function T(e,i){1&e&&(t.TgZ(0,"p",17),t._uU(1," Top of the line Streaming ready gaming system. "),t.qZA())}const G=function(e){return{"d-none":e}};function b(e,i){if(1&e&&(t.TgZ(0,"div",20)(1,"a",21)(2,"div",22),t._UZ(3,"img",23)(4,"img",24),t.TgZ(5,"h3"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA()()()()),2&e){const n=i.$implicit,o=t.oxw(2);t.Q6J("ngClass",t.VKq(8,G,o.selectedTab!==(null==n?null:n.name))),t.xp6(1),t.Q6J("href","/product?id="+n.id+"&name="+n.productName+"&image="+n.productImage,t.LSH),t.xp6(2),t.Q6J("src",n.productImage,t.LSH)("alt",null==n?null:n.name),t.xp6(1),t.Q6J("src",n.productImage,t.LSH)("alt",null==n?null:n.name),t.xp6(2),t.hij("Rs. ",n.sellingPrice,""),t.xp6(2),t.Oqu(n.name)}}function v(e,i){if(1&e&&(t.TgZ(0,"div",16)(1,"h3",17),t._uU(2),t.qZA(),t.YNc(3,h,2,0,"p",18),t.YNc(4,x,2,0,"p",18),t.YNc(5,T,2,0,"p",18),t.YNc(6,b,9,10,"div",19),t.qZA()),2&e){const n=t.oxw();t.xp6(2),t.hij(" ",n.selectedTab," "),t.xp6(1),t.Q6J("ngIf","BUDGET GAMING"===n.selectedTab),t.xp6(1),t.Q6J("ngIf","EXTREME GAMING"===n.selectedTab),t.xp6(1),t.Q6J("ngIf","STREAMING"===n.selectedTab),t.xp6(1),t.Q6J("ngForOf",n.productList)}}function P(e,i){1&e&&(t.TgZ(0,"div",25)(1,"div",26),t._UZ(2,"div",27),t.qZA()())}const Z=[{path:"",component:(()=>{class e{constructor(n,o,p,d){this.productService=n,this.route=o,this.meta=p,this.title=d,this.selectedPC=0,this.isPageLoading=!0,this.selectedTab="BUDGET GAMING",this.meta.addTags([{name:"description",content:"Are you looking for gaming computers at lowest price. Find PC that suits best for your purpose."},{name:"keywords",content:""}]),this.title.setTitle("Budget, Extreme and Streaming PC - GamingCPU"),o.queryParams.subscribe(r=>{console.log(r),this.selectedTab=(null==r?void 0:r.category)||"BUDGET GAMING"})}ngOnInit(){this.getProducts()}getProducts(){this.productService.getAllProducts().subscribe(n=>{this.productList=this.mergeKeyValues(n),this.isPageLoading=!1})}mergeKeyValues(n){let o=Object.keys(n);return Object.values(n).map((d,r)=>Object.assign(Object.assign({},d),{id:o[r]}))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.M),t.Y36(s.gz),t.Y36(l.h_),t.Y36(l.Dx))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-gaming-pc"]],decls:14,vars:3,consts:[[1,"container"],[1,"d-flex","mt-2"],[1,"mx-1"],["href","/",1,"text-decoration-none","text-dark"],[1,"container-fluid","my-3"],["class","d-flex align-items-center","style","margin-bottom: -4px;",4,"ngIf"],["class","row text-center border border-5 border-dark pt-3","style","border-bottom: none !important;border-left: none !important;border-right: none !important;",4,"ngIf"],["class","row py-5 my-5",4,"ngIf"],[1,"d-flex","align-items-center",2,"margin-bottom","-4px"],["href","/gaming-pc?category=BUDGET GAMING"],[1,"p-2","cursor-pointer","rounded",3,"ngClass"],["src","assets/pc-images/budget/3.png","width","50px","height","50px","alt","BUDGET"],["href","/gaming-pc?category=EXTREME GAMING"],["src","assets/pc-images/extreme/1.png","width","50px","height","50px","alt","EXTREME"],["href","/gaming-pc?category=STREAMING"],["src","assets/pc-images/streaming/2.png","width","50px","height","50px","alt","STREAMING"],[1,"row","text-center","border","border-5","border-dark","pt-3",2,"border-bottom","none !important","border-left","none !important","border-right","none !important"],[1,"text-start"],["class","text-start",4,"ngIf"],["class","col-6 col-md-3 p-1",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-6","col-md-3","p-1",3,"ngClass"],[3,"href"],[1,"card","cursor-pointer","bg-dark","text-white","my-1"],["width","70%","height","280px",1,"d-none","d-md-block","mx-auto","p-4",3,"src","alt"],["width","90%","height","180px",1,"d-block","d-md-none","mx-auto","p-4",3,"src","alt"],[1,"row","py-5","my-5"],[1,"text-center"],[1,"spinner-border","text-dark"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),t._uU(4,"Home"),t.qZA(),t._uU(5," /"),t.qZA(),t.TgZ(6,"div",2),t._uU(7,"Gaming PCs"),t.qZA()(),t.TgZ(8,"h1"),t._uU(9,"Gaming PCs"),t.qZA()(),t.TgZ(10,"div",4),t.YNc(11,f,10,9,"div",5),t.YNc(12,v,7,5,"div",6),t.YNc(13,P,3,0,"div",7),t.qZA()),2&n&&(t.xp6(11),t.Q6J("ngIf",!o.isPageLoading),t.xp6(1),t.Q6J("ngIf",!o.isPageLoading),t.xp6(1),t.Q6J("ngIf",o.isPageLoading))},directives:[c.O5,c.mk,c.sg],styles:[".active[_ngcontent-%COMP%]{background-color:#525151!important}.active-tab[_ngcontent-%COMP%]{border-bottom:8px solid black}"]}),e})()}];let A=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[s.Bz.forChild(Z)],s.Bz]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,A]]}),e})()}}]);