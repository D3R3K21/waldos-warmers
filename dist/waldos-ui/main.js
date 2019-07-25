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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class='main-spa'>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"nav-location\"><app-navigation></app-navigation></div>\r\n\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-location {\n  width: 50%;\n  margin: auto;\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHNvdXJjZVxcZ2l0aHViXFx3YWxkb3Mtd2FybWVycy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxvY2F0aW9uIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOjUlO1xyXG4gIH0iXX0= */"

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
        this.title = 'waldos-ui';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_giveaway_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/giveaway.module */ "./src/app/shared/giveaway.module.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");











//import { reducers } from './reducers';

//import { AppEffects } from './app.effects';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([], { useHash: true }),
                _shared_giveaway_module__WEBPACK_IMPORTED_MODULE_6__["GiveawayModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__["EffectsModule"].forRoot([]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_12__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/comments/comments-guard.ts":
/*!********************************************!*\
  !*** ./src/app/comments/comments-guard.ts ***!
  \********************************************/
/*! exports provided: CommentsRouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsRouteGuard", function() { return CommentsRouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentsRouteGuard = /** @class */ (function () {
    function CommentsRouteGuard() {
    }
    CommentsRouteGuard.prototype.canActivate = function () {
        return true;
    };
    CommentsRouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CommentsRouteGuard);
    return CommentsRouteGuard;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card-body main-spa'>\r\n  <span style=\"text-align:right; display:block;\"><button (click)='selectRandomComment()' id='winnerBtn'>Go To Winner</button></span><br />\r\n  <div class='table-responsive'>\r\n    <table class='table'>\r\n      <thead>\r\n        <tr>\r\n          <th>Comments</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor='let comment of comments'>\r\n          <td [attr.id]='comment.id' [attr.bgcolor]='comment.color' class='a-no-style'>{{ comment.message }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class='center'>\r\n  <button *ngIf='prevLink' (click)='onPrev()'>Previous</button>\r\n  <button *ngIf='nextLink' (click)='onNext()'>Next</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comments/comments.component.scss":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  text-align: center; }\n\n#winnerBtn {\n  width: 150px;\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvQzpcXHNvdXJjZVxcZ2l0aHViXFx3YWxkb3Mtd2FybWVycy9zcmNcXGFwcFxcY29tbWVudHNcXGNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4jd2lubmVyQnRuIHtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/facebook-service */ "./src/app/services/facebook-service.ts");
/* harmony import */ var _posts_state_posts_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts/state/posts.reducer */ "./src/app/posts/state/posts.reducer.ts");
/* harmony import */ var _posts_state_posts_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../posts/state/posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");







var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(route, fbService, store) {
        this.route = route;
        this.fbService = fbService;
        this.store = store;
        this.comments = [];
        this.prevLink = '';
        this.nextLink = '';
        this.postId = '';
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postId = this.route.snapshot.paramMap.get('postId');
        this.store.dispatch(new _posts_state_posts_actions__WEBPACK_IMPORTED_MODULE_5__["LoadComments"](this.postId));
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_posts_state_posts_reducer__WEBPACK_IMPORTED_MODULE_4__["getPosts"])).subscribe(function (comments) { return _this.comments = comments; });
        // this.fbService.retrieveComments(this.postId).subscribe(res => {
        //   this.comments = res.data;
        //   this.prevLink = res.paging.previous;
        //   this.nextLink = res.paging.next;
        //   if (this.nextLink) {
        //     this.loadNextComments();
        //   }
        // });
    };
    CommentsComponent.prototype.selectRandomComment = function () {
        if (this.comments.length <= 0) {
            return;
        }
        var index = Math.floor(Math.random() * this.comments.length);
        var comment = this.comments[index];
        comment.color = 'b5d100';
        var element = document.getElementById(comment.id);
        element.scrollIntoView();
        element.scrollIntoView(false);
        element.scrollIntoView({ block: 'end' });
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'nearest'
        });
    };
    CommentsComponent.prototype.loadNextComments = function () {
        var _this = this;
        this.fbService.retrievePaginatedComments(this.nextLink).subscribe(function (res) {
            _this.comments = _this.comments.concat(res.data.map(function (c) {
                c.color = '#FFFFFF';
                return c;
            }));
            _this.nextLink = res.paging.next;
            if (_this.nextLink) {
                _this.loadNextComments();
            }
        });
    };
    CommentsComponent.prototype.getCommentsCount = function () {
        var count = 0;
        this.fbService.retrieveCommentsCount(this.postId).subscribe(function (res) {
            count = res.summary.total_count;
        });
        return count;
    };
    CommentsComponent.prototype.onPrev = function () {
        var _this = this;
        this.fbService.retrievePaginatedComments(this.prevLink).subscribe(function (res) {
            _this.comments = res.data.map(function (c) {
                c.color = '#FFFFFF';
                return c;
            });
            _this.prevLink = res.paging.previous;
            _this.nextLink = res.paging.next;
        });
    };
    CommentsComponent.prototype.onNext = function () {
        var _this = this;
        this.fbService.retrievePaginatedComments(this.nextLink).subscribe(function (res) {
            _this.comments = res.data.map(function (c) {
                c.color = '#FFFFFF';
                return c;
            });
            _this.prevLink = res.paging.previous;
            _this.nextLink = res.paging.next;
        });
    };
    CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/comments/comments.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_facebook_service__WEBPACK_IMPORTED_MODULE_3__["FacebookService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class='main-spa'>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"flex-container ul-no-style\">\n    <li class=\"card active\" (click)='clicked($event)'><a class=\"a-no-style\" href=\"#/home\">Home</a></li>\n    <li class=\"card\" (click)='clicked($event)'><a class=\"a-no-style\" href=\"#/giveaway\">Give Away</a></li>\n    <li class=\"card\" (click)='clicked($event)'><a class=\"a-no-style\" href=\"#/about-us\">About Us</a></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: black;\n  width: 100px;\n  margin: 10px;\n  text-align: center;\n  line-height: 25px;\n  font-size: 12px;\n  border-radius: 25px; }\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  background-color: white;\n  flex-direction: row;\n  justify-content: center; }\n\n.ul-no-style {\n  list-style: none; }\n\n.active {\n  color: white; }\n\n.active {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9DOlxcc291cmNlXFxnaXRodWJcXHdhbGRvcy13YXJtZXJzL3NyY1xcYXBwXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFlBQVksRUFBQTs7QUFJZDtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi51bC1uby1zdHlsZSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gLy8gYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5hY3RpdmUge1xyXG4gIGNvbG9yOiB3aGl0ZTsgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.clicked = function (event) {
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', '');
        event.currentTarget.className += ' active';
        console.log('clicked');
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts-component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts-component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_facebook_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/facebook-service */ "./src/app/services/facebook-service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _posts_state_posts_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts/state/posts.reducer */ "./src/app/posts/state/posts.reducer.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PostsComponent = /** @class */ (function () {
    function PostsComponent(fbService, store) {
        this.fbService = fbService;
        this.store = store;
        this.id = 0;
        this.bgc = '00d1d1';
        this.componentActive = true;
        this.pageInput = '';
        this.tokenInput = '';
        this.idInput = '';
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.componentActive; }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_posts_state_posts_reducer__WEBPACK_IMPORTED_MODULE_4__["getSelectedPostId"]))
            .subscribe(function (currentProduct) {
            _this.idInput = currentProduct;
        });
    };
    PostsComponent.prototype.doThings = function () {
        var _this = this;
        this.fbService.retrievePosts(this.pageInput, this.tokenInput).subscribe(function (res) {
            _this.posts = res.data;
        });
    };
    PostsComponent.prototype.ngOnDestroy = function () {
        this.componentActive = false;
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_facebook_service__WEBPACK_IMPORTED_MODULE_2__["FacebookService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body main-spa\">\r\n  <div class=\"table-responsive\">\r\n      \r\n      <label>\r\n          Page Id\r\n          <input type=\"text\" name=\"pageInput\"  [(ngModel)]=\"pageInput\">\r\n          ?\r\n       </label>\r\n       <label>\r\n          Token:\r\n          <input type=\"text\" name=\"tokenInput\"  [(ngModel)]=\"tokenInput\">\r\n       </label>\r\n       <button (click)='doThings()'>Do The Things</button>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>Posts</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let post of posts\">\r\n          <a [routerLink]=\"['/giveaway/comments', post.id]\" class='a-no-style'>\r\n            <td>{{ post.message }}</td>\r\n          </a>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<span>Id goes here: {{idInput}}</span>"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts/state/posts.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.actions.ts ***!
  \**********************************************/
/*! exports provided: PostActionTypes, LoadComments, LoadingComments, CommentsLoaded, LoadFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostActionTypes", function() { return PostActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadComments", function() { return LoadComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComments", function() { return LoadingComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsLoaded", function() { return CommentsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFail", function() { return LoadFail; });
var PostActionTypes;
(function (PostActionTypes) {
    PostActionTypes["LoadComments"] = "[Posts] Load Comments";
    PostActionTypes["LoadingComments"] = "[Posts] Loading Comments";
    PostActionTypes["CommentsLoaded"] = "[Posts] Comments Loaded";
    PostActionTypes["LoadFail"] = "[Posts] Load Fail";
})(PostActionTypes || (PostActionTypes = {}));
var LoadComments = /** @class */ (function () {
    function LoadComments(payload) {
        this.payload = payload;
        this.type = PostActionTypes.LoadComments;
    }
    return LoadComments;
}());

var LoadingComments = /** @class */ (function () {
    function LoadingComments(payload) {
        this.payload = payload;
        this.type = PostActionTypes.LoadingComments;
    }
    return LoadingComments;
}());

var CommentsLoaded = /** @class */ (function () {
    function CommentsLoaded(payload) {
        this.payload = payload;
        this.type = PostActionTypes.CommentsLoaded;
    }
    return CommentsLoaded;
}());

var LoadFail = /** @class */ (function () {
    function LoadFail(payload) {
        this.payload = payload;
        this.type = PostActionTypes.LoadFail;
    }
    return LoadFail;
}());



/***/ }),

/***/ "./src/app/posts/state/posts.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.effects.ts ***!
  \**********************************************/
/*! exports provided: PostEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEffects", function() { return PostEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_facebook_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/facebook-service */ "./src/app/services/facebook-service.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _posts_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posts.reducer */ "./src/app/posts/state/posts.reducer.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");








var PostEffects = /** @class */ (function () {
    function PostEffects(actions$, service, store) {
        this.actions$ = actions$;
        this.service = service;
        this.store = store;
        this.loadComments$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_4__["PostActionTypes"].LoadComments), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_7__["select"])(_posts_reducer__WEBPACK_IMPORTED_MODULE_5__["getSelectedPostId"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (x) {
            console.log('testing effects');
            return x;
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostEffects.prototype, "loadComments$", void 0);
    PostEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            src_app_services_facebook_service__WEBPACK_IMPORTED_MODULE_2__["FacebookService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]])
    ], PostEffects);
    return PostEffects;
}());



/***/ }),

/***/ "./src/app/posts/state/posts.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/state/posts.reducer.ts ***!
  \**********************************************/
/*! exports provided: reducer, getProductFeatureState, getSelectedPostId, getPosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductFeatureState", function() { return getProductFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPostId", function() { return getSelectedPostId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.actions */ "./src/app/posts/state/posts.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var initialState = {
    posts: [],
    error: '',
    selectedPostId: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _posts_actions__WEBPACK_IMPORTED_MODULE_1__["PostActionTypes"].CommentsLoaded:
            console.log('testing reducer: comments loaded');
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { posts: action.payload });
        case _posts_actions__WEBPACK_IMPORTED_MODULE_1__["PostActionTypes"].LoadComments:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { selectedPostId: action.payload });
        default:
            return state;
    }
}
var getProductFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('posts');
var getSelectedPostId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getProductFeatureState, function (s) { return s.selectedPostId; });
var getPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getProductFeatureState, function (s) { return s.posts; });


/***/ }),

/***/ "./src/app/services/facebook-service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/facebook-service.ts ***!
  \**********************************************/
/*! exports provided: FacebookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookService", function() { return FacebookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var FacebookService = /** @class */ (function () {
    function FacebookService(http) {
        this.http = http;
        this.postsAPI = '';
        this.commentsAPI = '';
        this.token = '';
        this.baseURI = '';
        this.pageId = '';
        this.params = '';
        this.postsAPI = '/api/posts.json';
        this.commentsAPI = '/api/comments.json';
        this.baseURI = 'https://graph.facebook.com/v3.3';
        this.pageId = 'pageid';
        this.token = "token";
        this.params = '&pretty=0&limit=25&summary=1&filter=stream';
    }
    FacebookService.prototype.retrievePosts = function (pageId, token) {
        return this.http.get(this.baseURI + "/" + this.pageId + "/feed?access_token=" + this.token + "&pretty=0&limit=25")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        // return this.http.get<FbPostsResponse>(`${this.baseURI}/${pageId}/feed?access_token=${token}&pretty=0&limit=25`)
        //   .pipe(catchError(this.handleError));
    };
    FacebookService.prototype.retrieveCommentsCount = function (postId) {
        var uri = this.baseURI + "/" + postId + "/comments?access_token=" + this.token + this.params.replace('&limit=25', '&limit=0');
        return this.http.get(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FacebookService.prototype.retrieveComments = function (postId) {
        var uri = this.baseURI + "/" + postId + "/comments?access_token=" + this.token + this.params;
        return this.http.get(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FacebookService.prototype.retrievePaginatedComments = function (uri) {
        return this.http.get("" + uri + this.params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    FacebookService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        }
        console.error(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    FacebookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FacebookService);
    return FacebookService;
}());



/***/ }),

/***/ "./src/app/shared/giveaway.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/giveaway.module.ts ***!
  \*******************************************/
/*! exports provided: GiveawayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiveawayModule", function() { return GiveawayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts/posts-component */ "./src/app/posts/posts-component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comments/comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comments_comments_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comments/comments-guard */ "./src/app/comments/comments-guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _posts_state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../posts/state/posts.reducer */ "./src/app/posts/state/posts.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _posts_state_posts_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../posts/state/posts.effects */ "./src/app/posts/state/posts.effects.ts");














var GiveawayModule = /** @class */ (function () {
    function GiveawayModule() {
    }
    GiveawayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'giveaway/comments/:postId', canActivate: [_comments_comments_guard__WEBPACK_IMPORTED_MODULE_6__["CommentsRouteGuard"]], component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"] },
                    { path: 'giveaway/posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"] },
                    { path: 'about-us', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
                    { path: 'giveaway', redirectTo: 'giveaway/posts', pathMatch: 'full' }
                ]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forFeature('posts', _posts_state_posts_reducer__WEBPACK_IMPORTED_MODULE_11__["reducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_12__["EffectsModule"].forFeature([_posts_state_posts_effects__WEBPACK_IMPORTED_MODULE_13__["PostEffects"]]),
            ]
        })
    ], GiveawayModule);
    return GiveawayModule;
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

module.exports = __webpack_require__(/*! C:\source\github\waldos-warmers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map