"use strict";(self.webpackChunkgaming_cpu=self.webpackChunkgaming_cpu||[]).push([[837],{3837:(C,m,a)=>{a.r(m),a.d(m,{GamingPcModule:()=>y});var s=a(9808),c=a(2214),e=a(1223),u=a(6082),l=a(2313);const g=function(t){return{"border border-4 border-dark":t}};function h(t,i){if(1&t&&(e.TgZ(0,"div",8)(1,"a",9)(2,"div",10),e._UZ(3,"img",11),e.qZA()(),e.TgZ(4,"a",12)(5,"div",10),e._UZ(6,"img",13),e.qZA()(),e.TgZ(7,"a",14)(8,"div",10),e._UZ(9,"img",15),e.qZA()()()),2&t){const n=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(3,g,"BUDGET GAMING"===n.selectedTab)),e.xp6(3),e.Q6J("ngClass",e.VKq(5,g,"EXTREME GAMING"===n.selectedTab)),e.xp6(3),e.Q6J("ngClass",e.VKq(7,g,"STREAMING"===n.selectedTab))}}function f(t,i){1&t&&(e.TgZ(0,"p",17),e._uU(1," A budget gaming PC offers an affordable and accessible way to enjoy video games without breaking the bank. It is designed to deliver a smooth gaming experience with limited investment. "),e.qZA())}function x(t,i){1&t&&(e.TgZ(0,"p",17),e._uU(1," An extreme gaming PC is a high-performance machine designed for the most demanding gamers. It is equipped with the latest and greatest hardware to handle the most graphically intense video games and provides an immersive gaming experience. "),e.qZA())}function v(t,i){1&t&&(e.TgZ(0,"p",17),e._uU(1," A streaming PC is a computer specifically designed for live streaming video games or other multimedia content. It has powerful hardware and efficient software to provide smooth and seamless video playback, ensuring high-quality streams for viewers. "),e.qZA())}const b=function(t){return{"d-none":t}};function T(t,i){if(1&t&&(e.TgZ(0,"div",20)(1,"a",21)(2,"div",22),e._UZ(3,"img",23)(4,"img",24),e.TgZ(5,"h3"),e._uU(6),e.qZA(),e.TgZ(7,"p"),e._uU(8),e.qZA()()()()),2&t){const n=i.$implicit,o=e.oxw(2);e.Q6J("ngClass",e.VKq(8,b,o.selectedTab!==(null==n?null:n.name))),e.xp6(1),e.Q6J("href","/product?id="+n.id+"&name="+n.productName+"&image="+n.productImage,e.LSH),e.xp6(2),e.Q6J("src",n.productImage,e.LSH)("alt",null==n?null:n.name),e.xp6(1),e.Q6J("src",n.productImage,e.LSH)("alt",null==n?null:n.name),e.xp6(2),e.hij("Rs. ",n.sellingPrice,""),e.xp6(2),e.Oqu(n.name)}}function G(t,i){if(1&t&&(e.TgZ(0,"div",16)(1,"h3",17),e._uU(2),e.qZA(),e.YNc(3,f,2,0,"p",18),e.YNc(4,x,2,0,"p",18),e.YNc(5,v,2,0,"p",18),e.YNc(6,T,9,10,"div",19),e.qZA()),2&t){const n=e.oxw();e.xp6(2),e.hij(" ",n.selectedTab," "),e.xp6(1),e.Q6J("ngIf","BUDGET GAMING"===n.selectedTab),e.xp6(1),e.Q6J("ngIf","EXTREME GAMING"===n.selectedTab),e.xp6(1),e.Q6J("ngIf","STREAMING"===n.selectedTab),e.xp6(1),e.Q6J("ngForOf",n.productList)}}function P(t,i){1&t&&(e.TgZ(0,"div",25)(1,"div",26),e._UZ(2,"div",27),e.qZA()())}const Z=[{path:"",component:(()=>{class t{constructor(n,o,p,d){this.productService=n,this.route=o,this.meta=p,this.title=d,this.selectedPC=0,this.isPageLoading=!0,this.selectedTab="BUDGET GAMING",this.meta.addTags([{name:"description",content:"Are you looking for gaming computers at lowest price. Find PC that suits best for your purpose."},{name:"keywords",content:""}]),this.title.setTitle("Budget, Extreme and Streaming PC - GamingCPU"),o.queryParams.subscribe(r=>{console.log(r),this.selectedTab=(null==r?void 0:r.category)||"BUDGET GAMING"})}ngOnInit(){this.getProducts()}getProducts(){this.productService.getAllProducts().subscribe(n=>{this.productList=this.mergeKeyValues(n),this.isPageLoading=!1})}mergeKeyValues(n){let o=Object.keys(n);return Object.values(n).map((d,r)=>Object.assign(Object.assign({},d),{id:o[r]}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(u.M),e.Y36(c.gz),e.Y36(l.h_),e.Y36(l.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-gaming-pc"]],decls:14,vars:3,consts:[[1,"container"],[1,"d-flex","mt-2"],[1,"mx-1"],["href","/",1,"text-decoration-none","text-dark"],[1,"container-fluid","my-3"],["class","d-flex align-items-center","style","margin-bottom: -4px;",4,"ngIf"],["class","row text-center border border-5 border-dark pt-3","style","border-bottom: none !important;border-left: none !important;border-right: none !important;",4,"ngIf"],["class","row py-5 my-5",4,"ngIf"],[1,"d-flex","align-items-center",2,"margin-bottom","-4px"],["href","/gaming-pc?category=BUDGET GAMING"],[1,"p-2","cursor-pointer","rounded",3,"ngClass"],["src","assets/pc-images/budget/3.png","width","50px","height","50px","alt","BUDGET"],["href","/gaming-pc?category=EXTREME GAMING"],["src","assets/pc-images/extreme/1.png","width","50px","height","50px","alt","EXTREME"],["href","/gaming-pc?category=STREAMING"],["src","assets/pc-images/streaming/2.png","width","50px","height","50px","alt","STREAMING"],[1,"row","text-center","border","border-5","border-dark","pt-3",2,"border-bottom","none !important","border-left","none !important","border-right","none !important"],[1,"text-start"],["class","text-start",4,"ngIf"],["class","col-6 col-md-4 col-lg-3 p-1",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-6","col-md-4","col-lg-3","p-1",3,"ngClass"],[3,"href"],[1,"card","cursor-pointer","my-1"],["width","70%","height","280px",1,"d-none","d-md-block","mx-auto","p-4",3,"src","alt"],["width","100%","height","200px",1,"d-block","d-md-none","mx-auto","p-4",3,"src","alt"],[1,"row","py-5","my-5"],[1,"text-center"],[1,"spinner-border","text-dark"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),e._uU(4,"Home"),e.qZA(),e._uU(5," /"),e.qZA(),e.TgZ(6,"div",2),e._uU(7,"Gaming PCs"),e.qZA()(),e.TgZ(8,"h1"),e._uU(9,"Gaming PCs"),e.qZA()(),e.TgZ(10,"div",4),e.YNc(11,h,10,9,"div",5),e.YNc(12,G,7,5,"div",6),e.YNc(13,P,3,0,"div",7),e.qZA()),2&n&&(e.xp6(11),e.Q6J("ngIf",!o.isPageLoading),e.xp6(1),e.Q6J("ngIf",!o.isPageLoading),e.xp6(1),e.Q6J("ngIf",o.isPageLoading))},directives:[s.O5,s.mk,s.sg],styles:[".active[_ngcontent-%COMP%]{background-color:#525151!important}.active-tab[_ngcontent-%COMP%]{border-bottom:8px solid black}"]}),t})()}];let A=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(Z)],c.Bz]}),t})(),y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[s.ez,A]]}),t})()}}]);