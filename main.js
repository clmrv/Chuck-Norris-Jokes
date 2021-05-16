(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/celmer/Documents/react/angular/rec-task-chuck-norris/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "QdYh":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class CounterComponent {
    constructor() {
        this.counter = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0);
        this.counterStatus = "correct";
        this.onChange = () => undefined;
    }
    addValue(value) {
        this.counter.setValue(this.counter.value + value);
        this.myOnChange();
    }
    myOnChange() {
        if (this.range) {
            this.counterStatus = inRange(this.counter.value, this.range) ? "correct" : "error";
        }
        this.onChange();
    }
}
CounterComponent.ɵfac = function CounterComponent_Factory(t) { return new (t || CounterComponent)(); };
CounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CounterComponent, selectors: [["app-counter"]], inputs: { counter: "counter", onChange: "onChange", range: "range" }, decls: 8, vars: 9, consts: [[3, "click"], ["type", "number", 3, "formControl", "change"]], template: function CounterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_1_listener() { return ctx.addValue(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function CounterComponent_Template_input_change_4_listener() { return ctx.myOnChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CounterComponent_Template_button_click_5_listener() { return ctx.addValue(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.counterStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.counterStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.counterStatus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.counter);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.counterStatus);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n\n  background-color: var(--gray-2);\n  border: none;\n  border-radius: 6px;\n  height: 58px;\n  width: 146px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  display:flex;\n  justify-content: center;\n  align-items: center;\n\n  padding: 0px;\n  margin: 0px;\n\n  width: 28px;\n  height: 28px;\n\n  border-radius: 20px;\n  border: 2px solid var(--main-color);\n}\n\nbutton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\nspan[_ngcontent-%COMP%] {\n  position: relative;\n  bottom: 3px;\n  \n  font-family: Helvetica;\n  font-size: 30px;\n  font-weight: 300;\n\n  color: var(--main-color);\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 49px;\n  border: none;\n  background-color: var(--gray-2);\n  \n  text-align: center;\n  color: var(--main-color);\n  font-family: Helvetica;\n  font-size: 18px;\n  font-weight: 500;\n}\n\n.error[_ngcontent-%COMP%] {\n  background-color: var(--red-error);\n}\n\nbutton[_ngcontent-%COMP%]:active {\n  border: none;\n  background-color: var(--gray-1);\n}\n\nbutton[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDZCQUE2Qjs7RUFFN0IsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixZQUFZO0VBQ1osV0FBVzs7RUFFWCxXQUFXO0VBQ1gsWUFBWTs7RUFFWixtQkFBbUI7RUFDbkIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXOztFQUVYLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCOztFQUVoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLCtCQUErQjs7RUFFL0Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrQkFBK0I7QUFDakM7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBR0EsZ0NBQWdDOztBQUNoQzs7RUFFRSx3QkFBd0I7RUFDeEIsU0FBUztBQUNYOztBQUNBLFlBQVk7O0FBQ1o7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiY291bnRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGhlaWdodDogNThweDtcbiAgd2lkdGg6IDE0NnB4O1xufVxuXG5idXR0b24ge1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcblxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zcGFuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDNweDtcbiAgXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcblxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDQ5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcbiAgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1lcnJvcik7XG59XG5cbmJ1dHRvbjphY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XG59XG5idXR0b246YWN0aXZlIHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xufVxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"] });
function inRange(value, range) {
    if (value < range[0])
        return false;
    if (value > range[1])
        return false;
    return true;
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select/select.component */ "ordM");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter/counter.component */ "QdYh");







const _c0 = function () { return { closed: "Categories", open: "Select category" }; };
class AppComponent {
    constructor(http) {
        this.http = http;
        this.title = 'rec-task-chuck-norris';
        this.banner = bannerUrls.chuck;
        this.joke = "Loading...";
        this.impersonate = {
            firstName: "",
            lastName: "",
        };
        this.impersonateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("");
        this.impersonateHideLabel = false;
        this.categories = [
            {
                value: "explicit",
                caption: "Explicit",
            },
            {
                value: "nerdy",
                caption: "Nerdy",
            },
        ];
        this.selectedCategory = "";
        this.drawButtonLabel = this.getDrawButtonLabel();
        this.counter = {
            formControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0),
            range: [0, 100],
        };
        this.boundedOnCategoryChange = this.onCategoryChange.bind(this);
        this.boundedOnImpersonateChange = this.onImpersonateChange.bind(this);
        this.saveButtonState = "saveButtonOff";
        this.boundedUpdateSaveButtonState = this.updateSaveButtonState.bind(this);
        this.boundedOnCategoryOpen = this.onCategoryOpen.bind(this);
        this.boundedOnCategoryClose = this.onCategoryClose.bind(this);
        this.handleDrawButton();
    }
    handleDrawButton() {
        const url = getIcndbUrl(this.impersonate, this.selectedCategory);
        this.http.get(url)
            .subscribe((data) => {
            this.joke = data.value[0].joke;
        });
    }
    downloadJokes(count) {
        const url = getIcndbUrl(this.impersonate, this.selectedCategory, count);
        this.http.get(url)
            .subscribe((data) => {
            let textToSave = "";
            data.value.map((joke) => {
                textToSave += `${joke.joke}\n\n`;
            });
            downloadToFile(textToSave, "My jokes", "txt");
        });
    }
    onCategoryOpen() {
        this.impersonateHideLabel = true;
    }
    onCategoryClose() {
        this.impersonateHideLabel = false;
    }
    onCategoryChange(newCategoryValue) {
        this.selectedCategory = newCategoryValue;
    }
    onImpersonateChange() {
        this.impersonate.firstName = getFirstName(this.impersonateControl.value);
        this.impersonate.lastName = getLastName(this.impersonateControl.value);
        this.drawButtonLabel = this.getDrawButtonLabel();
        this.banner = (this.impersonate.firstName) ? bannerUrls.unknown : bannerUrls.chuck;
    }
    handleSaveButton() {
        if (this.saveButtonState == "saveButtonOff")
            return;
        this.downloadJokes(this.counter.formControl.value);
    }
    getDrawButtonLabel() {
        let firstName = getFirstName(this.impersonateControl.value);
        let lastName = getLastName(this.impersonateControl.value);
        if (firstName === "") {
            firstName = "Chuck";
        }
        if (lastName === "") {
            lastName = "Norris";
        }
        return `Draw a random ${firstName} ${lastName} joke`;
    }
    updateSaveButtonState() {
        const counter = this.counter.formControl.value;
        if (counter > 0 && counter <= 100)
            this.saveButtonState = "saveButtonOn";
        else
            this.saveButtonState = "saveButtonOff";
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 17, consts: [[1, "mainBox"], [3, "src", "srcset"], [1, "joke"], [1, "wide", 3, "onChange", "onOpen", "onClose", "items", "placeholders"], ["placeholder", "Impersonate Chuck Norris", 1, "wide", 3, "inputControl", "onChange", "hidePlaceholder"], [1, "spacer"], ["type", "drawButton", 1, "wide", 3, "text", "click"], [1, "wide", 2, "display", "flex", "justify-content", "space-between"], [3, "counter", "onChange", "range"], [2, "width", "10px"], ["text", "Save Jokes", 1, "wide", 3, "type", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_app_button_click_9_listener() { return ctx.handleDrawButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-counter", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "app-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_app_button_click_14_listener() { return ctx.handleSaveButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.banner.src, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("srcset", ctx.banner.srcset, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.joke);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("onChange", ctx.boundedOnCategoryChange)("onOpen", ctx.boundedOnCategoryOpen)("onClose", ctx.boundedOnCategoryClose)("items", ctx.categories)("placeholders", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("inputControl", ctx.impersonateControl)("onChange", ctx.boundedOnImpersonateChange)("hidePlaceholder", ctx.impersonateHideLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("text", ctx.drawButtonLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("counter", ctx.counter.formControl)("onChange", ctx.boundedUpdateSaveButtonState)("range", ctx.counter.range);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.saveButtonState);
    } }, directives: [_select_select_component__WEBPACK_IMPORTED_MODULE_3__["SelectComponent"], _input_input_component__WEBPACK_IMPORTED_MODULE_4__["InputComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _counter_counter_component__WEBPACK_IMPORTED_MODULE_6__["CounterComponent"]], styles: [".mainBox[_ngcontent-%COMP%] {\n  max-width: 650px;\n  height: 95vh; \n  min-height: 620px;\n\n  padding: 48px 58px 72px;\n\n  margin-left: 10px;\n  margin-right: 10px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n\n\n  border-radius: 20px;\n\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.08);\n  background-color: var(--white);\n}\n\nimg[_ngcontent-%COMP%] {\n  height: auto;\n  width: 100%;\n}\n\n.joke[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-variation-settings: 'wght' 600;\n  \n  font-style: italic;\n  color: var(--main-color);\n  word-break: normal;\n}\n\n.wide[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 58px;\n  min-height: 58px;\n  margin-bottom: 5px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLHVCQUF1Qjs7RUFFdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjs7RUFFbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1COzs7RUFHbkIsbUJBQW1COztFQUVuQiw0Q0FBNEM7RUFDNUMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluQm94IHtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgaGVpZ2h0OiA5NXZoOyBcbiAgbWluLWhlaWdodDogNjIwcHg7XG5cbiAgcGFkZGluZzogNDhweCA1OHB4IDcycHg7XG5cbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cbmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5qb2tlIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6ICd3Z2h0JyA2MDA7XG4gIC8qIGZvbnQtd2VpZ2h0OiA2MDA7ICovXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG59XG5cbi53aWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNThweDtcbiAgbWluLWhlaWdodDogNThweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uc3BhY2VyIHtcbiAgaGVpZ2h0OiAxcHg7XG59XG4iXX0= */"] });
const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
};
function getIcndbUrl(impersonate, category, count = 1) {
    let firstName = impersonate.firstName;
    let lastName = impersonate.lastName;
    let url = `http://api.icndb.com/jokes/random/${count}?escape=javascript&`;
    if (firstName !== "") {
        url += `firstName=${firstName}&`;
    }
    if (lastName !== "") {
        url += `lastName=${lastName}&`;
    }
    if (category !== "") {
        url += `limitTo=${[category]}&`;
    }
    return url;
}
function getFirstName(text) {
    const trimmed = text.trim();
    const space = trimmed.indexOf(" ");
    if (space === -1) {
        return trimmed;
    }
    return trimmed.substr(0, space);
}
function getLastName(text) {
    const trimmed = text.trim();
    const space = trimmed.indexOf(" ");
    if (space === -1) {
        return "";
    }
    const lastName = trimmed.substr(space, trimmed.length);
    return lastName.trim();
}
const bannerUrls = {
    chuck: {
        src: "../assets/img/Chuck-Norris-photo.png",
        srcset: `../assets/img/Chuck-Norris-photo@2x.png 2x,
            ../assets/img/Chuck-Norris-photo@3x.png 3x`
    },
    unknown: {
        src: "../assets/img/Random-photo.png",
        srcset: `../assets/img/Random-photo@2x.png 2x,
            ../assets/img/Random-photo@3x.png 3x`
    }
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/button.component */ "be9G");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./counter/counter.component */ "QdYh");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input/input.component */ "zJ+v");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.component */ "ordM");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
        _counter_counter_component__WEBPACK_IMPORTED_MODULE_5__["CounterComponent"],
        _input_input_component__WEBPACK_IMPORTED_MODULE_6__["InputComponent"],
        _select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]] }); })();


/***/ }),

/***/ "be9G":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ButtonComponent {
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], inputs: { text: "text", type: "type" }, decls: 3, vars: 4, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: ["div[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n\n  border-radius: 6px;\n  border: none;\n  background-color: red;\n}\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n}\n.drawButton[_ngcontent-%COMP%] {\n  background-color: var(--main-color);\n}\n.drawButton[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--white);\n  font-weight: 600;\n}\n.saveButtonOff[_ngcontent-%COMP%]   {background-color: var(--gray-2);}\n.saveButtonOff[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {color: var(--main-color);}\n.saveButtonOn[_ngcontent-%COMP%]   {background-color: var(--main-color);}\n.saveButtonOn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {color: var(--white);}\n.drawButton[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.saveButtonOn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7O0VBRVgsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLFdBQVc7RUFDWCxZQUFZOztFQUVaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7QUFHQSxrQkFBa0IsK0JBQStCLENBQUM7QUFDbEQsa0JBQWtCLHdCQUF3QixDQUFDO0FBRTNDLGlCQUFpQixtQ0FBbUMsQ0FBQztBQUNyRCxpQkFBaUIsbUJBQW1CLENBQUM7QUFHckM7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5kaXYgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmRyYXdCdXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cbi5kcmF3QnV0dG9uIHAge1xuICBjb2xvcjogdmFyKC0td2hpdGUpO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5cbi5zYXZlQnV0dG9uT2ZmICAge2JhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7fVxuLnNhdmVCdXR0b25PZmYgcCB7Y29sb3I6IHZhcigtLW1haW4tY29sb3IpO31cblxuLnNhdmVCdXR0b25PbiAgIHtiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTt9XG4uc2F2ZUJ1dHRvbk9uIHAge2NvbG9yOiB2YXIoLS13aGl0ZSk7fVxuXG5cbi5kcmF3QnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNhdmVCdXR0b25Pbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ "ordM":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SelectComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onItemClick(item_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.caption);
} }
class SelectComponent {
    constructor() {
        this.panelExpanded = false;
        this.selected = "";
        this.placeholders = {
            closed: "Categories",
            open: "Select category",
        };
        this.items = [];
        this.onChange = () => undefined;
        this.onOpen = () => undefined;
        this.onClose = () => undefined;
        this.title = this.placeholders.closed;
        this.styles = styles.normalStyles;
    }
    ngOnInit() {
        this.items = [{ value: "", caption: "None" }].concat(this.items);
    }
    myOnOpen() {
        this.updateTitle();
        this.onOpen();
    }
    myOnClose() {
        this.updateTitle();
    }
    onAfterCollapse() {
        this.onChange(this.selected);
        this.onClose();
    }
    onItemClick(itemValue) {
        this.selected = itemValue;
        this.panelExpanded = false;
        this.updateTitle();
        if (itemValue) {
            this.styles = styles.selectedStyles;
        }
        else {
            this.styles = styles.normalStyles;
        }
    }
    updateTitle() {
        const titleClosed = this.placeholders.closed;
        const titleOpen = this.placeholders.open;
        console.log(`titleClosed ${titleClosed}`);
        if (this.selected) {
            let caption = "";
            this.items.map((item) => {
                if (item.value === this.selected)
                    caption = item.caption;
            });
            this.title = caption;
        }
        else {
            this.title = (this.panelExpanded) ? titleOpen : titleClosed;
        }
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], inputs: { placeholders: "placeholders", items: "items", onChange: "onChange", onOpen: "onOpen", onClose: "onClose" }, decls: 6, vars: 5, consts: [["ngClass", "selectPanel", 3, "ngStyle", "expanded", "opened", "closed", "afterCollapse", "expandedChange"], [3, "ngStyle"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("opened", function SelectComponent_Template_mat_expansion_panel_opened_0_listener() { return ctx.myOnOpen(); })("closed", function SelectComponent_Template_mat_expansion_panel_closed_0_listener() { return ctx.myOnClose(); })("afterCollapse", function SelectComponent_Template_mat_expansion_panel_afterCollapse_0_listener() { return ctx.onAfterCollapse(); })("expandedChange", function SelectComponent_Template_mat_expansion_panel_expandedChange_0_listener($event) { return ctx.panelExpanded = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_div_5_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styles.panel)("expanded", ctx.panelExpanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.styles.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".selectPanel[_ngcontent-%COMP%] {\n  margin: 0px;\n  box-shadow: none;\n  border-radius: 6px;\n  border: solid 2px var(--gray-1);\n  \n  background-color: var(--white);\n}\n\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n\n  margin: 0px;\n  padding: 0px;\n\n  height: 58px;\n  width: calc(100% + 30px);\n  position: relative;\n  right: 15px;\n\n  border-radius: 6px;\n}\n\n\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 17px;\n  color: #666666;\n}\n\n\n.item[_ngcontent-%COMP%]:hover {\n  background-color: var(--gray-2);\n    cursor: pointer;\n}\n\n\n.item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: var(--main-color);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsK0JBQStCOztFQUUvQiw4QkFBOEI7QUFDaEM7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsV0FBVztFQUNYLFlBQVk7O0VBRVosWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsV0FBVzs7RUFFWCxrQkFBa0I7QUFDcEI7OztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7OztBQUdBO0VBQ0UsK0JBQStCO0lBQzdCLGVBQWU7QUFDbkI7OztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWxlY3RQYW5lbCB7XG4gIG1hcmdpbjogMHB4O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogc29saWQgMnB4IHZhcigtLWdyYXktMSk7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG59XG5cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG5cbiAgaGVpZ2h0OiA1OHB4O1xuICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IDE1cHg7XG5cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLml0ZW0gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxN3B4O1xuICBjb2xvcjogIzY2NjY2Njtcbn1cblxuXG4uaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW06aG92ZXIgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */"] });
const styles = {
    selectedStyles: {
        panel: {
            'border-color': 'var(--main-color)',
        },
        title: {
            'color': 'var(--main-color)',
        }
    },
    normalStyles: {
        panel: {
            'border-color': 'var(--gray-1)',
        },
        title: {
            'color': 'var(--gray-1)',
        }
    }
};


/***/ }),

/***/ "zJ+v":
/*!******************************************!*\
  !*** ./src/app/input/input.component.ts ***!
  \******************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function InputComponent_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx_r0.styles.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.placeholder);
} }
class InputComponent {
    constructor() {
        this.inputControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]("");
        this.placeholder = "";
        this.onChange = () => undefined;
        this.hidePlaceholder = false;
        this.styles = inactiveStyles;
    }
    onFocus() {
        this.styles = activeStyles;
    }
    onFocusOut() {
        if (this.inputControl.value.length == 0) {
            this.styles = inactiveStyles;
        }
    }
}
InputComponent.ɵfac = function InputComponent_Factory(t) { return new (t || InputComponent)(); };
InputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InputComponent, selectors: [["app-input"]], inputs: { inputControl: "inputControl", placeholder: "placeholder", onChange: "onChange", hidePlaceholder: "hidePlaceholder" }, decls: 3, vars: 3, consts: [[1, "labelAnchor"], [3, "ngStyle", 4, "ngIf"], [3, "formControl", "ngStyle", "ngModelChange", "focus", "focusout"], [3, "ngStyle"]], template: function InputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InputComponent_label_1_Template, 2, 2, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function InputComponent_Template_input_ngModelChange_2_listener() { return ctx.onChange(); })("focus", function InputComponent_Template_input_focus_2_listener() { return ctx.onFocus(); })("focusout", function InputComponent_Template_input_focusout_2_listener() { return ctx.onFocusOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.hidePlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.inputControl)("ngStyle", ctx.styles.input);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: ["input[_ngcontent-%COMP%] {\n  padding: 0px;\n  padding-left: 13px;\n  margin: 0px;\n\n  padding-left: 22px;\n\n  width: 100%;\n  height: 100%;\n\n  border-radius: 6px;\n  border: solid 2px;\n  background-color: var(--white);\n\n  color: var(--main-color);\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.labelAnchor[_ngcontent-%COMP%] {\n  height: 0px;\n  position: relative;\n}\n\nlabel[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 25px;\n\n  color: var(--gray-1);\n  \n  pointer-events: none;\n  transition: all 150ms; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucHV0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7O0VBRVgsa0JBQWtCOztFQUVsQixXQUFXO0VBQ1gsWUFBWTs7RUFFWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDhCQUE4Qjs7RUFFOUIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVOztFQUVWLG9CQUFvQjs7RUFFcEIsb0JBQW9CO0VBQ3BCLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJpbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctbGVmdDogMTNweDtcbiAgbWFyZ2luOiAwcHg7XG5cbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IHNvbGlkIDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubGFiZWxBbmNob3Ige1xuICBoZWlnaHQ6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjVweDtcblxuICBjb2xvcjogdmFyKC0tZ3JheS0xKTtcbiAgXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXM7IFxufSJdfQ== */"] });
const activeStyles = {
    input: {
        'border-color': 'var(--main-color)',
        'padding-top': '20px',
    },
    label: {
        'top': '8px',
        'font-size': '12px',
    },
};
const inactiveStyles = {
    input: {
        'border-color': 'var(--gray-1)',
        'padding-top': '0px',
    },
    label: {
        'top': '19px',
        'font-size': '16px',
    },
};


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map