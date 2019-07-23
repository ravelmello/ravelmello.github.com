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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<app-header></app-header>\n<app-sidebar></app-sidebar>\n<app-employement></app-employement>\n<app-footer></app-footer>\n<router-outlet></router-outlet>\n"

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
        this.title = 'site-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _employement_employement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employement/employement.component */ "./src/app/employement/employement.component.ts");
/* harmony import */ var _employement_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employement/jobs/jobs.component */ "./src/app/employement/jobs/jobs.component.ts");
/* harmony import */ var _employement_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./employement/skills/skills.component */ "./src/app/employement/skills/skills.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _employement_employement_component__WEBPACK_IMPORTED_MODULE_9__["EmployementComponent"],
                _employement_jobs_jobs_component__WEBPACK_IMPORTED_MODULE_10__["JobsComponent"],
                _employement_skills_skills_component__WEBPACK_IMPORTED_MODULE_11__["SkillsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employement/employement.component.css":
/*!*******************************************************!*\
  !*** ./src/app/employement/employement.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVtZW50L2VtcGxveWVtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employement/employement.component.html":
/*!********************************************************!*\
  !*** ./src/app/employement/employement.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"professional\" class=\"container-fluid\" data-section=\"home\">\n  <div class=\"row flex-row\">\n    <div id=\"pro-experience\" class=\"col-md-4 flex-column dark nopadding ui-bg-color02 flex-col\"\n      data-animation-origin=\"bottom\" data-animation-duration=\"300\" data-animation-delay=\"800\"\n      data-animation-distance=\"200px\">\n      <app-jobs></app-jobs>\n    </div>\n\n    <div id=\"circle-skills\" class=\"col-md-8 flex-column dark nopadding ui-block-color03 flex-col\"\n      data-section=\"progress\" data-animation-origin=\"right\" data-animation-duration=\"400\" data-animation-delay=\"1100\"\n      data-animation-distance=\"200px\" style=\"visibility: visible;\">\n      <app-skills></app-skills>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/employement/employement.component.ts":
/*!******************************************************!*\
  !*** ./src/app/employement/employement.component.ts ***!
  \******************************************************/
/*! exports provided: EmployementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployementComponent", function() { return EmployementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployementComponent = /** @class */ (function () {
    function EmployementComponent() {
    }
    EmployementComponent.prototype.ngOnInit = function () {
    };
    EmployementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employement',
            template: __webpack_require__(/*! ./employement.component.html */ "./src/app/employement/employement.component.html"),
            styles: [__webpack_require__(/*! ./employement.component.css */ "./src/app/employement/employement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployementComponent);
    return EmployementComponent;
}());



/***/ }),

/***/ "./src/app/employement/jobs/jobs.component.css":
/*!*****************************************************!*\
  !*** ./src/app/employement/jobs/jobs.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVtZW50L2pvYnMvam9icy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employement/jobs/jobs.component.html":
/*!******************************************************!*\
  !*** ./src/app/employement/jobs/jobs.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"padding-50 flex-panel\">\n  <h3 class=\"font-accident-two-normal uppercase title\">Employment</h3>\n  <div class=\"dividewhite4\"></div>\n  <div class=\"experience\">\n      <ul class=\"\">\n          <li class=\"date\">04/2014 - 04/2015</li>\n          <li class=\"company uppercase\">\n              <a>\n                  Vox Tecnologia. João Pessoa, Brazil.\n              </a>\n          </li>\n          <li class=\"position\">Junior Web Analyst</li>\n      </ul>\n      <ul class=\"\">\n          <li class=\"date\">04/2015 - 04/2017</li>\n          <li class=\"company uppercase\">\n              <a>\n                  Vox Tecnologia. João Pessoa, Brazil\n              </a>\n          </li>\n          <li class=\"position\">Plain Web Analyst</li>\n      </ul>\n      <ul class=\"\">\n          <li class=\"date\">06/2017 - 02/2018</li>\n          <li class=\"company uppercase\">\n              <a>\n                  Indra Company. João Pessoa Brazil.\n              </a>\n          </li>\n          <li class=\"position\">Plain Java Web Developer</li>\n      </ul>\n      <ul class=\"\">\n          <li class=\"date\">02/2018 - 07/2018</li>\n          <li class=\"company uppercase\">\n              <a>\n                  Indra Company. João Pessoa Brazil.\n              </a>\n          </li>\n          <li class=\"position\">Production Manager</li>\n      </ul>\n      <ul class=\"\">\n          <li class=\"date\">07/2018 - Today</li>\n          <li class=\"company uppercase\">\n              <a>\n                  Cast Group. Recife, Brazil.\n              </a>\n          </li>\n          <li class=\"position\">Project Coordinator</li>\n      </ul>\n  </div>\n  <a href=\"#\" class=\"btn btn-wh-trans btn-xs\">Learn More</a>\n  <div class=\"dividewhite1\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/employement/jobs/jobs.component.ts":
/*!****************************************************!*\
  !*** ./src/app/employement/jobs/jobs.component.ts ***!
  \****************************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JobsComponent = /** @class */ (function () {
    function JobsComponent() {
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    JobsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.component.html */ "./src/app/employement/jobs/jobs.component.html"),
            styles: [__webpack_require__(/*! ./jobs.component.css */ "./src/app/employement/jobs/jobs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "./src/app/employement/skills/skills.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employement/skills/skills.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVtZW50L3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employement/skills/skills.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employement/skills/skills.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"padding-50 flex-panel\">\n  <h3 class=\"font-accident-two-normal uppercase title\">Professional skills</h3>\n  <div class=\"dividewhite1\"></div>\n  <div class=\"row\">\n\n      <div class=\"col-md-4 col-sm-4 col-xs-12 nopadding\">\n          <div class=\"progressbar text-center\">\n              <div id=\"circle1\"\n                   data-progressbar=\"circle\"\n                   data-progressbar-color=\"#fff\"\n                   data-progressbar-trailcolor=\"#fff\"\n                   data-progressbar-to='{\"color\": \"#51f2ec\", \"width\": 4}'\n                   data-progressbar-from='{\"color\": \"#3498db\", \"width\": 4}'\n                   data-progressbar-value=\"0.75\"\n               >\n              </div>\n              <h4 class=\"font-accident-two-bold uppercase\">Front-End</h4>\n              <p class=\"font-regular-normal\">\n                  A front end web developer\n              </p>\n              <a href=\"#\" class=\"btn btn-wh-trans btn-xs\">Learn More</a>\n          </div>\n          <div class=\"dividewhite1\"></div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-4 col-xs-12 nopadding\">\n          <div class=\"progressbar text-center\">\n              <div id=\"circle2\"\n                   data-progressbar=\"circle\"\n                   data-progressbar-color=\"#fff\"\n                   data-progressbar-trailcolor=\"#fff\"\n                   data-progressbar-to='{\"color\": \"#ffd200\", \"width\": 4}'\n                   data-progressbar-from='{\"color\": \"#3498db\", \"width\": 4}'\n                   data-progressbar-value=\"0.90\">\n              </div>\n              <h4 class=\"font-accident-two-bold uppercase\">Back End</h4>\n              <p class=\"font-regular-normal\">\n                  A Java Back End developer\n              </p>\n              <a href=\"#\" class=\"btn btn-wh-trans btn-xs\">Learn More</a>\n          </div>\n          <div class=\"dividewhite1\"></div>\n      </div>\n\n      <div class=\"col-md-4 col-sm-4 col-xs-12 nopadding\">\n          <div class=\"progressbar text-center\">\n              <div id=\"circle3\"\n                   data-progressbar=\"circle\"\n                   data-progressbar-color=\"#fff\"\n                   data-progressbar-trailcolor=\"#fff\"\n                   data-progressbar-to='{\"color\": \"#F09C88\", \"width\": 4}'\n                   data-progressbar-from='{\"color\": \"#3498db\", \"width\": 4}'\n                   data-progressbar-value=\"0.70\">\n              </div>\n              <h4 class=\"font-accident-two-bold uppercase\">Support</h4>\n              <p class=\"font-regular-normal\">\n                  Software development is the process of computer programming ...\n              </p>\n              <a href=\"#\" class=\"btn btn-wh-trans btn-xs\">Learn More</a>\n          </div>\n          <div class=\"dividewhite1\"></div>\n      </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/employement/skills/skills.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employement/skills/skills.component.ts ***!
  \********************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/employement/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/employement/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <footer class=\"padding-50 dark ui-bg-color01\" data-animation-origin=\"top\" data-animation-duration=\"500\" data-animation-delay=\"800\" data-animation-distance=\"50px\" style=\"visibility: visible;\">\n      <div class=\"container-fluid nopadding\">\n          <div class=\"row\">\n              <div class=\"col-sm-5 cv-link\">\n                  <h5 class=\"font-accident-two-bold uppercase\">Download cv</h5>\n                  <div class=\"dividewhite1\"></div>\n                  <a href=\"#!\"><i class=\"fas fa-arrow-down\" aria-hidden=\"true\"></i> English </a> &nbsp;\n                  <a href=\"#!\"><i class=\"fas fa-arrow-down\" aria-hidden=\"true\"></i> German</a>&nbsp;\n                  <a href=\"#!\"><i class=\"fas fa-arrow-down\" aria-hidden=\"true\"></i> Spanish</a> &nbsp;\n                  <p class=\"inline-block\">\n                      The CV is in .pdf format. Use the Adobe Reader to open it.\n                  </p>\n                  <div class=\"divider-dynamic\"></div>\n              </div>\n              <div class=\"col-sm-4\">\n                  <h5 class=\"font-accident-two-bold uppercase\">Newsletter</h5>\n                  <div class=\"dividewhite1\"></div>\n                  <input class=\"newsletter-email\" type=\"email\"  disabled=true  name=\"ne\" placeholder=\"Your Email\">\n                  <a href=\"#!\" class=\"btn btn-wh-trans btn-xs\">OK</a>\n                  <div class=\"divider-dynamic\"></div>\n              </div>\n              <div class=\"col-sm-3\">\n                <h5 class=\"font-accident-two-bold uppercase\">Follow me</h5>\n                <div class=\"follow\">\n                   <ul class=\"list-inline\">\n                      <li class=\"list-inline-item\"><a target=\"_blank\" href=\"#\"><i class=\"flaticon-linkedin\"></i></a></li>\n                      <li class=\"list-inline-item\"><a target=\"_blank\" href=\"#\"><i class=\"\"></i></a></li>\n                    </ul>\n                </div>\n                <div class=\"divider-dynamic\"></div>\n             </div>\n          </div>\n          <div class=\"dividewhite1\"></div>\n          <div class=\"row\"> \n              <div class=\"col-md-12 copyrights\">\n                  <p>© 2018 Ravel Melo</p>\n              </div>\n          </div>\n      </div>\n  </footer>"

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
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    <section id=\"top-navigation\" class=\"container-fluid nopadding\">\n\n        <div class=\"row ident nopadding ui-bg-color01\">\n            <!-- Foto do perfil -->\n            <div class=\"col-md-4 nopadding\">\n              <a href=\"\">\n                <div id=\"top-photo\" class=\"vc-foto photo-01\">&nbsp;</div>\n              </a>\n            </div>\n            <div class=\"col-md-8 vc-name nopadding\">\n                <!-- Name-Position -->\n                <div class=\"row nopadding name\">\n                    <div class=\"col-md-10 name-title\"><h1 class=\"font-accident-two-extralight\">Ravel da Costa Melo</h1></div>\n                    <div class=\"col-md-2 nopadding name-pdf\">\n                        <a href=\"https://docs.google.com/document/d/17BPwTjwyavKiv4EFEo-hEbxiCGNbzoN0y1Gu627xPDE/edit?usp=sharing\" target=\"_blank\" class=\"hvr-sweep-to-right\">\n                          <i class=\"fi fi-creative-download\" title=\"Download CV.pdf\"></i></a>\n                    </div>\n                </div>\n                <div class=\"row nopadding position\">\n                    <div class=\"col-md-10 position-title\">\n                        <section class=\"cd-intro\">\n                            <h2 class=\"cd-headline clip is-full-width font-accident-two-light uppercase\">\n                                <span>The experienced &nbsp;</span>\n                                <span class=\"cd-words-wrapper\" style=\"width: 110px\">\n                           <b class=\"is-visible\"> Developer</b>\n                           <b>Manager</b>\n                           <b>Analist</b>\n                        </span>\n                            </h2>\n                        </section>\n                    </div>\n                    <div class=\"col-md-2 nopadding pdf\">\n                        <a href=\"https://www.linkedin.com/in/ravel-mello/\" target=\"_blank\" class=\"hvr-sweep-to-right\">\n                          <i class=\"flaticon-linkedin\" title=\"My LinkedIn\"></i></a>\n                    </div>\n                </div>\n\n                <!-- Main Navigation -->\n\n                <app-menu></app-menu>\n\n            \n                <!-- /Main Navigation -->\n            </div>\n        </div>\n    </section>\n</header>"

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
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"nav\" class=\"row nopadding cd-side-navigation\">\n    <li class=\"col-xs-4 col-sm-2 nopadding menuitem ui-menu-color01\" data-animation-duration=\"1000\" data-animation-delay=\"100\" style=\"visibility: visible;\">\n       <a href=\"#\" class=\"hvr-sweep-to-bottom\"><i class=\"flaticon-home\"></i><span>home</span></a>\n    </li>\n    <li class=\"col-xs-4 col-sm-2 nopadding menuitem ui-menu-color02\" data-animation-duration=\"1000\" data-animation-delay=\"300\" style=\"visibility: visible;\">\n       <a href=\"#\" class=\"hvr-sweep-to-bottom\"><i class=\"flaticon-student\"></i><span>resume</span></a>\n    </li>\n    <li class=\"col-xs-4 col-sm-2 nopadding menuitem ui-menu-color03\" data-animation-duration=\"1000\" data-animation-delay=\"500\" style=\"visibility: visible;\">\n       <a href=\"#\" class=\"hvr-sweep-to-bottom\"><i class=\"flaticon-work\"></i><span>portfolio</span></a>\n    </li>\n    <li class=\"col-xs-4 col-sm-2 nopadding menuitem ui-menu-color04\" data-animation-duration=\"1000\" data-animation-delay=\"700\" style=\"visibility: visible;\">\n       <a href=\"#\" class=\"hvr-sweep-to-bottom\"><i class=\"fi-creative-email\"></i><span>contacts</span></a>\n    </li>\n    <li class=\"col-xs-4 col-sm-2 nopadding menuitem ui-menu-color05\" data-animation-duration=\"1000\" data-animation-delay=\"900\" style=\"visibility: visible;\">\n       <a href=\"#\" class=\"hvr-sweep-to-bottom\"><i class=\"flaticon-review\"></i><span>feedback</span></a>\n    </li>\n    <li class=\"col-xs-4 col-sm-2 nopadding menuitem ui-menu-color06\" data-animation-duration=\"1000\" data-animation-delay=\"1100\" style=\"visibility: visible;\">\n       <a href=\"#\" class=\"hvr-sweep-to-bottom\"><i class=\"flaticon-writer\"></i><span>blog</span></a>\n    </li>\n </ul>"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrap\">\n  <section class=\"container-fluid\" data-section=\"home\">\n    <div class=\"row flex-row\">\n      <!-- Personal Details 01 -->\n      <div id=\"details\" class=\"col-md-8 flex-column bg-color01 light nopadding\" data-animation-origin=\"left\"\n        data-animation-duration=\"300\" data-animation-delay=\"400\" data-animation-distance=\"200px\">\n        <div class=\"padding-50 flex-panel\">\n          <div class=\"row row-no-padding\">\n            <div class=\"col-md-12 nopadding\">\n              <h3 class=\"font-accident-two-normal uppercase title\">Skill Resume</h3>\n              <div class=\"quote\">\n                <h4 class=\"font-accident-two-normal uppercase subtitle\">A little about me</h4>\n                <div class=\"dividewhite3\"></div>\n              </div>\n\n              <div class=\"divider-dynamic\"></div>\n              <div class=\"row nopadding\">\n                <div class=\"col-md-4 infoblock nopadding\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-1 col-md-3\"><i class=\"fi fi-tech-computer-2 color-blue\"></i>\n                      <div class=\"dividewhite1\"></div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-11 col-md-9\">\n                      <h4 class=\"font-accident-two-medium uppercase\">Developer</h4>\n                      <p class=\"\">\n                        We have a lot experience in Java, Angular, PHP and anothers languages.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"divider-dynamic\"></div>\n                </div>\n                <div class=\"col-md-4 infoblock nopadding\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-1 col-md-3\"><i class=\"fi fi-creative-pie-chart color-blue\"></i>\n                      <div class=\"dividewhite1\"></div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-11 col-md-9\">\n                      <h4 class=\"font-accident-two-medium uppercase\">Manager</h4>\n                      <p class=\"\">\n                        We have experience in crital projects, using the best techniques of PMBok to management of\n                        projects. I already acted in projects\n                        at Central Bank of Brazil, Manaus City Hall and anothers projects in 14 states of my country.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"divider-dynamic\"></div>\n                </div>\n                <div class=\"col-md-4 infoblock nopadding\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-12 col-sm-1 col-md-3\"><i class=\"fi-interface-organization color-blue\"></i>\n                      <div class=\"dividewhite1\"></div>\n                    </div>\n                    <div class=\"col-xs-12 col-sm-11 col-md-9\">\n                      <h4 class=\"font-accident-two-medium uppercase\">Analyst</h4>\n                      <p class=\"\">\n                        Works with requirement of aplication, using SCRUM.\n                      </p>\n                    </div>\n                  </div>\n                  <div class=\"divider-dynamic\"></div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n\n        </div>\n\n      </div>\n\n\n      <!-- Personal Details 02 -->\n      <div id=\"personal\" class=\"col-md-4 flex-column light ui-block-color01 personal\" data-animation-origin=\"right\"\n        data-animation-duration=\"500\" data-animation-delay=\"600\" data-animation-distance=\"100px\">\n        <div class=\"padding-50 flex-panel\">\n          <h3 class=\"font-accident-two-normal uppercase title\">Personal Info</h3>\n          <div class=\"dividewhite4\"></div>\n          <div>\n            <div class=\"fullwidth box\">\n              <div class=\"one\">\n                <p class=\"uppercase\"><b>Name:</b>\n              </div>\n              <div class=\"two\">\n                <p class=\"uppercase\">Ravel da Costa Melo</p>\n              </div>\n            </div>\n            <div class=\"fullwidth box\">\n              <div class=\"one\">\n                <p class=\"uppercase\"><b>Email:</b> </p>\n              </div>\n              <div class=\"two\">\n                <p class=\"uppercase\">ravelmello3@gmail.com</p>\n              </div>\n            </div>\n            <div class=\"fullwidth box\">\n              <div class=\"one\">\n                <p class=\"uppercase\"><b>Address:</b> </p>\n              </div>\n              <div class=\"two\">\n                <p class=\"uppercase\">Recife, PE, Brazil</p>\n              </div>\n            </div>\n            <div class=\"fullwidth box\">\n              <div class=\"one\">\n                <p class=\"uppercase\"><b>Birth Date:</b></p>\n              </div>\n              <div class=\"two\">\n                <p class=\"uppercase\">04/01/1992</p>\n              </div>\n            </div>\n            <div class=\"fullwidth box\">\n              <div class=\"one\">\n                <p class=\"uppercase\"><b>Formation:</b></p>\n              </div>\n              <div class=\"two\">\n                <p class=\"uppercase\">BSC in Application Development and analysis, Specialist in web Development </p>\n              </div>\n            </div>\n          </div>\n          <div class=\"dividewhite3\"></div>\n        </div>\n      </div>\n      <!-- /Personal Details 02 -->\n    </div>\n\n  </section>\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
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

module.exports = __webpack_require__(/*! /var/www/html/projetos/site-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map