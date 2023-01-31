"use strict";
(self["webpackChunkgaming_cpu"] = self["webpackChunkgaming_cpu"] || []).push([["src_app_components_homepage_homepage_module_ts"],{

/***/ 1870:
/*!****************************************************************!*\
  !*** ./src/app/components/homepage/homepage-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageRoutingModule": () => (/* binding */ HomepageRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.component */ 8068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _homepage_component__WEBPACK_IMPORTED_MODULE_0__.HomepageComponent }
];
class HomepageRoutingModule {
}
HomepageRoutingModule.ɵfac = function HomepageRoutingModule_Factory(t) { return new (t || HomepageRoutingModule)(); };
HomepageRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomepageRoutingModule });
HomepageRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomepageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8068:
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageComponent": () => (/* binding */ HomepageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/product.service */ 6082);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function HomepageComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "a", 6)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/product?id=" + item_r4.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r4.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r4 == null ? null : item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", item_r4.sellingPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r4.name);
} }
function HomepageComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "a", 6)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/product?id=" + item_r5.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r5.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r5 == null ? null : item_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", item_r5.sellingPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.name);
} }
function HomepageComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 45)(1, "a", 6)(2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 48)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/product?id=" + item_r6.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r6.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r6 == null ? null : item_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", item_r6.sellingPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r6.name);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HomepageComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50)(2, "div", 34)(3, "div", 51)(4, "a", 6)(5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 54)(8, "h2", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Lorem ipsum is a sample text");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, i_r8 == 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/product?id=" + item_r7.id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", item_r7.productImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", item_r7 == null ? null : item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Rs. ", item_r7.sellingPrice, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.name);
} }
class HomepageComponent {
    constructor(productService, meta, title) {
        this.productService = productService;
        this.meta = meta;
        this.title = title;
        this.isPageLoading = true;
        this.meta.addTags([
            { name: 'description', content: 'Buy gaming pc from our customized category of PC. GamingCPU is a leading company for best prebuilt gaming pc at lowest price in India.' },
            { name: 'keywords', content: 'gaming pc, prebuilt pc, cheap, assembled, best' },
            { property: "og:title", content: "Buy Prebuilt Gaming PC Starting From Rs.20,000" },
            { property: "og:site_name", content: "GamingCPU" },
            { property: "og:url", content: "https://gamingcpu.in" },
            { property: "og:description", content: "Buy gaming pc from our customized category of PC. GamingCPU is a leading company for best prebuilt gaming pc at lowest price in India." },
            { property: "og:type", content: "website" },
            { property: "og:image", content: "https://gamingcpu.in/assets/logo.png" },
        ]);
        this.title.setTitle('Buy Prebuilt Gaming PC in India Starting From Rs.20,000');
    }
    ngOnInit() {
        this.getProducts();
    }
    getProducts() {
        this.productService.getAllProducts().subscribe(res => {
            this.productList = this.mergeKeyValues(res);
            this.isPageLoading = false;
        });
    }
    mergeKeyValues(obj) {
        let keys = Object.keys(obj);
        let values = Object.values(obj);
        return values.map((value, index) => {
            return Object.assign(Object.assign({}, value), { id: keys[index] });
        });
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.Title)); };
HomepageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 76, vars: 6, consts: [[1, "container-fluid", "text-white"], [1, "row", "p-1", "py-5", "align-items-center"], [1, "col-md-7"], [1, "display-2", 2, "font-weight", "700"], [1, ""], [1, "d-flex", "d-md-none", "align-items-center", "gap-2"], [3, "href"], [1, "btn", "btn-sm", "btn-dark", "px-3"], ["href", "/contact-us"], [1, "btn", "btn-sm", "btn-light", "px-3", "me-2"], ["target", "_blank", "href", "tel:6209460626"], ["src", "assets/social/whatsapp2.png", "width", "30px", "alt", "Whatsapp icon"], ["target", "_blank", "href", "https://www.instagram.com/rahulkr.dev/"], ["src", "assets/social/instagram.png", "width", "25px"], [1, "d-none", "d-md-block"], [1, "d-flex", "align-items-center", "gap-2"], [1, "btn", "btn-lg", "btn-dark", "px-4"], [1, "btn", "btn-lg", "btn-light", "px-4", "me-2"], ["src", "assets/social/instagram.png", "width", "25px", "alt", "Instagram icon"], [1, "col-md-3", "d-none", "d-md-block", "offset-md-2"], ["id", "mydiv"], ["id", "about", 1, "row"], [1, "col-md-12", "bg-dark", "rounded", "my-5", "p-3", "p-md-5"], [1, "display-4"], [1, "text-sm"], [1, "my-4"], ["id", "carouselExampleCaptions", "data-bs-ride", "carousel", 1, "carousel", "slide", "d-none", "d-lg-block"], [1, "carousel-indicators"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "0", "aria-current", "true", "aria-label", "Slide 1", 1, "active"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "1", "aria-label", "Slide 2"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide-to", "2", "aria-label", "Slide 3"], [1, "carousel-inner"], ["data-bs-interval", "3000", 1, "carousel-item", "active"], [1, "container"], [1, "row"], ["class", "col-6 col-md-3 p-1", 4, "ngFor", "ngForOf"], ["data-bs-interval", "3000", 1, "carousel-item"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "prev", 1, "carousel-control-prev", "bg-dark", 2, "width", "8%"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", "data-bs-target", "#carouselExampleCaptions", "data-bs-slide", "next", 1, "carousel-control-next", "bg-dark", 2, "width", "8%"], ["aria-hidden", "true", 1, "carousel-control-next-icon"], ["id", "carouselExampleCaptions2", "data-bs-ride", "carousel", 1, "carousel", "slide", "d-block", "d-lg-none", "text-dark"], ["class", "carousel-item", "data-bs-interval", "3000", 3, "ngClass", 4, "ngFor", "ngForOf"], ["type", "button", "data-bs-target", "#carouselExampleCaptions2", "data-bs-slide", "next", 1, "carousel-control-next"], [1, "col-6", "col-md-3", "p-1"], [1, "card", "border", "border-3", "border-dark", "cursor-pointer", "text-white", "my-1", 2, "background-color", "unset"], ["width", "80%", "height", "280px", 1, "mx-auto", "p-4", 3, "src", "alt"], [1, "p-2", "text-center"], ["data-bs-interval", "3000", 1, "carousel-item", 3, "ngClass"], [1, "container", "pb-4", "px-2"], [1, "col-12", "p-1"], [1, "card", "cursor-pointer", "my-1", 2, "background-color", "unset"], ["width", "120px", "height", "140px", 1, "p-2", 3, "src", "alt"], [1, "px-2"], [1, "m-0"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Buy Prebuilt Gaming PC Starting From Rs.20,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "GamingCPU is a leading company for best gaming pc at lowest price in India. Purchase your gaming pc from our customized category of PCs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5)(8, "a", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Explore PCs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14)(19, "div", 15)(20, "a", 6)(21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Explore PCs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 8)(24, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21)(33, "div", 22)(34, "h3", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "About US");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " The organization was started in 26th January 2023 with an aim to provide best in quality gaming pc at lowest price without compromising with quality. Also we avoid local components and use only branded components like asus, msi, nvidia, corsair, etc to build pc for better user experience. We focus to build gaming pc that supports most of the pc and playstation games at minimum cost. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "hr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26)(40, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "button", 28)(42, "button", 29)(43, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 31)(45, "div", 32)(46, "div", 33)(47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, HomepageComponent_div_48_Template, 9, 5, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 36)(50, "div", 33)(51, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, HomepageComponent_div_52_Template, 9, 5, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 36)(54, "div", 33)(55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, HomepageComponent_div_56_Template, 9, 5, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "span", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 42)(66, "div", 31)(67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Featured Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Lorem ipsum is a sample text. Add here a description about featured product.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, HomepageComponent_div_71_Template, 14, 8, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "span", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/gaming-pc?category=BUDGET GAMING", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "/gaming-pc?category=BUDGET GAMING", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productList == null ? null : ctx.productList.slice(0, 4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productList == null ? null : ctx.productList.slice(4, 8));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productList == null ? null : ctx.productList.slice(8, 12));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.productList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], styles: ["#mydiv[_ngcontent-%COMP%] {\n  animation: changeBg 15s infinite;\n  background-size: cover;\n  background-repeat: no-repeat;\n  width: 278px;\n  height: 350px;\n}\n\n@keyframes changeBg {\n  0%, 100% {\n    background-image: url(\"/assets/pc-images/extreme/1.png\");\n  }\n  25% {\n    background-image: url(\"/assets/pc-images/extreme/2.png\");\n  }\n  50% {\n    background-image: url(\"/assets/pc-images/extreme/3.png\");\n  }\n  75% {\n    background-image: url(\"/assets/pc-images/extreme/4.png\");\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNHO0lBQVUsd0RBQUE7RUFHWDtFQUZDO0lBQUssd0RBQUE7RUFLTjtFQUpDO0lBQUssd0RBQUE7RUFPTjtFQU5DO0lBQUssd0RBQUE7RUFTTjtBQUNGIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI215ZGl2eyBcclxuICAgIGFuaW1hdGlvbjogY2hhbmdlQmcgMTVzIGluZmluaXRlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMjc4cHg7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbkBrZXlmcmFtZXMgY2hhbmdlQmd7XHJcbiAgIDAlLDEwMCUgIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BjLWltYWdlcy9leHRyZW1lLzEucG5nXCIpO31cclxuICAgMjUlIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BjLWltYWdlcy9leHRyZW1lLzIucG5nXCIpO31cclxuICAgNTAlIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BjLWltYWdlcy9leHRyZW1lLzMucG5nXCIpO31cclxuICAgNzUlIHtiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3BjLWltYWdlcy9leHRyZW1lLzQucG5nXCIpO31cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 7909:
/*!********************************************************!*\
  !*** ./src/app/components/homepage/homepage.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomepageModule": () => (/* binding */ HomepageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage-routing.module */ 1870);
/* harmony import */ var _homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.component */ 8068);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class HomepageModule {
}
HomepageModule.ɵfac = function HomepageModule_Factory(t) { return new (t || HomepageModule)(); };
HomepageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomepageModule });
HomepageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepageRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomepageModule, { declarations: [_homepage_component__WEBPACK_IMPORTED_MODULE_1__.HomepageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _homepage_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomepageRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_homepage_homepage_module_ts.js.map