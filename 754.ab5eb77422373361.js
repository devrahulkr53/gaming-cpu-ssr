"use strict";(self.webpackChunkgaming_cpu=self.webpackChunkgaming_cpu||[]).push([[754],{754:(b,o,n)=>{n.r(o),n.d(o,{OrderSuccessModule:()=>m});var c=n(9808),u=n(2214),d=n(1223),p=n(6082),t=n(2313);const a=[{path:"",component:(()=>{class e{constructor(r,l,h,A){this.route=r,this.productService=l,this.meta=h,this.title=A,this.productId="",this.meta.addTags([{name:"description",content:""},{name:"author",content:""},{name:"keywords",content:""}]),r.queryParams.subscribe(i=>{this.billingAddress=JSON.parse(null==i?void 0:i.data),this.productId=i.id,this.getProduct(this.productId)})}ngOnInit(){}getProduct(r){this.productService.getProductById(r).subscribe(l=>{this.product=l,this.title.setTitle(null==l?void 0:l.productName)})}}return e.\u0275fac=function(r){return new(r||e)(d.Y36(u.gz),d.Y36(p.M),d.Y36(t.h_),d.Y36(t.Dx))},e.\u0275cmp=d.Xpm({type:e,selectors:[["app-order-success"]],decls:40,vars:14,consts:[[1,"d-flex","align-items-center","my-3"],["src","assets/icons/check-outline.png","width","50px","height","50px","alt","Check icon"],[1,"p-3"],[1,"m-0"],[1,"container","fluid","mb-5"],[1,"row"],[1,"col-md-7","p-0"],[1,"p-3","px-4","border","border-4","border-dark","rounded"],[1,"btn","btn-lg","btn-dark"],[1,"p-3","px-4","bg-dark","text-white","py-4","rounded","mt-3"],[1,"col-md-5"],[1,"py-4"],["width","80px",3,"src","alt"],[1,"p-2"],["href","",1,"text-dark"],[1,"display-6"]],template:function(r,l){1&r&&(d.TgZ(0,"div",0),d._UZ(1,"img",1),d.TgZ(2,"div",2)(3,"h6",3),d._uU(4),d.qZA(),d.TgZ(5,"h4"),d._uU(6),d.qZA()()(),d.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"h4"),d._uU(12,"Your order has been placed for Rs. 29,898"),d.qZA(),d.TgZ(13,"p"),d._uU(14,"You order will be delivered withing 4-5 business days."),d.qZA(),d.TgZ(15,"button",8),d._uU(16,"Track Order"),d.qZA()(),d.TgZ(17,"div",9)(18,"h4"),d._uU(19,"Order Information"),d.qZA(),d.TgZ(20,"div"),d._uU(21),d.qZA(),d.TgZ(22,"div"),d._uU(23),d.qZA(),d.TgZ(24,"div"),d._uU(25),d.qZA(),d.TgZ(26,"div"),d._uU(27),d.qZA()()(),d.TgZ(28,"div",10)(29,"div",11),d._UZ(30,"img",12),d.TgZ(31,"div",13)(32,"h5"),d._uU(33),d.qZA(),d.TgZ(34,"p"),d._uU(35),d.qZA(),d.TgZ(36,"a",14),d._uU(37,"Specification details"),d.qZA(),d.TgZ(38,"p",15),d._uU(39),d.qZA()()()()()()),2&r&&(d.xp6(4),d.hij("Order Id #",null==l.billingAddress?null:l.billingAddress.orderId,""),d.xp6(2),d.hij("Thank you ",null==l.billingAddress?null:l.billingAddress.fullname,""),d.xp6(15),d.hij("Fullname: ",null==l.billingAddress?null:l.billingAddress.fullname,""),d.xp6(2),d.hij("Email Address: ",null==l.billingAddress?null:l.billingAddress.email,""),d.xp6(2),d.hij("Phone Number: ",null==l.billingAddress?null:l.billingAddress.phoneNumber,""),d.xp6(2),d.HOy("Address: ",null==l.billingAddress?null:l.billingAddress.address," ",null==l.billingAddress?null:l.billingAddress.address2," ",null==l.billingAddress?null:l.billingAddress.city," - ",null==l.billingAddress?null:l.billingAddress.zip,""),d.xp6(3),d.Q6J("src",null==l.product?null:l.product.productImage,d.LSH)("alt",null==l.product?null:l.product.name),d.xp6(3),d.Oqu(null==l.product?null:l.product.name),d.xp6(2),d.Oqu(null==l.product?null:l.product.productName),d.xp6(4),d.hij("Rs. ",null==l.product?null:l.product.sellingPrice,""))},styles:[""]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[u.Bz.forChild(a)],u.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[c.ez,g]]}),e})()}}]);