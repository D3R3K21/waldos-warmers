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
/* harmony import */ var _testing_div_testing_div_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testing-div/testing-div.component */ "./src/app/testing-div/testing-div.component.ts");
/* harmony import */ var _testing_list_div_testing_list_div_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./testing-list-div/testing-list-div.component */ "./src/app/testing-list-div/testing-list-div.component.ts");
/* harmony import */ var _testing_nested_divs_testing_nested_divs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./testing-nested-divs/testing-nested-divs.component */ "./src/app/testing-nested-divs/testing-nested-divs.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _testing_div_testing_div_component__WEBPACK_IMPORTED_MODULE_8__["TestingDivComponent"],
                _testing_list_div_testing_list_div_component__WEBPACK_IMPORTED_MODULE_9__["TestingListDivComponent"],
                _testing_nested_divs_testing_nested_divs_component__WEBPACK_IMPORTED_MODULE_10__["TestingNestedDivsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([], { useHash: true }),
                _shared_giveaway_module__WEBPACK_IMPORTED_MODULE_6__["GiveawayModule"]
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

/***/ "./src/app/comments/comments.component.css":
/*!*************************************************!*\
  !*** ./src/app/comments/comments.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    text-align:center;\r\n}\r\n\r\n#winnerBtn {\r\n    width: 150px;\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWVudHMvY29tbWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21tZW50cy9jb21tZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuI3dpbm5lckJ0biB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card-body main-spa'>\r\n  <span style=\"text-align:right; display:block;\"><button (click)='selectRandomComment()' id='winnerBtn'>Go To Winner</button></span><br />\r\n  <div class='table-responsive'>\r\n    <table class='table'>\r\n      <thead>\r\n        <tr>\r\n          <th>Comments</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor='let comment of comments'>\r\n          <td [attr.id]='comment.id' [attr.bgcolor]='comment.color'>{{ comment.message }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class='center'>\r\n  <button *ngIf='prevLink' (click)='onPrev()'>Previous</button>\r\n  <button *ngIf='nextLink' (click)='onNext()'>Next</button>\r\n</div>\r\n"

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




var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(route, fbService) {
        this.route = route;
        this.fbService = fbService;
        this.comments = [];
        this.prevLink = '';
        this.nextLink = '';
        this.postId = '';
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postId = this.route.snapshot.paramMap.get('postId');
        this.fbService.retrieveComments(this.postId).subscribe(function (res) {
            _this.comments = res.data;
            _this.prevLink = res.paging.previous;
            _this.nextLink = res.paging.next;
            if (_this.nextLink) {
                _this.loadNextComments();
            }
        });
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
            styles: [__webpack_require__(/*! ./comments.component.css */ "./src/app/comments/comments.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_facebook_service__WEBPACK_IMPORTED_MODULE_3__["FacebookService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"flex-container ul-no-style\">\n    <li class=\"card\"><a class=\"a-no-style\" href=\"#/\">Home</a></li>\n    <li class=\"card\"><a class=\"a-no-style\" href=\"#/giveaway\">Give Away</a></li>\n    <li class=\"card\"><a class=\"a-no-style\" href=\"#/about-us\">About Us</a></li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: black;\n  width: 100px;\n  margin: 10px;\n  text-align: center;\n  line-height: 25px;\n  font-size: 12px;\n  border-radius: 25px; }\n\n.flex-container {\n  display: flex;\n  flex-wrap: nowrap;\n  background-color: white;\n  flex-direction: row;\n  justify-content: center; }\n\n.ul-no-style {\n  list-style: none; }\n\n.a-no-style {\n  color: #09d109;\n  text-decoration: none; }\n\n.a-no-style a:link {\n    text-decoration: none; }\n\n.a-no-style a:visited {\n    text-decoration: none; }\n\n.a-no-style a:hover {\n    text-decoration: underline; }\n\n.a-no-style a:active {\n    text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9DOlxcc291cmNlXFxnaXRodWJcXHdhbGRvcy13YXJtZXJzL3NyY1xcYXBwXFxuYXZpZ2F0aW9uXFxuYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQXFCO0VBQ3JCLHFCQUFxQixFQUFBOztBQUZ2QjtJQUlJLHFCQUFxQixFQUFBOztBQUp6QjtJQVFJLHFCQUFxQixFQUFBOztBQVJ6QjtJQVlJLDBCQUEwQixFQUFBOztBQVo5QjtJQWdCSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuZmxleC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC51bC1uby1zdHlsZSB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuYS1uby1zdHlsZSB7XHJcbiAgICBjb2xvcjogcmdiKDksIDIwOSwgOSk7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBhOmxpbmsge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGE6dmlzaXRlZCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYTpob3ZlciB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBhOmFjdGl2ZSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAiXX0= */"

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



var PostsComponent = /** @class */ (function () {
    function PostsComponent(fbService) {
        this.fbService = fbService;
        this.id = 0;
        this.bgc = '00d1d1';
        this.pageInput = '';
        this.tokenInput = '';
    }
    PostsComponent.prototype.getId = function () {
        this.id++;
        return this.id + 0;
    };
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.retrievePosts().subscribe(function (res) {
            _this.posts = res.data;
        });
    };
    PostsComponent.prototype.doThings = function () {
        console.log(this.pageInput);
        console.log(this.tokenInput);
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_facebook_service__WEBPACK_IMPORTED_MODULE_2__["FacebookService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body main-spa\">\r\n  <div class=\"table-responsive\">\r\n    \r\n      <label>\r\n          Page Id\r\n          <input type=\"text\" name=\"pageInput1\"  [(ngModel)]=\"pageInput\">\r\n       </label>\r\n       <label>\r\n          Token:\r\n          <input type=\"text\" name=\"tokenInput\">\r\n       </label>\r\n       <button (click)='doThings()'>Do The Things</button>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>Posts</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let post of posts\">\r\n          <a [routerLink]=\"['/giveaway/comments', post.id]\">\r\n            <td>{{ post.message }}</td>\r\n          </a>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n"

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
        this.pageId = '1598627693689523';
        this.token = "EAAIscVOevKABANoIOMlZB8CBVtV6MTqsDgICKaHf8bf8OXaXBOozrCUhpSeSHm\n    jF476cZAERUpmvtGYPj1wGzefVVQ53AQfFmzsFKTYlZBfSOLMVvlz39D138jyE0GRnN43GrbPTWgwtpv1WN2TOZAdteOZBO1mkZD";
        this.params = '&pretty=0&limit=25&summary=1&filter=stream';
    }
    FacebookService.prototype.retrievePosts = function () {
        return this.http.get(this.baseURI + "/" + this.pageId + "/feed?access_token=" + this.token + "&pretty=0&limit=25")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
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
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'giveaway/comments/:postId', canActivate: [_comments_comments_guard__WEBPACK_IMPORTED_MODULE_6__["CommentsRouteGuard"]], component: _comments_comments_component__WEBPACK_IMPORTED_MODULE_4__["CommentsComponent"] },
                    { path: 'giveaway/posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_3__["PostsComponent"] },
                    { path: 'giveaway', redirectTo: 'giveaway/posts', pathMatch: 'full' }
                ]),
            ]
        })
    ], GiveawayModule);
    return GiveawayModule;
}());



/***/ }),

/***/ "./src/app/testing-div/testing-div.component.html":
/*!********************************************************!*\
  !*** ./src/app/testing-div/testing-div.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flexBox\" id=\"myDiv\">\n    <a href=\"#\" class=\"myCard active\" (click)=\"clicked($event)\">Card 1</a>\n    <a href=\"#\" class=\"myCard\" (click)=\"clicked($event)\">Card 2</a>\n    <a href=\"#\" class=\"myCard\" (click)=\"clicked($event)\">Card 3</a>\n</div>\n"

/***/ }),

/***/ "./src/app/testing-div/testing-div.component.scss":
/*!********************************************************!*\
  !*** ./src/app/testing-div/testing-div.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myCard {\n  width: 100px;\n  height: 50px;\n  background: green;\n  margin: 10px;\n  position: absolute;\n  left: 0px; }\n\n.active {\n  z-index: 100;\n  background: purple; }\n\n.flexBox {\n  display: flex;\n  flex-direction: column;\n  background: pink;\n  width: 100px; }\n\na {\n  color: black;\n  font-weight: 500;\n  display: block; }\n\n.flexBox:hover .myCard {\n  width: 100px;\n  height: 50px;\n  margin: 2px;\n  position: initial;\n  left: initial; }\n\n.flexBox:hover .myCard:not(.active) {\n  background: yellow; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGluZy1kaXYvQzpcXHNvdXJjZVxcZ2l0aHViXFx3YWxkb3Mtd2FybWVycy9zcmNcXGFwcFxcdGVzdGluZy1kaXZcXHRlc3RpbmctZGl2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLFlBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTLEVBQUE7O0FBR2I7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsWUFBVyxFQUFBOztBQUdmO0VBQ0UsWUFBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7O0FBR2hCO0VBRVEsWUFBVztFQUNYLFlBQVc7RUFFWCxXQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTs7QUFQckI7RUFXUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Rlc3RpbmctZGl2L3Rlc3RpbmctZGl2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Q2FyZCB7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgICBtYXJnaW46MTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDBweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XHJcbn1cclxuXHJcbi5mbGV4Qm94IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogcGluaztcclxuICAgIHdpZHRoOjEwMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjpibGFjaztcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uZmxleEJveDpob3ZlciB7XHJcbiAgICAubXlDYXJkIHtcclxuICAgICAgICB3aWR0aDoxMDBweDtcclxuICAgICAgICBoZWlnaHQ6NTBweDtcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW46MnB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgICAgIGxlZnQ6IGluaXRpYWw7XHJcbiAgICB9XHJcblxyXG4gICAgLm15Q2FyZDpub3QoLmFjdGl2ZSkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcclxuICAgIH1cclxuXHJcbiAgICBhOmhvdmVyIHtcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/testing-div/testing-div.component.ts":
/*!******************************************************!*\
  !*** ./src/app/testing-div/testing-div.component.ts ***!
  \******************************************************/
/*! exports provided: TestingDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingDivComponent", function() { return TestingDivComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestingDivComponent = /** @class */ (function () {
    function TestingDivComponent() {
    }
    TestingDivComponent.prototype.ngOnInit = function () {
        // var header = document.getElementById('myDiv');
        // var btns = header.getElementsByClassName('myCard');
        // for (var i = 0; i < btns.length; i++) {
        //   btns[i].addEventListener('click', function() {
        //     var current = document.getElementsByClassName('active');
        //     current[0].className = current[0].className.replace(' active', '');
        //     this.className += ' active';
        //   });
        // }
    };
    TestingDivComponent.prototype.clicked = function (event) {
        // var current = document.getElementsByClassName('active');
        // current[0].className = current[0].className.replace(' active', '');
        // event.currentTarget.className += ' active';
        // console.log('clicked');
    };
    TestingDivComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testing-div',
            template: __webpack_require__(/*! ./testing-div.component.html */ "./src/app/testing-div/testing-div.component.html"),
            styles: [__webpack_require__(/*! ./testing-div.component.scss */ "./src/app/testing-div/testing-div.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestingDivComponent);
    return TestingDivComponent;
}());



/***/ }),

/***/ "./src/app/testing-list-div/testing-list-div.component.html":
/*!******************************************************************!*\
  !*** ./src/app/testing-list-div/testing-list-div.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav-list\">\n    <li><a href=\"#\" class=\"active\" (click)=\"clicked($event)\">Testing The Thing 1</a></li>\n    <li><a href=\"#\" (click)=\"clicked($event)\">Testing The Thing 2</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/testing-list-div/testing-list-div.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/testing-list-div/testing-list-div.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-list {\n  list-style: none;\n  display: block;\n  position: absolute; }\n  .nav-list .active {\n    display: block !important;\n    background: green; }\n  .nav-list li {\n    background: yellow; }\n  .nav-list li :not(.active) {\n      display: none; }\n  .nav-list :not(:first-child) {\n    margin-top: 10px !important; }\n  ul:hover :not(.active) {\n  display: block !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGluZy1saXN0LWRpdi9DOlxcc291cmNlXFxnaXRodWJcXHdhbGRvcy13YXJtZXJzL3NyY1xcYXBwXFx0ZXN0aW5nLWxpc3QtZGl2XFx0ZXN0aW5nLWxpc3QtZGl2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtFQUh0QjtJQUtRLHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTtFQU56QjtJQWFRLGtCQUFrQixFQUFBO0VBYjFCO01BV1ksYUFBYSxFQUFBO0VBWHpCO0lBaUJRLDJCQUEyQixFQUFBO0VBSW5DO0VBRVEseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZXN0aW5nLWxpc3QtZGl2L3Rlc3RpbmctbGlzdC1kaXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgICAgOm5vdCguYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfSAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgICB9XHJcblxyXG4gICAgOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgfVxyXG59XHJcblxyXG51bDpob3ZlciB7XHJcbiAgICA6bm90KC5hY3RpdmUpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/testing-list-div/testing-list-div.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/testing-list-div/testing-list-div.component.ts ***!
  \****************************************************************/
/*! exports provided: TestingListDivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingListDivComponent", function() { return TestingListDivComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestingListDivComponent = /** @class */ (function () {
    function TestingListDivComponent() {
    }
    TestingListDivComponent.prototype.ngOnInit = function () {
    };
    TestingListDivComponent.prototype.clicked = function (event) {
        // var current = document.getElementsByClassName('active');
        // current[0].className = current[0].className.replace('active', '');
        // event.currentTarget.className += ' active';
        // console.log('clicked');
    };
    TestingListDivComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testing-list-div',
            template: __webpack_require__(/*! ./testing-list-div.component.html */ "./src/app/testing-list-div/testing-list-div.component.html"),
            styles: [__webpack_require__(/*! ./testing-list-div.component.scss */ "./src/app/testing-list-div/testing-list-div.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestingListDivComponent);
    return TestingListDivComponent;
}());



/***/ }),

/***/ "./src/app/testing-nested-divs/testing-nested-divs.component.html":
/*!************************************************************************!*\
  !*** ./src/app/testing-nested-divs/testing-nested-divs.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main-div\">\n  <div id=\"otherNestedDiv\">\n      <div class=\"nestedDiv\">1</div>\n      <div class=\"nestedDiv\">2</div>\n  </div>\n\n    <div class=\"nestedDiv\">3</div>\n</div>\n"

/***/ }),

/***/ "./src/app/testing-nested-divs/testing-nested-divs.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/testing-nested-divs/testing-nested-divs.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nestedDiv {\n  background: yellow;\n  margin: 5px;\n  flex-grow: 1; }\n\n#main-div {\n  margin-top: 100px;\n  display: flex;\n  flex-direction: row;\n  width: 50%; }\n\n#main-div /deep/ > div::before {\n    content: '';\n    margin: 18px;\n    height: 50px; }\n\n#main-div /deep/ > div:not(:first-child)::before {\n    border-left: 1.5px solid #d4d4d4; }\n\n#otherNestedDiv {\n  display: flex;\n  flex-direction: row;\n  flex-grow: 1; }\n\n#otherNestedDiv /deep/ > div::before {\n    content: '';\n    margin: 18px;\n    height: 50px; }\n\n#otherNestedDiv /deep/ > div:not(:first-child)::before {\n    border-left: 1.5px solid #d4d4d4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdGluZy1uZXN0ZWQtZGl2cy9DOlxcc291cmNlXFxnaXRodWJcXHdhbGRvcy13YXJtZXJzL3NyY1xcYXBwXFx0ZXN0aW5nLW5lc3RlZC1kaXZzXFx0ZXN0aW5nLW5lc3RlZC1kaXZzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksaUJBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUpkO0lBT0UsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZLEVBQUE7O0FBVGQ7SUFhRSxnQ0FBZ0MsRUFBQTs7QUFJbEM7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFIaEI7SUFNRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVksRUFBQTs7QUFSZDtJQVlFLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGVzdGluZy1uZXN0ZWQtZGl2cy90ZXN0aW5nLW5lc3RlZC1kaXZzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lc3RlZERpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4jbWFpbi1kaXYge1xyXG4gICAgbWFyZ2luLXRvcDoxMDBweDsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgJiAvZGVlcC8gPiBkaXY6OmJlZm9yZSB7XHJcblx0XHRjb250ZW50OiAnJztcclxuXHRcdG1hcmdpbjogMThweDtcclxuXHRcdGhlaWdodDogNTBweDtcclxuXHR9XHJcblxyXG5cdCYgL2RlZXAvID4gZGl2Om5vdCg6Zmlyc3QtY2hpbGQpOjpiZWZvcmUge1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICNkNGQ0ZDQ7XHJcblx0fVxyXG59XHJcbiBcclxuI290aGVyTmVzdGVkRGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG5cclxuICAgICYgL2RlZXAvID4gZGl2OjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRtYXJnaW46IDE4cHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0fVxyXG5cclxuXHQmIC9kZWVwLyA+IGRpdjpub3QoOmZpcnN0LWNoaWxkKTo6YmVmb3JlIHtcclxuXHRcdGJvcmRlci1sZWZ0OiAxLjVweCBzb2xpZCAjZDRkNGQ0O1xyXG5cdH1cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/testing-nested-divs/testing-nested-divs.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/testing-nested-divs/testing-nested-divs.component.ts ***!
  \**********************************************************************/
/*! exports provided: TestingNestedDivsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestingNestedDivsComponent", function() { return TestingNestedDivsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestingNestedDivsComponent = /** @class */ (function () {
    function TestingNestedDivsComponent() {
    }
    TestingNestedDivsComponent.prototype.ngOnInit = function () {
    };
    TestingNestedDivsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testing-nested-divs',
            template: __webpack_require__(/*! ./testing-nested-divs.component.html */ "./src/app/testing-nested-divs/testing-nested-divs.component.html"),
            styles: [__webpack_require__(/*! ./testing-nested-divs.component.scss */ "./src/app/testing-nested-divs/testing-nested-divs.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestingNestedDivsComponent);
    return TestingNestedDivsComponent;
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