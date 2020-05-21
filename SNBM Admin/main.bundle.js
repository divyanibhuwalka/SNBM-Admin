webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/agent-sidebar/agent-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" with-maxwidth AgentSection chapter pull-right\">\n\n  <article class=\"article\">\n      <h2 class=\"article-title articleTitle\">Create Agent</h2>\n      <div class=\"box box-default\">\n          <div class=\"box-body\">\n              <form class=\"\" [formGroup]=\"createAgentForm\" #formDirective=\"ngForm\"  (ngSubmit)=\"onCreateAgentSubmit(createAgentForm,formDirective)\">\n\n                  <div class=\"row\">\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"First name\" required formControlName=\"firstName\">\n                          <mat-error>\n                              First name should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Last name\" required formControlName=\"lastName\">\n                          <mat-error>\n                              Last name should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Email\" required formControlName=\"email\">\n                          <mat-error>\n                              Email is not valid !\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Phone Number\" required formControlName=\"phoneNumber\">\n                          <mat-error *ngIf=\"createAgentForm.hasError('minlength','phoneNumber')\">\n                              Phone Number should be 10 digits\n                          </mat-error>\n                          <mat-error *ngIf=\"createAgentForm.hasError('maxlength','phoneNumber')\">\n                              Phone Number should be 10 digits\n                          </mat-error>\n                          <mat-error *ngIf=\"createAgentForm.hasError('pattern','phoneNumber')\">\n                              Only numbers allowed !\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" [(ngModel)]=\"searchElementRef.nativeElement.value\" spellcheck=\"off\" #search formControlName=\"address\" required>\n                          <mat-icon matSuffix style=\"font-size: 20px;cursor: pointer;\" (click)=\"getLocation()\" >near_me</mat-icon>\n                          <mat-error>\n                              Address required!\n                          </mat-error>\n                      </mat-form-field>\n\n                  </div>\n                  {{cstatus}}\n\n                  <div class=\"divider divider-md\"></div>\n                  <div class=\"row\">\n                      <div class=\"col-md-12 text-center\">\n                          <button class=\"col-md-1\" type=\"button\"  (click)=\"agentclose();\" mat-raised-button color=\"warn\" >Cancel</button>\n                          <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createAgentForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                      </div>\n                  </div>\n\n                  <div class=\"container\">\n                      <div class=\"form-group\">\n\n                      </div>\n                      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n                          <agm-marker  (dragEnd)=\"markerEnd($event)\"  [markerDraggable]=\"true\" [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                      </agm-map>\n                  </div>\n\n              </form>\n\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/agent-sidebar/agent-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-sizing: border-box;\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  background: rgba(19, 18, 18, 0.8);\n  margin-top: 50px;\n  z-index: 9; }\n\n:host.is-agentOpen {\n  display: block; }\n\n.AgentSection {\n  background: #fff;\n  height: 100%; }\n\n.articleTitle {\n  text-align: center;\n  margin-top: 15px !important; }\n\n.with-maxwidth {\n  width: 400px;\n  overflow-y: auto; }\n\nagm-map {\n  height: 300px; }\n\n@media screen and (max-width: 600px) {\n  .with-maxwidth {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agent-sidebar/agent-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agent_sidebar_service__ = __webpack_require__("../../../../../src/app/agent-sidebar/agent-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var valnumber = /^[0-9][0-9]*$/;
var eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var AgentSidebarComponent = (function () {
    function AgentSidebarComponent(userService, formDirective, agentSidebar, mapsAPILoader, ngZone) {
        this.userService = userService;
        this.formDirective = formDirective;
        this.agentSidebar = agentSidebar;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.isAgentOpen = false;
        this.url = '/api/';
        // For Create shop
        this.createAgentForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(eml)),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(valnumber)])),
            address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)])),
            primaryArea: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            secondaryArea: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            tertiaryArea: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            dailyTargets: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)]))
        });
    }
    AgentSidebarComponent.prototype.agentclose = function () {
        this.agentSidebar.agentSidebarClose();
    };
    AgentSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agentSidebar.agentchange.subscribe(function (AgentOpen) {
            _this.isAgentOpen = AgentOpen;
        });
        // set google maps defaults
        this.zoom = 10;
        this.latitude = 17.4252392;
        this.longitude = 78.4252013;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            _this.geoCoder = new google.maps.Geocoder;
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    // Function For Create Agent
    AgentSidebarComponent.prototype.onCreateAgentSubmit = function (createAgentForm, formDirective) {
        var _this = this;
        var agentdata = {
            firstName: this.createAgentForm.get('firstName').value,
            lastName: this.createAgentForm.get('lastName').value,
            email: this.createAgentForm.get('email').value,
            phoneNumber: this.createAgentForm.get('phoneNumber').value,
            address: this.searchElementRef.nativeElement.value,
            latitude: this.latitude,
            longitude: this.longitude,
            type: 'agent'
        };
        this.userService.createAgent(this.url, agentdata)
            .subscribe(function (data) {
            formDirective.resetForm();
            createAgentForm.reset();
            _this.cstatus = 'Agent Created Successfully !';
        }, function (err) {
            console.log(err);
            _this.cstatus = err.error.message;
        });
    };
    AgentSidebarComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    AgentSidebarComponent.prototype.markerEnd = function (markerDetails) {
        var _this = this;
        if (markerDetails) {
            this.latitude = markerDetails.coords.lat;
            this.longitude = markerDetails.coords.lng;
            this.geoCoder.geocode({ 'location': { lat: this.latitude, lng: this.longitude } }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        // this.searchElementRef.nativeElement.value = results[0].formatted_address);
                        // console.log(this.searchElementRef.nativeElement.value);
                        // infowindow.setContent(results[0].formatted_address);
                    }
                    else {
                        window.alert('No results found');
                    }
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    };
    AgentSidebarComponent.prototype.getLocation = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.geoCoder.geocode({ 'location': { lat: _this.latitude, lng: _this.longitude } }, function (results, status) {
                    if (status === 'OK') {
                        if (results[0]) {
                            _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        }
                        else {
                            window.alert('No results found');
                        }
                    }
                    else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
            });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-agentOpen'),
        __metadata("design:type", Object)
    ], AgentSidebarComponent.prototype, "isAgentOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AgentSidebarComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], AgentSidebarComponent.prototype, "myform", void 0);
    AgentSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agent-sidebar',
            template: __webpack_require__("../../../../../src/app/agent-sidebar/agent-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/agent-sidebar/agent-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroupDirective"], __WEBPACK_IMPORTED_MODULE_2__agent_sidebar_service__["a" /* agentSideBarService */], __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], AgentSidebarComponent);
    return AgentSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agent-sidebar/agent-sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agentSideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var agentSideBarService = (function () {
    function agentSideBarService() {
        this.isAgentOpen = false;
        this.agentchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    agentSideBarService.prototype.toggle = function () {
        this.isAgentOpen = !this.isAgentOpen;
        this.agentchange.emit(this.isAgentOpen);
    };
    agentSideBarService.prototype.agentSidebarClose = function () {
        this.agentchange.emit(false);
    };
    agentSideBarService.prototype.agentSidebarOpen = function () {
        this.agentchange.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], agentSideBarService.prototype, "agentchange", void 0);
    agentSideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], agentSideBarService);
    return agentSideBarService;
}());



/***/ }),

/***/ "../../../../../src/app/agents/agentlist-cnfact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onactivateClick( data.agent_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/agents/agentlist-cnfact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agents/agentlist-cnfdact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to De-Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onDeacativateClick( data.agent_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/agents/agentlist-cnfdact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agents/agents.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-8\">\n            <h2 class=\"article-title\">All Agents ({{agentsList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n          <div class=\"col-md-2\" style=\"margin: auto\">\n              <mat-chip-list>\n              <mat-chip class=\"pull-right addagentbtn\"  selected=\"true\" [routerLink]=\"['/createagent']\"><i class=\"material-icons\">add_circle_outline</i>&nbsp;&nbsp; New Agent</mat-chip>\n              </mat-chip-list>\n          </div>\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Agents\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row agentheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">Agent Name</div>\n                  <div class=\"col-md-2\">Phone</div>\n                  <div class=\"col-md-2\">Email</div>\n                  <div class=\"col-md-4\">Address</div>\n                  <div class=\"col-md-1\"></div>\n                </div>\n                  <ul class=\"list-group agentslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let agent of agentsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-1\">\n                            <button title=\"Active\" *ngIf=\"agent?.active == true \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                            <button title=\"De-Active\" *ngIf=\"agent?.active == false \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n\n                          </div>\n                          <div class=\"col-md-2\">{{agent?.firstName}} {{agent?.lastName}} </div>\n                          <div class=\"col-md-2\">{{agent?.phoneNumber}} </div>\n                          <div class=\"col-md-2\">{{agent?.email}} </div>\n                          <div class=\"col-md-4\">{{agent?.address}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(agent?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{agent?.id}}\">\n                                    <a class=\"pointer\" (click)=\"editData( agent?.id )\" >Edit</a>\n                                    <a class=\"pointer\" *ngIf=\"agent?.active == true \" (click)=\"deactivateAgent( agent?.id )\" >De-activate</a>\n                                    <a class=\"pointer\" *ngIf=\"agent?.active == false \" (click)=\"activateAgent( agent?.id )\" >Activate</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    <!-- </table> -->\n                    </ul>\n                    <div *ngIf=\"agentsList && (agentsList | filter: searchText).length === 0\">\n                        <h4 style=\"text-align: center\" >No Data Found</h4>\n                      </div>\n                    <div class=\"pull-right\" *ngIf=\"agentsList && (agentsList | filter: searchText).length > 0\">\n                      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"Active\" >\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row agentheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">Agent Name</div>\n                  <div class=\"col-md-2\">Phone</div>\n                  <div class=\"col-md-2\">Email</div>\n                  <div class=\"col-md-4\">Address</div>\n                  <div class=\"col-md-1\"></div>\n                </div>\n                  <ul class=\"list-group agentslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let agent of activeAgentsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-1\">\n                            <button title=\"Active\" *ngIf=\"agent.active == true \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                            <button title=\"De-Active\" *ngIf=\"agent.active == false \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                          </div>\n                          <div class=\"col-md-2\">{{agent?.firstName}} {{agent?.lastName}} </div>\n                          <div class=\"col-md-2\">{{agent?.phoneNumber}} </div>\n                          <div class=\"col-md-2\">{{agent?.email}} </div>\n                          <div class=\"col-md-4\">{{agent?.address}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(agent?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{agent?.id}}\">\n                                    <a class=\"pointer\" (click)=\"editData( agent?.id )\" >Edit</a>\n                                    <a class=\"pointer\" *ngIf=\"agent?.active == true \" (click)=\"deactivateAgent( agent?.id )\" >De-activate</a>\n                                    <a class=\"pointer\" *ngIf=\"agent?.active == false \" (click)=\"activateAgent( agent?.id )\" >Activate</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    <!-- </table> -->\n                    </ul>\n                    <div *ngIf=\"activeAgentsList && (activeAgentsList | filter: searchText).length === 0\">\n                        <h4 style=\"text-align: center\" >No Data Found</h4>\n                      </div>\n                    <div class=\"pull-right\" *ngIf=\"activeAgentsList && (activeAgentsList | filter: searchText).length > 0\">\n                      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"In Active\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row agentheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">Agent Name</div>\n                  <div class=\"col-md-2\">Phone</div>\n                  <div class=\"col-md-2\">Email</div>\n                  <div class=\"col-md-4\">Address</div>\n                  <div class=\"col-md-1\"></div>\n                </div>\n                  <ul class=\"list-group agentslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let agent of deactiveAgentsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-1\">\n                            <button title=\"Active\" *ngIf=\"agent.active == true \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                            <button title=\"De-Active\" *ngIf=\"agent.active == false \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                          </div>\n                          <div class=\"col-md-2\">{{agent?.firstName}} {{agent?.lastName}} </div>\n                          <div class=\"col-md-2\">{{agent?.phoneNumber}} </div>\n                          <div class=\"col-md-2\">{{agent?.email}} </div>\n                          <div class=\"col-md-4\">{{agent?.address}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(agent?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{agent?.id}}\">\n                                    <a class=\"pointer\" (click)=\"editData( agent?.id )\" >Edit</a>\n                                    <a class=\"pointer\" *ngIf=\"agent.active == true \" (click)=\"deactivateAgent( agent?.id )\" >De-activate</a>\n                                    <a class=\"pointer\" *ngIf=\"agent.active == false \" (click)=\"activateAgent( agent?.id )\" >Activate</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    <!-- </table> -->\n                    </ul>\n                    <div *ngIf=\"deactiveAgentsList && (deactiveAgentsList | filter: searchText).length === 0\">\n                        <h4 style=\"text-align: center\" >No Data Found</h4>\n                      </div>\n                    <div class=\"pull-right\" *ngIf=\"deactiveAgentsList && (deactiveAgentsList | filter: searchText).length > 0\">\n                      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "../../../../../src/app/agents/agents.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".agentslist li {\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  word-wrap: break-word; }\n\n.agentheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.addagentbtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .agentheading {\n    display: none !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agents/agents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CnfDeactagntsDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CnfActagntsDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditagentsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__discounts_sidebar_discounts_sidebar_service__ = __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var valnumber = /^[0-9][0-9]*$/;
var eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var AgentsComponent = (function () {
    function AgentsComponent(userService, spinner, router, dialog, categorysidebar, subcategorysidebar, discountsidebar) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.discountsidebar = discountsidebar;
        this.url = '/api/';
        this.spinner.show();
        this.agentsdata();
    }
    AgentsComponent.prototype.ngOnInit = function () {
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        this.discountsidebar.discountSidebarClose();
        __WEBPACK_IMPORTED_MODULE_10_jquery__('.mat-tab-label-container').css('background', '#fff');
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            //console.log(event);
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    AgentsComponent.prototype.onTabClick = function (event) {
        var index = event.index;
    };
    AgentsComponent.prototype.agentsdata = function () {
        var _this = this;
        this.spinner.show();
        this.userService.readagents('/api/').subscribe(function (data) {
            _this.agentsList = data;
            _this.activeAgentsList = data.filter(function (agents) { return agents.active == true; });
            _this.deactiveAgentsList = data.filter(function (agents) { return agents.active == false; });
            console.log(_this.agentsList);
            _this.spinner.hide();
        });
    };
    AgentsComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        //$(".myDropdown"+id).toggle();
        __WEBPACK_IMPORTED_MODULE_10_jquery__(".myDropdown" + id).addClass('show');
    };
    AgentsComponent.prototype.editData = function (id) {
        var _this = this;
        var agentid = {
            agent_id: id
        };
        this.spinner.show();
        this.userService.readagentbyid(this.url, agentid).subscribe(function (data) {
            _this.agentList = data.data;
            _this.spinner.hide();
            _this.editagentDialog();
        });
    };
    // Function to edit agent data
    AgentsComponent.prototype.editagentDialog = function () {
        var dialogRef = this.dialog.open(EditagentsDialogComponent, {
            width: '350px',
            data: this.agentList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    AgentsComponent.prototype.deactivateAgent = function (id) {
        var dialogRef = this.dialog.open(CnfDeactagntsDialogComponent, {
            width: '450px',
            data: {
                agent_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    AgentsComponent.prototype.activateAgent = function (id) {
        var dialogRef = this.dialog.open(CnfActagntsDialogComponent, {
            width: '450px',
            data: {
                agent_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    AgentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agents',
            template: __webpack_require__("../../../../../src/app/agents/agents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/agents/agents.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_7__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_8__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */],
            __WEBPACK_IMPORTED_MODULE_9__discounts_sidebar_discounts_sidebar_service__["a" /* discountSideBarService */]])
    ], AgentsComponent);
    return AgentsComponent;
}());

var CnfDeactagntsDialogComponent = (function () {
    function CnfDeactagntsDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfDeactagntsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfDeactagntsDialogComponent.prototype.onDeacativateClick = function (agentid) {
        var _this = this;
        var reqdata = {
            active: false,
            id: agentid
        };
        this.userService.activeDeactiveAgentById(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Agent De-Activated Successfully !';
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        }, function (err) {
            console.log(err);
            _this.cstatus = err.error.message;
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfDeactagntsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agents/agentlist-cnfdact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/agents/agentlist-cnfdact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], CnfDeactagntsDialogComponent);
    return CnfDeactagntsDialogComponent;
}());

var CnfActagntsDialogComponent = (function () {
    function CnfActagntsDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfActagntsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfActagntsDialogComponent.prototype.onactivateClick = function (agentid) {
        var _this = this;
        var reqdata = {
            active: true,
            id: agentid
        };
        this.userService.activeDeactiveAgentById(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Agent Activated Successfully !';
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        }, function (err) {
            console.log(err);
            _this.cstatus = err.error.message;
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfActagntsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agents/agentlist-cnfact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/agents/agentlist-cnfact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], CnfActagntsDialogComponent);
    return CnfActagntsDialogComponent;
}());

var EditagentsDialogComponent = (function () {
    function EditagentsDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit shop
        this.editAgentForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            userId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            email: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(eml)),
            phone: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(12),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(valnumber)])),
            primary_area: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            secondary_area: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            tertiary_area: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            daily_targets: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            agentid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
    }
    EditagentsDialogComponent.prototype.ngOnInit = function () {
    };
    /*openDialog(): void {
        const dialogRef = this.dialog.open(AgentlistDialogComponent, {
            width: '450px',
            data:  this.shopList[0]
        });
        // this.editShopForm.setValue(this.dialogRef.componentInstance.data);
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    }*/
    // Function For Edit shop
    EditagentsDialogComponent.prototype.onEditAgentSubmit = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        var shopdata = {
            user_id: userdata.data[0].id,
            name: this.editAgentForm.get('name').value,
            email: this.editAgentForm.get('email').value,
            phone: this.editAgentForm.get('phone').value,
            primary_area: this.editAgentForm.get('primary_area').value,
            secondary_area: this.editAgentForm.get('secondary_area').value,
            tertiary_area: this.editAgentForm.get('tertiary_area').value,
            daily_targets: this.editAgentForm.get('daily_targets').value,
            db_query: 'update',
            agent_id: this.editAgentForm.get('agentid').value
        };
        this.userService.editagentbyid(this.url, shopdata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Agent Updated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to update Please try again !';
            }
            _this.updateDialog();
        });
    };
    EditagentsDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditagentsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditagentsDialogComponent.prototype, "myform", void 0);
    EditagentsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/agents/editagent-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/agents/editagent-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], EditagentsDialogComponent);
    return EditagentsDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/agents/editagent-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Agent Details</h4>\n<form class=\"\" [formGroup]=\"editAgentForm\"  (ngSubmit)='onEditAgentSubmit()'>\n    <mat-dialog-content>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"agentid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Agent Name\" [(ngModel)]=\"data.name\" value=\"{{data.name}}\" required formControlName=\"name\">\n        <mat-error>\n            Agent name should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Agent Email\" [(ngModel)]=\"data.email\" value=\"{{data.email}}\" required formControlName=\"email\">\n        <mat-error>\n            Email is not valid !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"data.phone\" value=\"{{data.phone}}\" required formControlName=\"phone\">\n        <mat-error *ngIf=\"editAgentForm.hasError('minlength','phone')\">\n            Phone Number should not less than 8\n        </mat-error>\n        <mat-error *ngIf=\"editAgentForm.hasError('maxlength','phone')\">\n            Phone Number should not less than 12\n        </mat-error>\n        <mat-error *ngIf=\"editAgentForm.hasError('pattern','phone')\">\n            Only numbers allowed !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Primary Area\" [(ngModel)]=\"data.primary_area\" value=\"{{data.primary_area}}\" required formControlName=\"primary_area\">\n        <mat-error>\n            Primary Area should not be empty !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Secondary Area\" [(ngModel)]=\"data.secondary_area\" value=\"{{data.secondary_area}}\" required formControlName=\"secondary_area\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Tertiary Area\" [(ngModel)]=\"data.tertiary_area\" value=\"{{data.tertiary_area}}\" required formControlName=\"tertiary_area\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Daily Targets\" [(ngModel)]=\"data.daily_targets\" value=\"{{data.daily_targets}}\" required formControlName=\"daily_targets\">\n        <mat-error>\n            Daily Targets should not be empty !\n        </mat-error>\n    </mat-form-field>\n    </mat-dialog-content>\n    <div mat-dialog-actions>\n         <button mat-raised-button mat-dialog-close style=\"margin: auto;\" class=\"mat-raised-button\" color=\"warn\" > Cancel </button>\n        <button class=\"submit mat-primary\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editAgentForm.valid\" mat-raised-button>Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/agents/editagent-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agentslist/agentlist-cnfact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onactivateClick( data.agent_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/agentslist/agentlist-cnfact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agentslist/agentlist-cnfdact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to De-Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onDeacativateClick( data.agent_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/agentslist/agentlist-cnfdact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agentslist/agentslist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"webview container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"webview container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">Agents List</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n\n\n                    <div class=\"example-header\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Here..\">\n                        </mat-form-field>\n                    </div>\n\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Name</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.name}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Phone Number -->\n                        <ng-container matColumnDef=\"email\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Email</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.email}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Mobile Column -->\n                        <ng-container matColumnDef=\"phone\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Mobile</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.phone}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Primary Column -->\n                        <ng-container matColumnDef=\"primary_area\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Primary Area</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.primary_area}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Secondary Column -->\n                        <ng-container matColumnDef=\"secondary_area\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Secondary Area</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.secondary_area}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Tertiary Column -->\n                        <ng-container matColumnDef=\"tertiary_area\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Tertiary Area</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.tertiary_area}} </mat-cell>\n                        </ng-container>\n\n\n                        <!-- Daily Column -->\n                        <ng-container matColumnDef=\"daily_targets\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Daily Targets</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.daily_targets}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Address Column -->\n                        <ng-container matColumnDef=\"address\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Address</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\"> {{agentdata.address}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Action Column -->\n                        <ng-container matColumnDef=\"status\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Action</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let agentdata\">\n                                    <div class=\"button-row\">\n                                            <button mat-raised-button (click)=\"editData( agentdata.id )\" >Edit</button>\n                                            <button *ngIf=\"agentdata.status == 'Y'\"  (click)=\"deactivateAgent( agentdata.id )\" mat-raised-button color=\"primary\">\n                                                    De-Activate\n                                            </button>\n                                            <button *ngIf=\"agentdata.status == 'N'\"  (click)=\"activateAgent( agentdata.id )\" mat-raised-button color=\"primary\">\n                                                    Activate\n                                            </button>\n                                          </div>\n\n                            </mat-cell>\n                        </ng-container>\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n<div class=\"mobile-view\">\n    <section class=\"chapter\">\n\n        <article class=\"article\">\n            <!-- <h2 class=\"article-title\" style=\"text-align: center\">Shops List</h2> -->\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                        <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-6\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading c-list\">\n                                            <span class=\"title\">Agents List</span>\n                                            <!-- <ul class=\"pull-right c-controls\">\n                                                <li><a href=\"#cant-do-all-the-work-for-you\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add Contact\"><i class=\"glyphicon glyphicon-plus\"></i></a></li>\n                                                <li><a href=\"#\" class=\"hide-search\" data-command=\"toggle-search\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Toggle Search\"><i class=\"fa fa-ellipsis-v\"></i></a></li>\n                                            </ul> -->\n                                        </div>\n                                        <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n                                                <input matInput placeholder=\"Search\" [(ngModel)]=\"term\" autocomplete=\"off\" >\n                                            </mat-form-field>\n                                        <!-- <input ng-model=\"searchText\" placeholder=\"enter search term here\"> -->\n                                        <ul class=\"list-group\" id=\"contact-list\">\n                                            <li class=\"list-group-item\" *ngFor=\"let dat of agentsList | filter:term \">\n                                                <div class=\"col-xs-12\">\n                                                    <span class=\"name\">{{dat?.name}}</span> \n                                                    <!-- three dot menu -->\n                                                        <div class=\"dropdown pull-right\">\n                                                            <!-- three dots -->\n                                                            <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(dat?.id)\">\n                                                                <li></li>\n                                                                <li></li>\n                                                                <li></li>\n                                                            </ul>\n                                                            <!-- menu -->\n                                                            <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{dat?.id}}\">\n                                                                <a (click)=\"editData( dat?.id )\" >Edit</a>\n                                                                <a *ngIf=\"dat?.status == 'Y'\"  (click)=\"deactivateAgent( dat?.id )\" >De-Activate</a>\n                                                                <a *ngIf=\"agentdata?.status == 'N'\"  (click)=\"activateAgent( agentdata.id )\" >Activate</a>\n                                                            </div>\n                                                        </div>\n                                                    <br/>\n                                                    <span class=\"name\">{{dat?.email}}</span>\n                                                    <br/>\n                                                    <span class=\"name\">{{dat?.phone}}</span><br/>\n                                                    <span class=\"name\">{{dat?.primary_area}}</span><br/>\n                                                    <span class=\"name\">{{dat?.secondary_area}}</span><br/>\n                                                    <span class=\"name\">{{dat?.tertiary_area}}</span><br/>\n                                                    <span class=\"name\">{{dat?.daily_targets}}</span><br/>\n                                                    <span class=\"name\">{{dat?.address}}</span><br/>\n                                                    \n                                                    \n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </li>\n                                            \n                                            \n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/agentslist/agentslist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-view {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .webview {\n    display: none; }\n  .mobile-view {\n    display: block; } }\n\n@media screen and (max-width: 600px) and (max-width: 767px) {\n  .visible-xs {\n    display: inline-block !important; }\n  .block {\n    display: block !important;\n    width: 100%;\n    height: 1px !important; } }\n\n@media screen and (max-width: 600px) {\n  #back-to-bootsnipp {\n    position: fixed;\n    top: 10px;\n    right: 10px; }\n  .c-search > .form-control {\n    border-radius: 0px;\n    border-width: 0px;\n    border-bottom-width: 1px;\n    font-size: 1.3em;\n    padding: 12px 12px;\n    height: 44px;\n    outline: none !important; }\n  .c-search > .form-control:focus {\n    outline: 0px !important;\n    -webkit-appearance: none;\n    box-shadow: none; }\n  .c-search > .input-group-btn .btn {\n    border-radius: 0px;\n    border-width: 0px;\n    border-left-width: 1px;\n    border-bottom-width: 1px;\n    height: 44px; }\n  .c-list {\n    padding: 0px;\n    min-height: 44px; }\n  .title {\n    display: inline-block;\n    font-size: 1.7em;\n    font-weight: bold;\n    padding: 5px 15px; }\n  ul.c-controls {\n    list-style: none;\n    margin: 0px;\n    min-height: 44px; }\n  ul.c-controls li {\n    margin-top: 8px;\n    float: left; }\n  ul.c-controls li a {\n    font-size: 1.7em;\n    padding: 11px 10px 6px; }\n  ul.c-controls li a i {\n    min-width: 24px;\n    text-align: center; }\n  ul.c-controls li a:hover {\n    background-color: rgba(51, 51, 51, 0.2); }\n  .c-toggle {\n    font-size: 1.7em; }\n  .name {\n    font-size: 1.0em;\n    font-weight: 600; }\n  .c-info {\n    padding: 5px 10px;\n    font-size: 1.25em; }\n  .icons li {\n    background: none repeat scroll 0 0 #000;\n    height: 4px;\n    width: 4px;\n    line-height: 0;\n    list-style: none outside none;\n    margin-top: 2px;\n    vertical-align: top;\n    border-radius: 50%;\n    pointer-events: none; }\n  .dropbtn {\n    color: white;\n    font-size: 16px;\n    border: none;\n    cursor: pointer; }\n  .dropdown-content {\n    display: none;\n    right: 0px;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1; }\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block; }\n  .dropdown a:hover {\n    background-color: #f1f1f1; }\n  .show {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/agentslist/agentslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentslistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CnfDeactagntDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CnfActagntDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditagentDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var valnumber = /^[0-9][0-9]*$/;
var eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var AgentslistComponent = (function () {
    function AgentslistComponent(userService, router, dialog, spinner) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.url = '/api/';
        this.displayedColumns = ['name', 'email', 'phone', 'primary_area', 'secondary_area', 'tertiary_area', 'daily_targets', 'address', 'status'];
        this.spinner.show();
        this.getAgents();
    }
    AgentslistComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AgentslistComponent.prototype.ngOnInit = function () {
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    AgentslistComponent.prototype.showDropdown = function (id) {
        console.log("called");
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        $(".myDropdown" + id).addClass('show');
    };
    AgentslistComponent.prototype.getAgents = function () {
        var _this = this;
        this.userService.readagents('/api/').subscribe(function (data) {
            _this.agentsList = data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](_this.agentsList);
            _this.dataSource.sort = _this.sort;
            _this.spinner.hide();
        });
    };
    AgentslistComponent.prototype.editData = function (id) {
        var _this = this;
        var agentid = {
            agent_id: id
        };
        this.spinner.show();
        this.userService.readagentbyid(this.url, agentid).subscribe(function (data) {
            _this.agentList = data.data;
            _this.spinner.hide();
            _this.editagentDialog();
        });
    };
    // Function to edit agent data
    AgentslistComponent.prototype.editagentDialog = function () {
        var dialogRef = this.dialog.open(EditagentDialogComponent, {
            width: '350px',
            data: this.agentList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    AgentslistComponent.prototype.deactivateAgent = function (id) {
        var dialogRef = this.dialog.open(CnfDeactagntDialogComponent, {
            width: '450px',
            data: {
                agent_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    AgentslistComponent.prototype.activateAgent = function (id) {
        var dialogRef = this.dialog.open(CnfActagntDialogComponent, {
            width: '450px',
            data: {
                agent_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */])
    ], AgentslistComponent.prototype, "sort", void 0);
    AgentslistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agentslist',
            template: __webpack_require__("../../../../../src/app/agentslist/agentslist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/agentslist/agentslist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"]])
    ], AgentslistComponent);
    return AgentslistComponent;
}());

var CnfDeactagntDialogComponent = (function () {
    function CnfDeactagntDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfDeactagntDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfDeactagntDialogComponent.prototype.onDeacativateClick = function (agentid) {
        var _this = this;
        var dact_data = {
            agent_id: agentid,
            change_status: 'N',
            db_query: 'change_status'
        };
        this.userService.editagentbyid(this.url, dact_data)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Agent De-Activated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to De-Activate Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfDeactagntDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agentslist/agentlist-cnfdact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/agentslist/agentlist-cnfdact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], CnfDeactagntDialogComponent);
    return CnfDeactagntDialogComponent;
}());

var CnfActagntDialogComponent = (function () {
    function CnfActagntDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfActagntDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfActagntDialogComponent.prototype.onactivateClick = function (agentid) {
        var _this = this;
        var act_shop = {
            agent_id: agentid,
            change_status: 'Y',
            db_query: 'change_status'
        };
        this.userService.editagentbyid(this.url, act_shop)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Agent Activated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to Activate Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfActagntDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/agentslist/agentlist-cnfact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/agentslist/agentlist-cnfact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], CnfActagntDialogComponent);
    return CnfActagntDialogComponent;
}());

var EditagentDialogComponent = (function () {
    function EditagentDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit shop
        this.editAgentForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroup"]({
            userId: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](),
            name: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3)])),
            email: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern(eml)),
            phone: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].maxLength(12),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].pattern(valnumber)])),
            primary_area: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(3)])),
            secondary_area: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](),
            tertiary_area: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"](),
            daily_targets: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["Validators"].minLength(1)])),
            agentid: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormControl"]()
        });
    }
    EditagentDialogComponent.prototype.ngOnInit = function () {
    };
    /*openDialog(): void {
        const dialogRef = this.dialog.open(AgentlistDialogComponent, {
            width: '450px',
            data:  this.shopList[0]
        });
        // this.editShopForm.setValue(this.dialogRef.componentInstance.data);
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    }*/
    // Function For Edit shop
    EditagentDialogComponent.prototype.onEditAgentSubmit = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        var shopdata = {
            user_id: userdata.data[0].id,
            name: this.editAgentForm.get('name').value,
            email: this.editAgentForm.get('email').value,
            phone: this.editAgentForm.get('phone').value,
            primary_area: this.editAgentForm.get('primary_area').value,
            secondary_area: this.editAgentForm.get('secondary_area').value,
            tertiary_area: this.editAgentForm.get('tertiary_area').value,
            daily_targets: this.editAgentForm.get('daily_targets').value,
            db_query: 'update',
            agent_id: this.editAgentForm.get('agentid').value
        };
        this.userService.editagentbyid(this.url, shopdata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Agent Updated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to update Please try again !';
            }
            _this.updateDialog();
        });
    };
    EditagentDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditagentDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditagentDialogComponent.prototype, "myform", void 0);
    EditagentDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/agentslist/editagent-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/agentslist/editagent-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], EditagentDialogComponent);
    return EditagentDialogComponent;
}());

/*
@Component({
    selector: 'app-dialog',
    templateUrl: 'agentlist-dialog-component.html',
     styleUrls: ['agentlist-dialog-component.scss']
})
export class AgentlistDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<AgentlistDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}*/


/***/ }),

/***/ "../../../../../src/app/agentslist/editagent-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Agent Details</h4>\n<form class=\"\" [formGroup]=\"editAgentForm\"  (ngSubmit)='onEditAgentSubmit()'>\n    <mat-dialog-content>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"agentid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Agent Name\" [(ngModel)]=\"data.name\" value=\"{{data.name}}\" required formControlName=\"name\">\n        <mat-error>\n            Agent name should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Agent Email\" [(ngModel)]=\"data.email\" value=\"{{data.email}}\" required formControlName=\"email\">\n        <mat-error>\n            Email is not valid !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"data.phone\" value=\"{{data.phone}}\" required formControlName=\"phone\">\n        <mat-error *ngIf=\"editAgentForm.hasError('minlength','phone')\">\n            Phone Number should not less than 8\n        </mat-error>\n        <mat-error *ngIf=\"editAgentForm.hasError('maxlength','phone')\">\n            Phone Number should not less than 12\n        </mat-error>\n        <mat-error *ngIf=\"editAgentForm.hasError('pattern','phone')\">\n            Only numbers allowed !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Primary Area\" [(ngModel)]=\"data.primary_area\" value=\"{{data.primary_area}}\" required formControlName=\"primary_area\">\n        <mat-error>\n            Primary Area should not be empty !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Secondary Area\" [(ngModel)]=\"data.secondary_area\" value=\"{{data.secondary_area}}\" required formControlName=\"secondary_area\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Tertiary Area\" [(ngModel)]=\"data.tertiary_area\" value=\"{{data.tertiary_area}}\" required formControlName=\"tertiary_area\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Daily Targets\" [(ngModel)]=\"data.daily_targets\" value=\"{{data.daily_targets}}\" required formControlName=\"daily_targets\">\n        <mat-error>\n            Daily Targets should not be empty !\n        </mat-error>\n    </mat-form-field>\n    </mat-dialog-content>\n    <div mat-dialog-actions>\n         <button mat-raised-button mat-dialog-close style=\"margin: auto;\" class=\"mat-raised-button\" color=\"warn\" > Cancel </button>\n        <button class=\"submit mat-primary\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editAgentForm.valid\" mat-raised-button>Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/agentslist/editagent-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ngx-spinner\nbdColor = \"rgba(51,51,51,0.74)\"\nsize = \"medium\"\ncolor = \"#fff\"\ntype = \"ball-spin-clockwise\"\n></ngx-spinner>\n<div id=\"app-main\" class=\"app-main full-height\"\n[ngClass]=\"{'fixed-header' : AppConfig.fixedHeader,\n            'nav-collapsed' : AppConfig.navCollapsed,\n            'nav-behind' : AppConfig.navBehind,\n            'layout-boxed' : AppConfig.layoutBoxed,\n            'theme-gray' : AppConfig.theme == 'gray',\n            'theme-dark' : AppConfig.theme == 'dark',\n            'sidebar-sm' : AppConfig.sidebarWidth == 'small',\n            'sidebar-lg' : AppConfig.sidebarWidth == 'large'}\">\n            <!-- <app-sidenav *ngIf=\"navStatus\" ></app-sidenav> -->\n<section id=\"page-container\" class=\"app-page-container\">\n  <app-header *ngIf=\"navStatus\"></app-header>\n\n  <div class=\"app-content-wrapper\" >\n    <div [ngClass]=\"{'app-content': navStatus}\" style=\"padding-left: 0px !important\">\n      <div class=\"full-height\" >\n        <router-outlet></router-outlet>\n      </div>\n    </div>\n\n    <!--<my-app-footer></my-app-footer>-->\n  </div>\n  <app-category-sidebar></app-category-sidebar>\n  <app-subcategory-sidebar></app-subcategory-sidebar>\n  <app-discounts-sidebar></app-discounts-sidebar>\n  <app-coupon-sidebar></app-coupon-sidebar>\n  <app-agent-sidebar></app-agent-sidebar>\n  <app-subscriptionplan-sidebar></app-subscriptionplan-sidebar>\n  <app-createshop-sidebar></app-createshop-sidebar>\n</section>\n</div>\n<!--<my-app-customizer></my-app-customizer>-->\n\n<!--<my-app-search-overlay></my-app-search-overlay>-->\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helper_navigationService__ = __webpack_require__("../../../../../src/app/helper/navigationService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, navService) {
        this.router = router;
        this.navService = navService;
        this.navStatus = true;
        this.navStatusmethod();
        this.navService.setStaus(true);
    }
    AppComponent.prototype.navStatusmethod = function () {
        var _this = this;
        this.navService.getStatus().subscribe(function (status) {
            console.log('calling getstatus', status);
            _this.navStatus = status;
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.AppConfig = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* APPCONFIG */];
        // Scroll to top on route change
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__helper_navigationService__["a" /* NavService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__layout_service__ = __webpack_require__("../../../../../src/app/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preloader_directive__ = __webpack_require__("../../../../../src/app/preloader.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helper_navigationService__ = __webpack_require__("../../../../../src/app/helper/navigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_daterangepicker__ = __webpack_require__("../../../../ng2-daterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_daterangepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_daterangepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_search_filter__ = __webpack_require__("../../../../ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angular_popper__ = __webpack_require__("../../../../angular-popper/fesm5/angular-popper.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_material_dropdown__ = __webpack_require__("../../../../ng2-material-dropdown/fesm5/ng2-material-dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sidenav_sidenav_menu_sidenav_menu_component__ = __webpack_require__("../../../../../src/app/sidenav/sidenav-menu/sidenav-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sidenav_auto_close_mobile_nav_directive__ = __webpack_require__("../../../../../src/app/sidenav/auto-close-mobile-nav.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sidenav_sidenav_menu_accordion_nav_directive__ = __webpack_require__("../../../../../src/app/sidenav/sidenav-menu/accordion-nav.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sidenav_sidenav_menu_append_submenu_icon_directive__ = __webpack_require__("../../../../../src/app/sidenav/sidenav-menu/append-submenu-icon.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sidenav_sidenav_menu_highlight_active_items_directive__ = __webpack_require__("../../../../../src/app/sidenav/sidenav-menu/highlight-active-items.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sidenav_toggle_offcanvas_nav_directive__ = __webpack_require__("../../../../../src/app/sidenav/toggle-offcanvas-nav.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__search_overlay_search_overlay_component__ = __webpack_require__("../../../../../src/app/search-overlay/search-overlay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__search_overlay_search_overlay_directive__ = __webpack_require__("../../../../../src/app/search-overlay/search-overlay.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__search_overlay_open_search_overlay_directive__ = __webpack_require__("../../../../../src/app/search-overlay/open-search-overlay.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__ = __webpack_require__("../../../../../src/app/shopslist/shopslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__dshoplist_dshoplist_component__ = __webpack_require__("../../../../../src/app/dshoplist/dshoplist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__dpendingapprovals_dpendingapprovals_component__ = __webpack_require__("../../../../../src/app/dpendingapprovals/dpendingapprovals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__verifiedshops_verifiedshops_component__ = __webpack_require__("../../../../../src/app/verifiedshops/verifiedshops.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__createagent_createagent_component__ = __webpack_require__("../../../../../src/app/createagent/createagent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__ = __webpack_require__("../../../../../src/app/agentslist/agentslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__createcategory_createcategory_component__ = __webpack_require__("../../../../../src/app/createcategory/createcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__ = __webpack_require__("../../../../../src/app/viewcategories/viewcategories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__ = __webpack_require__("../../../../../src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__ = __webpack_require__("../../../../../src/app/agents/agents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__discounts_discounts_component__ = __webpack_require__("../../../../../src/app/discounts/discounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__subcategories_subcategories_component__ = __webpack_require__("../../../../../src/app/subcategories/subcategories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__category_sidebar_category_sidebar_component__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__subcategory_sidebar_subcategory_sidebar_component__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__discounts_sidebar_discounts_sidebar_component__ = __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__discounts_sidebar_discounts_sidebar_service__ = __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__coupon_sidebar_coupon_sidebar_component__ = __webpack_require__("../../../../../src/app/coupon-sidebar/coupon-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__coupon_sidebar_coupons_sidebar_service__ = __webpack_require__("../../../../../src/app/coupon-sidebar/coupons-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__agent_sidebar_agent_sidebar_component__ = __webpack_require__("../../../../../src/app/agent-sidebar/agent-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__agent_sidebar_agent_sidebar_service__ = __webpack_require__("../../../../../src/app/agent-sidebar/agent-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__coupons_coupons_component__ = __webpack_require__("../../../../../src/app/coupons/coupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__subscriptions_subscriptions_component__ = __webpack_require__("../../../../../src/app/subscriptions/subscriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__subscription_plan_subscription_plan_component__ = __webpack_require__("../../../../../src/app/subscription-plan/subscription-plan.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__subscriptionplan_sidebar_subscriptionplan_sidebar_component__ = __webpack_require__("../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__subscriptionplan_sidebar_subscriptionplan_sidebar_service__ = __webpack_require__("../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__createshop_sidebar_createshop_sidebar_component__ = __webpack_require__("../../../../../src/app/createshop-sidebar/createshop-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__createshop_sidebar_createshop_sidebar_service__ = __webpack_require__("../../../../../src/app/createshop-sidebar/createshop-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// Search Overaly






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["b" /* PageLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* ForgotpasswordDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__sidenav_sidenav_component__["a" /* AppSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_23__sidenav_sidenav_menu_sidenav_menu_component__["a" /* AppSidenavMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_33__header_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_24__sidenav_auto_close_mobile_nav_directive__["a" /* AutoCloseMobileNavDirective */],
                __WEBPACK_IMPORTED_MODULE_25__sidenav_sidenav_menu_accordion_nav_directive__["a" /* AccordionNavDirective */],
                __WEBPACK_IMPORTED_MODULE_26__sidenav_sidenav_menu_append_submenu_icon_directive__["a" /* AppendSubmenuIconDirective */],
                __WEBPACK_IMPORTED_MODULE_27__sidenav_sidenav_menu_highlight_active_items_directive__["a" /* HighlightActiveItemsDirective */],
                __WEBPACK_IMPORTED_MODULE_28__sidenav_toggle_offcanvas_nav_directive__["a" /* ToggleOffcanvasNavDirective */],
                __WEBPACK_IMPORTED_MODULE_34__createshop_createshop_component__["a" /* CreateshopComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__["d" /* ShopslistComponent */],
                __WEBPACK_IMPORTED_MODULE_34__createshop_createshop_component__["b" /* DialogOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__["b" /* ShoplistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__["a" /* EditshopDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__["a" /* EditshopdataDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__["c" /* ShoplistDialogComponentConfirm */],
                __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__["d" /* ShoplistdataDialogComponentConfirm */],
                __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__["c" /* ShoplistdataDialogComponentActivate */],
                __WEBPACK_IMPORTED_MODULE_36__dshoplist_dshoplist_component__["a" /* DshoplistComponent */],
                __WEBPACK_IMPORTED_MODULE_37__dpendingapprovals_dpendingapprovals_component__["a" /* CnfApprDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_37__dpendingapprovals_dpendingapprovals_component__["b" /* CnfRejDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_37__dpendingapprovals_dpendingapprovals_component__["c" /* DpendingapprovalsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__verifiedshops_verifiedshops_component__["c" /* VerifiedshopsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__verifiedshops_verifiedshops_component__["a" /* CnfActDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_38__verifiedshops_verifiedshops_component__["b" /* CnfDeactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_39__createagent_createagent_component__["a" /* CreateagentComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__["a" /* AgentslistComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__["c" /* CnfDeactagntDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__["b" /* CnfActagntDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__["d" /* EditagentDialogComponent */],
                // AgentlistDialogComponent,
                __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__["c" /* CnfDeactagntsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__["d" /* EditagentsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__["b" /* CnfActagntsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_41__createcategory_createcategory_component__["a" /* CreatecategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__["d" /* ViewcategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__["c" /* EditcategoryDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__["b" /* CategorylistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__["a" /* CategorylistActDactDialogComponent */],
                // Search overlay
                __WEBPACK_IMPORTED_MODULE_7__preloader_directive__["a" /* PreloaderDirective */],
                __WEBPACK_IMPORTED_MODULE_30__search_overlay_search_overlay_component__["a" /* AppSearchOverlayComponent */],
                __WEBPACK_IMPORTED_MODULE_31__search_overlay_search_overlay_directive__["a" /* SearchOverlayDirective */],
                __WEBPACK_IMPORTED_MODULE_32__search_overlay_open_search_overlay_directive__["a" /* OpenSearchOverlaylDirective */],
                __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__["b" /* ShopComponent */],
                __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__["a" /* AgentsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__["d" /* EditcategoriesDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_61__coupons_coupons_component__["c" /* EditcouponsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__["c" /* CategorieslistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__["b" /* CategorieslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_46__users_users_component__["c" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_46__users_users_component__["b" /* CnfDeactusersDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_46__users_users_component__["a" /* CnfActusersDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_47__discounts_discounts_component__["a" /* DiscountsComponent */],
                __WEBPACK_IMPORTED_MODULE_50__subcategories_subcategories_component__["d" /* SubcategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_50__subcategories_subcategories_component__["a" /* EditsubcategoriesDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_50__subcategories_subcategories_component__["c" /* SubCategorieslistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_50__subcategories_subcategories_component__["b" /* SubCategorieslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_63__subscription_plan_subscription_plan_component__["c" /* SubslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_61__coupons_coupons_component__["b" /* CouponslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_62__subscriptions_subscriptions_component__["a" /* EditsubscriptionsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_63__subscription_plan_subscription_plan_component__["a" /* EditsubscriptionplansDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_51__category_sidebar_category_sidebar_component__["a" /* CategorySidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_54__subcategory_sidebar_subcategory_sidebar_component__["a" /* SubcategorySidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_55__discounts_sidebar_discounts_sidebar_component__["a" /* DiscountsSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_57__coupon_sidebar_coupon_sidebar_component__["a" /* CouponSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_59__agent_sidebar_agent_sidebar_component__["a" /* AgentSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_61__coupons_coupons_component__["a" /* CouponsComponent */],
                __WEBPACK_IMPORTED_MODULE_62__subscriptions_subscriptions_component__["b" /* SubscriptionsComponent */],
                __WEBPACK_IMPORTED_MODULE_63__subscription_plan_subscription_plan_component__["b" /* SubscriptionPlanComponent */],
                __WEBPACK_IMPORTED_MODULE_64__subscriptionplan_sidebar_subscriptionplan_sidebar_component__["a" /* SubscriptionplanSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_66__createshop_sidebar_createshop_sidebar_component__["a" /* CreateshopSidebarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyDQKY3wS5J6ZeB6hxVMUMwAAQbh1TPKQVc",
                    libraries: ["places"]
                }),
                __WEBPACK_IMPORTED_MODULE_49_ngx_bootstrap__["b" /* CollapseModule */].forRoot(), __WEBPACK_IMPORTED_MODULE_49_ngx_bootstrap__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_12_ng2_validation__["CustomFormsModule"],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["l" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["m" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["n" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["o" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["p" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["q" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["r" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["s" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["t" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["u" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["v" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["w" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["x" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["H" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["I" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["J" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material__["K" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_routes__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_29__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular_highcharts__["b" /* ChartModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_daterangepicker__["Daterangepicker"],
                __WEBPACK_IMPORTED_MODULE_16_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_17_ngx_spinner__["NgxSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_48_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_18_angular_popper__["a" /* NgxPopper */],
                __WEBPACK_IMPORTED_MODULE_19_ng2_material_dropdown__["a" /* Ng2DropdownModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_34__createshop_createshop_component__["b" /* DialogOverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__["b" /* ShoplistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__["a" /* EditshopDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__["a" /* EditshopdataDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shopslist_shopslist_component__["c" /* ShoplistDialogComponentConfirm */],
                __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__["d" /* ShoplistdataDialogComponentConfirm */],
                __WEBPACK_IMPORTED_MODULE_43__shop_shop_component__["c" /* ShoplistdataDialogComponentActivate */],
                __WEBPACK_IMPORTED_MODULE_37__dpendingapprovals_dpendingapprovals_component__["a" /* CnfApprDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_37__dpendingapprovals_dpendingapprovals_component__["b" /* CnfRejDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_38__verifiedshops_verifiedshops_component__["a" /* CnfActDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_38__verifiedshops_verifiedshops_component__["b" /* CnfDeactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__["c" /* CnfDeactagntDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__["b" /* CnfActagntDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_40__agentslist_agentslist_component__["d" /* EditagentDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__["d" /* EditagentsDialogComponent */],
                // AgentlistDialogComponent,
                __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__["c" /* CnfDeactagntsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_44__agents_agents_component__["b" /* CnfActagntsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__["b" /* CategorylistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__["a" /* CategorylistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_42__viewcategories_viewcategories_component__["c" /* EditcategoryDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* ForgotpasswordDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__["d" /* EditcategoriesDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_61__coupons_coupons_component__["c" /* EditcouponsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__["c" /* CategorieslistDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_45__categories_categories_component__["b" /* CategorieslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_46__users_users_component__["b" /* CnfDeactusersDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_46__users_users_component__["a" /* CnfActusersDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_50__subcategories_subcategories_component__["a" /* EditsubcategoriesDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_50__subcategories_subcategories_component__["b" /* SubCategorieslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_63__subscription_plan_subscription_plan_component__["c" /* SubslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_61__coupons_coupons_component__["b" /* CouponslistActDactDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_62__subscriptions_subscriptions_component__["a" /* EditsubscriptionsDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_63__subscription_plan_subscription_plan_component__["a" /* EditsubscriptionplansDialogComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_9__helper_navigationService__["a" /* NavService */],
                __WEBPACK_IMPORTED_MODULE_6__layout_service__["a" /* LayoutService */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["FormGroupDirective"],
                __WEBPACK_IMPORTED_MODULE_52__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */],
                __WEBPACK_IMPORTED_MODULE_53__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */],
                __WEBPACK_IMPORTED_MODULE_56__discounts_sidebar_discounts_sidebar_service__["a" /* discountSideBarService */],
                __WEBPACK_IMPORTED_MODULE_58__coupon_sidebar_coupons_sidebar_service__["a" /* couponSideBarService */],
                __WEBPACK_IMPORTED_MODULE_60__agent_sidebar_agent_sidebar_service__["a" /* agentSideBarService */],
                __WEBPACK_IMPORTED_MODULE_65__subscriptionplan_sidebar_subscriptionplan_sidebar_service__["a" /* subscriptionplanSideBarService */],
                __WEBPACK_IMPORTED_MODULE_67__createshop_sidebar_createshop_sidebar_service__["a" /* createshopSideBarService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shopslist_shopslist_component__ = __webpack_require__("../../../../../src/app/shopslist/shopslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dshoplist_dshoplist_component__ = __webpack_require__("../../../../../src/app/dshoplist/dshoplist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dpendingapprovals_dpendingapprovals_component__ = __webpack_require__("../../../../../src/app/dpendingapprovals/dpendingapprovals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__verifiedshops_verifiedshops_component__ = __webpack_require__("../../../../../src/app/verifiedshops/verifiedshops.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__createagent_createagent_component__ = __webpack_require__("../../../../../src/app/createagent/createagent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agentslist_agentslist_component__ = __webpack_require__("../../../../../src/app/agentslist/agentslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__createcategory_createcategory_component__ = __webpack_require__("../../../../../src/app/createcategory/createcategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__viewcategories_viewcategories_component__ = __webpack_require__("../../../../../src/app/viewcategories/viewcategories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shop_shop_component__ = __webpack_require__("../../../../../src/app/shop/shop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agents_agents_component__ = __webpack_require__("../../../../../src/app/agents/agents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__subcategories_subcategories_component__ = __webpack_require__("../../../../../src/app/subcategories/subcategories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__discounts_discounts_component__ = __webpack_require__("../../../../../src/app/discounts/discounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__coupons_coupons_component__ = __webpack_require__("../../../../../src/app/coupons/coupons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__subscriptions_subscriptions_component__ = __webpack_require__("../../../../../src/app/subscriptions/subscriptions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__subscription_plan_subscription_plan_component__ = __webpack_require__("../../../../../src/app/subscription-plan/subscription-plan.component.ts");
/**
 * Created by saikiran on 28/12/17.
 */





















var AppRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["b" /* PageLoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'createshop', component: __WEBPACK_IMPORTED_MODULE_3__createshop_createshop_component__["a" /* CreateshopComponent */] },
    { path: 'shopslist', component: __WEBPACK_IMPORTED_MODULE_4__shopslist_shopslist_component__["d" /* ShopslistComponent */] },
    { path: 'dshopslist', component: __WEBPACK_IMPORTED_MODULE_5__dshoplist_dshoplist_component__["a" /* DshoplistComponent */] },
    { path: 'dpendingapprovals', component: __WEBPACK_IMPORTED_MODULE_6__dpendingapprovals_dpendingapprovals_component__["c" /* DpendingapprovalsComponent */] },
    { path: 'verifiedshops', component: __WEBPACK_IMPORTED_MODULE_7__verifiedshops_verifiedshops_component__["c" /* VerifiedshopsComponent */] },
    { path: 'createagent', component: __WEBPACK_IMPORTED_MODULE_8__createagent_createagent_component__["a" /* CreateagentComponent */] },
    { path: 'agentslist', component: __WEBPACK_IMPORTED_MODULE_9__agentslist_agentslist_component__["a" /* AgentslistComponent */] },
    { path: 'createcategory', component: __WEBPACK_IMPORTED_MODULE_10__createcategory_createcategory_component__["a" /* CreatecategoryComponent */] },
    { path: 'viewcategory', component: __WEBPACK_IMPORTED_MODULE_11__viewcategories_viewcategories_component__["d" /* ViewcategoriesComponent */] },
    { path: 'shops', component: __WEBPACK_IMPORTED_MODULE_12__shop_shop_component__["b" /* ShopComponent */] },
    { path: 'agents', component: __WEBPACK_IMPORTED_MODULE_13__agents_agents_component__["a" /* AgentsComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_14__categories_categories_component__["a" /* CategoriesComponent */] },
    { path: 'subcategories', component: __WEBPACK_IMPORTED_MODULE_15__subcategories_subcategories_component__["d" /* SubcategoriesComponent */] },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_16__users_users_component__["c" /* UsersComponent */] },
    { path: 'discounts', component: __WEBPACK_IMPORTED_MODULE_17__discounts_discounts_component__["a" /* DiscountsComponent */] },
    { path: 'coupons', component: __WEBPACK_IMPORTED_MODULE_18__coupons_coupons_component__["a" /* CouponsComponent */] },
    { path: 'subscriptions', component: __WEBPACK_IMPORTED_MODULE_19__subscriptions_subscriptions_component__["b" /* SubscriptionsComponent */] },
    { path: 'subscriptionplan', component: __WEBPACK_IMPORTED_MODULE_20__subscription_plan_subscription_plan_component__["b" /* SubscriptionPlanComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__login_login_component__["b" /* PageLoginComponent */] }
];
var AppRoutingModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forRoot(AppRoutes, { useHash: true });


/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\" style=\"padding-top: 0px\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-7\">\n            <h2 class=\"article-title\">All Categories ({{categoriesList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n          <div class=\"col-md-3\" style=\"margin: auto\">\n              <mat-chip-list class=\"pull-right\">\n              <mat-chip class=\"pull-right addcategorybtn\"  selected=\"true\" (click)=\"categoryopen()\"><i class=\"material-icons\">add_circle_outline</i>&nbsp;&nbsp; New Category</mat-chip>\n              </mat-chip-list>\n          </div>\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Categories\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <!-- <div class=\"row categoryheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-10\">Category Name</div>\n                  \n                  <div class=\"col-md-1\"></div>\n                </div> -->\n                  \n                    <!-- grid start -->\n                    <mat-grid-list cols=\"12\" rowHeight=\"80px\">\n                      <mat-grid-tile\n                          *ngFor=\"let category of categoriesList | filter : searchText | paginate: { itemsPerPage: 20, currentPage: p }\"\n                          [colspan]=\"breakpoint\"\n                          [rowspan]=\"1\"\n                          (window:resize)=\"onResize($event)\"\n                          style=\"background-color: #fff\">\n                          <!-- <div class=\"row\"> -->\n                            <div class=\"col-md-2\">\n                              <button title=\"Active\" *ngIf=\"category?.active == true \" mat-mini-fab color=\"accent\"> </button>\n                              <button title=\"De-Active\" *ngIf=\"category?.active == false \" mat-mini-fab color=\"warn\"> </button>\n                            </div>\n                            <div class=\"col-md-8\">{{category.text}} </div>\n                            <div class=\"col-md-2\">\n                              <!-- three dot menu -->\n                              <div class=\"dropdown\">\n                                  <!-- three dots -->\n                                  <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(category?.id)\">\n                                      <li></li>\n                                      <li></li>\n                                      <li></li>\n                                  </ul>\n                                  <!-- menu -->\n                                  <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{category?.id}}\">\n                                      <a class=\"pointer\" (click)=\"editData( category?.id )\" >Edit</a>\n                                      <a class=\"pointer\" *ngIf=\"category.active == true \" (click)=\"blockData( category?.id )\" >De-activate</a>\n                                      <a class=\"pointer\" *ngIf=\"category.status == false \" (click)=\"unblockData( category?.id )\" >Activate</a>\n                                  </div>\n                              </div>\n                                \n                            </div>\n                            \n                          <!-- </div> -->\n                      </mat-grid-tile>\n                    </mat-grid-list>\n                    <br>\n                    <!-- grid end -->\n                    <div *ngIf=\"categoriesList && (categoriesList | filter: searchText).length === 0\">\n                        <h4 style=\"text-align: center\" >No Data Found</h4>\n                      </div>\n                    <div class=\"pull-right\" *ngIf=\"categoriesList && (categoriesList | filter: searchText).length > 0\">\n                      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"Active\" >\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                \n                  <!-- grid start -->\n                  <mat-grid-list cols=\"12\" rowHeight=\"100px\">\n                    <mat-grid-tile\n                        *ngFor=\"let category of activeCategoriesList | filter : searchText | paginate: { itemsPerPage: 20, currentPage: p }\"\n                        [colspan]=\"breakpoint\"\n                        [rowspan]=\"1\"\n                        (window:resize)=\"onResize($event)\"\n                        style=\"background-color: #fff\">\n                        <!-- <div class=\"row\"> -->\n                          <div class=\"col-md-2\">\n                            <button title=\"Active\" *ngIf=\"category?.active == true \" mat-mini-fab color=\"accent\"> </button>\n                            <button title=\"De-Active\" *ngIf=\"category?.active == false \" mat-mini-fab color=\"warn\"> </button>\n                          </div>\n                          <div class=\"col-md-8\">{{category.text}} </div>\n                          <div class=\"col-md-2\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(category?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{category?.id}}\">\n                                    <a class=\"pointer\" (click)=\"editData( category?.id )\" >Edit</a>\n                                    <a class=\"pointer\" *ngIf=\"category.active == true \" (click)=\"blockData( category?.id )\" >De-activate</a>\n                                    <a class=\"pointer\" *ngIf=\"category.false == false \" (click)=\"unblockData( category?.id )\" >Activate</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        <!-- </div> -->\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                  <!-- grid end -->\n                  <div *ngIf=\"activeCategoriesList && (activeCategoriesList | filter: searchText).length === 0\">\n                      <h4 style=\"text-align: center\" >No Data Found</h4>\n                    </div>\n                    <div class=\"pull-right\" *ngIf=\"activeCategoriesList && (activeCategoriesList | filter: searchText).length > 0\">\n                      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"In Active\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                \n                  <!-- grid start -->\n                  <mat-grid-list cols=\"12\" rowHeight=\"100px\">\n                    <mat-grid-tile\n                        *ngFor=\"let category of deactiveCategoriesList | filter : searchText | paginate: { itemsPerPage: 20, currentPage: p }\"\n                        [colspan]=\"breakpoint\"\n                        [rowspan]=\"1\"\n                        (window:resize)=\"onResize($event)\"\n                        style=\"background-color: #fff\">\n                        <!-- <div class=\"row\"> -->\n                          <div class=\"col-md-2\">\n                            <button title=\"Active\" *ngIf=\"category.active == true \" mat-mini-fab color=\"accent\"> </button>\n                            <button title=\"De-Active\" *ngIf=\"category.active == false \" mat-mini-fab color=\"warn\"> </button>\n                          </div>\n                          <div class=\"col-md-8\">{{category.text}} </div>\n                          <div class=\"col-md-2\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(category?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{category?.id}}\">\n                                    <a class=\"pointer\" (click)=\"editData( category?.id )\" >Edit</a>\n                                    <a class=\"pointer\" *ngIf=\"category.active == true \" (click)=\"blockData( category?.id )\" >De-activate</a>\n                                    <a class=\"pointer\" *ngIf=\"category.active == false \" (click)=\"unblockData( category?.id )\" >Activate</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        <!-- </div> -->\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                  <!-- grid end -->\n                  <div *ngIf=\"deactiveCategoriesList && (deactiveCategoriesList | filter: searchText).length === 0\">\n                      <h4 style=\"text-align: center\" >No Data Found</h4>\n                    </div>\n                    <div class=\"pull-right\" *ngIf=\"deactiveCategoriesList && (deactiveCategoriesList | filter: searchText).length > 0\">\n                      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>\n\n  <mat-sidenav #categoryleft position=\"end\" style=\"width: 25%\">\n    <section class=\"container-fluid with-maxwidth chapter\">\n\n      <article class=\"article\">\n          <h2 class=\"article-title\">Create Category</h2>\n          <div class=\"box box-default\">\n              <div class=\"box-body\">\n\n\n                  <form class=\"\" [formGroup]=\"createCategoryForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onCreateCategorySubmit(createCategoryForm,formDirective)\">\n\n                      <div class=\"row\">\n\n                          <mat-form-field class=\"example-full-width col-md-12\">\n                              <input matInput placeholder=\"Category name\" required formControlName=\"category\">\n                              <mat-error>\n                                  Category should not less than 3\n                              </mat-error>\n                          </mat-form-field>\n\n                      </div>\n                      <span [innerHTML]=\"cstatus\"></span>\n                      <div class=\"divider divider-md\"></div>\n                      \n                      <div class=\"row\">\n                          <div class=\"col-md-12 text-center\">\n                              <button class=\"col-md-1\" type=\"button\"  (click)=\"categoryleft.close()\" mat-raised-button color=\"warn\" >Cancel</button>\n                              <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createCategoryForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                          </div>\n                      </div>\n\n                  </form>\n\n\n\n              </div>\n          </div>\n      </article>\n  </section>\n  </mat-sidenav>\n\n</mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categorieslist li {\n  margin-bottom: 10px;\n  word-wrap: break-word; }\n\n.categoryheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.addcategorybtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  right: 0;\n  top: 0; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n\nul, ol {\n  line-height: 8px !important; }\n\n.mat-grid-tile {\n  overflow: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EditcategoriesDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CategorieslistDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategorieslistActDactDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__discounts_sidebar_discounts_sidebar_service__ = __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};











var CategoriesComponent = (function () {
    function CategoriesComponent(userService, spinner, router, dialog, formDirective, userservice, categorysidebar, subcategorysidebar, discountsidebar) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.formDirective = formDirective;
        this.userservice = userservice;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.discountsidebar = discountsidebar;
        this.url = '/api/';
        // For Create Category
        this.createCategoryForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator]))
        });
        this.spinner.show();
        this.categoriesdata();
    }
    CategoriesComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 3;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    CategoriesComponent.prototype.categoryopen = function () {
        this.categorysidebar.categorySidebarOpen();
    };
    // Function For Create category
    CategoriesComponent.prototype.onCreateCategorySubmit = function (createCategoryForm, formDirective) {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        var categorydata = {
            created_by: userdata.data[0].id,
            name: this.createCategoryForm.get('category').value,
            status: 'Y'
        };
        this.userService.createCategory(this.url, categorydata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Category Added Successfully !';
                formDirective.resetForm();
                createCategoryForm.reset();
            }
            else {
                _this.cstatus = '<span>Category Already exists !</span>';
            }
        });
    };
    CategoriesComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 12 : 3;
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        this.breakpoint = (window.innerWidth <= 400) ? 12 : 3;
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        this.discountsidebar.discountSidebarClose();
        __WEBPACK_IMPORTED_MODULE_7_jquery__('.mat-tab-label-container').css('background', '#fff');
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            //console.log(event);
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    CategoriesComponent.prototype.onTabClick = function (event) {
        var index = event.index;
    };
    CategoriesComponent.prototype.categoriesdata = function () {
        var _this = this;
        this.spinner.show();
        this.userService.readCategories('/api/').subscribe(function (data) {
            _this.categoriesList = data.filter(function (category) { return category.parentid == null; });
            console.log(_this.categoriesList);
            _this.activeCategoriesList = _this.categoriesList.filter(function (category) { return category.active == true; });
            _this.deactiveCategoriesList = _this.categoriesList.filter(function (category) { return category.active == false; });
            _this.spinner.hide();
        });
    };
    CategoriesComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        //$(".myDropdown"+id).toggle();
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".myDropdown" + id).addClass('show');
    };
    CategoriesComponent.prototype.editData = function (id) {
        this.spinner.show();
        var selectedCategory = this.categoriesList.find(function (category) { return category.id == id; });
        console.log(selectedCategory);
        this.categoryList = selectedCategory;
        this.spinner.hide();
        this.editcategoryDialog();
    };
    // Function to edit category data
    CategoriesComponent.prototype.editcategoryDialog = function () {
        var dialogRef = this.dialog.open(EditcategoriesDialogComponent, {
            width: '450px',
            data: this.categoryList
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    // Function to block category
    CategoriesComponent.prototype.blockData = function (id) {
        var _this = this;
        var reqdata = {
            id: id,
            active: false
        };
        this.userService.activeDeactiveCategorybyid(this.url, reqdata).subscribe(function (data) {
            _this.message = 'Category Blocked !';
            _this.modifycategoryDialog();
        });
    };
    // Function to unblock category
    CategoriesComponent.prototype.unblockData = function (id) {
        var _this = this;
        var reqdata = {
            id: id,
            active: true
        };
        this.userService.activeDeactiveCategorybyid(this.url, reqdata).subscribe(function (data) {
            _this.message = 'Category Activated!';
            _this.modifycategoryDialog();
        });
    };
    CategoriesComponent.prototype.modifycategoryDialog = function () {
        var dialogRef = this.dialog.open(CategorieslistActDactDialogComponent, {
            width: '450px',
            data: this.message
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoryleft'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSidenav */])
    ], CategoriesComponent.prototype, "togglecategory", void 0);
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"], __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_9__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */],
            __WEBPACK_IMPORTED_MODULE_10__discounts_sidebar_discounts_sidebar_service__["a" /* discountSideBarService */]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());

var EditcategoriesDialogComponent = (function () {
    function EditcategoriesDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit shop
        this.editCategoryForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            categoryid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
    }
    EditcategoriesDialogComponent.prototype.ngOnInit = function () {
    };
    // Function For Edit category
    EditcategoriesDialogComponent.prototype.onEditCategorySubmit = function () {
        var _this = this;
        var reqdata = {
            id: this.editCategoryForm.get('categoryid').value,
            text: this.editCategoryForm.get('category').value
        };
        this.userService.editCategorybyid(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Category Updated Successfully !';
            _this.updateDialog();
        }, function (err) {
            _this.cstatus = err.error.message;
            _this.updateDialog();
        });
    };
    EditcategoriesDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditcategoriesDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditcategoriesDialogComponent.prototype, "myform", void 0);
    EditcategoriesDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/categories/editcategory-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/editcategory-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], EditcategoriesDialogComponent);
    return EditcategoriesDialogComponent;
}());

var CategorieslistDialogComponent = (function () {
    function CategorieslistDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CategorieslistDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CategorieslistDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/categories/categorylist-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categorylist-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], CategorieslistDialogComponent);
    return CategorieslistDialogComponent;
}());

var CategorieslistActDactDialogComponent = (function () {
    function CategorieslistActDactDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CategorieslistActDactDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        location.reload();
    };
    CategorieslistActDactDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/categories/categorylistActDact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/categories/categorylistActDact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], CategorieslistActDactDialogComponent);
    return CategorieslistActDactDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/categorylist-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Category Details</h4>\n<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" readonly value=\"{{data.name}}\">\n    </mat-form-field>\n\n\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/categories/categorylist-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categorylistActDact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<form class=\"example-form\">\n    <h4 style=\"text-align: center\">{{data}}</h4>\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/categories/categorylistActDact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/editcategory-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Category Details</h4>\n<form class=\"\" [formGroup]=\"editCategoryForm\"  (ngSubmit)='onEditCategorySubmit()'>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"categoryid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Name\" [(ngModel)]=\"data.text\" value=\"{{data.text}}\" required formControlName=\"category\">\n        <mat-error>\n            Category should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n\n    <div mat-dialog-actions>\n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editCategoryForm.valid\" mat-raised-button color=\"warn\">Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/categories/editcategory-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-sidebar/category-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" with-maxwidth Section chapter pull-right\">\n\n  <article class=\"article\">\n      <h2 class=\"article-title articleTitle\">Create Category</h2>\n      <div class=\"box box-default\">\n          <div class=\"box-body\">\n\n\n              <form class=\"\" [formGroup]=\"createCategoryForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onCreateCategorySubmit(createCategoryForm,formDirective)\">\n\n                  <div class=\"row\">\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Category name\" required formControlName=\"category\">\n                          <mat-error>\n                              Category should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                  </div>\n                  <span [innerHTML]=\"cstatus\"></span>\n                  <div class=\"divider divider-md\"></div>\n                  \n                  <div class=\"row\">\n                      <div class=\"col-md-12 text-center\">\n                          <button class=\"col-md-1\" type=\"button\"  (click)=\"categoryclose()\" mat-raised-button color=\"warn\" >Cancel</button>\n                          <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createCategoryForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                      </div>\n                  </div>\n\n              </form>\n\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/category-sidebar/category-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-sizing: border-box;\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  background: rgba(19, 18, 18, 0.8);\n  margin-top: 50px;\n  z-index: 9; }\n\n:host.is-open {\n  display: block; }\n\n.Section {\n  background: #fff;\n  height: 100%; }\n\n.articleTitle {\n  text-align: center;\n  margin-top: 15px !important; }\n\n.with-maxwidth {\n  width: 400px; }\n\n@media screen and (max-width: 600px) {\n  .with-maxwidth {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-sidebar/category-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorySidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategorySidebarComponent = (function () {
    function CategorySidebarComponent(categorysidebar, userService) {
        this.categorysidebar = categorysidebar;
        this.userService = userService;
        this.isOpen = false;
        this.url = '/api/';
        // For Create Category
        this.createCategoryForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator]))
        });
    }
    CategorySidebarComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 3;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    CategorySidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorysidebar.change.subscribe(function (isOpen) {
            _this.isOpen = isOpen;
        });
    };
    // close create category menu
    CategorySidebarComponent.prototype.categoryclose = function () {
        this.categorysidebar.categorySidebarClose();
    };
    // Function For Create category
    CategorySidebarComponent.prototype.onCreateCategorySubmit = function (createCategoryForm, formDirective) {
        var _this = this;
        // const categorydata = {
        //     created_by: userdata.data[0].id,
        //     name: this.createCategoryForm.get('category').value,
        //     status: 'Y'
        // };
        var resdata = {
            text: this.createCategoryForm.get('category').value
        };
        this.userService.createCategory(this.url, resdata)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.cstatus = 'Category Added Successfully !';
                formDirective.resetForm();
                createCategoryForm.reset();
            }
            else {
                _this.cstatus = '<span>Category Already exists !</span>';
            }
        }, function (err) {
            console.log(err);
            _this.cstatus = '<span>' + err.error.message + '</span>';
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-open'),
        __metadata("design:type", Object)
    ], CategorySidebarComponent.prototype, "isOpen", void 0);
    CategorySidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-category-sidebar',
            template: __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]])
    ], CategorySidebarComponent);
    return CategorySidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/category-sidebar/category-sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return categorySideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var categorySideBarService = (function () {
    function categorySideBarService() {
        this.isOpen = false;
        this.change = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    categorySideBarService.prototype.toggle = function () {
        this.isOpen = !this.isOpen;
        this.change.emit(this.isOpen);
    };
    categorySideBarService.prototype.categorySidebarClose = function () {
        this.change.emit(false);
    };
    categorySideBarService.prototype.categorySidebarOpen = function () {
        this.change.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], categorySideBarService.prototype, "change", void 0);
    categorySideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], categorySideBarService);
    return categorySideBarService;
}());



/***/ }),

/***/ "../../../../../src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APPCONFIG; });
function makeAppConfig() {
    var date = new Date();
    var year = date.getFullYear();
    var AppConfig = {
        brand: 'SNBM',
        user: 'Macbook',
        year: year,
        layoutBoxed: false,
        navCollapsed: true,
        navBehind: false,
        fixedHeader: true,
        sidebarWidth: 'middle',
        theme: 'light',
        colorOption: '21',
        AutoCloseMobileNav: true,
        productLink: 'https://themeforest.net/item/material-design-angular-2-admin-web-app-with-bootstrap-4/19421267'
    };
    return AppConfig;
}
var APPCONFIG = makeAppConfig();


/***/ }),

/***/ "../../../../../src/app/coupon-sidebar/coupon-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" with-maxwidth CouponSection chapter pull-right\">\n\n  <article class=\"article\">\n      <h2 class=\"article-title articleTitle\">Create Coupon</h2>\n      <div class=\"box box-default\">\n          <div class=\"box-body\">\n\n\n              <form class=\"\" [formGroup]=\"createCouponForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onCreateCouponSubmit(createCouponForm,formDirective)\">\n\n                  <div class=\"row\">\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Description\" required formControlName=\"description\">\n                          <mat-error>\n                              Description should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Conditions\" required formControlName=\"conditions\">\n                        <mat-error>\n                            Conditions Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input type=\"date\" matInput placeholder=\"Valid From\" required formControlName=\"validFrom\">\n                        <mat-error>\n                                Valid From Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input type=\"date\" matInput placeholder=\"Valid To\" required formControlName=\"validTo\">\n                        <mat-error>\n                            Valid To Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Code\" required formControlName=\"code\">\n                        <mat-error>\n                            Code should not less than 3\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Off Percentage\" required formControlName=\"offPercentage\">\n                        <mat-error>\n                            Percentage Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <mat-select placeholder=\"Select Shop\" required formControlName=\"shopid\">\n                          <mat-option *ngFor=\"let list of shopsList\" [value]=\"list.value\">\n                            {{ list.viewValue }}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n\n                  </div>\n                  <span [innerHTML]=\"cstatus\"></span>\n                  <div class=\"divider divider-md\"></div>\n                  \n                  <div class=\"row\">\n                      <div class=\"col-md-12 text-center\">\n                          <button class=\"col-md-1\" type=\"button\"  (click)=\"couponclose()\" mat-raised-button color=\"warn\" >Cancel</button>\n                          <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createCouponForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                      </div>\n                  </div>\n\n              </form>\n\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/coupon-sidebar/coupon-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-sizing: border-box;\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  background: rgba(19, 18, 18, 0.8);\n  margin-top: 50px;\n  z-index: 9; }\n\n:host.is-couponOpen {\n  display: block; }\n\n.CouponSection {\n  background: #fff;\n  height: 100%; }\n\n.articleTitle {\n  text-align: center;\n  margin-top: 15px !important; }\n\n.with-maxwidth {\n  width: 400px;\n  overflow-y: auto; }\n\n@media screen and (max-width: 600px) {\n  .with-maxwidth {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coupon-sidebar/coupon-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coupons_sidebar_service__ = __webpack_require__("../../../../../src/app/coupon-sidebar/coupons-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CouponSidebarComponent = (function () {
    function CouponSidebarComponent(userService, cd, couponSidebar) {
        this.userService = userService;
        this.cd = cd;
        this.couponSidebar = couponSidebar;
        this.isCouponOpen = false;
        this.url = '/api/';
        // For Create Category
        this.createCouponForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            conditions: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            validFrom: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            validTo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            offPercentage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            shopid: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]))
        });
    }
    CouponSidebarComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 1;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    CouponSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.couponSidebar.couponchange.subscribe(function (CouponOpen) {
            _this.isCouponOpen = CouponOpen;
            _this.shopsdata();
        });
    };
    // Function to read shops
    CouponSidebarComponent.prototype.shopsdata = function () {
        var _this = this;
        this.userService.readshops('/api/', '').subscribe(function (data) {
            _this.activeShopsList = data.filter(function (shops) { return shops.active == true; });
            console.log(_this.activeShopsList);
            _this.shopsList = [];
            for (var i = 0; i < _this.activeShopsList.length; i++) {
                _this.shopsList.push({ value: _this.activeShopsList[i].id, viewValue: _this.activeShopsList[i].name });
            }
            _this.cd.detectChanges();
        });
    };
    CouponSidebarComponent.prototype.couponclose = function () {
        this.couponSidebar.couponSidebarClose();
    };
    // Function For Create coupon
    CouponSidebarComponent.prototype.onCreateCouponSubmit = function (createCouponForm, formDirective) {
        var _this = this;
        var userdetails = {
            email: localStorage.getItem('useremail'),
            password: localStorage.getItem('password')
        };
        var actShop = this.activeShopsList.find(function (shop) { return shop.id == _this.createCouponForm.get('shopid').value; });
        var branchId = actShop.branchId;
        var reqdata = {
            description: this.createCouponForm.get('description').value,
            conditions: this.createCouponForm.get('conditions').value,
            validFrom: this.createCouponForm.get('validFrom').value,
            validTo: this.createCouponForm.get('validTo').value,
            code: this.createCouponForm.get('code').value,
            offPercentage: parseInt(this.createCouponForm.get('offPercentage').value),
            shopid: parseInt(this.createCouponForm.get('shopid').value),
            shopBranchId: branchId
        };
        console.log(reqdata);
        // this.userService.createDiscount(userdetails, reqdata)
        //     .subscribe(
        //         (data) => {
        //           console.log(data);
        //             if (data) {
        //                 this.cstatus = 'Coupon Added Successfully !';
        //                 formDirective.resetForm();
        //                 createCouponForm.reset();
        //             }
        //         },
        //         (err) => {
        //           console.log(err);
        //           this.cstatus = '<span style="color:red">'+err.error.message+'</span>';
        //         }
        //     );
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-couponOpen'),
        __metadata("design:type", Object)
    ], CouponSidebarComponent.prototype, "isCouponOpen", void 0);
    CouponSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coupon-sidebar',
            template: __webpack_require__("../../../../../src/app/coupon-sidebar/coupon-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coupon-sidebar/coupon-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__coupons_sidebar_service__["a" /* couponSideBarService */]])
    ], CouponSidebarComponent);
    return CouponSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/coupon-sidebar/coupons-sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return couponSideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var couponSideBarService = (function () {
    function couponSideBarService() {
        this.isCouponOpen = false;
        this.couponchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    couponSideBarService.prototype.toggle = function () {
        this.isCouponOpen = !this.isCouponOpen;
        this.couponchange.emit(this.isCouponOpen);
    };
    couponSideBarService.prototype.couponSidebarClose = function () {
        this.couponchange.emit(false);
    };
    couponSideBarService.prototype.couponSidebarOpen = function () {
        this.couponchange.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], couponSideBarService.prototype, "couponchange", void 0);
    couponSideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], couponSideBarService);
    return couponSideBarService;
}());



/***/ }),

/***/ "../../../../../src/app/coupons/couponActDact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<form class=\"example-form\">\n    <h4 style=\"text-align: center\">{{data}}</h4>\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/coupons/couponActDact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coupons/coupons.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-10\">\n            <h2 class=\"article-title\">All Coupons ({{couponsList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Coupons\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row couponheading\">\n                  <div class=\"col-md-1\"></div>\n                  \n                  <div class=\"col-md-1\">Shop Name</div>\n                  <div class=\"col-md-2\">Description</div>\n                  <div class=\"col-md-1\">conditions</div>\n                  <div class=\"col-md-1\">Code</div>\n                  <div class=\"col-md-1\">Off Percentage</div>\n                  <div class=\"col-md-2\">Valid From</div>\n                  <div class=\"col-md-2\">Valid To</div>\n                </div>\n                  <ul class=\"list-group couponslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let coupon of couponsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-1\">\n                            <button title=\"Active\" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">redeem</mat-icon> </button>\n                            <button title=\"De-Active\" *ngIf=\"coupon.status == 'N' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">redeem</mat-icon> </button>\n                            <button title=\"Rejected\" *ngIf=\"coupon.status == 'R' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">redeem</mat-icon> </button>\n                          </div>\n                          <div class=\"col-md-1\">{{coupon?.shopName}} </div>\n                          <div class=\"col-md-2\">{{coupon?.description}} </div>\n                          <div class=\"col-md-1\">{{coupon?.conditions}} </div>\n                          <div class=\"col-md-1\">{{coupon?.code}}</div>\n                          <div class=\"col-md-1\">{{coupon?.offPercentage}}</div>\n                          <div class=\"col-md-2\">{{coupon.validFrom | date: 'yyyy-MM-dd'}}</div>\n                          <div class=\"col-md-2\">{{coupon.validTo | date: 'yyyy-MM-dd'}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(coupon?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{coupon?.id}}\">\n                                    <a class=\"pointer\" (click)=\"updateCoupon( coupon?.id )\" >Update</a>\n                                    <a class=\"pointer\" (click)=\"deleteCoupon( coupon?.id )\" >Delete</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    </ul>\n                    <div *ngIf=\"couponsList == undefined || (couponsList && (couponsList | filter: searchText).length === 0)\">\n                      <h4 style=\"text-align: center\" >No Data Found</h4>\n                    </div>\n                    <div class=\"pull-right\"  *ngIf=\"couponsList && (couponsList | filter: searchText).length > 0\">\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                    </div>\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "../../../../../src/app/coupons/coupons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".couponslist li {\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  word-wrap: break-word; }\n\n.couponheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.addcouponbtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .couponheading {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/coupons/coupons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CouponsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditcouponsDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CouponslistActDactDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var CouponsComponent = (function () {
    function CouponsComponent(userService, spinner, router, dialog) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.url = '/api/';
        this.spinner.show();
        this.couponsdata();
    }
    CouponsComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_7_jquery__('.mat-tab-label-container').css('background', '#fff');
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    CouponsComponent.prototype.couponsdata = function () {
        var _this = this;
        this.spinner.show();
        this.userService.readcoupons('/api/').subscribe(function (data) {
            _this.couponsList = data;
            console.log(data);
            _this.spinner.hide();
        });
    };
    CouponsComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".myDropdown" + id).addClass('show');
    };
    CouponsComponent.prototype.updateCoupon = function (id) {
        this.spinner.show();
        var selectedCoupon = this.couponsList.find(function (coupon) { return coupon.id == id; });
        this.couponList = selectedCoupon;
        this.spinner.hide();
        this.editcouponDialog();
    };
    CouponsComponent.prototype.deleteCoupon = function (id) {
        var _this = this;
        this.spinner.show();
        var reqData = {
            id: id
        };
        this.userService.deleteCouponById(reqData).subscribe(function (data) {
            _this.message = "Coupon Deleted Successfully!";
            console.log(data);
            _this.modifycouponDialog();
            _this.spinner.hide();
        }, function (err) {
            console.log(err);
            _this.message = err.error.message;
            _this.modifycouponDialog();
            _this.spinner.hide();
        });
    };
    CouponsComponent.prototype.modifycouponDialog = function () {
        var dialogRef = this.dialog.open(CouponslistActDactDialogComponent, {
            width: '450px',
            data: this.message
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    // Function to edit category data
    CouponsComponent.prototype.editcouponDialog = function () {
        var dialogRef = this.dialog.open(EditcouponsDialogComponent, {
            width: '450px',
            data: this.couponList
        });
        console.log(this.couponList);
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    CouponsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coupons',
            template: __webpack_require__("../../../../../src/app/coupons/coupons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/coupons/coupons.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], CouponsComponent);
    return CouponsComponent;
}());

var EditcouponsDialogComponent = (function () {
    function EditcouponsDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit coupons
        this.editCouponForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            couponid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            conditions: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            validFrom: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            validTo: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            code: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            offPercentage: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('')
        });
    }
    EditcouponsDialogComponent.prototype.onEditCouponSubmit = function () {
        var _this = this;
        var validFrom = new Date(this.editCouponForm.get('validFrom').value);
        var fromDate = validFrom.getFullYear() + '-' + (validFrom.getMonth() + 1) + '-' + validFrom.getDate();
        var validTo = new Date(this.editCouponForm.get('validTo').value);
        var toDate = validTo.getFullYear() + '-' + (validTo.getMonth() + 1) + '-' + validTo.getDate();
        var reqdata = {
            id: this.editCouponForm.get('couponid').value,
            description: this.editCouponForm.get('description').value,
            conditions: this.editCouponForm.get('conditions').value,
            validFrom: fromDate,
            validTo: toDate,
            code: this.editCouponForm.get('code').value,
            offPercentage: parseInt(this.editCouponForm.get('offPercentage').value)
        };
        console.log(reqdata);
        this.userService.editCouponbyid(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Coupon Updated Successfully !';
            _this.updateDialog();
        }, function (err) {
            console.log(err);
            _this.cstatus = err.error.message;
            _this.updateDialog();
        });
    };
    EditcouponsDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditcouponsDialogComponent.prototype.ngOnInit = function () {
    };
    EditcouponsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditcouponsDialogComponent.prototype, "myform", void 0);
    EditcouponsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/coupons/editcoupon-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/coupons/editcoupon-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], EditcouponsDialogComponent);
    return EditcouponsDialogComponent;
}());

var CouponslistActDactDialogComponent = (function () {
    function CouponslistActDactDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CouponslistActDactDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        location.reload();
    };
    CouponslistActDactDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/coupons/couponActDact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/coupons/couponActDact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], CouponslistActDactDialogComponent);
    return CouponslistActDactDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/coupons/editcoupon-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Coupon Details</h4>\n<form class=\"\" [formGroup]=\"editCouponForm\"  (ngSubmit)='onEditCouponSubmit()'>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"couponid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Description\" [(ngModel)]=\"data.description\" value=\"{{data.description}}\" required formControlName=\"description\">\n        <mat-error>\n            Description should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Conditions\" [(ngModel)]=\"data.conditions\" value=\"{{data.conditions}}\" required formControlName=\"conditions\">\n        <mat-error>\n            Conditions should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput [matDatepicker]=\"frompicker\" [(ngModel)]=\"data.validFrom\" placeholder=\"Valid From\" formControlName=\"validFrom\">\n        <mat-datepicker-toggle matSuffix [for]=\"frompicker\"></mat-datepicker-toggle>\n        <mat-datepicker #frompicker></mat-datepicker>\n      </mat-form-field>\n\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"topicker\" [(ngModel)]=\"data.validTo\" placeholder=\"Valid To\" formControlName=\"validTo\">\n        <mat-datepicker-toggle matSuffix [for]=\"topicker\"></mat-datepicker-toggle>\n        <mat-datepicker #topicker></mat-datepicker>\n      </mat-form-field>\n    \n    <!-- <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"date\" placeholder=\"Valid From\" [(ngModel)]=\"data.validFrom\" value=\"{{data.validFrom}}\" required formControlName=\"validFrom\">\n        <mat-error>\n            Valid from required\n        </mat-error>\n    </mat-form-field> -->\n\n    <!-- <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"date\" placeholder=\"Valid To\" [(ngModel)]=\"data.validTo\" value=\"{{data.validTo}}\" required formControlName=\"validTo\">\n        <mat-error>\n            Valid to required\n        </mat-error>\n    </mat-form-field> -->\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Code\" [(ngModel)]=\"data.code\" value=\"{{data.code}}\" required formControlName=\"code\">\n        <mat-error>\n            Code should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Off Percentage\" [(ngModel)]=\"data.offPercentage\" value=\"{{data.offPercentage}}\" required formControlName=\"offPercentage\">\n        <mat-error>\n            Off Percentage should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    \n\n\n    <div mat-dialog-actions>\n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editCouponForm.valid\" mat-raised-button color=\"warn\">Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/coupons/editcoupon-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/createagent/createagent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">Create Agent</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n                    <form class=\"\" [formGroup]=\"createAgentForm\"  (ngSubmit)=\"onCreateAgentSubmit()\">\n\n                        <div class=\"row\">\n\n                            <mat-form-field class=\"example-full-width col-md-6\">\n                                <input matInput placeholder=\"First name\" required formControlName=\"firstName\">\n                                <mat-error>\n                                    First name should not less than 3\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-6\">\n                                <input matInput placeholder=\"Last name\" required formControlName=\"lastName\">\n                                <mat-error>\n                                    Last name should not less than 3\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-6\">\n                                <input matInput placeholder=\"Email\" required formControlName=\"email\">\n                                <mat-error>\n                                    Email is not valid !\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <input matInput placeholder=\"Phone Number\" required formControlName=\"phoneNumber\">\n                                <mat-error *ngIf=\"createAgentForm.hasError('minlength','phoneNumber')\">\n                                    Phone Number should be 10 digits\n                                </mat-error>\n                                <mat-error *ngIf=\"createAgentForm.hasError('maxlength','phoneNumber')\">\n                                    Phone Number should be 10 digits\n                                </mat-error>\n                                <mat-error *ngIf=\"createAgentForm.hasError('pattern','phoneNumber')\">\n                                    Only numbers allowed !\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <input matInput placeholder=\"search for location\" autocorrect=\"off\" autocapitalize=\"off\" [(ngModel)]=\"searchElementRef.nativeElement.value\" spellcheck=\"off\" #search formControlName=\"address\" required>\n                                <mat-icon matSuffix style=\"font-size: 20px;cursor: pointer;\" (click)=\"getLocation()\" >near_me</mat-icon>\n                                <mat-error>\n                                    Address required!\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"divider divider-md\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <button class=\"col-md-1\" type=\"button\"  (click)=\"goback();\" mat-raised-button color=\"warn\" >Cancel</button>\n                                <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createAgentForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                            </div>\n                        </div>\n\n                        <div class=\"container\">\n                            <div class=\"form-group\">\n\n                            </div>\n                            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n                                <agm-marker  (dragEnd)=\"markerEnd($event)\"  [markerDraggable]=\"true\" [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                            </agm-map>\n                        </div>\n\n                    </form>\n\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/createagent/createagent.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px; }\n\n@media screen and (max-width: 600px) {\n  .container-fluid {\n    padding-left: 2px;\n    padding-right: 2px; }\n  .article-title {\n    text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/createagent/createagent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateagentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var valnumber = /^[0-9][0-9]*$/;
var eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var CreateagentComponent = (function () {
    function CreateagentComponent(userService, dialog, mapsAPILoader, ngZone, location, categorysidebar, subcategorysidebar) {
        this.userService = userService;
        this.dialog = dialog;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.location = location;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.url = '/api/';
        // For Create shop
        this.createAgentForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            firstName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            lastName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            email: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(eml)),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(valnumber)])),
            address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(1)])),
            primaryArea: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            secondaryArea: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            tertiaryArea: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            dailyTargets: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(1)]))
        });
    }
    CreateagentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        // set google maps defaults
        this.zoom = 10;
        this.latitude = 17.4252392;
        this.longitude = 78.4252013;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]();
        // set current position
        this.setCurrentPosition();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            _this.geoCoder = new google.maps.Geocoder;
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    CreateagentComponent.prototype.goback = function () {
        this.location.back();
    };
    // Function For Create Agent
    CreateagentComponent.prototype.onCreateAgentSubmit = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        var agentdata = {
            firstName: this.createAgentForm.get('firstName').value,
            lastName: this.createAgentForm.get('lastName').value,
            email: this.createAgentForm.get('email').value,
            phone: this.createAgentForm.get('phoneNumber').value,
            address: this.searchElementRef.nativeElement.value,
        };
        this.userService.createAgent(this.url, agentdata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Agent Created Successfully !';
            }
            else {
                _this.cstatus = 'Agent Already Registerd !';
            }
            _this.openDialog();
        });
    };
    CreateagentComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.cstatus = result;
        });
    };
    CreateagentComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    CreateagentComponent.prototype.markerEnd = function (markerDetails) {
        var _this = this;
        if (markerDetails) {
            this.latitude = markerDetails.coords.lat;
            this.longitude = markerDetails.coords.lng;
            this.geoCoder.geocode({ 'location': { lat: this.latitude, lng: this.longitude } }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        // this.searchElementRef.nativeElement.value = results[0].formatted_address);
                        // console.log(this.searchElementRef.nativeElement.value);
                        // infowindow.setContent(results[0].formatted_address);
                    }
                    else {
                        window.alert('No results found');
                    }
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    };
    CreateagentComponent.prototype.getLocation = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.geoCoder.geocode({ 'location': { lat: _this.latitude, lng: _this.longitude } }, function (results, status) {
                    if (status === 'OK') {
                        if (results[0]) {
                            _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        }
                        else {
                            window.alert('No results found');
                        }
                    }
                    else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
            });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CreateagentComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], CreateagentComponent.prototype, "myform", void 0);
    CreateagentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createagent',
            template: __webpack_require__("../../../../../src/app/createagent/createagent.component.html"),
            styles: [__webpack_require__("../../../../../src/app/createagent/createagent.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_7__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */],
            __WEBPACK_IMPORTED_MODULE_8__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */]])
    ], CreateagentComponent);
    return CreateagentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/createcategory/createcategory.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">Create Category</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n                    <form class=\"\" [formGroup]=\"createCategoryForm\"  (ngSubmit)=\"onCreateCategorySubmit()\">\n\n                        <div class=\"row\">\n\n                            <mat-form-field class=\"example-full-width col-md-6\">\n                                <input matInput placeholder=\"Category name\" required formControlName=\"category\">\n                                <mat-error>\n                                    Category should not less than 3\n                                </mat-error>\n                            </mat-form-field>\n\n                        </div>\n\n                        <div class=\"divider divider-md\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                                <button class=\"col-md-1\" type=\"button\"  (click)=\"goback();\" mat-raised-button color=\"warn\" >Cancel</button>\n                                <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createCategoryForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                            </div>\n                        </div>\n\n                    </form>\n\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/createcategory/createcategory.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width: 600px) {\n  .container-fluid {\n    padding-left: 2px;\n    padding-right: 2px; }\n  .article-title {\n    text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/createcategory/createcategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CreatecategoryComponent = (function () {
    function CreatecategoryComponent(userService, dialog, location, categorysidebar, subcategorysidebar) {
        this.userService = userService;
        this.dialog = dialog;
        this.location = location;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.url = '/api/';
        // For Create Category
        this.createCategoryForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            category: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)]))
        });
    }
    CreatecategoryComponent.prototype.ngOnInit = function () {
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
    };
    CreatecategoryComponent.prototype.goback = function () {
        this.location.back();
    };
    // Function For Create category
    CreatecategoryComponent.prototype.onCreateCategorySubmit = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        console.log(userdata);
        var categorydata = {
            created_by: userdata.data[0].id,
            name: this.createCategoryForm.get('category').value,
            status: 'Y'
        };
        this.userService.createCategory(this.url, categorydata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Category Added Successfully !';
            }
            else {
                _this.cstatus = 'Category Already exists !';
            }
            _this.openDialog();
        });
    };
    CreatecategoryComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.cstatus = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], CreatecategoryComponent.prototype, "myform", void 0);
    CreatecategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createcategory',
            template: __webpack_require__("../../../../../src/app/createcategory/createcategory.component.html"),
            styles: [__webpack_require__("../../../../../src/app/createcategory/createcategory.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_6__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_7__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */]])
    ], CreatecategoryComponent);
    return CreatecategoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/createshop-sidebar/createshop-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" with-maxwidth CreateShopSection chapter pull-right\">\n\n  <article class=\"article\">\n      <h2 class=\"article-title articleTitle\">Create Shop</h2>\n      <div class=\"box box-default\">\n          <div class=\"box-body\">\n\n              <form class=\"\" [formGroup]=\"createShopForm\" (ngSubmit)=\"onCreateShopSubmit()\">\n\n                  <div class=\"row\">\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Shop name\" required formControlName=\"shopName\">\n                          <mat-error *ngIf=\"createShopForm.hasError('minlength','shopName')\">\n                              Shop name should not less than 3\n                          </mat-error>\n                          <mat-error *ngIf=\"createShopForm.hasError('whitespace','shopName')\">\n                              Please enter valid data!\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <mat-select placeholder=\"Select Category\" required formControlName=\"category\">\n                            <mat-option *ngFor=\"let list of categoriesList\" [value]=\"list.value\">\n                              {{ list.viewValue }}\n                            </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n                      <!-- <mat-form-field class=\"example-full-width col-md-6\">\n                          <input matInput placeholder=\"Category\" required formControlName=\"category\">\n                          <mat-error>\n                              Category should not less than 3\n                          </mat-error>\n                      </mat-form-field> -->\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <textarea matInput placeholder=\"Description\" required formControlName=\"description\">\n                          </textarea>\n                          <mat-error>\n                              Description should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Phone Number\" required formControlName=\"phoneNumber\">\n                          <mat-error *ngIf=\"createShopForm.hasError('minlength','phoneNumber')\">\n                              Phone Number should not less than 10\n                          </mat-error>\n                          <mat-error *ngIf=\"createShopForm.hasError('maxlength','phoneNumber')\">\n                              Phone Number should not less than 10\n                          </mat-error>\n                          <mat-error *ngIf=\"createShopForm.hasError('pattern','phoneNumber')\">\n                              Only numbers allowed !\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input type=\"time\" matInput placeholder=\"Time From\" required formControlName=\"timeFrom\">\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input type=\"time\" matInput placeholder=\"Time To\" required formControlName=\"timeTo\">\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Address\" required formControlName=\"address\">\n                          <mat-error>\n                              Address should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <!-- <input matInput placeholder=\"Location\" required formControlName=\"location\"> -->\n                          <input matInput placeholder=\"Search For Location\" autocorrect=\"off\" autocapitalize=\"off\" [(ngModel)]=\"searchElementRef.nativeElement.value\" spellcheck=\"off\" #search formControlName=\"location\" required>\n                          <mat-icon matSuffix style=\"font-size: 20px;cursor: pointer;\" (click)=\"getLocation()\" >near_me</mat-icon>\n                          <mat-error>\n                              Location Required\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Shop Owner\" required formControlName=\"shopOwner\">\n                          <mat-error>\n                              Shop Owner should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                      <!-- <div class=\"example-full-width col-md-12\">\n                          <label>Upload image : </label>\n                          <input type=\"file\" id=\"filePicker\" required formControlName=\"imageUrl\" (change)=\"handleFileSelect($event)\">\n                      </div> -->\n\n                      <div class=\"example-full-width col-md-12\">\n                          <label>Upload image : </label>\n                          <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n                      </div>\n\n                  </div>\n\n                  <span [innerHTML]=\"cstatus\"></span>\n                  <div class=\"divider divider-md\"></div>\n                  <div class=\"row\">\n                      <div class=\"col-md-12 text-center\">\n                      <button class=\" col-md-1\" type=\"button\"  (click)=\"createshopclose();\" mat-raised-button color=\"warn\" >Cancel</button>\n                      <button class=\"col-md-1 submit\" type=\"submit\" [disabled]=\"!createShopForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                  </div>\n                  </div>\n                  <div class=\"container\">\n                      <div class=\"form-group\">\n                        \n                      </div>\n                      <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n                        <agm-marker  (dragEnd)=\"markerEnd($event)\"  [markerDraggable]=\"true\" [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                      </agm-map>\n                    </div>\n\n              </form>\n\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/createshop-sidebar/createshop-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-sizing: border-box;\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  background: rgba(19, 18, 18, 0.8);\n  margin-top: 50px;\n  z-index: 9; }\n\n:host.is-createshopOpen {\n  display: block; }\n\n.CreateShopSection {\n  background: #fff;\n  height: 100%; }\n\n.articleTitle {\n  text-align: center;\n  margin-top: 15px !important; }\n\n.with-maxwidth {\n  width: 400px;\n  overflow-y: auto; }\n\n@media screen and (max-width: 600px) {\n  .with-maxwidth {\n    width: 100%; } }\n\nagm-map {\n  height: 300px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/createshop-sidebar/createshop-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateshopSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_sidebar_createshop_sidebar_service__ = __webpack_require__("../../../../../src/app/createshop-sidebar/createshop-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var valnumber = /^[0-9][0-9]*$/;
var CreateshopSidebarComponent = (function () {
    function CreateshopSidebarComponent(userService, dialog, mapsAPILoader, location, ngZone, cd, createshopsidebar) {
        this.userService = userService;
        this.dialog = dialog;
        this.mapsAPILoader = mapsAPILoader;
        this.location = location;
        this.ngZone = ngZone;
        this.cd = cd;
        this.createshopsidebar = createshopsidebar;
        this.isCreateshopOpen = false;
        this.fileToUpload = null;
        this.base64textString = '';
        this.url = '/api/';
        // For Create shop
        this.createShopForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            shopName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            category: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(valnumber)])),
            timeFrom: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            timeTo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            imageUrl: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.base64textString, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([])),
            location: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            shopOwner: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator]))
        });
    }
    CreateshopSidebarComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 3;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    CreateshopSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createshopsidebar.createshopchange.subscribe(function (CreateshopOpen) {
            _this.isCreateshopOpen = CreateshopOpen;
        });
        //this.createshopsidebar.createshopSidebarClose();
        // set google maps defaults
        this.zoom = 10;
        this.latitude = 17.4252392;
        this.longitude = 78.4252013;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]();
        // set current position
        this.setCurrentPosition();
        this.getCategorieslist();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            _this.geoCoder = new google.maps.Geocoder;
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    CreateshopSidebarComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    CreateshopSidebarComponent.prototype.createshopclose = function () {
        this.createshopsidebar.createshopSidebarClose();
    };
    // Function For Create shop
    CreateshopSidebarComponent.prototype.onCreateShopSubmit = function () {
        var _this = this;
        var userdetails = {
            email: localStorage.getItem('useremail'),
            password: localStorage.getItem('password')
        };
        var shopdata = {
            name: this.createShopForm.get('shopName').value,
            category: this.createShopForm.get('category').value,
            description: this.createShopForm.get('description').value,
            phoneNumber: this.createShopForm.get('phoneNumber').value,
            timeFrom: this.createShopForm.get('timeFrom').value,
            timeTo: this.createShopForm.get('timeTo').value,
            address: this.createShopForm.get('address').value,
            image: this.fileToUpload,
            latitude: this.latitude,
            longitude: this.longitude,
            location: this.searchElementRef.nativeElement.value,
        };
        this.userService.createShop(userdetails, shopdata)
            .subscribe(function (data) {
            _this.cstatus = 'Shop Created Successfully !';
        }, function (err) {
            _this.cstatus = '<span style="color:red">' + err.error.message + '</span>';
        });
    };
    CreateshopSidebarComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    CreateshopSidebarComponent.prototype._handleReaderLoaded = function (readerEvt) {
        console.log(readerEvt);
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        console.log(this.base64textString);
    };
    CreateshopSidebarComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    CreateshopSidebarComponent.prototype.markerEnd = function (markerDetails) {
        var _this = this;
        if (markerDetails) {
            // console.info(markerDetails.coords);
            this.latitude = markerDetails.coords.lat;
            this.longitude = markerDetails.coords.lng;
            this.geoCoder.geocode({ 'location': { lat: this.latitude, lng: this.longitude } }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        _this.cd.detectChanges();
                    }
                    else {
                        window.alert('No results found');
                    }
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    };
    CreateshopSidebarComponent.prototype.getLocation = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.geoCoder.geocode({ 'location': { lat: _this.latitude, lng: _this.longitude } }, function (results, status) {
                    console.log(results);
                    console.log(status);
                    if (status === 'OK') {
                        if (results[0]) {
                            _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        }
                        else {
                            window.alert('No results found');
                        }
                    }
                    else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
            });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    CreateshopSidebarComponent.prototype.getCategorieslist = function () {
        var _this = this;
        this.userService.readCategories('/api/').subscribe(function (data) {
            console.log(data);
            _this.categoriesList = [];
            for (var i = 0; i < data.length; i++) {
                _this.categoriesList.push({ value: data[i].text, viewValue: data[i].text });
            }
            _this.cd.detectChanges();
            //console.log(this.categoriesList);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-createshopOpen'),
        __metadata("design:type", Object)
    ], CreateshopSidebarComponent.prototype, "isCreateshopOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CreateshopSidebarComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], CreateshopSidebarComponent.prototype, "myform", void 0);
    CreateshopSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createshop-sidebar',
            template: __webpack_require__("../../../../../src/app/createshop-sidebar/createshop-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/createshop-sidebar/createshop-sidebar.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_6__createshop_sidebar_createshop_sidebar_service__["a" /* createshopSideBarService */]])
    ], CreateshopSidebarComponent);
    return CreateshopSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/createshop-sidebar/createshop-sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createshopSideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var createshopSideBarService = (function () {
    function createshopSideBarService() {
        this.isCreateshopOpen = false;
        this.createshopchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    createshopSideBarService.prototype.toggle = function () {
        this.isCreateshopOpen = !this.isCreateshopOpen;
        this.createshopchange.emit(this.isCreateshopOpen);
    };
    createshopSideBarService.prototype.createshopSidebarClose = function () {
        this.createshopchange.emit(false);
    };
    createshopSideBarService.prototype.createshopSidebarOpen = function () {
        this.createshopchange.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], createshopSideBarService.prototype, "createshopchange", void 0);
    createshopSideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], createshopSideBarService);
    return createshopSideBarService;
}());



/***/ }),

/***/ "../../../../../src/app/createshop/createshop.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">Create Shop</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n                    <form class=\"\" [formGroup]=\"createShopForm\" (ngSubmit)=\"onCreateShopSubmit()\">\n\n                        <div class=\"row\">\n\n                            <mat-form-field class=\"example-full-width col-md-6\">\n                                <input matInput placeholder=\"Shop name\" required formControlName=\"shopName\">\n                                <mat-error *ngIf=\"createShopForm.hasError('minlength','shopName')\">\n                                    Shop name should not less than 3\n                                </mat-error>\n                                <mat-error *ngIf=\"createShopForm.hasError('whitespace','shopName')\">\n                                    Please enter valid data!\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-6\">\n                                <mat-select placeholder=\"Select Category\" required formControlName=\"category\">\n                                  <mat-option *ngFor=\"let list of categoriesList\" [value]=\"list.value\">\n                                    {{ list.viewValue }}\n                                  </mat-option>\n                                </mat-select>\n                              </mat-form-field>\n                            <!-- <mat-form-field class=\"example-full-width col-md-6\">\n                                <input matInput placeholder=\"Category\" required formControlName=\"category\">\n                                <mat-error>\n                                    Category should not less than 3\n                                </mat-error>\n                            </mat-form-field> -->\n\n                            <mat-form-field class=\"example-full-width col-md-12\">\n                                <textarea matInput placeholder=\"Description\" required formControlName=\"description\">\n                                </textarea>\n                                <mat-error>\n                                    Description should not less than 3\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <input matInput placeholder=\"Phone Number\" required formControlName=\"phoneNumber\">\n                                <mat-error *ngIf=\"createShopForm.hasError('minlength','phoneNumber')\">\n                                    Phone Number should not less than 10\n                                </mat-error>\n                                <mat-error *ngIf=\"createShopForm.hasError('maxlength','phoneNumber')\">\n                                    Phone Number should not less than 10\n                                </mat-error>\n                                <mat-error *ngIf=\"createShopForm.hasError('pattern','phoneNumber')\">\n                                    Only numbers allowed !\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <input type=\"time\" matInput placeholder=\"Time From\" required formControlName=\"timeFrom\">\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <input type=\"time\" matInput placeholder=\"Time To\" required formControlName=\"timeTo\">\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <input matInput placeholder=\"Address\" required formControlName=\"address\">\n                                <mat-error>\n                                    Address should not less than 3\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <!-- <input matInput placeholder=\"Location\" required formControlName=\"location\"> -->\n                                <input matInput placeholder=\"Search For Location\" autocorrect=\"off\" autocapitalize=\"off\" [(ngModel)]=\"searchElementRef.nativeElement.value\" spellcheck=\"off\" #search formControlName=\"location\" required>\n                                <mat-icon matSuffix style=\"font-size: 20px;cursor: pointer;\" (click)=\"getLocation()\" >near_me</mat-icon>\n                                <mat-error>\n                                    Location Required\n                                </mat-error>\n                            </mat-form-field>\n\n                            <mat-form-field class=\"example-full-width col-md-4\">\n                                <input matInput placeholder=\"Shop Owner\" required formControlName=\"shopOwner\">\n                                <mat-error>\n                                    Shop Owner should not less than 3\n                                </mat-error>\n                            </mat-form-field>\n\n                            <!-- <div class=\"example-full-width col-md-12\">\n                                <label>Upload image : </label>\n                                <input type=\"file\" id=\"filePicker\" required formControlName=\"imageUrl\" (change)=\"handleFileSelect($event)\">\n                            </div> -->\n\n                            <div class=\"example-full-width col-md-12\">\n                                <label>Upload image : </label>\n                                <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"divider divider-md\"></div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12 text-center\">\n                            <button class=\" col-md-1\" type=\"button\"  (click)=\"goback();\" mat-raised-button color=\"warn\" >Cancel</button>\n                            <button class=\"col-md-1 submit\" type=\"submit\" [disabled]=\"!createShopForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                        </div>\n                        </div>\n                        <div class=\"container\">\n                            <div class=\"form-group\">\n                              \n                            </div>\n                            <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" [scrollwheel]=\"false\" [zoom]=\"zoom\">\n                              <agm-marker  (dragEnd)=\"markerEnd($event)\"  [markerDraggable]=\"true\" [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\n                            </agm-map>\n                          </div>\n\n                    </form>\n\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/createshop/createshop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 300px; }\n\n@media screen and (max-width: 600px) {\n  .container-fluid {\n    padding-left: 2px;\n    padding-right: 2px; }\n  .article-title {\n    text-align: center; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/createshop/createshop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateshopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var valnumber = /^[0-9][0-9]*$/;
var CreateshopComponent = (function () {
    function CreateshopComponent(userService, dialog, mapsAPILoader, location, ngZone, cd, categorysidebar, subcategorysidebar) {
        this.userService = userService;
        this.dialog = dialog;
        this.mapsAPILoader = mapsAPILoader;
        this.location = location;
        this.ngZone = ngZone;
        this.cd = cd;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.fileToUpload = null;
        this.base64textString = '';
        this.url = '/api/';
        // For Create shop
        this.createShopForm = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            shopName: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            category: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            description: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].maxLength(10),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].pattern(valnumber)])),
            timeFrom: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            timeTo: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3)])),
            address: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator])),
            imageUrl: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](this.base64textString, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([])),
            location: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            shopOwner: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].minLength(3),
                this.noWhitespaceValidator]))
        });
    }
    CreateshopComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 3;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    CreateshopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        // set google maps defaults
        this.zoom = 10;
        this.latitude = 17.4252392;
        this.longitude = 78.4252013;
        // create search FormControl
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"]();
        // set current position
        this.setCurrentPosition();
        this.getCategorieslist();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ["address"]
            });
            _this.geoCoder = new google.maps.Geocoder;
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.latitude = place.geometry.location.lat();
                    _this.longitude = place.geometry.location.lng();
                    _this.zoom = 12;
                });
            });
        });
    };
    CreateshopComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    CreateshopComponent.prototype.goback = function () {
        this.location.back();
    };
    // Function For Create shop
    CreateshopComponent.prototype.onCreateShopSubmit = function () {
        var _this = this;
        var userdetails = {
            email: localStorage.getItem('useremail'),
            password: localStorage.getItem('password')
        };
        var shopdata = {
            name: this.createShopForm.get('shopName').value,
            category: this.createShopForm.get('category').value,
            description: this.createShopForm.get('description').value,
            phoneNumber: this.createShopForm.get('phoneNumber').value,
            timeFrom: this.createShopForm.get('timeFrom').value,
            timeTo: this.createShopForm.get('timeTo').value,
            address: this.createShopForm.get('address').value,
            image: this.fileToUpload,
            latitude: this.latitude,
            longitude: this.longitude,
            location: this.searchElementRef.nativeElement.value,
        };
        this.userService.createShop(userdetails, shopdata)
            .subscribe(function (data) {
            console.log(data);
            _this.cstatus = 'Shop Created Successfully !';
            _this.openDialog();
        }, function (err) {
            _this.cstatus = err.eror.message;
            _this.openDialog();
        });
    };
    CreateshopComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewComponent, {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            _this.cstatus = result;
        });
    };
    CreateshopComponent.prototype.handleFileSelect = function (evt) {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    CreateshopComponent.prototype._handleReaderLoaded = function (readerEvt) {
        console.log(readerEvt);
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        console.log(this.base64textString);
    };
    CreateshopComponent.prototype.setCurrentPosition = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.zoom = 12;
            });
        }
    };
    CreateshopComponent.prototype.markerEnd = function (markerDetails) {
        var _this = this;
        if (markerDetails) {
            // console.info(markerDetails.coords);
            this.latitude = markerDetails.coords.lat;
            this.longitude = markerDetails.coords.lng;
            this.geoCoder.geocode({ 'location': { lat: this.latitude, lng: this.longitude } }, function (results, status) {
                if (status === 'OK') {
                    if (results[0]) {
                        _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        _this.cd.detectChanges();
                    }
                    else {
                        window.alert('No results found');
                    }
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
        }
    };
    CreateshopComponent.prototype.getLocation = function () {
        var _this = this;
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.latitude = position.coords.latitude;
                _this.longitude = position.coords.longitude;
                _this.geoCoder.geocode({ 'location': { lat: _this.latitude, lng: _this.longitude } }, function (results, status) {
                    console.log(results);
                    console.log(status);
                    if (status === 'OK') {
                        if (results[0]) {
                            _this.searchElementRef.nativeElement.value = results[0].formatted_address;
                        }
                        else {
                            window.alert('No results found');
                        }
                    }
                    else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
            });
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    CreateshopComponent.prototype.getCategorieslist = function () {
        var _this = this;
        this.userService.readCategories('/api/').subscribe(function (data) {
            console.log(data);
            _this.categoriesList = [];
            for (var i = 0; i < data.length; i++) {
                _this.categoriesList.push({ value: data[i].text, viewValue: data[i].text });
            }
            _this.cd.detectChanges();
            //console.log(this.categoriesList);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("search"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], CreateshopComponent.prototype, "searchElementRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], CreateshopComponent.prototype, "myform", void 0);
    CreateshopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createshop',
            template: __webpack_require__("../../../../../src/app/createshop/createshop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/createshop/createshop.component.scss")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* MapsAPILoader */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_6__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_7__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */]])
    ], CreateshopComponent);
    return CreateshopComponent;
}());

var DialogOverviewComponent = (function () {
    function DialogOverviewComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        location.reload();
    };
    DialogOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/createshop/dialog-component.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object])
    ], DialogOverviewComponent);
    return DialogOverviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/createshop/dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>{{data.status}}</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"container-fluid no-breadcrumbs page-dashboard\">\n\n  <div class=\"row\" *ngIf=\"dashboardmetrics != null\">\n     <!-- Stats -->\n    <div class=\"col-xl-3 col-sm-6\">\n      <div class=\"box box-default\" [routerLink]=\"['/users']\">\n          <div class=\"box-top\">\n              <i class=\"material-icons color-info\">supervisor_account</i>\n          </div>\n        <div class=\"box-info\">\n          <span>Users</span>\n        </div>\n        <div class=\"box-bottom\">\n          <span>{{dashboardmetrics?.users}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 col-sm-6\">\n      <div class=\"box box-default\" [routerLink]=\"['/subscriptions']\">\n        <div class=\"box-top\">\n          <i class=\"material-icons color-info\">subscriptions</i>\n        </div>\n        <div class=\"box-info\">\n          <span>Subscriptions</span>\n        </div>\n        <div class=\"box-bottom\">\n          <span>{{dashboardmetrics?.subscriptions}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 col-sm-6\">\n      <div class=\"box box-default\" [routerLink]=\"['/discounts']\">\n        <div class=\"box-top\">\n          <i class=\"material-icons color-warning\">attach_money</i>\n        </div>\n        <div class=\"box-info\">\n          <span>Discounts</span>\n        </div>\n        <div class=\"box-bottom\">\n          <span>{{dashboardmetrics?.discounts}}</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-3 col-sm-6\">\n      <div class=\"box box-default\">\n        <div class=\"box-top\">\n          <i class=\"material-icons color-danger\">android</i>\n        </div>\n        <div class=\"box-info\">\n          <span>App Downloads</span>\n        </div>\n        <div class=\"box-bottom\">\n          <span>25 <span class=\"size-h4\">k</span></span>\n        </div>\n      </div>\n    </div>\n    <!-- end stats -->      \n  </div>\n\n  <div class=\"row\" style=\"margin-bottom: 10px\">\n      <div class=\"col-md-6\">\n          <div class=\"input-group\" *ngIf=\"shopmetricschart\">\n              <mat-form-field>\n                  <mat-select placeholder=\"Date\" [(value)]=\"shopselected\" (change)=\"selectedDate(shopselected,'getshopMetrics')\">\n                      <mat-option *ngFor=\"let date of optiondates\" [value]=\"date.value\">\n                          {{ date.viewValue }}\n                      </mat-option>\n                  </mat-select>\n              </mat-form-field>\n              <!--<input type=\"text\" style=\"width: 190px\" name=\"daterangeInput\" daterangepicker [options]=\"options\" (selected)=\"shopselectedDate($event, daterange)\" />-->\n              <!--<label class=\"input-group-addon btn\">\n                  <span class=\"fa fa-calendar\"></span>\n              </label>-->\n          </div>\n        <div [chart]=\"shopmetricschart\"></div>\n      </div>\n\n      <div class=\"col-md-6\">\n          <div class=\"input-group\" *ngIf=\"usermetricschart\">\n              <mat-form-field>\n                  <mat-select placeholder=\"Date\" [(value)]=\"agentselected\" (change)=\"selectedDate(agentselected,'getagentMetrics')\">\n                      <mat-option *ngFor=\"let date of optiondates\" [value]=\"date.value\">\n                          {{ date.viewValue }}\n                      </mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </div>\n        <div [chart]=\"usermetricschart\"></div>\n      </div>\n  </div>\n\n <div class=\"row\">\n     <div class=\"col-md-6\">\n     <div class=\"input-group\" *ngIf=\"discountmetricschart\">\n         <mat-form-field>\n             <mat-select placeholder=\"Date\" [(value)]=\"discountselected\" (change)=\"selectedDate(discountselected,'getdiscountMetrics')\">\n                 <mat-option *ngFor=\"let date of optiondates\" [value]=\"date.value\">\n                     {{ date.viewValue }}\n                 </mat-option>\n             </mat-select>\n         </mat-form-field>\n         </div>\n         <div [chart]=\"discountmetricschart\"></div>\n     </div>\n\n      <div class=\"col-md-6\">\n          <div class=\"input-group\" *ngIf=\"couponmetricschart\">\n              <mat-form-field>\n                  <mat-select placeholder=\"Date\" [(value)]=\"couponselected\" (change)=\"selectedDate(couponselected,'getcouponMetrics')\">\n                      <mat-option *ngFor=\"let date of optiondates\" [value]=\"date.value\">\n                          {{ date.viewValue }}\n                      </mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </div>\n          <div [chart]=\"couponmetricschart\"></div>\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper_navigationService__ = __webpack_require__("../../../../../src/app/helper/navigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__ = __webpack_require__("../../../../angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { CHARTCONFIG } from '../charts/charts.config';




var DashboardComponent = (function () {
    function DashboardComponent(navService, userService) {
        this.navService = navService;
        this.userService = userService;
        this.daterange = {};
        this.options = {
            locale: { format: 'YYYY-MM-DD' },
            alwaysShowCalendars: false,
            startDate: __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(7, 'day'),
        };
        this.optiondates = [
            { value: 'lastweek', viewValue: 'Last Week' },
            { value: 'lastmonth', viewValue: 'Last Month' },
            { value: 'lastquarter', viewValue: 'Last Quarter' }
        ];
        this.navService.setStaus(true);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getdashboardmetrics();
        this.getshopMetricsbydate(null, null);
        this.getagentMetricsbydate(null, null);
        this.getcouponMetricsbydate(null, null);
        this.getdiscountMetricsbydate(null, null);
    };
    DashboardComponent.prototype.selectedDate = function (selected, funct) {
        if (selected === 'lastweek') {
            // from = moment().subtract(7, 'day');
            var from = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(14, 'day').format('YYYY-MM-DD');
            var to = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(7, 'day').format('YYYY-MM-DD');
        }
        else if (selected === 'lastmonth') {
            var from = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
            var to = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
        }
        else if (selected === 'lastquarter') {
            var from = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(4, 'months').startOf('month').format('YYYY-MM-DD');
            var to = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(0, 'day').format('YYYY-MM-DD');
        }
        else {
            var from = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(7, 'day').format('YYYY-MM-DD');
            var to = __WEBPACK_IMPORTED_MODULE_4_moment__().subtract(0, 'day').format('YYYY-MM-DD');
        }
        if (funct === 'getshopMetrics') {
            this.getshopMetricsbydate(from, to);
        }
        else if (funct === 'getagentMetrics') {
            this.getagentMetricsbydate(from, to);
        }
        else if (funct === 'getdiscountMetrics') {
            this.getdiscountMetricsbydate(from, to);
        }
        else if (funct === 'getcouponMetrics') {
            this.getcouponMetricsbydate(from, to);
        }
    };
    DashboardComponent.prototype.getshopMetricsbydate = function (from, to) {
        var _this = this;
        var shopkeypair = [];
        var shopvalues = [];
        if (from == null && to == null) {
            var days = 7; // Days you want to subtract
            var date = new Date();
            var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
            var day = last.getDate();
            var d = '';
            var zero = 0;
            if (day < 10) {
                d = "" + zero + day;
            }
            else {
                d = "" + day;
            }
            var month = last.getMonth() + 1;
            var m = '';
            if (month < 10) {
                m = "" + zero + month;
            }
            else {
                m = "" + month;
            }
            var year = last.getFullYear();
            this.from_date = year + "-" + m + "-" + d;
            var td = '';
            if (date.getDate() < 10) {
                td = "" + zero + date.getDate();
            }
            else {
                td = "" + date.getDate();
            }
            var tm = '';
            if ((date.getMonth() + 1) < 10) {
                tm = "" + zero + (date.getMonth() + 1);
            }
            else {
                tm = "" + (date.getMonth() + 1);
            }
            this.to_date = date.getFullYear() + "-" + tm + "-" + td;
        }
        else {
            this.from_date = from;
            this.to_date = to;
        }
        var data = {
            from_date: this.from_date,
            to_date: this.to_date
        };
        this.userService.readshopmetricsbydate('/api/', data).subscribe(function (data) {
            _this.shopsMetrics = data;
            for (var i = 0; i < _this.shopsMetrics.length; i++) {
                shopkeypair.push(_this.shopsMetrics[i].date);
                shopvalues.push(parseInt(_this.shopsMetrics[i].count));
            }
            var shopmetricschart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Shops Metrics'
                },
                xAxis: {
                    categories: shopkeypair
                },
                yAxis: {
                    title: {
                        text: 'No of shops'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Date',
                        data: shopvalues
                    }]
            });
            // chart.addPoint(4);
            _this.shopmetricschart = shopmetricschart;
            // chart.addPoint(5);
            // setTimeout(() => {
            //   chart.addPoint(6);
            // }, 2000);
        });
    };
    DashboardComponent.prototype.getdashboardmetrics = function () {
        var _this = this;
        this.userService.readdashboardmetrics('/api/').subscribe(function (dashboarddata) {
            _this.dashboardmetrics = dashboarddata;
        });
    };
    DashboardComponent.prototype.getdiscountMetricsbydate = function (from, to) {
        var _this = this;
        var discountkeypair = [];
        var discountvalues = [];
        if (from == null && to == null) {
            var days = 7; // Days you want to subtract
            var date = new Date();
            var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
            var day = last.getDate();
            var d = '';
            var zero = 0;
            if (day < 10) {
                d = "" + zero + day;
            }
            else {
                d = "" + day;
            }
            var month = last.getMonth() + 1;
            var m = '';
            if (month < 10) {
                m = "" + zero + month;
            }
            else {
                m = "" + month;
            }
            var year = last.getFullYear();
            this.from_date = year + "-" + m + "-" + d;
            var td = '';
            if (date.getDate() < 10) {
                td = "" + zero + date.getDate();
            }
            else {
                td = "" + date.getDate();
            }
            var tm = '';
            if ((date.getMonth() + 1) < 10) {
                tm = "" + zero + (date.getMonth() + 1);
            }
            else {
                tm = "" + (date.getMonth() + 1);
            }
            this.to_date = date.getFullYear() + "-" + tm + "-" + td;
        }
        else {
            this.from_date = from;
            this.to_date = to;
        }
        var data = {
            from_date: this.from_date,
            to_date: this.to_date
        };
        this.userService.readdiscountmetricsbydate('/api/', data).subscribe(function (data) {
            _this.discountMetrics = data;
            for (var i = 0; i < _this.discountMetrics.length; i++) {
                discountkeypair.push(_this.discountMetrics[i].date);
                discountvalues.push(parseInt(_this.discountMetrics[i].count));
            }
            var discountmetricschart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Discount Metrics'
                },
                xAxis: {
                    categories: discountkeypair
                },
                yAxis: {
                    title: {
                        text: 'No of Discounts'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Date',
                        data: discountvalues
                    }]
            });
            // chart.addPoint(4);
            _this.discountmetricschart = discountmetricschart;
        });
    };
    DashboardComponent.prototype.getagentMetricsbydate = function (from, to) {
        var _this = this;
        var agentkeypair = [];
        var agentvalues = [];
        if (from == null && to == null) {
            var days = 7; // Days you want to subtract
            var date = new Date();
            var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
            var day = last.getDate();
            var d = '';
            var zero = 0;
            if (day < 10) {
                d = "" + zero + day;
            }
            else {
                d = "" + day;
            }
            var month = last.getMonth() + 1;
            var m = '';
            if (month < 10) {
                m = "" + zero + month;
            }
            else {
                m = "" + month;
            }
            var year = last.getFullYear();
            this.from_date = year + "-" + m + "-" + d;
            var td = '';
            if (date.getDate() < 10) {
                td = "" + zero + date.getDate();
            }
            else {
                td = "" + date.getDate();
            }
            var tm = '';
            if ((date.getMonth() + 1) < 10) {
                tm = "" + zero + (date.getMonth() + 1);
            }
            else {
                tm = "" + (date.getMonth() + 1);
            }
            this.to_date = date.getFullYear() + "-" + tm + "-" + td;
        }
        else {
            this.from_date = from;
            this.to_date = to;
        }
        var data = {
            from_date: this.from_date,
            to_date: this.to_date
        };
        this.userService.readusermetricsbydate('/api/', data).subscribe(function (data) {
            _this.agentMetrics = data;
            for (var i = 0; i < _this.agentMetrics.length; i++) {
                agentkeypair.push(_this.agentMetrics[i].date);
                agentvalues.push(parseInt(_this.agentMetrics[i].count));
            }
            var usermetricschart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'User Metrics'
                },
                xAxis: {
                    categories: agentkeypair
                },
                yAxis: {
                    title: {
                        text: 'No of Users'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Date',
                        data: agentvalues
                    }]
            });
            // chart.addPoint(4);
            _this.usermetricschart = usermetricschart;
        });
    };
    DashboardComponent.prototype.getcouponMetricsbydate = function (from, to) {
        var _this = this;
        var couponkeypair = [];
        var couponvalues = [];
        if (from == null && to == null) {
            var days = 7; // Days you want to subtract
            var date = new Date();
            var last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
            var day = last.getDate();
            var d = '';
            var zero = 0;
            if (day < 10) {
                d = "" + zero + day;
            }
            else {
                d = "" + day;
            }
            var month = last.getMonth() + 1;
            var m = '';
            if (month < 10) {
                m = "" + zero + month;
            }
            else {
                m = "" + month;
            }
            var year = last.getFullYear();
            this.from_date = year + "-" + m + "-" + d;
            var td = '';
            if (date.getDate() < 10) {
                td = "" + zero + date.getDate();
            }
            else {
                td = "" + date.getDate();
            }
            var tm = '';
            if ((date.getMonth() + 1) < 10) {
                tm = "" + zero + (date.getMonth() + 1);
            }
            else {
                tm = "" + (date.getMonth() + 1);
            }
            this.to_date = date.getFullYear() + "-" + tm + "-" + td;
        }
        else {
            this.from_date = from;
            this.to_date = to;
        }
        var data = {
            from_date: this.from_date,
            to_date: this.to_date
        };
        this.userService.readcouponmetricsbydate('/api/', data).subscribe(function (data) {
            _this.couponMetrics = data;
            for (var i = 0; i < _this.couponMetrics.length; i++) {
                couponkeypair.push(_this.couponMetrics[i].date);
                couponvalues.push(parseInt(_this.couponMetrics[i].count));
            }
            var couponmetricschart = new __WEBPACK_IMPORTED_MODULE_3_angular_highcharts__["a" /* Chart */]({
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Coupon Metrics'
                },
                xAxis: {
                    categories: couponkeypair
                },
                yAxis: {
                    title: {
                        text: 'No of Coupons'
                    }
                },
                credits: {
                    enabled: false
                },
                series: [{
                        name: 'Date',
                        data: couponvalues
                    }]
            });
            // chart.addPoint(4);
            _this.couponmetricschart = couponmetricschart;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__helper_navigationService__["a" /* NavService */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/discounts-sidebar/discounts-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" with-maxwidth DiscountSection chapter pull-right\">\n\n  <article class=\"article\">\n      <h2 class=\"article-title articleTitle\">Create Discount</h2>\n      <div class=\"box box-default\">\n          <div class=\"box-body\">\n\n\n              <form class=\"\" [formGroup]=\"createDiscountForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onCreateDiscountSubmit(createDiscountForm,formDirective)\">\n\n                  <div class=\"row\">\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Description\" required formControlName=\"description\">\n                          <mat-error>\n                              Description should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Actual Price\" required formControlName=\"actualPrice\">\n                        <mat-error>\n                                Actual Price Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input type=\"date\" matInput placeholder=\"Valid From\" required formControlName=\"validFrom\">\n                        <mat-error>\n                                Valid From Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input type=\"date\" matInput placeholder=\"Valid To\" required formControlName=\"validTo\">\n                        <mat-error>\n                            Valid To Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Code\" required formControlName=\"code\">\n                        <mat-error>\n                            Code should not less than 3\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Off Percentage\" required formControlName=\"offPercentage\">\n                        <mat-error>\n                            Percentage Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Special Price\" required formControlName=\"specialPrice\">\n                        <mat-error>\n                                Special Price Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <mat-select placeholder=\"Select Shop\" required formControlName=\"shopid\">\n                          <mat-option *ngFor=\"let list of shopsList\" [value]=\"list.value\">\n                            {{ list.viewValue }}\n                          </mat-option>\n                        </mat-select>\n                      </mat-form-field>\n\n                    <!-- <mat-form-field class=\"example-full-width col-md-12\">\n                        <label for=\"file\">Choose Image</label>\n                        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\">\n                    </mat-form-field> -->\n\n                    <!-- <div class=\"example-full-width col-md-12\">\n                        <label>Upload image : </label>\n                        <input type=\"file\" id=\"file\" (change)=\"handleFileInput($event.target.files)\"> -->\n                        <!-- <input type=\"file\" id=\"filePicker\" required formControlName=\"imageUrl\" (change)=\"handleFileSelect($event)\"> -->\n                    <!-- </div> -->\n\n                    <!-- <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Image\" required formControlName=\"image\">\n                        <mat-error>\n                        </mat-error>\n                    </mat-form-field> -->\n\n                  </div>\n                  <span [innerHTML]=\"cstatus\"></span>\n                  <div class=\"divider divider-md\"></div>\n                  \n                  <div class=\"row\">\n                      <div class=\"col-md-12 text-center\">\n                          <button class=\"col-md-1\" type=\"button\"  (click)=\"discountclose()\" mat-raised-button color=\"warn\" >Cancel</button>\n                          <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createDiscountForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                      </div>\n                  </div>\n\n              </form>\n\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/discounts-sidebar/discounts-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-sizing: border-box;\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  background: rgba(19, 18, 18, 0.8);\n  margin-top: 50px;\n  z-index: 9; }\n\n:host.is-discountOpen {\n  display: block; }\n\n.DiscountSection {\n  background: #fff;\n  height: 100%; }\n\n.articleTitle {\n  text-align: center;\n  margin-top: 15px !important; }\n\n.with-maxwidth {\n  width: 400px;\n  overflow-y: auto; }\n\n@media screen and (max-width: 600px) {\n  .with-maxwidth {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discounts-sidebar/discounts-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__discounts_sidebar_service__ = __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DiscountsSidebarComponent = (function () {
    function DiscountsSidebarComponent(userService, cd, discountSidebar) {
        this.userService = userService;
        this.cd = cd;
        this.discountSidebar = discountSidebar;
        this.isDiscountOpen = false;
        this.url = '/api/';
        this.fileToUpload = null;
        // For Create Category
        this.createDiscountForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3)])),
            actualPrice: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            validFrom: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            validTo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            code: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            offPercentage: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            specialPrice: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, this.noWhitespaceValidator])),
            shopid: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]))
        });
    }
    DiscountsSidebarComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 1;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    DiscountsSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.discountSidebar.discountchange.subscribe(function (DiscountOpen) {
            _this.isDiscountOpen = DiscountOpen;
            _this.shopsdata();
        });
    };
    // close create category menu
    DiscountsSidebarComponent.prototype.discountclose = function () {
        this.discountSidebar.discountSidebarClose();
    };
    // Function to read shops
    DiscountsSidebarComponent.prototype.shopsdata = function () {
        var _this = this;
        this.userService.readshops('/api/', '').subscribe(function (data) {
            _this.activeShopsList = data.filter(function (shops) { return shops.active == true; });
            _this.shopsList = [];
            for (var i = 0; i < _this.activeShopsList.length; i++) {
                _this.shopsList.push({ value: _this.activeShopsList[i].id, viewValue: _this.activeShopsList[i].name });
            }
            _this.cd.detectChanges();
        });
    };
    DiscountsSidebarComponent.prototype.handleFileInput = function (files) {
        this.fileToUpload = files.item(0);
    };
    // Function For Create discont
    DiscountsSidebarComponent.prototype.onCreateDiscountSubmit = function (createDiscountForm, formDirective) {
        var _this = this;
        var userdetails = {
            email: localStorage.getItem('useremail'),
            password: localStorage.getItem('password')
        };
        var reqdata = {
            description: this.createDiscountForm.get('description').value,
            actualPrice: parseInt(this.createDiscountForm.get('actualPrice').value),
            validFrom: this.createDiscountForm.get('validFrom').value,
            validTo: this.createDiscountForm.get('validTo').value,
            code: this.createDiscountForm.get('code').value,
            offPercentage: parseInt(this.createDiscountForm.get('offPercentage').value),
            specialPrice: parseInt(this.createDiscountForm.get('specialPrice').value),
            shopid: parseInt(this.createDiscountForm.get('shopid').value),
            image: null
        };
        this.userService.createDiscount(userdetails, reqdata)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.cstatus = 'Discount Added Successfully !';
                formDirective.resetForm();
                createDiscountForm.reset();
            }
        }, function (err) {
            console.log(err);
            _this.cstatus = '<span style="color:red">' + err.error.message + '</span>';
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-discountOpen'),
        __metadata("design:type", Object)
    ], DiscountsSidebarComponent.prototype, "isDiscountOpen", void 0);
    DiscountsSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discounts-sidebar',
            template: __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__discounts_sidebar_service__["a" /* discountSideBarService */]])
    ], DiscountsSidebarComponent);
    return DiscountsSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/discounts-sidebar/discounts-sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return discountSideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var discountSideBarService = (function () {
    function discountSideBarService() {
        this.isDiscountOpen = false;
        this.discountchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    discountSideBarService.prototype.toggle = function () {
        this.isDiscountOpen = !this.isDiscountOpen;
        this.discountchange.emit(this.isDiscountOpen);
    };
    discountSideBarService.prototype.discountSidebarClose = function () {
        this.discountchange.emit(false);
    };
    discountSideBarService.prototype.discountSidebarOpen = function () {
        this.discountchange.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], discountSideBarService.prototype, "discountchange", void 0);
    discountSideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], discountSideBarService);
    return discountSideBarService;
}());



/***/ }),

/***/ "../../../../../src/app/discounts/discounts.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-10\">\n            <h2 class=\"article-title\">All Discounts ({{discountsList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Discounts\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row discountheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">Description</div>\n                  <div class=\"col-md-2\">Actual Price</div>\n                  <div class=\"col-md-1\">Special Price</div>\n                  <div class=\"col-md-1\">Off Percentage</div>\n                  <div class=\"col-md-2\">Valid From</div>\n                  <div class=\"col-md-2\">Valid To</div>\n                </div>\n                  <ul class=\"list-group discountslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let discount of discountsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-1\">\n                            <button title=\"Active\" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">redeem</mat-icon> </button>\n                            <button title=\"De-Active\" *ngIf=\"discount.status == 'N' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">redeem</mat-icon> </button>\n                            <button title=\"Rejected\" *ngIf=\"discount.status == 'R' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">redeem</mat-icon> </button>\n                          </div>\n                          <div class=\"col-md-2\">{{discount.description}} </div>\n                          <div class=\"col-md-2\">{{discount.actualPrice}} </div>\n                          <div class=\"col-md-1\">{{discount.specialPrice}}</div>\n                          <div class=\"col-md-1\">{{discount.offPercentage}}</div>\n                          <div class=\"col-md-2\">{{discount.validFrom | date: 'yyyy-MM-dd'}}</div>\n                          <div class=\"col-md-2\">{{discount.validTo | date: 'yyyy-MM-dd'}}</div>\n                          <div class=\"col-md-1\" hidden=true>\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(discount?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{discount?.id}}\">\n                                    <a class=\"pointer\" *ngIf=\"discount.status == 'Y' \" (click)=\"deactivatediscount( discount?.id )\" >De-activate</a>\n                                    <a class=\"pointer\" *ngIf=\"discount.status == 'N' || discount.status == 'R' \" (click)=\"activatediscount( discount?.id )\" >Activate</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    </ul>\n                    <div *ngIf=\"discountsList == undefined || (discountsList && (discountsList | filter: searchText).length === 0)\">\n                      <h4 style=\"text-align: center\" >No Data Found</h4>\n                    </div>\n                    <div class=\"pull-right\"  *ngIf=\"discountsList && (discountsList | filter: searchText).length > 0\">\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                    </div>\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "../../../../../src/app/discounts/discounts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".discountslist li {\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  word-wrap: break-word; }\n\n.discountheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.adddiscountbtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .discountheading {\n    display: none; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discounts/discounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscountsComponent = (function () {
    function DiscountsComponent(userService, spinner, router, dialog) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.url = '/api/';
        this.spinner.show();
        this.discountsdata();
    }
    DiscountsComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.mat-tab-label-container').css('background', '#fff');
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    DiscountsComponent.prototype.onTabClick = function (event) {
        var index = event.index;
        //this.discountsdata(status);
    };
    DiscountsComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        //$(".myDropdown"+id).toggle();
        __WEBPACK_IMPORTED_MODULE_5_jquery__(".myDropdown" + id).addClass('show');
    };
    DiscountsComponent.prototype.discountsdata = function () {
        var _this = this;
        this.spinner.show();
        this.userService.readdiscounts('/api/').subscribe(function (data) {
            _this.discountsList = data;
            _this.spinner.hide();
        });
    };
    DiscountsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-discounts',
            template: __webpack_require__("../../../../../src/app/discounts/discounts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discounts/discounts.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */]])
    ], DiscountsComponent);
    return DiscountsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dpendingapprovals/dpendingapprovals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"webview container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"webview container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">Pending Approvals</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n\n\n                    <div class=\"example-header\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Here..\">\n                        </mat-form-field>\n                    </div>\n\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.name}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Phone Number -->\n                        <ng-container matColumnDef=\"phoneNumber\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.phoneNumber}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Category Column -->\n                        <ng-container matColumnDef=\"category\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Category </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.category}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Description Column -->\n                        <ng-container matColumnDef=\"description\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.description}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Action Column -->\n                        <ng-container matColumnDef=\"action\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\">\n                                <!--<mat-chip-list>\n                                    <mat-chip color=\"primary\" (click)=\"viewData( shopdata.id )\" selected=\"true\">View</mat-chip>\n                                    <mat-chip color=\"default\" (click)=\"approveData( shopdata.id )\" selected=\"true\">Approve</mat-chip>\n                                    <mat-chip color=\"warn\" (click)=\"rejectData( shopdata.id )\" selected=\"true\">Reject</mat-chip>\n                                </mat-chip-list>-->\n                                <div class=\"btn-group\">\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"viewData( shopdata.id )\">View</button>\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"approveData( shopdata.id )\">Approve</button>\n                                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"rejectData( shopdata.id )\">Reject</button>\n                                </div>\n                            </mat-cell>\n                        </ng-container>\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n<div class=\"mobile-view\">\n    <section class=\"chapter\">\n\n        <article class=\"article\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                        <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-6\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading c-list\">\n                                            <span class=\"title\">Pending Approvals</span>\n                                        </div>\n                                        <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n                                                <input matInput placeholder=\"Search\" [(ngModel)]=\"term\" autocomplete=\"off\" >\n                                            </mat-form-field>\n                                        <!-- <input ng-model=\"searchText\" placeholder=\"enter search term here\"> -->\n                                        <ul class=\"list-group\" id=\"contact-list\">\n                                            <li class=\"list-group-item\" *ngFor=\"let dat of shopsList | filter:term \">\n                                                <div class=\"col-xs-12 col-sm-9\">\n                                                    <span class=\"name\">{{dat?.name}}</span> <br/>\n                                                    <span class=\"name\">{{dat?.phoneNumber}}</span>\n                                                    <!-- three dot menu -->\n                                                    <div class=\"dropdown pull-right\">\n                                                        <!-- three dots -->\n                                                        <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(dat?.id)\">\n                                                            <li></li>\n                                                            <li></li>\n                                                            <li></li>\n                                                        </ul>\n                                                        <!-- menu -->\n                                                        <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{dat?.id}}\">\n                                                            <a (click)=\"viewData( dat?.id )\" >View</a>\n                                                            <a (click)=\"approveData( dat?.id )\" >Approve</a>\n                                                            <a (click)=\"rejectData( dat?.id )\" >Reject</a>\n                                                        </div>\n                                                    </div>\n                                                    <br/>\n                                                    <span class=\"name\">{{dat?.category}}</span><br/>\n                                                    <span class=\"name\">{{dat?.description}}</span><br/>\n                                                    <!-- <span class=\"glyphicon glyphicon-map-marker text-muted c-info\" data-toggle=\"tooltip\" title=\"5842 Hillcrest Rd\"></span>\n                                                    <span class=\"visible-xs\"> <span class=\"text-muted\">5842 Hillcrest Rd</span><br/></span>\n                                                    <span class=\"glyphicon glyphicon-earphone text-muted c-info\" data-toggle=\"tooltip\" title=\"(870) 288-4149\"></span>\n                                                    <span class=\"visible-xs\"> <span class=\"text-muted\">(870) 288-4149</span><br/></span>\n                                                    <span class=\"fa fa-comments text-muted c-info\" data-toggle=\"tooltip\" title=\"scott.stevens@example.com\"></span>\n                                                    <span class=\"visible-xs\"> <span class=\"text-muted\">scott.stevens@example.com</span><br/></span> -->\n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </li>\n                                            \n                                            \n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/dpendingapprovals/dpendingapprovals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-view {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .webview {\n    display: none; }\n  .mobile-view {\n    display: block; } }\n\n@media screen and (max-width: 600px) and (max-width: 767px) {\n  .visible-xs {\n    display: inline-block !important; }\n  .block {\n    display: block !important;\n    width: 100%;\n    height: 1px !important; } }\n\n@media screen and (max-width: 600px) {\n  #back-to-bootsnipp {\n    position: fixed;\n    top: 10px;\n    right: 10px; }\n  .c-search > .form-control {\n    border-radius: 0px;\n    border-width: 0px;\n    border-bottom-width: 1px;\n    font-size: 1.3em;\n    padding: 12px 12px;\n    height: 44px;\n    outline: none !important; }\n  .c-search > .form-control:focus {\n    outline: 0px !important;\n    -webkit-appearance: none;\n    box-shadow: none; }\n  .c-search > .input-group-btn .btn {\n    border-radius: 0px;\n    border-width: 0px;\n    border-left-width: 1px;\n    border-bottom-width: 1px;\n    height: 44px; }\n  .c-list {\n    padding: 0px;\n    min-height: 44px; }\n  .title {\n    display: inline-block;\n    font-size: 1.7em;\n    font-weight: bold;\n    padding: 5px 15px; }\n  ul.c-controls {\n    list-style: none;\n    margin: 0px;\n    min-height: 44px; }\n  ul.c-controls li {\n    margin-top: 8px;\n    float: left; }\n  ul.c-controls li a {\n    font-size: 1.7em;\n    padding: 11px 10px 6px; }\n  ul.c-controls li a i {\n    min-width: 24px;\n    text-align: center; }\n  ul.c-controls li a:hover {\n    background-color: rgba(51, 51, 51, 0.2); }\n  .c-toggle {\n    font-size: 1.7em; }\n  .name {\n    font-size: 1.0em;\n    font-weight: 600; }\n  .c-info {\n    padding: 5px 10px;\n    font-size: 1.25em; }\n  .icons li {\n    background: none repeat scroll 0 0 #000;\n    height: 4px;\n    width: 4px;\n    line-height: 0;\n    list-style: none outside none;\n    margin-top: 2px;\n    vertical-align: top;\n    border-radius: 50%;\n    pointer-events: none; }\n  .dropbtn {\n    color: white;\n    font-size: 16px;\n    border: none;\n    cursor: pointer; }\n  .dropdown-content {\n    display: none;\n    right: 0px;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1; }\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block; }\n  .dropdown a:hover {\n    background-color: #f1f1f1; }\n  .show {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dpendingapprovals/dpendingapprovals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DpendingapprovalsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnfApprDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CnfRejDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shopslist_shopslist_component__ = __webpack_require__("../../../../../src/app/shopslist/shopslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var DpendingapprovalsComponent = (function () {
    function DpendingapprovalsComponent(userService, router, dialog, spinner) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.url = '/api/';
        this.displayedColumns = ['name', 'phoneNumber', 'category', 'description', 'action'];
        this.spinner.show();
        this.getShops();
    }
    DpendingapprovalsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DpendingapprovalsComponent.prototype.ngOnInit = function () {
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            //console.log(event);
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    DpendingapprovalsComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        $(".myDropdown" + id).addClass('show');
    };
    DpendingapprovalsComponent.prototype.getShops = function () {
        var _this = this;
        var data = {
            status: ['W']
        };
        this.userService.readshops('/api/', data).subscribe(function (data) {
            _this.shopsList = data.data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](_this.shopsList);
            _this.dataSource.sort = _this.sort;
            _this.spinner.hide();
        });
    };
    DpendingapprovalsComponent.prototype.viewData = function (id) {
        var _this = this;
        var shopid = {
            shop_id: id
        };
        this.spinner.show();
        this.userService.readshopbyid(this.url, shopid).subscribe(function (data) {
            _this.shopList = data.data;
            console.log(_this.shopList);
            _this.spinner.hide();
            _this.openDialog();
        });
    };
    DpendingapprovalsComponent.prototype.approveData = function (id) {
        var dialogRef = this.dialog.open(CnfApprDialogComponent, {
            width: '450px',
            data: { shopid: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    DpendingapprovalsComponent.prototype.rejectData = function (id) {
        var dialogRef = this.dialog.open(CnfRejDialogComponent, {
            width: '450px',
            data: { shopid: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    DpendingapprovalsComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__shopslist_shopslist_component__["b" /* ShoplistDialogComponent */], {
            width: '450px',
            data: this.shopList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    DpendingapprovalsComponent.prototype.ConfirmApprDialog = function () {
        var dialogRef = this.dialog.open(CnfApprDialogComponent, {
            width: '450px',
            data: this.shopList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */])
    ], DpendingapprovalsComponent.prototype, "sort", void 0);
    DpendingapprovalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dpendingapprovals',
            template: __webpack_require__("../../../../../src/app/dpendingapprovals/dpendingapprovals.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dpendingapprovals/dpendingapprovals.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"]])
    ], DpendingapprovalsComponent);
    return DpendingapprovalsComponent;
}());

var CnfApprDialogComponent = (function () {
    function CnfApprDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfApprDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfApprDialogComponent.prototype.onApproveClick = function (shopid) {
        var _this = this;
        console.log(shopid);
        var del_shop = {
            shop_id: shopid,
            change_status: 'Y',
            db_query: 'change_status'
        };
        this.userService.editshopbyid(this.url, del_shop)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Shop Approved Successfully !';
            }
            else {
                _this.cstatus = 'Unable to approve Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfApprDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cnfAprDialog',
            template: __webpack_require__("../../../../../src/app/dpendingapprovals/dshoplist-cnfapr-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/dpendingapprovals/dshoplist-cnfapr-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], CnfApprDialogComponent);
    return CnfApprDialogComponent;
}());

var CnfRejDialogComponent = (function () {
    function CnfRejDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfRejDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfRejDialogComponent.prototype.onRejectClick = function (shopid) {
        var _this = this;
        console.log(shopid);
        var del_shop = {
            shop_id: shopid,
            change_status: 'R',
            db_query: 'change_status'
        };
        this.userService.editshopbyid(this.url, del_shop)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Shop Rejected Successfully !';
            }
            else {
                _this.cstatus = 'Unable to Reject Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfRejDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cnfAprDialog',
            template: __webpack_require__("../../../../../src/app/dpendingapprovals/dshoplist-cnfrej-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/dpendingapprovals/dshoplist-cnfrej-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], CnfRejDialogComponent);
    return CnfRejDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dpendingapprovals/dshoplist-cnfapr-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you Sure Want To Approve ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onApproveClick(data.shopid)\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dpendingapprovals/dshoplist-cnfapr-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dpendingapprovals/dshoplist-cnfrej-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you Sure Want To Reject ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onRejectClick(data.shopid)\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dpendingapprovals/dshoplist-cnfrej-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dshoplist/dshoplist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"webview container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\" webview container-fluid chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">Shops List</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n                    <div class=\"example-header\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Here..\">\n                        </mat-form-field>\n                    </div>\n\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Name</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.name}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Phone Number -->\n                        <ng-container matColumnDef=\"phoneNumber\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Phone Number</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.phoneNumber}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Category Column -->\n                        <ng-container matColumnDef=\"category\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Category</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.category}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Description Column -->\n                        <ng-container matColumnDef=\"description\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Description</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.description}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Action Column -->\n                        <ng-container matColumnDef=\"status\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Status</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\">\n                                <mat-chip-list>\n                                <mat-chip>\n                                <span *ngIf=\"shopdata.status == 'W' \"> Waiting for approval</span>\n                                <span *ngIf=\"shopdata.status == 'Y' \"> Active</span>\n                                <span *ngIf=\"shopdata.status == 'N' \"> De-Active</span>\n                                <span *ngIf=\"shopdata.status == 'R' \"> Rejected</span>\n                                </mat-chip>\n                                </mat-chip-list>\n\n                            </mat-cell>\n                        </ng-container>\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n<div class=\"mobile-view\">\n    <section class=\"chapter\">\n\n        <article class=\"article\">\n            <!-- <h2 class=\"article-title\" style=\"text-align: center\">Shops List</h2> -->\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                        <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-6\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading c-list\">\n                                            <span class=\"title\">Shops List</span>\n                                            <!-- <ul class=\"pull-right c-controls\">\n                                                <li><a href=\"#cant-do-all-the-work-for-you\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add Contact\"><i class=\"glyphicon glyphicon-plus\"></i></a></li>\n                                                <li><a href=\"#\" class=\"hide-search\" data-command=\"toggle-search\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Toggle Search\"><i class=\"fa fa-ellipsis-v\"></i></a></li>\n                                            </ul> -->\n                                        </div>\n                                        <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n                                                <input matInput placeholder=\"Search\" [(ngModel)]=\"term\" autocomplete=\"off\" >\n                                            </mat-form-field>\n                                        <!-- <input ng-model=\"searchText\" placeholder=\"enter search term here\"> -->\n                                        <ul class=\"list-group\" id=\"contact-list\">\n                                            <li class=\"list-group-item\" *ngFor=\"let dat of shopsList | filter:term \">\n                                                <div class=\"col-xs-12 col-sm-9\">\n                                                    <span class=\"name\">{{dat?.name}}</span> <br/>\n                                                    <span class=\"name\">{{dat?.phoneNumber}}</span>\n                                                    <mat-chip-list class=\"pull-right\" >\n                                                            <mat-chip>\n                                                            <span *ngIf=\"dat.status == 'W' \"> Waiting for approval</span>\n                                                            <span *ngIf=\"dat.status == 'Y' \"> Active</span>\n                                                            <span *ngIf=\"dat.status == 'N' \"> De-Active</span>\n                                                            <span *ngIf=\"dat.status == 'R' \"> Rejected</span>\n                                                            </mat-chip>\n                                                            </mat-chip-list>\n                                                    <br/>\n                                                    <span class=\"name\">{{dat?.category}}</span><br/>\n                                                    <span class=\"name\">{{dat?.description}}</span><br/>\n                                                    <!-- <span class=\"glyphicon glyphicon-map-marker text-muted c-info\" data-toggle=\"tooltip\" title=\"5842 Hillcrest Rd\"></span>\n                                                    <span class=\"visible-xs\"> <span class=\"text-muted\">5842 Hillcrest Rd</span><br/></span>\n                                                    <span class=\"glyphicon glyphicon-earphone text-muted c-info\" data-toggle=\"tooltip\" title=\"(870) 288-4149\"></span>\n                                                    <span class=\"visible-xs\"> <span class=\"text-muted\">(870) 288-4149</span><br/></span>\n                                                    <span class=\"fa fa-comments text-muted c-info\" data-toggle=\"tooltip\" title=\"scott.stevens@example.com\"></span>\n                                                    <span class=\"visible-xs\"> <span class=\"text-muted\">scott.stevens@example.com</span><br/></span> -->\n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </li>\n                                            \n                                            \n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/dshoplist/dshoplist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-table {\n  width: 100%;\n  overflow-x: auto; }\n\n.mobile-view {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .webview {\n    display: none; }\n  .mobile-view {\n    display: block; } }\n\n@media screen and (max-width: 600px) and (max-width: 767px) {\n  .visible-xs {\n    display: inline-block !important; }\n  .block {\n    display: block !important;\n    width: 100%;\n    height: 1px !important; } }\n\n@media screen and (max-width: 600px) {\n  #back-to-bootsnipp {\n    position: fixed;\n    top: 10px;\n    right: 10px; }\n  .c-search > .form-control {\n    border-radius: 0px;\n    border-width: 0px;\n    border-bottom-width: 1px;\n    font-size: 1.3em;\n    padding: 12px 12px;\n    height: 44px;\n    outline: none !important; }\n  .c-search > .form-control:focus {\n    outline: 0px !important;\n    -webkit-appearance: none;\n    box-shadow: none; }\n  .c-search > .input-group-btn .btn {\n    border-radius: 0px;\n    border-width: 0px;\n    border-left-width: 1px;\n    border-bottom-width: 1px;\n    height: 44px; }\n  .c-list {\n    padding: 0px;\n    min-height: 44px; }\n  .title {\n    display: inline-block;\n    font-size: 1.7em;\n    font-weight: bold;\n    padding: 5px 15px; }\n  ul.c-controls {\n    list-style: none;\n    margin: 0px;\n    min-height: 44px; }\n  ul.c-controls li {\n    margin-top: 8px;\n    float: left; }\n  ul.c-controls li a {\n    font-size: 1.7em;\n    padding: 11px 10px 6px; }\n  ul.c-controls li a i {\n    min-width: 24px;\n    text-align: center; }\n  ul.c-controls li a:hover {\n    background-color: rgba(51, 51, 51, 0.2); }\n  .c-toggle {\n    font-size: 1.7em; }\n  .name {\n    font-size: 1.4em;\n    font-weight: 700; }\n  .c-info {\n    padding: 5px 10px;\n    font-size: 1.25em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dshoplist/dshoplist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DshoplistComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DshoplistComponent = (function () {
    function DshoplistComponent(userService, router, dialog, spinner) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.url = '/api/';
        this.displayedColumns = ['name', 'phoneNumber', 'category', 'description', 'status'];
        this.spinner.show();
        this.getShops();
    }
    DshoplistComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DshoplistComponent.prototype.getShops = function () {
        var _this = this;
        var data = {
            status: 'ALL'
        };
        this.userService.readshops('/api/', data).subscribe(function (data) {
            _this.shopsList = data.data;
            console.log(_this.shopsList);
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](_this.shopsList);
            _this.dataSource.sort = _this.sort;
            _this.spinner.hide();
        });
    };
    DshoplistComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */])
    ], DshoplistComponent.prototype, "sort", void 0);
    DshoplistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dshoplist',
            template: __webpack_require__("../../../../../src/app/dshoplist/dshoplist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dshoplist/dshoplist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4_ngx_spinner__["NgxSpinnerService"]])
    ], DshoplistComponent);
    return DshoplistComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg bg-white navbar-light\">\n  <a class=\"navbar-brand\" href=\"#\">\n    <span><a style=\"color: black;\" [routerLink]=\"['/']\"><img src=\"../../assets/images/logo.png\" height=\"30px\"/> {{AppConfig.brand}}</a></span>\n  </a>\n\n  <button class=\"navbar-toggler\" (click)=\"togglenavbar()\" type=\"button\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': togglenav }\">\n    <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0\">\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"shops\">Shops <i class=\"material-icons\">arrow_drop_down</i></button>\n          <mat-menu #shops=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"createshopopen()\">Add New Shop</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" [routerLink]=\"['/shops']\">All Shops</button>\n          </mat-menu>\n      </li>\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"agents\">Agents <i class=\"material-icons\">arrow_drop_down</i></button>\n          <mat-menu #agents=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"agentopen()\">Add New Agent</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" [routerLink]=\"['/agents']\">All Agents</button>\n          </mat-menu>\n      </li>\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"categories\">Categories <i class=\"material-icons\">arrow_drop_down</i></button>\n          <mat-menu #categories=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"categoryopen()\">Add New Category</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" [routerLink]=\"['/categories']\">All Categories</button>\n          </mat-menu>\n      </li>\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"subcategories\">Sub Categories <i class=\"material-icons\">arrow_drop_down</i></button>\n          <mat-menu #subcategories=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"subcategoryopen()\">Add New Sub Category</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" [routerLink]=\"['/subcategories']\">All Sub Categories</button>\n          </mat-menu>\n      </li>\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"discounts\">Discounts <i class=\"material-icons\">arrow_drop_down</i></button>\n          <mat-menu #discounts=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"discountopen()\">Create Discount</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" [routerLink]=\"['/discounts']\">All Discounts</button>\n          </mat-menu>\n      </li>\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"coupons\">Coupons <i class=\"material-icons\">arrow_drop_down</i></button>\n          <mat-menu #coupons=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"couponopen()\">Create Coupon</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" [routerLink]=\"['/coupons']\">All Coupons</button>\n          </mat-menu>\n      </li>\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"subsplans\">Subs Plans <i class=\"material-icons\">arrow_drop_down</i></button>\n          <mat-menu #subsplans=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"subscriptionpanopen()\">Create Subscription Plan</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" [routerLink]=\"['/subscriptionplan']\" disabled>All Subscription Plans</button>\n          </mat-menu>\n      </li>\n\n      <li style=\"margin-top: 10px\">\n          <button mat-button [matMenuTriggerFor]=\"profile\"><i class=\"material-icons\">person_pin</i></button>\n          <mat-menu #profile=\"matMenu\">\n            <button mat-menu-item (click)=\"togglenavbar()\" disabled >Settings</button>\n            <button mat-menu-item (click)=\"togglenavbar()\" (click)=\"logout()\">Logout</button>\n          </mat-menu>\n      </li>\n    \n\n      <!-- <li>\n        <button style=\"margin-top: 10px\" mat-button [matMenuTriggerFor]=\"profile\" class=\"md-button header-btn\">\n          <i class=\"material-icons\">person_pin</i>\n        </button>\n        <mat-menu #profile=\"matMenu\" style=\"z-index: 9999\">\n          <button mat-menu-item disabled>Settings</button>\n          <button mat-menu-item (click)=\"logout()\">Logout</button>\n        </mat-menu>\n      </li> -->\n      <li style=\"margin: 15px\"></li>\n      <!--<li><button mat-button class=\"md-button header-btn d-lg-none d-xl-none\" myOpenSearchOverlay><i class=\"material-icons\">search</i></button></li>-->\n      <!-- <li><button mat-button class=\"md-button header-btn\"><i class=\"material-icons\">more_vert</i></button></li> -->\n        \n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discounts_sidebar_discounts_sidebar_service__ = __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__coupon_sidebar_coupons_sidebar_service__ = __webpack_require__("../../../../../src/app/coupon-sidebar/coupons-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agent_sidebar_agent_sidebar_service__ = __webpack_require__("../../../../../src/app/agent-sidebar/agent-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__createshop_sidebar_createshop_sidebar_service__ = __webpack_require__("../../../../../src/app/createshop-sidebar/createshop-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__subscriptionplan_sidebar_subscriptionplan_sidebar_service__ = __webpack_require__("../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppHeaderComponent = (function () {
    function AppHeaderComponent(router, userservice, categorysidebar, subcategorysidebar, discountsidebar, couponsidebar, agentsidebar, subscriptionplan, createshopsidebar) {
        this.router = router;
        this.userservice = userservice;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.discountsidebar = discountsidebar;
        this.couponsidebar = couponsidebar;
        this.agentsidebar = agentsidebar;
        this.subscriptionplan = subscriptionplan;
        this.createshopsidebar = createshopsidebar;
        this.categoryStatus = false;
        this.togglenav = false;
    }
    AppHeaderComponent.prototype.categoryopen = function () {
        this.subcategorysidebar.subcategorySidebarClose();
        this.discountsidebar.discountSidebarClose();
        this.categorysidebar.categorySidebarOpen();
    };
    AppHeaderComponent.prototype.subcategoryopen = function () {
        this.categorysidebar.categorySidebarClose();
        this.discountsidebar.discountSidebarClose();
        this.subcategorysidebar.subcategorySidebarOpen();
    };
    AppHeaderComponent.prototype.discountopen = function () {
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        this.discountsidebar.discountSidebarOpen();
    };
    AppHeaderComponent.prototype.couponopen = function () {
        this.closesidebars();
        this.couponsidebar.couponSidebarOpen();
    };
    AppHeaderComponent.prototype.agentopen = function () {
        this.closesidebars();
        this.agentsidebar.agentSidebarOpen();
    };
    AppHeaderComponent.prototype.createshopopen = function () {
        this.closesidebars();
        this.createshopsidebar.createshopSidebarOpen();
    };
    AppHeaderComponent.prototype.subscriptionpanopen = function () {
        this.closesidebars();
        this.subscriptionplan.subscriptionplanSidebarOpen();
    };
    AppHeaderComponent.prototype.closesidebars = function () {
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        this.discountsidebar.discountSidebarClose();
        this.couponsidebar.couponSidebarClose();
        this.agentsidebar.agentSidebarClose();
        this.subscriptionplan.subscriptionplanSidebarClose();
        this.createshopsidebar.createshopSidebarClose();
    };
    AppHeaderComponent.prototype.ngOnInit = function () {
        this.AppConfig = __WEBPACK_IMPORTED_MODULE_2__config__["a" /* APPCONFIG */];
        if (localStorage.length === 0) {
            this.router.navigate(['/']);
        }
    };
    AppHeaderComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['/']);
    };
    AppHeaderComponent.prototype.togglenavbar = function () {
        this.togglenav = !this.togglenav;
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            styles: ['./header.component.css'],
            template: __webpack_require__("../../../../../src/app/header/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */],
            __WEBPACK_IMPORTED_MODULE_5__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */], __WEBPACK_IMPORTED_MODULE_6__discounts_sidebar_discounts_sidebar_service__["a" /* discountSideBarService */],
            __WEBPACK_IMPORTED_MODULE_7__coupon_sidebar_coupons_sidebar_service__["a" /* couponSideBarService */], __WEBPACK_IMPORTED_MODULE_8__agent_sidebar_agent_sidebar_service__["a" /* agentSideBarService */],
            __WEBPACK_IMPORTED_MODULE_10__subscriptionplan_sidebar_subscriptionplan_sidebar_service__["a" /* subscriptionplanSideBarService */], __WEBPACK_IMPORTED_MODULE_9__createshop_sidebar_createshop_sidebar_service__["a" /* createshopSideBarService */]])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/helper/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONSTANTS; });
var APP_CONSTANTS = {
    LOGIN_USER: 'http://122.175.60.20:8104/users/login',
    REGISTER_USER: 'http://122.175.60.20:8104/users/signup',
    FORGOT_PASSWORD: 'http://122.175.60.20:8104/users/forgotPassword',
    CREATE_SHOP: 'http://122.175.60.20:8104/shops/others',
    READ_SHOP: 'http://122.175.60.20:8104/shops/getAll',
    DELETE_SHOP: 'http://122.175.60.20:8104/shops',
    MODIFY_SHOP: 'http://122.175.60.20:8104/shops/activate',
    UPDATE_SHOP: 'http://122.175.60.20:8104/shops',
    CREATE_AGENT: 'http://122.175.60.20:8104/users/signup',
    READ_AGENT: 'http://122.175.60.20:8104/users?type=agent',
    MODIFY_AGENT: 'http://122.175.60.20:8104/users/activate',
    CREATE_CATEGORY: 'http://122.175.60.20:8104/categories',
    CREATE_DISCOUNT: 'http://122.175.60.20:8104/discounts',
    READ_CATEGORY: 'http://122.175.60.20:8104/categories/getAllRaw',
    MODIFY_CATEGORY: 'http://122.175.60.20:8104/categories',
    ACTIVE_DEACTIVE_CATEGORY: 'http://122.175.60.20:8104/categories/activate',
    ACTIVE_DEACTIVE_SUB_CATEGORY: 'http://122.175.60.20:8104/categories/activate',
    CREATE_SUB_CATEGORY: 'http://122.175.60.20:8104/categories/sub',
    READ_SUB_CATEGORY: 'https://murmuring-ridge-87679.herokuapp.com/api/category/readsubcategories',
    MODIFY_SUB_CATEGORY: 'http://122.175.60.20:8104/categories/sub',
    READ_USERS: 'https://murmuring-ridge-87679.herokuapp.com/api/users/readusers',
    MODIFY_USERS: 'https://murmuring-ridge-87679.herokuapp.com/api/users/modifyuser',
    READ_DISCOUNTS: 'http://122.175.60.20:8104/discounts',
    READ_COUPONS: 'http://122.175.60.20:8104/coupons',
    MODIFY_COUPONS: 'http://122.175.60.20:8104/coupons',
    DELETE_COUPON: 'http://122.175.60.20:8104/coupons',
    READ_SUBSCRIPTIONS: 'http://122.175.60.20:8104/subscriptions',
    MODIFY_SUBSCRIPTIONS: 'http://122.175.60.20:8104/subscriptions',
    CREATE_SUBSCRIPTIONPLANS: 'http://122.175.60.20:8104/subscriptions/plans',
    READ_SUBSCRIPTIONPLANS: 'http://122.175.60.20:8104/subscriptions/plans',
    MODIFY_SUBSCRIPTIONPLANS: 'http://122.175.60.20:8104/subscriptions/plans',
    DELETE_SUBSCRIPTIONPLANS: 'http://122.175.60.20:8104/subscriptions/plans',
    READ_SHOP_METRICS_BYDATE: 'https://murmuring-ridge-87679.herokuapp.com/api/metrics/getshopmetricsbydate',
    READ_AGENT_METRICS_BYDATE: 'https://murmuring-ridge-87679.herokuapp.com/api/metrics/getagentmetricsbydate',
    READ_DISCOUNT_METRICS_BYDATE: 'https://murmuring-ridge-87679.herokuapp.com/api/metrics/getdiscountmetricsbydate',
    READ_COUPON_METRICS_BYDATE: 'https://murmuring-ridge-87679.herokuapp.com/api/metrics/getcouponmetricsbydate',
    READ_DASHBOARD_METRICS: 'http://122.175.60.20:8104/stats/totalCounts',
};


/***/ }),

/***/ "../../../../../src/app/helper/navigationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");

// this helps us in weather nav is required or not
var NavService = (function () {
    function NavService() {
        this.navStatus = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    // setting up the status
    NavService.prototype.setStaus = function (state) {
        this.state = state;
        this.navStatus.next(this.state);
    };
    // get status
    NavService.prototype.getStatus = function () {
        return this.navStatus.asObservable();
    };
    return NavService;
}());



/***/ }),

/***/ "../../../../../src/app/layout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LayoutService = (function () {
    function LayoutService() {
        this.preloaderStateSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.preloaderState$ = this.preloaderStateSource.asObservable();
        this.searchOverlaySource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.searchOverlayState$ = this.searchOverlaySource.asObservable();
        /*private echartsSource = new Subject<boolean>();
        echartsState$ = this.echartsSource.asObservable();
        updateEChartsState(state: boolean) {
          // console.log('echarts state: ' + state)
          this.echartsSource.next(state);
        }*/
    }
    LayoutService.prototype.updatePreloaderState = function (state) {
        // console.log('preloader state: ' + state)
        this.preloaderStateSource.next(state);
    };
    LayoutService.prototype.updateSearchOverlayState = function (state) {
        // console.log('overlay state: ' + state);
        this.searchOverlaySource.next(state);
    };
    LayoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LayoutService);
    return LayoutService;
}());



/***/ }),

/***/ "../../../../../src/app/login/forgotpassword-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h5 class=\"mat-dialog-title\" style=\"text-align: center;\">Forgot Password</h5>\n\n<form class=\"\" [formGroup]=\"forgotPasswordForm\"  (ngSubmit)='onForgotPasswordSubmit()'>\n    <mat-dialog-content>\n\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email id\" value=\"\" required formControlName=\"email\">\n            <mat-error>\n                Please enter valid email!\n            </mat-error>\n        </mat-form-field>\n\n    </mat-dialog-content>\n\n    <div mat-dialog-actions>\n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!forgotPasswordForm.valid\" mat-raised-button color=\"warn\">Submit</button>\n    </div>\n    <br>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/forgotpassword-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"grid\">\n    <div class=\"wrapper\">\n      <!-- <div class=\"location\"></div> -->\n      <div class=\"logo\"><img src=\"assets/images/logo.svg\"></div>\n      <div class=\"spl_txt\">Explore. Discover. Share.</div>\n      <div class=\"login_copyright\">copyright&copy; shops Nearby Me. All Rights Reserved</div>\n    </div>\n   <div class=\"form_wrapper\">\n      <div class=\"login_form\">\n        <h3 class=\"tc fz-22 clr_6\">welcomeback</h3>\n        <p>It is a long established  fact that a reader will be distracted by the readable content of a page when</p>\n          <form class=\"horizontal_form\" [hidden]=\"loginDiv\" [formGroup]=\"loginForm\"  (ngSubmit)=\"onLoginSubmit()\">\n\n            <div class=\"form-field\">\n            <label>Email Address</label>\n            <input type=\"text\"  name=\"emailaddress\" class=\"form_input form-control\" formControlName=\"email\" />\n            </div>\n            <span *ngIf=\"loginForm.hasError('pattern',['email'])\">\n              Please enter valid email!\n            </span>\n\n            <div class=\"form-field mt-20\">\n            <label>Password</label>\n            <input type=\"password\"  name=\"password\" class=\"form_input form-control\" formControlName=\"password\" />\n            <span *ngIf=\"loginForm.hasError('minlength',['password'])\" >\n                Password should not less than 3\n              </span>\n              <a class=\"fp pointer\" (click)=\"showForgotForm()\">Forgot Password?</a>\n            </div>\n            <span>{{status}}</span>\n\n            <div class=\"form-field mt-40\">\n                <button type=\"submit\"  name=\"submit\" [disabled]=\"!loginForm.valid\" class=\"form_submit\">Login</button>\n            </div>\n            \n            <!-- <div class=\"form-field mt-50\">\n            <label>Don't have an Account ? <a [routerLink]=\"['signup']\" class=\"signup\">Sign Up</a></label>\n            </div> -->\n\n          </form>\n\n          <form class=\"forgotPasswordForm\" [hidden]=\"forgotPwdDiv\" [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onForgotSubmit()\">\n              <div class=\"form-field\">\n                  <label>Email Address</label>\n                  <input type=\"text\"  name=\"emailaddress\" class=\"form_input form-control\" formControlName=\"femail\" />\n                  </div>\n                  <span *ngIf=\"forgotPasswordForm.hasError('pattern',['email'])\">\n                    Please enter valid email!\n                  </span>\n                  <a class=\"fp pointer\" (click)=\"showLoginForm()\" >Back To Login</a>\n                  <span>{{fpstatus}}</span>\n\n                  <div class=\"form-field mt-40\">\n                      <button type=\"submit\"  name=\"submit\" [disabled]=\"!forgotPasswordForm.valid\" class=\"form_submit\">Submit</button>\n                  </div>\n          </form>\n        </div>\n    </div>\n  </div><!--grid-->\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {\n  cursor: pointer; }\n\n/* You can add global styles to this file, and also import other style files */\n* {\n  margin: 0;\n  padding: 0; }\n\na {\n  text-decoration: none; }\n\nul {\n  list-style: none; }\n\n*, div {\n  box-sizing: border-box; }\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: normal; }\n\nselect:focus, input:focus {\n  outline: medium none; }\n\n/* body{font-family: 'Roboto', sans-serif;font-size:14px;width:100%;} */\nbody {\n  font-family: 'GothamRounded-Medium';\n  background: #f6f6f6; }\n\n.container {\n  width: 1170px;\n  margin: 0 auto; }\n\n.wrapper {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/map.png") + ");\n  padding: 90px 45px;\n  color: #fff;\n  background-repeat: no-repeat;\n  background-position: 25px 105px;\n  position: relative; }\n\n.wrapper h1 {\n  font-size: 28px;\n  padding-left: 20px;\n  display: inline-block;\n  font-weight: normal; }\n\n.form_wrapper {\n  background: #f6f6f6;\n  padding: 90px 45px; }\n\n.grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  border: 1px solid #bcb5b9;\n  background-image: linear-gradient(to bottom, #4b3b9d, #1d2564); }\n\n.location {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA9CAYAAAA9OTA8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAABCRSURBVHjazJp7lF11dcc/e//OvTNJJpPHTCYTCEmIvBJQIGB8lKILBakSHqFL0Xa5QKAVkBgrjyZFJGpw2aVStFIpVQEBoY0kPAQUlUhBIcbwMCAkTB4kJDDJJEMymdc9v737x+/cO6GVmehEV+9aZ82se+45Z//2bz++3+8+ctHcqydffuaSX7U2dk42zQmmRIGSgQXBPTL4Rwc9Kz741S6Dn7e9nqEOPZWS3frI+86b/63v3Corv/mu/545Zf0JSsDdcckBCJbRH4wwxMP/HB9FyHEyhIobIiVGnb5JsuYxOw4zFPEKLopVPalGZkN75k/+ccXJUYHogqgTLOeisxa1KmS5kuOiuBrBFcUwsZrhIgMr2Pt/XPeTZ8PAvVxTsLji6iCGiwKKIqgrLqCgCnlWvUmWZ7jkqNcRCEW8gbvXDN/7f8SG71hJeSUaMcDEMAHEEBt821XcFRRcqajhEjCpkBtkDFzs7rh7zfPVRQzbeCIuBiaICAqE4t7KEMa7pKW6OuLpAKMkYHgKH3VE0vd7L0Bk+AsIprhKCguTwvMZhuJDJNxADRIjK37skiqPiYFnEAs/SEjnrer9/ZDNEiBXolZAHTdBzVEMyAe9NAuOughiRh4UccfMUIUbHxnH8680pKTxiDhIsTARwcWQYSate0RClp5JQNwwIlmWcdVp7TQ1vPkCNIrmxKq3BRGn7IHO3WUW3TuRnp7e5A3NahtV24H94HkRwczSXyoYgovy4+fquGvFuME9D6YqsWhlGVEc1wq/eKmB0fU53/7ETkIQxCu1SBuIexuyw+7TArxaDlP1yaJz9Y+a+cWL9Vx80mDVRoK5QI6ARtQyjMCqjXXMntaHhhyn8obwUKUoa0ULF8OgSHpFPH0nbkUYZLhIrRRWK4mJ8c8PNrN8zWiiCy6CWsTEOH5KP6tfGTEolFD3qOIZpSBgQiQiEtjaUWJ6cz/BlBDLRAGVMm1b6zntGwcRPOW5iREsI0P4629O4dktdRiRAERJofbY2hKX3NxCEEddKbmQPKZ859FxPLqmnjpA3Mk1NaGWsf10dGWDVxvFFYzcDVQoqaMW2eNOKSuWGiqIOtEqPL6xzJNtI9m4MwMLaBRccta0B5avLfPsy+XUK8wJbkQ1lj3VyM9eaEBjiRynXyHiLF87iu3dynOb6+jTFIaZKS6BnV1KuTQ4KNQoCYmpZWBC7mWiGlPGCC+2l0EFzAmWitcdv2wC4O5fj8YyMA1EnP94tIVgGQ+tHkUgoJrhYmzvrGPpUw3s6M5YsVHIkFTRRLn+x2OZObGHR9aMZmXbCCJpO92Fu1c0ccIh3YP3iM/Mbbqioa5vlIfUgAhGMGXMyJzFyyawsSNjcnPkpfY6rl4ykRdeK3Hpe3Zx3U8n0DIyohjf/+V4bljeyMI5O7nt8bF09ThjRhpPbx7Fp25vZVKDcdz0Xr77WBPTmivs6s340rLxPNnWwNJLt5ApXHV3C3XB6I3KdQ+O479WNXDZqduZeUD/7zX8J08f//XMERMRQsXxzMnNQTNmHdxHY2POg6sbuGtlI0GUk2bs4d75mzmkqY8RdcYXHhjP7t0TOailws3nvsYHju5ixoHdfGnpBP71kWZGlJ3Tjt7Jl8/qoFSGhT9s4fzvTqY/N46b3sMPP72Bqc39fP7Mbcw4sJvrH26m7b46jp3aByYcMHbwJiUbbzl0W8vY7manHyNQ9hQGUXPe/vnDuPzU7cw5ejeleihLBaEEnvBIdKG7IowqQ3CIQoH+jL5+JWQ5GhJSDK64GG5Cf+6UM0FVcSKK4x6IYlTyQDnktM6fyZJLN/KXbxI6l33vkweqS5YnYzIUyKWCi6E+QIMaRubUERERolSIISCeEcRprJOa4UokwetAXdnQUOQSELWSEKQ6dSVFA0QibkJFnECqRHVZBVQxBuDKINjG1IUCkA3AHUNxSFWminnIwZXMjJyIuBLdQSLqCgTwjEBlAHVKojfqAXFPd5eUXwp4iJSj0oeh4riUcCJhCCLk7mT7Rhbg5y+M4rK7JiE4RkyNygO4gwiTxvTzwKc3gjpn3zCVddvqwY2hcKcJiDkajFmT+7nxE5vJPDWwOMTV2dDAyRECPbmwaWcpGasClmEKWsDkKsPBne1dgZc7tMDjOgTBdhTBHaaMrRAsw4Aoui9hMxRwcqJUQAWJEZQEAQSCSwHmAi6KUFfc0hBPwM3wQY/gBgim4Ci5gmAEcWwIMjK05y0QvARRIWgNRLk7roa6Ip487FRqhCUgmAj44FTRqk2QRCvVKiCAlzDJh2d8WkA/ooZRQTxDJEco4dFAIZccR4hScFvPiGpg+kbC/vuM9xzXEsEtOUqytJtUUsUblufFBgzwUqLtRZWxxGTIPCBUCG5IWg/BlFwiPkRkKqm6iEeCQkUikjIJkRLQOxzPa409uYJEJYojYgQLuCRi7kXl0L1ppEIYQmDIBdQdVMmRAa3IA5HKMBO2aEBBnEAOIUdEcVeiRrABQp4MVZCcqKQdESdqSsD3HtHFgg9uw1T5yOzXOe8vdxKkwPYIuhcpUaHoHW9WYn1o41UcsaTXuCV8nkuOiNAyQrjl7zYze1rPXjpU2onMBXMwhOBlpk3M+fdzt7Li5XpOPHg3187dxhPrRw1TrBriEyVCoCYDihtCQLyfpvHdnHRkFzOm9IIleGyxWkX6MUm7Mn5EL3deuJl/eXgCL702ipsu2ML8Oyfxuy2lYRmfDR02SrI/BbQXwMu0xNqNGUcuOJSuPRmtEyqYGUEKSc7KlFSQmPOPc3bwaFs9N/x8PHd+cjPffrSJ+58ZjWOI/AmNd5SoedGqUw0vUaJiOXkIdO0BK7hAJgYeEgADjIhLYNGy8XTnZRzjopsn0tGTckgk7mu1/iMTthA9A6mZoBm5R0IQ3C1p+LV6npiXeEQ1T/BYoKuvVMgbzq5eJUgJd3APf9qYH8hpAQ14rBRaC5RxcEE0eRKvFOqu4F5Co+Ok8yKOeEj9wR00R4Ypm+zD1UZGVR1OqhYIFjzJJZ4DVng21H7n5Fgo4IF54YgkWAkR94DgwzdeCpkNjJyqkQO6TAJ3TtFecaAUk35ebShSxK4TC2k6YR6XdL17AtOG12q54bWFYdXnWU0GNNFBFGI0Qzw9kIzokVIC6rgYwQ0VKe6arHAc8ZwoWdGUBBcnYonmaYKzkmDlkDK1qyE1nTKiXodJhUAoEnqoalNMI1QTWkxDgzSNSDQtUl8fOXBcf1HaBLwvxb47KsKksTmYowKTGiN7eoVoDAnMkFQQ8AotjcmRUSDq0MOFrDAloUBXkFCDBC4Ja2cI7z2sm6euaUvGmNd+LxJQi+SkEDKU//zkRqIn3VGH7COGaRJ5g+dUJFAueILLEIqZGFpFjgO6eFIDLjhhF8cf0gWeITIQiy5QilkavXjC8FIsOgGzonRK3OeaUX1uVtDM+Sd3cERr5+Cel0IAVRNUBYsJtzgZF5/UUQy3MmIxaHNJRDpqTikm3B6lei6VRCv6ge5DMYmSnl0b2LqCO1fN6SAOof1rFHItGFOuBlJKlSY4USMmYJpTMi2211MlQKmEPKnDVBIQQ4k4QRKr2pdxm2iimUlWyZK6HBRMarsxyGTEsypXdTdMnUhGMEM8FHFcwOLo5AqBMlESWU7aYiCXSKBU9ORCukCHnBhmuRBViO5o4mNEDwSSg3TQgPNgViSseiCY1nR1L3YzeKoKpiHRtUKT8UJ/cZEajk8nMqKmQoAX9yvC001qWn1V+jC0NnnMJaAYUQcUpP8VaMU3Ypo7eYagURCnaFLZwMglFOKECCH2FxzVEUp7DRHStNCj1jiAOrhUUHHS16nxBS26sRqZB6qJUXVCOSrgZNFxSSKWVWfA1X4DVGI0XbvlwOUVT9IcJEibUUnxl9YHkjqvSQliCUTA+tMkukgqdyeGiHskJ6B7hZAQagKSe6AkGRqVfom4BSDDgiOepiIiGbmW0ksbktd2W8URCezubei66b4vviruzp2fm7t4+sRX3y24JhlO1EUseCxHl1wC4K6eGorhpbyu3D328EmvHpOIshdDYKdPlFJ1Jzxpk2kAUR2e5ShCFKX99bFbOjrHrkuDElORYBJdTSoqlHLBMkdzESHGiGaiHZ1j1i1d8Y4FNy77whYZziT7jn86a/EZ73hiob4xiaiIEKIgIZUzCxHJlTw4QZL22fbKAU+/7aLfHDu8Qdwwx/BLF825/pRjV83LiBiCFFJ21fNWNK0sacLgZda/NuHZoy5cdfTwp4j7YPzlH77imKkt22e1jO+YMW7U7ik3/+wDH739J1fWysDSa0775inH/fpTalnR4Cq1SboUiagF2NvYMXHNEec9e/je9z93zuKGs97+q69s2dn44qs7W59u2zLhidt+sqD/j6KBi86b9/5Z09adPWNa22mTx+6a/MWP9+OWxpFiwsNPH/cVYFX192ddc/+lSxfNsVNmrZinBd6JRNQEUYMYiRrYvK3lpSPOf6PhAEdNXnf6KUc/dbFojnuSANt/cFPvc5unPPTMhulLV750xG23/fgKe1PPX3jG51rPOv43X/yLo357QZb1ow65KRvaW1Zv2HrQY+vam3/9ys6mZze1N6/6wU8X/N7Oc/c1p1/3weOenF9t66EovZkq69snvDDj/GdmvJkXL5m7cPrU5u2zDmjddvShzVtPPPyAV04s1xWvx3jkt5umPHb/kycs+MKtX3vsDcbfedWHvnbG7FX/AMbO7pHdv3nxyFt/9eJht1x7x9ef+EPj8OHFJ99+4lt/+7GcJDgpsLF9wprDz3/m8D/0XpfMXTj9+IPXffhdRz1/3sFN7YcZwnObpj52/f2nn/z9Bxf2suTqOdd13dPqm75/aMdXLvz7udX3aoZzPLT4fbfvua/Fe5Yd4G23zNj00VOuzYZ7z3lnXzZz5Q2zH++6p9Xbbn7reneHziUH+St3vOX1/WH03seN8/923l2fO+1r+/u+y7/63qVd97b4gnM+O5t13zty0+t3T/Ir/+Yzs/f3g/b38dEPLM7Wfudtbb33TPJPfGjReK7++KUndd3T6ruXTfRffPWEH837yGeP+v9m9Lmnfqnh9oVnLu5ccpB33dPq9y76qxs9vZXlXPGxzx5/8akP3Nc0vrO1bM7OXWN2rdgw/c7V66f96LktUx64/cEF+Z/7jcQrz7nymGPf0nb2sdPXfviglm2HiQm9lYwf/vLdl1/w9R989f80qc+fd8n73zNj9SXHTt9wZn25v/Y2zZ7eunxD+8QVL2+fsHJr5/jfbdsxbs2O7pGbt3eNXnfHQwv/qIV97ORrszEj+1qaRndNmziuY2bL2M5DW8fsmPmW1m3vbGrc0SzFSMhjmedfa1n5+PPHfGveN7578z512MvPuWzW2w5ef8ahE9vfPXXS1neOH9HVEN1wlQLFakKA5lSsRE9fXXd3X0N7byV0U5OYwMU000Bd6G8sh/6GUSN7G8tqiMaBWa1XO3OkPyqbtk96um3bQcvXbJr4+OX/9u0lw8Y255z8ZZ00rvOI1rF7Dhk3ZvshrWM6D28a0Tu5YWR3y8j6nvGj6nua68uVxkCFUiAZp4knmAt9eZmK09/V3fDq7r4R7bu767f39tR3vrZr9EvbXh+9/tVdTas7ehs33LTkmvZ93b3/GQAWf7pcrU4+bAAAAABJRU5ErkJggg==\") no-repeat;\n  width: 50px;\n  height: 65px;\n  display: inline-block;\n  vertical-align: middle; }\n\n.fz-22 {\n  font-size: 22px; }\n\n.clr_6 {\n  color: #666; }\n\n.spl_txt {\n  margin-top: 35px;\n  color: #fff;\n  font-size: 24px;\n  font-weight: 400; }\n\n.tu {\n  text-transform: uppercase; }\n\n.tc {\n  text-transform: capitalize; }\n\n.login_form {\n  width: 360px; }\n\n/*form styles here */\n.forgotPasswordForm {\n  width: 100%;\n  margin: 15% 0 0 0;\n  float: left; }\n\n.horizontal_form {\n  width: 100%;\n  margin: 15% 0 0 0;\n  float: left; }\n\n.form-field {\n  float: left;\n  width: 100%; }\n\n.form-field label {\n  color: #676767;\n  display: block;\n  margin-bottom: 10px;\n  font-family: 'GothamRoundedBook';\n  font-size: 14px; }\n\n.form-field .form_input {\n  border: 1px solid #1c2463;\n  background: #fff;\n  padding: 5px;\n  width: 80%;\n  float: left;\n  outline: none;\n  line-height: 28px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.fp {\n  margin-top: 10px;\n  text-align: right;\n  color: #676767;\n  float: right;\n  -webkit-transform: translateX(-45%);\n          transform: translateX(-45%);\n  padding-right: 5px;\n  text-decoration: none;\n  font-family: 'GothamRoundedBook';\n  font-size: 14px; }\n\n.fp:hover {\n  color: #f6b118; }\n\n.form-field .form_submit, .form_submit {\n  width: 165px;\n  background: #f6b118;\n  color: #1c2463;\n  border-radius: 25px;\n  text-align: center;\n  border: medium none;\n  outline: none;\n  padding: 10px 0;\n  font-size: 18px;\n  font-family: \"Roboto\";\n  font-weight: 500;\n  cursor: pointer; }\n\n.signup {\n  color: #1c2463;\n  font-weight: 500;\n  font-family: \"GothamRounded-Medium\"; }\n\n.login_copyright {\n  font-size: 13px;\n  position: absolute;\n  bottom: 30px;\n  left: 20%;\n  right: 20%; }\n\n/*for Signup*/\n.form-field select {\n  padding: 10px;\n  width: 80%;\n  border: 1px solid #1c2463;\n  font-family: 'GothamRoundedBook';\n  color: #676767; }\n\n/*for register */\n.form_grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 75% 25%;\n      grid-template-columns: 75% 25%;\n  grid-gap: 1em; }\n\n.form_grid .form-field .form_input {\n  width: 100%; }\n\n.shoplogo, .form-field input {\n  font-family: 'GothamRoundedBook';\n  color: #676767;\n  font-size: 14px; }\n\n.field_grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr;\n  grid-gap: 1em; }\n\n.field_grid select, .textarea textarea {\n  width: 100%; }\n\n.textarea {\n  grid-column: 1/3; }\n\ntextarea {\n  border: 1px solid #1c2463;\n  resize: none;\n  font-size: 14px;\n  font-family: 'GothamRoundedBook';\n  color: #676767;\n  height: 100px;\n  padding: 5px; }\n\n.form-field .register {\n  color: #1d2463;\n  font-family: \"GothamRounded-Medium\"; }\n\n.cancel {\n  -webkit-transform: translate3d(20px, 0px, 0);\n          transform: translate3d(20px, 0px, 0);\n  color: #676767;\n  display: inline-block;\n  font-family: 'GothamRoundedBook'; }\n\n.img-pic {\n  width: 250px;\n  height: 250px;\n  background: #cacaca;\n  -webkit-transform: translateY(10px);\n          transform: translateY(10px);\n  grid-row: 1/6;\n  position: absolute; }\n\n.footer {\n  text-align: center;\n  background: #5b5b5b;\n  color: #fff;\n  font-size: 14px;\n  padding: 15px 0;\n  -webkit-transform: translate3d(0, 45px, 0);\n          transform: translate3d(0, 45px, 0); }\n\n.mtb-20 {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n\n/*owl module styles strt here */\n.carousel .owl-nav {\n  position: absolute;\n  top: 25%;\n  display: block;\n  width: 100%; }\n\n.carousel .owl-theme .owl-nav [class*='owl-'] {\n  position: absolute;\n  left: -65px;\n  width: 45px;\n  font-size: 36px;\n  height: 45px;\n  border: 2px solid #2c2c76;\n  border-radius: 100%;\n  line-height: 1;\n  color: #2c2c76; }\n\n.carousel .owl-theme .owl-nav [class*='owl-next'] {\n  left: inherit;\n  right: -65px; }\n\n.carousel .owl-theme .owl-nav [class*='owl-']:hover {\n  background: none;\n  color: #2c2c76; }\n\n.carousel .owl-theme .owl-nav [class*='owl-']:focus {\n  outline: medium; }\n\n/*footer social lnks */\n/* .g_play{background: url('assets/images/sprite.png')no-repeat;float: left;} */\n.social .socio {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/sprite.png") + ") no-repeat; }\n\n.d_icon {\n  width: 180px;\n  height: 60px;\n  float: left;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/sprite.png") + ") no-repeat;\n  background-position: 0px 0px; }\n\n.socio {\n  width: 45px;\n  height: 45px;\n  float: left;\n  margin: 10px 10px 0 0; }\n\n.d_icon:nth-child(2) {\n  margin-left: 20px;\n  background-position: -200px 0px; }\n\n.social li a.fb {\n  background-position: -5px -105px; }\n\n.social li a.tw.socio {\n  background-position: -55px -105px; }\n\n.social li a.insta.socio {\n  background-position: -105px -105px; }\n\n/*filters page common styles */\n.filters .header .bg {\n  background: none; }\n\n.filters .shop_dtls {\n  display: none; }\n\n.share {\n  position: absolute;\n  top: 0px;\n  right: 10px; }\n\n.sicon {\n  width: 35px;\n  height: 35px;\n  background: #f6f6f6;\n  position: absolute;\n  right: 10px;\n  top: 5px;\n  color: #262d69;\n  font-size: 24px;\n  text-align: center;\n  border-radius: 5px; }\n\n/*details page */\n.details_page .footer_top {\n  margin: 0px; }\n\n.details_page .shop_dtls {\n  padding: 10px 0 !important; }\n\n.modal {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.65);\n  right: 0;\n  left: 0; }\n\n.modal_body {\n  width: 30%;\n  background: #fff;\n  padding: 20px 25px 0 45px;\n  height: 100%; }\n\n.body_filters aside.categories {\n  position: fixed;\n  width: 35% !important;\n  top: 0;\n  z-index: 5;\n  left: 0; }\n\n.body_filters .toggle_modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.65);\n  z-index: 3; }\n\n.body_filters.closeOverlay aside.categories {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  transition: 0.3s; }\n\n.body_filters.closeOverlay .filters .toggle_modal {\n  display: none; }\n\n.over_flow {\n  overflow: hidden; }\n\n.body_filters .details_page .toggle_modal {\n  display: none; }\n\n.body_filters .toggle_modal {\n  display: none; }\n\n.body_filters .filters .toggle_modal {\n  display: block; }\n\n/*for media queries */\n@media (min-width: 320px) and (max-width: 767px) {\n  body {\n    background: #f6f6f6; }\n  .container, .form_wrapper, .wrapper, .login_form {\n    width: 100%; }\n  .grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n    margin: 0;\n    width: 100%;\n    border: medium none; }\n  .wrapper, .form_wrapper {\n    padding: 15px; }\n  .wrapper h1 {\n    font-size: 18px; }\n  .spl_txt {\n    margin-top: 15px;\n    font-size: 14px; }\n  .horizontal_form {\n    margin-top: 10%; }\n  .login_copyright {\n    display: none; }\n  .fz-22 {\n    font-size: 14px; }\n  .login_form p {\n    margin-top: 5px;\n    font-size: 13px; }\n  .horizontal_form {\n    margin-top: 5%; }\n  .mt-50 {\n    margin-top: 25px; }\n  .form-field.mt-30 {\n    margin-top: 15px; }\n  /*register form css */\n  .form_grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr; }\n  .flex-container {\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n  .form_items {\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%); }\n  .form_grid .shoplogo {\n    grid-area: 1;\n    position: initial;\n    padding: 0;\n    text-align: center; }\n  .shoplogo {\n    padding-left: 0px !important;\n    text-align: left !important; }\n  .img-pic {\n    position: initial; }\n  .flex-container .form_items {\n    text-align: left !important; }\n  .form_items a:first-child {\n    -webkit-transform: translateX(0) !important;\n            transform: translateX(0) !important; }\n  .flex-container .form_submit.register {\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%); }\n  .logo img {\n    width: 100%;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); }\n  .bg {\n    background-size: cover; }\n  .bg .shop_dtls {\n    padding: 10px 0 !important; }\n  .flex-container .form_submit.register {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n    padding: 5px 10px;\n    width: auto;\n    margin: 10px 0; }\n  .vb-space {\n    padding: 10px 0 !important; }\n  .addshop, .shop_dtls {\n    font-size: 14px; }\n  .strong {\n    padding: 0 !important; }\n  .banner .img_overlay img {\n    min-height: auto !important; }\n  .ca_img .des {\n    left: 0px;\n    right: 0px; } }\n\n@media (min-width: 320px) and (max-width: 480px) {\n  .field_grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr; }\n  .textarea {\n    -ms-grid-column: 1;\n        grid-column: 1; }\n  .carousel .owl-theme .owl-nav [class*='owl-next'] {\n    right: 0; }\n  .carousel .owl-theme .owl-nav [class*='owl-prev'] {\n    left: 0px; }\n  .d_icon:nth-child(2) {\n    margin: 10px 0; }\n  /* .body_filters{overflow: hidden;} */\n  .body_filters aside.categories {\n    width: 85% !important;\n    height: 100%;\n    overflow-y: auto; } }\n\n@media (min-width: 481px) and (max-width: 767px) {\n  .fp {\n    -webkit-transform: translateX(-95%);\n            transform: translateX(-95%); } }\n\n@media (min-width: 768px) and (max-width: 992px) {\n  body {\n    background: #fff; }\n  .container {\n    width: 750px; }\n  .form_wrapper, .wrapper, .login_form {\n    width: 100%; }\n  .grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n    margin: 0;\n    width: 100%;\n    border: medium none; }\n  .wrapper, .form_wrapper {\n    padding: 15px; }\n  .horizontal_form {\n    margin-top: 10%; }\n  .form-field .fp {\n    -webkit-transform: translate3d(-100%, 50px, 16px);\n            transform: translate3d(-100%, 50px, 16px); }\n  .login_copyright {\n    display: none; }\n  .logo {\n    width: 35%; }\n  .or {\n    margin-top: 20px; }\n  .filter_search {\n    box-shadow: 2px 2px 15px #000; }\n  /* filters page */\n  .detect_location {\n    padding: 10px 0 10px 35px !important;\n    display: inline-block !important;\n    vertical-align: middle;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap; }\n  .search {\n    display: inline-block !important; }\n  .article {\n    width: 100% !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageLoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_navigationService__ = __webpack_require__("../../../../../src/app/helper/navigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
function passwordConfirming(c) {
    if (!c.parent || !c)
        return;
    var pwd = c.parent.get('rpassword');
    var cpwd = c.parent.get('confirm_password');
    if (!pwd || !cpwd)
        return;
    if (pwd.value !== cpwd.value) {
        return { invalid: true };
    }
}
var PageLoginComponent = (function () {
    // constructor(private userService: UserService, private router: Router, private navservice: NavService) {
    function PageLoginComponent(userService, router, navservice, dialog, formDirective) {
        this.userService = userService;
        this.router = router;
        this.navservice = navservice;
        this.dialog = dialog;
        this.formDirective = formDirective;
        this.url = '/api/';
        this.loginDiv = false;
        this.forgotPwdDiv = true;
        // For Login
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(EMAIL_REGEX)])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]))
        });
        // For Forgot password
        this.forgotPasswordForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            femail: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(EMAIL_REGEX)])),
        });
        // For Register
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            first_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)])),
            last_name: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)])),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(EMAIL_REGEX)])),
            mobile: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(12), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)])),
            // rpassword: new FormControl('', Validators.compose([Validators.maxLength(20), Validators.minLength(4)])),
            //confirm_password: new FormControl('', Validators.compose([passwordConfirming])),
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(30), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(3)]))
        });
        this.User = {};
        this.validatepathh();
        this.navservice.setStaus(false);
    }
    PageLoginComponent.prototype.forgotPassword = function (id) {
        // this.userService.readshopbyid(this.url, shopid).subscribe(data => {
        // this.shopList = data.data;
        this.openDialog();
        // });
    };
    PageLoginComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(ForgotpasswordDialogComponent, {
            width: '450px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    PageLoginComponent.prototype.ngOnInit = function () {
    };
    // Function For login
    PageLoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var logindata = {
            username: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };
        this.userService.login(this.url, logindata)
            .subscribe(function (data) {
            console.log(data);
            _this.status = 'Login Success';
            localStorage.setItem('userDetails', JSON.stringify(data));
            localStorage.setItem('useremail', _this.loginForm.get('email').value);
            localStorage.setItem('password', _this.loginForm.get('password').value);
            _this.router.navigate(['dashboard']);
        }, function (err) {
            console.log(err.error.message);
            _this.status = err.error.message;
        });
    };
    PageLoginComponent.prototype.showForgotForm = function () {
        this.loginDiv = true;
        this.forgotPwdDiv = false;
    };
    PageLoginComponent.prototype.showLoginForm = function () {
        this.loginDiv = false;
        this.forgotPwdDiv = true;
    };
    PageLoginComponent.prototype.onForgotSubmit = function () {
        var _this = this;
        var forgotpassworddata = {
            username: this.forgotPasswordForm.get('femail').value
        };
        this.userService.forgotpassword(this.url, forgotpassworddata)
            .subscribe(function (data) {
            _this.fpstatus = data.message;
        }, function (err) {
            _this.fpstatus = err.error.message;
        });
    };
    // Function for Register
    PageLoginComponent.prototype.onRegisterSubmit = function (registerForm, formDirective) {
        var _this = this;
        var regdata = {
            firstName: this.registerForm.get('first_name').value,
            lastName: this.registerForm.get('last_name').value,
            email: this.registerForm.get('email').value,
            phoneNumber: this.registerForm.get('mobile').value,
            // password: this.registerForm.get('rpassword').value,
            address: this.registerForm.get('location').value,
            type: 'agent'
        };
        this.userService.register(this.url, regdata)
            .subscribe(function (data) {
            _this.statusr = data.message;
            formDirective.resetForm();
            registerForm.reset();
        }, function (err) {
            _this.statusr = err.error.message;
        });
    };
    // verify whether user is logged in or not
    PageLoginComponent.prototype.validatepathh = function () {
        var path = window.location.pathname;
        var user = localStorage.getItem("userDetails");
        if ((path === '/') && (user != null)) {
            this.router.navigate(['dashboard']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], PageLoginComponent.prototype, "myform", void 0);
    PageLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-page-login',
            styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_4__helper_navigationService__["a" /* NavService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroupDirective"]])
    ], PageLoginComponent);
    return PageLoginComponent;
}());

var ForgotpasswordDialogComponent = (function () {
    function ForgotpasswordDialogComponent(userService, dialog, dialogRef, data) {
        this.userService = userService;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.url = '/api/';
        // For Forgot password
        this.forgotPasswordForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(EMAIL_REGEX)]))
        });
    }
    ForgotpasswordDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    // Function For Forgot password
    ForgotpasswordDialogComponent.prototype.onForgotPasswordSubmit = function () {
        var _this = this;
        console.log(this.forgotPasswordForm);
        var forgotpassworddata = {
            username: this.forgotPasswordForm.get('email').value
        };
        this.userService.forgotpassword(this.url, forgotpassworddata)
            .subscribe(function (data) {
            console.log(data);
            _this.onNoClick();
            _this.cstatus = data.message;
            _this.updateDialog();
        }, function (err) {
            _this.onNoClick();
            console.log(err);
            _this.cstatus = err.error.message;
            _this.updateDialog();
        });
    };
    ForgotpasswordDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    ForgotpasswordDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/login/forgotpassword-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/forgotpassword-dialog-component.scss")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], ForgotpasswordDialogComponent);
    return ForgotpasswordDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/preloader.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_service__ = __webpack_require__("../../../../../src/app/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreloaderDirective = (function () {
    function PreloaderDirective(el, router, layoutService) {
        var _this = this;
        this.el = el;
        this.router = router;
        this.layoutService = layoutService;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
        this.subscription = layoutService.preloaderState$.subscribe(function (state) {
            _this.updatePreloader(state);
        });
    }
    PreloaderDirective.prototype.ngAfterViewInit = function () {
        this.$el = $(this.el.nativeElement);
    };
    PreloaderDirective.prototype.active = function () {
        if (this.$el) {
            this.$el.removeClass('hide').addClass('active');
        }
    };
    PreloaderDirective.prototype.hide = function () {
        if (this.$el) {
            this.$el.addClass('hide').removeClass('active');
        }
    };
    // Shows and hides the loading spinner during RouterEvent changes
    PreloaderDirective.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationStart */]) {
            this.active();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
            this.hide();
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationCancel */]) {
            this.hide();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationError */]) {
            this.hide();
        }
    };
    //
    PreloaderDirective.prototype.updatePreloader = function (state) {
        // console.log('change state')
        if (state === 'active') {
            this.active();
        }
        if (state === 'hide') {
            this.hide();
        }
    };
    PreloaderDirective.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    };
    PreloaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[myPreloader]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_2__layout_service__["a" /* LayoutService */]])
    ], PreloaderDirective);
    return PreloaderDirective;
}());



/***/ }),

/***/ "../../../../../src/app/search-overlay/open-search-overlay.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenSearchOverlaylDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__("../../../../../src/app/layout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenSearchOverlaylDirective = (function () {
    function OpenSearchOverlaylDirective(el, layoutService) {
        this.el = el;
        this.layoutService = layoutService;
    }
    OpenSearchOverlaylDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var $el = __WEBPACK_IMPORTED_MODULE_2_jquery__(this.el.nativeElement);
        var $body = __WEBPACK_IMPORTED_MODULE_2_jquery__('#body');
        $el.on('click', function (e) {
            _this.openOverlay();
        });
    };
    OpenSearchOverlaylDirective.prototype.openOverlay = function () {
        this.layoutService.updateSearchOverlayState('open');
    };
    OpenSearchOverlaylDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[myOpenSearchOverlay]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]])
    ], OpenSearchOverlaylDirective);
    return OpenSearchOverlaylDirective;
}());



/***/ }),

/***/ "../../../../../src/app/search-overlay/search-overlay.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"app-overlay\" mySearchOverlay>\n  <div class=\"app-overlay-inner\">\n    <div class=\"overlay-header\">\n      <a href=\"javascript:;\" id=\"overlay-close\" class=\"overlay-close\">\n        <i class=\"material-icons\">close</i>\n      </a>\n    </div>\n    <div class=\"overlay-content\">\n      <input id=\"overlay-search-input\"\n           class=\"overlay-search-input\" \n           placeholder=\"Search...\"\n           >\n\n      <div class=\"text-small text-muted\">\n        <span>Press <em>Esc</em> key to dismiss</span>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/search-overlay/search-overlay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSearchOverlayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSearchOverlayComponent = (function () {
    function AppSearchOverlayComponent() {
    }
    AppSearchOverlayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app-search-overlay',
            styles: [],
            template: __webpack_require__("../../../../../src/app/search-overlay/search-overlay.component.html")
        })
    ], AppSearchOverlayComponent);
    return AppSearchOverlayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search-overlay/search-overlay.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOverlayDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout_service__ = __webpack_require__("../../../../../src/app/layout.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchOverlayDirective = (function () {
    function SearchOverlayDirective(el, layoutService) {
        var _this = this;
        this.el = el;
        this.layoutService = layoutService;
        this.subscription = layoutService.searchOverlayState$.subscribe(function (state) {
            _this.updateSearchOverlay(state);
        });
    }
    SearchOverlayDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.$el = $(this.el.nativeElement);
        this.$body = $('#body');
        this.$searchInput = this.$el.find('#overlay-search-input');
        this.$closeOverlayBtn = this.$el.find('#overlay-close');
        this.$el.on('keyup', function (e) {
            if (e.keyCode === 27) {
                _this.closeOverlay();
            }
        });
        this.$closeOverlayBtn.on('click', function (e) {
            _this.closeOverlay();
            e.preventDefault();
        });
    };
    SearchOverlayDirective.prototype.openOverlay = function () {
        var _this = this;
        this.$body.addClass('overlay-active');
        // [delay] should >= `visibility` transition duration in CSS, see _overlay.scss
        // otherwise auto-focus won't work since element is not there yet
        if (this.$searchInput) {
            setTimeout(function () {
                _this.$searchInput.focus();
            }, 301);
        }
    };
    SearchOverlayDirective.prototype.closeOverlay = function () {
        this.$body.removeClass('overlay-active');
        if (this.$searchInput) {
            this.$searchInput.val(function () {
                return this.defaultValue;
            });
        }
    };
    SearchOverlayDirective.prototype.updateSearchOverlay = function (state) {
        if (state === 'open') {
            this.openOverlay();
        }
    };
    SearchOverlayDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SearchOverlayDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mySearchOverlay]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__layout_service__["a" /* LayoutService */]])
    ], SearchOverlayDirective);
    return SearchOverlayDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slim_scroll_directive__ = __webpack_require__("../../../../../src/app/shared/slim-scroll.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import { EChartsDirective } from './echarts.directive';

var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [],
            declarations: [
                // EChartsDirective,
                __WEBPACK_IMPORTED_MODULE_1__slim_scroll_directive__["a" /* SlimScrollDirective */],
            ],
            exports: [
                // EChartsDirective,
                __WEBPACK_IMPORTED_MODULE_1__slim_scroll_directive__["a" /* SlimScrollDirective */],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/slim-scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlimScrollDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll_jquery_slimscroll_min_js__ = __webpack_require__("../../../../jquery-slimscroll/jquery.slimscroll.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll_jquery_slimscroll_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery_slimscroll_jquery_slimscroll_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlimScrollDirective = (function () {
    function SlimScrollDirective(el) {
        this.el = el;
    }
    SlimScrollDirective.prototype.ngAfterViewInit = function () {
        var $el = $(this.el.nativeElement);
        $el.slimScroll({
            height: this.scrollHeight || '100%'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SlimScrollDirective.prototype, "scrollHeight", void 0);
    SlimScrollDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[mySlimScroll]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], SlimScrollDirective);
    return SlimScrollDirective;
}());



/***/ }),

/***/ "../../../../../src/app/shop/editshop-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Shop Details</h4>\n\n<form class=\"\" [formGroup]=\"editShopForm\"  (ngSubmit)='onEditShopSubmit()'>\n    <mat-dialog-content>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data?.id}}\" formControlName=\"shopid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Name\" [(ngModel)]=\"data.name\" value=\"{{data?.name}}\" required formControlName=\"shopName\">\n        <mat-error>\n            Shop name should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"time\" placeholder=\"Open Time\" [(ngModel)]=\"data.timeFrom\" value=\"{{data?.timeFrom}}\" required formControlName=\"timeFrom\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"time\" placeholder=\"Close Time\" [(ngModel)]=\"data.timeTo\" value=\"{{data?.timeTo}}\" required formControlName=\"timeTo\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Owner Name\" [(ngModel)]=\"data.shopOwner.ownerName\" value=\"{{data.shopOwner?.ownerName}}\" required formControlName=\"shopOwner\">\n        <mat-error>\n            Shop Owner should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"data.phoneNumber\" value=\"{{data?.phoneNumber}}\" required formControlName=\"phoneNumber\">\n        <mat-error *ngIf=\"editShopForm.hasError('minlength','phoneNumber')\">\n            Phone Number should not less than 8\n        </mat-error>\n        <mat-error *ngIf=\"editShopForm.hasError('maxlength','phoneNumber')\">\n            Phone Number should not less than 12\n        </mat-error>\n        <mat-error *ngIf=\"editShopForm.hasError('pattern','phoneNumber')\">\n            Only numbers allowed !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category\" [(ngModel)]=\"data.category\" value=\"{{data?.category}}\" required formControlName=\"category\">\n        <mat-error>\n            Category should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"data.description\" value=\"{{data?.description}}\" required formControlName=\"description\">\n        </textarea>\n        <mat-error>\n            Description should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Address\" [(ngModel)]=\"data.address\" value=\"{{data?.address}}\" required formControlName=\"address\">\n        <mat-error>\n            Location should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <!-- <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Location\" [(ngModel)]=\"data.location\" value=\"{{data.location}}\" required formControlName=\"location\">\n        <mat-error>\n            Location should not less than 3\n        </mat-error>\n    </mat-form-field> -->\n    </mat-dialog-content>\n\n    <div mat-dialog-actions>\n        <button mat-raised-button mat-dialog-close style=\"margin: auto;\" class=\"mat-raised-button\" color=\"warn\"> Cancel </button>        \n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editShopForm.valid\" mat-raised-button color=\"primary\">Update</button>\n    </div>\n    <br>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/shop/editshop-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/shop-dialog-component-activate.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to activate this customer ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onActivateClick( data )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shop/shop-dialog-component-confirm.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to deactivate this customer ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onDeactivateClick( data )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shop/shop-dialog-component-confirm.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-8\">\n            <h2 class=\"article-title\" style=\"color: #f4b11b;\">All Shops ({{shopsList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n          <div class=\"col-md-2\" style=\"margin: auto\">\n              <mat-chip-list>\n              <mat-chip class=\"pull-right addshopbtn\"  selected=\"true\" (click)=\"createshopopen()\"><i class=\"material-icons\">add_circle_outline</i>&nbsp;&nbsp; New shop</mat-chip>\n              </mat-chip-list>\n          </div>\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Shops\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row shopheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">Shop Name</div>\n                  <div class=\"col-md-2\">Shop Owner</div>\n                  <div class=\"col-md-2\">Category</div>\n                  <div class=\"col-md-4\">Description</div>\n                  <div class=\"col-md-1\"></div>\n                </div>\n                  <ul class=\"list-group shopslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let shop of shopsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p } \">\n                        <div class=\"row\">\n                          <div class=\"col-md-1\">\n                            <button title=\"Active\" *ngIf=\"shop?.active == true \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">shopping_cart</mat-icon> </button>\n                            <button title=\"De-Active\" *ngIf=\"shop?.active == false \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">remove_shopping_cart</mat-icon> </button>\n                            \n                          </div>\n                          <div class=\"col-md-2\">{{shop?.name}}</div>\n                          <div class=\"col-md-2\">{{shop.shopOwner?.ownerName}} <br>{{shop?.shopOwner?.ownerPhoneNum}} </div>\n                          <div class=\"col-md-2\">\n                              <mat-chip-list>\n                                <mat-chip style=\"color:rgb(0, 0, 0) !important\">{{shop?.category}}</mat-chip>\n                            </mat-chip-list>\n                          </div>\n                          <div class=\"col-md-4\">{{shop?.description}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(shop?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{shop?.id}}\">\n                                    <!-- <a (click)=\"viewData( shop?.id )\" >View</a> -->\n                                    <a class=\"pointer\" (click)=\"editData( shop?.id )\" >Edit</a>\n                                    <a class=\"pointer\" *ngIf=\"shop?.active == false\" (click)=\"activateShop( shop?.id )\" >Activate</a>\n                                    <a class=\"pointer\" *ngIf=\"shop?.active == true\" (click)=\"deactivateShop( shop?.id )\" >Deactivate</a>\n                                    \n                                </div>\n                            </div>\n                              <!-- <mat-chip-list>\n                            <mat-chip *ngIf=\"shop.status == 'Y' \" color=\"accent\" selected=\"true\">Active</mat-chip>\n                            <mat-chip *ngIf=\"shop.status == 'N' \" color=\"warn\" selected=\"true\">De-Active</mat-chip>\n                            <mat-chip *ngIf=\"shop.status == 'W' \" color=\"primary\" selected=\"true\">Waiting For Approval</mat-chip>\n                            <mat-chip *ngIf=\"shop.status == 'R' \" color=\"warn\" selected=\"true\">Rejected</mat-chip>\n                            </mat-chip-list> -->\n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    <!-- </table> -->\n                    </ul>\n                    <div *ngIf=\"shopsList && (shopsList | filter: searchText).length === 0\">\n                        <h4 style=\"text-align: center\" >No Data Found</h4>\n                      </div>\n                    <div class=\"pull-right\" *ngIf=\"shopsList && (shopsList | filter: searchText).length > 0\">\n                      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"Active\" >\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                \n                <section class=\"box box-transparent\">\n                  <div class=\"box-body\">\n                    <div class=\"\">\n                      <div class=\"row shopheading\">\n                        <div class=\"col-md-1\"></div>\n                        <div class=\"col-md-2\">Shop Name</div>\n                        <div class=\"col-md-2\">Shop Owner</div>\n                        <div class=\"col-md-2\">Category</div>\n                        <div class=\"col-md-4\">Description</div>\n                        <div class=\"col-md-1\"></div>\n                      </div>\n                        <ul class=\"list-group shopslist\">\n                            <li class=\"list-group-item\" *ngFor=\"let shop of activeShopsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                              <div class=\"row\">\n                                <div class=\"col-md-1\">\n                                  <button title=\"Active\" *ngIf=\"shop?.active == true \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">shopping_cart</mat-icon> </button>\n                                  <button title=\"De-Active\" *ngIf=\"shop?.active == false \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">remove_shopping_cart</mat-icon> </button>\n                                </div>\n                                <div class=\"col-md-2\">{{shop?.name}}</div>\n                                <div class=\"col-md-2\">{{shop.shopOwner?.ownerName}} <br>{{shop?.shopOwner?.ownerPhoneNum}} </div>\n                                <div class=\"col-md-2\">\n                                    <mat-chip-list>\n                                      <mat-chip style=\"color:rgb(0, 0, 0) !important\">{{shop?.category}}</mat-chip>\n                                  </mat-chip-list>\n                                </div>\n                                <div class=\"col-md-4\">{{shop?.description}}</div>\n                                <div class=\"col-md-1\">\n                                  <!-- three dot menu -->\n                                  <div class=\"dropdown\">\n                                      <!-- three dots -->\n                                      <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(shop?.id)\">\n                                          <li></li>\n                                          <li></li>\n                                          <li></li>\n                                      </ul>\n                                      <!-- menu -->\n                                      <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{shop?.id}}\">\n                                          <!-- <a (click)=\"viewData( shop?.id )\" >View</a> -->\n                                          <a class=\"pointer\" (click)=\"editData( shop?.id )\" >Edit</a>\n                                          <a class=\"pointer\" *ngIf=\"shop?.active == false\" (click)=\"activateShop( shop?.id )\" >Activate</a>\n                                          <a class=\"pointer\" *ngIf=\"shop?.active == true\" (click)=\"deactivateShop( shop?.id )\" >Deactivate</a>\n                                      </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </li>\n                          </ul>\n                          <div *ngIf=\"activeShopsList && (activeShopsList | filter: searchText).length === 0\">\n                              <h4 style=\"text-align: center\" >No Data Found</h4>\n                            </div>\n                          <div class=\"pull-right\" *ngIf=\"activeShopsList && (activeShopsList | filter: searchText).length > 0\">\n                            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                        </div>\n      \n                    </div>\n                  </div>\n                </section>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"In Active\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n\n                <section class=\"box box-transparent\">\n                  <div class=\"box-body\">\n                    <div class=\"\">\n                      <div class=\"row shopheading\">\n                        <div class=\"col-md-1\"></div>\n                        <div class=\"col-md-2\">Shop Name</div>\n                        <div class=\"col-md-2\">Shop Owner</div>\n                        <div class=\"col-md-2\">Category</div>\n                        <div class=\"col-md-4\">Description</div>\n                        <div class=\"col-md-1\"></div>\n                      </div>\n                        <ul class=\"list-group shopslist\">\n                            <li class=\"list-group-item\" *ngFor=\"let shop of deactiveShopsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                              <div class=\"row\">\n                                <div class=\"col-md-1\">\n                                  <button title=\"Active\" *ngIf=\"shop?.active == true \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">shopping_cart</mat-icon> </button>\n                                  <button title=\"De-Active\" *ngIf=\"shop?.active == false \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">remove_shopping_cart</mat-icon> </button>\n                                </div>\n                                <div class=\"col-md-2\">{{shop?.name}}</div>\n                                <div class=\"col-md-2\">{{shop?.shopOwner?.ownerName}} <br>{{shop?.shopOwner?.ownerPhoneNum}} </div>\n                                <div class=\"col-md-2\">\n                                    <mat-chip-list>\n                                      <mat-chip style=\"color:rgb(0, 0, 0) !important\">{{shop?.category}}</mat-chip>\n                                  </mat-chip-list>\n                                </div>\n                                <div class=\"col-md-4\">{{shop?.description}}</div>\n                                <div class=\"col-md-1\">\n                                  <!-- three dot menu -->\n                                  <div class=\"dropdown\">\n                                      <!-- three dots -->\n                                      <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(shop?.id)\">\n                                          <li></li>\n                                          <li></li>\n                                          <li></li>\n                                      </ul>\n                                      <!-- menu -->\n                                      <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{shop?.id}}\">\n                                          <!-- <a (click)=\"viewData( shop?.id )\" >View</a> -->\n                                          <a class=\"pointer\" (click)=\"editData( shop?.id )\" >Edit</a>\n                                          <a class=\"pointer\" *ngIf=\"shop?.active == false\" (click)=\"activateShop( shop?.id )\" >Activate</a>\n                                          <a class=\"pointer\" *ngIf=\"shop?.active == true\" (click)=\"deactivateShop( shop?.id )\" >Deactivate</a>\n                                      </div>\n                                  </div>\n                                    \n                                </div>\n                              </div>\n                            </li>\n                          </ul>\n                          <div *ngIf=\"deactiveShopsList && (deactiveShopsList | filter: searchText).length === 0\">\n                              <h4 style=\"text-align: center\" >No Data Found</h4>\n                            </div>\n                          <div class=\"pull-right\" *ngIf=\"deactiveShopsList && (deactiveShopsList | filter: searchText).length > 0\">\n                            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                        </div>\n      \n                    </div>\n                  </div>\n                </section>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shopslist li {\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.shopheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.addshopbtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n\n@media screen and (max-width: 600px) {\n  .shopheading {\n    display: none !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shop/shop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShopComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ShoplistdataDialogComponentConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ShoplistdataDialogComponentActivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditshopdataDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shopslist_shopslist_component__ = __webpack_require__("../../../../../src/app/shopslist/shopslist.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__createshop_sidebar_createshop_sidebar_service__ = __webpack_require__("../../../../../src/app/createshop-sidebar/createshop-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var valnumber = /^[0-9][0-9]*$/;
var ShopComponent = (function () {
    function ShopComponent(userService, spinner, router, dialog, categorysidebar, subcategorysidebar, createshopsidebar) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.createshopsidebar = createshopsidebar;
        this.url = '/api/';
        this.spinner.show();
        this.shopsdata('ALL');
    }
    ShopComponent.prototype.ngOnInit = function () {
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        __WEBPACK_IMPORTED_MODULE_11_jquery__('.mat-tab-label-container').css('background', '#fff');
        __WEBPACK_IMPORTED_MODULE_11_jquery__('.mat-ink-bar').css('background-color', '#f4b11b !important');
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    ShopComponent.prototype.createshopopen = function () {
        this.createshopsidebar.createshopSidebarOpen();
    };
    ShopComponent.prototype.onTabClick = function (event) {
        var index = event.index;
    };
    ShopComponent.prototype.shopsdata = function (status) {
        var _this = this;
        this.spinner.show();
        this.userService.readshops('/api/', '').subscribe(function (data) {
            _this.shopsList = data;
            _this.activeShopsList = data.filter(function (shops) { return shops.active == true; });
            _this.deactiveShopsList = data.filter(function (shops) { return shops.active == false; });
            _this.spinner.hide();
        });
    };
    ShopComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        //$(".myDropdown"+id).toggle();
        __WEBPACK_IMPORTED_MODULE_11_jquery__(".myDropdown" + id).addClass('show');
    };
    ShopComponent.prototype.editData = function (id) {
        var shopid = {
            shop_id: id
        };
        this.spinner.show();
        var shop = this.shopsList.find(function (shop) { return shop.id == id; });
        this.shopList = shop;
        this.spinner.hide();
        this.editshopDialog();
        // this.userService.readshopbyid(this.url, shopid).subscribe(data => {
        //     this.shopList = data.data;
        //     this.spinner.hide();
        //     this.editshopDialog();
        // });
    };
    ShopComponent.prototype.deleteData = function (id) {
        var shopid = {
            shop_id: id
        };
        var dialogRef = this.dialog.open(ShoplistdataDialogComponentConfirm, {
            width: '450px',
            data: shopid,
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ShopComponent.prototype.deactivateShop = function (id) {
        var dialogRef = this.dialog.open(ShoplistdataDialogComponentConfirm, {
            width: '450px',
            data: id,
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ShopComponent.prototype.activateShop = function (id) {
        var dialogRef = this.dialog.open(ShoplistdataDialogComponentActivate, {
            width: '450px',
            data: id,
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    // Function to edit shop data
    ShopComponent.prototype.editshopDialog = function () {
        var dialogRef = this.dialog.open(EditshopdataDialogComponent, {
            width: '450px',
            data: this.shopList
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ShopComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__shopslist_shopslist_component__["b" /* ShoplistDialogComponent */], {
            width: '450px',
            data: this.shopList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    ShopComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shop',
            template: __webpack_require__("../../../../../src/app/shop/shop.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/shop.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_8__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_9__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */],
            __WEBPACK_IMPORTED_MODULE_10__createshop_sidebar_createshop_sidebar_service__["a" /* createshopSideBarService */]])
    ], ShopComponent);
    return ShopComponent;
}());

var ShoplistdataDialogComponentConfirm = (function () {
    function ShoplistdataDialogComponentConfirm(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
    }
    ShoplistdataDialogComponentConfirm.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ShoplistdataDialogComponentConfirm.prototype.onDeactivateClick = function (shopid) {
        var _this = this;
        var userdetails = {
            email: localStorage.getItem('useremail'),
            password: localStorage.getItem('password')
        };
        var reqdata = {
            active: false,
            id: shopid
        };
        this.userService.activeDeactiveShopById(userdetails, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Shop Deactivated Successfully !';
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        }, function (err) {
            _this.cstatus = err.error.message;
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    ShoplistdataDialogComponentConfirm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-confirm',
            template: __webpack_require__("../../../../../src/app/shop/shop-dialog-component-confirm.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/shop-dialog-component-confirm.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], ShoplistdataDialogComponentConfirm);
    return ShoplistdataDialogComponentConfirm;
}());

var ShoplistdataDialogComponentActivate = (function () {
    function ShoplistdataDialogComponentActivate(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
    }
    ShoplistdataDialogComponentActivate.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ShoplistdataDialogComponentActivate.prototype.onActivateClick = function (shopid) {
        var _this = this;
        var userdetails = {
            email: localStorage.getItem('useremail'),
            password: localStorage.getItem('password')
        };
        var reqdata = {
            active: true,
            id: shopid
        };
        this.userService.activeDeactiveShopById(userdetails, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Shop Activated Successfully !';
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        }, function (err) {
            _this.cstatus = err.error.message;
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    ShoplistdataDialogComponentActivate = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-activate',
            template: __webpack_require__("../../../../../src/app/shop/shop-dialog-component-activate.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/shop-dialog-component-confirm.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], ShoplistdataDialogComponentActivate);
    return ShoplistdataDialogComponentActivate;
}());

var EditshopdataDialogComponent = (function () {
    function EditshopdataDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit shop
        this.editShopForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            userId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            isFavourite: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            branchID: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            createdAt: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            updatedAt: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            shopName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator])),
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator])),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(12),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(valnumber)])),
            timeFrom: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            timeTo: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator])),
            imageUrl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            //location: new FormControl('', Validators.compose([Validators.minLength(3), this.noWhitespaceValidator])),
            shopOwner: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator])),
            shopid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
    }
    EditshopdataDialogComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 3;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    EditshopdataDialogComponent.prototype.ngOnInit = function () {
    };
    EditshopdataDialogComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_7__shopslist_shopslist_component__["b" /* ShoplistDialogComponent */], {
            width: '350px',
            data: this.shopList[0]
        });
        // this.editShopForm.setValue(this.dialogRef.componentInstance.data);
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    // Function For Edit shop
    EditshopdataDialogComponent.prototype.onEditShopSubmit = function () {
        var _this = this;
        var shopOwner = { "ownerEmail": "msrao.dari@gmail.com",
            "ownerLastName": "M",
            "ownerName": "" + this.editShopForm.get('shopOwner').value,
            "ownerPhoneNum": "" + this.editShopForm.get('phoneNumber').value,
            "website": "www.himajainfotech.com " };
        var shopdata = {
            name: this.editShopForm.get('shopName').value,
            category: this.editShopForm.get('category').value,
            description: this.editShopForm.get('description').value,
            phoneNumber: this.editShopForm.get('phoneNumber').value,
            timeFrom: this.editShopForm.get('timeFrom').value,
            timeTo: this.editShopForm.get('timeTo').value,
            address: this.editShopForm.get('address').value,
            //image_url: this.editShopForm.get('imageUrl').value,
            //location: this.editShopForm.get('location').value,
            shopOwner: JSON.stringify(shopOwner),
            id: this.editShopForm.get('shopid').value
        };
        this.userService.editshopbyid(this.url, shopdata)
            .subscribe(function (data) {
            _this.cstatus = 'Shop Updated Successfully !';
            _this.updateDialog();
        }, function (err) {
            _this.cstatus = err.error.message;
        });
    };
    EditshopdataDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditshopdataDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditshopdataDialogComponent.prototype, "myform", void 0);
    EditshopdataDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/shop/editshop-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/shop/editshop-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], EditshopdataDialogComponent);
    return EditshopdataDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shopslist/editshop-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Shop Details</h4>\n\n<form class=\"\" [formGroup]=\"editShopForm\"  (ngSubmit)='onEditShopSubmit()'>\n    <mat-dialog-content>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"shopid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Name\" [(ngModel)]=\"data.name\" value=\"{{data.name}}\" required formControlName=\"shopName\">\n        <mat-error>\n            Shop name should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"time\" placeholder=\"Open Time\" [(ngModel)]=\"data.timeFrom\" value=\"{{data.timeFrom}}\" required formControlName=\"timeFrom\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput type=\"time\" placeholder=\"Close Time\" [(ngModel)]=\"data.timeTo\" value=\"{{data.timeTo}}\" required formControlName=\"timeTo\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Owner Name\" [(ngModel)]=\"data.shopOwner\" value=\"{{data.shopOwner}}\" required formControlName=\"shopOwner\">\n        <mat-error>\n            Shop Owner should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone Number\" [(ngModel)]=\"data.phoneNumber\" value=\"{{data.phoneNumber}}\" required formControlName=\"phoneNumber\">\n        <mat-error *ngIf=\"editShopForm.hasError('minlength','phoneNumber')\">\n            Phone Number should not less than 8\n        </mat-error>\n        <mat-error *ngIf=\"editShopForm.hasError('maxlength','phoneNumber')\">\n            Phone Number should not less than 12\n        </mat-error>\n        <mat-error *ngIf=\"editShopForm.hasError('pattern','phoneNumber')\">\n            Only numbers allowed !\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category\" [(ngModel)]=\"data.category\" value=\"{{data.category}}\" required formControlName=\"category\">\n        <mat-error>\n            Category should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Description\" [(ngModel)]=\"data.description\" value=\"{{data.description}}\" required formControlName=\"description\">\n        </textarea>\n        <mat-error>\n            Description should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Address\" [(ngModel)]=\"data.address\" value=\"{{data.address}}\" required formControlName=\"address\">\n        <mat-error>\n            Location should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Location\" [(ngModel)]=\"data.location\" value=\"{{data.location}}\" required formControlName=\"location\">\n        <mat-error>\n            Location should not less than 3\n        </mat-error>\n    </mat-form-field>\n    </mat-dialog-content>\n\n    <div mat-dialog-actions>\n        <button mat-raised-button mat-dialog-close style=\"margin: auto;\" class=\"mat-raised-button\" color=\"warn\"> Cancel </button>        \n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editShopForm.valid\" mat-raised-button color=\"primary\">Update</button>\n    </div>\n    <br>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/shopslist/editshop-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopslist/shoplist-dialog-component-confirm.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to delete this customer ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onDeleteClick( data.shop_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shopslist/shoplist-dialog-component-confirm.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopslist/shoplist-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Shop Details</h4>\n\n<form class=\"example-form\">\n    <mat-dialog-content>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Name\" readonly value=\"{{data.name}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Open Time\" readonly value=\"{{data.timeFrom}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Close Time\" readonly value=\"{{data.timeTo}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Owner Name\" readonly value=\"{{data.shopOwner}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Phone Number\" readonly value=\"{{data.phoneNumber}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category\" readonly value=\"{{data.category}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Description\" readonly value=\"{{data.description}}\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Location\" readonly value=\"{{data.location}}\">\n    </mat-form-field>\n</mat-dialog-content>\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Close </button>\n    </div>\n<br>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/shopslist/shoplist-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopslist/shopslist.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"webview container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"webview container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">View Shop</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n\n\n    <div class=\"example-header\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Here..\">\n        </mat-form-field>\n    </div>\n\n    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n\n\n        <!-- Name Column -->\n        <ng-container matColumnDef=\"name\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.name}} </mat-cell>\n        </ng-container>\n\n        <!-- Phone Number -->\n        <ng-container matColumnDef=\"phoneNumber\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Phone Number </mat-header-cell>\n            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.phoneNumber}} </mat-cell>\n        </ng-container>\n\n        <!-- Category Column -->\n        <ng-container matColumnDef=\"category\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Category </mat-header-cell>\n            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.category}} </mat-cell>\n        </ng-container>\n\n        <!-- Description Column -->\n        <ng-container matColumnDef=\"description\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Description </mat-header-cell>\n            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.description}} </mat-cell>\n        </ng-container>\n\n        <!-- Action Column -->\n        <ng-container matColumnDef=\"action\">\n            <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n            <mat-cell *matCellDef=\"let shopdata\">\n                <mat-chip-list>\n                    <mat-chip color=\"primary\" (click)=\"viewData( shopdata.id )\" selected=\"true\">View</mat-chip>\n                    <mat-chip color=\"default\" (click)=\"editData( shopdata.id )\" selected=\"true\">Edit</mat-chip>\n                    <mat-chip color=\"warn\" (click)=\"deleteData( shopdata.id )\" selected=\"true\">Delete</mat-chip>\n                </mat-chip-list>\n            </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n    </mat-table>\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n<div class=\"mobile-view\">\n    <section class=\"chapter\">\n\n        <article class=\"article\">\n            <!-- <h2 class=\"article-title\" style=\"text-align: center\">Shops List</h2> -->\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                        <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-6\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading c-list\">\n                                            <span class=\"title\">Shops List</span>\n                                            <!-- <ul class=\"pull-right c-controls\">\n                                                <li><a href=\"#cant-do-all-the-work-for-you\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add Contact\"><i class=\"glyphicon glyphicon-plus\"></i></a></li>\n                                                <li><a href=\"#\" class=\"hide-search\" data-command=\"toggle-search\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Toggle Search\"><i class=\"fa fa-ellipsis-v\"></i></a></li>\n                                            </ul> -->\n                                        </div>\n                                        <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n                                                <input matInput placeholder=\"Search\" [(ngModel)]=\"term\" autocomplete=\"off\" >\n                                            </mat-form-field>\n                                        <!-- <input ng-model=\"searchText\" placeholder=\"enter search term here\"> -->\n                                        <ul class=\"list-group\" id=\"contact-list\">\n                                            <li class=\"list-group-item\" *ngFor=\"let dat of shopsList | filter:term \">\n                                                <div class=\"col-xs-12\">\n                                                    <span class=\"name\">{{dat?.name}}</span> \n                                                    <!-- three dot menu -->\n                                                        <div class=\"dropdown pull-right\">\n                                                            <!-- three dots -->\n                                                            <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(dat?.id)\">\n                                                                <li></li>\n                                                                <li></li>\n                                                                <li></li>\n                                                            </ul>\n                                                            <!-- menu -->\n                                                            <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{dat?.id}}\">\n                                                                <a (click)=\"viewData( dat?.id )\" >View</a>\n                                                                <a (click)=\"editData( dat?.id )\" >Edit</a>\n                                                                <a (click)=\"deleteData( dat?.id )\" >Delete</a>\n                                                            </div>\n                                                        </div>\n                                                    <br/>\n                                                    <span class=\"name\">{{dat?.phoneNumber}}</span>\n                                                    <a href=\"#cant-do-all-the-work-for-you\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Add Contact\"><i class=\"glyphicon glyphicon-plus\"></i></a>\n                                                    <br/>\n                                                    <span class=\"name\">{{dat?.category}}</span><br/>\n                                                    <span class=\"name\">{{dat?.description}}</span><br/>\n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </li>\n                                            \n                                            \n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/shopslist/shopslist.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.mobile-view {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .webview {\n    display: none; }\n  .mobile-view {\n    display: block; } }\n\n@media screen and (max-width: 600px) and (max-width: 767px) {\n  .visible-xs {\n    display: inline-block !important; }\n  .block {\n    display: block !important;\n    width: 100%;\n    height: 1px !important; } }\n\n@media screen and (max-width: 600px) {\n  #back-to-bootsnipp {\n    position: fixed;\n    top: 10px;\n    right: 10px; }\n  .c-search > .form-control {\n    border-radius: 0px;\n    border-width: 0px;\n    border-bottom-width: 1px;\n    font-size: 1.3em;\n    padding: 12px 12px;\n    height: 44px;\n    outline: none !important; }\n  .c-search > .form-control:focus {\n    outline: 0px !important;\n    -webkit-appearance: none;\n    box-shadow: none; }\n  .c-search > .input-group-btn .btn {\n    border-radius: 0px;\n    border-width: 0px;\n    border-left-width: 1px;\n    border-bottom-width: 1px;\n    height: 44px; }\n  .c-list {\n    padding: 0px;\n    min-height: 44px; }\n  .title {\n    display: inline-block;\n    font-size: 1.7em;\n    font-weight: bold;\n    padding: 5px 15px; }\n  ul.c-controls {\n    list-style: none;\n    margin: 0px;\n    min-height: 44px; }\n  ul.c-controls li {\n    margin-top: 8px;\n    float: left; }\n  ul.c-controls li a {\n    font-size: 1.7em;\n    padding: 11px 10px 6px; }\n  ul.c-controls li a i {\n    min-width: 24px;\n    text-align: center; }\n  ul.c-controls li a:hover {\n    background-color: rgba(51, 51, 51, 0.2); }\n  .c-toggle {\n    font-size: 1.7em; }\n  .name {\n    font-size: 1.4em;\n    font-weight: 700; }\n  .c-info {\n    padding: 5px 10px;\n    font-size: 1.25em; }\n  .icons li {\n    background: none repeat scroll 0 0 #000;\n    height: 4px;\n    width: 4px;\n    line-height: 0;\n    list-style: none outside none;\n    margin-top: 2px;\n    vertical-align: top;\n    border-radius: 50%;\n    pointer-events: none; }\n  .dropbtn {\n    color: white;\n    font-size: 16px;\n    border: none;\n    cursor: pointer; }\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1; }\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block; }\n  .dropdown a:hover {\n    background-color: #f1f1f1; }\n  .show {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shopslist/shopslist.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ShopslistComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShoplistDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ShoplistDialogComponentConfirm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditshopDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var valnumber = /^[0-9][0-9]*$/;
var ShopslistComponent = (function () {
    function ShopslistComponent(userService, router, dialog, spinner) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.url = '/api/';
        this.displayedColumns = ['name', 'phoneNumber', 'category', 'description', 'action'];
        this.spinner.show();
        this.getShops();
    }
    ShopslistComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ShopslistComponent.prototype.ngOnInit = function () {
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            //console.log(event);
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    ShopslistComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        //$(".myDropdown"+id).toggle();
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".myDropdown" + id).addClass('show');
    };
    ShopslistComponent.prototype.getShops = function () {
        var _this = this;
        var data = {
            status: ['W']
        };
        this.userService.readshops('/api/', data).subscribe(function (data) {
            _this.shopsList = data.data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](_this.shopsList);
            _this.dataSource.sort = _this.sort;
            _this.spinner.hide();
        });
    };
    ShopslistComponent.prototype.viewData = function (id) {
        var _this = this;
        var shopid = {
            shop_id: id
        };
        this.spinner.show();
        this.userService.readshopbyid(this.url, shopid).subscribe(function (data) {
            _this.shopList = data.data;
            _this.spinner.hide();
            _this.openDialog();
        });
    };
    ShopslistComponent.prototype.editData = function (id) {
        var _this = this;
        var shopid = {
            shop_id: id
        };
        this.spinner.show();
        this.userService.readshopbyid(this.url, shopid).subscribe(function (data) {
            _this.shopList = data.data;
            _this.spinner.hide();
            _this.editshopDialog();
        });
    };
    ShopslistComponent.prototype.deleteData = function (id) {
        var shopid = {
            shop_id: id
        };
        var dialogRef = this.dialog.open(ShoplistDialogComponentConfirm, {
            width: '450px',
            data: shopid,
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    // Function to edit shop data
    ShopslistComponent.prototype.editshopDialog = function () {
        var dialogRef = this.dialog.open(EditshopDialogComponent, {
            width: '450px',
            data: this.shopList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    ShopslistComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(ShoplistDialogComponent, {
            width: '450px',
            data: this.shopList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */])
    ], ShopslistComponent.prototype, "sort", void 0);
    ShopslistComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shopslist',
            template: __webpack_require__("../../../../../src/app/shopslist/shopslist.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopslist/shopslist.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"]])
    ], ShopslistComponent);
    return ShopslistComponent;
}());

var ShoplistDialogComponent = (function () {
    function ShoplistDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ShoplistDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ShoplistDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/shopslist/shoplist-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopslist/shoplist-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], ShoplistDialogComponent);
    return ShoplistDialogComponent;
}());

var ShoplistDialogComponentConfirm = (function () {
    function ShoplistDialogComponentConfirm(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
    }
    ShoplistDialogComponentConfirm.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ShoplistDialogComponentConfirm.prototype.onDeleteClick = function (shopid) {
        var _this = this;
        var del_shop = {
            shop_id: shopid,
            change_status: 'R',
            db_query: 'change_status'
        };
        this.userService.editshopbyid(this.url, del_shop)
            .subscribe(function (data) {
            console.log(data);
            if (data.status === true) {
                _this.cstatus = 'Shop Deleted Successfully !';
            }
            else {
                _this.cstatus = 'Unable to update Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    ShoplistDialogComponentConfirm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog-confirm',
            template: __webpack_require__("../../../../../src/app/shopslist/shoplist-dialog-component-confirm.html"),
            styles: [__webpack_require__("../../../../../src/app/shopslist/shoplist-dialog-component-confirm.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], ShoplistDialogComponentConfirm);
    return ShoplistDialogComponentConfirm;
}());

var EditshopDialogComponent = (function () {
    function EditshopDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit shop
        this.editShopForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            userId: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            isFavourite: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            branchID: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            createdAt: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            updatedAt: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            shopName: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            description: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].maxLength(12),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].pattern(valnumber)])),
            timeFrom: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            timeTo: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            address: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            imageUrl: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            location: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            shopOwner: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            shopid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
    }
    EditshopDialogComponent.prototype.ngOnInit = function () {
    };
    EditshopDialogComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(ShoplistDialogComponent, {
            width: '350px',
            data: this.shopList[0]
        });
        // this.editShopForm.setValue(this.dialogRef.componentInstance.data);
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    // Function For Edit shop
    EditshopDialogComponent.prototype.onEditShopSubmit = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        var shopdata = {
            user_id: userdata.data[0].id,
            name: this.editShopForm.get('shopName').value,
            category: this.editShopForm.get('category').value,
            description: this.editShopForm.get('description').value,
            phone_number: this.editShopForm.get('phoneNumber').value,
            time_from: this.editShopForm.get('timeFrom').value,
            time_to: this.editShopForm.get('timeTo').value,
            address: this.editShopForm.get('address').value,
            image_url: this.editShopForm.get('imageUrl').value,
            location: this.editShopForm.get('location').value,
            branch_id: '',
            shop_owner: this.editShopForm.get('shopOwner').value,
            db_query: 'update',
            shop_id: this.editShopForm.get('shopid').value
        };
        this.userService.editshopbyid(this.url, shopdata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Shop Updated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to update Please try again !';
            }
            _this.updateDialog();
        });
    };
    EditshopDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditshopDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditshopDialogComponent.prototype, "myform", void 0);
    EditshopDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/shopslist/editshop-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/shopslist/editshop-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], EditshopDialogComponent);
    return EditshopDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/auto-close-mobile-nav.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoCloseMobileNavDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Mobile only: automatically close sidebar on route change.
var AutoCloseMobileNavDirective = (function () {
    function AutoCloseMobileNavDirective(el, router) {
        this.el = el;
        this.router = router;
    }
    AutoCloseMobileNavDirective.prototype.ngOnInit = function () {
        var $body = $('#body');
        if (__WEBPACK_IMPORTED_MODULE_2__config__["a" /* APPCONFIG */].AutoCloseMobileNav) {
            this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                    setTimeout(function () {
                        // console.log('NavigationEnd:', event);
                        $body.removeClass('sidebar-mobile-open');
                    }, 0);
                }
            });
        }
    };
    AutoCloseMobileNavDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[myAutoCloseMobileNav]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* Router */]])
    ], AutoCloseMobileNavDirective);
    return AutoCloseMobileNavDirective;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav-menu/accordion-nav.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionNavDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionNavDirective = (function () {
    function AccordionNavDirective(el) {
        this.el = el;
    }
    AccordionNavDirective.prototype.ngAfterViewInit = function () {
        // on click, open it's own ul, close sibling li opened ul & sub ul
        // on click, close it's own ul & sub ul
        var $nav = $(this.el.nativeElement);
        var slideTime = 250;
        var $lists = $nav.find('ul').parent('li');
        $lists.append('<i class="material-icons icon-has-ul">arrow_drop_down</i>');
        var $As = $lists.children('a');
        // Disable a link that has ul
        $As.on('click', function (event) {
            event.preventDefault();
        });
        // Accordion nav
        $nav.on('click', function (e) {
            var target = e.target;
            var $parentLi = $(target).closest('li'); // closest, insead of parent, so it still works when click on i icons
            if (!$parentLi.length) {
                return;
            } // return if doesn't click on li
            var $subUl = $parentLi.children('ul');
            // let depth = $subUl.parents().length; // but some li has no sub ul, so...
            var depth = $parentLi.parents().length + 1;
            // filter out all elements (except target) at current depth or greater
            var allAtDepth = $nav.find('ul').filter(function () {
                if ($(this).parents().length >= depth && this !== $subUl.get(0)) {
                    return true;
                }
            });
            allAtDepth.slideUp(slideTime).closest('li').removeClass('open');
            // Toggle target
            if ($parentLi.has('ul').length) {
                $parentLi.toggleClass('open');
            }
            $subUl.stop().slideToggle(slideTime);
        });
    };
    AccordionNavDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[myAccordionNav]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AccordionNavDirective);
    return AccordionNavDirective;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav-menu/append-submenu-icon.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppendSubmenuIconDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppendSubmenuIconDirective = (function () {
    function AppendSubmenuIconDirective(el) {
        this.el = el;
    }
    AppendSubmenuIconDirective.prototype.ngAfterViewInit = function () {
        var $el = $(this.el.nativeElement);
        $el.find('.prepend-icon').prepend('<i class="material-icons">keyboard_arrow_right</i>');
    };
    AppendSubmenuIconDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[myAppendSubmenuIcon]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], AppendSubmenuIconDirective);
    return AppendSubmenuIconDirective;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav-menu/highlight-active-items.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightActiveItemsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HighlightActiveItemsDirective = (function () {
    function HighlightActiveItemsDirective(el, location, router) {
        this.el = el;
        this.location = location;
        this.router = router;
    }
    HighlightActiveItemsDirective.prototype.ngAfterViewInit = function () {
        var $el = $(this.el.nativeElement);
        var $links = $el.find('a');
        function highlightActive(links) {
            var path = location.hash;
            links.each(function (i, link) {
                var $link = $(link);
                var $li = $link.parent('li');
                var href = $link.attr('href');
                if ($li.hasClass('active')) {
                    $li.removeClass('active');
                }
                if (path.indexOf(href) === 0) {
                    $li.addClass('active');
                }
            });
        }
        highlightActive($links);
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            highlightActive($links);
        });
    };
    HighlightActiveItemsDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[myHighlightActiveItems]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */]])
    ], HighlightActiveItemsDirective);
    return HighlightActiveItemsDirective;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav-menu/sidenav-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav\" myAccordionNav myAppendSubmenuIcon mySlimScroll myHighlightActiveItems>\n  <!-- <li class=\"nav-header\"><span>Navigation</span></li> -->\n\n  <li><a mat-button class=\"md-button\" [routerLink]=\"['/shops']\"><i class=\"nav-icon material-icons\">shopping_cart</i> <span>Shops</span></a></li>\n  <li><a mat-button class=\"md-button\" [routerLink]=\"['/agents']\"><i class=\"nav-icon material-icons\">bubble_chart</i> <span>Agents</span></a></li>\n  <li><a mat-button class=\"md-button\" [routerLink]=\"['/categories']\"><i class=\"nav-icon material-icons\">bubble_chart</i> <span>Categories</span></a></li>\n    \n  <!-- <li>\n        <a mat-button href=\"#/app/ui\"><i class=\"nav-icon material-icons\">bubble_chart</i><span class=\"nav-text\">Shops</span></a>\n        <ul>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/shopslist']\"><span>View Shops</span></a></li>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/createshop']\"><span>Create Shop</span></a></li>\n        </ul>\n    </li>\n\n    <li>\n        <a mat-button href=\"#/app/ui\"><i class=\"nav-icon material-icons\">bubble_chart</i><span class=\"nav-text\">Shops Details</span></a>\n        <ul>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/dshopslist']\"><span>Shops List</span></a></li>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/dpendingapprovals']\"><span>Pending Approvals</span></a></li>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/verifiedshops']\"><span>Verified Shops</span></a></li>\n        </ul>\n    </li>\n\n    <li>\n        <a mat-button href=\"#/app/ui\"><i class=\"nav-icon material-icons\">bubble_chart</i><span class=\"nav-text\">Agents</span></a>\n        <ul>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/createagent']\"><span>Create Agent</span></a></li>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/agentslist']\"><span>Agents List</span></a></li>\n        </ul>\n    </li>\n\n    <li>\n        <a mat-button href=\"#/app/ui\"><i class=\"nav-icon material-icons\">bubble_chart</i><span class=\"nav-text\">Category</span></a>\n        <ul>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/createcategory']\"><span>Create Category</span></a></li>\n            <li><a mat-button class=\"md-button prepend-icon\" [routerLink]=\"['/viewcategory']\"><span>Category List</span></a></li>\n        </ul>\n    </li> -->\n\n  <li class=\"nav-divider\"></li>\n\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav-menu/sidenav-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidenavMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppSidenavMenuComponent = (function () {
    function AppSidenavMenuComponent() {
    }
    AppSidenavMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav-menu',
            styles: [],
            template: __webpack_require__("../../../../../src/app/sidenav/sidenav-menu/sidenav-menu.component.html")
        })
    ], AppSidenavMenuComponent);
    return AppSidenavMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"app-sidebar\" myAutoCloseMobileNav\n   [ngClass]=\"\">\n\n  <section class=\"sidebar-header\"\n       [ngClass]=\"{'bg-color-dark': ['11','31'].indexOf(AppConfig.colorOption) >= 0,\n                   'bg-color-light': AppConfig.colorOption === '21',\n                   'bg-color-primary': ['12','22','32'].indexOf(AppConfig.colorOption) >= 0,\n                   'bg-color-success': ['13','23','33'].indexOf(AppConfig.colorOption) >= 0,\n                   'bg-color-info': ['14','24','34'].indexOf(AppConfig.colorOption) >= 0,\n                   'bg-color-warning': ['15','25','35'].indexOf(AppConfig.colorOption) >= 0,\n                   'bg-color-danger': ['16','26','36'].indexOf(AppConfig.colorOption) >= 0}\">\n    <!-- <span class=\"logo-icon material-icons\">view_compact</span> -->\n    <!-- <svg class=\"logo-img\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 250 250\" style=\"enable-background:new 0 0 250 250;\" xml:space=\"preserve\">\n      <g>\n        <g>\n          <polygon class=\"st0\" points=\"125,153.4 100.3,153.4 88.6,182.6 88.6,182.6 66.9,182.6 66.8,182.6 125,52.1 125,52.2 125,52.2\n            125,30 125,30 31.9,63.2 46.1,186.3 125,230 125,230 125,153.4    \"/>\n          <polygon class=\"st0\" points=\"108,135.4 125,135.4 125,135.4 125,94.5     \"/>\n        </g>\n        <g class=\"st1\">\n          <polygon class=\"st0\" points=\"125,153.4 149.7,153.4 161.4,182.6 161.4,182.6 183.1,182.6 183.2,182.6 125,52.1 125,52.2 125,52.2\n            125,30 125,30 218.1,63.2 203.9,186.3 125,230 125,230 125,153.4    \"/>\n          <polygon class=\"st0\" points=\"142,135.4 125,135.4 125,135.4 125,94.5     \"/>\n        </g>\n      </g>\n    </svg> -->\n    <img src=\"../../assets/images/logo.png\" height=\"30px\"/>\n    <a [routerLink]=\"['/']\" class=\"brand\">{{AppConfig.brand}}</a>\n    <a href=\"javascript:;\" class=\"collapsednav-toggler\" (click)=\"toggleCollapsedNav()\">\n      <i class=\"material-icons\" *ngIf=\"this.AppConfig.navCollapsed\">radio_button_unchecked</i>\n      <i class=\"material-icons\" *ngIf=\"!this.AppConfig.navCollapsed\">radio_button_checked</i>\n    </a>\n  </section>\n\n  <section class=\"sidebar-content\">\n    <app-sidenav-menu></app-sidenav-menu>\n  </section>\n\n  <section class=\"sidebar-footer\">\n    <!-- <ul class=\"nav\">\n      <li><a mat-button aria-label=\"menu\" target=\"_blank\" [href]=\"AppConfig.productLink\" ><i class=\"nav-icon material-icons\">help</i><span class=\"nav-text\"><span>Help</span> & <span>Support</span></span></a></li>\n    </ul> -->\n  </section>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("../../../../../src/app/config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppSidenavComponent = (function () {
    function AppSidenavComponent() {
    }
    AppSidenavComponent.prototype.ngOnInit = function () {
        this.AppConfig = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* APPCONFIG */];
    };
    AppSidenavComponent.prototype.toggleCollapsedNav = function () {
        this.AppConfig.navCollapsed = !this.AppConfig.navCollapsed;
    };
    AppSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            styles: [],
            template: __webpack_require__("../../../../../src/app/sidenav/sidenav.component.html")
        })
    ], AppSidenavComponent);
    return AppSidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidenav/toggle-offcanvas-nav.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleOffcanvasNavDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as $ from 'jquery';
// declare var $: any;
// off-canvas sidebar for mobile, and this is the trigger
var ToggleOffcanvasNavDirective = (function () {
    function ToggleOffcanvasNavDirective(el) {
        this.el = el;
    }
    ToggleOffcanvasNavDirective.prototype.ngAfterViewInit = function () {
        var $navToggler = $(this.el.nativeElement);
        var $body = $('#body');
        $navToggler.on('click', function (e) {
            // _sidebar.scss, _page-container.scss
            console.log($body);
            $body.toggleClass('sidebar-mobile-open');
            e.preventDefault();
        });
    };
    ToggleOffcanvasNavDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[myToggleOffcanvasNav]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ToggleOffcanvasNavDirective);
    return ToggleOffcanvasNavDirective;
}());



/***/ }),

/***/ "../../../../../src/app/subcategories/editsubcategory-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Sub Category Details</h4>\n<form class=\"\" [formGroup]=\"editSubCategoryForm\"  (ngSubmit)='onEditSubCategorySubmit()'>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"subcategoryid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Name\" [(ngModel)]=\"data.text\" value=\"{{data.text}}\" required formControlName=\"subcategory\">\n        <mat-error>\n            Sub Category should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n\n    <div mat-dialog-actions>\n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editSubCategoryForm.valid\" mat-raised-button color=\"warn\">Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/subcategories/editsubcategory-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcategories/subcategories.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <article class=\"article\">\n      \n      <div class=\"box box-default\">\n        <div class=\"box-body\" style=\"padding-top: 0px\">\n             \n            <div class=\"row white\" style=\"margin: 0px\">\n              <div class=\"col-md-7\">\n                <h2 class=\"article-title\">All Sub Categories ({{subcategoriesList?.length}})</h2>\n              </div>\n              <div class=\"col-md-2\">\n                  <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                      <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n                  </mat-form-field>\n              </div>\n              <div class=\"col-md-3\" style=\"margin: auto\">\n                  <mat-chip-list class=\"pull-right\">\n                  <mat-chip class=\"pull-right addcategorybtn\"  selected=\"true\" (click)=\"subcategoryopen()\"><i class=\"material-icons\">add_circle_outline</i>&nbsp;&nbsp; New Sub Category</mat-chip>\n                  </mat-chip-list>\n              </div>\n            </div>\n          <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n            <mat-tab class=\"tablabel\" label=\"All Sub Categories\">\n              <section class=\"box box-transparent\">\n                <div class=\"box-body\">\n                  <div class=\"\">\n                    <!-- <div class=\"row categoryheading\">\n                      <div class=\"col-md-1\"></div>\n                      <div class=\"col-md-10\">Category Name</div>\n                      \n                      <div class=\"col-md-1\"></div>\n                    </div> -->\n                      \n                        <!-- grid start -->\n                        <mat-grid-list cols=\"12\" rowHeight=\"80px\">\n                          <mat-grid-tile\n                              *ngFor=\"let subcategory of subcategoriesList | filter : searchText | paginate: { itemsPerPage: 20, currentPage: p }\"\n                              [colspan]=\"breakpoint\"\n                              [rowspan]=\"1\"\n                              (window:resize)=\"onResize($event)\"\n                              style=\"background-color: #fff\">\n                              <!-- <div class=\"row\"> -->\n                                <div class=\"col-md-2\">\n                                  <button title=\"Active\" *ngIf=\"subcategory.active == true \" mat-mini-fab color=\"accent\"> </button>\n                                  <button title=\"De-Active\" *ngIf=\"subcategory.active == false \" mat-mini-fab color=\"warn\"> </button>\n                                </div>\n                                <div class=\"col-md-8\">{{subcategory.text}} </div>\n                                <div class=\"col-md-2\">\n                                  <!-- three dot menu -->\n                                  <div class=\"dropdown\">\n                                      <!-- three dots -->\n                                      <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(subcategory?.id)\">\n                                          <li></li>\n                                          <li></li>\n                                          <li></li>\n                                      </ul>\n                                      <!-- menu -->\n                                      <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{subcategory?.id}}\">\n                                          <a class=\"pointer\" (click)=\"editData( subcategory?.id )\" >Edit</a>\n                                          <a class=\"pointer\" *ngIf=\"subcategory.active == true \" (click)=\"blockData( subcategory?.id )\" >De-activate</a>\n                                          <a class=\"pointer\" *ngIf=\"subcategory.active == false \" (click)=\"unblockData( subcategory?.id )\" >Activate</a>\n                                      </div>\n                                  </div>\n                                    \n                                </div>\n                                \n                              <!-- </div> -->\n                          </mat-grid-tile>\n                        </mat-grid-list>\n                        <br>\n                        <!-- grid end -->\n                        <div *ngIf=\"subcategoriesList && (subcategoriesList | filter: searchText).length === 0\">\n                            <h4 style=\"text-align: center\" >No Data Found</h4>\n                          </div>\n                        <div class=\"pull-right\" *ngIf=\"subcategoriesList && (subcategoriesList | filter: searchText).length > 0\">\n                          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                      </div>\n    \n                  </div>\n                </div>\n              </section>\n            </mat-tab>\n            <mat-tab label=\"Active\" >\n              <section class=\"box box-transparent\">\n                <div class=\"box-body\">\n                  <div class=\"\">\n                    \n                      <!-- grid start -->\n                      <mat-grid-list cols=\"12\" rowHeight=\"100px\">\n                        <mat-grid-tile\n                            *ngFor=\"let subcategory of activeSubCategoriesList | filter : searchText | paginate: { itemsPerPage: 20, currentPage: p }\"\n                            [colspan]=\"breakpoint\"\n                            [rowspan]=\"1\"\n                            (window:resize)=\"onResize($event)\"\n                            style=\"background-color: #fff\">\n                            <!-- <div class=\"row\"> -->\n                              <div class=\"col-md-2\">\n                                <button title=\"Active\" *ngIf=\"subcategory.active == true \" mat-mini-fab color=\"accent\"> </button>\n                                <button title=\"De-Active\" *ngIf=\"subcategory.active == false \" mat-mini-fab color=\"warn\"> </button>\n                              </div>\n                              <div class=\"col-md-8\">{{subcategory.text}} </div>\n                              <div class=\"col-md-2\">\n                                <!-- three dot menu -->\n                                <div class=\"dropdown\">\n                                    <!-- three dots -->\n                                    <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(subcategory?.id)\">\n                                        <li></li>\n                                        <li></li>\n                                        <li></li>\n                                    </ul>\n                                    <!-- menu -->\n                                    <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{subcategory?.id}}\">\n                                        <a class=\"pointer\" (click)=\"editData( subcategory?.id )\" >Edit</a>\n                                        <a class=\"pointer\" *ngIf=\"subcategory.active == true \" (click)=\"blockData( subcategory?.id )\" >De-activate</a>\n                                        <a class=\"pointer\" *ngIf=\"subcategory.active == false \" (click)=\"unblockData( subcategory?.id )\" >Activate</a>\n                                    </div>\n                                </div>\n                                  \n                              </div>\n                              \n                            <!-- </div> -->\n                        </mat-grid-tile>\n                      </mat-grid-list>\n                      <!-- grid end -->\n                      <div *ngIf=\"activeSubCategoriesList && (activeSubCategoriesList | filter: searchText).length === 0\">\n                          <h4 style=\"text-align: center\" >No Data Found</h4>\n                        </div>\n                        <div class=\"pull-right\" *ngIf=\"activeSubCategoriesList && (activeSubCategoriesList | filter: searchText).length > 0\">\n                          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                      </div>\n    \n                  </div>\n                </div>\n              </section>\n            </mat-tab>\n            <mat-tab label=\"In Active\">\n              <section class=\"box box-transparent\">\n                <div class=\"box-body\">\n                  <div class=\"\">\n                    \n                      <!-- grid start -->\n                      <mat-grid-list cols=\"12\" rowHeight=\"100px\">\n                        <mat-grid-tile\n                            *ngFor=\"let subcategory of deactiveSubCategoriesList | filter : searchText | paginate: { itemsPerPage: 20, currentPage: p }\"\n                            [colspan]=\"breakpoint\"\n                            [rowspan]=\"1\"\n                            (window:resize)=\"onResize($event)\"\n                            style=\"background-color: #fff\">\n                            <!-- <div class=\"row\"> -->\n                              <div class=\"col-md-2\">\n                                <button title=\"Active\" *ngIf=\"subcategory.active == true \" mat-mini-fab color=\"accent\"> </button>\n                                <button title=\"De-Active\" *ngIf=\"subcategory.active == false \" mat-mini-fab color=\"warn\"> </button>\n                              </div>\n                              <div class=\"col-md-8\">{{subcategory.text}} </div>\n                              <div class=\"col-md-2\">\n                                <!-- three dot menu -->\n                                <div class=\"dropdown\">\n                                    <!-- three dots -->\n                                    <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(subcategory?.id)\">\n                                        <li></li>\n                                        <li></li>\n                                        <li></li>\n                                    </ul>\n                                    <!-- menu -->\n                                    <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{subcategory?.id}}\">\n                                        <a class=\"pointer\" (click)=\"editData( subcategory?.id )\" >Edit</a>\n                                        <a class=\"pointer\" *ngIf=\"subcategory.active == true \" (click)=\"blockData( subcategory?.id )\" >De-activate</a>\n                                        <a class=\"pointer\" *ngIf=\"subcategory.active == false \" (click)=\"unblockData( subcategory?.id )\" >Activate</a>\n                                    </div>\n                                </div>\n                                  \n                              </div>\n                              \n                            <!-- </div> -->\n                        </mat-grid-tile>\n                      </mat-grid-list>\n                      <!-- grid end -->\n                      <div *ngIf=\"deactiveSubCategoriesList && (deactiveSubCategoriesList | filter: searchText).length === 0\">\n                          <h4 style=\"text-align: center\" >No Data Found</h4>\n                        </div>\n                        <div class=\"pull-right\" *ngIf=\"deactiveSubCategoriesList && (deactiveSubCategoriesList | filter: searchText).length > 0\">\n                          <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                      </div>\n    \n                  </div>\n                </div>\n              </section>\n            </mat-tab>\n          </mat-tab-group>\n    \n        </div>\n      </div>\n    </article>\n    \n    \n    \n      <mat-sidenav #subcatleft position=\"end\" style=\"width: 25%\">\n        <section class=\"container-fluid with-maxwidth chapter\">\n    \n          <article class=\"article\">\n              <h2 class=\"article-title\">Create Sub Category</h2>\n              <div class=\"box box-default\">\n                  <div class=\"box-body\">\n    \n    \n                      <form class=\"\" [formGroup]=\"createSubCategoryForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onCreateSubCategorySubmit(createSubCategoryForm,formDirective)\">\n    \n                          <div class=\"row\">\n\n                              <mat-form-field class=\"example-full-width col-md-12\">\n                                  <mat-select placeholder=\"Select Category\" required formControlName=\"category\">\n                                    <mat-option *ngFor=\"let list of categoriesList\" [value]=\"list.value\">\n                                      {{ list.viewValue }}\n                                    </mat-option>\n                                  </mat-select>\n                                </mat-form-field>\n\n                              <mat-form-field class=\"example-full-width col-md-12\">\n                                  <input matInput placeholder=\"Sub Category name\" required formControlName=\"subcategory\">\n                                  <mat-error>\n                                      Sub Category should not less than 3\n                                  </mat-error>\n                              </mat-form-field>\n    \n                          </div>\n                          <span [innerHTML]=\"cstatus\"></span>\n                          <div class=\"divider divider-md\"></div>\n                          \n                          <div class=\"row\">\n                              <div class=\"col-md-12 text-center\">\n                                  <button class=\"col-md-1\" type=\"button\"  (click)=\"subcatleft.close()\" mat-raised-button color=\"warn\" >Cancel</button>\n                                  <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createSubCategoryForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                              </div>\n                          </div>\n    \n                      </form>\n    \n    \n    \n                  </div>\n              </div>\n          </article>\n      </section>\n      </mat-sidenav>\n    \n    \n    </mat-sidenav-container>"

/***/ }),

/***/ "../../../../../src/app/subcategories/subcategories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".categorieslist li {\n  margin-bottom: 10px;\n  word-wrap: break-word; }\n\n.categoryheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.addcategorybtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1;\n  right: 0;\n  top: 0; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n\nul, ol {\n  line-height: 8px !important; }\n\n.mat-grid-tile {\n  overflow: inherit; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcategories/subcategories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SubcategoriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsubcategoriesDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SubCategorieslistDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubCategorieslistActDactDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__subcategory_sidebar_subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var SubcategoriesComponent = (function () {
    function SubcategoriesComponent(userService, spinner, router, dialog, formDirective, cd, categorysidebar, subcategorysidebar) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.formDirective = formDirective;
        this.cd = cd;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.url = '/api/';
        // For Create sub Category
        this.createSubCategoryForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            subcategory: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator])),
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
        });
        this.spinner.show();
        this.subcategoriesdata('ALL');
        this.categoriesdata('ALL');
    }
    SubcategoriesComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 3;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    SubcategoriesComponent.prototype.subcategoryopen = function () {
        this.subcategorysidebar.subcategorySidebarOpen();
    };
    // Function For Create category
    SubcategoriesComponent.prototype.onCreateSubCategorySubmit = function (createSubCategoryForm, formDirective) {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        var subcategorydata = {
            created_by: userdata.data[0].id,
            category_id: this.createSubCategoryForm.get('category').value,
            name: this.createSubCategoryForm.get('subcategory').value,
            status: 'Y'
        };
        this.userService.createSubCategory(this.url, subcategorydata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Sub Category Added Successfully !';
                formDirective.resetForm();
                createSubCategoryForm.reset();
            }
            else {
                _this.cstatus = '<span>Sub Category Already exists !</span>';
            }
        });
    };
    SubcategoriesComponent.prototype.onResize = function (event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 12 : 3;
    };
    SubcategoriesComponent.prototype.ngOnInit = function () {
        this.breakpoint = (window.innerWidth <= 400) ? 12 : 3;
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        __WEBPACK_IMPORTED_MODULE_7_jquery__('.mat-tab-label-container').css('background', '#fff');
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    SubcategoriesComponent.prototype.onTabClick = function (event) {
        var index = event.index;
    };
    SubcategoriesComponent.prototype.categoriesdata = function (status) {
        var _this = this;
        this.userService.readCategories('/api/').subscribe(function (data) {
            _this.categoriesList = [];
            for (var i = 0; i < data.length; i++) {
                _this.categoriesList.push({ value: data[i].id, viewValue: data[i].text });
            }
            _this.cd.detectChanges();
        });
    };
    SubcategoriesComponent.prototype.subcategoriesdata = function (status) {
        var _this = this;
        this.spinner.show();
        this.userService.readCategories('/api/').subscribe(function (data) {
            _this.subcategoriesList = data.filter(function (category) { return category.parentid != null; });
            _this.activeSubCategoriesList = _this.subcategoriesList.filter(function (category) { return category.active == true; });
            _this.deactiveSubCategoriesList = _this.subcategoriesList.filter(function (category) { return category.active == false; });
            _this.spinner.hide();
        });
    };
    SubcategoriesComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".myDropdown" + id).addClass('show');
    };
    SubcategoriesComponent.prototype.editData = function (id) {
        // const categoryid = {
        //     subcategory_id: id
        // };
        this.subcategoryList = this.subcategoriesList.find(function (subCategory) { return subCategory.id == id; });
        this.editcategoryDialog();
    };
    // Function to edit category data
    SubcategoriesComponent.prototype.editcategoryDialog = function () {
        var dialogRef = this.dialog.open(EditsubcategoriesDialogComponent, {
            width: '450px',
            data: this.subcategoryList
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    // Function to block category
    SubcategoriesComponent.prototype.blockData = function (id) {
        var _this = this;
        var reqdata = {
            id: id,
            active: false
        };
        this.userService.activeDeactiveSubCategorybyid(this.url, reqdata).subscribe(function (data) {
            _this.message = 'Sub Category Blocked !';
            _this.modifycategoryDialog();
        });
    };
    // Function to unblock category
    SubcategoriesComponent.prototype.unblockData = function (id) {
        var _this = this;
        var reqdata = {
            id: id,
            active: true
        };
        this.userService.activeDeactiveSubCategorybyid(this.url, reqdata).subscribe(function (data) {
            _this.message = 'Sub Category Activated!';
            _this.modifycategoryDialog();
        });
    };
    SubcategoriesComponent.prototype.modifycategoryDialog = function () {
        var dialogRef = this.dialog.open(SubCategorieslistActDactDialogComponent, {
            width: '450px',
            data: this.message
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], SubcategoriesComponent.prototype, "myform", void 0);
    SubcategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subcategories',
            template: __webpack_require__("../../../../../src/app/subcategories/subcategories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subcategories/subcategories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_9__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_8__subcategory_sidebar_subcategory_sidebar_service__["a" /* subcategorySideBarService */]])
    ], SubcategoriesComponent);
    return SubcategoriesComponent;
}());

var EditsubcategoriesDialogComponent = (function () {
    function EditsubcategoriesDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit shop
        this.editSubCategoryForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            subcategory: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            subcategoryid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
    }
    EditsubcategoriesDialogComponent.prototype.ngOnInit = function () {
    };
    // Function For Edit category
    EditsubcategoriesDialogComponent.prototype.onEditSubCategorySubmit = function () {
        var _this = this;
        var reqdata = {
            id: this.editSubCategoryForm.get('subcategoryid').value,
            text: this.editSubCategoryForm.get('subcategory').value
        };
        this.userService.editSubCategorybyid(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Sub Category Updated Successfully !';
            _this.updateDialog();
        }, function (err) {
            _this.cstatus = err.error.message;
            _this.updateDialog();
        });
    };
    EditsubcategoriesDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditsubcategoriesDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditsubcategoriesDialogComponent.prototype, "myform", void 0);
    EditsubcategoriesDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/subcategories/editsubcategory-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/subcategories/editsubcategory-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], EditsubcategoriesDialogComponent);
    return EditsubcategoriesDialogComponent;
}());

var SubCategorieslistDialogComponent = (function () {
    function SubCategorieslistDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SubCategorieslistDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    SubCategorieslistDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/subcategories/subcategorylist-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/subcategories/subcategorylist-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], SubCategorieslistDialogComponent);
    return SubCategorieslistDialogComponent;
}());

var SubCategorieslistActDactDialogComponent = (function () {
    function SubCategorieslistActDactDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SubCategorieslistActDactDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        location.reload();
    };
    SubCategorieslistActDactDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/subcategories/subcategorylistActDact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/subcategories/subcategorylistActDact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], SubCategorieslistActDactDialogComponent);
    return SubCategorieslistActDactDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subcategories/subcategorylist-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Sub Category Details</h4>\n<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Sub Category Name\" readonly value=\"{{data.name}}\">\n    </mat-form-field>\n\n\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/subcategories/subcategorylist-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcategories/subcategorylistActDact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<form class=\"example-form\">\n    <h4 style=\"text-align: center\">{{data}}</h4>\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/subcategories/subcategorylistActDact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcategory-sidebar/subcategory-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" with-maxwidth subSection chapter pull-right\" >\n    \n  <article class=\"article\">\n      <h2 class=\"article-title articleTitle\">Create Sub Category</h2>\n      <div class=\"box box-default\">\n          <div class=\"box-body\">\n\n\n              <form class=\"\" [formGroup]=\"createSubCategoryForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onCreateSubCategorySubmit(createSubCategoryForm,formDirective)\">\n\n                  <div class=\"row\">\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <mat-select placeholder=\"Select Category\" required formControlName=\"category\">\n                            <mat-option *ngFor=\"let list of categoriesList\" [value]=\"list.value\">\n                              {{ list.viewValue }}\n                            </mat-option>\n                          </mat-select>\n                        </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                          <input matInput placeholder=\"Sub Category name\" required formControlName=\"subcategory\">\n                          <mat-error>\n                              Sub Category should not less than 3\n                          </mat-error>\n                      </mat-form-field>\n\n                  </div>\n                  <span [innerHTML]=\"cstatus\"></span>\n                  <div class=\"divider divider-md\"></div>\n                  \n                  <div class=\"row\">\n                      <div class=\"col-md-12 text-center\">\n                          <button class=\"col-md-1\" type=\"button\"  (click)=\"subcategoryclose()\" mat-raised-button color=\"warn\" >Cancel</button>\n                          <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createSubCategoryForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                      </div>\n                  </div>\n\n              </form>\n\n\n\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/subcategory-sidebar/subcategory-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-sizing: border-box;\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  background: rgba(19, 18, 18, 0.8);\n  margin-top: 50px;\n  z-index: 9; }\n\n:host.is-Subopen {\n  display: block; }\n\n.subSection {\n  background: #fff;\n  height: 100%; }\n\n.articleTitle {\n  text-align: center;\n  margin-top: 15px !important; }\n\n.with-maxwidth {\n  width: 400px; }\n\n@media screen and (max-width: 600px) {\n  .with-maxwidth {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subcategory-sidebar/subcategory-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubcategorySidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_sidebar_category_sidebar_service__ = __webpack_require__("../../../../../src/app/category-sidebar/category-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subcategory_sidebar_service__ = __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__discounts_sidebar_discounts_sidebar_service__ = __webpack_require__("../../../../../src/app/discounts-sidebar/discounts-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SubcategorySidebarComponent = (function () {
    function SubcategorySidebarComponent(userService, cd, categorysidebar, subcategorysidebar, discountsidebar) {
        this.userService = userService;
        this.cd = cd;
        this.categorysidebar = categorysidebar;
        this.subcategorysidebar = subcategorysidebar;
        this.discountsidebar = discountsidebar;
        this.isSubOpen = false;
        this.url = '/api/';
        // For Create sub Category
        this.createSubCategoryForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            subcategory: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(3), this.noWhitespaceValidator])),
            category: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)])),
        });
    }
    SubcategorySidebarComponent.prototype.noWhitespaceValidator = function (control) {
        var isWhitespace = (control.value || '').trim().length < 3;
        var isValid = !isWhitespace;
        return isValid ? null : { 'whitespace': true };
    };
    SubcategorySidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categorysidebar.categorySidebarClose();
        this.subcategorysidebar.subcategorySidebarClose();
        this.discountsidebar.discountSidebarClose();
        this.categoriesdata('ALL');
        this.subcategorysidebar.schange.subscribe(function (isSubOpen) {
            _this.isSubOpen = isSubOpen;
        });
    };
    // close create sub category menu
    SubcategorySidebarComponent.prototype.subcategoryclose = function () {
        this.subcategorysidebar.subcategorySidebarClose();
    };
    SubcategorySidebarComponent.prototype.categoriesdata = function (status) {
        var _this = this;
        var data = {
            status: status
        };
        this.userService.readCategories('/api/').subscribe(function (data) {
            var cdata = data.filter(function (category) { return category.active == true; });
            cdata = cdata.filter(function (category) { return category.parentid == null; });
            _this.categoriesList = [];
            for (var i = 0; i < cdata.length; i++) {
                _this.categoriesList.push({ value: cdata[i].id, viewValue: cdata[i].text });
            }
            _this.cd.detectChanges();
        });
    };
    // Function For Create category
    SubcategorySidebarComponent.prototype.onCreateSubCategorySubmit = function (createSubCategoryForm, formDirective) {
        var _this = this;
        var reqdata = {
            parentId: this.createSubCategoryForm.get('category').value,
            text: this.createSubCategoryForm.get('subcategory').value
        };
        this.userService.createSubCategory(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Sub Category Added Successfully !';
            formDirective.resetForm();
            createSubCategoryForm.reset();
        }, function (err) {
            console.log(err.error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-Subopen'),
        __metadata("design:type", Object)
    ], SubcategorySidebarComponent.prototype, "isSubOpen", void 0);
    SubcategorySidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subcategory-sidebar',
            template: __webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subcategory-sidebar/subcategory-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_2__category_sidebar_category_sidebar_service__["a" /* categorySideBarService */], __WEBPACK_IMPORTED_MODULE_3__subcategory_sidebar_service__["a" /* subcategorySideBarService */],
            __WEBPACK_IMPORTED_MODULE_4__discounts_sidebar_discounts_sidebar_service__["a" /* discountSideBarService */]])
    ], SubcategorySidebarComponent);
    return SubcategorySidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subcategory-sidebar/subcategory-sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subcategorySideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var subcategorySideBarService = (function () {
    function subcategorySideBarService() {
        this.isSubOpen = false;
        this.schange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    subcategorySideBarService.prototype.toggle = function () {
        this.isSubOpen = !this.isSubOpen;
        this.schange.emit(this.isSubOpen);
    };
    subcategorySideBarService.prototype.subcategorySidebarClose = function () {
        this.schange.emit(false);
    };
    subcategorySideBarService.prototype.subcategorySidebarOpen = function () {
        this.schange.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], subcategorySideBarService.prototype, "schange", void 0);
    subcategorySideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], subcategorySideBarService);
    return subcategorySideBarService;
}());



/***/ }),

/***/ "../../../../../src/app/subscription-plan/editsubscriptionplan-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Subscription Plan Details</h4>\n<form class=\"\" [formGroup]=\"editSubscriptionPlanForm\"  (ngSubmit)='onEditSubscriptionplanSubmit()'>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"subscriptionplanid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\" value=\"{{data.name}}\" required formControlName=\"name\">\n        <mat-error>\n            Name required\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Credits\" [(ngModel)]=\"data.credits\" value=\"{{data.credits}}\" required formControlName=\"credits\">\n        <mat-error>\n            Credits required\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Validity\" [(ngModel)]=\"data.validity\" value=\"{{data.validity}}\" required formControlName=\"validity\">\n        <mat-error>\n            Validity required\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"price\" [(ngModel)]=\"data.price\" value=\"{{data.price}}\" required formControlName=\"price\">\n        <mat-error>\n            Price required\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"plan Type\" [(ngModel)]=\"data.planType\" value=\"{{data.planType}}\" required formControlName=\"planType\">\n        <mat-error>\n            Plan Type required\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"plan for\" [(ngModel)]=\"data.for\" value=\"{{data.for}}\" required formControlName=\"for\">\n        <mat-error>\n            Plan for required\n        </mat-error>\n    </mat-form-field>\n\n    \n\n    \n\n    \n\n    <div mat-dialog-actions>\n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editSubscriptionPlanForm.valid\" mat-raised-button color=\"warn\">Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/subscription-plan/editsubscriptionplan-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscription-plan/subscription-plan.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-10\">\n            <h2 class=\"article-title\">All Subscription plans ({{subscriptionPlansList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Subscription Plans\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row subscriptionplanheading\">\n                  \n                  <div class=\"col-md-2\">Name</div>\n                  <div class=\"col-md-2\">Plan Type</div>\n                  <div class=\"col-md-1\">Price</div>\n                  <div class=\"col-md-1\">Credits</div>\n                  <div class=\"col-md-2\">Plan For</div>\n                  <div class=\"col-md-2\">Created At</div>\n                  <div class=\"col-md-1\">Validity</div>\n                  <div class=\"col-md-1\"></div>\n                  \n                </div>\n                  <ul class=\"list-group subscriptionplanslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let subscriptionplan of subscriptionPlansList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-2\">{{subscriptionplan?.name}} </div>\n                          <div class=\"col-md-2\">{{subscriptionplan?.planType}} </div>\n                          <div class=\"col-md-1\">{{subscriptionplan?.price}} </div>\n                          <div class=\"col-md-1\">{{subscriptionplan?.credits}}</div>\n                          <div class=\"col-md-2\">{{subscriptionplan?.for}}</div>\n                          <div class=\"col-md-2\">{{subscriptionplan?.createdAt | date: 'yyyy-MM-dd'}}</div>\n                          <div class=\"col-md-1\">{{subscriptionplan?.validity}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(subscriptionplan?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{subscriptionplan?.id}}\">\n                                    <a class=\"pointer\" (click)=\"updateSubscriptionPlan( subscriptionplan?.id )\" >Update</a>\n                                    <a class=\"pointer\" (click)=\"deleteSubscriptionPlan( subscriptionplan?.id )\" >Delete</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    </ul>\n                    <div *ngIf=\"subscriptionPlansList == undefined || (subscriptionPlansList && (subscriptionPlansList | filter: searchText).length === 0)\">\n                      <h4 style=\"text-align: center\" >No Data Found</h4>\n                    </div>\n                    <div class=\"pull-right\"  *ngIf=\"subscriptionPlansList && (subscriptionPlansList | filter: searchText).length > 0\">\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                    </div>\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "../../../../../src/app/subscription-plan/subscription-plan.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subscriptionplanslist li {\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  word-wrap: break-word; }\n\n.subscriptionplanheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.adddicsountbtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscription-plan/subscription-plan.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubscriptionPlanComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsubscriptionplansDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SubslistActDactDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var SubscriptionPlanComponent = (function () {
    function SubscriptionPlanComponent(userService, spinner, router, dialog) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.url = '/api/';
        this.spinner.show();
        this.subscriptionPlansdata();
    }
    SubscriptionPlanComponent.prototype.ngOnInit = function () {
    };
    SubscriptionPlanComponent.prototype.subscriptionPlansdata = function () {
        var _this = this;
        this.spinner.show();
        this.userService.readsubscriptionPlans('/api/').subscribe(function (data) {
            _this.subscriptionPlansList = data;
            console.log(data);
            _this.spinner.hide();
        });
    };
    SubscriptionPlanComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".myDropdown" + id).addClass('show');
    };
    SubscriptionPlanComponent.prototype.updateSubscriptionPlan = function (id) {
        this.spinner.show();
        var selectedSubscriptionPlan = this.subscriptionPlansList.find(function (subscriptionPlans) { return subscriptionPlans.id == id; });
        this.subscriptionPlanList = selectedSubscriptionPlan;
        this.spinner.hide();
        this.editsubscriptionplanDialog();
    };
    SubscriptionPlanComponent.prototype.deleteSubscriptionPlan = function (id) {
        var _this = this;
        this.spinner.show();
        var reqData = {
            id: id
        };
        this.userService.deleteSubscriptionPlanById(reqData).subscribe(function (data) {
            _this.message = "Coupon Deleted Successfully!";
            console.log(data);
            _this.modifySubscriptionPlanDialog();
            _this.spinner.hide();
        }, function (err) {
            console.log(err);
            _this.message = err.error.message;
            _this.modifySubscriptionPlanDialog();
            _this.spinner.hide();
        });
    };
    SubscriptionPlanComponent.prototype.modifySubscriptionPlanDialog = function () {
        var dialogRef = this.dialog.open(SubslistActDactDialogComponent, {
            width: '450px',
            data: this.message
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    // Function to edit Subscription data
    SubscriptionPlanComponent.prototype.editsubscriptionplanDialog = function () {
        var dialogRef = this.dialog.open(EditsubscriptionplansDialogComponent, {
            width: '450px',
            data: this.subscriptionPlanList
        });
        console.log(this.subscriptionPlanList);
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    SubscriptionPlanComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscription-plan',
            template: __webpack_require__("../../../../../src/app/subscription-plan/subscription-plan.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscription-plan/subscription-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], SubscriptionPlanComponent);
    return SubscriptionPlanComponent;
}());

var EditsubscriptionplansDialogComponent = (function () {
    function EditsubscriptionplansDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        this.editSubscriptionPlanForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            subscriptionplanid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            name: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            credits: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            validity: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            price: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            planType: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            for: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
        });
    }
    EditsubscriptionplansDialogComponent.prototype.onEditSubscriptionplanSubmit = function () {
        var _this = this;
        var reqdata = {
            id: this.editSubscriptionPlanForm.get('subscriptionplanid').value,
            credits: this.editSubscriptionPlanForm.get('credits').value,
            name: this.editSubscriptionPlanForm.get('name').value,
            validity: this.editSubscriptionPlanForm.get('validity').value,
            price: this.editSubscriptionPlanForm.get('price').value,
            planType: this.editSubscriptionPlanForm.get('planType').value,
            for: this.editSubscriptionPlanForm.get('for').value,
        };
        this.userService.editSubscriptionPlanbyid(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Subscription Updated Successfully !';
            _this.updateDialog();
        }, function (err) {
            console.log(err);
            _this.cstatus = err.error.message;
            _this.updateDialog();
        });
    };
    EditsubscriptionplansDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditsubscriptionplansDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditsubscriptionplansDialogComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditsubscriptionplansDialogComponent.prototype, "myform", void 0);
    EditsubscriptionplansDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/subscription-plan/editsubscriptionplan-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscription-plan/editsubscriptionplan-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], EditsubscriptionplansDialogComponent);
    return EditsubscriptionplansDialogComponent;
}());

var SubslistActDactDialogComponent = (function () {
    function SubslistActDactDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    SubslistActDactDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        location.reload();
    };
    SubslistActDactDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/subscription-plan/subslistActDact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscription-plan/subslistActDact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object])
    ], SubslistActDactDialogComponent);
    return SubslistActDactDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subscription-plan/subslistActDact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"example-form\">\n    <h4 style=\"text-align: center\">{{data}}</h4>\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/subscription-plan/subslistActDact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\" with-maxwidth SubscriptionPlanSection chapter pull-right\">\n\n  <article class=\"article\">\n      <h2 class=\"article-title articleTitle\">Create Subscription Plan</h2>\n      <div class=\"box box-default\">\n          <div class=\"box-body\">\n\n\n              <form class=\"\" [formGroup]=\"createSubscriptionPlanForm\" #formDirective=\"ngForm\" (ngSubmit)=\"onCreateSubscriptionPlanSubmit(createSubscriptionPlanForm,formDirective)\">\n\n                  <div class=\"row\">\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Plan Name\" required formControlName=\"name\">\n                        <mat-error>\n                                Name Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                      <mat-select placeholder=\"Plan For\" required formControlName=\"planfor\">\n                          <mat-option *ngFor=\"let plan of planFor\" [value]=\"plan.value\">\n                              {{ plan.text }}\n                            </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                      <mat-select placeholder=\"Plan Type\" required formControlName=\"plantype\">\n                          <mat-option *ngFor=\"let plantype of planType\" [value]=\"plantype.value\">\n                              {{ plantype.text }}\n                            </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n\n                      <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Credits\" required formControlName=\"credits\">\n                        <mat-error>\n                                Credits Price Required!\n                        </mat-error>\n                    </mat-form-field>\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Validity in days\" required formControlName=\"validity\">\n                        <mat-error>\n                                Validity Required!\n                        </mat-error>\n                    </mat-form-field>\n\n\n                    <mat-form-field class=\"example-full-width col-md-12\">\n                        <input matInput placeholder=\"Price\" required formControlName=\"price\">\n                        <mat-error>\n                            Price Required!\n                        </mat-error>\n                    </mat-form-field>\n\n\n                  </div>\n                  <span [innerHTML]=\"cstatus\"></span>\n                  <div class=\"divider divider-md\"></div>\n                  \n                  <div class=\"row\">\n                      <div class=\"col-md-12 text-center\">\n                          <button class=\"col-md-1\" type=\"button\"  (click)=\"subscriptionplanclose()\" mat-raised-button color=\"warn\" >Cancel</button>\n                          <button class=\"col-md-1 submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!createSubscriptionPlanForm.valid\" mat-raised-button color=\"primary\">Submit</button>\n                      </div>\n                  </div>\n\n              </form>\n\n          </div>\n      </div>\n  </article>\n</section>"

/***/ }),

/***/ "../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  box-sizing: border-box;\n  display: none;\n  position: fixed;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  padding: 20px 10px;\n  background: rgba(19, 18, 18, 0.8);\n  margin-top: 50px;\n  z-index: 9; }\n\n:host.is-subscriptionPlanOpen {\n  display: block; }\n\n.SubscriptionPlanSection {\n  background: #fff;\n  height: 100%; }\n\n.articleTitle {\n  text-align: center;\n  margin-top: 15px !important; }\n\n.with-maxwidth {\n  width: 400px;\n  overflow-y: auto; }\n\n@media screen and (max-width: 600px) {\n  .with-maxwidth {\n    width: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscriptionplanSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscriptionplan_sidebar_service__ = __webpack_require__("../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubscriptionplanSidebarComponent = (function () {
    function SubscriptionplanSidebarComponent(userService, cd, subscriptionplanSidebar) {
        this.userService = userService;
        this.cd = cd;
        this.subscriptionplanSidebar = subscriptionplanSidebar;
        this.isSubscriptionplanOpen = false;
        this.url = '/api/';
        this.planFor = [
            { 'text': 'Agent', 'value': 'agent' },
            { 'text': 'shop Owner', 'value': 'shopOwner' }
        ];
        this.planType = [
            { 'text': 'Base', 'value': 'base' },
            { 'text': 'Topup', 'value': 'topup' }
        ];
        this.createSubscriptionPlanForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)])),
            planfor: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)])),
            plantype: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)])),
            credits: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)])),
            validity: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)])),
            price: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(1)]))
            //actualPrice: new FormControl('',Validators.compose([Validators.required,this.noWhitespaceValidator])),
        });
    }
    // Function For Create discont
    SubscriptionplanSidebarComponent.prototype.onCreateSubscriptionPlanSubmit = function (createSubscriptionPlanForm, formDirective) {
        var _this = this;
        var userdetails = {
            email: localStorage.getItem('useremail'),
            password: localStorage.getItem('password')
        };
        var reqdata = {
            identifier: 1,
            name: this.createSubscriptionPlanForm.get('name').value,
            for: this.createSubscriptionPlanForm.get('planfor').value,
            planType: this.createSubscriptionPlanForm.get('plantype').value,
            credits: this.createSubscriptionPlanForm.get('credits').value,
            validity: this.createSubscriptionPlanForm.get('validity').value,
            price: this.createSubscriptionPlanForm.get('price').value,
        };
        this.userService.createSubscriptionPlan(userdetails, reqdata)
            .subscribe(function (data) {
            console.log(data);
            if (data) {
                _this.cstatus = 'Subscription Plan Added Successfully !';
                formDirective.resetForm();
                createSubscriptionPlanForm.reset();
            }
        }, function (err) {
            console.log(err);
            _this.cstatus = '<span style="color:red">' + err.error.message + '</span>';
        });
    };
    SubscriptionplanSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionplanSidebar.subscriptionplanchange.subscribe(function (SubscriptionPlanOpen) {
            _this.isSubscriptionplanOpen = SubscriptionPlanOpen;
            //this.shopsdata();
        });
    };
    // close create sub category menu
    SubscriptionplanSidebarComponent.prototype.subscriptionplanclose = function () {
        this.subscriptionplanSidebar.subscriptionplanSidebarClose();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.is-subscriptionPlanOpen'),
        __metadata("design:type", Object)
    ], SubscriptionplanSidebarComponent.prototype, "isSubscriptionplanOpen", void 0);
    SubscriptionplanSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscriptionplan-sidebar',
            template: __webpack_require__("../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2__subscriptionplan_sidebar_service__["a" /* subscriptionplanSideBarService */]])
    ], SubscriptionplanSidebarComponent);
    return SubscriptionplanSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/subscriptionplan-sidebar/subscriptionplan-sidebar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return subscriptionplanSideBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var subscriptionplanSideBarService = (function () {
    function subscriptionplanSideBarService() {
        this.isSubscriptionplanOpen = false;
        this.subscriptionplanchange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    subscriptionplanSideBarService.prototype.toggle = function () {
        this.isSubscriptionplanOpen = !this.isSubscriptionplanOpen;
        this.subscriptionplanchange.emit(this.isSubscriptionplanOpen);
    };
    subscriptionplanSideBarService.prototype.subscriptionplanSidebarClose = function () {
        this.subscriptionplanchange.emit(false);
    };
    subscriptionplanSideBarService.prototype.subscriptionplanSidebarOpen = function () {
        this.subscriptionplanchange.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], subscriptionplanSideBarService.prototype, "subscriptionplanchange", void 0);
    subscriptionplanSideBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], subscriptionplanSideBarService);
    return subscriptionplanSideBarService;
}());



/***/ }),

/***/ "../../../../../src/app/subscriptions/editsubscription-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Subscription Details</h4>\n<form class=\"\" [formGroup]=\"editSubscriptionForm\"  (ngSubmit)='onEditSubscriptionSubmit()'>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"subscriptionid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Credits\" [(ngModel)]=\"data.credits\" value=\"{{data.credits}}\" required formControlName=\"credits\">\n        <mat-error>\n            Credits required\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Subscribed For\" [(ngModel)]=\"data.subscribedFor\" value=\"{{data.subscribedFor}}\" required formControlName=\"subscribedFor\">\n        <mat-error>\n            Subscribed for required\n        </mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n        <input matInput [matDatepicker]=\"subscribedpicker\" [(ngModel)]=\"data.subscribedOn\" placeholder=\"Subscribed On\" formControlName=\"subscribedOn\">\n        <mat-datepicker-toggle matSuffix [for]=\"subscribedpicker\"></mat-datepicker-toggle>\n        <mat-datepicker #subscribedpicker></mat-datepicker>\n      </mat-form-field>\n\n    <div mat-dialog-actions>\n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editSubscriptionForm.valid\" mat-raised-button color=\"warn\">Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/subscriptions/editsubscription-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscriptions/subscriptions.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-10\">\n            <h2 class=\"article-title\">All Subscriptions ({{subscriptionsList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Subscriptions\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row subscriptionheading\">\n                  \n                  <div class=\"col-md-2\">Shop Name</div>\n                  <div class=\"col-md-2\">User Name</div>\n                  <div class=\"col-md-2\">Subscribed For</div>\n                  <div class=\"col-md-1\">Credits</div>\n                  <div class=\"col-md-2\">Approval Status</div>\n                  <div class=\"col-md-2\">Subscribed On</div>\n                  <div class=\"col-md-1\"></div>\n                  \n                </div>\n                  <ul class=\"list-group subscriptionslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let subscription of subscriptionsList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-2\">{{subscription?.shopName}} </div>\n                          <div class=\"col-md-2\">{{subscription?.userName}} </div>\n                          <div class=\"col-md-2\">{{subscription?.subscribedFor}} </div>\n                          <div class=\"col-md-1\">{{subscription?.credits}}</div>\n                          <div class=\"col-md-2\">{{subscription?.approvalStatus}}</div>\n                          <div class=\"col-md-2\">{{subscription?.subscribedOn | date: 'yyyy-MM-dd'}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(subscription?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{subscription?.id}}\">\n                                    <a class=\"pointer\" (click)=\"updateSubscription( subscription?.id )\" >Update</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    </ul>\n                    <div *ngIf=\"subscriptionsList == undefined || (subscriptionsList && (subscriptionsList | filter: searchText).length === 0)\">\n                      <h4 style=\"text-align: center\" >No Data Found</h4>\n                    </div>\n                    <div class=\"pull-right\"  *ngIf=\"subscriptionsList && (subscriptionsList | filter: searchText).length > 0\">\n                        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n                    </div>\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "../../../../../src/app/subscriptions/subscriptions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".subscriptionslist li {\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  word-wrap: break-word; }\n\n.subscriptionheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.adddicsountbtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/subscriptions/subscriptions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubscriptionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditsubscriptionsDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var SubscriptionsComponent = (function () {
    function SubscriptionsComponent(userService, spinner, router, dialog) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.url = '/api/';
        this.spinner.show();
        this.subscriptionsdata();
    }
    SubscriptionsComponent.prototype.ngOnInit = function () {
    };
    SubscriptionsComponent.prototype.subscriptionsdata = function () {
        var _this = this;
        this.spinner.show();
        this.userService.readsubscriptions('/api/').subscribe(function (data) {
            _this.subscriptionsList = data;
            console.log(data);
            _this.spinner.hide();
        });
    };
    SubscriptionsComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        __WEBPACK_IMPORTED_MODULE_7_jquery__(".myDropdown" + id).addClass('show');
    };
    SubscriptionsComponent.prototype.updateSubscription = function (id) {
        this.spinner.show();
        var selectedSubscription = this.subscriptionsList.find(function (subscription) { return subscription.id == id; });
        this.subscriptionList = selectedSubscription;
        console.log(this.subscriptionList);
        this.spinner.hide();
        this.editsubscriptionDialog();
    };
    // Function to edit Subscription data
    SubscriptionsComponent.prototype.editsubscriptionDialog = function () {
        var dialogRef = this.dialog.open(EditsubscriptionsDialogComponent, {
            width: '450px',
            data: this.subscriptionList
        });
        console.log(this.subscriptionList);
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    SubscriptionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-subscriptions',
            template: __webpack_require__("../../../../../src/app/subscriptions/subscriptions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscriptions/subscriptions.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], SubscriptionsComponent);
    return SubscriptionsComponent;
}());

var EditsubscriptionsDialogComponent = (function () {
    function EditsubscriptionsDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        this.editSubscriptionForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            subscriptionid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](''),
            credits: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            subscribedFor: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)])),
            subscribedOn: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(1)]))
        });
    }
    EditsubscriptionsDialogComponent.prototype.onEditSubscriptionSubmit = function () {
        var _this = this;
        var subscribedOn = new Date(this.editSubscriptionForm.get('subscribedOn').value);
        var subscribedDate = subscribedOn.getFullYear() + '-' + (subscribedOn.getMonth() + 1) + '-' + subscribedOn.getDate();
        var validTo = new Date(this.editSubscriptionForm.get('subscribedOn').value);
        var toDate = validTo.getFullYear() + '-' + (validTo.getMonth() + 1) + '-' + validTo.getDate();
        var reqdata = {
            id: this.editSubscriptionForm.get('subscriptionid').value,
            credits: this.editSubscriptionForm.get('credits').value,
            subscribedFor: this.editSubscriptionForm.get('subscribedFor').value,
            subscribedOn: subscribedDate
        };
        this.userService.editSubscriptionbyid(this.url, reqdata)
            .subscribe(function (data) {
            _this.cstatus = 'Subscription Updated Successfully !';
            _this.updateDialog();
        }, function (err) {
            console.log(err);
            _this.cstatus = err.error.message;
            _this.updateDialog();
        });
    };
    EditsubscriptionsDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditsubscriptionsDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    EditsubscriptionsDialogComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditsubscriptionsDialogComponent.prototype, "myform", void 0);
    EditsubscriptionsDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/subscriptions/editsubscription-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/subscriptions/editsubscription-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatDialog */]])
    ], EditsubscriptionsDialogComponent);
    return EditsubscriptionsDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helper_constants__ = __webpack_require__("../../../../../src/app/helper/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helper_navigationService__ = __webpack_require__("../../../../../src/app/helper/navigationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/**
 * Created by saikiran on 28/11/17.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http, navservice) {
        this.http = http;
        this.navservice = navservice;
        this.categorytoggle = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["BehaviorSubject"](false);
    }
    UserService.prototype.login = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].LOGIN_USER, data);
    };
    UserService.prototype.forgotpassword = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].FORGOT_PASSWORD, data);
    };
    UserService.prototype.register = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].REGISTER_USER, data);
    };
    UserService.prototype.createShop = function (userDetails, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa(userDetails.email + ":" + userDetails.password));
        //headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].CREATE_SHOP, data, { headers: headers });
    };
    UserService.prototype.readshops = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_SHOP, { headers: headers });
    };
    UserService.prototype.readshopbyid = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_SHOP, data);
    };
    UserService.prototype.activeDeactiveShopById = function (userDetails, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_SHOP, data, { headers: headers });
    };
    UserService.prototype.deleteshopbyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        var httpOptions = {
            headers: headers, body: data
        };
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].DELETE_SHOP, httpOptions);
    };
    UserService.prototype.editshopbyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].UPDATE_SHOP, data, { headers: headers });
    };
    UserService.prototype.createAgent = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].CREATE_AGENT, data);
    };
    UserService.prototype.readagents = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_AGENT, { headers: headers });
    };
    UserService.prototype.readagentbyid = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_AGENT, data);
    };
    UserService.prototype.editagentbyid = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_AGENT, data);
    };
    UserService.prototype.activeDeactiveAgentById = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_AGENT, data, { headers: headers });
    };
    UserService.prototype.createCategory = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        //headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].CREATE_CATEGORY, data, { headers: headers });
    };
    UserService.prototype.createDiscount = function (userDetails, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        //headers = headers.append("Authorization", "Basic " + btoa(userDetails.email+":"+userDetails.password));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        //headers = headers.append("content-type", "multipart/form-data");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].CREATE_DISCOUNT, data, { headers: headers });
    };
    UserService.prototype.readCategories = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_CATEGORY, { headers: headers });
    };
    UserService.prototype.readActiveCategories = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        headers = headers.append("Content-Type", "application/x-www-form-urlencoded");
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_CATEGORY, { headers: headers });
    };
    UserService.prototype.editCategorybyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_CATEGORY, data, { headers: headers });
    };
    UserService.prototype.activeDeactiveCategorybyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].ACTIVE_DEACTIVE_CATEGORY, data, { headers: headers });
    };
    UserService.prototype.activeDeactiveSubCategorybyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].ACTIVE_DEACTIVE_SUB_CATEGORY, data, { headers: headers });
    };
    UserService.prototype.createSubCategory = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].CREATE_SUB_CATEGORY, data, { headers: headers });
    };
    UserService.prototype.readSubCategories = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_SUB_CATEGORY, data);
    };
    UserService.prototype.editSubCategorybyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_SUB_CATEGORY, data, { headers: headers });
    };
    UserService.prototype.readusers = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_USERS, data);
    };
    UserService.prototype.edituserbyid = function (url, data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_USERS, data);
    };
    UserService.prototype.readdiscounts = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_DISCOUNTS, { headers: headers });
    };
    UserService.prototype.readcoupons = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_COUPONS, { headers: headers });
    };
    UserService.prototype.editCouponbyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_COUPONS, data, { headers: headers });
    };
    UserService.prototype.deleteCouponById = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        var httpOptions = {
            headers: headers, body: data
        };
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].DELETE_COUPON, httpOptions);
    };
    UserService.prototype.readsubscriptions = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_SUBSCRIPTIONS, { headers: headers });
    };
    UserService.prototype.editSubscriptionbyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_SUBSCRIPTIONS, data, { headers: headers });
    };
    UserService.prototype.createSubscriptionPlan = function (userDetails, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].CREATE_SUBSCRIPTIONPLANS, data, { headers: headers });
    };
    UserService.prototype.readsubscriptionPlans = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_SUBSCRIPTIONPLANS, { headers: headers });
    };
    UserService.prototype.editSubscriptionPlanbyid = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].MODIFY_SUBSCRIPTIONPLANS, data, { headers: headers });
    };
    UserService.prototype.deleteSubscriptionPlanById = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        var httpOptions = {
            headers: headers, body: data
        };
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].DELETE_SUBSCRIPTIONPLANS, httpOptions);
    };
    UserService.prototype.readshopmetricsbydate = function (url, data) {
        var geturl = 'http://122.175.60.20:8104/stats/shopsAdded?fromDate=' + data.from_date + '&toDate=' + data.to_date;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(geturl, { headers: headers });
    };
    UserService.prototype.readusermetricsbydate = function (url, data) {
        var geturl = 'http://122.175.60.20:8104/stats/userAdded?fromDate=' + data.from_date + '&toDate=' + data.to_date + '&type=agent';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(geturl, { headers: headers });
    };
    UserService.prototype.readdiscountmetricsbydate = function (url, data) {
        var geturl = 'http://122.175.60.20:8104/stats/discountAdded?fromDate=' + data.from_date + '&toDate=' + data.to_date + '&type=agent';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(geturl, { headers: headers });
    };
    UserService.prototype.readcouponmetricsbydate = function (url, data) {
        var geturl = 'http://122.175.60.20:8104/stats/couponAdded?fromDate=' + data.from_date + '&toDate=' + data.to_date + '&type=agent';
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(geturl, { headers: headers });
    };
    UserService.prototype.readdashboardmetrics = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append("Authorization", "Basic " + btoa("msrao.dari@gmail.com:himaja24"));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__helper_constants__["a" /* APP_CONSTANTS */].READ_DASHBOARD_METRICS, { headers: headers });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__helper_navigationService__["a" /* NavService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/users/userlist-cnfact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onactivateClick( data.agent_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/userlist-cnfact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/userlist-cnfdact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to De-Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-raised-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\" color=\"warn\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onDeacativateClick( data.agent_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/users/userlist-cnfdact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<article class=\"article\">\n  \n  <div class=\"box box-default\">\n    <div class=\"box-body\">\n         \n        <div class=\"row white\" style=\"margin: 0px\">\n          <div class=\"col-md-10\">\n            <h2 class=\"article-title\">All Users ({{usersList?.length}})</h2>\n          </div>\n          <div class=\"col-md-2\">\n              <mat-form-field class=\"example-full-width\" style=\"margin-top: 10px\">\n                  <input matInput [(ngModel)]=\"searchText\"  placeholder=\"Search\" autocomplete=\"off\">\n              </mat-form-field>\n          </div>\n          <!-- <div class=\"col-md-2\" style=\"margin: auto\">\n              <mat-chip-list>\n              <mat-chip class=\"pull-right adduserbtn\"  selected=\"true\" [routerLink]=\"['/createuser']\"><i class=\"material-icons\">add_circle_outline</i>&nbsp;&nbsp; New User</mat-chip>\n              </mat-chip-list>\n          </div> -->\n        </div>\n      <mat-tab-group (selectedTabChange) = \"onTabClick($event)\">\n        <mat-tab class=\"tablabel\" label=\"All Users\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row userheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">User Name</div>\n                  <div class=\"col-md-2\">Email</div>\n                  <div class=\"col-md-2\">Address</div>\n                  <div class=\"col-md-2\">User Type</div>\n                  <div class=\"col-md-2\">Created At</div>\n                </div>\n                  <ul class=\"list-group userslist\">\n                      <li class=\"list-group-item\" *ngFor=\"let user of usersList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p, totalItems: total }\">\n                        <div class=\"row\">\n                          <div class=\"col-md-1\">\n                            <button title=\"Active\" *ngIf=\"user.status == 'Y' \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                            <button title=\"De-Active\" *ngIf=\"user.status == 'N' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                            <button title=\"Rejected\" *ngIf=\"user.status == 'R' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                          </div>\n                          <div class=\"col-md-2\">{{user.firstName}} {{user.lastName}} <br>{{user.phoneNumber}} </div>\n                          <div class=\"col-md-2\">{{user.email}} </div>\n                          <div class=\"col-md-2\">{{user.address}}</div>\n                          <div class=\"col-md-2\">{{user.type}}</div>\n                          <div class=\"col-md-2\">{{user.createdAt}}</div>\n                          <div class=\"col-md-1\">\n                            <!-- three dot menu -->\n                            <div class=\"dropdown\">\n                                <!-- three dots -->\n                                <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(user?.id)\">\n                                    <li></li>\n                                    <li></li>\n                                    <li></li>\n                                </ul>\n                                <!-- menu -->\n                                <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{user?.id}}\">\n                                    <!-- <a class=\"pointer\" (click)=\"editUser( user?.id )\" >Edit</a> -->\n                                    <a class=\"pointer\" *ngIf=\"user.status == 'Y' \" (click)=\"deactivateUser( user?.id )\" >De-activate</a>\n                                    <a class=\"pointer\" *ngIf=\"user.status == 'N' || user.status == 'R' \" (click)=\"activateUser( user?.id )\" >Activate</a>\n                                </div>\n                            </div>\n                              \n                          </div>\n                          \n                        </div>\n\n                      </li>\n                    <!-- </table> -->\n                    </ul>\n                    <div *ngIf=\"usersList && (usersList | filter: searchText).length === 0\">\n                        <h4 style=\"text-align: center\" >No Data Found</h4>\n                      </div>\n                    \n                    <div class=\"pull-right\">\n                      <pagination-controls (totalItems) = \"total = $event\" (pageChange)=\"p = $event\"></pagination-controls>\n                  </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"Active\" >\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row userheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">User Name</div>\n                  <div class=\"col-md-2\">Email</div>\n                  <div class=\"col-md-2\">Address</div>\n                  <div class=\"col-md-2\">User Type</div>\n                  <div class=\"col-md-2\">Created At</div>\n                </div>\n                <ul class=\"list-group userslist\">\n                  <li class=\"list-group-item\" *ngFor=\"let user of usersList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                    <div class=\"row\">\n                      <div class=\"col-md-1\">\n                        <button title=\"Active\" *ngIf=\"user.status == 'Y' \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                        <button title=\"De-Active\" *ngIf=\"user.status == 'N' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                        <button title=\"Rejected\" *ngIf=\"user.status == 'R' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                      </div>\n                      <div class=\"col-md-2\">{{user.firstName}} {{user.lastName}} <br>{{user.phoneNumber}} </div>\n                      <div class=\"col-md-2\">{{user.email}} </div>\n                      <div class=\"col-md-2\">{{user.address}}</div>\n                      <div class=\"col-md-2\">{{user.type}}</div>\n                      <div class=\"col-md-2\">{{user.createdAt}}</div>\n                      <div class=\"col-md-1\">\n                        <!-- three dot menu -->\n                        <div class=\"dropdown\">\n                            <!-- three dots -->\n                            <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(user?.id)\">\n                                <li></li>\n                                <li></li>\n                                <li></li>\n                            </ul>\n                            <!-- menu -->\n                            <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{user?.id}}\">\n                                <!-- <a class=\"pointer\" (click)=\"editUser( user?.id )\" >Edit</a> -->\n                                <a class=\"pointer\" *ngIf=\"user.status == 'Y' \" (click)=\"deactivateUser( user?.id )\" >De-activate</a>\n                                <a class=\"pointer\" *ngIf=\"user.status == 'N' || user.status == 'R' \" (click)=\"activateUser( user?.id )\" >Activate</a>\n                            </div>\n                        </div>\n                          \n                      </div>\n                      \n                    </div>\n\n                  </li>\n                <!-- </table> -->\n                </ul>\n                <div *ngIf=\"usersList && (usersList | filter: searchText).length === 0\">\n                    <h4 style=\"text-align: center\" >No Data Found</h4>\n                  </div>\n                <div class=\"pull-right\">\n                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n              </div>\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n        <mat-tab label=\"In Active\">\n          <section class=\"box box-transparent\">\n            <div class=\"box-body\">\n              <div class=\"\">\n                <div class=\"row userheading\">\n                  <div class=\"col-md-1\"></div>\n                  <div class=\"col-md-2\">User Name</div>\n                  <div class=\"col-md-2\">Email</div>\n                  <div class=\"col-md-2\">Address</div>\n                  <div class=\"col-md-2\">User Type</div>\n                  <div class=\"col-md-2\">Created At</div>\n                </div>\n                <ul class=\"list-group userslist\">\n                  <li class=\"list-group-item\" *ngFor=\"let user of usersList | filter : searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\n                    <div class=\"row\">\n                      <div class=\"col-md-1\">\n                        <button title=\"Active\" *ngIf=\"user.status == 'Y' \" mat-fab color=\"accent\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                        <button title=\"De-Active\" *ngIf=\"user.status == 'N' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                        <button title=\"Rejected\" *ngIf=\"user.status == 'R' \" mat-fab color=\"warn\"> <mat-icon class=\"material-icons\">person</mat-icon> </button>\n                      </div>\n                      <div class=\"col-md-2\">{{user.firstName}} {{user.lastName}} <br>{{user.phoneNumber}} </div>\n                      <div class=\"col-md-2\">{{user.email}} </div>\n                      <div class=\"col-md-2\">{{user.address}}</div>\n                      <div class=\"col-md-2\">{{user.type}}</div>\n                      <div class=\"col-md-2\">{{user.createdAt}}</div>\n                      <div class=\"col-md-1\">\n                        <!-- three dot menu -->\n                        <div class=\"dropdown\">\n                            <!-- three dots -->\n                            <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(user?.id)\">\n                                <li></li>\n                                <li></li>\n                                <li></li>\n                            </ul>\n                            <!-- menu -->\n                            <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{user?.id}}\">\n                                <!-- <a class=\"pointer\" (click)=\"editUser( user?.id )\" >Edit</a> -->\n                                <a class=\"pointer\" *ngIf=\"user.status == 'Y' \" (click)=\"deactivateUser( user?.id )\" >De-activate</a>\n                                <a class=\"pointer\" *ngIf=\"user.status == 'N' || user.status == 'R' \" (click)=\"activateUser( user?.id )\" >Activate</a>\n                            </div>\n                        </div>\n                          \n                      </div>\n                      \n                    </div>\n\n                  </li>\n                <!-- </table> -->\n                </ul>\n                <div *ngIf=\"usersList && (usersList | filter: searchText).length === 0\">\n                    <h4 style=\"text-align: center\" >No Data Found</h4>\n                  </div>\n                <div class=\"pull-right\">\n                  <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n              </div>\n\n              </div>\n            </div>\n          </section>\n        </mat-tab>\n      </mat-tab-group>\n\n    </div>\n  </div>\n</article>"

/***/ }),

/***/ "../../../../../src/app/users/users.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".userslist li {\n  margin-bottom: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  word-wrap: break-word; }\n\n.userheading {\n  margin: auto;\n  font-weight: bold !important;\n  margin-bottom: 10px;\n  color: #939dad; }\n\nmat-chip {\n  color: #fff !important; }\n\n.box-default {\n  background: #f5f5f7 !important; }\n\n.white {\n  background: #fff; }\n\n.adduserbtn {\n  background: #f4b11b !important;\n  padding: 12px 30px !important; }\n\n.icons li {\n  background: none repeat scroll 0 0 #000;\n  height: 4px;\n  width: 4px;\n  line-height: 0;\n  list-style: none outside none;\n  margin-top: 2px;\n  vertical-align: top;\n  border-radius: 50%;\n  pointer-events: none;\n  display: inline-block; }\n\n.dropbtn {\n  color: white;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  padding-left: 0px;\n  padding: 15px; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #f1f1f1; }\n\n.show {\n  display: block; }\n\n.pointer {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UsersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CnfDeactusersDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnfActusersDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var valnumber = /^[0-9][0-9]*$/;
var eml = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var UsersComponent = (function () {
    function UsersComponent(userService, spinner, router, dialog) {
        this.userService = userService;
        this.spinner = spinner;
        this.router = router;
        this.dialog = dialog;
        this.url = '/api/';
        this.total = 0;
        this.spinner.show();
        this.usersdata('ALL');
    }
    UsersComponent.prototype.ngOnInit = function () {
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        console.log(userdata);
        if (userdata.data[0].super_user && userdata.data[0].super_user != 'Y') {
            this.router.navigate(['dashboard']);
        }
        __WEBPACK_IMPORTED_MODULE_6_jquery__('.mat-tab-label-container').css('background', '#fff');
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    UsersComponent.prototype.onTabClick = function (event) {
        var index = event.index;
        //var status = 'ALL';
        var status;
        if (index == 1) {
            status = ['Y'];
        }
        else if (index == 2) {
            status = ['N'];
        }
        else {
            status = 'ALL';
        }
        this.usersdata(status);
    };
    UsersComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        //$(".myDropdown"+id).toggle();
        __WEBPACK_IMPORTED_MODULE_6_jquery__(".myDropdown" + id).addClass('show');
    };
    UsersComponent.prototype.usersdata = function (status) {
        var _this = this;
        this.spinner.show();
        var data = {
            status: status
        };
        this.userService.readusers('/api/', data).subscribe(function (data) {
            _this.usersList = data.data;
            //console.log(this.usersList);
            _this.spinner.hide();
        });
    };
    UsersComponent.prototype.deactivateUser = function (id) {
        var dialogRef = this.dialog.open(CnfDeactusersDialogComponent, {
            width: '450px',
            data: {
                agent_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UsersComponent.prototype.activateUser = function (id) {
        var dialogRef = this.dialog.open(CnfActusersDialogComponent, {
            width: '450px',
            data: {
                agent_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2_ngx_spinner__["NgxSpinnerService"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */]])
    ], UsersComponent);
    return UsersComponent;
}());

var CnfDeactusersDialogComponent = (function () {
    function CnfDeactusersDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfDeactusersDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfDeactusersDialogComponent.prototype.onDeacativateClick = function (userid) {
        var _this = this;
        var dact_user = {
            user_id: userid,
            change_status: 'N',
            db_query: 'change_status'
        };
        this.userService.edituserbyid(this.url, dact_user)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'User De-Activated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to De-Activate Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfDeactusersDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/users/userlist-cnfdact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/userlist-cnfdact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */]])
    ], CnfDeactusersDialogComponent);
    return CnfDeactusersDialogComponent;
}());

var CnfActusersDialogComponent = (function () {
    function CnfActusersDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfActusersDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfActusersDialogComponent.prototype.onactivateClick = function (userid) {
        var _this = this;
        var act_user = {
            user_id: userid,
            change_status: 'Y',
            db_query: 'change_status'
        };
        this.userService.edituserbyid(this.url, act_user)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Agent Activated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to Activate Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfActusersDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/users/userlist-cnfact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/userlist-cnfact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialog */]])
    ], CnfActusersDialogComponent);
    return CnfActusersDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/verifiedshops/dshoplist-cnfact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onactivateClick( data.shop_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/verifiedshops/dshoplist-cnfact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verifiedshops/dshoplist-cnfdact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-content style=\"text-align: center\">\n    <h4>Are you sure want to De-Activate ?</h4>\n</div>\n<div mat-dialog-actions>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Cancel </button>\n    <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onDeacativateClick( data.shop_id )\"> Confirm </button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/verifiedshops/dshoplist-cnfdact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verifiedshops/verifiedshops.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"webview container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"webview container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">Verified Shops</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n\n\n                    <div class=\"example-header\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Here..\">\n                        </mat-form-field>\n                    </div>\n\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n\n\n                        <!-- Name Column -->\n                        <ng-container matColumnDef=\"name\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Name</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.name}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Phone Number -->\n                        <ng-container matColumnDef=\"phoneNumber\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Phone Number</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.phoneNumber}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Category Column -->\n                        <ng-container matColumnDef=\"category\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Category</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.category}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Description Column -->\n                        <ng-container matColumnDef=\"description\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Description</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\"> {{shopdata.description}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Action Column -->\n                        <ng-container matColumnDef=\"status\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> <strong>Action</strong> </mat-header-cell>\n                            <mat-cell *matCellDef=\"let shopdata\">\n                                <mat-chip-list>\n                                    <mat-chip *ngIf=\"shopdata.status == 'Y'\" color=\"accent\" selected=\"true\" (click)=\"deactivateShop( shopdata.id )\">\n                                        De-Activate\n                                    </mat-chip>\n                                    <mat-chip *ngIf=\"shopdata.status == 'N'\" color=\"accent\" selected=\"true\" (click)=\"activateShop( shopdata.id )\">\n                                        Activate\n                                    </mat-chip>\n                                </mat-chip-list>\n\n                            </mat-cell>\n                        </ng-container>\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n<div class=\"mobile-view\">\n    <section class=\"chapter\">\n\n        <article class=\"article\">\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                        <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-6\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading c-list\">\n                                            <span class=\"title\">Verified Shops List</span>\n                                        </div>\n                                        <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n                                                <input matInput placeholder=\"Search\" [(ngModel)]=\"term\" autocomplete=\"off\" >\n                                            </mat-form-field>\n                                        <!-- <input ng-model=\"searchText\" placeholder=\"enter search term here\"> -->\n                                        <ul class=\"list-group\" id=\"contact-list\">\n                                            <li class=\"list-group-item\" *ngFor=\"let dat of shopsList | filter:term \">\n                                                <div class=\"col-xs-12 col-sm-9\">\n                                                    <span class=\"name\">{{dat?.name}}</span> <br/>\n                                                    <span class=\"name\">{{dat?.phoneNumber}}</span>\n                                                    <mat-chip-list class=\"pull-right\">\n                                                        <mat-chip *ngIf=\"dat?.status == 'Y'\" color=\"accent\" selected=\"true\" (click)=\"deactivateShop( dat?.id )\">\n                                                            De-Activate\n                                                        </mat-chip>\n                                                        <mat-chip *ngIf=\"dat?.status == 'N'\" color=\"accent\" selected=\"true\" (click)=\"activateShop( dat?.id )\">\n                                                            Activate\n                                                        </mat-chip>\n                                                    </mat-chip-list>\n                                                    <br/>\n                                                    <span class=\"name\">{{dat?.category}}</span><br/>\n                                                    <span class=\"name\">{{dat?.description}}</span><br/>\n                                                    \n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </li>\n                                            \n                                            \n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/verifiedshops/verifiedshops.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-view {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .webview {\n    display: none; }\n  .mobile-view {\n    display: block; } }\n\n@media screen and (max-width: 600px) and (max-width: 767px) {\n  .visible-xs {\n    display: inline-block !important; }\n  .block {\n    display: block !important;\n    width: 100%;\n    height: 1px !important; } }\n\n@media screen and (max-width: 600px) {\n  #back-to-bootsnipp {\n    position: fixed;\n    top: 10px;\n    right: 10px; }\n  .c-search > .form-control {\n    border-radius: 0px;\n    border-width: 0px;\n    border-bottom-width: 1px;\n    font-size: 1.3em;\n    padding: 12px 12px;\n    height: 44px;\n    outline: none !important; }\n  .c-search > .form-control:focus {\n    outline: 0px !important;\n    -webkit-appearance: none;\n    box-shadow: none; }\n  .c-search > .input-group-btn .btn {\n    border-radius: 0px;\n    border-width: 0px;\n    border-left-width: 1px;\n    border-bottom-width: 1px;\n    height: 44px; }\n  .c-list {\n    padding: 0px;\n    min-height: 44px; }\n  .title {\n    display: inline-block;\n    font-size: 1.7em;\n    font-weight: bold;\n    padding: 5px 15px; }\n  ul.c-controls {\n    list-style: none;\n    margin: 0px;\n    min-height: 44px; }\n  ul.c-controls li {\n    margin-top: 8px;\n    float: left; }\n  ul.c-controls li a {\n    font-size: 1.7em;\n    padding: 11px 10px 6px; }\n  ul.c-controls li a i {\n    min-width: 24px;\n    text-align: center; }\n  ul.c-controls li a:hover {\n    background-color: rgba(51, 51, 51, 0.2); }\n  .c-toggle {\n    font-size: 1.7em; }\n  .name {\n    font-size: 1.4em;\n    font-weight: 700; }\n  .c-info {\n    padding: 5px 10px;\n    font-size: 1.25em; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verifiedshops/verifiedshops.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return VerifiedshopsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CnfDeactDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CnfActDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var VerifiedshopsComponent = (function () {
    function VerifiedshopsComponent(userService, router, dialog, spinner) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.url = '/api/';
        this.displayedColumns = ['name', 'phoneNumber', 'category', 'description', 'status'];
        this.spinner.show();
        this.getShops();
    }
    VerifiedshopsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    VerifiedshopsComponent.prototype.getShops = function () {
        var _this = this;
        var data = {
            status: ['Y', 'N']
        };
        this.userService.readshops('/api/', data).subscribe(function (data) {
            _this.shopsList = data.data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](_this.shopsList);
            _this.dataSource.sort = _this.sort;
            _this.spinner.hide();
        });
    };
    VerifiedshopsComponent.prototype.deactivateShop = function (id) {
        var dialogRef = this.dialog.open(CnfDeactDialogComponent, {
            width: '450px',
            data: {
                shop_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    VerifiedshopsComponent.prototype.activateShop = function (id) {
        var dialogRef = this.dialog.open(CnfActDialogComponent, {
            width: '450px',
            data: {
                shop_id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */])
    ], VerifiedshopsComponent.prototype, "sort", void 0);
    VerifiedshopsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verifiedshops',
            template: __webpack_require__("../../../../../src/app/verifiedshops/verifiedshops.component.html"),
            styles: [__webpack_require__("../../../../../src/app/verifiedshops/verifiedshops.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5_ngx_spinner__["NgxSpinnerService"]])
    ], VerifiedshopsComponent);
    return VerifiedshopsComponent;
}());

var CnfDeactDialogComponent = (function () {
    function CnfDeactDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfDeactDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfDeactDialogComponent.prototype.onDeacativateClick = function (shopid) {
        var _this = this;
        console.log(shopid);
        var shop_data = {
            shop_id: shopid,
            change_status: 'N',
            db_query: 'change_status'
        };
        this.userService.editshopbyid(this.url, shop_data)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Shop De-Activated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to De-Activate Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfDeactDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/verifiedshops/dshoplist-cnfdact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/verifiedshops/dshoplist-cnfdact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], CnfDeactDialogComponent);
    return CnfDeactDialogComponent;
}());

var CnfActDialogComponent = (function () {
    function CnfActDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
    }
    CnfActDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CnfActDialogComponent.prototype.onactivateClick = function (shopid) {
        var _this = this;
        var del_shop = {
            shop_id: shopid,
            change_status: 'Y',
            db_query: 'change_status'
        };
        this.userService.editshopbyid(this.url, del_shop)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Shop Activated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to Activate Please try again !';
            }
            _this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
                width: '450px',
                data: { status: _this.cstatus }
            });
        });
        this.dialogRef.close();
    };
    CnfActDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/verifiedshops/dshoplist-cnfact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/verifiedshops/dshoplist-cnfact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], CnfActDialogComponent);
    return CnfActDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/viewcategories/categorylist-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Category Details</h4>\n<form class=\"example-form\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category Name\" readonly value=\"{{data.name}}\">\n    </mat-form-field>\n\n\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/viewcategories/categorylist-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewcategories/categorylistActDact-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<form class=\"example-form\">\n    <h4 style=\"text-align: center\">{{data}}</h4>\n    <div mat-dialog-actions>\n        <button mat-button style=\"margin: auto;\" class=\"mat-raised-button mat-primary\" (click)=\"onNoClick()\"> Ok </button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/viewcategories/categorylistActDact-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewcategories/editcategory-dialog-component.html":
/***/ (function(module, exports) {

module.exports = "\n<h4 class=\"mat-dialog-title\" style=\"text-align: center;\">Category Details</h4>\n<form class=\"\" [formGroup]=\"editCategoryForm\"  (ngSubmit)='onEditCategorySubmit()'>\n    <mat-form-field class=\"example-full-width\">\n        <input matInput [hidden]=\"true\" [(ngModel)]=\"data.id\" value=\"{{data.id}}\" formControlName=\"categoryid\">\n    </mat-form-field>\n\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Shop Name\" [(ngModel)]=\"data.name\" value=\"{{data.name}}\" required formControlName=\"category\">\n        <mat-error>\n            Category should not less than 3\n        </mat-error>\n    </mat-form-field>\n\n\n    <div mat-dialog-actions>\n        <button class=\"submit\" style=\"margin: auto\" type=\"submit\" [disabled]=\"!editCategoryForm.valid\" mat-raised-button color=\"warn\">Update</button>\n    </div>\n    <br>\n</form>"

/***/ }),

/***/ "../../../../../src/app/viewcategories/editcategory-dialog-component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewcategories/viewcategories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"webview container-fluid no-breadcrumbs page-dashboard\">\n\n    <section class=\"webview container-fluid with-maxwidth chapter\">\n\n        <article class=\"article\">\n            <h2 class=\"article-title\">View Categories</h2>\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n\n\n\n\n                    <div class=\"example-header\">\n                        <mat-form-field>\n                            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search Here..\">\n                        </mat-form-field>\n                    </div>\n\n                    <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n\n                        <!-- Category Column -->\n                        <ng-container matColumnDef=\"category\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Category </mat-header-cell>\n                            <mat-cell *matCellDef=\"let categorydata\">\n                                {{categorydata.name}} </mat-cell>\n                        </ng-container>\n\n                        <!-- Description Column -->\n                        <ng-container matColumnDef=\"status\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\n                            <mat-cell *matCellDef=\"let categorydata\">\n                                <span *ngIf=\"categorydata.status == 'Y' \"> Visible </span>\n                                <span *ngIf=\"categorydata.status == 'N' \"> Blocked </span>\n                            </mat-cell>\n                        </ng-container>\n\n                        <!-- Action Column -->\n                        <ng-container matColumnDef=\"action\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n                            <mat-cell *matCellDef=\"let categorydata\">\n                                <mat-chip-list>\n                                    <mat-chip color=\"default\" (click)=\"editData( categorydata.id )\" selected=\"true\">Edit</mat-chip>\n                                    <mat-chip color=\"warn\" *ngIf=\"categorydata.status == 'Y' \" (click)=\"blockData( categorydata.id )\" selected=\"true\">Block</mat-chip>\n                                    <mat-chip color=\"primary\" *ngIf=\"categorydata.status == 'N' \" (click)=\"unblockData( categorydata.id )\" selected=\"true\">Activate</mat-chip>\n                                </mat-chip-list>\n                            </mat-cell>\n                        </ng-container>\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                    </mat-table>\n\n\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n<div class=\"mobile-view\">\n    <section class=\"chapter\">\n\n        <article class=\"article\">\n            <!-- <h2 class=\"article-title\" style=\"text-align: center\">Shops List</h2> -->\n            <div class=\"box box-default\">\n                <div class=\"box-body\">\n                        <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-6\">\n                                    <div class=\"panel panel-default\">\n                                        <div class=\"panel-heading c-list\">\n                                            <span class=\"title\">Categories List</span>\n                                            \n                                        </div>\n                                        <mat-form-field class=\"example-full-width\" style=\"width: 100%\">\n                                                <input matInput placeholder=\"Search\" [(ngModel)]=\"term\" autocomplete=\"off\" >\n                                            </mat-form-field>\n                                        <!-- <input ng-model=\"searchText\" placeholder=\"enter search term here\"> -->\n                                        <ul class=\"list-group\" id=\"contact-list\">\n                                            <li class=\"list-group-item\" *ngFor=\"let dat of categoriesList | filter:term \">\n                                                <div class=\"col-xs-12\">\n                                                    <span class=\"name\">Name : {{dat?.name}}</span> \n                                                    <!-- three dot menu -->\n                                                        <div class=\"dropdown pull-right\">\n                                                            <!-- three dots -->\n                                                            <ul class=\"dropbtn icons btn-right showLeft\" (click)=\"showDropdown(dat?.id)\">\n                                                                <li></li>\n                                                                <li></li>\n                                                                <li></li>\n                                                            </ul>\n                                                            <!-- menu -->\n                                                            <div id=\"\" class=\"dropdown-content myDropdown myDropdown{{dat?.id}}\">\n                                                                <a (click)=\"editData( dat?.id )\" >Edit</a>\n                                                                <a *ngIf=\"dat?.status == 'Y' \" (click)=\"blockData( dat?.id )\" >Block</a>\n                                                                <a *ngIf=\"dat?.status == 'N' \" (click)=\"unblockData( dat?.id )\" >Activate</a>\n                                                            </div>\n                                                        </div>\n                                                    <br/>\n                                                    <span class=\"name\" *ngIf=\"dat?.status == 'Y' \">Status: Visible </span>\n                                                    <span class=\"name\" *ngIf=\"dat?.status == 'N' \">Status: Blocked </span>\n                                                    \n                                                </div>\n                                                <div class=\"clearfix\"></div>\n                                            </li>\n                                            \n                                            \n                                            \n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                </div>\n            </div>\n        </article>\n    </section>\n</div>\n\n\n<!-- Copyright 2017 Google Inc. All Rights Reserved.\n    Use of this source code is governed by an MIT-style license that\n    can be found in the LICENSE file at http://angular.io/license -->"

/***/ }),

/***/ "../../../../../src/app/viewcategories/viewcategories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-view {\n  display: none; }\n\n@media screen and (max-width: 600px) {\n  .webview {\n    display: none; }\n  .mobile-view {\n    display: block; } }\n\n@media screen and (max-width: 600px) and (max-width: 767px) {\n  .visible-xs {\n    display: inline-block !important; }\n  .block {\n    display: block !important;\n    width: 100%;\n    height: 1px !important; } }\n\n@media screen and (max-width: 600px) {\n  #back-to-bootsnipp {\n    position: fixed;\n    top: 10px;\n    right: 10px; }\n  .c-search > .form-control {\n    border-radius: 0px;\n    border-width: 0px;\n    border-bottom-width: 1px;\n    font-size: 1.3em;\n    padding: 12px 12px;\n    height: 44px;\n    outline: none !important; }\n  .c-search > .form-control:focus {\n    outline: 0px !important;\n    -webkit-appearance: none;\n    box-shadow: none; }\n  .c-search > .input-group-btn .btn {\n    border-radius: 0px;\n    border-width: 0px;\n    border-left-width: 1px;\n    border-bottom-width: 1px;\n    height: 44px; }\n  .c-list {\n    padding: 0px;\n    min-height: 44px; }\n  .title {\n    display: inline-block;\n    font-size: 1.7em;\n    font-weight: bold;\n    padding: 5px 15px; }\n  ul.c-controls {\n    list-style: none;\n    margin: 0px;\n    min-height: 44px; }\n  ul.c-controls li {\n    margin-top: 8px;\n    float: left; }\n  ul.c-controls li a {\n    font-size: 1.7em;\n    padding: 11px 10px 6px; }\n  ul.c-controls li a i {\n    min-width: 24px;\n    text-align: center; }\n  ul.c-controls li a:hover {\n    background-color: rgba(51, 51, 51, 0.2); }\n  .c-toggle {\n    font-size: 1.7em; }\n  .name {\n    font-size: 1.0em;\n    font-weight: 600; }\n  .c-info {\n    padding: 5px 10px;\n    font-size: 1.25em; }\n  .icons li {\n    background: none repeat scroll 0 0 #000;\n    height: 4px;\n    width: 4px;\n    line-height: 0;\n    list-style: none outside none;\n    margin-top: 2px;\n    vertical-align: top;\n    border-radius: 50%;\n    pointer-events: none; }\n  .dropbtn {\n    color: white;\n    font-size: 16px;\n    border: none;\n    cursor: pointer; }\n  .dropdown-content {\n    display: none;\n    right: 0px;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    overflow: auto;\n    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n    z-index: 1; }\n  .dropdown-content a {\n    color: black;\n    padding: 12px 16px;\n    text-decoration: none;\n    display: block; }\n  .dropdown a:hover {\n    background-color: #f1f1f1; }\n  .show {\n    display: block; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewcategories/viewcategories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ViewcategoriesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EditcategoryDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CategorylistDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorylistActDactDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__ = __webpack_require__("../../../../../src/app/createshop/createshop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__ = __webpack_require__("../../../../ngx-spinner/ngx-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_spinner__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ViewcategoriesComponent = (function () {
    function ViewcategoriesComponent(userService, router, dialog, spinner) {
        this.userService = userService;
        this.router = router;
        this.dialog = dialog;
        this.spinner = spinner;
        this.url = '/api/';
        this.displayedColumns = ['category', 'status', 'action'];
        this.spinner.show();
        this.getCategories();
    }
    ViewcategoriesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ViewcategoriesComponent.prototype.ngOnInit = function () {
        //Close the dropdown if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };
    };
    ViewcategoriesComponent.prototype.showDropdown = function (id) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var j = 0; j < dropdowns.length; j++) {
            var openDropdown = dropdowns[j];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
        $(".myDropdown" + id).addClass('show');
    };
    ViewcategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        var data = {
            status: 'ALL'
        };
        this.userService.readCategories('/api/').subscribe(function (data) {
            _this.categoriesList = data.data;
            _this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["G" /* MatTableDataSource */](_this.categoriesList);
            _this.dataSource.sort = _this.sort;
            _this.spinner.hide();
        });
    };
    ViewcategoriesComponent.prototype.editData = function (id) {
        var _this = this;
        var categoryid = {
            category_id: id
        };
        this.spinner.show();
        this.userService.readCategories(this.url).subscribe(function (data) {
            _this.categoryList = data.data;
            _this.spinner.hide();
            _this.editcategoryDialog();
        });
    };
    // Function to edit category data
    ViewcategoriesComponent.prototype.editcategoryDialog = function () {
        var dialogRef = this.dialog.open(EditcategoryDialogComponent, {
            width: '450px',
            data: this.categoryList[0]
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    // Function to block category
    ViewcategoriesComponent.prototype.blockData = function (id) {
        var _this = this;
        var categoryid = {
            category_id: id,
            db_query: 'change_status',
            change_status: 'N'
        };
        this.userService.editCategorybyid(this.url, categoryid).subscribe(function (data) {
            _this.message = 'Category Blocked !';
            _this.modifycategoryDialog();
        });
    };
    // Function to unblock category
    ViewcategoriesComponent.prototype.unblockData = function (id) {
        var _this = this;
        var categoryid = {
            category_id: id,
            db_query: 'change_status',
            change_status: 'Y'
        };
        this.userService.editCategorybyid(this.url, categoryid).subscribe(function (data) {
            _this.message = 'Category Activated!';
            _this.modifycategoryDialog();
        });
    };
    ViewcategoriesComponent.prototype.modifycategoryDialog = function () {
        var dialogRef = this.dialog.open(CategorylistActDactDialogComponent, {
            width: '450px',
            data: this.message
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            // this.cstatus = result;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["D" /* MatSort */])
    ], ViewcategoriesComponent.prototype, "sort", void 0);
    ViewcategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-viewcategories',
            template: __webpack_require__("../../../../../src/app/viewcategories/viewcategories.component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewcategories/viewcategories.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* Router */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_6_ngx_spinner__["NgxSpinnerService"]])
    ], ViewcategoriesComponent);
    return ViewcategoriesComponent;
}());

var EditcategoryDialogComponent = (function () {
    function EditcategoryDialogComponent(dialogRef, data, userService, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.userService = userService;
        this.dialog = dialog;
        this.url = '/api/';
        // For Edit shop
        this.editCategoryForm = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroup"]({
            status: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"](),
            category: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_4__angular_forms__["Validators"].minLength(3)])),
            categoryid: new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]()
        });
    }
    EditcategoryDialogComponent.prototype.ngOnInit = function () {
    };
    // Function For Edit category
    EditcategoryDialogComponent.prototype.onEditCategorySubmit = function () {
        var _this = this;
        var userdata = JSON.parse(localStorage.getItem('userDetails'));
        var categorydata = {
            updated_by: userdata.data[0].id,
            name: this.editCategoryForm.get('category').value,
            db_query: 'update',
            category_id: this.editCategoryForm.get('categoryid').value
        };
        this.userService.editCategorybyid(this.url, categorydata)
            .subscribe(function (data) {
            if (data.status === true) {
                _this.cstatus = 'Category Updated Successfully !';
            }
            else {
                _this.cstatus = 'Unable to update Please try again !';
            }
            _this.updateDialog();
        });
    };
    EditcategoryDialogComponent.prototype.updateDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__createshop_createshop_component__["b" /* DialogOverviewComponent */], {
            width: '450px',
            data: { status: this.cstatus }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // this.cstatus = result;
        });
    };
    EditcategoryDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormGroupDirective"]),
        __metadata("design:type", Object)
    ], EditcategoryDialogComponent.prototype, "myform", void 0);
    EditcategoryDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/viewcategories/editcategory-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewcategories/editcategory-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object, __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatDialog */]])
    ], EditcategoryDialogComponent);
    return EditcategoryDialogComponent;
}());

var CategorylistDialogComponent = (function () {
    function CategorylistDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CategorylistDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CategorylistDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/viewcategories/categorylist-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewcategories/categorylist-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], CategorylistDialogComponent);
    return CategorylistDialogComponent;
}());

var CategorylistActDactDialogComponent = (function () {
    function CategorylistActDactDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CategorylistActDactDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        location.reload();
    };
    CategorylistActDactDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__("../../../../../src/app/viewcategories/categorylistActDact-dialog-component.html"),
            styles: [__webpack_require__("../../../../../src/app/viewcategories/categorylistActDact-dialog-component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatDialogRef */], Object])
    ], CategorylistActDactDialogComponent);
    return CategorylistActDactDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/map.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "map.ec3945ae55b655c97d66.png";

/***/ }),

/***/ "../../../../../src/assets/images/sprite.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sprite.bf1bc47dcf4fce8bc6a9.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mn": "../../../../moment/locale/mn.js",
	"./mn.js": "../../../../moment/locale/mn.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map