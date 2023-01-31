"use strict";
(self["webpackChunkgaming_cpu"] = self["webpackChunkgaming_cpu"] || []).push([["src_app_components_contact-us_contact-us_module_ts"],{

/***/ 9970:
/*!********************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsRoutingModule": () => (/* binding */ ContactUsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us.component */ 4445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _contact_us_component__WEBPACK_IMPORTED_MODULE_0__.ContactUsComponent }
];
class ContactUsRoutingModule {
}
ContactUsRoutingModule.ɵfac = function ContactUsRoutingModule_Factory(t) { return new (t || ContactUsRoutingModule)(); };
ContactUsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactUsRoutingModule });
ContactUsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 4445:
/*!***************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsComponent": () => (/* binding */ ContactUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class ContactUsComponent {
    constructor() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({});
        this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    }
    ngOnInit() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.pattern(this.emailRegex)]),
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.max(10)]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required)
        });
    }
    onSubmit() {
        console.log(this.contactForm.value);
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(); };
ContactUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 36, vars: 13, consts: [[1, "container"], [1, "d-flex", "mt-2"], [1, "mx-1"], ["href", "/", 1, "text-decoration-none", "text-dark"], [1, "container", "my-3"], [3, "formGroup", "ngSubmit"], [1, ""], [1, "row", "g-3"], [1, "col-6", "col-md-4"], ["for", "inputPhoneNumber4", 1, "form-label"], ["type", "text", "formControlName", "fullname", "id", "inputPhoneNumber4"], ["for", "inputEmail4", 1, "form-label"], ["type", "email", "formControlName", "email", "id", "inputEmail4"], [1, "col-12", "col-md-8"], ["type", "text", "formControlName", "phoneNumber", "id", "inputPhoneNumber4"], ["for", "inputMessage4", 1, "form-label"], ["type", "text", "formControlName", "message", "id", "inputMessage4"], ["type", "submit", 1, "btn", "btn-lg", "btn-dark", "my-3", "p-2", "px-5"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " /");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 4)(11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "We\u2019re Always Here for You");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Please do not hesitate to contact us if you require further information about our logisitc service.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_15_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 6)(17, "div", 7)(18, "div", 8)(19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 8)(23, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Email Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13)(27, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Phone Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13)(31, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("form-control p-2 px-3 border border-3 ", ((tmp_1_0 = ctx.contactForm.get("fullname")) == null ? null : tmp_1_0.errors) && ((tmp_1_0 = ctx.contactForm.get("fullname")) == null ? null : tmp_1_0.touched) ? "border-danger" : "border-dark", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("form-control p-2 px-3 border border-3 ", ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.errors) && ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.touched) ? "border-danger" : "border-dark", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("form-control p-2 px-3 border border-3 ", ((tmp_3_0 = ctx.contactForm.get("phoneNumber")) == null ? null : tmp_3_0.errors) && ((tmp_3_0 = ctx.contactForm.get("phoneNumber")) == null ? null : tmp_3_0.touched) ? "border-danger" : "border-dark", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("form-control p-2 px-3 border border-3 ", ((tmp_4_0 = ctx.contactForm.get("message")) == null ? null : tmp_4_0.errors) && ((tmp_4_0 = ctx.contactForm.get("message")) == null ? null : tmp_4_0.touched) ? "border-danger" : "border-dark", "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormControlName], styles: [".form-label[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.border-danger[_ngcontent-%COMP%] {\n  border-color: darkred !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQ0FBQTtBQUVKIiwiZmlsZSI6ImNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuLmJvcmRlci1kYW5nZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrcmVkICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8284:
/*!************************************************************!*\
  !*** ./src/app/components/contact-us/contact-us.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactUsModule": () => (/* binding */ ContactUsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-us-routing.module */ 9970);
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact-us.component */ 4445);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class ContactUsModule {
}
ContactUsModule.ɵfac = function ContactUsModule_Factory(t) { return new (t || ContactUsModule)(); };
ContactUsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactUsModule });
ContactUsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
            _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactUsModule, { declarations: [_contact_us_component__WEBPACK_IMPORTED_MODULE_1__.ContactUsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule,
        _contact_us_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactUsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_contact-us_contact-us_module_ts.js.map