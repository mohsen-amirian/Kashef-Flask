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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 100%;\r\n}\r\n\r\n.row{\r\n  display: -webkit-flex;\r\n  display: flex;\r\n}\r\n\r\n.toolbox{\r\n  -webkit-flex: 2;\r\n          flex: 2;\r\n}\r\n\r\n.desk{\r\n  -webkit-flex: 5;\r\n          flex: 5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFhO0VBQWIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBTztVQUFQLE9BQU87QUFDVDs7QUFFQTtFQUNFLGVBQU87VUFBUCxPQUFPO0FBQ1QiLCJmaWxlIjoiYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJvd3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udG9vbGJveHtcclxuICBmbGV4OiAyO1xyXG59XHJcblxyXG4uZGVza3tcclxuICBmbGV4OiA1O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"panel\" style=\"margin-top: 5em\">\n  <div class=\"row\" style=\"height: 85%\">\n    <app-toolbox class=\"col-lg-3 toolbox\" style=\"height: 100%\"></app-toolbox>\n    <app-desk class=\"col-lg-9 desk\" style=\"height: 100%\"></app-desk>\n  </div>\n</div>\n\n"

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
        this.title = 'KashefApplication';
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
/*! exports provided: InjectorInstance, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectorInstance", function() { return InjectorInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _desk_desk_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./desk/desk.component */ "./src/app/desk/desk.component.ts");
/* harmony import */ var _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbox/toolbox.component */ "./src/app/toolbox/toolbox.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_draggable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-draggable */ "./node_modules/angular2-draggable/fesm5/angular2-draggable.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-drag-drop */ "./node_modules/ng-drag-drop/index.js");
/* harmony import */ var ng_drag_drop__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _share_module_management_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./share/module-management.service */ "./src/app/share/module-management.service.ts");
/* harmony import */ var _desk_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desk/custom-modal/custom-modal.component */ "./src/app/desk/custom-modal/custom-modal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _desk_custom_modal_output_link_output_link_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./desk/custom-modal/output-link/output-link.component */ "./src/app/desk/custom-modal/output-link/output-link.component.ts");
/* harmony import */ var _share_custom_dropdown_custom_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./share/custom-dropdown/custom-dropdown.component */ "./src/app/share/custom-dropdown/custom-dropdown.component.ts");
/* harmony import */ var _desk_custom_modal_input_link_input_link_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./desk/custom-modal/input-link/input-link.component */ "./src/app/desk/custom-modal/input-link/input-link.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _desk_custom_modal_display_module_display_module_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./desk/custom-modal/display-module/display-module.component */ "./src/app/desk/custom-modal/display-module/display-module.component.ts");
/* harmony import */ var _desk_custom_modal_input_getter_input_getter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./desk/custom-modal/input-getter/input-getter.component */ "./src/app/desk/custom-modal/input-getter/input-getter.component.ts");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-file-uploader */ "./node_modules/angular-file-uploader/fesm5/angular-file-uploader.js");
/* harmony import */ var _desk_desk_toolbar_desk_toolbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./desk/desk-toolbar/desk-toolbar.component */ "./src/app/desk/desk-toolbar/desk-toolbar.component.ts");
/* harmony import */ var _desk_desk_toolbar_desk_toolbar_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./desk/desk-toolbar/desk-toolbar.service */ "./src/app/desk/desk-toolbar/desk-toolbar.service.ts");
/* harmony import */ var _desk_register_process_register_process_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./desk/register-process/register-process.component */ "./src/app/desk/register-process/register-process.component.ts");
/* harmony import */ var _toolbox_load_process_load_process_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./toolbox/load-process/load-process.component */ "./src/app/toolbox/load-process/load-process.component.ts");
























var InjectorInstance;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _desk_desk_component__WEBPACK_IMPORTED_MODULE_4__["DeskComponent"],
                _toolbox_toolbox_component__WEBPACK_IMPORTED_MODULE_5__["ToolboxComponent"],
                _desk_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_11__["CustomModalComponent"],
                _desk_custom_modal_output_link_output_link_component__WEBPACK_IMPORTED_MODULE_13__["OutputLinkComponent"],
                _share_custom_dropdown_custom_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["CustomDropdownComponent"],
                _desk_custom_modal_input_link_input_link_component__WEBPACK_IMPORTED_MODULE_15__["InputLinkComponent"],
                _desk_custom_modal_display_module_display_module_component__WEBPACK_IMPORTED_MODULE_17__["DisplayModuleComponent"],
                _desk_custom_modal_input_getter_input_getter_component__WEBPACK_IMPORTED_MODULE_18__["InputGetterComponent"],
                _desk_desk_toolbar_desk_toolbar_component__WEBPACK_IMPORTED_MODULE_20__["DeskToolbarComponent"],
                _desk_register_process_register_process_component__WEBPACK_IMPORTED_MODULE_22__["RegisterProcessComponent"],
                _toolbox_load_process_load_process_component__WEBPACK_IMPORTED_MODULE_23__["LoadProcessComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DragDropModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular2_draggable__WEBPACK_IMPORTED_MODULE_7__["AngularDraggableModule"],
                ng_drag_drop__WEBPACK_IMPORTED_MODULE_8__["NgDragDropModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                angular_file_uploader__WEBPACK_IMPORTED_MODULE_19__["AngularFileUploaderModule"]
            ],
            providers: [_share_module_management_service__WEBPACK_IMPORTED_MODULE_10__["ModuleManagementService"], _desk_desk_toolbar_desk_toolbar_service__WEBPACK_IMPORTED_MODULE_21__["DeskToolbarService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/desk/custom-modal/custom-modal-service.ts":
/*!***********************************************************!*\
  !*** ./src/app/desk/custom-modal/custom-modal-service.ts ***!
  \***********************************************************/
/*! exports provided: CustomModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModalService", function() { return CustomModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var CustomModalService = /** @class */ (function () {
    function CustomModalService() {
        this.openModal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveModalChangesClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.saveInputGetterModuleClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    return CustomModalService;
}());



/***/ }),

/***/ "./src/app/desk/custom-modal/custom-modal.component.css":
/*!**************************************************************!*\
  !*** ./src/app/desk/custom-modal/custom-modal.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide{\r\n  visibility: hidden;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXNrL2N1c3RvbS1tb2RhbC9jdXN0b20tbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHAvZGVzay9jdXN0b20tbW9kYWwvY3VzdG9tLW1vZGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/desk/custom-modal/custom-modal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/desk/custom-modal/custom-modal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" id=\"modal-open-btn\" class=\"hide btn btn-info btn-lg\" data-toggle=\"modal\" data-target=\"#myModal\">Open Modal</button>\n\n<div class=\"container\">\n  <!-- Modal Content-->\n  <ng-content></ng-content>\n\n</div>\n"

/***/ }),

/***/ "./src/app/desk/custom-modal/custom-modal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/desk/custom-modal/custom-modal.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomModalComponent", function() { return CustomModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var _custom_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./custom-modal-service */ "./src/app/desk/custom-modal/custom-modal-service.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/module-management */ "./src/app/share/module-management.ts");





var CustomModalComponent = /** @class */ (function () {
    function CustomModalComponent(modalService, chRef) {
        var _this = this;
        this.modalService = modalService;
        this.open = false;
        this.otherModules = [];
        this.moduleSelected = false;
        this.modalService.openModal.subscribe(function (data) {
            _this.selectedModule = new _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"]();
            _this.moduleSelected = true;
            _this.selectedModule = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].copyModule(data);
            chRef.detectChanges();
            _this.clickSimulator();
        });
    }
    CustomModalComponent.prototype.ngOnChanges = function (changes) {
        if (this.open === true) {
        }
    };
    CustomModalComponent.prototype.clickSimulator = function () {
        document.getElementById('modal-open-btn').click();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], CustomModalComponent.prototype, "open", void 0);
    CustomModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-modal',
            template: __webpack_require__(/*! ./custom-modal.component.html */ "./src/app/desk/custom-modal/custom-modal.component.html"),
            styles: [__webpack_require__(/*! ./custom-modal.component.css */ "./src/app/desk/custom-modal/custom-modal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_custom_modal_service__WEBPACK_IMPORTED_MODULE_3__["CustomModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CustomModalComponent);
    return CustomModalComponent;
}());



/***/ }),

/***/ "./src/app/desk/custom-modal/display-module/display-module.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/desk/custom-modal/display-module/display-module.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGVzay9jdXN0b20tbW9kYWwvZGlzcGxheS1tb2R1bGUvZGlzcGxheS1tb2R1bGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/desk/custom-modal/display-module/display-module.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/desk/custom-modal/display-module/display-module.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  <h4 class=\"modal-title\">ماژول نمایشگر</h4>\n</div>\n<div class=\"modal-body\">\n  <div class=\"panel-group\">\n    <div class=\"panel panel-danger\">\n      <div class=\"panel-heading\">مشخصات</div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\">نام ورودی</label>\n            <input class=\"form-control\" type=\"text\" value=\"{{displayInput.name}}\" readonly>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\">نوع</label>\n            <input class=\"form-control\" type=\"text\" value=\"{{displayInputTypeName}}\" readonly>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\">ماژول متصل</label>\n            <input class=\"form-control\" type=\"text\" value=\"{{linkedModuleName}}\" readonly>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\">نام خروجی:</label>\n            <input class=\"form-control\" type=\"text\" value=\"{{linkedOutputName}}\" readonly>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label class=\"control-label\">مقدار:</label>\n              <textarea class=\"form-control\" rows=\"5\" dir=\"auto\" readonly>{{linkedOutputValue}}</textarea>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/desk/custom-modal/display-module/display-module.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/desk/custom-modal/display-module/display-module.component.ts ***!
  \******************************************************************************/
/*! exports provided: DisplayModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayModuleComponent", function() { return DisplayModuleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/module-management */ "./src/app/share/module-management.ts");




var DisplayModuleComponent = /** @class */ (function () {
    function DisplayModuleComponent(chRef) {
        this.chRef = chRef;
    }
    DisplayModuleComponent.prototype.ngOnChanges = function (changes) {
        if (changes.displayModule.previousValue !== changes.displayModule.currentValue) {
            if (this.displayModule.codeName === 'displayModule') {
                this.displayInput = this.displayModule.inputs[0];
            }
            this.setLinkedOutput();
            this.chRef.detectChanges();
        }
    };
    DisplayModuleComponent.prototype.setLinkedOutput = function () {
        var _this = this;
        if (_share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].runProcess) {
            var linkToThisInput_1 = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getAllLinks().find(function (l) { return l.inputModuleId === _this.displayModule.id
                && l.inputId === _this.displayInput.id; });
            if (!linkToThisInput_1) {
                this.linkedModuleName = '-';
                this.linkedOutputName = '-';
                this.displayInputTypeName = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getVariableTypeName(this.displayInput.type);
            }
            else {
                var linkedModule = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getModulebyId(linkToThisInput_1.outputModuleId);
                this.linkedModuleName = linkedModule.name;
                var linkedOutput = linkedModule.outputs.find(function (i) { return i.id === linkToThisInput_1.outputId; });
                this.linkedOutputName = linkedOutput.name;
                this.displayInputTypeName = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getVariableTypeName(linkedOutput.type);
                this.linkedOutputValue = typeof (linkedOutput.value) === 'object' ? JSON.stringify(linkedOutput.value) : linkedOutput.value;
            }
        }
        else {
            this.linkedOutputValue = '';
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"])
    ], DisplayModuleComponent.prototype, "displayModule", void 0);
    DisplayModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-module',
            template: __webpack_require__(/*! ./display-module.component.html */ "./src/app/desk/custom-modal/display-module/display-module.component.html"),
            styles: [__webpack_require__(/*! ./display-module.component.css */ "./src/app/desk/custom-modal/display-module/display-module.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DisplayModuleComponent);
    return DisplayModuleComponent;
}());



/***/ }),

/***/ "./src/app/desk/custom-modal/input-getter/input-getter.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/desk/custom-modal/input-getter/input-getter.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGVzay9jdXN0b20tbW9kYWwvaW5wdXQtZ2V0dGVyL2lucHV0LWdldHRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/desk/custom-modal/input-getter/input-getter.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/desk/custom-modal/input-getter/input-getter.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n  <h4 class=\"modal-title\">ماژول دریافت ورودی</h4>\n</div>\n<div class=\"modal-body\">\n  <div class=\"panel-group\">\n    <div class=\"panel panel-danger\">\n      <div class=\"panel-heading\">مشخصات</div>\n      <div class=\"panel-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\">نام خروجی</label>\n            <input class=\"form-control\" type=\"text\" value=\"{{moduleOutput.name}}\" readonly>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\">نوع</label>\n            <input class=\"form-control\" type=\"text\" value=\"{{moduleOutputTypeName}}\" readonly>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\" for=\"module-name\">ماژول متصل</label>\n            <app-custom-dropdown *ngIf=\"moduleDropDownSelectedValue !== ''\"\n                                 id=\"module-name\"\n                                 [dropdownItems]=\"otherModulesDropdownItems\"\n                                 [(value)]=\"moduleDropDownSelectedValue\"\n                                 (itemChange)=\"otherModulesDropdownChanged($event)\">\n            </app-custom-dropdown>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <label class=\"control-label\" for=\"input-name\">نام ورودی:</label>\n            <app-custom-dropdown *ngIf=\"inputDropDownSelectedValue !== ''\"\n                                 id=\"input-name\"\n                                 [dropdownItems]=\"inputDropdownItems\"\n                                 [(value)]=\"inputDropDownSelectedValue\"\n                                 (itemChange)=\"inputDropDownChanged($event)\">\n            </app-custom-dropdown>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label class=\"control-label\">مقدار:</label>\n              <ng-container *ngIf=\"linkedInputType !== 4\">\n                <input class=\"form-control\" type=\"text\" dir=\"auto\" [(ngModel)]=\"linkedInputValue\" autocomplete=\"off\">\n              </ng-container>\n              <ng-container *ngIf=\"linkedInputType === 4\">\n                <div class=\"form-group\">\n                  <label class=\"control-label\" >انتخاب فایل</label>\n                  <input type=\"file\" id=\"input-file\">\n                </div>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/desk/custom-modal/input-getter/input-getter.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/desk/custom-modal/input-getter/input-getter.component.ts ***!
  \**************************************************************************/
/*! exports provided: InputGetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGetterComponent", function() { return InputGetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/module-management */ "./src/app/share/module-management.ts");
/* harmony import */ var _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/variable-type.enum */ "./src/app/share/variable-type.enum.ts");
/* harmony import */ var _custom_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../custom-modal-service */ "./src/app/desk/custom-modal/custom-modal-service.ts");
/* harmony import */ var _share_link_inout_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../share/link-inout.model */ "./src/app/share/link-inout.model.ts");
/* harmony import */ var _share_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../share/api */ "./src/app/share/api.ts");








var InputGetterComponent = /** @class */ (function () {
    function InputGetterComponent(modalService, chRef) {
        var _this = this;
        this.modalService = modalService;
        this.chRef = chRef;
        this.linkedInputType = _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].String;
        this.otherModules = [];
        this.otherModulesDropdownItems = [];
        this.inputDropdownItems = [];
        this.moduleDropDownSelectedValue = '';
        this.inputDropDownSelectedValue = '';
        this.unsubscribeFromModalService = false;
        modalService.saveInputGetterModuleClicked.subscribe(function () {
            if (!_this.unsubscribeFromModalService) {
                _this.saveLink();
            }
        });
    }
    InputGetterComponent.prototype.ngOnChanges = function (changes) {
        if (changes.inputGetterModule.previousValue !== changes.inputGetterModule.currentValue) {
            if (this.inputGetterModule.codeName === 'inputGetterModule') {
                this.moduleOutput = this.inputGetterModule.outputs[0];
                this.fillOtherModulesDropdown();
                this.setDropDownsSelectedItems();
                this.setLinkedInputValue();
                this.chRef.detectChanges();
            }
        }
    };
    InputGetterComponent.prototype.fillOtherModulesDropdown = function () {
        var _this = this;
        this.otherModulesDropdownItems = [];
        this.otherModulesDropdownItems.push({
            text: 'انتخاب نشده',
            value: 'notSelected'
        });
        this.otherModules = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getAllSelectedModules().filter(function (m) { return m.id !== _this.inputGetterModule.id; });
        for (var _i = 0, _a = this.otherModules; _i < _a.length; _i++) {
            var module = _a[_i];
            this.otherModulesDropdownItems.push({
                value: module.id,
                text: module.name
            });
        }
    };
    InputGetterComponent.prototype.fillInputDropdown = function (moduleId) {
        var _this = this;
        this.inputDropdownItems = [];
        this.inputDropdownItems.push({
            text: 'انتخاب نشده',
            value: 'notSelected'
        });
        var tempInputs = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getModulebyId(moduleId).inputs;
        var _loop_1 = function (input) {
            // type of the input can be any type
            //input should be free
            if (_share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getAllLinks().filter(function (l) { return l.inputModuleId === moduleId && l.inputId === input.id && l.outputModuleId !== _this.inputGetterModule.id; }).length === 0) {
                this_1.inputDropdownItems.push({
                    value: input.id,
                    text: input.name
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, tempInputs_1 = tempInputs; _i < tempInputs_1.length; _i++) {
            var input = tempInputs_1[_i];
            _loop_1(input);
        }
        this.chRef.detectChanges();
    };
    InputGetterComponent.prototype.setDropDownsSelectedItems = function () {
        var _this = this;
        var linkToThisOutput = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getAllLinks().find(function (l) { return l.outputModuleId === _this.inputGetterModule.id
            && l.outputId === _this.moduleOutput.id; });
        // input (other) modules dropdown
        if (!linkToThisOutput) {
            this.moduleDropDownSelectedValue = 'notSelected';
        }
        else {
            this.moduleDropDownSelectedValue = linkToThisOutput.inputModuleId;
            this.otherModulesDropdownChanged(linkToThisOutput.inputModuleId);
        }
        // inputs dropdown
        if (!linkToThisOutput) {
            this.inputDropDownSelectedValue = 'notSelected';
        }
        else {
            this.inputDropDownSelectedValue = linkToThisOutput.inputId;
        }
    };
    InputGetterComponent.prototype.otherModulesDropdownChanged = function (moduleId) {
        this.linkedModule = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getAllSelectedModules().find(function (m) { return m.id === moduleId; });
        this.fillInputDropdown(moduleId);
    };
    InputGetterComponent.prototype.inputDropDownChanged = function (inputId) {
        this.linkedInput = this.linkedModule.inputs.find(function (i) { return i.id === inputId; });
        this.linkedInputType = this.linkedInput.type;
    };
    InputGetterComponent.prototype.saveLink = function () {
        var _this = this;
        if (this.moduleDropDownSelectedValue !== 'notSelected' && this.inputDropDownSelectedValue !== 'notSelected') {
            if (this.linkedInputType === _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].File) {
                var fileInput = document.getElementById('input-file');
                _share_api__WEBPACK_IMPORTED_MODULE_7__["Api"].sendFileToCloudStorage(fileInput.files[0]).then(function (fileUrl) {
                    _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"]
                        .getAllSelectedModules().find(function (m) { return m.id === _this.inputGetterModule.id; })
                        .outputs.find(function (o) { return o.id === _this.moduleOutput.id; }).value = fileUrl;
                    // set output to ready
                    _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"]
                        .getAllSelectedModules().find(function (m) { return m.id === _this.inputGetterModule.id; })
                        .outputs.find(function (o) { return o.id === _this.moduleOutput.id; }).isReady = true;
                    var newLink = new _share_link_inout_model__WEBPACK_IMPORTED_MODULE_6__["LinkInOut"]();
                    newLink.outputModuleId = _this.inputGetterModule.id;
                    newLink.outputId = _this.moduleOutput.id;
                    newLink.inputModuleId = _this.moduleDropDownSelectedValue;
                    newLink.inputId = _this.inputDropDownSelectedValue;
                    _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].addNewLink(newLink);
                });
            }
            else {
                // update output value
                _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"]
                    .getAllSelectedModules().find(function (m) { return m.id === _this.inputGetterModule.id; })
                    .outputs.find(function (o) { return o.id === _this.moduleOutput.id; }).value = this.linkedInputValue;
                // set output to ready
                _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"]
                    .getAllSelectedModules().find(function (m) { return m.id === _this.inputGetterModule.id; })
                    .outputs.find(function (o) { return o.id === _this.moduleOutput.id; }).isReady = true;
                var newLink = new _share_link_inout_model__WEBPACK_IMPORTED_MODULE_6__["LinkInOut"]();
                newLink.outputModuleId = this.inputGetterModule.id;
                newLink.outputId = this.moduleOutput.id;
                newLink.inputModuleId = this.moduleDropDownSelectedValue;
                newLink.inputId = this.inputDropDownSelectedValue;
                _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].addNewLink(newLink);
            }
        }
        else {
            _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].removeLinkFromOutput(this.inputGetterModule.id, this.moduleOutput.id);
        }
    };
    InputGetterComponent.prototype.setLinkedInputValue = function () {
        var _this = this;
        this.linkedInputValue = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"]
            .getAllSelectedModules().find(function (m) { return m.id === _this.inputGetterModule.id; })
            .outputs.find(function (o) { return o.id === _this.moduleOutput.id; }).value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"])
    ], InputGetterComponent.prototype, "inputGetterModule", void 0);
    InputGetterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-getter',
            template: __webpack_require__(/*! ./input-getter.component.html */ "./src/app/desk/custom-modal/input-getter/input-getter.component.html"),
            styles: [__webpack_require__(/*! ./input-getter.component.css */ "./src/app/desk/custom-modal/input-getter/input-getter.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_custom_modal_service__WEBPACK_IMPORTED_MODULE_5__["CustomModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], InputGetterComponent);
    return InputGetterComponent;
}());



/***/ }),

/***/ "./src/app/desk/custom-modal/input-link/input-link.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/desk/custom-modal/input-link/input-link.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvZGVzay9jdXN0b20tbW9kYWwvaW5wdXQtbGluay9pbnB1dC1saW5rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/desk/custom-modal/input-link/input-link.component.html":
/*!************************************************************************!*\
  !*** ./src/app/desk/custom-modal/input-link/input-link.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <label class=\"control-label\">نام ورودی</label>\n    <input class=\"form-control\" type=\"text\" value=\"{{selectedInput.name}}\" readonly>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <label class=\"control-label\">نوع</label>\n    <input class=\"form-control\" type=\"text\" value=\"{{selectedInputTypeName}}\" readonly>\n  </div>\n\n  <div class=\"col-sm-3\" *ngIf=\"linkedModuleName\">\n    <label class=\"control-label\">ماژول متصل</label>\n    <input class=\"form-control\" type=\"text\" value=\"{{linkedModuleName}}\" readonly>\n  </div>\n\n  <div class=\"col-sm-3\" *ngIf=\"linkedOutputName\">\n    <label class=\"control-label\">نام خروجی:</label>\n    <input class=\"form-control\" type=\"text\" value=\"{{linkedOutputName}}\" readonly>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/desk/custom-modal/input-link/input-link.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/desk/custom-modal/input-link/input-link.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLinkComponent", function() { return InputLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var _share_input_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/input.model */ "./src/app/share/input.model.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/module-management */ "./src/app/share/module-management.ts");





var InputLinkComponent = /** @class */ (function () {
    function InputLinkComponent(chRef) {
        this.chRef = chRef;
    }
    InputLinkComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedModule.previousValue !== changes.selectedModule.currentValue
            && changes.selectedInput.currentValue !== changes.selectedInput.previousValue) {
            this.setLinkedOutput();
            this.selectedInputTypeName = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getVariableTypeName(this.selectedInput.type);
            this.chRef.detectChanges();
        }
    };
    InputLinkComponent.prototype.setLinkedOutput = function () {
        var _this = this;
        var linkToThisInput = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getAllLinks().find(function (l) { return l.inputModuleId === _this.selectedModule.id
            && l.inputId === _this.selectedInput.id; });
        if (!linkToThisInput) {
            this.linkedModuleName = '-';
            this.linkedOutputName = '-';
        }
        else {
            this.linkedModuleName = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getModulebyId(linkToThisInput.outputModuleId).name;
            this.linkedOutputName = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getModulebyId(linkToThisInput.outputModuleId).outputs.find(function (i) { return i.id === linkToThisInput.outputId; }).name;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"])
    ], InputLinkComponent.prototype, "selectedModule", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_input_model__WEBPACK_IMPORTED_MODULE_3__["Input"])
    ], InputLinkComponent.prototype, "selectedInput", void 0);
    InputLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-link',
            template: __webpack_require__(/*! ./input-link.component.html */ "./src/app/desk/custom-modal/input-link/input-link.component.html"),
            styles: [__webpack_require__(/*! ./input-link.component.css */ "./src/app/desk/custom-modal/input-link/input-link.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], InputLinkComponent);
    return InputLinkComponent;
}());



/***/ }),

/***/ "./src/app/desk/custom-modal/output-link/output-link.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/desk/custom-modal/output-link/output-link.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n  padding-top: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXNrL2N1c3RvbS1tb2RhbC9vdXRwdXQtbGluay9vdXRwdXQtbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6ImFwcC9kZXNrL2N1c3RvbS1tb2RhbC9vdXRwdXQtbGluay9vdXRwdXQtbGluay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/desk/custom-modal/output-link/output-link.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/desk/custom-modal/output-link/output-link.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3\">\n    <label class=\"control-label\">نام خروجی</label>\n    <input class=\"form-control\" type=\"text\" value=\"{{selectedOutput.name}}\" readonly>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <label class=\"control-label\">نوع</label>\n    <input class=\"form-control\" type=\"text\" value=\"{{selectedOutputTypeName}}\" readonly>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <label class=\"control-label\" for=\"module-name\">ماژول متصل</label>\n    <app-custom-dropdown *ngIf=\"moduleDropDownSelectedValue !== ''\"\n                         id=\"module-name\"\n                         [dropdownItems]=\"otherModulesDropdownItems\"\n                         [(value)]=\"moduleDropDownSelectedValue\"\n                         (itemChange)=\"otherModulesDropdownChanged($event)\">\n    </app-custom-dropdown>\n  </div>\n  <div class=\"col-sm-3\">\n    <label class=\"control-label\" for=\"input-name\">نام ورودی:</label>\n    <app-custom-dropdown *ngIf=\"inputDropDownSelectedValue !== ''\"\n                         id=\"input-name\"\n                         [dropdownItems]=\"inputDropdownItems\"\n                         [(value)]=\"inputDropDownSelectedValue\">\n    </app-custom-dropdown>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/desk/custom-modal/output-link/output-link.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/desk/custom-modal/output-link/output-link.component.ts ***!
  \************************************************************************/
/*! exports provided: OutputLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputLinkComponent", function() { return OutputLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../share/module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var _share_link_inout_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../share/link-inout.model */ "./src/app/share/link-inout.model.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../share/module-management */ "./src/app/share/module-management.ts");
/* harmony import */ var _share_output_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../share/output.model */ "./src/app/share/output.model.ts");
/* harmony import */ var _custom_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-modal-service */ "./src/app/desk/custom-modal/custom-modal-service.ts");
/* harmony import */ var _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../share/variable-type.enum */ "./src/app/share/variable-type.enum.ts");








var OutputLinkComponent = /** @class */ (function () {
    function OutputLinkComponent(modalService, chRef) {
        var _this = this;
        this.modalService = modalService;
        this.chRef = chRef;
        this.otherModules = [];
        this.otherModulesDropdownItems = [];
        this.inputDropdownItems = [];
        this.moduleDropDownSelectedValue = '';
        this.inputDropDownSelectedValue = '';
        this.unsubscribeFromModalService = false;
        modalService.saveModalChangesClicked.subscribe(function () {
            if (!_this.unsubscribeFromModalService) {
                _this.saveLink();
                _this.unsubscribeFromModalService = true;
            }
        });
    }
    OutputLinkComponent.prototype.ngOnChanges = function (changes) {
        if (changes.selectedModule.previousValue !== changes.selectedModule.currentValue
            && changes.selectedOutput.currentValue !== changes.selectedOutput.previousValue) {
            this.fillOtherModulesDropdown();
            this.selectedOutputTypeName = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getVariableTypeName(this.selectedOutput.type);
            this.setDropDownsSelectedItems();
        }
    };
    OutputLinkComponent.prototype.fillOtherModulesDropdown = function () {
        var _this = this;
        this.otherModulesDropdownItems = [];
        this.otherModulesDropdownItems.push({
            text: 'انتخاب نشده',
            value: 'notSelected'
        });
        this.otherModules = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getAllSelectedModules().filter(function (m) { return m.id !== _this.selectedModule.id; });
        for (var _i = 0, _a = this.otherModules; _i < _a.length; _i++) {
            var module = _a[_i];
            this.otherModulesDropdownItems.push({
                value: module.id,
                text: module.name
            });
        }
    };
    OutputLinkComponent.prototype.fillInputDropdown = function (moduleId) {
        var _this = this;
        this.inputDropdownItems = [];
        this.inputDropdownItems.push({
            text: 'انتخاب نشده',
            value: 'notSelected'
        });
        var tempInputs = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getModulebyId(moduleId).inputs;
        var _loop_1 = function (input) {
            // type of input and output should be same
            if (input.type === this_1.selectedOutput.type || input.type === _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_7__["VariableType"].All) {
                //input should be free
                if (_share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getAllLinks().filter(function (l) { return l.inputModuleId === moduleId && l.inputId === input.id && l.outputModuleId !== _this.selectedModule.id; }).length === 0) {
                    this_1.inputDropdownItems.push({
                        value: input.id,
                        text: input.name
                    });
                }
            }
        };
        var this_1 = this;
        for (var _i = 0, tempInputs_1 = tempInputs; _i < tempInputs_1.length; _i++) {
            var input = tempInputs_1[_i];
            _loop_1(input);
        }
        this.chRef.detectChanges();
    };
    OutputLinkComponent.prototype.setDropDownsSelectedItems = function () {
        var _this = this;
        var linkToThisOutput = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getAllLinks().find(function (l) { return l.outputModuleId === _this.selectedModule.id
            && l.outputId === _this.selectedOutput.id; });
        // input (other) modules dropdown
        if (!linkToThisOutput) {
            this.moduleDropDownSelectedValue = 'notSelected';
        }
        else {
            this.moduleDropDownSelectedValue = linkToThisOutput.inputModuleId;
            this.otherModulesDropdownChanged(linkToThisOutput.inputModuleId);
        }
        // inputs dropdown
        if (!linkToThisOutput) {
            this.inputDropDownSelectedValue = 'notSelected';
        }
        else {
            this.inputDropDownSelectedValue = linkToThisOutput.inputId;
        }
    };
    OutputLinkComponent.prototype.otherModulesDropdownChanged = function (moduleId) {
        this.fillInputDropdown(moduleId);
    };
    OutputLinkComponent.prototype.saveLink = function () {
        if (this.moduleDropDownSelectedValue !== 'notSelected' || this.inputDropDownSelectedValue !== 'notSelected') {
            var newLink = new _share_link_inout_model__WEBPACK_IMPORTED_MODULE_3__["LinkInOut"]();
            newLink.outputModuleId = this.selectedModule.id;
            newLink.outputId = this.selectedOutput.id;
            newLink.inputModuleId = this.moduleDropDownSelectedValue;
            newLink.inputId = this.inputDropDownSelectedValue;
            _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].addNewLink(newLink);
        }
        else {
            _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].removeLinkFromOutput(this.selectedModule.id, this.selectedOutput.id);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"])
    ], OutputLinkComponent.prototype, "selectedModule", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _share_output_model__WEBPACK_IMPORTED_MODULE_5__["Output"])
    ], OutputLinkComponent.prototype, "selectedOutput", void 0);
    OutputLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-output-link',
            template: __webpack_require__(/*! ./output-link.component.html */ "./src/app/desk/custom-modal/output-link/output-link.component.html"),
            styles: [__webpack_require__(/*! ./output-link.component.css */ "./src/app/desk/custom-modal/output-link/output-link.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_custom_modal_service__WEBPACK_IMPORTED_MODULE_6__["CustomModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], OutputLinkComponent);
    return OutputLinkComponent;
}());



/***/ }),

/***/ "./src/app/desk/desk-toolbar/desk-toolbar.component.css":
/*!**************************************************************!*\
  !*** ./src/app/desk/desk-toolbar/desk-toolbar.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-container {\r\n  padding: 1em 0;\r\n  display: -webkit-flex;\r\n  display: flex;\r\n}\r\n\r\n.btn-container {\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  margin: 0.5em;\r\n}\r\n\r\n.btn-text {\r\n  padding: 0 0.5em;\r\n}\r\n\r\n.btn-icon, .btn-text {\r\n  -webkit-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.remove-button {\r\n  background-color: gray;\r\n  border-color: gray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXNrL2Rlc2stdG9vbGJhci9kZXNrLXRvb2xiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxxQkFBYTtFQUFiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQU87VUFBUCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImFwcC9kZXNrL2Rlc2stdG9vbGJhci9kZXNrLXRvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMWVtIDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ0bi1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwLjVlbTtcclxufVxyXG5cclxuLmJ0bi10ZXh0IHtcclxuICBwYWRkaW5nOiAwIDAuNWVtO1xyXG59XHJcblxyXG4uYnRuLWljb24sIC5idG4tdGV4dCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnJlbW92ZS1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/desk/desk-toolbar/desk-toolbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/desk/desk-toolbar/desk-toolbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-container\">\r\n\r\n  <div (click)=\"onPlayClicked()\" class=\"btn btn-success btn-sm btn-container\">\r\n    <div class=\"btn-icon\">\r\n      <span class=\"glyphicon glyphicon-play\"></span>\r\n    </div>\r\n    <div class=\"btn-text\">\r\n      اجرا\r\n    </div>\r\n  </div>\r\n\r\n  <div (click)=\"onStopClicked()\" class=\"btn btn-danger btn-sm btn-container\">\r\n    <div class=\"btn-icon\">\r\n      <span class=\"glyphicon glyphicon-stop\"></span>\r\n    </div>\r\n    <div class=\"btn-text\">\r\n      توقف\r\n    </div>\r\n  </div>\r\n\r\n  <div (click)=\"onRemoveClicked()\" class=\"btn remove-button btn-primary btn-sm btn-container\">\r\n    <div class=\"btn-icon\">\r\n      <span class=\"glyphicon glyphicon-trash\"></span>\r\n    </div>\r\n    <div class=\"btn-text\">\r\n      حذف\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/desk/desk-toolbar/desk-toolbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/desk/desk-toolbar/desk-toolbar.component.ts ***!
  \*************************************************************/
/*! exports provided: DeskToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskToolbarComponent", function() { return DeskToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _desk_toolbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./desk-toolbar.service */ "./src/app/desk/desk-toolbar/desk-toolbar.service.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/module-management */ "./src/app/share/module-management.ts");
/* harmony import */ var _share_module_management_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/module-management.service */ "./src/app/share/module-management.service.ts");





var DeskToolbarComponent = /** @class */ (function () {
    function DeskToolbarComponent(toolbarService, mms) {
        this.toolbarService = toolbarService;
        this.mms = mms;
    }
    DeskToolbarComponent.prototype.onPlayClicked = function () {
        _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].runProcess = true;
        this.toolbarService.playClicked.emit();
    };
    DeskToolbarComponent.prototype.onStopClicked = function () {
        _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].runProcess = false;
        this.toolbarService.stopClicked.emit();
    };
    DeskToolbarComponent.prototype.onRemoveClicked = function () {
        _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].clearDesk();
        // this.mms.destroyNetwork.emit();
    };
    DeskToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desk-toolbar',
            template: __webpack_require__(/*! ./desk-toolbar.component.html */ "./src/app/desk/desk-toolbar/desk-toolbar.component.html"),
            styles: [__webpack_require__(/*! ./desk-toolbar.component.css */ "./src/app/desk/desk-toolbar/desk-toolbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_desk_toolbar_service__WEBPACK_IMPORTED_MODULE_2__["DeskToolbarService"], _share_module_management_service__WEBPACK_IMPORTED_MODULE_4__["ModuleManagementService"]])
    ], DeskToolbarComponent);
    return DeskToolbarComponent;
}());



/***/ }),

/***/ "./src/app/desk/desk-toolbar/desk-toolbar.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/desk/desk-toolbar/desk-toolbar.service.ts ***!
  \***********************************************************/
/*! exports provided: DeskToolbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskToolbarService", function() { return DeskToolbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var DeskToolbarService = /** @class */ (function () {
    function DeskToolbarService() {
        this.playClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.stopClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    return DeskToolbarService;
}());



/***/ }),

/***/ "./src/app/desk/desk.component.css":
/*!*****************************************!*\
  !*** ./src/app/desk/desk.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myNetwork {\r\n  width: 100%;\r\n  height: 35em;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\np {\r\n  max-width: 600px;\r\n}\r\n\r\n::ng-deep .modal-dialog{\r\n    width: 70em;\r\n  }\r\n\r\n::ng-deep canvas{\r\n  font-family: IRANSans;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXNrL2Rlc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVGO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6ImFwcC9kZXNrL2Rlc2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teU5ldHdvcmsge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzVlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbn1cclxuXHJcbnAge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubW9kYWwtZGlhbG9ne1xyXG4gICAgd2lkdGg6IDcwZW07XHJcbiAgfVxyXG5cclxuOjpuZy1kZWVwIGNhbnZhc3tcclxuICBmb250LWZhbWlseTogSVJBTlNhbnM7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/desk/desk.component.html":
/*!******************************************!*\
  !*** ./src/app/desk/desk.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"myNetwork\" #myNetwork></div>\n<!--<pre class=\"eventSpan\"></pre>-->\n<app-desk-toolbar></app-desk-toolbar>\n<app-register-process></app-register-process>\n<app-custom-modal>\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n      <div class=\"modal-content\">\n\n        <!-- Module Config -->\n        <ng-container *ngIf=\"openNodeConfigModal && !openInputGetterModule && !openDisplayModule\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            <h4 class=\"modal-title\">تنظیمات ماژول</h4>\n          </div>\n          <div class=\"modal-body\">\n            <p>{{selectedModule.name}}</p>\n            <div class=\"panel-group\">\n              <div class=\"panel panel-primary\">\n                <div class=\"panel-heading\">خروجی ها</div>\n                <div class=\"panel-body\">\n                  <ng-container *ngFor=\"let output of selectedModule.outputs\">\n                    <app-output-link\n                      [selectedModule]=\"selectedModule\"\n                      [selectedOutput]=\"output\">\n                    </app-output-link>\n                  </ng-container>\n                </div>\n              </div>\n              <div class=\"panel panel-warning\">\n                <div class=\"panel-heading\">ورودی ها</div>\n                <div class=\"panel-body\">\n                  <ng-container *ngFor=\"let input of selectedModule.inputs\">\n                    <app-input-link\n                      [selectedModule]=\"selectedModule\"\n                      [selectedInput]=\"input\">\n                    </app-input-link>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button (click)=\"onModuleConfigModalSaveClicked()\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">ذخیره\n            </button>\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">بستن</button>\n          </div>\n        </ng-container>\n\n        <!-- Display Module-->\n        <ng-container *ngIf=\"!openNodeConfigModal && !openInputGetterModule && openDisplayModule\">\n          <app-display-module [displayModule]=\"selectedModule\"\n          ></app-display-module>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">بستن</button>\n          </div>\n        </ng-container>\n\n        <!-- Input Getter Module-->\n        <ng-container *ngIf=\"!openNodeConfigModal && openInputGetterModule && !openDisplayModule\">\n          <app-input-getter [inputGetterModule]=\"selectedModule\">\n          </app-input-getter>\n          <div class=\"modal-footer\">\n            <button (click)=\"onInputGetterModalSaveClicked()\" type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">ذخیره\n            </button>\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">بستن</button>\n          </div>\n        </ng-container>\n\n      </div>\n\n    </div>\n  </div>\n\n</app-custom-modal>\n\n"

/***/ }),

/***/ "./src/app/desk/desk.component.ts":
/*!****************************************!*\
  !*** ./src/app/desk/desk.component.ts ***!
  \****************************************/
/*! exports provided: DeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskComponent", function() { return DeskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/module-management */ "./src/app/share/module-management.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _share_module_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/module-management.service */ "./src/app/share/module-management.service.ts");
/* harmony import */ var _custom_modal_custom_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./custom-modal/custom-modal-service */ "./src/app/desk/custom-modal/custom-modal-service.ts");







var DeskComponent = /** @class */ (function () {
    function DeskComponent(mms, modalService, chRef) {
        this.mms = mms;
        this.modalService = modalService;
        this.chRef = chRef;
        this.openNodeConfigModal = false;
        this.openDisplayModule = false;
        this.openInputGetterModule = false;
        this.selectedModule = new _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"]();
    }
    DeskComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.mms.newModuleSelectedFromToolbox.subscribe(function (module) {
            var newId = (Math.random() * 1e7).toString(32);
            var newNode = {
                id: newId,
                label: _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getNewSelectedModuleName(module.name),
                image: module.imageAddress,
                shape: 'image'
            };
            _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].addNewNode(newNode);
            if (_share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getAllSelectedModules().length == 0) {
                _this.startMyNetwork();
            }
            var tempModule = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].copyModule(module);
            tempModule.id = newId;
            _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].addToSelectedModules(tempModule);
        });
        this.mms.startNetwork.subscribe(function () {
            _this.startMyNetwork();
        });
        this.mms.stabilizeNetwork.subscribe(function () {
            _this.network.stabilize();
        });
        this.mms.destroyNetwork.subscribe(function () {
            _this.network.destroy();
            _this.startMyNetwork();
        });
    };
    DeskComponent.prototype.startMyNetwork = function () {
        var _this = this;
        var data = {
            nodes: _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getNodes(),
            edges: _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getEdges()
        };
        var options = {
            physics: false,
            interaction: { hover: true }
        };
        this.network = new vis__WEBPACK_IMPORTED_MODULE_4__["Network"](this.container['nativeElement'], data, options);
        this.network.on("doubleClick", function (params) {
            if (params.nodes.length > 0) {
                var selectedToolBoxModule = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getModulebyId(params.nodes[0]);
                _this.selectedModule = _share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].copyModule(selectedToolBoxModule);
                if (selectedToolBoxModule.codeName === 'displayModule') {
                    _this.openDisplayModule = true;
                    _this.openInputGetterModule = false;
                    _this.openNodeConfigModal = false;
                }
                else if (selectedToolBoxModule.codeName === 'inputGetterModule') {
                    _this.openInputGetterModule = true;
                    _this.openDisplayModule = false;
                    _this.openNodeConfigModal = false;
                }
                else {
                    _this.openNodeConfigModal = true;
                    _this.openDisplayModule = false;
                    _this.openInputGetterModule = false;
                }
                _this.chRef.detectChanges();
                _this.modalService.openModal.emit(_share_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].getModulebyId(params.nodes[0]));
            }
        });
    };
    DeskComponent.prototype.onModuleConfigModalSaveClicked = function () {
        this.modalService.saveModalChangesClicked.emit();
    };
    DeskComponent.prototype.onInputGetterModalSaveClicked = function () {
        this.modalService.saveInputGetterModuleClicked.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myNetwork', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DeskComponent.prototype, "container", void 0);
    DeskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-desk',
            template: __webpack_require__(/*! ./desk.component.html */ "./src/app/desk/desk.component.html"),
            providers: [_custom_modal_custom_modal_service__WEBPACK_IMPORTED_MODULE_6__["CustomModalService"]],
            styles: [__webpack_require__(/*! ./desk.component.css */ "./src/app/desk/desk.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_module_management_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManagementService"], _custom_modal_custom_modal_service__WEBPACK_IMPORTED_MODULE_6__["CustomModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], DeskComponent);
    return DeskComponent;
}());



/***/ }),

/***/ "./src/app/desk/register-process/register-process.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/desk/register-process/register-process.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-message {\r\n  padding: 1em 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kZXNrL3JlZ2lzdGVyLXByb2Nlc3MvcmVnaXN0ZXItcHJvY2Vzcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAvZGVzay9yZWdpc3Rlci1wcm9jZXNzL3JlZ2lzdGVyLXByb2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Rlci1tZXNzYWdlIHtcclxuICBwYWRkaW5nOiAxZW0gMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/desk/register-process/register-process.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/desk/register-process/register-process.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <hr>\n  <h3>ذخیره فرآیند</h3>\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <label class=\"control-label\">نام:</label>\n      <input class=\"form-control\" type=\"text\" dir=\"auto\" [(ngModel)]=\"processName\" autocomplete=\"off\">\n    </div>\n    <div class=\"col-sm-6\">\n      <label class=\"control-label\">توضیحات:</label>\n      <textarea class=\"form-control\" rows=\"5\" dir=\"auto\" [(ngModel)]=\"processDescription\"></textarea>\n    </div>\n  </div>\n  <div>\n    <button (click)=\"saveProcess()\" type=\"button\" class=\"btn btn-info\" >ذخیره</button>\n  </div>\n\n  <div class=\"register-message\">\n    <span *ngIf=\"saveCompleted\" class=\"label label-success\">فرآیند با موفقیت ذخیره شد.</span>\n    <span *ngIf=\"saveFailed\" class=\"label label-danger\">برای ذخیره فرآیند می بایست حداقل یک ماژول انتخاب شده باشد.</span>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/desk/register-process/register-process.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/desk/register-process/register-process.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterProcessComponent", function() { return RegisterProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/module-management */ "./src/app/share/module-management.ts");
/* harmony import */ var _share_process_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/process.model */ "./src/app/share/process.model.ts");
/* harmony import */ var _share_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/api */ "./src/app/share/api.ts");





var RegisterProcessComponent = /** @class */ (function () {
    function RegisterProcessComponent() {
        this.saveCompleted = false;
        this.saveFailed = false;
    }
    RegisterProcessComponent.prototype.saveProcess = function () {
        var _this = this;
        var json_file = {};
        var allLinks = _share_module_management__WEBPACK_IMPORTED_MODULE_2__["ModuleManagement"].getAllLinks();
        var allSelectedModules = _share_module_management__WEBPACK_IMPORTED_MODULE_2__["ModuleManagement"].getAllSelectedModules();
        if (allSelectedModules.length === 0 || this.isEmptyOrSpaces(this.processName)) {
            this.saveFailed = true;
            this.saveCompleted = false;
        }
        else {
            json_file.links = allLinks;
            json_file.modules = allSelectedModules;
            var newProcess = new _share_process_model__WEBPACK_IMPORTED_MODULE_3__["Process"]();
            newProcess.name = this.processName.trim();
            newProcess.description = this.processDescription;
            newProcess.json_file = JSON.stringify(json_file);
            _share_api__WEBPACK_IMPORTED_MODULE_4__["Api"].postApi('http://127.0.0.1:5000/api/store/processes/add', newProcess).then(function () {
                _this.saveFailed = false;
                _this.saveCompleted = true;
            });
        }
    };
    RegisterProcessComponent.prototype.isEmptyOrSpaces = function (str) {
        return str === null || str.match(/^ *$/) !== null;
    };
    RegisterProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-process',
            template: __webpack_require__(/*! ./register-process.component.html */ "./src/app/desk/register-process/register-process.component.html"),
            styles: [__webpack_require__(/*! ./register-process.component.css */ "./src/app/desk/register-process/register-process.component.css")]
        })
    ], RegisterProcessComponent);
    return RegisterProcessComponent;
}());



/***/ }),

/***/ "./src/app/share/api.ts":
/*!******************************!*\
  !*** ./src/app/share/api.ts ***!
  \******************************/
/*! exports provided: Api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Api", function() { return Api; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

var Api = /** @class */ (function () {
    function Api() {
    }
    Api.getApi = function (url) {
        var http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpXhrBackend"]({ build: function () { return new XMLHttpRequest(); } }));
        var promise = new Promise((function (resolve) {
            http.get(url).subscribe(function (data) {
                resolve(data);
            });
        }));
        return promise;
    };
    Api.postApi = function (url, body) {
        var httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpXhrBackend"]({ build: function () { return new XMLHttpRequest(); } }));
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        var promise = new Promise((function (resolve, reject) {
            httpClient.post(url, body, { headers: header }).subscribe(function (result) {
                resolve(result);
            });
        }));
        return promise;
    };
    Api.postApiFormData = function (url, form) {
        var httpClient = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpXhrBackend"]({ build: function () { return new XMLHttpRequest(); } }));
        var promise = new Promise((function (resolve, reject) {
            httpClient.post(url, form).subscribe(function (result) {
                resolve(result);
            });
        }));
        return promise;
    };
    //returns url of the file
    Api.sendFileToCloudStorage = function (file) {
        var _this = this;
        var form = new FormData();
        form.append('file', file);
        var promise = new Promise((function (resolve) {
            _this.postApiFormData('http://127.0.0.1:5050/upload/', form).then(function (data) {
                resolve(data.url);
            });
        }));
        return promise;
    };
    //returns file
    Api.getFileFromCloudStorage = function (url) {
        var _this = this;
        var http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpXhrBackend"]({ build: function () { return new XMLHttpRequest(); } }));
        var promise = new Promise((function (resolve) {
            http.get(url, { responseType: 'blob' }).subscribe(function (data) {
                var file = _this.BlobToFile(data, '');
                resolve(file);
            });
        }));
        return promise;
    };
    Api.BlobToFile = function (theBlob, fileName) {
        var b = theBlob;
        b.lastModifiedDate = new Date();
        b.name = fileName;
        return b;
    };
    return Api;
}());



/***/ }),

/***/ "./src/app/share/custom-dropdown/custom-dropdown.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/share/custom-dropdown/custom-dropdown.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvc2hhcmUvY3VzdG9tLWRyb3Bkb3duL2N1c3RvbS1kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/share/custom-dropdown/custom-dropdown.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/share/custom-dropdown/custom-dropdown.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<select [(ngModel)]=\"value\"\n  (change)=\"onDropdownSelectedItemChange($event.target.value)\"\n  class=\"form-control\" name=\"module-name\" id=\"module-name\">\n  <option *ngFor=\"let item of dropdownItems\" value=\"{{item.value}}\">\n    {{item.text}}\n  </option>\n</select>\n"

/***/ }),

/***/ "./src/app/share/custom-dropdown/custom-dropdown.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/share/custom-dropdown/custom-dropdown.component.ts ***!
  \********************************************************************/
/*! exports provided: CustomDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDropdownComponent", function() { return CustomDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dropdown_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-item */ "./src/app/share/custom-dropdown/dropdown-item.ts");



var CustomDropdownComponent = /** @class */ (function () {
    function CustomDropdownComponent(chRef) {
        this.chRef = chRef;
        this.dropdownItems = [];
        this.itemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(CustomDropdownComponent.prototype, "value", {
        get: function () {
            return this.tempValue;
        },
        set: function (val) {
            this.tempValue = val;
            this.valueChange.emit(this.tempValue);
        },
        enumerable: true,
        configurable: true
    });
    CustomDropdownComponent.prototype.onDropdownSelectedItemChange = function (value) {
        this.itemChange.emit(value);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CustomDropdownComponent.prototype, "dropdownItems", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CustomDropdownComponent.prototype, "itemChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _dropdown_item__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"])
    ], CustomDropdownComponent.prototype, "selectedItem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], CustomDropdownComponent.prototype, "valueChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], CustomDropdownComponent.prototype, "value", null);
    CustomDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-custom-dropdown',
            template: __webpack_require__(/*! ./custom-dropdown.component.html */ "./src/app/share/custom-dropdown/custom-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./custom-dropdown.component.css */ "./src/app/share/custom-dropdown/custom-dropdown.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], CustomDropdownComponent);
    return CustomDropdownComponent;
}());



/***/ }),

/***/ "./src/app/share/custom-dropdown/dropdown-item.ts":
/*!********************************************************!*\
  !*** ./src/app/share/custom-dropdown/dropdown-item.ts ***!
  \********************************************************/
/*! exports provided: DropdownItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownItem", function() { return DropdownItem; });
var DropdownItem = /** @class */ (function () {
    function DropdownItem() {
    }
    return DropdownItem;
}());



/***/ }),

/***/ "./src/app/share/input.model.ts":
/*!**************************************!*\
  !*** ./src/app/share/input.model.ts ***!
  \**************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
var Input = /** @class */ (function () {
    function Input() {
    }
    return Input;
}());



/***/ }),

/***/ "./src/app/share/link-inout.model.ts":
/*!*******************************************!*\
  !*** ./src/app/share/link-inout.model.ts ***!
  \*******************************************/
/*! exports provided: LinkInOut */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkInOut", function() { return LinkInOut; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _module_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-management */ "./src/app/share/module-management.ts");


var LinkInOut = /** @class */ (function () {
    function LinkInOut() {
        this.checkLinkages();
    }
    LinkInOut.prototype.checkLinkages = function () {
        var _this = this;
        var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(5000).subscribe(function () {
            var output = _module_management__WEBPACK_IMPORTED_MODULE_1__["ModuleManagement"].getAllSelectedModules()
                .find(function (m) { return m.id == _this.outputModuleId; })
                .outputs.find(function (o) { return o.id == _this.outputId; });
            if (output.isReady) {
                _module_management__WEBPACK_IMPORTED_MODULE_1__["ModuleManagement"].getAllSelectedModules()
                    .find(function (m) { return m.id == _this.inputModuleId; }).inputs
                    .find(function (i) { return i.id == _this.inputId; }).value = output.value;
                _module_management__WEBPACK_IMPORTED_MODULE_1__["ModuleManagement"].getAllSelectedModules()
                    .find(function (m) { return m.id == _this.inputModuleId; }).inputs
                    .find(function (i) { return i.id == _this.inputId; }).isReady = true;
                // sub.unsubscribe(); todo
            }
        });
    };
    return LinkInOut;
}());



/***/ }),

/***/ "./src/app/share/module-management.service.ts":
/*!****************************************************!*\
  !*** ./src/app/share/module-management.service.ts ***!
  \****************************************************/
/*! exports provided: ModuleManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleManagementService", function() { return ModuleManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModuleManagementService = /** @class */ (function () {
    function ModuleManagementService() {
        this.newModuleSelectedFromToolbox = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startNetwork = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stabilizeNetwork = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.destroyNetwork = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModuleManagementService.prototype, "newModuleSelectedFromToolbox", void 0);
    return ModuleManagementService;
}());



/***/ }),

/***/ "./src/app/share/module-management.ts":
/*!********************************************!*\
  !*** ./src/app/share/module-management.ts ***!
  \********************************************/
/*! exports provided: ModuleManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleManagement", function() { return ModuleManagement; });
/* harmony import */ var _module_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vis */ "./node_modules/vis/dist/vis.js");
/* harmony import */ var vis__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vis__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.model */ "./src/app/share/input.model.ts");
/* harmony import */ var _output_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output.model */ "./src/app/share/output.model.ts");
/* harmony import */ var _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./variable-type.enum */ "./src/app/share/variable-type.enum.ts");





var ModuleManagement = /** @class */ (function () {
    function ModuleManagement() {
    }
    ModuleManagement.addToToolbox = function (newModule) {
        //check for duplicate
        if (!this.toolboxModules.find(function (m) { return m.id == newModule.id; })) {
            this.toolboxModules.push(newModule);
        }
    };
    ModuleManagement.getToolboxModules = function () {
        return this.toolboxModules;
    };
    ModuleManagement.addToSelectedModules = function (newModule) {
        newModule.isSelected = true;
        newModule.name = this.getNewSelectedModuleName(newModule.name);
        this.selectedModules.push(newModule);
    };
    ModuleManagement.getNewSelectedModuleName = function (name) {
        // rename duplicate modules
        var duplicateModulesNumber = this.selectedModules.filter(function (m) { return m.name.replace(/\d+$/, '') === name; }).length;
        if (duplicateModulesNumber > 0) {
            return name + duplicateModulesNumber;
        }
        else {
            return name;
        }
    };
    ModuleManagement.getModulebyId = function (moduleId) {
        return this.selectedModules.find(function (m) { return m.id === moduleId; });
    };
    ModuleManagement.addNewNode = function (newNode) {
        // newNode.color = 'red';   should be red
        //add icon
        var fontFace = 'IranSans';
        newNode.font = {
            face: fontFace
        };
        this.nodes.add(newNode);
    };
    ModuleManagement.getAllSelectedModules = function () {
        return this.selectedModules;
    };
    // (OutputModuleId , OutPutId) or (InputModuleId , InputId) should occur only once
    ModuleManagement.addNewLink = function (newLink) {
        // check for new link's output
        var tempLink = this.links.find(function (l) { return l.outputId === newLink.outputId && l.outputModuleId === newLink.outputModuleId; });
        if (tempLink) {
            // remove link
            var linkIndex = this.links.indexOf(tempLink);
            this.links.splice(linkIndex, 1);
            //remove edge
            var edgeId_1 = tempLink.inputModuleId.concat(tempLink.outputModuleId);
            var edgeIdsIndex = this.edgeIds.indexOf(this.edgeIds.find(function (i) { return i === edgeId_1; }));
            this.edgeIds.splice(edgeIdsIndex, 1);
            this.edges.remove(edgeId_1);
        }
        // check for new link's input
        tempLink = this.links.find(function (l) { return l.inputId === newLink.inputId && l.inputModuleId === newLink.inputModuleId; });
        if (tempLink) {
            //remove link
            var linkIndex = this.links.indexOf(tempLink);
            this.links.splice(linkIndex, 1);
            //remove edge
            var edgeId_2 = tempLink.inputModuleId.concat(tempLink.outputModuleId);
            var edgeIdsIndex = this.edgeIds.indexOf(this.edgeIds.find(function (i) { return i === edgeId_2; }));
            this.edgeIds.splice(edgeIdsIndex, 1);
            this.edges.remove(edgeId_2);
        }
        // now we can add new link
        this.links.push(newLink);
        // and add new edge to network
        var edgeId = newLink.inputModuleId.concat(newLink.outputModuleId);
        this.edgeIds.push(edgeId);
        this.edges.add({ id: edgeId, from: newLink.outputModuleId, to: newLink.inputModuleId, color: { color: 'gray' }, arrows: 'to' });
    };
    ModuleManagement.removeLinkFromOutput = function (moduleId, outputId) {
        var tempLink = this.links.find(function (l) { return l.outputId === outputId && l.outputModuleId === moduleId; });
        if (tempLink) {
            //remove link
            var linkIndex = this.links.indexOf(tempLink);
            this.links.splice(linkIndex, 1);
            //remove edge
            var edgeId_3 = tempLink.inputModuleId.concat(tempLink.outputModuleId);
            var edgeIdsIndex = this.edgeIds.indexOf(this.edgeIds.find(function (i) { return i === edgeId_3; }));
            this.edgeIds.splice(edgeIdsIndex, 1);
            this.edges.remove(edgeId_3);
        }
    };
    ModuleManagement.addNewEdge = function (newEdge) {
        newEdge.arrows = 'to';
        this.edges.add(newEdge);
    };
    ModuleManagement.getNodes = function () {
        return this.nodes;
    };
    ModuleManagement.getEdges = function () {
        return this.edges;
    };
    ModuleManagement.nodeIsWaitingForInputs = function (nodeId) {
        this.nodes.update({ id: nodeId, font: { color: 'red' } });
    };
    ModuleManagement.nodeInputsIsReady = function (nodeId) {
        this.nodes.update({ id: nodeId, font: { color: 'red', size: 15 } });
    };
    ModuleManagement.moduleIsWaiting = function (nodeId) {
        this.nodes.update({ id: nodeId, font: { color: 'gray', size: 15 } });
    };
    ModuleManagement.copyModule = function (module) {
        var newModlue = new _module_model__WEBPACK_IMPORTED_MODULE_0__["Module"]();
        newModlue.id = module.id;
        newModlue.name = module.name;
        newModlue.iconAddress = module.iconAddress;
        newModlue.imageAddress = module.imageAddress;
        newModlue.codeName = module.codeName;
        newModlue.isSelected = module.isSelected;
        newModlue.webServiceUrl = module.webServiceUrl;
        newModlue.description = module.description;
        newModlue.webServiceType = module.webServiceType;
        newModlue.category_id = module.category_id;
        newModlue.inputs = [];
        for (var _i = 0, _a = module.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            var newInput = new _input_model__WEBPACK_IMPORTED_MODULE_2__["Input"]();
            newInput.id = input.id.toString();
            newInput.name = input.name;
            newInput.isReady = input.isReady;
            newInput.value = input.value;
            newInput.type = input.type;
            newInput.isParameter = input.isParameter;
            newInput.scriptName = input.scriptName;
            newModlue.inputs.push(newInput);
        }
        for (var _b = 0, _c = module.outputs; _b < _c.length; _b++) {
            var output = _c[_b];
            var newOutput = new _output_model__WEBPACK_IMPORTED_MODULE_3__["Output"]();
            newOutput.id = output.id.toString();
            newOutput.name = output.name;
            newOutput.value = output.value;
            newOutput.isReady = output.isReady;
            newOutput.type = output.type;
            newOutput.scriptName = output.scriptName;
            newModlue.outputs.push(newOutput);
        }
        return newModlue;
    };
    ModuleManagement.getAllLinks = function () {
        return this.links;
    };
    ModuleManagement.getAllToolboxModules = function () {
        return this.toolboxModules;
    };
    ModuleManagement.clearDesk = function () {
        console.log(this.nodes.length);
        this.runProcess = false;
        var allNodeIds = this.nodes.map(function (n) { return n.id; });
        var allEdgeIds = this.edges.map(function (e) { return e.id; });
        this.nodes.remove(allNodeIds);
        this.edges.remove(allEdgeIds);
        this.nodes.clear();
        this.edges.clear();
        this.links = [];
        this.edgeIds = [];
        this.selectedModules = [];
        console.log(this.nodes.length);
    };
    ModuleManagement.getVariableType = function (typeName) {
        if (typeName === 'String') {
            return _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].String;
        }
        else if (typeName === 'Float') {
            return _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].Float;
        }
        else if (typeName === 'Integer') {
            return _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].Integer;
        }
        else if (typeName === 'File') {
            return _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].File;
        }
        else if (typeName === 'List') {
            return _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].List;
        }
    };
    ModuleManagement.getVariableTypeName = function (type) {
        if (type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].String) {
            return 'رشته';
        }
        else if (type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].Float) {
            return 'عدد اعشاری';
        }
        else if (type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].Integer) {
            return 'عدد صحیح';
        }
        else if (type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].File) {
            return 'فایل';
        }
        else if (type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].List) {
            return 'لیست';
        }
        else if (type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_4__["VariableType"].All) {
            return 'نامشخص';
        }
    };
    ModuleManagement.selectedModules = [];
    ModuleManagement.toolboxModules = [];
    ModuleManagement.links = [];
    ModuleManagement.nodes = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]();
    ModuleManagement.edges = new vis__WEBPACK_IMPORTED_MODULE_1__["DataSet"]();
    ModuleManagement.edgeIds = [];
    ModuleManagement.runProcess = false;
    return ModuleManagement;
}());



/***/ }),

/***/ "./src/app/share/module.model.ts":
/*!***************************************!*\
  !*** ./src/app/share/module.model.ts ***!
  \***************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/app/share/api.ts");
/* harmony import */ var _variable_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variable-type.enum */ "./src/app/share/variable-type.enum.ts");
/* harmony import */ var _module_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-management */ "./src/app/share/module-management.ts");




var Module = /** @class */ (function () {
    function Module() {
        this.inputs = [];
        this.outputs = [];
        this.checkInputsAvailability();
    }
    Module.prototype.checkInputsAvailability = function () {
        var _this = this;
        var sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(2000).subscribe(function () {
            if (_this.inputs.length > 0 && _this.isSelected &&
                _this.codeName !== 'inputGetterModule') {
                if (_module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].runProcess) {
                    var allInputsIsReady = true;
                    for (var _i = 0, _a = _this.inputs; _i < _a.length; _i++) {
                        var input = _a[_i];
                        if (!input.isReady) {
                            allInputsIsReady = false;
                            break;
                        }
                    }
                    if (allInputsIsReady) {
                        // sub.unsubscribe(); todo
                        _module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].nodeInputsIsReady(_this.id);
                        if (_this.codeName !== 'displayModule') {
                            _this.doService();
                        }
                    }
                }
                else {
                    _module_management__WEBPACK_IMPORTED_MODULE_3__["ModuleManagement"].moduleIsWaiting(_this.id);
                }
            }
        });
    };
    Module.prototype.doService = function () {
        var _this = this;
        if (this.webServiceType === 'json') {
            var bodyObject = this.getRequestBodyJson();
            _api__WEBPACK_IMPORTED_MODULE_1__["Api"].postApi(this.webServiceUrl, bodyObject).then(function (data) {
                for (var i = 0; i < _this.outputs.length; i++) {
                    if (_this.outputs[i].type !== _variable_type_enum__WEBPACK_IMPORTED_MODULE_2__["VariableType"].File) {
                        _this.outputs[i].value = data[_this.outputs[i].scriptName];
                        _this.outputs[i].isReady = true;
                    }
                    else {
                        //todo save file in cloud and return url
                    }
                }
                console.log('Module: ' + _this.name + ' output ' + _this.outputs[0].name + ' is ready.');
            });
        }
        else if (this.webServiceType === 'form-data') {
            this.getRequestBodyFormData().then(function (bodyObject) {
                _api__WEBPACK_IMPORTED_MODULE_1__["Api"].postApiFormData(_this.webServiceUrl, bodyObject).then(function (data) {
                    for (var i = 0; i < _this.outputs.length; i++) {
                        if (_this.outputs[i].type !== _variable_type_enum__WEBPACK_IMPORTED_MODULE_2__["VariableType"].File) {
                            _this.outputs[i].value = data[_this.outputs[i].scriptName];
                            _this.outputs[i].isReady = true;
                        }
                        else {
                            //todo save file in cloud and return url
                        }
                    }
                });
            });
        }
    };
    Module.prototype.getRequestBodyJson = function () {
        var obj = {};
        for (var _i = 0, _a = this.inputs; _i < _a.length; _i++) {
            var input = _a[_i];
            if (input.type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_2__["VariableType"].File) {
            }
            else {
                obj[input.scriptName] = input.type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_2__["VariableType"].String ? input.value : +input.value;
            }
        }
        return obj;
    };
    Module.prototype.getRequestBodyFormData = function () {
        var _this = this;
        var form = new FormData();
        var promise = new Promise((function (resolve) {
            var _loop_1 = function (i) {
                if (_this.inputs[i].type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_2__["VariableType"].File) {
                    _api__WEBPACK_IMPORTED_MODULE_1__["Api"].getFileFromCloudStorage(_this.inputs[i].value).then(function (file) {
                        form.append(_this.inputs[i].scriptName, file);
                        if (i === _this.inputs.length - 1) {
                            resolve(form);
                        }
                    });
                }
                else {
                    form.append(_this.inputs[i].scriptName, _this.inputs[i].type === _variable_type_enum__WEBPACK_IMPORTED_MODULE_2__["VariableType"].String ? _this.inputs[i].value : +_this.inputs[i].value);
                    if (i === _this.inputs.length - 1) {
                        resolve(form);
                    }
                }
            };
            for (var i = 0; i < _this.inputs.length; i++) {
                _loop_1(i);
            }
        }));
        return promise;
    };
    return Module;
}());



/***/ }),

/***/ "./src/app/share/output.model.ts":
/*!***************************************!*\
  !*** ./src/app/share/output.model.ts ***!
  \***************************************/
/*! exports provided: Output */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Output", function() { return Output; });
var Output = /** @class */ (function () {
    function Output() {
    }
    return Output;
}());



/***/ }),

/***/ "./src/app/share/process.model.ts":
/*!****************************************!*\
  !*** ./src/app/share/process.model.ts ***!
  \****************************************/
/*! exports provided: Process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Process", function() { return Process; });
var Process = /** @class */ (function () {
    function Process() {
    }
    return Process;
}());



/***/ }),

/***/ "./src/app/share/variable-type.enum.ts":
/*!*********************************************!*\
  !*** ./src/app/share/variable-type.enum.ts ***!
  \*********************************************/
/*! exports provided: VariableType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableType", function() { return VariableType; });
var VariableType;
(function (VariableType) {
    VariableType[VariableType["String"] = 1] = "String";
    VariableType[VariableType["Integer"] = 2] = "Integer";
    VariableType[VariableType["Float"] = 3] = "Float";
    VariableType[VariableType["File"] = 4] = "File";
    VariableType[VariableType["List"] = 5] = "List";
    VariableType[VariableType["All"] = 6] = "All";
})(VariableType || (VariableType = {}));


/***/ }),

/***/ "./src/app/toolbox/load-process/load-process.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/toolbox/load-process/load-process.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".process-container {\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.process-item {\r\n  margin: 0.5em 0;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b29sYm94L2xvYWQtcHJvY2Vzcy9sb2FkLXByb2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAvdG9vbGJveC9sb2FkLXByb2Nlc3MvbG9hZC1wcm9jZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvY2Vzcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnByb2Nlc3MtaXRlbSB7XHJcbiAgbWFyZ2luOiAwLjVlbSAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/toolbox/load-process/load-process.component.html":
/*!******************************************************************!*\
  !*** ./src/app/toolbox/load-process/load-process.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showProcessLoader\" class=\"panel panel-info process-container\">\n  <div class=\"panel-heading\">بارگذاری فرآیندها</div>\n  <div class=\"panel-body\">\n    <div *ngFor=\"let process of userProcesses\" class=\"list-group-item process-item\" (click)=\"onProcessClicked(process)\">\n      {{process.name}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/toolbox/load-process/load-process.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/toolbox/load-process/load-process.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadProcessComponent", function() { return LoadProcessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../share/api */ "./src/app/share/api.ts");
/* harmony import */ var _share_link_inout_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../share/link-inout.model */ "./src/app/share/link-inout.model.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/module-management */ "./src/app/share/module-management.ts");
/* harmony import */ var _share_module_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../share/module-management.service */ "./src/app/share/module-management.service.ts");






var LoadProcessComponent = /** @class */ (function () {
    function LoadProcessComponent(mms) {
        this.mms = mms;
        this.userProcesses = [];
        this.showProcessLoader = false;
    }
    LoadProcessComponent.prototype.ngOnInit = function () {
        this.getAllUserProcesses();
    };
    LoadProcessComponent.prototype.getAllUserProcesses = function () {
        var _this = this;
        _share_api__WEBPACK_IMPORTED_MODULE_2__["Api"].getApi('http://127.0.0.1:5000/api/store/processes/user-processes').then(function (serverProcesses) {
            _this.userProcesses = serverProcesses;
            _this.showProcessLoader = true;
        });
    };
    LoadProcessComponent.prototype.onProcessClicked = function (selectedProcess) {
        var processModules;
        var processLinks;
        processModules = JSON.parse(selectedProcess.json_file).modules;
        processLinks = JSON.parse(selectedProcess.json_file).links;
        _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].clearDesk();
        this.addProcessModulesToNetwork(processModules);
        this.addProcessLinksToNetwork(processLinks);
        this.mms.stabilizeNetwork.emit();
    };
    LoadProcessComponent.prototype.addProcessModulesToNetwork = function (processModules) {
        for (var _i = 0, processModules_1 = processModules; _i < processModules_1.length; _i++) {
            var moduleItem = processModules_1[_i];
            var newNode = {
                id: moduleItem.id,
                label: _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getNewSelectedModuleName(moduleItem.name),
                image: moduleItem.imageAddress,
                shape: 'image'
            };
            _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].addNewNode(newNode);
            if (_share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getAllSelectedModules().length == 0) {
                this.mms.startNetwork.emit();
            }
            var tempModule = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].copyModule(moduleItem);
            tempModule.id = moduleItem.id;
            _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].addToSelectedModules(tempModule);
        }
    };
    LoadProcessComponent.prototype.addProcessLinksToNetwork = function (processLinks) {
        for (var _i = 0, processLinks_1 = processLinks; _i < processLinks_1.length; _i++) {
            var link = processLinks_1[_i];
            var newLink = new _share_link_inout_model__WEBPACK_IMPORTED_MODULE_3__["LinkInOut"]();
            newLink.outputModuleId = link.outputModuleId;
            newLink.outputId = link.outputId;
            newLink.inputModuleId = link.inputModuleId;
            newLink.inputId = link.inputId;
            _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].addNewLink(newLink);
        }
    };
    LoadProcessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-load-process',
            template: __webpack_require__(/*! ./load-process.component.html */ "./src/app/toolbox/load-process/load-process.component.html"),
            styles: [__webpack_require__(/*! ./load-process.component.css */ "./src/app/toolbox/load-process/load-process.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_module_management_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManagementService"]])
    ], LoadProcessComponent);
    return LoadProcessComponent;
}());



/***/ }),

/***/ "./src/app/toolbox/toolbox.component.css":
/*!***********************************************!*\
  !*** ./src/app/toolbox/toolbox.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#toolbox {\r\n  height: 100%;\r\n}\r\n\r\n#toolbox_title {\r\n  text-align: center;\r\n\r\n}\r\n\r\n.tool:focus {\r\n  background-color: lightgreen !important;\r\n}\r\n\r\ndiv .tool {\r\n  /*text-align: center;*/\r\n  background-size: 60% !important;\r\n  background-position: center !important;\r\n  background-repeat: no-repeat !important;\r\n  height: 5em;\r\n  cursor: pointer;\r\n}\r\n\r\n.panel-heading {\r\n  text-align: center;\r\n}\r\n\r\n.col-lg-4 {\r\n  text-align: center;\r\n}\r\n\r\n.toolbox-container {\r\n  display: -webkit-flex;\r\n  display: flex;\r\n  -webkit-flex-wrap: wrap;\r\n          flex-wrap: wrap;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC90b29sYm94L3Rvb2xib3guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsK0JBQStCO0VBQy9CLHNDQUFzQztFQUN0Qyx1Q0FBdUM7RUFDdkMsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBYTtFQUFiLGFBQWE7RUFDYix1QkFBZTtVQUFmLGVBQWU7QUFDakIiLCJmaWxlIjoiYXBwL3Rvb2xib3gvdG9vbGJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Rvb2xib3gge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3Rvb2xib3hfdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi50b29sOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmRpdiAudG9vbCB7XHJcbiAgLyp0ZXh0LWFsaWduOiBjZW50ZXI7Ki9cclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwJSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDVlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkaW5nIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb2wtbGctNCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9vbGJveC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/toolbox/toolbox.component.html":
/*!************************************************!*\
  !*** ./src/app/toolbox/toolbox.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showToolbox\" class=\"panel-group\" id=\"accordion\">\n  <div class=\"panel panel-default\" *ngFor=\"let category of categories; let i=index;\">\n    <div class=\"panel-heading\">\n      <h4 class=\"panel-title\">\n        <a data-toggle=\"collapse\" href=\"#collapse{{i}}\">{{category.name}}</a>\n      </h4>\n    </div>\n    <div id=\"collapse{{i}}\" [ngClass]=\"{'in': i === 0}\" class=\"panel-collapse collapse\">\n      <div class=\"panel-body\">\n        <div class=\"row toolbox-container\">\n          <ng-container *ngFor=\"let module of tools\">\n            <div *ngIf=\"module.category_id === category.id\" class=\"col-lg-4 tool-container\">\n              <div class=\"tool\"\n                   [style.background]=\"'url(' + module.imageAddress + ')'\"\n                   (dblclick)=\"moduleClicked(module)\">\n              </div>\n              <div>{{module.name}}</div>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<app-load-process></app-load-process>\n"

/***/ }),

/***/ "./src/app/toolbox/toolbox.component.ts":
/*!**********************************************!*\
  !*** ./src/app/toolbox/toolbox.component.ts ***!
  \**********************************************/
/*! exports provided: ToolboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolboxComponent", function() { return ToolboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_module_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/module.model */ "./src/app/share/module.model.ts");
/* harmony import */ var _share_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../share/api */ "./src/app/share/api.ts");
/* harmony import */ var _share_module_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../share/module-management */ "./src/app/share/module-management.ts");
/* harmony import */ var _share_module_management_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/module-management.service */ "./src/app/share/module-management.service.ts");
/* harmony import */ var _share_input_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../share/input.model */ "./src/app/share/input.model.ts");
/* harmony import */ var _share_output_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/output.model */ "./src/app/share/output.model.ts");
/* harmony import */ var _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../share/variable-type.enum */ "./src/app/share/variable-type.enum.ts");









var ToolboxComponent = /** @class */ (function () {
    function ToolboxComponent(mms, chRef) {
        this.mms = mms;
        this.chRef = chRef;
        this.tools = [];
        this.categories = [];
        this.showToolbox = false;
    }
    ToolboxComponent.prototype.ngOnInit = function () {
        this.getModuleCategories();
        this.getToolboxModules();
    };
    ToolboxComponent.prototype.getToolboxModules = function () {
        var _this = this;
        this.addInputGetterModule();
        this.addDisplayModule();
        _share_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getApi('http://127.0.0.1:5000/store/modules/user-modules').then(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var module = data_1[_i];
                var newModule = new _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"]();
                newModule.id = module.id;
                newModule.name = module.name;
                newModule.codeName = module.code_name;
                newModule.webServiceUrl = module.web_service_url;
                newModule.webServiceType = module.web_service_type;
                newModule.imageAddress = module.image_address;
                newModule.iconAddress = module.icon_address;
                newModule.isSelected = false;
                newModule.category_id = module.category_id;
                for (var _a = 0, _b = module.inputs; _a < _b.length; _a++) {
                    var input = _b[_a];
                    var newInput = new _share_input_model__WEBPACK_IMPORTED_MODULE_6__["Input"]();
                    newInput.id = input.id;
                    newInput.name = input.name;
                    newInput.scriptName = input.scriptName;
                    newInput.isReady = false;
                    newInput.description = input.description;
                    newInput.isParameter = input.isParameter;
                    newInput.type = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getVariableType(input.type);
                    newModule.inputs.push(newInput);
                }
                for (var _c = 0, _d = module.outputs; _c < _d.length; _c++) {
                    var output = _d[_c];
                    var newOutput = new _share_output_model__WEBPACK_IMPORTED_MODULE_7__["Output"]();
                    newOutput.id = output.id;
                    newOutput.name = output.name;
                    newOutput.scriptName = output.scriptName;
                    newOutput.isReady = false;
                    newOutput.description = output.description;
                    newOutput.type = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getVariableType(output.type);
                    newModule.outputs.push(newOutput);
                }
                _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].addToToolbox(newModule);
            }
            _this.tools = _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].getToolboxModules();
            _this.showToolbox = true;
            _this.chRef.detectChanges();
        });
    };
    ToolboxComponent.prototype.getModuleCategories = function () {
        var _this = this;
        _share_api__WEBPACK_IMPORTED_MODULE_3__["Api"].getApi('http://127.0.0.1:5000/store/categories/all_categories')
            .then(function (allCategories) {
            _this.categories = allCategories;
            _this.chRef.detectChanges();
        });
    };
    ToolboxComponent.prototype.addInputGetterModule = function () {
        var inputGetterModule = new _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"]();
        inputGetterModule.id = (Math.random() * 1e7).toString(32);
        inputGetterModule.name = 'ماژول دریافت ورودی';
        inputGetterModule.codeName = 'inputGetterModule';
        inputGetterModule.imageAddress = '/static/module_images/input-getter.png';
        inputGetterModule.category_id = 1;
        inputGetterModule.outputs = [
            {
                name: 'خروجی',
                id: (Math.random() * 1e7).toString(32),
                isReady: false,
                scriptName: 'input',
                type: _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_8__["VariableType"].All
            }
        ];
        _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].addToToolbox(inputGetterModule);
    };
    ToolboxComponent.prototype.addDisplayModule = function () {
        var displayModule = new _share_module_model__WEBPACK_IMPORTED_MODULE_2__["Module"]();
        displayModule.id = (Math.random() * 1e7).toString(32);
        displayModule.name = 'ماژول نمایشگر';
        displayModule.codeName = 'displayModule';
        displayModule.imageAddress = '/static/module_images/display.png';
        displayModule.category_id = 1;
        displayModule.inputs = [
            {
                name: 'ورودی نمایشگر',
                id: (Math.random() * 1e7).toString(32),
                isReady: false,
                scriptName: 'displayInput',
                type: _share_variable_type_enum__WEBPACK_IMPORTED_MODULE_8__["VariableType"].All
            }
        ];
        _share_module_management__WEBPACK_IMPORTED_MODULE_4__["ModuleManagement"].addToToolbox(displayModule);
    };
    ToolboxComponent.prototype.moduleClicked = function (selectedModule) {
        this.mms.newModuleSelectedFromToolbox.emit(selectedModule);
    };
    ToolboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-toolbox',
            template: __webpack_require__(/*! ./toolbox.component.html */ "./src/app/toolbox/toolbox.component.html"),
            styles: [__webpack_require__(/*! ./toolbox.component.css */ "./src/app/toolbox/toolbox.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_share_module_management_service__WEBPACK_IMPORTED_MODULE_5__["ModuleManagementService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ToolboxComponent);
    return ToolboxComponent;
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

module.exports = __webpack_require__(/*! D:\Repos\Kashef-Flask\KashefApplication\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map