(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div style=\"background:aliceblue;height:520px\">\n  <router-outlet></router-outlet>\n\n</div>\n\n\n\n<div style=\"background: #3b5998;\">\n<app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  overflow-x: hidden !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvQUJISVNIRUsvbXktZmlyc3QtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyw2QkFBQTtBQ0FEIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0XG5cdG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufSIsImJvZHkge1xuICBvdmVyZmxvdy14OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _body_content_body_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./body-content/body-content.component */ "./src/app/body-content/body-content.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");












var approutes = [
    { path: '', component: _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"] },
    { path: 'registration', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_8__["FormComponent"],
                _body_content_body_content_component__WEBPACK_IMPORTED_MODULE_10__["BodyContentComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(approutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body-content/body-content.component.html":
/*!**********************************************************!*\
  !*** ./src/app/body-content/body-content.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<app-form>\n\n </app-form>\n\n"

/***/ }),

/***/ "./src/app/body-content/body-content.component.less":
/*!**********************************************************!*\
  !*** ./src/app/body-content/body-content.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHktY29udGVudC9ib2R5LWNvbnRlbnQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/body-content/body-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/body-content/body-content.component.ts ***!
  \********************************************************/
/*! exports provided: BodyContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyContentComponent", function() { return BodyContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BodyContentComponent = /** @class */ (function () {
    function BodyContentComponent() {
    }
    BodyContentComponent.prototype.ngOnInit = function () {
    };
    BodyContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body-content',
            template: __webpack_require__(/*! ./body-content.component.html */ "./src/app/body-content/body-content.component.html"),
            styles: [__webpack_require__(/*! ./body-content.component.less */ "./src/app/body-content/body-content.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BodyContentComponent);
    return BodyContentComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n @Copyright 2019\n</p>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.less":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  padding-top: 15px;\n  color: white;\n  text-align: center;\n  font-size: 18px;\n  height: 50px;\n  margin-top: 1%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6L1VzZXJzL0FCSElTSEVLL215LWZpcnN0LWFwcC9zcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NBIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG5wYWRkaW5nLXRvcDoxNXB4O1xuY29sb3I6d2hpdGU7XG50ZXh0LWFsaWduOmNlbnRlcjtcbmZvbnQtc2l6ZToxOHB4O1xuaGVpZ2h0OjUwcHg7XG5tYXJnaW4tdG9wOjElO1xuXG59IiwicCB7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.less */ "./src/app/footer/footer.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<form #companyForm=\"ngForm\">\n<div class=\"userregistration\">User Login</div>\n<div>\n      <label for=\"title\">UserName :</label>\n      <input type=\"text\" class=\"form-control\" id=\"title\"  name=\"Username\" placeholder=\"Enter User Name\">\n    </div>\n  <div>\n      <label for=\"url\">Password :</label>\n      <input type=\"password\" class=\"form-control\" id=\"url\"  name=\"url\" placeholder=\"Enter Password\">\n    </div>\n     <div class=\"setbutton\" style=\"width:100%\">\n     <button type=\"submit\" class=\"btn btn-primary btn-lg\">Submit</button>\n</div>\n <div class=\"forgetpwd\">\n  <span>\n   <a href=\"#\" > Forgotten Account?</a>\n  </span>\n   \n</div>\n<div class=\"newuser\">\nStill not Registered Yet !<br>\n<button  style=\"border:none;background:transparent;color:#337ab7;font-size:18px;\" (click)=\"onloadchange()\">click here</button>\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/form/form.component.less":
/*!******************************************!*\
  !*** ./src/app/form/form.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  width: 27% !important;\n  margin-left: 70%;\n  height: 300px;\n  border-radius: 10px;\n}\n.userregistration {\n  padding-top: 9px;\n  font-size: 20px;\n  text-align: center;\n}\n.setbutton {\n  margin-top: 8px;\n}\nlabel {\n  padding-top: 8px;\n  font-size: 18px;\n}\n.forgetpwd {\n  padding-top: 18px;\n}\n.newuser {\n  padding-bottom: 10px;\n  padding-top: 48px;\n  font-size: 30px;\n  text-align: center;\n}\n.newuser a {\n  font-size: 20px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybS9DOi9Vc2Vycy9BQkhJU0hFSy9teS1maXJzdC1hcHAvc3JjL2FwcC9mb3JtL2Zvcm0uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREdBO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNERDtBRElBO0VBRUEsZUFBQTtBQ0hBO0FETUE7RUFDQyxnQkFBQTtFQUNELGVBQUE7QUNKQTtBRE9BO0VBRUMsaUJBQUE7QUNORDtBRFFBO0VBQ0Esb0JBQUE7RUFFQyxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ1BEO0FEU0E7RUFFQyxlQUFBO0VBQ0Esa0JBQUE7QUNSRCIsImZpbGUiOiJzcmMvYXBwL2Zvcm0vZm9ybS5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm17XG4gICAgXG4gICAgd2lkdGg6IDI3JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA3MCU7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG59XG4udXNlcnJlZ2lzdHJhdGlvbntcblx0cGFkZGluZy10b3A6OXB4O1xuXHRmb250LXNpemU6MjBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG5cbn1cbi5zZXRidXR0b257XG5cdFxubWFyZ2luLXRvcDo4cHg7XG5cbn1cbmxhYmVse1xuXHRwYWRkaW5nLXRvcDo4cHg7XG5mb250LXNpemU6MThweDtcblxufVxuLmZvcmdldHB3ZHtcblx0XG5cdHBhZGRpbmctdG9wOjE4cHg7XG59XG4ubmV3dXNlcntcbnBhZGRpbmctYm90dG9tOjEwcHg7XG5cdFxuXHRwYWRkaW5nLXRvcDo0OHB4O1xuXHRmb250LXNpemU6MzBweDtcblx0dGV4dC1hbGlnbjpjZW50ZXI7XG59XG4ubmV3dXNlciBhe1xuXG5cdGZvbnQtc2l6ZToyMHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuIiwiZm9ybSB7XG4gIHdpZHRoOiAyNyUgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDcwJTtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi51c2VycmVnaXN0cmF0aW9uIHtcbiAgcGFkZGluZy10b3A6IDlweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2V0YnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxubGFiZWwge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uZm9yZ2V0cHdkIHtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG59XG4ubmV3dXNlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNDhweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubmV3dXNlciBhIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FormComponent = /** @class */ (function () {
    function FormComponent(router) {
        this.router = router;
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent.prototype.onloadchange = function () {
        this.router.navigateByUrl('/registration');
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.less */ "./src/app/form/form.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n<div class=\"row\">\r\n<div class=\"col-md-12 setheader\" >\r\n  <div class=\"col-md-3\">\r\n  </div>\r\n<div class=\"col-md-9 heading\">\r\n  <span>{{heading}}</span>\r\n</div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.less":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 5px;\n  background: #3b5998;\n  width: 1365px;\n  height: 90px;\n  min-width: 980px;\n}\nimg {\n  border-radius: 10px;\n  width: 35%;\n  height: 72px;\n  margin-top: -6%;\n}\n.setheader {\n  padding-top: 20px;\n  color: white;\n  font-size: 18px;\n}\n.heading {\n  margin-left: -10%;\n  font-size: 23px;\n  text-align: center;\n}\nimg {\n  border-radius: 10px;\n  width: 67%;\n  height: 74px;\n  margin-top: -6%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6L1VzZXJzL0FCSElTSEVLL215LWZpcnN0LWFwcC9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDQUE7QURHQTtFQUVLLG1CQUFBO0VBQ0QsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRko7QURLQTtFQUVDLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKRDtBRE9BO0VBQ0EsaUJBQUE7RUFDQyxlQUFBO0VBQ0Qsa0JBQUE7QUNMQTtBRFFBO0VBRUssbUJBQUE7RUFDRCxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuXHRcbnBhZGRpbmc6NXB4O1xuYmFja2dyb3VuZDojM2I1OTk4O1xud2lkdGg6MTM2NXB4O1xuaGVpZ2h0OiA5MHB4O1xubWluLXdpZHRoOiA5ODBweDtcblxufVxuaW1ne1xuXHRcblx0ICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgd2lkdGg6IDM1JTtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgbWFyZ2luLXRvcDogLTYlO1xufVxuXG4uc2V0aGVhZGVye1xuXHRcblx0cGFkZGluZy10b3A6MjBweDtcblx0Y29sb3I6d2hpdGU7XG5cdGZvbnQtc2l6ZToxOHB4O1xuXG59XG4uaGVhZGluZ3tcbm1hcmdpbi1sZWZ0Oi0xMCU7XG5cdGZvbnQtc2l6ZToyM3B4O1xudGV4dC1hbGlnbjpjZW50ZXI7XG5cbn1cbmltZ3tcblx0XG5cdCAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHdpZHRoOiA2NyU7XG4gICAgaGVpZ2h0OiA3NHB4O1xuICAgIG1hcmdpbi10b3A6IC02JTtcbn0iLCIuY29udGFpbmVyIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xuICB3aWR0aDogMTM2NXB4O1xuICBoZWlnaHQ6IDkwcHg7XG4gIG1pbi13aWR0aDogOTgwcHg7XG59XG5pbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDcycHg7XG4gIG1hcmdpbi10b3A6IC02JTtcbn1cbi5zZXRoZWFkZXIge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG59XG4uaGVhZGluZyB7XG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xuICBmb250LXNpemU6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA2NyU7XG4gIGhlaWdodDogNzRweDtcbiAgbWFyZ2luLXRvcDogLTYlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.heading = 'Center Of Propulsion Technology Bombay';
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/header/header.component.less")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\" style=\"text-align:center;font-size:20px;padding-top:10px;\"> REGISTRATION FORM</div>\n<div class=\"container\">\n  <div class=\"row\">\n  <div class=\"col-md-6 col-md-offset-3\">\n\n<form #companyForm=\"ngForm\">\n\n<div>\n      <label for=\"title\">Name :</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\"  name=\"Username\" placeholder=\"Enter User Name\">\n    </div>\n  <div>\n      <label for=\"url\">Organisation :</label>\n      <input type=\"password\" class=\"form-control\" id=\"organisation\"  name=\"url\" placeholder=\"Enter Orgainsation\">\n    </div>\n\n    <div>\n      <label for=\"title\">Designation :</label>\n      <input type=\"text\" class=\"form-control\" id=\"designation\"  name=\"Username\" placeholder=\"Enter Designation\">\n    </div>\n  <div>\n      <label for=\"url\">Date Of Birth :</label>\n      <input type=\"password\" class=\"form-control\" id=\"dob\"  name=\"url\" placeholder=\"Enter DOB\">\n    </div>\n\n    <div>\n      <label for=\"title\">Official Email :</label>\n      <input type=\"text\" class=\"form-control\" id=\"mail\"  name=\"Username\" placeholder=\"Enter EmailID\">\n    </div>\n  <div>\n      <label for=\"url\">Mobile No :</label>\n      <input type=\"password\" class=\"form-control\" id=\"mobile\"  name=\"url\" placeholder=\"Enter Mobile Number\">\n    </div>\n     <div class=\"setbutton col-md-5\">\n     <button type=\"submit\" class=\"btn btn-primary btn-md\" style=\"width: 30%;font-size:18px;margin-left:33%;margin-bottom:1%\">Submit</button>\n</div>\n</form>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.less":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\n  font-siz: 20px;\n  textalign: center !important;\n}\ninput {\n  margin-top: 5px;\n  margin-bottom: 10px;\n}\n.setbutton {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0M6L1VzZXJzL0FCSElTSEVLL215LWZpcnN0LWFwcC9zcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyxjQUFBO0VBQ0EsNEJBQUE7QUNBRDtBREVBO0VBRUEsZUFBQTtFQUNBLG1CQUFBO0FDREE7QURJQTtFQUVDLFdBQUE7QUNIRCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXJ7XG5cdFxuXHRmb250LXNpejoyMHB4O1xuXHR0ZXh0YWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7XG59XG5pbnB1dHtcblx0XG5tYXJnaW4tdG9wOjVweDtcbm1hcmdpbi1ib3R0b206MTBweDtcblxufVxuLnNldGJ1dHRvbntcblx0XG5cdHdpZHRoOjEwMCU7XG59IiwiLnJlZ2lzdGVyIHtcbiAgZm9udC1zaXo6IDIwcHg7XG4gIHRleHRhbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zZXRidXR0b24ge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent() {
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.less */ "./src/app/registration/registration.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ABHISHEK\my-first-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map