webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var platform_browser_dynamic_1 = __webpack_require__(35);
	var app_module_1 = __webpack_require__(39);
	// depending on the env mode, enable prod mode or add debugging modules
	if (false) {
	    core_1.enableProdMode();
	}
	function main() {
	    return platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
	}
	exports.main = main;
	if (document.readyState === 'complete') {
	    main();
	}
	else {
	    document.addEventListener('DOMContentLoaded', main);
	}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var platform_browser_1 = __webpack_require__(38);
	var http_1 = __webpack_require__(40);
	var forms_1 = __webpack_require__(41);
	var app_component_1 = __webpack_require__(47);
	var home_component_1 = __webpack_require__(62);
	var about_component_1 = __webpack_require__(71);
	var shared_1 = __webpack_require__(48);
	var app_routing_1 = __webpack_require__(74);
	var ng2_file_upload_1 = __webpack_require__(93);
	var home_service_1 = __webpack_require__(63);
	var AppModule = (function () {
	    function AppModule(appRef) {
	        this.appRef = appRef;
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                http_1.HttpModule,
	                forms_1.FormsModule,
	                forms_1.ReactiveFormsModule,
	                app_routing_1.routing
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                home_component_1.HomeComponent,
	                about_component_1.AboutComponent,
	                ng2_file_upload_1.FileSelectDirective
	            ],
	            providers: [
	                shared_1.ApiService,
	                home_service_1.HomeService
	            ],
	            bootstrap: [app_component_1.AppComponent]
	        }), 
	        __metadata('design:paramtypes', [core_1.ApplicationRef])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @license Angular v4.1.0
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	(function (global, factory) {
		 true ? factory(exports, __webpack_require__(1), __webpack_require__(42), __webpack_require__(44), __webpack_require__(46), __webpack_require__(38)) :
		typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/observable/forkJoin', 'rxjs/observable/fromPromise', 'rxjs/operator/map', '@angular/platform-browser'], factory) :
		(factory((global.ng = global.ng || {}, global.ng.forms = global.ng.forms || {}),global.ng.core,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.ng.platformBrowser));
	}(this, (function (exports,_angular_core,rxjs_observable_forkJoin,rxjs_observable_fromPromise,rxjs_operator_map,_angular_platformBrowser) { 'use strict';
	
	var __extends = (undefined && undefined.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * @license Angular v4.1.0
	 * (c) 2010-2017 Google, Inc. https://angular.io/
	 * License: MIT
	 */
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * Base class for control directives.
	 *
	 * Only used internally in the forms module.
	 *
	 * \@stable
	 * @abstract
	 */
	var AbstractControlDirective = (function () {
	    function AbstractControlDirective() {
	    }
	    /**
	     * @abstract
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.control = function () { };
	    Object.defineProperty(AbstractControlDirective.prototype, "value", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.value : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valid", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.valid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "invalid", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.invalid : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pending", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.pending : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "errors", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.errors : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "pristine", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.pristine : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "dirty", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.dirty : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "touched", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.touched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "untouched", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.untouched : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "disabled", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.disabled : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "enabled", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.control ? this.control.enabled : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "statusChanges", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return this.control ? this.control.statusChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "valueChanges", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return this.control ? this.control.valueChanges : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlDirective.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?=} value
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.reset = function (value) {
	        if (value === void 0) { value = undefined; }
	        if (this.control)
	            this.control.reset(value);
	    };
	    /**
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.hasError = function (errorCode, path) {
	        return this.control ? this.control.hasError(errorCode, path) : false;
	    };
	    /**
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControlDirective.prototype.getError = function (errorCode, path) {
	        return this.control ? this.control.getError(errorCode, path) : null;
	    };
	    return AbstractControlDirective;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * A directive that contains multiple {\@link NgControl}s.
	 *
	 * Only used by the forms module.
	 *
	 * \@stable
	 * @abstract
	 */
	var ControlContainer = (function (_super) {
	    __extends(ControlContainer, _super);
	    function ControlContainer() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    Object.defineProperty(ControlContainer.prototype, "formDirective", {
	        /**
	         * Get the form to which this container belongs.
	         * @return {?}
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(ControlContainer.prototype, "path", {
	        /**
	         * Get the path to this container.
	         * @return {?}
	         */
	        get: function () { return null; },
	        enumerable: true,
	        configurable: true
	    });
	    return ControlContainer;
	}(AbstractControlDirective));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var __assign = (undefined && undefined.__assign) || Object.assign || function (t) {
	    for (var s, i = 1, n = arguments.length; i < n; i++) {
	        s = arguments[i];
	        for (var p in s)
	            if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	    }
	    return t;
	};
	/**
	 * @param {?} value
	 * @return {?}
	 */
	function isEmptyInputValue(value) {
	    // we don't check for string here so it also works with arrays
	    return value == null || value.length === 0;
	}
	/**
	 * Providers for validators to be used for {\@link FormControl}s in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * ### Example
	 *
	 * {\@example core/forms/ts/ng_validators/ng_validators.ts region='ng_validators'}
	 * \@stable
	 */
	var NG_VALIDATORS = new _angular_core.InjectionToken('NgValidators');
	/**
	 * Providers for asynchronous validators to be used for {\@link FormControl}s
	 * in a form.
	 *
	 * Provide this using `multi: true` to add validators.
	 *
	 * See {\@link NG_VALIDATORS} for more details.
	 *
	 * \@stable
	 */
	var NG_ASYNC_VALIDATORS = new _angular_core.InjectionToken('NgAsyncValidators');
	var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
	/**
	 * Provides a set of validators used by form controls.
	 *
	 * A validator is a function that processes a {\@link FormControl} or collection of
	 * controls and returns a map of errors. A null map means that validation has passed.
	 *
	 * ### Example
	 *
	 * ```typescript
	 * var loginControl = new FormControl("", Validators.required)
	 * ```
	 *
	 * \@stable
	 */
	var Validators = (function () {
	    function Validators() {
	    }
	    /**
	     * Validator that requires controls to have a non-empty value.
	     * @param {?} control
	     * @return {?}
	     */
	    Validators.required = function (control) {
	        return isEmptyInputValue(control.value) ? { 'required': true } : null;
	    };
	    /**
	     * Validator that requires control value to be true.
	     * @param {?} control
	     * @return {?}
	     */
	    Validators.requiredTrue = function (control) {
	        return control.value === true ? null : { 'required': true };
	    };
	    /**
	     * Validator that performs email validation.
	     * @param {?} control
	     * @return {?}
	     */
	    Validators.email = function (control) {
	        return EMAIL_REGEXP.test(control.value) ? null : { 'email': true };
	    };
	    /**
	     * Validator that requires controls to have a value of a minimum length.
	     * @param {?} minLength
	     * @return {?}
	     */
	    Validators.minLength = function (minLength) {
	        return function (control) {
	            if (isEmptyInputValue(control.value)) {
	                return null; // don't validate empty values to allow optional controls
	            }
	            var /** @type {?} */ length = control.value ? control.value.length : 0;
	            return length < minLength ?
	                { 'minlength': { 'requiredLength': minLength, 'actualLength': length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires controls to have a value of a maximum length.
	     * @param {?} maxLength
	     * @return {?}
	     */
	    Validators.maxLength = function (maxLength) {
	        return function (control) {
	            var /** @type {?} */ length = control.value ? control.value.length : 0;
	            return length > maxLength ?
	                { 'maxlength': { 'requiredLength': maxLength, 'actualLength': length } } :
	                null;
	        };
	    };
	    /**
	     * Validator that requires a control to match a regex to its value.
	     * @param {?} pattern
	     * @return {?}
	     */
	    Validators.pattern = function (pattern) {
	        if (!pattern)
	            return Validators.nullValidator;
	        var /** @type {?} */ regex;
	        var /** @type {?} */ regexStr;
	        if (typeof pattern === 'string') {
	            regexStr = "^" + pattern + "$";
	            regex = new RegExp(regexStr);
	        }
	        else {
	            regexStr = pattern.toString();
	            regex = pattern;
	        }
	        return function (control) {
	            if (isEmptyInputValue(control.value)) {
	                return null; // don't validate empty values to allow optional controls
	            }
	            var /** @type {?} */ value = control.value;
	            return regex.test(value) ? null :
	                { 'pattern': { 'requiredPattern': regexStr, 'actualValue': value } };
	        };
	    };
	    /**
	     * No-op validator.
	     * @param {?} c
	     * @return {?}
	     */
	    Validators.nullValidator = function (c) { return null; };
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    Validators.compose = function (validators) {
	        if (!validators)
	            return null;
	        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            return _mergeErrors(_executeValidators(control, presentValidators));
	        };
	    };
	    /**
	     * @param {?} validators
	     * @return {?}
	     */
	    Validators.composeAsync = function (validators) {
	        if (!validators)
	            return null;
	        var /** @type {?} */ presentValidators = (validators.filter(isPresent));
	        if (presentValidators.length == 0)
	            return null;
	        return function (control) {
	            var /** @type {?} */ observables = _executeAsyncValidators(control, presentValidators).map(toObservable);
	            return rxjs_operator_map.map.call(rxjs_observable_forkJoin.forkJoin(observables), _mergeErrors);
	        };
	    };
	    return Validators;
	}());
	/**
	 * @param {?} o
	 * @return {?}
	 */
	function isPresent(o) {
	    return o != null;
	}
	/**
	 * @param {?} r
	 * @return {?}
	 */
	function toObservable(r) {
	    var /** @type {?} */ obs = _angular_core.ɵisPromise(r) ? rxjs_observable_fromPromise.fromPromise(r) : r;
	    if (!(_angular_core.ɵisObservable(obs))) {
	        throw new Error("Expected validator to return Promise or Observable.");
	    }
	    return obs;
	}
	/**
	 * @param {?} control
	 * @param {?} validators
	 * @return {?}
	 */
	function _executeValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	/**
	 * @param {?} control
	 * @param {?} validators
	 * @return {?}
	 */
	function _executeAsyncValidators(control, validators) {
	    return validators.map(function (v) { return v(control); });
	}
	/**
	 * @param {?} arrayOfErrors
	 * @return {?}
	 */
	function _mergeErrors(arrayOfErrors) {
	    var /** @type {?} */ res = arrayOfErrors.reduce(function (res, errors) {
	        return errors != null ? __assign({}, /** @type {?} */ ((res)), errors) : ((res));
	    }, {});
	    return Object.keys(res).length === 0 ? null : res;
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * Used to provide a {\@link ControlValueAccessor} for form controls.
	 *
	 * See {\@link DefaultValueAccessor} for how to implement one.
	 * \@stable
	 */
	var NG_VALUE_ACCESSOR = new _angular_core.InjectionToken('NgValueAccessor');
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var CHECKBOX_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return CheckboxControlValueAccessor; }),
	    multi: true,
	};
	/**
	 * The accessor for writing a value and listening to changes on a checkbox input element.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="checkbox" name="rememberLogin" ngModel>
	 *  ```
	 *
	 *  \@stable
	 */
	var CheckboxControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function CheckboxControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', value);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    CheckboxControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    return CheckboxControlValueAccessor;
	}());
	CheckboxControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
	                host: { '(change)': 'onChange($event.target.checked)', '(blur)': 'onTouched()' },
	                providers: [CHECKBOX_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	CheckboxControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer, },
	    { type: _angular_core.ElementRef, },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var DEFAULT_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return DefaultValueAccessor; }),
	    multi: true
	};
	/**
	 * We must check whether the agent is Android because composition events
	 * behave differently between iOS and Android.
	 * @return {?}
	 */
	function _isAndroid() {
	    var /** @type {?} */ userAgent = _angular_platformBrowser.ɵgetDOM() ? _angular_platformBrowser.ɵgetDOM().getUserAgent() : '';
	    return /android (\d+)/.test(userAgent.toLowerCase());
	}
	/**
	 * Turn this mode on if you want form directives to buffer IME input until compositionend
	 * \@experimental
	 */
	var COMPOSITION_BUFFER_MODE = new _angular_core.InjectionToken('CompositionEventMode');
	/**
	 * The default accessor for writing a value and listening to changes that is used by the
	 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="text" name="searchQuery" ngModel>
	 *  ```
	 *
	 *  \@stable
	 */
	var DefaultValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     * @param {?} _compositionMode
	     */
	    function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._compositionMode = _compositionMode;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this._composing = false;
	        if (this._compositionMode == null) {
	            this._compositionMode = !_isAndroid();
	        }
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.writeValue = function (value) {
	        var /** @type {?} */ normalizedValue = value == null ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype._handleInput = function (value) {
	        if (!this._compositionMode || (this._compositionMode && !this._composing)) {
	            this.onChange(value);
	        }
	    };
	    /**
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype._compositionStart = function () { this._composing = true; };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    DefaultValueAccessor.prototype._compositionEnd = function (value) {
	        this._composing = false;
	        this._compositionMode && this.onChange(value);
	    };
	    return DefaultValueAccessor;
	}());
	DefaultValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
	                // TODO: vsavkin replace the above selector with the one below it once
	                // https://github.com/angular/angular/issues/3011 is implemented
	                // selector: '[ngModel],[formControl],[formControlName]',
	                host: {
	                    '(input)': '_handleInput($event.target.value)',
	                    '(blur)': 'onTouched()',
	                    '(compositionstart)': '_compositionStart()',
	                    '(compositionend)': '_compositionEnd($event.target.value)'
	                },
	                providers: [DEFAULT_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	DefaultValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer, },
	    { type: _angular_core.ElementRef, },
	    { type: undefined, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Inject, args: [COMPOSITION_BUFFER_MODE,] },] },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} validator
	 * @return {?}
	 */
	function normalizeValidator(validator) {
	    if (((validator)).validate) {
	        return function (c) { return ((validator)).validate(c); };
	    }
	    else {
	        return (validator);
	    }
	}
	/**
	 * @param {?} validator
	 * @return {?}
	 */
	function normalizeAsyncValidator(validator) {
	    if (((validator)).validate) {
	        return function (c) { return ((validator)).validate(c); };
	    }
	    else {
	        return (validator);
	    }
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var NUMBER_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return NumberValueAccessor; }),
	    multi: true
	};
	/**
	 * The accessor for writing a number value and listening to changes that is used by the
	 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="number" [(ngModel)]="age">
	 *  ```
	 */
	var NumberValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function NumberValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.writeValue = function (value) {
	        // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
	        var /** @type {?} */ normalizedValue = value == null ? '' : value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', normalizedValue);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    NumberValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    return NumberValueAccessor;
	}());
	NumberValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
	                host: {
	                    '(change)': 'onChange($event.target.value)',
	                    '(input)': 'onChange($event.target.value)',
	                    '(blur)': 'onTouched()'
	                },
	                providers: [NUMBER_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NumberValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer, },
	    { type: _angular_core.ElementRef, },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @return {?}
	 */
	function unimplemented() {
	    throw new Error('unimplemented');
	}
	/**
	 * A base class that all control directive extend.
	 * It binds a {\@link FormControl} object to a DOM element.
	 *
	 * Used internally by Angular forms.
	 *
	 * \@stable
	 * @abstract
	 */
	var NgControl = (function (_super) {
	    __extends(NgControl, _super);
	    function NgControl() {
	        var _this = _super.apply(this, arguments) || this;
	        /**
	         * \@internal
	         */
	        _this._parent = null;
	        _this.name = null;
	        _this.valueAccessor = null;
	        /**
	         * \@internal
	         */
	        _this._rawValidators = [];
	        /**
	         * \@internal
	         */
	        _this._rawAsyncValidators = [];
	        return _this;
	    }
	    Object.defineProperty(NgControl.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return (unimplemented()); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgControl.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return (unimplemented()); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @abstract
	     * @param {?} newValue
	     * @return {?}
	     */
	    NgControl.prototype.viewToModelUpdate = function (newValue) { };
	    return NgControl;
	}(AbstractControlDirective));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var RADIO_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return RadioControlValueAccessor; }),
	    multi: true
	};
	/**
	 * Internal class used by Angular to uncheck radio buttons with the matching name.
	 */
	var RadioControlRegistry = (function () {
	    function RadioControlRegistry() {
	        this._accessors = [];
	    }
	    /**
	     * @param {?} control
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype.add = function (control, accessor) {
	        this._accessors.push([control, accessor]);
	    };
	    /**
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype.remove = function (accessor) {
	        for (var /** @type {?} */ i = this._accessors.length - 1; i >= 0; --i) {
	            if (this._accessors[i][1] === accessor) {
	                this._accessors.splice(i, 1);
	                return;
	            }
	        }
	    };
	    /**
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype.select = function (accessor) {
	        var _this = this;
	        this._accessors.forEach(function (c) {
	            if (_this._isSameGroup(c, accessor) && c[1] !== accessor) {
	                c[1].fireUncheck(accessor.value);
	            }
	        });
	    };
	    /**
	     * @param {?} controlPair
	     * @param {?} accessor
	     * @return {?}
	     */
	    RadioControlRegistry.prototype._isSameGroup = function (controlPair, accessor) {
	        if (!controlPair[0].control)
	            return false;
	        return controlPair[0]._parent === accessor._control._parent &&
	            controlPair[1].name === accessor.name;
	    };
	    return RadioControlRegistry;
	}());
	RadioControlRegistry.decorators = [
	    { type: _angular_core.Injectable },
	];
	/**
	 * @nocollapse
	 */
	RadioControlRegistry.ctorParameters = function () { return []; };
	/**
	 * \@whatItDoes Writes radio control values and listens to radio control changes.
	 *
	 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
	 * to keep the view synced with the {\@link FormControl} model.
	 *
	 * \@howToUse
	 *
	 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
	 * value accessor will be active on any radio control that has a form directive. You do
	 * **not** need to add a special selector to activate it.
	 *
	 * ### How to use radio buttons with form directives
	 *
	 * To use radio buttons in a template-driven form, you'll want to ensure that radio buttons
	 * in the same group have the same `name` attribute.  Radio buttons with different `name`
	 * attributes do not affect each other.
	 *
	 * {\@example forms/ts/radioButtons/radio_button_example.ts region='TemplateDriven'}
	 *
	 * When using radio buttons in a reactive form, radio buttons in the same group should have the
	 * same `formControlName`. You can also add a `name` attribute, but it's optional.
	 *
	 * {\@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
	 *
	 *  * **npm package**: `\@angular/forms`
	 *
	 *  \@stable
	 */
	var RadioControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     * @param {?} _registry
	     * @param {?} _injector
	     */
	    function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this._registry = _registry;
	        this._injector = _injector;
	        this.onChange = function () { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.ngOnInit = function () {
	        this._control = this._injector.get(NgControl);
	        this._checkName();
	        this._registry.add(this._control, this);
	    };
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.ngOnDestroy = function () { this._registry.remove(this); };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.writeValue = function (value) {
	        this._state = value === this.value;
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'checked', this._state);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this._fn = fn;
	        this.onChange = function () {
	            fn(_this.value);
	            _this._registry.select(_this);
	        };
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.fireUncheck = function (value) { this.writeValue(value); };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype._checkName = function () {
	        if (this.name && this.formControlName && this.name !== this.formControlName) {
	            this._throwNameError();
	        }
	        if (!this.name && this.formControlName)
	            this.name = this.formControlName;
	    };
	    /**
	     * @return {?}
	     */
	    RadioControlValueAccessor.prototype._throwNameError = function () {
	        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
	    };
	    return RadioControlValueAccessor;
	}());
	RadioControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
	                host: { '(change)': 'onChange()', '(blur)': 'onTouched()' },
	                providers: [RADIO_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	RadioControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer, },
	    { type: _angular_core.ElementRef, },
	    { type: RadioControlRegistry, },
	    { type: _angular_core.Injector, },
	]; };
	RadioControlValueAccessor.propDecorators = {
	    'name': [{ type: _angular_core.Input },],
	    'formControlName': [{ type: _angular_core.Input },],
	    'value': [{ type: _angular_core.Input },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var RANGE_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return RangeValueAccessor; }),
	    multi: true
	};
	/**
	 * The accessor for writing a range value and listening to changes that is used by the
	 * {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName} directives.
	 *
	 *  ### Example
	 *  ```
	 *  <input type="range" [(ngModel)]="age" >
	 *  ```
	 */
	var RangeValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function RangeValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	    }
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.writeValue = function (value) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.registerOnChange = function (fn) {
	        this.onChange = function (value) { fn(value == '' ? null : parseFloat(value)); };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    RangeValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    return RangeValueAccessor;
	}());
	RangeValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
	                host: {
	                    '(change)': 'onChange($event.target.value)',
	                    '(input)': 'onChange($event.target.value)',
	                    '(blur)': 'onTouched()'
	                },
	                providers: [RANGE_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	RangeValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer, },
	    { type: _angular_core.ElementRef, },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var SELECT_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return SelectControlValueAccessor; }),
	    multi: true
	};
	/**
	 * @param {?} id
	 * @param {?} value
	 * @return {?}
	 */
	function _buildValueString(id, value) {
	    if (id == null)
	        return "" + value;
	    if (value && typeof value === 'object')
	        value = 'Object';
	    return (id + ": " + value).slice(0, 50);
	}
	/**
	 * @param {?} valueString
	 * @return {?}
	 */
	function _extractId(valueString) {
	    return valueString.split(':')[0];
	}
	/**
	 * \@whatItDoes Writes values and listens to changes on a select element.
	 *
	 * Used by {\@link NgModel}, {\@link FormControlDirective}, and {\@link FormControlName}
	 * to keep the view synced with the {\@link FormControl} model.
	 *
	 * \@howToUse
	 *
	 * If you have imported the {\@link FormsModule} or the {\@link ReactiveFormsModule}, this
	 * value accessor will be active on any select control that has a form directive. You do
	 * **not** need to add a special selector to activate it.
	 *
	 * ### How to use select controls with form directives
	 *
	 * To use a select in a template-driven form, simply add an `ngModel` and a `name`
	 * attribute to the main `<select>` tag.
	 *
	 * If your option values are simple strings, you can bind to the normal `value` property
	 * on the option.  If your option values happen to be objects (and you'd like to save the
	 * selection in your form as an object), use `ngValue` instead:
	 *
	 * {\@example forms/ts/selectControl/select_control_example.ts region='Component'}
	 *
	 * In reactive forms, you'll also want to add your form directive (`formControlName` or
	 * `formControl`) on the main `<select>` tag. Like in the former example, you have the
	 * choice of binding to the  `value` or `ngValue` property on the select's options.
	 *
	 * {\@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
	 *
	 * ### Caveat: Option selection
	 *
	 * Angular uses object identity to select option. It's possible for the identities of items
	 * to change while the data does not. This can happen, for example, if the items are produced
	 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
	 * second response will produce objects with different identities.
	 *
	 * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
	 * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
	 * If `compareWith` is given, Angular selects option by the return value of the function.
	 *
	 * #### Syntax
	 *
	 * ```
	 * <select [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
	 *     <option *ngFor="let country of countries" [ngValue]="country">
	 *         {{country.name}}
	 *     </option>
	 * </select>
	 *
	 * compareFn(c1: Country, c2: Country): boolean {
	 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
	 * }
	 * ```
	 *
	 * Note: We listen to the 'change' event because 'input' events aren't fired
	 * for selects in Firefox and IE:
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
	 * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var SelectControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function SelectControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /**
	         * \@internal
	         */
	        this._optionMap = new Map();
	        /**
	         * \@internal
	         */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this._compareWith = _angular_core.ɵlooseIdentical;
	    }
	    Object.defineProperty(SelectControlValueAccessor.prototype, "compareWith", {
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        set: function (fn) {
	            if (typeof fn !== 'function') {
	                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
	            }
	            this._compareWith = fn;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.writeValue = function (value) {
	        this.value = value;
	        var /** @type {?} */ id = this._getOptionId(value);
	        if (id == null) {
	            this._renderer.setElementProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
	        }
	        var /** @type {?} */ valueString = _buildValueString(id, value);
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'value', valueString);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (valueString) {
	            _this.value = valueString;
	            fn(_this._getOptionValue(valueString));
	        };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype._registerOption = function () { return (this._idCounter++).toString(); };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (this._compareWith(this._optionMap.get(id), value))
	                return id;
	        }
	        return null;
	    };
	    /**
	     * \@internal
	     * @param {?} valueString
	     * @return {?}
	     */
	    SelectControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var /** @type {?} */ id = _extractId(valueString);
	        return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
	    };
	    return SelectControlValueAccessor;
	}());
	SelectControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
	                host: { '(change)': 'onChange($event.target.value)', '(blur)': 'onTouched()' },
	                providers: [SELECT_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	SelectControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer, },
	    { type: _angular_core.ElementRef, },
	]; };
	SelectControlValueAccessor.propDecorators = {
	    'compareWith': [{ type: _angular_core.Input },],
	};
	/**
	 * \@whatItDoes Marks `<option>` as dynamic, so Angular can be notified when options change.
	 *
	 * \@howToUse
	 *
	 * See docs for {\@link SelectControlValueAccessor} for usage examples.
	 *
	 * \@stable
	 */
	var NgSelectOption = (function () {
	    /**
	     * @param {?} _element
	     * @param {?} _renderer
	     * @param {?} _select
	     */
	    function NgSelectOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (this._select)
	            this.id = this._select._registerOption();
	    }
	    Object.defineProperty(NgSelectOption.prototype, "ngValue", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._select._optionMap.set(this.id, value);
	            this._setElementValue(_buildValueString(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectOption.prototype, "value", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            this._setElementValue(value);
	            if (this._select)
	                this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    NgSelectOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    /**
	     * @return {?}
	     */
	    NgSelectOption.prototype.ngOnDestroy = function () {
	        if (this._select) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    return NgSelectOption;
	}());
	NgSelectOption.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	];
	/**
	 * @nocollapse
	 */
	NgSelectOption.ctorParameters = function () { return [
	    { type: _angular_core.ElementRef, },
	    { type: _angular_core.Renderer, },
	    { type: SelectControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	]; };
	NgSelectOption.propDecorators = {
	    'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	    'value': [{ type: _angular_core.Input, args: ['value',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var SELECT_MULTIPLE_VALUE_ACCESSOR = {
	    provide: NG_VALUE_ACCESSOR,
	    useExisting: _angular_core.forwardRef(function () { return SelectMultipleControlValueAccessor; }),
	    multi: true
	};
	/**
	 * @param {?} id
	 * @param {?} value
	 * @return {?}
	 */
	function _buildValueString$1(id, value) {
	    if (id == null)
	        return "" + value;
	    if (typeof value === 'string')
	        value = "'" + value + "'";
	    if (value && typeof value === 'object')
	        value = 'Object';
	    return (id + ": " + value).slice(0, 50);
	}
	/**
	 * @param {?} valueString
	 * @return {?}
	 */
	function _extractId$1(valueString) {
	    return valueString.split(':')[0];
	}
	/**
	 * The accessor for writing a value and listening to changes on a select element.
	 *
	 *  ### Caveat: Options selection
	 *
	 * Angular uses object identity to select options. It's possible for the identities of items
	 * to change while the data does not. This can happen, for example, if the items are produced
	 * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
	 * second response will produce objects with different identities.
	 *
	 * To customize the default option comparison algorithm, `<select multiple>` supports `compareWith`
	 * input. `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
	 * If `compareWith` is given, Angular selects options by the return value of the function.
	 *
	 * #### Syntax
	 *
	 * ```
	 * <select multiple [compareWith]="compareFn"  [(ngModel)]="selectedCountries">
	 *     <option *ngFor="let country of countries" [ngValue]="country">
	 *         {{country.name}}
	 *     </option>
	 * </select>
	 *
	 * compareFn(c1: Country, c2: Country): boolean {
	 *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
	 * }
	 * ```
	 *
	 * \@stable
	 */
	var SelectMultipleControlValueAccessor = (function () {
	    /**
	     * @param {?} _renderer
	     * @param {?} _elementRef
	     */
	    function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
	        this._renderer = _renderer;
	        this._elementRef = _elementRef;
	        /**
	         * \@internal
	         */
	        this._optionMap = new Map();
	        /**
	         * \@internal
	         */
	        this._idCounter = 0;
	        this.onChange = function (_) { };
	        this.onTouched = function () { };
	        this._compareWith = _angular_core.ɵlooseIdentical;
	    }
	    Object.defineProperty(SelectMultipleControlValueAccessor.prototype, "compareWith", {
	        /**
	         * @param {?} fn
	         * @return {?}
	         */
	        set: function (fn) {
	            if (typeof fn !== 'function') {
	                throw new Error("compareWith must be a function, but received " + JSON.stringify(fn));
	            }
	            this._compareWith = fn;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.writeValue = function (value) {
	        var _this = this;
	        this.value = value;
	        var /** @type {?} */ optionSelectedStateSetter;
	        if (Array.isArray(value)) {
	            // convert values to ids
	            var /** @type {?} */ ids_1 = value.map(function (v) { return _this._getOptionId(v); });
	            optionSelectedStateSetter = function (opt, o) { opt._setSelected(ids_1.indexOf(o.toString()) > -1); };
	        }
	        else {
	            optionSelectedStateSetter = function (opt, o) { opt._setSelected(false); };
	        }
	        this._optionMap.forEach(optionSelectedStateSetter);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.registerOnChange = function (fn) {
	        var _this = this;
	        this.onChange = function (_) {
	            var /** @type {?} */ selected = [];
	            if (_.hasOwnProperty('selectedOptions')) {
	                var /** @type {?} */ options = _.selectedOptions;
	                for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                    var /** @type {?} */ opt = options.item(i);
	                    var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                    selected.push(val);
	                }
	            }
	            else {
	                var /** @type {?} */ options = (_.options);
	                for (var /** @type {?} */ i = 0; i < options.length; i++) {
	                    var /** @type {?} */ opt = options.item(i);
	                    if (opt.selected) {
	                        var /** @type {?} */ val = _this._getOptionValue(opt.value);
	                        selected.push(val);
	                    }
	                }
	            }
	            _this.value = selected;
	            fn(selected);
	        };
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
	    /**
	     * @param {?} isDisabled
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype.setDisabledState = function (isDisabled) {
	        this._renderer.setElementProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype._registerOption = function (value) {
	        var /** @type {?} */ id = (this._idCounter++).toString();
	        this._optionMap.set(id, value);
	        return id;
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype._getOptionId = function (value) {
	        for (var _i = 0, _a = Array.from(this._optionMap.keys()); _i < _a.length; _i++) {
	            var id = _a[_i];
	            if (this._compareWith(/** @type {?} */ ((this._optionMap.get(id)))._value, value))
	                return id;
	        }
	        return null;
	    };
	    /**
	     * \@internal
	     * @param {?} valueString
	     * @return {?}
	     */
	    SelectMultipleControlValueAccessor.prototype._getOptionValue = function (valueString) {
	        var /** @type {?} */ id = _extractId$1(valueString);
	        return this._optionMap.has(id) ? ((this._optionMap.get(id)))._value : valueString;
	    };
	    return SelectMultipleControlValueAccessor;
	}());
	SelectMultipleControlValueAccessor.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
	                host: { '(change)': 'onChange($event.target)', '(blur)': 'onTouched()' },
	                providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	SelectMultipleControlValueAccessor.ctorParameters = function () { return [
	    { type: _angular_core.Renderer, },
	    { type: _angular_core.ElementRef, },
	]; };
	SelectMultipleControlValueAccessor.propDecorators = {
	    'compareWith': [{ type: _angular_core.Input },],
	};
	/**
	 * Marks `<option>` as dynamic, so Angular can be notified when options change.
	 *
	 * ### Example
	 *
	 * ```
	 * <select multiple name="city" ngModel>
	 *   <option *ngFor="let c of cities" [value]="c"></option>
	 * </select>
	 * ```
	 */
	var NgSelectMultipleOption = (function () {
	    /**
	     * @param {?} _element
	     * @param {?} _renderer
	     * @param {?} _select
	     */
	    function NgSelectMultipleOption(_element, _renderer, _select) {
	        this._element = _element;
	        this._renderer = _renderer;
	        this._select = _select;
	        if (this._select) {
	            this.id = this._select._registerOption(this);
	        }
	    }
	    Object.defineProperty(NgSelectMultipleOption.prototype, "ngValue", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            if (this._select == null)
	                return;
	            this._value = value;
	            this._setElementValue(_buildValueString$1(this.id, value));
	            this._select.writeValue(this._select.value);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgSelectMultipleOption.prototype, "value", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            if (this._select) {
	                this._value = value;
	                this._setElementValue(_buildValueString$1(this.id, value));
	                this._select.writeValue(this._select.value);
	            }
	            else {
	                this._setElementValue(value);
	            }
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    NgSelectMultipleOption.prototype._setElementValue = function (value) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'value', value);
	    };
	    /**
	     * \@internal
	     * @param {?} selected
	     * @return {?}
	     */
	    NgSelectMultipleOption.prototype._setSelected = function (selected) {
	        this._renderer.setElementProperty(this._element.nativeElement, 'selected', selected);
	    };
	    /**
	     * @return {?}
	     */
	    NgSelectMultipleOption.prototype.ngOnDestroy = function () {
	        if (this._select) {
	            this._select._optionMap.delete(this.id);
	            this._select.writeValue(this._select.value);
	        }
	    };
	    return NgSelectMultipleOption;
	}());
	NgSelectMultipleOption.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: 'option' },] },
	];
	/**
	 * @nocollapse
	 */
	NgSelectMultipleOption.ctorParameters = function () { return [
	    { type: _angular_core.ElementRef, },
	    { type: _angular_core.Renderer, },
	    { type: SelectMultipleControlValueAccessor, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	]; };
	NgSelectMultipleOption.propDecorators = {
	    'ngValue': [{ type: _angular_core.Input, args: ['ngValue',] },],
	    'value': [{ type: _angular_core.Input, args: ['value',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @param {?} name
	 * @param {?} parent
	 * @return {?}
	 */
	function controlPath(name, parent) {
	    return ((parent.path)).concat([name]);
	}
	/**
	 * @param {?} control
	 * @param {?} dir
	 * @return {?}
	 */
	function setUpControl(control, dir) {
	    if (!control)
	        _throwError(dir, 'Cannot find control with');
	    if (!dir.valueAccessor)
	        _throwError(dir, 'No value accessor for form control with');
	    control.validator = Validators.compose([/** @type {?} */ ((control.validator)), dir.validator]);
	    control.asyncValidator = Validators.composeAsync([/** @type {?} */ ((control.asyncValidator)), dir.asyncValidator]); /** @type {?} */
	    ((dir.valueAccessor)).writeValue(control.value); /** @type {?} */
	    ((
	    // view -> model
	    dir.valueAccessor)).registerOnChange(function (newValue) {
	        dir.viewToModelUpdate(newValue);
	        control.markAsDirty();
	        control.setValue(newValue, { emitModelToViewChange: false });
	    }); /** @type {?} */
	    ((
	    // touched
	    dir.valueAccessor)).registerOnTouched(function () { return control.markAsTouched(); });
	    control.registerOnChange(function (newValue, emitModelEvent) {
	        ((
	        // control -> view
	        dir.valueAccessor)).writeValue(newValue);
	        // control -> ngModel
	        if (emitModelEvent)
	            dir.viewToModelUpdate(newValue);
	    });
	    if (((dir.valueAccessor)).setDisabledState) {
	        control.registerOnDisabledChange(function (isDisabled) { /** @type {?} */ ((((dir.valueAccessor)).setDisabledState))(isDisabled); });
	    }
	    // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4
	    dir._rawValidators.forEach(function (validator) {
	        if (((validator)).registerOnValidatorChange)
	            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
	    });
	    dir._rawAsyncValidators.forEach(function (validator) {
	        if (((validator)).registerOnValidatorChange)
	            ((((validator)).registerOnValidatorChange))(function () { return control.updateValueAndValidity(); });
	    });
	}
	/**
	 * @param {?} control
	 * @param {?} dir
	 * @return {?}
	 */
	function cleanUpControl(control, dir) {
	    ((dir.valueAccessor)).registerOnChange(function () { return _noControlError(dir); }); /** @type {?} */
	    ((dir.valueAccessor)).registerOnTouched(function () { return _noControlError(dir); });
	    dir._rawValidators.forEach(function (validator) {
	        if (validator.registerOnValidatorChange) {
	            validator.registerOnValidatorChange(null);
	        }
	    });
	    dir._rawAsyncValidators.forEach(function (validator) {
	        if (validator.registerOnValidatorChange) {
	            validator.registerOnValidatorChange(null);
	        }
	    });
	    if (control)
	        control._clearChangeFns();
	}
	/**
	 * @param {?} control
	 * @param {?} dir
	 * @return {?}
	 */
	function setUpFormContainer(control, dir) {
	    if (control == null)
	        _throwError(dir, 'Cannot find control with');
	    control.validator = Validators.compose([control.validator, dir.validator]);
	    control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
	}
	/**
	 * @param {?} dir
	 * @return {?}
	 */
	function _noControlError(dir) {
	    return _throwError(dir, 'There is no FormControl instance attached to form control element with');
	}
	/**
	 * @param {?} dir
	 * @param {?} message
	 * @return {?}
	 */
	function _throwError(dir, message) {
	    var /** @type {?} */ messageEnd;
	    if (((dir.path)).length > 1) {
	        messageEnd = "path: '" + ((dir.path)).join(' -> ') + "'";
	    }
	    else if (((dir.path))[0]) {
	        messageEnd = "name: '" + dir.path + "'";
	    }
	    else {
	        messageEnd = 'unspecified name attribute';
	    }
	    throw new Error(message + " " + messageEnd);
	}
	/**
	 * @param {?} validators
	 * @return {?}
	 */
	function composeValidators(validators) {
	    return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
	}
	/**
	 * @param {?} validators
	 * @return {?}
	 */
	function composeAsyncValidators(validators) {
	    return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) :
	        null;
	}
	/**
	 * @param {?} changes
	 * @param {?} viewModel
	 * @return {?}
	 */
	function isPropertyUpdated(changes, viewModel) {
	    if (!changes.hasOwnProperty('model'))
	        return false;
	    var /** @type {?} */ change = changes['model'];
	    if (change.isFirstChange())
	        return true;
	    return !_angular_core.ɵlooseIdentical(viewModel, change.currentValue);
	}
	var BUILTIN_ACCESSORS = [
	    CheckboxControlValueAccessor,
	    RangeValueAccessor,
	    NumberValueAccessor,
	    SelectControlValueAccessor,
	    SelectMultipleControlValueAccessor,
	    RadioControlValueAccessor,
	];
	/**
	 * @param {?} valueAccessor
	 * @return {?}
	 */
	function isBuiltInAccessor(valueAccessor) {
	    return BUILTIN_ACCESSORS.some(function (a) { return valueAccessor.constructor === a; });
	}
	/**
	 * @param {?} dir
	 * @param {?} valueAccessors
	 * @return {?}
	 */
	function selectValueAccessor(dir, valueAccessors) {
	    if (!valueAccessors)
	        return null;
	    var /** @type {?} */ defaultAccessor = undefined;
	    var /** @type {?} */ builtinAccessor = undefined;
	    var /** @type {?} */ customAccessor = undefined;
	    valueAccessors.forEach(function (v) {
	        if (v.constructor === DefaultValueAccessor) {
	            defaultAccessor = v;
	        }
	        else if (isBuiltInAccessor(v)) {
	            if (builtinAccessor)
	                _throwError(dir, 'More than one built-in value accessor matches form control with');
	            builtinAccessor = v;
	        }
	        else {
	            if (customAccessor)
	                _throwError(dir, 'More than one custom value accessor matches form control with');
	            customAccessor = v;
	        }
	    });
	    if (customAccessor)
	        return customAccessor;
	    if (builtinAccessor)
	        return builtinAccessor;
	    if (defaultAccessor)
	        return defaultAccessor;
	    _throwError(dir, 'No valid value accessor for form control with');
	    return null;
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * This is a base class for code shared between {\@link NgModelGroup} and {\@link FormGroupName}.
	 *
	 * \@stable
	 */
	var AbstractFormGroupDirective = (function (_super) {
	    __extends(AbstractFormGroupDirective, _super);
	    function AbstractFormGroupDirective() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * @return {?}
	     */
	    AbstractFormGroupDirective.prototype.ngOnInit = function () {
	        this._checkParentType(); /** @type {?} */
	        ((this.formDirective)).addFormGroup(this);
	    };
	    /**
	     * @return {?}
	     */
	    AbstractFormGroupDirective.prototype.ngOnDestroy = function () {
	        if (this.formDirective) {
	            this.formDirective.removeFormGroup(this);
	        }
	    };
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "control", {
	        /**
	         * Get the {\@link FormGroup} backing this binding.
	         * @return {?}
	         */
	        get: function () { return ((this.formDirective)).getFormGroup(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "path", {
	        /**
	         * Get the path to this control group.
	         * @return {?}
	         */
	        get: function () { return controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "formDirective", {
	        /**
	         * Get the {\@link Form} to which this group belongs.
	         * @return {?}
	         */
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractFormGroupDirective.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractFormGroupDirective.prototype._checkParentType = function () { };
	    return AbstractFormGroupDirective;
	}(ControlContainer));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var AbstractControlStatus = (function () {
	    /**
	     * @param {?} cd
	     */
	    function AbstractControlStatus(cd) {
	        this._cd = cd;
	    }
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassUntouched", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.untouched : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassTouched", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.touched : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPristine", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.pristine : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassDirty", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.dirty : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassValid", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.valid : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassInvalid", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.invalid : false; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControlStatus.prototype, "ngClassPending", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._cd.control ? this._cd.control.pending : false; },
	        enumerable: true,
	        configurable: true
	    });
	    return AbstractControlStatus;
	}());
	var ngControlStatusHost = {
	    '[class.ng-untouched]': 'ngClassUntouched',
	    '[class.ng-touched]': 'ngClassTouched',
	    '[class.ng-pristine]': 'ngClassPristine',
	    '[class.ng-dirty]': 'ngClassDirty',
	    '[class.ng-valid]': 'ngClassValid',
	    '[class.ng-invalid]': 'ngClassInvalid',
	    '[class.ng-pending]': 'ngClassPending',
	};
	/**
	 * Directive automatically applied to Angular form controls that sets CSS classes
	 * based on control status (valid/invalid/dirty/etc).
	 *
	 * \@stable
	 */
	var NgControlStatus = (function (_super) {
	    __extends(NgControlStatus, _super);
	    /**
	     * @param {?} cd
	     */
	    function NgControlStatus(cd) {
	        return _super.call(this, cd) || this;
	    }
	    return NgControlStatus;
	}(AbstractControlStatus));
	NgControlStatus.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formControlName],[ngModel],[formControl]', host: ngControlStatusHost },] },
	];
	/**
	 * @nocollapse
	 */
	NgControlStatus.ctorParameters = function () { return [
	    { type: NgControl, decorators: [{ type: _angular_core.Self },] },
	]; };
	/**
	 * Directive automatically applied to Angular form groups that sets CSS classes
	 * based on control status (valid/invalid/dirty/etc).
	 *
	 * \@stable
	 */
	var NgControlStatusGroup = (function (_super) {
	    __extends(NgControlStatusGroup, _super);
	    /**
	     * @param {?} cd
	     */
	    function NgControlStatusGroup(cd) {
	        return _super.call(this, cd) || this;
	    }
	    return NgControlStatusGroup;
	}(AbstractControlStatus));
	NgControlStatusGroup.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
	                host: ngControlStatusHost
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgControlStatusGroup.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Self },] },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * Indicates that a FormControl is valid, i.e. that no errors exist in the input value.
	 */
	var VALID = 'VALID';
	/**
	 * Indicates that a FormControl is invalid, i.e. that an error exists in the input value.
	 */
	var INVALID = 'INVALID';
	/**
	 * Indicates that a FormControl is pending, i.e. that async validation is occurring and
	 * errors are not yet available for the input value.
	 */
	var PENDING = 'PENDING';
	/**
	 * Indicates that a FormControl is disabled, i.e. that the control is exempt from ancestor
	 * calculations of validity or value.
	 */
	var DISABLED = 'DISABLED';
	/**
	 * @param {?} control
	 * @param {?} path
	 * @param {?} delimiter
	 * @return {?}
	 */
	function _find(control, path, delimiter) {
	    if (path == null)
	        return null;
	    if (!(path instanceof Array)) {
	        path = ((path)).split(delimiter);
	    }
	    if (path instanceof Array && (path.length === 0))
	        return null;
	    return ((path)).reduce(function (v, name) {
	        if (v instanceof FormGroup) {
	            return v.controls[name] || null;
	        }
	        if (v instanceof FormArray) {
	            return v.at(/** @type {?} */ (name)) || null;
	        }
	        return null;
	    }, control);
	}
	/**
	 * @param {?=} validator
	 * @return {?}
	 */
	function coerceToValidator(validator) {
	    return Array.isArray(validator) ? composeValidators(validator) : validator || null;
	}
	/**
	 * @param {?=} asyncValidator
	 * @return {?}
	 */
	function coerceToAsyncValidator(asyncValidator) {
	    return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) :
	        asyncValidator || null;
	}
	/**
	 * \@whatItDoes This is the base class for {\@link FormControl}, {\@link FormGroup}, and
	 * {\@link FormArray}.
	 *
	 * It provides some of the shared behavior that all controls and groups of controls have, like
	 * running validators, calculating status, and resetting state. It also defines the properties
	 * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
	 * instantiated directly.
	 *
	 * \@stable
	 * @abstract
	 */
	var AbstractControl = (function () {
	    /**
	     * @param {?} validator
	     * @param {?} asyncValidator
	     */
	    function AbstractControl(validator, asyncValidator) {
	        this.validator = validator;
	        this.asyncValidator = asyncValidator;
	        /**
	         * \@internal
	         */
	        this._onCollectionChange = function () { };
	        this._pristine = true;
	        this._touched = false;
	        /**
	         * \@internal
	         */
	        this._onDisabledChange = [];
	    }
	    Object.defineProperty(AbstractControl.prototype, "value", {
	        /**
	         * The value of the control.
	         * @return {?}
	         */
	        get: function () { return this._value; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "parent", {
	        /**
	         * The parent control.
	         * @return {?}
	         */
	        get: function () { return this._parent; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "status", {
	        /**
	         * The validation status of the control. There are four possible
	         * validation statuses:
	         *
	         * * **VALID**:  control has passed all validation checks
	         * * **INVALID**: control has failed at least one validation check
	         * * **PENDING**: control is in the midst of conducting a validation check
	         * * **DISABLED**: control is exempt from validation checks
	         *
	         * These statuses are mutually exclusive, so a control cannot be
	         * both valid AND invalid or invalid AND disabled.
	         * @return {?}
	         */
	        get: function () { return this._status; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valid", {
	        /**
	         * A control is `valid` when its `status === VALID`.
	         *
	         * In order to have this status, the control must have passed all its
	         * validation checks.
	         * @return {?}
	         */
	        get: function () { return this._status === VALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "invalid", {
	        /**
	         * A control is `invalid` when its `status === INVALID`.
	         *
	         * In order to have this status, the control must have failed
	         * at least one of its validation checks.
	         * @return {?}
	         */
	        get: function () { return this._status === INVALID; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pending", {
	        /**
	         * A control is `pending` when its `status === PENDING`.
	         *
	         * In order to have this status, the control must be in the
	         * middle of conducting a validation check.
	         * @return {?}
	         */
	        get: function () { return this._status == PENDING; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "disabled", {
	        /**
	         * A control is `disabled` when its `status === DISABLED`.
	         *
	         * Disabled controls are exempt from validation checks and
	         * are not included in the aggregate value of their ancestor
	         * controls.
	         * @return {?}
	         */
	        get: function () { return this._status === DISABLED; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "enabled", {
	        /**
	         * A control is `enabled` as long as its `status !== DISABLED`.
	         *
	         * In other words, it has a status of `VALID`, `INVALID`, or
	         * `PENDING`.
	         * @return {?}
	         */
	        get: function () { return this._status !== DISABLED; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "errors", {
	        /**
	         * Returns any errors generated by failing validation. If there
	         * are no errors, it will return null.
	         * @return {?}
	         */
	        get: function () { return this._errors; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "pristine", {
	        /**
	         * A control is `pristine` if the user has not yet changed
	         * the value in the UI.
	         *
	         * Note that programmatic changes to a control's value will
	         * *not* mark it dirty.
	         * @return {?}
	         */
	        get: function () { return this._pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "dirty", {
	        /**
	         * A control is `dirty` if the user has changed the value
	         * in the UI.
	         *
	         * Note that programmatic changes to a control's value will
	         * *not* mark it dirty.
	         * @return {?}
	         */
	        get: function () { return !this.pristine; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "touched", {
	        /**
	         * A control is marked `touched` once the user has triggered
	         * a `blur` event on it.
	         * @return {?}
	         */
	        get: function () { return this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "untouched", {
	        /**
	         * A control is `untouched` if the user has not yet triggered
	         * a `blur` event on it.
	         * @return {?}
	         */
	        get: function () { return !this._touched; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "valueChanges", {
	        /**
	         * Emits an event every time the value of the control changes, in
	         * the UI or programmatically.
	         * @return {?}
	         */
	        get: function () { return this._valueChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(AbstractControl.prototype, "statusChanges", {
	        /**
	         * Emits an event every time the validation status of the control
	         * is re-calculated.
	         * @return {?}
	         */
	        get: function () { return this._statusChanges; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * Sets the synchronous validators that are active on this control.  Calling
	     * this will overwrite any existing sync validators.
	     * @param {?} newValidator
	     * @return {?}
	     */
	    AbstractControl.prototype.setValidators = function (newValidator) {
	        this.validator = coerceToValidator(newValidator);
	    };
	    /**
	     * Sets the async validators that are active on this control. Calling this
	     * will overwrite any existing async validators.
	     * @param {?} newValidator
	     * @return {?}
	     */
	    AbstractControl.prototype.setAsyncValidators = function (newValidator) {
	        this.asyncValidator = coerceToAsyncValidator(newValidator);
	    };
	    /**
	     * Empties out the sync validator list.
	     * @return {?}
	     */
	    AbstractControl.prototype.clearValidators = function () { this.validator = null; };
	    /**
	     * Empties out the async validator list.
	     * @return {?}
	     */
	    AbstractControl.prototype.clearAsyncValidators = function () { this.asyncValidator = null; };
	    /**
	     * Marks the control as `touched`.
	     *
	     * This will also mark all direct ancestors as `touched` to maintain
	     * the model.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = true;
	        if (this._parent && !onlySelf) {
	            this._parent.markAsTouched({ onlySelf: onlySelf });
	        }
	    };
	    /**
	     * Marks the control as `untouched`.
	     *
	     * If the control has any children, it will also mark all children as `untouched`
	     * to maintain the model, and re-calculate the `touched` status of all parent
	     * controls.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsUntouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = false;
	        this._forEachChild(function (control) { control.markAsUntouched({ onlySelf: true }); });
	        if (this._parent && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    /**
	     * Marks the control as `dirty`.
	     *
	     * This will also mark all direct ancestors as `dirty` to maintain
	     * the model.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsDirty = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = false;
	        if (this._parent && !onlySelf) {
	            this._parent.markAsDirty({ onlySelf: onlySelf });
	        }
	    };
	    /**
	     * Marks the control as `pristine`.
	     *
	     * If the control has any children, it will also mark all children as `pristine`
	     * to maintain the model, and re-calculate the `pristine` status of all parent
	     * controls.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsPristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = true;
	        this._forEachChild(function (control) { control.markAsPristine({ onlySelf: true }); });
	        if (this._parent && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    /**
	     * Marks the control as `pending`.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.markAsPending = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._status = PENDING;
	        if (this._parent && !onlySelf) {
	            this._parent.markAsPending({ onlySelf: onlySelf });
	        }
	    };
	    /**
	     * Disables the control. This means the control will be exempt from validation checks and
	     * excluded from the aggregate value of any parent. Its status is `DISABLED`.
	     *
	     * If the control has children, all children will be disabled to maintain the model.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.disable = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._status = DISABLED;
	        this._errors = null;
	        this._forEachChild(function (control) { control.disable({ onlySelf: true }); });
	        this._updateValue();
	        if (emitEvent !== false) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        this._updateAncestors(!!onlySelf);
	        this._onDisabledChange.forEach(function (changeFn) { return changeFn(true); });
	    };
	    /**
	     * Enables the control. This means the control will be included in validation checks and
	     * the aggregate value of its parent. Its status is re-calculated based on its value and
	     * its validators.
	     *
	     * If the control has children, all children will be enabled.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.enable = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._status = VALID;
	        this._forEachChild(function (control) { control.enable({ onlySelf: true }); });
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	        this._updateAncestors(!!onlySelf);
	        this._onDisabledChange.forEach(function (changeFn) { return changeFn(false); });
	    };
	    /**
	     * @param {?} onlySelf
	     * @return {?}
	     */
	    AbstractControl.prototype._updateAncestors = function (onlySelf) {
	        if (this._parent && !onlySelf) {
	            this._parent.updateValueAndValidity();
	            this._parent._updatePristine();
	            this._parent._updateTouched();
	        }
	    };
	    /**
	     * @param {?} parent
	     * @return {?}
	     */
	    AbstractControl.prototype.setParent = function (parent) { this._parent = parent; };
	    /**
	     * Sets the value of the control. Abstract method (implemented in sub-classes).
	     * @abstract
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    AbstractControl.prototype.setValue = function (value, options) { };
	    /**
	     * Patches the value of the control. Abstract method (implemented in sub-classes).
	     * @abstract
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    AbstractControl.prototype.patchValue = function (value, options) { };
	    /**
	     * Resets the control. Abstract method (implemented in sub-classes).
	     * @abstract
	     * @param {?=} value
	     * @param {?=} options
	     * @return {?}
	     */
	    AbstractControl.prototype.reset = function (value, options) { };
	    /**
	     * Re-calculates the value and validation status of the control.
	     *
	     * By default, it will also update the value and validity of its ancestors.
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype.updateValueAndValidity = function (_a) {
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._setInitialStatus();
	        this._updateValue();
	        if (this.enabled) {
	            this._cancelExistingSubscription();
	            this._errors = this._runValidator();
	            this._status = this._calculateStatus();
	            if (this._status === VALID || this._status === PENDING) {
	                this._runAsyncValidator(emitEvent);
	            }
	        }
	        if (emitEvent !== false) {
	            this._valueChanges.emit(this._value);
	            this._statusChanges.emit(this._status);
	        }
	        if (this._parent && !onlySelf) {
	            this._parent.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        }
	    };
	    /**
	     * \@internal
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype._updateTreeValidity = function (_a) {
	        var emitEvent = (_a === void 0 ? { emitEvent: true } : _a).emitEvent;
	        this._forEachChild(function (ctrl) { return ctrl._updateTreeValidity({ emitEvent: emitEvent }); });
	        this.updateValueAndValidity({ onlySelf: true, emitEvent: emitEvent });
	    };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._setInitialStatus = function () { this._status = this._allControlsDisabled() ? DISABLED : VALID; };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._runValidator = function () {
	        return this.validator ? this.validator(this) : null;
	    };
	    /**
	     * @param {?=} emitEvent
	     * @return {?}
	     */
	    AbstractControl.prototype._runAsyncValidator = function (emitEvent) {
	        var _this = this;
	        if (this.asyncValidator) {
	            this._status = PENDING;
	            var /** @type {?} */ obs = toObservable(this.asyncValidator(this));
	            this._asyncValidationSubscription =
	                obs.subscribe(function (errors) { return _this.setErrors(errors, { emitEvent: emitEvent }); });
	        }
	    };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._cancelExistingSubscription = function () {
	        if (this._asyncValidationSubscription) {
	            this._asyncValidationSubscription.unsubscribe();
	        }
	    };
	    /**
	     * Sets errors on a form control.
	     *
	     * This is used when validations are run manually by the user, rather than automatically.
	     *
	     * Calling `setErrors` will also update the validity of the parent control.
	     *
	     * ### Example
	     *
	     * ```
	     * const login = new FormControl("someLogin");
	     * login.setErrors({
	     *   "notUnique": true
	     * });
	     *
	     * expect(login.valid).toEqual(false);
	     * expect(login.errors).toEqual({"notUnique": true});
	     *
	     * login.setValue("someOtherLogin");
	     *
	     * expect(login.valid).toEqual(true);
	     * ```
	     * @param {?} errors
	     * @param {?=} __1
	     * @return {?}
	     */
	    AbstractControl.prototype.setErrors = function (errors, _a) {
	        var emitEvent = (_a === void 0 ? {} : _a).emitEvent;
	        this._errors = errors;
	        this._updateControlsErrors(emitEvent !== false);
	    };
	    /**
	     * Retrieves a child control given the control's name or path.
	     *
	     * Paths can be passed in as an array or a string delimited by a dot.
	     *
	     * To get a control nested within a `person` sub-group:
	     *
	     * * `this.form.get('person.name');`
	     *
	     * -OR-
	     *
	     * * `this.form.get(['person', 'name']);`
	     * @param {?} path
	     * @return {?}
	     */
	    AbstractControl.prototype.get = function (path) { return _find(this, path, '.'); };
	    /**
	     * Returns true if the control with the given path has the error specified. Otherwise
	     * returns null or undefined.
	     *
	     * If no path is given, it checks for the error on the present control.
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControl.prototype.getError = function (errorCode, path) {
	        var /** @type {?} */ control = path ? this.get(path) : this;
	        return control && control._errors ? control._errors[errorCode] : null;
	    };
	    /**
	     * Returns true if the control with the given path has the error specified. Otherwise
	     * returns false.
	     *
	     * If no path is given, it checks for the error on the present control.
	     * @param {?} errorCode
	     * @param {?=} path
	     * @return {?}
	     */
	    AbstractControl.prototype.hasError = function (errorCode, path) { return !!this.getError(errorCode, path); };
	    Object.defineProperty(AbstractControl.prototype, "root", {
	        /**
	         * Retrieves the top-level ancestor of this control.
	         * @return {?}
	         */
	        get: function () {
	            var /** @type {?} */ x = this;
	            while (x._parent) {
	                x = x._parent;
	            }
	            return x;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * \@internal
	     * @param {?} emitEvent
	     * @return {?}
	     */
	    AbstractControl.prototype._updateControlsErrors = function (emitEvent) {
	        this._status = this._calculateStatus();
	        if (emitEvent) {
	            this._statusChanges.emit(this._status);
	        }
	        if (this._parent) {
	            this._parent._updateControlsErrors(emitEvent);
	        }
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractControl.prototype._initObservables = function () {
	        this._valueChanges = new _angular_core.EventEmitter();
	        this._statusChanges = new _angular_core.EventEmitter();
	    };
	    /**
	     * @return {?}
	     */
	    AbstractControl.prototype._calculateStatus = function () {
	        if (this._allControlsDisabled())
	            return DISABLED;
	        if (this._errors)
	            return INVALID;
	        if (this._anyControlsHaveStatus(PENDING))
	            return PENDING;
	        if (this._anyControlsHaveStatus(INVALID))
	            return INVALID;
	        return VALID;
	    };
	    /**
	     * \@internal
	     * @abstract
	     * @return {?}
	     */
	    AbstractControl.prototype._updateValue = function () { };
	    /**
	     * \@internal
	     * @abstract
	     * @param {?} cb
	     * @return {?}
	     */
	    AbstractControl.prototype._forEachChild = function (cb) { };
	    /**
	     * \@internal
	     * @abstract
	     * @param {?} condition
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControls = function (condition) { };
	    /**
	     * \@internal
	     * @abstract
	     * @return {?}
	     */
	    AbstractControl.prototype._allControlsDisabled = function () { };
	    /**
	     * \@internal
	     * @param {?} status
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControlsHaveStatus = function (status) {
	        return this._anyControls(function (control) { return control.status === status; });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControlsDirty = function () {
	        return this._anyControls(function (control) { return control.dirty; });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    AbstractControl.prototype._anyControlsTouched = function () {
	        return this._anyControls(function (control) { return control.touched; });
	    };
	    /**
	     * \@internal
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype._updatePristine = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._pristine = !this._anyControlsDirty();
	        if (this._parent && !onlySelf) {
	            this._parent._updatePristine({ onlySelf: onlySelf });
	        }
	    };
	    /**
	     * \@internal
	     * @param {?=} __0
	     * @return {?}
	     */
	    AbstractControl.prototype._updateTouched = function (_a) {
	        var onlySelf = (_a === void 0 ? {} : _a).onlySelf;
	        this._touched = this._anyControlsTouched();
	        if (this._parent && !onlySelf) {
	            this._parent._updateTouched({ onlySelf: onlySelf });
	        }
	    };
	    /**
	     * \@internal
	     * @param {?} formState
	     * @return {?}
	     */
	    AbstractControl.prototype._isBoxedValue = function (formState) {
	        return typeof formState === 'object' && formState !== null &&
	            Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
	    };
	    /**
	     * \@internal
	     * @param {?} fn
	     * @return {?}
	     */
	    AbstractControl.prototype._registerOnCollectionChange = function (fn) { this._onCollectionChange = fn; };
	    return AbstractControl;
	}());
	/**
	 * \@whatItDoes Tracks the value and validation status of an individual form control.
	 *
	 * It is one of the three fundamental building blocks of Angular forms, along with
	 * {\@link FormGroup} and {\@link FormArray}.
	 *
	 * \@howToUse
	 *
	 * When instantiating a {\@link FormControl}, you can pass in an initial value as the
	 * first argument. Example:
	 *
	 * ```ts
	 * const ctrl = new FormControl('some value');
	 * console.log(ctrl.value);     // 'some value'
	 * ```
	 *
	 * You can also initialize the control with a form state object on instantiation,
	 * which includes both the value and whether or not the control is disabled.
	 * You can't use the value key without the disabled key; both are required
	 * to use this way of initialization.
	 *
	 * ```ts
	 * const ctrl = new FormControl({value: 'n/a', disabled: true});
	 * console.log(ctrl.value);     // 'n/a'
	 * console.log(ctrl.status);   // 'DISABLED'
	 * ```
	 *
	 * To include a sync validator (or an array of sync validators) with the control,
	 * pass it in as the second argument. Async validators are also supported, but
	 * have to be passed in separately as the third arg.
	 *
	 * ```ts
	 * const ctrl = new FormControl('', Validators.required);
	 * console.log(ctrl.value);     // ''
	 * console.log(ctrl.status);   // 'INVALID'
	 * ```
	 *
	 * See its superclass, {\@link AbstractControl}, for more properties and methods.
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var FormControl = (function (_super) {
	    __extends(FormControl, _super);
	    /**
	     * @param {?=} formState
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     */
	    function FormControl(formState, validator, asyncValidator) {
	        if (formState === void 0) { formState = null; }
	        var _this = _super.call(this, coerceToValidator(validator), coerceToAsyncValidator(asyncValidator)) || this;
	        /**
	         * \@internal
	         */
	        _this._onChange = [];
	        _this._applyFormState(formState);
	        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        _this._initObservables();
	        return _this;
	    }
	    /**
	     * Set the value of the form control to `value`.
	     *
	     * If `onlySelf` is `true`, this change will only affect the validation of this `FormControl`
	     * and not its parent component. This defaults to false.
	     *
	     * If `emitEvent` is `true`, this
	     * change will cause a `valueChanges` event on the `FormControl` to be emitted. This defaults
	     * to true (as it falls through to `updateValueAndValidity`).
	     *
	     * If `emitModelToViewChange` is `true`, the view will be notified about the new value
	     * via an `onChange` event. This is the default behavior if `emitModelToViewChange` is not
	     * specified.
	     *
	     * If `emitViewToModelChange` is `true`, an ngModelChange event will be fired to update the
	     * model.  This is the default behavior if `emitViewToModelChange` is not specified.
	     * @param {?} value
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormControl.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent, emitModelToViewChange = _b.emitModelToViewChange, emitViewToModelChange = _b.emitViewToModelChange;
	        this._value = value;
	        if (this._onChange.length && emitModelToViewChange !== false) {
	            this._onChange.forEach(function (changeFn) { return changeFn(_this._value, emitViewToModelChange !== false); });
	        }
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * Patches the value of a control.
	     *
	     * This function is functionally the same as {\@link FormControl.setValue} at this level.
	     * It exists for symmetry with {\@link FormGroup.patchValue} on `FormGroups` and `FormArrays`,
	     * where it does behave differently.
	     * @param {?} value
	     * @param {?=} options
	     * @return {?}
	     */
	    FormControl.prototype.patchValue = function (value, options) {
	        if (options === void 0) { options = {}; }
	        this.setValue(value, options);
	    };
	    /**
	     * Resets the form control. This means by default:
	     *
	     * * it is marked as `pristine`
	     * * it is marked as `untouched`
	     * * value is set to null
	     *
	     * You can also reset to a specific form state by passing through a standalone
	     * value or a form state object that contains both a value and a disabled state
	     * (these are the only two properties that cannot be calculated).
	     *
	     * Ex:
	     *
	     * ```ts
	     * this.control.reset('Nancy');
	     *
	     * console.log(this.control.value);  // 'Nancy'
	     * ```
	     *
	     * OR
	     *
	     * ```
	     * this.control.reset({value: 'Nancy', disabled: true});
	     *
	     * console.log(this.control.value);  // 'Nancy'
	     * console.log(this.control.status);  // 'DISABLED'
	     * ```
	     * @param {?=} formState
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormControl.prototype.reset = function (formState, _a) {
	        if (formState === void 0) { formState = null; }
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._applyFormState(formState);
	        this.markAsPristine({ onlySelf: onlySelf });
	        this.markAsUntouched({ onlySelf: onlySelf });
	        this.setValue(this._value, { onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormControl.prototype._updateValue = function () { };
	    /**
	     * \@internal
	     * @param {?} condition
	     * @return {?}
	     */
	    FormControl.prototype._anyControls = function (condition) { return false; };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormControl.prototype._allControlsDisabled = function () { return this.disabled; };
	    /**
	     * Register a listener for change events.
	     * @param {?} fn
	     * @return {?}
	     */
	    FormControl.prototype.registerOnChange = function (fn) { this._onChange.push(fn); };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormControl.prototype._clearChangeFns = function () {
	        this._onChange = [];
	        this._onDisabledChange = [];
	        this._onCollectionChange = function () { };
	    };
	    /**
	     * Register a listener for disabled events.
	     * @param {?} fn
	     * @return {?}
	     */
	    FormControl.prototype.registerOnDisabledChange = function (fn) {
	        this._onDisabledChange.push(fn);
	    };
	    /**
	     * \@internal
	     * @param {?} cb
	     * @return {?}
	     */
	    FormControl.prototype._forEachChild = function (cb) { };
	    /**
	     * @param {?} formState
	     * @return {?}
	     */
	    FormControl.prototype._applyFormState = function (formState) {
	        if (this._isBoxedValue(formState)) {
	            this._value = formState.value;
	            formState.disabled ? this.disable({ onlySelf: true, emitEvent: false }) :
	                this.enable({ onlySelf: true, emitEvent: false });
	        }
	        else {
	            this._value = formState;
	        }
	    };
	    return FormControl;
	}(AbstractControl));
	/**
	 * \@whatItDoes Tracks the value and validity state of a group of {\@link FormControl}
	 * instances.
	 *
	 * A `FormGroup` aggregates the values of each child {\@link FormControl} into one object,
	 * with each control name as the key.  It calculates its status by reducing the statuses
	 * of its children. For example, if one of the controls in a group is invalid, the entire
	 * group becomes invalid.
	 *
	 * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {\@link FormControl} and {\@link FormArray}.
	 *
	 * \@howToUse
	 *
	 * When instantiating a {\@link FormGroup}, pass in a collection of child controls as the first
	 * argument. The key for each child will be the name under which it is registered.
	 *
	 * ### Example
	 *
	 * ```
	 * const form = new FormGroup({
	 *   first: new FormControl('Nancy', Validators.minLength(2)),
	 *   last: new FormControl('Drew'),
	 * });
	 *
	 * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
	 * console.log(form.status);  // 'VALID'
	 * ```
	 *
	 * You can also include group-level validators as the second arg, or group-level async
	 * validators as the third arg. These come in handy when you want to perform validation
	 * that considers the value of more than one child control.
	 *
	 * ### Example
	 *
	 * ```
	 * const form = new FormGroup({
	 *   password: new FormControl('', Validators.minLength(2)),
	 *   passwordConfirm: new FormControl('', Validators.minLength(2)),
	 * }, passwordMatchValidator);
	 *
	 *
	 * function passwordMatchValidator(g: FormGroup) {
	 *    return g.get('password').value === g.get('passwordConfirm').value
	 *       ? null : {'mismatch': true};
	 * }
	 * ```
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var FormGroup = (function (_super) {
	    __extends(FormGroup, _super);
	    /**
	     * @param {?} controls
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     */
	    function FormGroup(controls, validator, asyncValidator) {
	        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
	        _this.controls = controls;
	        _this._initObservables();
	        _this._setUpControls();
	        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        return _this;
	    }
	    /**
	     * Registers a control with the group's list of controls.
	     *
	     * This method does not update value or validity of the control, so for
	     * most cases you'll want to use {\@link FormGroup.addControl} instead.
	     * @param {?} name
	     * @param {?} control
	     * @return {?}
	     */
	    FormGroup.prototype.registerControl = function (name, control) {
	        if (this.controls[name])
	            return this.controls[name];
	        this.controls[name] = control;
	        control.setParent(this);
	        control._registerOnCollectionChange(this._onCollectionChange);
	        return control;
	    };
	    /**
	     * Add a control to this group.
	     * @param {?} name
	     * @param {?} control
	     * @return {?}
	     */
	    FormGroup.prototype.addControl = function (name, control) {
	        this.registerControl(name, control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Remove a control from this group.
	     * @param {?} name
	     * @return {?}
	     */
	    FormGroup.prototype.removeControl = function (name) {
	        if (this.controls[name])
	            this.controls[name]._registerOnCollectionChange(function () { });
	        delete (this.controls[name]);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Replace an existing control.
	     * @param {?} name
	     * @param {?} control
	     * @return {?}
	     */
	    FormGroup.prototype.setControl = function (name, control) {
	        if (this.controls[name])
	            this.controls[name]._registerOnCollectionChange(function () { });
	        delete (this.controls[name]);
	        if (control)
	            this.registerControl(name, control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Check whether there is an enabled control with the given name in the group.
	     *
	     * It will return false for disabled controls. If you'd like to check for
	     * existence in the group only, use {\@link AbstractControl.get} instead.
	     * @param {?} controlName
	     * @return {?}
	     */
	    FormGroup.prototype.contains = function (controlName) {
	        return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
	    };
	    /**
	     *  Sets the value of the {\@link FormGroup}. It accepts an object that matches
	     *  the structure of the group, with control names as keys.
	     *
	     * This method performs strict checks, so it will throw an error if you try
	     * to set the value of a control that doesn't exist or if you exclude the
	     * value of a control.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const form = new FormGroup({
	     *     first: new FormControl(),
	     *     last: new FormControl()
	     *  });
	     *  console.log(form.value);   // {first: null, last: null}
	     *
	     *  form.setValue({first: 'Nancy', last: 'Drew'});
	     *  console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
	     *
	     *  ```
	     * @param {?} value
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormGroup.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._checkAllValuesPresent(value);
	        Object.keys(value).forEach(function (name) {
	            _this._throwIfControlMissing(name);
	            _this.controls[name].setValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     *  Patches the value of the {\@link FormGroup}. It accepts an object with control
	     *  names as keys, and will do its best to match the values to the correct controls
	     *  in the group.
	     *
	     *  It accepts both super-sets and sub-sets of the group without throwing an error.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const form = new FormGroup({
	     *     first: new FormControl(),
	     *     last: new FormControl()
	     *  });
	     *  console.log(form.value);   // {first: null, last: null}
	     *
	     *  form.patchValue({first: 'Nancy'});
	     *  console.log(form.value);   // {first: 'Nancy', last: null}
	     *
	     *  ```
	     * @param {?} value
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormGroup.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        Object.keys(value).forEach(function (name) {
	            if (_this.controls[name]) {
	                _this.controls[name].patchValue(value[name], { onlySelf: true, emitEvent: emitEvent });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * Resets the {\@link FormGroup}. This means by default:
	     *
	     * * The group and all descendants are marked `pristine`
	     * * The group and all descendants are marked `untouched`
	     * * The value of all descendants will be null or null maps
	     *
	     * You can also reset to a specific form state by passing in a map of states
	     * that matches the structure of your form, with control names as keys. The state
	     * can be a standalone value or a form state object with both a value and a disabled
	     * status.
	     *
	     * ### Example
	     *
	     * ```ts
	     * this.form.reset({first: 'name', last: 'last name'});
	     *
	     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	     * ```
	     *
	     * - OR -
	     *
	     * ```
	     * this.form.reset({
	     *   first: {value: 'name', disabled: true},
	     *   last: 'last'
	     * });
	     *
	     * console.log(this.form.value);  // {first: 'name', last: 'last name'}
	     * console.log(this.form.get('first').status);  // 'DISABLED'
	     * ```
	     * @param {?=} value
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormGroup.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = {}; }
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._forEachChild(function (control, name) {
	            control.reset(value[name], { onlySelf: true, emitEvent: emitEvent });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /**
	     * The aggregate value of the {\@link FormGroup}, including any disabled controls.
	     *
	     * If you'd like to include all values regardless of disabled status, use this method.
	     * Otherwise, the `value` property is the best way to get the value of the group.
	     * @return {?}
	     */
	    FormGroup.prototype.getRawValue = function () {
	        return this._reduceChildren({}, function (acc, control, name) {
	            acc[name] = control instanceof FormControl ? control.value : ((control)).getRawValue();
	            return acc;
	        });
	    };
	    /**
	     * \@internal
	     * @param {?} name
	     * @return {?}
	     */
	    FormGroup.prototype._throwIfControlMissing = function (name) {
	        if (!Object.keys(this.controls).length) {
	            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.controls[name]) {
	            throw new Error("Cannot find form control with name: " + name + ".");
	        }
	    };
	    /**
	     * \@internal
	     * @param {?} cb
	     * @return {?}
	     */
	    FormGroup.prototype._forEachChild = function (cb) {
	        var _this = this;
	        Object.keys(this.controls).forEach(function (k) { return cb(_this.controls[k], k); });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._setUpControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) {
	            control.setParent(_this);
	            control._registerOnCollectionChange(_this._onCollectionChange);
	        });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._updateValue = function () { this._value = this._reduceValue(); };
	    /**
	     * \@internal
	     * @param {?} condition
	     * @return {?}
	     */
	    FormGroup.prototype._anyControls = function (condition) {
	        var _this = this;
	        var /** @type {?} */ res = false;
	        this._forEachChild(function (control, name) {
	            res = res || (_this.contains(name) && condition(control));
	        });
	        return res;
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._reduceValue = function () {
	        var _this = this;
	        return this._reduceChildren({}, function (acc, control, name) {
	            if (control.enabled || _this.disabled) {
	                acc[name] = control.value;
	            }
	            return acc;
	        });
	    };
	    /**
	     * \@internal
	     * @param {?} initValue
	     * @param {?} fn
	     * @return {?}
	     */
	    FormGroup.prototype._reduceChildren = function (initValue, fn) {
	        var /** @type {?} */ res = initValue;
	        this._forEachChild(function (control, name) { res = fn(res, control, name); });
	        return res;
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroup.prototype._allControlsDisabled = function () {
	        for (var _i = 0, _a = Object.keys(this.controls); _i < _a.length; _i++) {
	            var controlName = _a[_i];
	            if (this.controls[controlName].enabled) {
	                return false;
	            }
	        }
	        return Object.keys(this.controls).length > 0 || this.disabled;
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    FormGroup.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, name) {
	            if (value[name] === undefined) {
	                throw new Error("Must supply a value for form control with name: '" + name + "'.");
	            }
	        });
	    };
	    return FormGroup;
	}(AbstractControl));
	/**
	 * \@whatItDoes Tracks the value and validity state of an array of {\@link FormControl},
	 * {\@link FormGroup} or {\@link FormArray} instances.
	 *
	 * A `FormArray` aggregates the values of each child {\@link FormControl} into an array.
	 * It calculates its status by reducing the statuses of its children. For example, if one of
	 * the controls in a `FormArray` is invalid, the entire array becomes invalid.
	 *
	 * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
	 * along with {\@link FormControl} and {\@link FormGroup}.
	 *
	 * \@howToUse
	 *
	 * When instantiating a {\@link FormArray}, pass in an array of child controls as the first
	 * argument.
	 *
	 * ### Example
	 *
	 * ```
	 * const arr = new FormArray([
	 *   new FormControl('Nancy', Validators.minLength(2)),
	 *   new FormControl('Drew'),
	 * ]);
	 *
	 * console.log(arr.value);   // ['Nancy', 'Drew']
	 * console.log(arr.status);  // 'VALID'
	 * ```
	 *
	 * You can also include array-level validators as the second arg, or array-level async
	 * validators as the third arg. These come in handy when you want to perform validation
	 * that considers the value of more than one child control.
	 *
	 * ### Adding or removing controls
	 *
	 * To change the controls in the array, use the `push`, `insert`, or `removeAt` methods
	 * in `FormArray` itself. These methods ensure the controls are properly tracked in the
	 * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
	 * the `FormArray` directly, as that will result in strange and unexpected behavior such
	 * as broken change detection.
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * \@stable
	 */
	var FormArray = (function (_super) {
	    __extends(FormArray, _super);
	    /**
	     * @param {?} controls
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     */
	    function FormArray(controls, validator, asyncValidator) {
	        var _this = _super.call(this, validator || null, asyncValidator || null) || this;
	        _this.controls = controls;
	        _this._initObservables();
	        _this._setUpControls();
	        _this.updateValueAndValidity({ onlySelf: true, emitEvent: false });
	        return _this;
	    }
	    /**
	     * Get the {\@link AbstractControl} at the given `index` in the array.
	     * @param {?} index
	     * @return {?}
	     */
	    FormArray.prototype.at = function (index) { return this.controls[index]; };
	    /**
	     * Insert a new {\@link AbstractControl} at the end of the array.
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype.push = function (control) {
	        this.controls.push(control);
	        this._registerControl(control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Insert a new {\@link AbstractControl} at the given `index` in the array.
	     * @param {?} index
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype.insert = function (index, control) {
	        this.controls.splice(index, 0, control);
	        this._registerControl(control);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Remove the control at the given `index` in the array.
	     * @param {?} index
	     * @return {?}
	     */
	    FormArray.prototype.removeAt = function (index) {
	        if (this.controls[index])
	            this.controls[index]._registerOnCollectionChange(function () { });
	        this.controls.splice(index, 1);
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    /**
	     * Replace an existing control.
	     * @param {?} index
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype.setControl = function (index, control) {
	        if (this.controls[index])
	            this.controls[index]._registerOnCollectionChange(function () { });
	        this.controls.splice(index, 1);
	        if (control) {
	            this.controls.splice(index, 0, control);
	            this._registerControl(control);
	        }
	        this.updateValueAndValidity();
	        this._onCollectionChange();
	    };
	    Object.defineProperty(FormArray.prototype, "length", {
	        /**
	         * Length of the control array.
	         * @return {?}
	         */
	        get: function () { return this.controls.length; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     *  Sets the value of the {\@link FormArray}. It accepts an array that matches
	     *  the structure of the control.
	     *
	     * This method performs strict checks, so it will throw an error if you try
	     * to set the value of a control that doesn't exist or if you exclude the
	     * value of a control.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const arr = new FormArray([
	     *     new FormControl(),
	     *     new FormControl()
	     *  ]);
	     *  console.log(arr.value);   // [null, null]
	     *
	     *  arr.setValue(['Nancy', 'Drew']);
	     *  console.log(arr.value);   // ['Nancy', 'Drew']
	     *  ```
	     * @param {?} value
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormArray.prototype.setValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._checkAllValuesPresent(value);
	        value.forEach(function (newValue, index) {
	            _this._throwIfControlMissing(index);
	            _this.at(index).setValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     *  Patches the value of the {\@link FormArray}. It accepts an array that matches the
	     *  structure of the control, and will do its best to match the values to the correct
	     *  controls in the group.
	     *
	     *  It accepts both super-sets and sub-sets of the array without throwing an error.
	     *
	     *  ### Example
	     *
	     *  ```
	     *  const arr = new FormArray([
	     *     new FormControl(),
	     *     new FormControl()
	     *  ]);
	     *  console.log(arr.value);   // [null, null]
	     *
	     *  arr.patchValue(['Nancy']);
	     *  console.log(arr.value);   // ['Nancy', null]
	     *  ```
	     * @param {?} value
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormArray.prototype.patchValue = function (value, _a) {
	        var _this = this;
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        value.forEach(function (newValue, index) {
	            if (_this.at(index)) {
	                _this.at(index).patchValue(newValue, { onlySelf: true, emitEvent: emitEvent });
	            }
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	    };
	    /**
	     * Resets the {\@link FormArray}. This means by default:
	     *
	     * * The array and all descendants are marked `pristine`
	     * * The array and all descendants are marked `untouched`
	     * * The value of all descendants will be null or null maps
	     *
	     * You can also reset to a specific form state by passing in an array of states
	     * that matches the structure of the control. The state can be a standalone value
	     * or a form state object with both a value and a disabled status.
	     *
	     * ### Example
	     *
	     * ```ts
	     * this.arr.reset(['name', 'last name']);
	     *
	     * console.log(this.arr.value);  // ['name', 'last name']
	     * ```
	     *
	     * - OR -
	     *
	     * ```
	     * this.arr.reset([
	     *   {value: 'name', disabled: true},
	     *   'last'
	     * ]);
	     *
	     * console.log(this.arr.value);  // ['name', 'last name']
	     * console.log(this.arr.get(0).status);  // 'DISABLED'
	     * ```
	     * @param {?=} value
	     * @param {?=} __1
	     * @return {?}
	     */
	    FormArray.prototype.reset = function (value, _a) {
	        if (value === void 0) { value = []; }
	        var _b = _a === void 0 ? {} : _a, onlySelf = _b.onlySelf, emitEvent = _b.emitEvent;
	        this._forEachChild(function (control, index) {
	            control.reset(value[index], { onlySelf: true, emitEvent: emitEvent });
	        });
	        this.updateValueAndValidity({ onlySelf: onlySelf, emitEvent: emitEvent });
	        this._updatePristine({ onlySelf: onlySelf });
	        this._updateTouched({ onlySelf: onlySelf });
	    };
	    /**
	     * The aggregate value of the array, including any disabled controls.
	     *
	     * If you'd like to include all values regardless of disabled status, use this method.
	     * Otherwise, the `value` property is the best way to get the value of the array.
	     * @return {?}
	     */
	    FormArray.prototype.getRawValue = function () {
	        return this.controls.map(function (control) {
	            return control instanceof FormControl ? control.value : ((control)).getRawValue();
	        });
	    };
	    /**
	     * \@internal
	     * @param {?} index
	     * @return {?}
	     */
	    FormArray.prototype._throwIfControlMissing = function (index) {
	        if (!this.controls.length) {
	            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
	        }
	        if (!this.at(index)) {
	            throw new Error("Cannot find form control at index " + index);
	        }
	    };
	    /**
	     * \@internal
	     * @param {?} cb
	     * @return {?}
	     */
	    FormArray.prototype._forEachChild = function (cb) {
	        this.controls.forEach(function (control, index) { cb(control, index); });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormArray.prototype._updateValue = function () {
	        var _this = this;
	        this._value = this.controls.filter(function (control) { return control.enabled || _this.disabled; })
	            .map(function (control) { return control.value; });
	    };
	    /**
	     * \@internal
	     * @param {?} condition
	     * @return {?}
	     */
	    FormArray.prototype._anyControls = function (condition) {
	        return this.controls.some(function (control) { return control.enabled && condition(control); });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormArray.prototype._setUpControls = function () {
	        var _this = this;
	        this._forEachChild(function (control) { return _this._registerControl(control); });
	    };
	    /**
	     * \@internal
	     * @param {?} value
	     * @return {?}
	     */
	    FormArray.prototype._checkAllValuesPresent = function (value) {
	        this._forEachChild(function (control, i) {
	            if (value[i] === undefined) {
	                throw new Error("Must supply a value for form control at index: " + i + ".");
	            }
	        });
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormArray.prototype._allControlsDisabled = function () {
	        for (var _i = 0, _a = this.controls; _i < _a.length; _i++) {
	            var control = _a[_i];
	            if (control.enabled)
	                return false;
	        }
	        return this.controls.length > 0 || this.disabled;
	    };
	    /**
	     * @param {?} control
	     * @return {?}
	     */
	    FormArray.prototype._registerControl = function (control) {
	        control.setParent(this);
	        control._registerOnCollectionChange(this._onCollectionChange);
	    };
	    return FormArray;
	}(AbstractControl));
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formDirectiveProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return NgForm; })
	};
	var resolvedPromise = Promise.resolve(null);
	/**
	 * \@whatItDoes Creates a top-level {\@link FormGroup} instance and binds it to a form
	 * to track aggregate form value and validation status.
	 *
	 * \@howToUse
	 *
	 * As soon as you import the `FormsModule`, this directive becomes active by default on
	 * all `<form>` tags.  You don't need to add a special selector.
	 *
	 * You can export the directive into a local template variable using `ngForm` as the key
	 * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
	 * {\@link FormGroup} instance are duplicated on the directive itself, so a reference to it
	 * will give you access to the aggregate value and validity status of the form, as well as
	 * user interaction properties like `dirty` and `touched`.
	 *
	 * To register child controls with the form, you'll want to use {\@link NgModel} with a
	 * `name` attribute.  You can also use {\@link NgModelGroup} if you'd like to create
	 * sub-groups within the form.
	 *
	 * You can listen to the directive's `ngSubmit` event to be notified when the user has
	 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	 * submission event.
	 *
	 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `FormsModule`
	 *
	 *  \@stable
	 */
	var NgForm = (function (_super) {
	    __extends(NgForm, _super);
	    /**
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function NgForm(validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._submitted = false;
	        _this.ngSubmit = new _angular_core.EventEmitter();
	        _this.form =
	            new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
	        return _this;
	    }
	    Object.defineProperty(NgForm.prototype, "submitted", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgForm.prototype, "controls", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form.controls; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.addControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            dir._control = (container.registerControl(dir.name, dir.control));
	            setUpControl(dir.control, dir);
	            dir.control.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.removeControl = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            if (container) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.addFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            var /** @type {?} */ group = new FormGroup({});
	            setUpFormContainer(group, dir);
	            container.registerControl(dir.name, group);
	            group.updateValueAndValidity({ emitEvent: false });
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.removeFormGroup = function (dir) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ container = _this._findContainer(dir.path);
	            if (container) {
	                container.removeControl(dir.name);
	            }
	        });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    NgForm.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @param {?} value
	     * @return {?}
	     */
	    NgForm.prototype.updateModel = function (dir, value) {
	        var _this = this;
	        resolvedPromise.then(function () {
	            var /** @type {?} */ ctrl = (_this.form.get(/** @type {?} */ ((dir.path))));
	            ctrl.setValue(value);
	        });
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    NgForm.prototype.setValue = function (value) { this.control.setValue(value); };
	    /**
	     * @param {?} $event
	     * @return {?}
	     */
	    NgForm.prototype.onSubmit = function ($event) {
	        this._submitted = true;
	        this.ngSubmit.emit($event);
	        return false;
	    };
	    /**
	     * @return {?}
	     */
	    NgForm.prototype.onReset = function () { this.resetForm(); };
	    /**
	     * @param {?=} value
	     * @return {?}
	     */
	    NgForm.prototype.resetForm = function (value) {
	        if (value === void 0) { value = undefined; }
	        this.form.reset(value);
	        this._submitted = false;
	    };
	    /**
	     * \@internal
	     * @param {?} path
	     * @return {?}
	     */
	    NgForm.prototype._findContainer = function (path) {
	        path.pop();
	        return path.length ? (this.form.get(path)) : this.form;
	    };
	    return NgForm;
	}(ControlContainer));
	NgForm.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'form:not([ngNoForm]):not([formGroup]),ngForm,[ngForm]',
	                providers: [formDirectiveProvider],
	                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                outputs: ['ngSubmit'],
	                exportAs: 'ngForm'
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgForm.ctorParameters = function () { return [
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var FormErrorExamples = {
	    formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
	    formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
	    formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
	    ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
	    ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var TemplateDrivenErrors = (function () {
	    function TemplateDrivenErrors() {
	    }
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.modelParentException = function () {
	        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      " + FormErrorExamples.formControlName + "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      " + FormErrorExamples.ngModelWithFormGroup);
	    };
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.formGroupNameException = function () {
	        throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
	    };
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.missingNameException = function () {
	        throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
	    };
	    /**
	     * @return {?}
	     */
	    TemplateDrivenErrors.modelGroupParentException = function () {
	        throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      " + FormErrorExamples.formGroupName + "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      " + FormErrorExamples.ngModelGroup);
	    };
	    return TemplateDrivenErrors;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var modelGroupProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return NgModelGroup; })
	};
	/**
	 * \@whatItDoes Creates and binds a {\@link FormGroup} instance to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive can only be used as a child of {\@link NgForm} (or in other words,
	 * within `<form>` tags).
	 *
	 * Use this directive if you'd like to create a sub-group within a form. This can
	 * come in handy if you want to validate a sub-group of your form separately from
	 * the rest of your form, or if some values in your domain model make more sense to
	 * consume together in a nested object.
	 *
	 * Pass in the name you'd like this sub-group to have and it will become the key
	 * for the sub-group in the form's full value. You can also export the directive into
	 * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
	 *
	 * {\@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `FormsModule`
	 *
	 * \@stable
	 */
	var NgModelGroup = (function (_super) {
	    __extends(NgModelGroup, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function NgModelGroup(parent, validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._parent = parent;
	        _this._validators = validators;
	        _this._asyncValidators = asyncValidators;
	        return _this;
	    }
	    /**
	     * \@internal
	     * @return {?}
	     */
	    NgModelGroup.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	            TemplateDrivenErrors.modelGroupParentException();
	        }
	    };
	    return NgModelGroup;
	}(AbstractFormGroupDirective));
	NgModelGroup.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[ngModelGroup]', providers: [modelGroupProvider], exportAs: 'ngModelGroup' },] },
	];
	/**
	 * @nocollapse
	 */
	NgModelGroup.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	NgModelGroup.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['ngModelGroup',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formControlBinding = {
	    provide: NgControl,
	    useExisting: _angular_core.forwardRef(function () { return NgModel; })
	};
	/**
	 * `ngModel` forces an additional change detection run when its inputs change:
	 * E.g.:
	 * ```
	 * <div>{{myModel.valid}}</div>
	 * <input [(ngModel)]="myValue" #myModel="ngModel">
	 * ```
	 * I.e. `ngModel` can export itself on the element and then be used in the template.
	 * Normally, this would result in expressions before the `input` that use the exported directive
	 * to have and old value as they have been
	 * dirty checked before. As this is a very common case for `ngModel`, we added this second change
	 * detection run.
	 *
	 * Notes:
	 * - this is just one extra run no matter how many `ngModel` have been changed.
	 * - this is a general problem when using `exportAs` for directives!
	 */
	var resolvedPromise$1 = Promise.resolve(null);
	/**
	 * \@whatItDoes Creates a {\@link FormControl} instance from a domain model and binds it
	 * to a form control element.
	 *
	 * The {\@link FormControl} instance will track the value, user interaction, and
	 * validation status of the control and keep the view synced with the model. If used
	 * within a parent form, the directive will also register itself with the form as a child
	 * control.
	 *
	 * \@howToUse
	 *
	 * This directive can be used by itself or as part of a larger form. All you need is the
	 * `ngModel` selector to activate it.
	 *
	 * It accepts a domain model as an optional {\@link \@Input}. If you have a one-way binding
	 * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
	 * class will set the value in the view. If you have a two-way binding with `[()]` syntax
	 * (also known as 'banana-box syntax'), the value in the UI will always be synced back to
	 * the domain model in your class as well.
	 *
	 * If you wish to inspect the properties of the associated {\@link FormControl} (like
	 * validity state), you can also export the directive into a local template variable using
	 * `ngModel` as the key (ex: `#myVar="ngModel"`). You can then access the control using the
	 * directive's `control` property, but most properties you'll need (like `valid` and `dirty`)
	 * will fall through to the control anyway, so you can access them directly. You can see a
	 * full list of properties directly available in {\@link AbstractControlDirective}.
	 *
	 * The following is an example of a simple standalone control using `ngModel`:
	 *
	 * {\@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
	 *
	 * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
	 * so that the control can be registered with the parent form under that name.
	 *
	 * It's worth noting that in the context of a parent form, you often can skip one-way or
	 * two-way binding because the parent form will sync the value for you. You can access
	 * its properties by exporting it into a local template variable using `ngForm` (ex:
	 * `#f="ngForm"`). Then you can pass it where it needs to go on submit.
	 *
	 * If you do need to populate initial values into your form, using a one-way binding for
	 * `ngModel` tends to be sufficient as long as you use the exported form's value rather
	 * than the domain model's value on submit.
	 *
	 * Take a look at an example of using `ngModel` within a form:
	 *
	 * {\@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
	 *
	 * To see `ngModel` examples with different form control types, see:
	 *
	 * * Radio buttons: {\@link RadioControlValueAccessor}
	 * * Selects: {\@link SelectControlValueAccessor}
	 *
	 * **npm package**: `\@angular/forms`
	 *
	 * **NgModule**: `FormsModule`
	 *
	 *  \@stable
	 */
	var NgModel = (function (_super) {
	    __extends(NgModel, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     * @param {?} valueAccessors
	     */
	    function NgModel(parent, validators, asyncValidators, valueAccessors) {
	        var _this = _super.call(this) || this;
	        /**
	         * \@internal
	         */
	        _this._control = new FormControl();
	        /**
	         * \@internal
	         */
	        _this._registered = false;
	        _this.update = new _angular_core.EventEmitter();
	        _this._parent = parent;
	        _this._rawValidators = validators || [];
	        _this._rawAsyncValidators = asyncValidators || [];
	        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
	        return _this;
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    NgModel.prototype.ngOnChanges = function (changes) {
	        this._checkForErrors();
	        if (!this._registered)
	            this._setUpControl();
	        if ('isDisabled' in changes) {
	            this._updateDisabled(changes);
	        }
	        if (isPropertyUpdated(changes, this.viewModel)) {
	            this._updateValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype.ngOnDestroy = function () { this.formDirective && this.formDirective.removeControl(this); };
	    Object.defineProperty(NgModel.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return this._parent ? controlPath(this.name, this._parent) : [this.name];
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._rawValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(NgModel.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._rawAsyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} newValue
	     * @return {?}
	     */
	    NgModel.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._setUpControl = function () {
	        this._isStandalone() ? this._setUpStandalone() :
	            this.formDirective.addControl(this);
	        this._registered = true;
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._isStandalone = function () {
	        return !this._parent || !!(this.options && this.options.standalone);
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._setUpStandalone = function () {
	        setUpControl(this._control, this);
	        this._control.updateValueAndValidity({ emitEvent: false });
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._checkForErrors = function () {
	        if (!this._isStandalone()) {
	            this._checkParentType();
	        }
	        this._checkName();
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._checkParentType = function () {
	        if (!(this._parent instanceof NgModelGroup) &&
	            this._parent instanceof AbstractFormGroupDirective) {
	            TemplateDrivenErrors.formGroupNameException();
	        }
	        else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
	            TemplateDrivenErrors.modelParentException();
	        }
	    };
	    /**
	     * @return {?}
	     */
	    NgModel.prototype._checkName = function () {
	        if (this.options && this.options.name)
	            this.name = this.options.name;
	        if (!this._isStandalone() && !this.name) {
	            TemplateDrivenErrors.missingNameException();
	        }
	    };
	    /**
	     * @param {?} value
	     * @return {?}
	     */
	    NgModel.prototype._updateValue = function (value) {
	        var _this = this;
	        resolvedPromise$1.then(function () { _this.control.setValue(value, { emitViewToModelChange: false }); });
	    };
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    NgModel.prototype._updateDisabled = function (changes) {
	        var _this = this;
	        var /** @type {?} */ disabledValue = changes['isDisabled'].currentValue;
	        var /** @type {?} */ isDisabled = disabledValue === '' || (disabledValue && disabledValue !== 'false');
	        resolvedPromise$1.then(function () {
	            if (isDisabled && !_this.control.disabled) {
	                _this.control.disable();
	            }
	            else if (!isDisabled && _this.control.disabled) {
	                _this.control.enable();
	            }
	        });
	    };
	    return NgModel;
	}(NgControl));
	NgModel.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[ngModel]:not([formControlName]):not([formControl])',
	                providers: [formControlBinding],
	                exportAs: 'ngModel'
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgModel.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	]; };
	NgModel.propDecorators = {
	    'name': [{ type: _angular_core.Input },],
	    'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	    'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	    'options': [{ type: _angular_core.Input, args: ['ngModelOptions',] },],
	    'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var ReactiveErrors = (function () {
	    function ReactiveErrors() {
	    }
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.controlParentException = function () {
	        throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formControlName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.ngModelGroupException = function () {
	        throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        " + FormErrorExamples.formGroupName + "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        " + FormErrorExamples.ngModelGroup);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.missingFormException = function () {
	        throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       " + FormErrorExamples.formControlName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.groupParentException = function () {
	        throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      " + FormErrorExamples.formGroupName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.arrayParentException = function () {
	        throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        " + FormErrorExamples.formArrayName);
	    };
	    /**
	     * @return {?}
	     */
	    ReactiveErrors.disabledAttrWarning = function () {
	        console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n       \n      Example: \n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
	    };
	    return ReactiveErrors;
	}());
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formControlBinding$1 = {
	    provide: NgControl,
	    useExisting: _angular_core.forwardRef(function () { return FormControlDirective; })
	};
	/**
	 * \@whatItDoes Syncs a standalone {\@link FormControl} instance to a form control element.
	 *
	 * In other words, this directive ensures that any values written to the {\@link FormControl}
	 * instance programmatically will be written to the DOM element (model -> view). Conversely,
	 * any values written to the DOM element through user input will be reflected in the
	 * {\@link FormControl} instance (view -> model).
	 *
	 * \@howToUse
	 *
	 * Use this directive if you'd like to create and manage a {\@link FormControl} instance directly.
	 * Simply create a {\@link FormControl}, save it to your component class, and pass it into the
	 * {\@link FormControlDirective}.
	 *
	 * This directive is designed to be used as a standalone control.  Unlike {\@link FormControlName},
	 * it does not require that your {\@link FormControl} instance be part of any parent
	 * {\@link FormGroup}, and it won't be registered to any {\@link FormGroupDirective} that
	 * exists above it.
	 *
	 * **Get the value**: the `value` property is always synced and available on the
	 * {\@link FormControl} instance. See a full list of available properties in
	 * {\@link AbstractControl}.
	 *
	 * **Set the value**: You can pass in an initial value when instantiating the {\@link FormControl},
	 * or you can set it programmatically later using {\@link AbstractControl.setValue} or
	 * {\@link AbstractControl.patchValue}.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the control, you can
	 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
	 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
	 * re-calculated.
	 *
	 * ### Example
	 *
	 * {\@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `ReactiveFormsModule`
	 *
	 *  \@stable
	 */
	var FormControlDirective = (function (_super) {
	    __extends(FormControlDirective, _super);
	    /**
	     * @param {?} validators
	     * @param {?} asyncValidators
	     * @param {?} valueAccessors
	     */
	    function FormControlDirective(validators, asyncValidators, valueAccessors) {
	        var _this = _super.call(this) || this;
	        _this.update = new _angular_core.EventEmitter();
	        _this._rawValidators = validators || [];
	        _this._rawAsyncValidators = asyncValidators || [];
	        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
	        return _this;
	    }
	    Object.defineProperty(FormControlDirective.prototype, "isDisabled", {
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormControlDirective.prototype.ngOnChanges = function (changes) {
	        if (this._isControlChanged(changes)) {
	            setUpControl(this.form, this);
	            if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
	                ((((this.valueAccessor)).setDisabledState))(true);
	            }
	            this.form.updateValueAndValidity({ emitEvent: false });
	        }
	        if (isPropertyUpdated(changes, this.viewModel)) {
	            this.form.setValue(this.model);
	            this.viewModel = this.model;
	        }
	    };
	    Object.defineProperty(FormControlDirective.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._rawValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._rawAsyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlDirective.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} newValue
	     * @return {?}
	     */
	    FormControlDirective.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormControlDirective.prototype._isControlChanged = function (changes) {
	        return changes.hasOwnProperty('form');
	    };
	    return FormControlDirective;
	}(NgControl));
	FormControlDirective.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formControl]', providers: [formControlBinding$1], exportAs: 'ngForm' },] },
	];
	/**
	 * @nocollapse
	 */
	FormControlDirective.ctorParameters = function () { return [
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	]; };
	FormControlDirective.propDecorators = {
	    'form': [{ type: _angular_core.Input, args: ['formControl',] },],
	    'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	    'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	    'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formDirectiveProvider$1 = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return FormGroupDirective; })
	};
	/**
	 * \@whatItDoes Binds an existing {\@link FormGroup} to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive accepts an existing {\@link FormGroup} instance. It will then use this
	 * {\@link FormGroup} instance to match any child {\@link FormControl}, {\@link FormGroup},
	 * and {\@link FormArray} instances to child {\@link FormControlName}, {\@link FormGroupName},
	 * and {\@link FormArrayName} directives.
	 *
	 * **Set value**: You can set the form's initial value when instantiating the
	 * {\@link FormGroup}, or you can set it programmatically later using the {\@link FormGroup}'s
	 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue} methods.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the form, you can subscribe
	 * to the {\@link FormGroup}'s {\@link AbstractControl.valueChanges} event.  You can also listen to
	 * its {\@link AbstractControl.statusChanges} event to be notified when the validation status is
	 * re-calculated.
	 *
	 * Furthermore, you can listen to the directive's `ngSubmit` event to be notified when the user has
	 * triggered a form submission. The `ngSubmit` event will be emitted with the original form
	 * submission event.
	 *
	 * ### Example
	 *
	 * In this example, we create form controls for first name and last name.
	 *
	 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	 *
	 * **npm package**: `\@angular/forms`
	 *
	 * **NgModule**: {\@link ReactiveFormsModule}
	 *
	 *  \@stable
	 */
	var FormGroupDirective = (function (_super) {
	    __extends(FormGroupDirective, _super);
	    /**
	     * @param {?} _validators
	     * @param {?} _asyncValidators
	     */
	    function FormGroupDirective(_validators, _asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._validators = _validators;
	        _this._asyncValidators = _asyncValidators;
	        _this._submitted = false;
	        _this.directives = [];
	        _this.form = ((null));
	        _this.ngSubmit = new _angular_core.EventEmitter();
	        return _this;
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormGroupDirective.prototype.ngOnChanges = function (changes) {
	        this._checkFormPresent();
	        if (changes.hasOwnProperty('form')) {
	            this._updateValidators();
	            this._updateDomValue();
	            this._updateRegistrations();
	        }
	    };
	    Object.defineProperty(FormGroupDirective.prototype, "submitted", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._submitted; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this.form; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormGroupDirective.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return []; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.addControl = function (dir) {
	        var /** @type {?} */ ctrl = this.form.get(dir.path);
	        setUpControl(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	        this.directives.push(dir);
	        return ctrl;
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.getControl = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.removeControl = function (dir) { remove(this.directives, dir); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.addFormGroup = function (dir) {
	        var /** @type {?} */ ctrl = this.form.get(dir.path);
	        setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.removeFormGroup = function (dir) { };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.getFormGroup = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.addFormArray = function (dir) {
	        var /** @type {?} */ ctrl = this.form.get(dir.path);
	        setUpFormContainer(ctrl, dir);
	        ctrl.updateValueAndValidity({ emitEvent: false });
	    };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.removeFormArray = function (dir) { };
	    /**
	     * @param {?} dir
	     * @return {?}
	     */
	    FormGroupDirective.prototype.getFormArray = function (dir) { return (this.form.get(dir.path)); };
	    /**
	     * @param {?} dir
	     * @param {?} value
	     * @return {?}
	     */
	    FormGroupDirective.prototype.updateModel = function (dir, value) {
	        var /** @type {?} */ ctrl = (this.form.get(dir.path));
	        ctrl.setValue(value);
	    };
	    /**
	     * @param {?} $event
	     * @return {?}
	     */
	    FormGroupDirective.prototype.onSubmit = function ($event) {
	        this._submitted = true;
	        this.ngSubmit.emit($event);
	        return false;
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype.onReset = function () { this.resetForm(); };
	    /**
	     * @param {?=} value
	     * @return {?}
	     */
	    FormGroupDirective.prototype.resetForm = function (value) {
	        if (value === void 0) { value = undefined; }
	        this.form.reset(value);
	        this._submitted = false;
	    };
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroupDirective.prototype._updateDomValue = function () {
	        var _this = this;
	        this.directives.forEach(function (dir) {
	            var /** @type {?} */ newCtrl = _this.form.get(dir.path);
	            if (dir._control !== newCtrl) {
	                cleanUpControl(dir._control, dir);
	                if (newCtrl)
	                    setUpControl(newCtrl, dir);
	                dir._control = newCtrl;
	            }
	        });
	        this.form._updateTreeValidity({ emitEvent: false });
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype._updateRegistrations = function () {
	        var _this = this;
	        this.form._registerOnCollectionChange(function () { return _this._updateDomValue(); });
	        if (this._oldForm)
	            this._oldForm._registerOnCollectionChange(function () { });
	        this._oldForm = this.form;
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype._updateValidators = function () {
	        var /** @type {?} */ sync = composeValidators(this._validators);
	        this.form.validator = Validators.compose([/** @type {?} */ ((this.form.validator)), /** @type {?} */ ((sync))]);
	        var /** @type {?} */ async = composeAsyncValidators(this._asyncValidators);
	        this.form.asyncValidator = Validators.composeAsync([/** @type {?} */ ((this.form.asyncValidator)), /** @type {?} */ ((async))]);
	    };
	    /**
	     * @return {?}
	     */
	    FormGroupDirective.prototype._checkFormPresent = function () {
	        if (!this.form) {
	            ReactiveErrors.missingFormException();
	        }
	    };
	    return FormGroupDirective;
	}(ControlContainer));
	FormGroupDirective.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[formGroup]',
	                providers: [formDirectiveProvider$1],
	                host: { '(submit)': 'onSubmit($event)', '(reset)': 'onReset()' },
	                exportAs: 'ngForm'
	            },] },
	];
	/**
	 * @nocollapse
	 */
	FormGroupDirective.ctorParameters = function () { return [
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	FormGroupDirective.propDecorators = {
	    'form': [{ type: _angular_core.Input, args: ['formGroup',] },],
	    'ngSubmit': [{ type: _angular_core.Output },],
	};
	/**
	 * @template T
	 * @param {?} list
	 * @param {?} el
	 * @return {?}
	 */
	function remove(list, el) {
	    var /** @type {?} */ index = list.indexOf(el);
	    if (index > -1) {
	        list.splice(index, 1);
	    }
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var formGroupNameProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return FormGroupName; })
	};
	/**
	 * \@whatItDoes Syncs a nested {\@link FormGroup} to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive can only be used with a parent {\@link FormGroupDirective} (selector:
	 * `[formGroup]`).
	 *
	 * It accepts the string name of the nested {\@link FormGroup} you want to link, and
	 * will look for a {\@link FormGroup} registered with that name in the parent
	 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
	 *
	 * Nested form groups can come in handy when you want to validate a sub-group of a
	 * form separately from the rest or when you'd like to group the values of certain
	 * controls into their own nested object.
	 *
	 * **Access the group**: You can access the associated {\@link FormGroup} using the
	 * {\@link AbstractControl.get} method. Ex: `this.form.get('name')`.
	 *
	 * You can also access individual controls within the group using dot syntax.
	 * Ex: `this.form.get('name.first')`
	 *
	 * **Get the value**: the `value` property is always synced and available on the
	 * {\@link FormGroup}. See a full list of available properties in {\@link AbstractControl}.
	 *
	 * **Set the value**: You can set an initial value for each child control when instantiating
	 * the {\@link FormGroup}, or you can set it programmatically later using
	 * {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the group, you can
	 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
	 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
	 * re-calculated.
	 *
	 * ### Example
	 *
	 * {\@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `ReactiveFormsModule`
	 *
	 * \@stable
	 */
	var FormGroupName = (function (_super) {
	    __extends(FormGroupName, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function FormGroupName(parent, validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._parent = parent;
	        _this._validators = validators;
	        _this._asyncValidators = asyncValidators;
	        return _this;
	    }
	    /**
	     * \@internal
	     * @return {?}
	     */
	    FormGroupName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            ReactiveErrors.groupParentException();
	        }
	    };
	    return FormGroupName;
	}(AbstractFormGroupDirective));
	FormGroupName.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formGroupName]', providers: [formGroupNameProvider] },] },
	];
	/**
	 * @nocollapse
	 */
	FormGroupName.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	FormGroupName.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['formGroupName',] },],
	};
	var formArrayNameProvider = {
	    provide: ControlContainer,
	    useExisting: _angular_core.forwardRef(function () { return FormArrayName; })
	};
	/**
	 * \@whatItDoes Syncs a nested {\@link FormArray} to a DOM element.
	 *
	 * \@howToUse
	 *
	 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
	 * `[formGroup]`).
	 *
	 * It accepts the string name of the nested {\@link FormArray} you want to link, and
	 * will look for a {\@link FormArray} registered with that name in the parent
	 * {\@link FormGroup} instance you passed into {\@link FormGroupDirective}.
	 *
	 * Nested form arrays can come in handy when you have a group of form controls but
	 * you're not sure how many there will be. Form arrays allow you to create new
	 * form controls dynamically.
	 *
	 * **Access the array**: You can access the associated {\@link FormArray} using the
	 * {\@link AbstractControl.get} method on the parent {\@link FormGroup}.
	 * Ex: `this.form.get('cities')`.
	 *
	 * **Get the value**: the `value` property is always synced and available on the
	 * {\@link FormArray}. See a full list of available properties in {\@link AbstractControl}.
	 *
	 * **Set the value**: You can set an initial value for each child control when instantiating
	 * the {\@link FormArray}, or you can set the value programmatically later using the
	 * {\@link FormArray}'s {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}
	 * methods.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the array, you can
	 * subscribe to the {\@link FormArray}'s {\@link AbstractControl.valueChanges} event.  You can also
	 * listen to its {\@link AbstractControl.statusChanges} event to be notified when the validation
	 * status is re-calculated.
	 *
	 * **Add new controls**: You can add new controls to the {\@link FormArray} dynamically by
	 * calling its {\@link FormArray.push} method.
	 *  Ex: `this.form.get('cities').push(new FormControl());`
	 *
	 * ### Example
	 *
	 * {\@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
	 *
	 * * **npm package**: `\@angular/forms`
	 *
	 * * **NgModule**: `ReactiveFormsModule`
	 *
	 * \@stable
	 */
	var FormArrayName = (function (_super) {
	    __extends(FormArrayName, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     */
	    function FormArrayName(parent, validators, asyncValidators) {
	        var _this = _super.call(this) || this;
	        _this._parent = parent;
	        _this._validators = validators;
	        _this._asyncValidators = asyncValidators;
	        return _this;
	    }
	    /**
	     * @return {?}
	     */
	    FormArrayName.prototype.ngOnInit = function () {
	        this._checkParentType(); /** @type {?} */
	        ((this.formDirective)).addFormArray(this);
	    };
	    /**
	     * @return {?}
	     */
	    FormArrayName.prototype.ngOnDestroy = function () {
	        if (this.formDirective) {
	            this.formDirective.removeFormArray(this);
	        }
	    };
	    Object.defineProperty(FormArrayName.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return ((this.formDirective)).getFormArray(this); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return this._parent ? (this._parent.formDirective) : null;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return controlPath(this.name, this._parent); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._validators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormArrayName.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return composeAsyncValidators(this._asyncValidators);
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @return {?}
	     */
	    FormArrayName.prototype._checkParentType = function () {
	        if (_hasInvalidParent(this._parent)) {
	            ReactiveErrors.arrayParentException();
	        }
	    };
	    return FormArrayName;
	}(ControlContainer));
	FormArrayName.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formArrayName]', providers: [formArrayNameProvider] },] },
	];
	/**
	 * @nocollapse
	 */
	FormArrayName.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	]; };
	FormArrayName.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['formArrayName',] },],
	};
	/**
	 * @param {?} parent
	 * @return {?}
	 */
	function _hasInvalidParent(parent) {
	    return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) &&
	        !(parent instanceof FormArrayName);
	}
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var controlNameBinding = {
	    provide: NgControl,
	    useExisting: _angular_core.forwardRef(function () { return FormControlName; })
	};
	/**
	 * \@whatItDoes Syncs a {\@link FormControl} in an existing {\@link FormGroup} to a form control
	 * element by name.
	 *
	 * In other words, this directive ensures that any values written to the {\@link FormControl}
	 * instance programmatically will be written to the DOM element (model -> view). Conversely,
	 * any values written to the DOM element through user input will be reflected in the
	 * {\@link FormControl} instance (view -> model).
	 *
	 * \@howToUse
	 *
	 * This directive is designed to be used with a parent {\@link FormGroupDirective} (selector:
	 * `[formGroup]`).
	 *
	 * It accepts the string name of the {\@link FormControl} instance you want to
	 * link, and will look for a {\@link FormControl} registered with that name in the
	 * closest {\@link FormGroup} or {\@link FormArray} above it.
	 *
	 * **Access the control**: You can access the {\@link FormControl} associated with
	 * this directive by using the {\@link AbstractControl.get} method.
	 * Ex: `this.form.get('first');`
	 *
	 * **Get value**: the `value` property is always synced and available on the {\@link FormControl}.
	 * See a full list of available properties in {\@link AbstractControl}.
	 *
	 *  **Set value**: You can set an initial value for the control when instantiating the
	 *  {\@link FormControl}, or you can set it programmatically later using
	 *  {\@link AbstractControl.setValue} or {\@link AbstractControl.patchValue}.
	 *
	 * **Listen to value**: If you want to listen to changes in the value of the control, you can
	 * subscribe to the {\@link AbstractControl.valueChanges} event.  You can also listen to
	 * {\@link AbstractControl.statusChanges} to be notified when the validation status is
	 * re-calculated.
	 *
	 * ### Example
	 *
	 * In this example, we create form controls for first name and last name.
	 *
	 * {\@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
	 *
	 * To see `formControlName` examples with different form control types, see:
	 *
	 * * Radio buttons: {\@link RadioControlValueAccessor}
	 * * Selects: {\@link SelectControlValueAccessor}
	 *
	 * **npm package**: `\@angular/forms`
	 *
	 * **NgModule**: {\@link ReactiveFormsModule}
	 *
	 *  \@stable
	 */
	var FormControlName = (function (_super) {
	    __extends(FormControlName, _super);
	    /**
	     * @param {?} parent
	     * @param {?} validators
	     * @param {?} asyncValidators
	     * @param {?} valueAccessors
	     */
	    function FormControlName(parent, validators, asyncValidators, valueAccessors) {
	        var _this = _super.call(this) || this;
	        _this._added = false;
	        _this.update = new _angular_core.EventEmitter();
	        _this._parent = parent;
	        _this._rawValidators = validators || [];
	        _this._rawAsyncValidators = asyncValidators || [];
	        _this.valueAccessor = selectValueAccessor(_this, valueAccessors);
	        return _this;
	    }
	    Object.defineProperty(FormControlName.prototype, "isDisabled", {
	        /**
	         * @param {?} isDisabled
	         * @return {?}
	         */
	        set: function (isDisabled) { ReactiveErrors.disabledAttrWarning(); },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    FormControlName.prototype.ngOnChanges = function (changes) {
	        if (!this._added)
	            this._setUpControl();
	        if (isPropertyUpdated(changes, this.viewModel)) {
	            this.viewModel = this.model;
	            this.formDirective.updateModel(this, this.model);
	        }
	    };
	    /**
	     * @return {?}
	     */
	    FormControlName.prototype.ngOnDestroy = function () {
	        if (this.formDirective) {
	            this.formDirective.removeControl(this);
	        }
	    };
	    /**
	     * @param {?} newValue
	     * @return {?}
	     */
	    FormControlName.prototype.viewToModelUpdate = function (newValue) {
	        this.viewModel = newValue;
	        this.update.emit(newValue);
	    };
	    Object.defineProperty(FormControlName.prototype, "path", {
	        /**
	         * @return {?}
	         */
	        get: function () { return controlPath(this.name, /** @type {?} */ ((this._parent))); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "formDirective", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._parent ? this._parent.formDirective : null; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "validator", {
	        /**
	         * @return {?}
	         */
	        get: function () { return composeValidators(this._rawValidators); },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "asyncValidator", {
	        /**
	         * @return {?}
	         */
	        get: function () {
	            return ((composeAsyncValidators(this._rawAsyncValidators)));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(FormControlName.prototype, "control", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._control; },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @return {?}
	     */
	    FormControlName.prototype._checkParentType = function () {
	        if (!(this._parent instanceof FormGroupName) &&
	            this._parent instanceof AbstractFormGroupDirective) {
	            ReactiveErrors.ngModelGroupException();
	        }
	        else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) &&
	            !(this._parent instanceof FormArrayName)) {
	            ReactiveErrors.controlParentException();
	        }
	    };
	    /**
	     * @return {?}
	     */
	    FormControlName.prototype._setUpControl = function () {
	        this._checkParentType();
	        this._control = this.formDirective.addControl(this);
	        if (this.control.disabled && ((this.valueAccessor)).setDisabledState) {
	            ((((this.valueAccessor)).setDisabledState))(true);
	        }
	        this._added = true;
	    };
	    return FormControlName;
	}(NgControl));
	FormControlName.decorators = [
	    { type: _angular_core.Directive, args: [{ selector: '[formControlName]', providers: [controlNameBinding] },] },
	];
	/**
	 * @nocollapse
	 */
	FormControlName.ctorParameters = function () { return [
	    { type: ControlContainer, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Host }, { type: _angular_core.SkipSelf },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_ASYNC_VALIDATORS,] },] },
	    { type: Array, decorators: [{ type: _angular_core.Optional }, { type: _angular_core.Self }, { type: _angular_core.Inject, args: [NG_VALUE_ACCESSOR,] },] },
	]; };
	FormControlName.propDecorators = {
	    'name': [{ type: _angular_core.Input, args: ['formControlName',] },],
	    'model': [{ type: _angular_core.Input, args: ['ngModel',] },],
	    'update': [{ type: _angular_core.Output, args: ['ngModelChange',] },],
	    'isDisabled': [{ type: _angular_core.Input, args: ['disabled',] },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var REQUIRED_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return RequiredValidator; }),
	    multi: true
	};
	var CHECKBOX_REQUIRED_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return CheckboxRequiredValidator; }),
	    multi: true
	};
	/**
	 * A Directive that adds the `required` validator to any controls marked with the
	 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
	 *
	 * ### Example
	 *
	 * ```
	 * <input name="fullName" ngModel required>
	 * ```
	 *
	 * \@stable
	 */
	var RequiredValidator = (function () {
	    function RequiredValidator() {
	    }
	    Object.defineProperty(RequiredValidator.prototype, "required", {
	        /**
	         * @return {?}
	         */
	        get: function () { return this._required; },
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            this._required = value != null && value !== false && "" + value !== 'false';
	            if (this._onChange)
	                this._onChange();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    RequiredValidator.prototype.validate = function (c) {
	        return this.required ? Validators.required(c) : null;
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    RequiredValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    return RequiredValidator;
	}());
	RequiredValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
	                providers: [REQUIRED_VALIDATOR],
	                host: { '[attr.required]': 'required ? "" : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	RequiredValidator.ctorParameters = function () { return []; };
	RequiredValidator.propDecorators = {
	    'required': [{ type: _angular_core.Input },],
	};
	/**
	 * A Directive that adds the `required` validator to checkbox controls marked with the
	 * `required` attribute, via the {\@link NG_VALIDATORS} binding.
	 *
	 * ### Example
	 *
	 * ```
	 * <input type="checkbox" name="active" ngModel required>
	 * ```
	 *
	 * \@experimental
	 */
	var CheckboxRequiredValidator = (function (_super) {
	    __extends(CheckboxRequiredValidator, _super);
	    function CheckboxRequiredValidator() {
	        return _super !== null && _super.apply(this, arguments) || this;
	    }
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    CheckboxRequiredValidator.prototype.validate = function (c) {
	        return this.required ? Validators.requiredTrue(c) : null;
	    };
	    return CheckboxRequiredValidator;
	}(RequiredValidator));
	CheckboxRequiredValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
	                providers: [CHECKBOX_REQUIRED_VALIDATOR],
	                host: { '[attr.required]': 'required ? "" : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	CheckboxRequiredValidator.ctorParameters = function () { return []; };
	/**
	 * Provider which adds {@link EmailValidator} to {@link NG_VALIDATORS}.
	 */
	var EMAIL_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return EmailValidator; }),
	    multi: true
	};
	/**
	 * A Directive that adds the `email` validator to controls marked with the
	 * `email` attribute, via the {\@link NG_VALIDATORS} binding.
	 *
	 * ### Example
	 *
	 * ```
	 * <input type="email" name="email" ngModel email>
	 * <input type="email" name="email" ngModel email="true">
	 * <input type="email" name="email" ngModel [email]="true">
	 * ```
	 *
	 * \@experimental
	 */
	var EmailValidator = (function () {
	    function EmailValidator() {
	    }
	    Object.defineProperty(EmailValidator.prototype, "email", {
	        /**
	         * @param {?} value
	         * @return {?}
	         */
	        set: function (value) {
	            this._enabled = value === '' || value === true || value === 'true';
	            if (this._onChange)
	                this._onChange();
	        },
	        enumerable: true,
	        configurable: true
	    });
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    EmailValidator.prototype.validate = function (c) {
	        return this._enabled ? Validators.email(c) : null;
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    EmailValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    return EmailValidator;
	}());
	EmailValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
	                providers: [EMAIL_VALIDATOR]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	EmailValidator.ctorParameters = function () { return []; };
	EmailValidator.propDecorators = {
	    'email': [{ type: _angular_core.Input },],
	};
	/**
	 * Provider which adds {@link MinLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='min'}
	 */
	var MIN_LENGTH_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return MinLengthValidator; }),
	    multi: true
	};
	/**
	 * A directive which installs the {\@link MinLengthValidator} for any `formControlName`,
	 * `formControl`, or control with `ngModel` that also has a `minlength` attribute.
	 *
	 * \@stable
	 */
	var MinLengthValidator = (function () {
	    function MinLengthValidator() {
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    MinLengthValidator.prototype.ngOnChanges = function (changes) {
	        if ('minlength' in changes) {
	            this._createValidator();
	            if (this._onChange)
	                this._onChange();
	        }
	    };
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    MinLengthValidator.prototype.validate = function (c) {
	        return this.minlength == null ? null : this._validator(c);
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    MinLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    /**
	     * @return {?}
	     */
	    MinLengthValidator.prototype._createValidator = function () {
	        this._validator = Validators.minLength(parseInt(this.minlength, 10));
	    };
	    return MinLengthValidator;
	}());
	MinLengthValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
	                providers: [MIN_LENGTH_VALIDATOR],
	                host: { '[attr.minlength]': 'minlength ? minlength : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	MinLengthValidator.ctorParameters = function () { return []; };
	MinLengthValidator.propDecorators = {
	    'minlength': [{ type: _angular_core.Input },],
	};
	/**
	 * Provider which adds {@link MaxLengthValidator} to {@link NG_VALIDATORS}.
	 *
	 * ## Example:
	 *
	 * {@example common/forms/ts/validators/validators.ts region='max'}
	 */
	var MAX_LENGTH_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return MaxLengthValidator; }),
	    multi: true
	};
	/**
	 * A directive which installs the {\@link MaxLengthValidator} for any `formControlName,
	 * `formControl`,
	 * or control with `ngModel` that also has a `maxlength` attribute.
	 *
	 * \@stable
	 */
	var MaxLengthValidator = (function () {
	    function MaxLengthValidator() {
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    MaxLengthValidator.prototype.ngOnChanges = function (changes) {
	        if ('maxlength' in changes) {
	            this._createValidator();
	            if (this._onChange)
	                this._onChange();
	        }
	    };
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    MaxLengthValidator.prototype.validate = function (c) {
	        return this.maxlength != null ? this._validator(c) : null;
	    };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    MaxLengthValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    /**
	     * @return {?}
	     */
	    MaxLengthValidator.prototype._createValidator = function () {
	        this._validator = Validators.maxLength(parseInt(this.maxlength, 10));
	    };
	    return MaxLengthValidator;
	}());
	MaxLengthValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
	                providers: [MAX_LENGTH_VALIDATOR],
	                host: { '[attr.maxlength]': 'maxlength ? maxlength : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	MaxLengthValidator.ctorParameters = function () { return []; };
	MaxLengthValidator.propDecorators = {
	    'maxlength': [{ type: _angular_core.Input },],
	};
	var PATTERN_VALIDATOR = {
	    provide: NG_VALIDATORS,
	    useExisting: _angular_core.forwardRef(function () { return PatternValidator; }),
	    multi: true
	};
	/**
	 * A Directive that adds the `pattern` validator to any controls marked with the
	 * `pattern` attribute, via the {\@link NG_VALIDATORS} binding. Uses attribute value
	 * as the regex to validate Control value against.  Follows pattern attribute
	 * semantics; i.e. regex must match entire Control value.
	 *
	 * ### Example
	 *
	 * ```
	 * <input [name]="fullName" pattern="[a-zA-Z ]*" ngModel>
	 * ```
	 * \@stable
	 */
	var PatternValidator = (function () {
	    function PatternValidator() {
	    }
	    /**
	     * @param {?} changes
	     * @return {?}
	     */
	    PatternValidator.prototype.ngOnChanges = function (changes) {
	        if ('pattern' in changes) {
	            this._createValidator();
	            if (this._onChange)
	                this._onChange();
	        }
	    };
	    /**
	     * @param {?} c
	     * @return {?}
	     */
	    PatternValidator.prototype.validate = function (c) { return this._validator(c); };
	    /**
	     * @param {?} fn
	     * @return {?}
	     */
	    PatternValidator.prototype.registerOnValidatorChange = function (fn) { this._onChange = fn; };
	    /**
	     * @return {?}
	     */
	    PatternValidator.prototype._createValidator = function () { this._validator = Validators.pattern(this.pattern); };
	    return PatternValidator;
	}());
	PatternValidator.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
	                providers: [PATTERN_VALIDATOR],
	                host: { '[attr.pattern]': 'pattern ? pattern : null' }
	            },] },
	];
	/**
	 * @nocollapse
	 */
	PatternValidator.ctorParameters = function () { return []; };
	PatternValidator.propDecorators = {
	    'pattern': [{ type: _angular_core.Input },],
	};
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * \@whatItDoes Creates an {\@link AbstractControl} from a user-specified configuration.
	 *
	 * It is essentially syntactic sugar that shortens the `new FormGroup()`,
	 * `new FormControl()`, and `new FormArray()` boilerplate that can build up in larger
	 * forms.
	 *
	 * \@howToUse
	 *
	 * To use, inject `FormBuilder` into your component class. You can then call its methods
	 * directly.
	 *
	 * {\@example forms/ts/formBuilder/form_builder_example.ts region='Component'}
	 *
	 *  * **npm package**: `\@angular/forms`
	 *
	 *  * **NgModule**: {\@link ReactiveFormsModule}
	 *
	 * \@stable
	 */
	var FormBuilder = (function () {
	    function FormBuilder() {
	    }
	    /**
	     * Construct a new {\@link FormGroup} with the given map of configuration.
	     * Valid keys for the `extra` parameter map are `validator` and `asyncValidator`.
	     *
	     * See the {\@link FormGroup} constructor for more details.
	     * @param {?} controlsConfig
	     * @param {?=} extra
	     * @return {?}
	     */
	    FormBuilder.prototype.group = function (controlsConfig, extra) {
	        if (extra === void 0) { extra = null; }
	        var /** @type {?} */ controls = this._reduceControls(controlsConfig);
	        var /** @type {?} */ validator = extra != null ? extra['validator'] : null;
	        var /** @type {?} */ asyncValidator = extra != null ? extra['asyncValidator'] : null;
	        return new FormGroup(controls, validator, asyncValidator);
	    };
	    /**
	     * Construct a new {\@link FormControl} with the given `formState`,`validator`, and
	     * `asyncValidator`.
	     *
	     * `formState` can either be a standalone value for the form control or an object
	     * that contains both a value and a disabled status.
	     *
	     * @param {?} formState
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     * @return {?}
	     */
	    FormBuilder.prototype.control = function (formState, validator, asyncValidator) {
	        return new FormControl(formState, validator, asyncValidator);
	    };
	    /**
	     * Construct a {\@link FormArray} from the given `controlsConfig` array of
	     * configuration, with the given optional `validator` and `asyncValidator`.
	     * @param {?} controlsConfig
	     * @param {?=} validator
	     * @param {?=} asyncValidator
	     * @return {?}
	     */
	    FormBuilder.prototype.array = function (controlsConfig, validator, asyncValidator) {
	        var _this = this;
	        var /** @type {?} */ controls = controlsConfig.map(function (c) { return _this._createControl(c); });
	        return new FormArray(controls, validator, asyncValidator);
	    };
	    /**
	     * \@internal
	     * @param {?} controlsConfig
	     * @return {?}
	     */
	    FormBuilder.prototype._reduceControls = function (controlsConfig) {
	        var _this = this;
	        var /** @type {?} */ controls = {};
	        Object.keys(controlsConfig).forEach(function (controlName) {
	            controls[controlName] = _this._createControl(controlsConfig[controlName]);
	        });
	        return controls;
	    };
	    /**
	     * \@internal
	     * @param {?} controlConfig
	     * @return {?}
	     */
	    FormBuilder.prototype._createControl = function (controlConfig) {
	        if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup ||
	            controlConfig instanceof FormArray) {
	            return controlConfig;
	        }
	        else if (Array.isArray(controlConfig)) {
	            var /** @type {?} */ value = controlConfig[0];
	            var /** @type {?} */ validator = controlConfig.length > 1 ? controlConfig[1] : null;
	            var /** @type {?} */ asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
	            return this.control(value, validator, asyncValidator);
	        }
	        else {
	            return this.control(controlConfig);
	        }
	    };
	    return FormBuilder;
	}());
	FormBuilder.decorators = [
	    { type: _angular_core.Injectable },
	];
	/**
	 * @nocollapse
	 */
	FormBuilder.ctorParameters = function () { return []; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * @module
	 * @description
	 * Entry point for all public APIs of the common package.
	 */
	/**
	 * \@stable
	 */
	var VERSION = new _angular_core.Version('4.1.0');
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * \@whatItDoes Adds `novalidate` attribute to all forms by default.
	 *
	 * `novalidate` is used to disable browser's native form validation.
	 *
	 * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
	 *
	 * ```
	 * <form ngNativeValidate></form>
	 * ```
	 *
	 * \@experimental
	 */
	var NgNoValidate = (function () {
	    function NgNoValidate() {
	    }
	    return NgNoValidate;
	}());
	NgNoValidate.decorators = [
	    { type: _angular_core.Directive, args: [{
	                selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
	                host: { 'novalidate': '' },
	            },] },
	];
	/**
	 * @nocollapse
	 */
	NgNoValidate.ctorParameters = function () { return []; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	var SHARED_FORM_DIRECTIVES = [
	    NgNoValidate,
	    NgSelectOption,
	    NgSelectMultipleOption,
	    DefaultValueAccessor,
	    NumberValueAccessor,
	    RangeValueAccessor,
	    CheckboxControlValueAccessor,
	    SelectControlValueAccessor,
	    SelectMultipleControlValueAccessor,
	    RadioControlValueAccessor,
	    NgControlStatus,
	    NgControlStatusGroup,
	    RequiredValidator,
	    MinLengthValidator,
	    MaxLengthValidator,
	    PatternValidator,
	    CheckboxRequiredValidator,
	    EmailValidator,
	];
	var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
	var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
	/**
	 * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
	 */
	var InternalFormsSharedModule = (function () {
	    function InternalFormsSharedModule() {
	    }
	    return InternalFormsSharedModule;
	}());
	InternalFormsSharedModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                declarations: SHARED_FORM_DIRECTIVES,
	                exports: SHARED_FORM_DIRECTIVES,
	            },] },
	];
	/**
	 * @nocollapse
	 */
	InternalFormsSharedModule.ctorParameters = function () { return []; };
	/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
	/**
	 * The ng module for forms.
	 * \@stable
	 */
	var FormsModule = (function () {
	    function FormsModule() {
	    }
	    return FormsModule;
	}());
	FormsModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                declarations: TEMPLATE_DRIVEN_DIRECTIVES,
	                providers: [RadioControlRegistry],
	                exports: [InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	FormsModule.ctorParameters = function () { return []; };
	/**
	 * The ng module for reactive forms.
	 * \@stable
	 */
	var ReactiveFormsModule = (function () {
	    function ReactiveFormsModule() {
	    }
	    return ReactiveFormsModule;
	}());
	ReactiveFormsModule.decorators = [
	    { type: _angular_core.NgModule, args: [{
	                declarations: [REACTIVE_DRIVEN_DIRECTIVES],
	                providers: [FormBuilder, RadioControlRegistry],
	                exports: [InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
	            },] },
	];
	/**
	 * @nocollapse
	 */
	ReactiveFormsModule.ctorParameters = function () { return []; };
	
	exports.AbstractControlDirective = AbstractControlDirective;
	exports.AbstractFormGroupDirective = AbstractFormGroupDirective;
	exports.CheckboxControlValueAccessor = CheckboxControlValueAccessor;
	exports.ControlContainer = ControlContainer;
	exports.NG_VALUE_ACCESSOR = NG_VALUE_ACCESSOR;
	exports.COMPOSITION_BUFFER_MODE = COMPOSITION_BUFFER_MODE;
	exports.DefaultValueAccessor = DefaultValueAccessor;
	exports.NgControl = NgControl;
	exports.NgControlStatus = NgControlStatus;
	exports.NgControlStatusGroup = NgControlStatusGroup;
	exports.NgForm = NgForm;
	exports.NgModel = NgModel;
	exports.NgModelGroup = NgModelGroup;
	exports.RadioControlValueAccessor = RadioControlValueAccessor;
	exports.FormControlDirective = FormControlDirective;
	exports.FormControlName = FormControlName;
	exports.FormGroupDirective = FormGroupDirective;
	exports.FormArrayName = FormArrayName;
	exports.FormGroupName = FormGroupName;
	exports.NgSelectOption = NgSelectOption;
	exports.SelectControlValueAccessor = SelectControlValueAccessor;
	exports.SelectMultipleControlValueAccessor = SelectMultipleControlValueAccessor;
	exports.CheckboxRequiredValidator = CheckboxRequiredValidator;
	exports.EmailValidator = EmailValidator;
	exports.MaxLengthValidator = MaxLengthValidator;
	exports.MinLengthValidator = MinLengthValidator;
	exports.PatternValidator = PatternValidator;
	exports.RequiredValidator = RequiredValidator;
	exports.FormBuilder = FormBuilder;
	exports.AbstractControl = AbstractControl;
	exports.FormArray = FormArray;
	exports.FormControl = FormControl;
	exports.FormGroup = FormGroup;
	exports.NG_ASYNC_VALIDATORS = NG_ASYNC_VALIDATORS;
	exports.NG_VALIDATORS = NG_VALIDATORS;
	exports.Validators = Validators;
	exports.VERSION = VERSION;
	exports.FormsModule = FormsModule;
	exports.ReactiveFormsModule = ReactiveFormsModule;
	exports.ɵba = InternalFormsSharedModule;
	exports.ɵz = REACTIVE_DRIVEN_DIRECTIVES;
	exports.ɵx = SHARED_FORM_DIRECTIVES;
	exports.ɵy = TEMPLATE_DRIVEN_DIRECTIVES;
	exports.ɵa = CHECKBOX_VALUE_ACCESSOR;
	exports.ɵb = DEFAULT_VALUE_ACCESSOR;
	exports.ɵc = AbstractControlStatus;
	exports.ɵd = ngControlStatusHost;
	exports.ɵe = formDirectiveProvider;
	exports.ɵf = formControlBinding;
	exports.ɵg = modelGroupProvider;
	exports.ɵbf = NgNoValidate;
	exports.ɵbb = NUMBER_VALUE_ACCESSOR;
	exports.ɵbc = NumberValueAccessor;
	exports.ɵh = RADIO_VALUE_ACCESSOR;
	exports.ɵi = RadioControlRegistry;
	exports.ɵbd = RANGE_VALUE_ACCESSOR;
	exports.ɵbe = RangeValueAccessor;
	exports.ɵj = formControlBinding$1;
	exports.ɵk = controlNameBinding;
	exports.ɵl = formDirectiveProvider$1;
	exports.ɵn = formArrayNameProvider;
	exports.ɵm = formGroupNameProvider;
	exports.ɵo = SELECT_VALUE_ACCESSOR;
	exports.ɵq = NgSelectMultipleOption;
	exports.ɵp = SELECT_MULTIPLE_VALUE_ACCESSOR;
	exports.ɵs = CHECKBOX_REQUIRED_VALIDATOR;
	exports.ɵt = EMAIL_VALIDATOR;
	exports.ɵv = MAX_LENGTH_VALIDATOR;
	exports.ɵu = MIN_LENGTH_VALIDATOR;
	exports.ɵw = PATTERN_VALIDATOR;
	exports.ɵr = REQUIRED_VALIDATOR;
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	})));
	//# sourceMappingURL=forms.umd.js.map


/***/ }),
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var shared_1 = __webpack_require__(48);
	__webpack_require__(50);
	/*
	 * App Component
	 * Top Level Component
	 */
	var AppComponent = (function () {
	    function AppComponent(api) {
	        this.api = api;
	        this.url = 'https://github.com/preboot/angular2-webpack';
	    }
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(60),
	            styles: [__webpack_require__(61)],
	        }), 
	        __metadata('design:paramtypes', [shared_1.ApiService])
	    ], AppComponent);
	    return AppComponent;
	}());
	exports.AppComponent = AppComponent;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(49));


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var ApiService = (function () {
	    function ApiService() {
	        this.title = 'Angular 2';
	    }
	    ApiService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], ApiService);
	    return ApiService;
	}());
	exports.ApiService = ApiService;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(51);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(59)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./app.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/postcss-loader/index.js!../../node_modules/sass-loader/index.js!./app.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(52)();
	// imports
	exports.i(__webpack_require__(53), "");
	
	// module
	exports.push([module.id, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.scss","sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(52)();
	// imports
	
	
	// module
	exports.push([module.id, "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url(" + __webpack_require__(54) + ");\n  src: url(" + __webpack_require__(54) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(55) + ") format('woff2'), url(" + __webpack_require__(56) + ") format('woff'), url(" + __webpack_require__(57) + ") format('truetype'), url(" + __webpack_require__(58) + "#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n.glyphicon-plus:before {\n  content: \"+\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\A0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  background-color: rgba(0, 0, 0, 0);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n", "", {"version":3,"sources":["/./src/style/bootstrap/css/bootstrap.css"],"names":[],"mappings":"AAAA;;;;GAIG;AACH,4EAA4E;AAC5E;EACE,wBAAwB;EACxB,+BAA+B;MAC3B,2BAA2B;CAChC;AACD;EACE,UAAU;CACX;AACD;;;;;;;;;;;;;EAaE,eAAe;CAChB;AACD;;;;EAIE,sBAAsB;EACtB,yBAAyB;CAC1B;AACD;EACE,cAAc;EACd,UAAU;CACX;AACD;;EAEE,cAAc;CACf;AACD;EACE,8BAA8B;CAC/B;AACD;;EAEE,WAAW;CACZ;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,mBAAmB;EACnB,eAAe;EACf,eAAe;EACf,yBAAyB;CAC1B;AACD;EACE,WAAW;CACZ;AACD;EACE,eAAe;CAChB;AACD;EACE,UAAU;CACX;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,UAAU;EACV,gCAAgC;KAC7B,6BAA6B;UACxB,wBAAwB;CACjC;AACD;EACE,eAAe;CAChB;AACD;;;;EAIE,kCAAkC;EAClC,eAAe;CAChB;AACD;;;;;EAKE,UAAU;EACV,cAAc;EACd,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;;EAEE,qBAAqB;CACtB;AACD;;;;EAIE,2BAA2B;EAC3B,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;CACjB;AACD;;EAEE,WAAW;EACX,UAAU;CACX;AACD;EACE,oBAAoB;CACrB;AACD;;EAEE,+BAA+B;KAC5B,4BAA4B;UACvB,uBAAuB;EAC/B,WAAW;CACZ;AACD;;EAEE,aAAa;CACd;AACD;EACE,gCAAgC;KAC7B,6BAA6B;UACxB,wBAAwB;EAChC,8BAA8B;CAC/B;AACD;;EAEE,yBAAyB;CAC1B;AACD;EACE,4BAA4B;EAC5B,cAAc;EACd,0BAA0B;CAC3B;AACD;EACE,WAAW;EACX,UAAU;CACX;AACD;EACE,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;EAClB,0BAA0B;CAC3B;AACD;;EAEE,WAAW;CACZ;AACD,qFAAqF;AACrF;EACE;;;IAGE,uBAAuB;IACvB,6BAA6B;IAC7B,mCAAmC;IACnC,oCAAoC;YAC5B,4BAA4B;GACrC;EACD;;IAEE,2BAA2B;GAC5B;EACD;IACE,6BAA6B;GAC9B;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,YAAY;GACb;EACD;;IAEE,uBAAuB;;IAEvB,yBAAyB;GAC1B;EACD;IACE,4BAA4B;GAC7B;EACD;;IAEE,yBAAyB;GAC1B;EACD;IACE,2BAA2B;GAC5B;EACD;;;IAGE,WAAW;IACX,UAAU;GACX;EACD;;IAEE,wBAAwB;GACzB;EACD;IACE,cAAc;GACf;EACD;;IAEE,kCAAkC;GACnC;EACD;IACE,uBAAuB;GACxB;EACD;IACE,qCAAqC;GACtC;EACD;;IAEE,kCAAkC;GACnC;EACD;;IAEE,kCAAkC;GACnC;CACF;AACD;EACE,oCAAoC;;EAEpC,mCAAsD;EACtD,2PAAgY;CACjY;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,sBAAsB;EACtB,oCAAoC;EACpC,mBAAmB;EACnB,oBAAoB;EACpB,eAAe;;EAEf,oCAAoC;EACpC,mCAAmC;CACpC;AACD;EACE,aAAiB;CAClB;AACD;EACE,aAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAiB;CAClB;AACD;EACE,eAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,+BAA+B;KAC5B,4BAA4B;UACvB,uBAAuB;CAChC;AACD;;EAEE,+BAA+B;KAC5B,4BAA4B;UACvB,uBAAuB;CAChC;AACD;EACE,gBAAgB;;EAEhB,8CAA8C;CAC/C;AACD;EACE,4DAA4D;EAC5D,gBAAgB;EAChB,wBAAwB;EACxB,YAAY;EACZ,uBAAuB;CACxB;AACD;;;;EAIE,qBAAqB;EACrB,mBAAmB;EACnB,qBAAqB;CACtB;AACD;EACE,eAAe;EACf,sBAAsB;CACvB;AACD;;EAEE,eAAe;EACf,2BAA2B;CAC5B;AACD;EACE,2CAA2C;EAC3C,qBAAqB;CACtB;AACD;EACE,UAAU;CACX;AACD;EACE,uBAAuB;CACxB;AACD;;;;;EAKE,eAAe;EACf,gBAAgB;EAChB,aAAa;CACd;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,wCAAwC;OACnC,mCAAmC;UAChC,gCAAgC;CACzC;AACD;EACE,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,UAAU;EACV,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,uBAAuB;EACvB,UAAU;CACX;AACD;;EAEE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,WAAW;CACZ;AACD;EACE,gBAAgB;CACjB;AACD;;;;;;;;;;;;EAYE,qBAAqB;EACrB,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;CAChB;AACD;;;;;;;;;;;;;;;;;;;;;;;;EAwBE,oBAAoB;EACpB,eAAe;EACf,YAAY;CACb;AACD;;;;;;EAME,iBAAiB;EACjB,oBAAoB;CACrB;AACD;;;;;;;;;;;;EAYE,eAAe;CAChB;AACD;;;;;;EAME,iBAAiB;EACjB,oBAAoB;CACrB;AACD;;;;;;;;;;;;EAYE,eAAe;CAChB;AACD;;EAEE,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE;IACE,gBAAgB;GACjB;CACF;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,cAAc;EACd,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,YAAY;EACZ,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,oBAAoB;EACpB,oBAAoB;EACpB,8BAA8B;CAC/B;AACD;;EAEE,cAAc;EACd,oBAAoB;CACrB;AACD;;;;EAIE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,oBAAoB;CACrB;AACD;;EAEE,wBAAwB;CACzB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE;IACE,YAAY;IACZ,aAAa;IACb,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,wBAAwB;IACxB,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;CACF;AACD;;EAEE,aAAa;EACb,+BAA+B;CAChC;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,kBAAkB;EAClB,4BAA4B;CAC7B;AACD;;;EAGE,iBAAiB;CAClB;AACD;;;EAGE,eAAe;EACf,eAAe;EACf,wBAAwB;EACxB,YAAY;CACb;AACD;;;EAGE,uBAAuB;CACxB;AACD;;EAEE,oBAAoB;EACpB,gBAAgB;EAChB,kBAAkB;EAClB,6BAA6B;EAC7B,eAAe;CAChB;AACD;;;;;;EAME,YAAY;CACb;AACD;;;;;;EAME,uBAAuB;CACxB;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,wBAAwB;CACzB;AACD;;;;EAIE,+DAA+D;CAChE;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,sDAAsD;UAC9C,8CAA8C;CACvD;AACD;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,yBAAyB;UACjB,iBAAiB;CAC1B;AACD;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,wBAAwB;EACxB,YAAY;EACZ,sBAAsB;EACtB,sBAAsB;EACtB,0BAA0B;EAC1B,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,sBAAsB;EACtB,8BAA8B;EAC9B,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE;IACE,aAAa;GACd;CACF;AACD;EACE;IACE,aAAa;GACd;CACF;AACD;EACE;IACE,cAAc;GACf;CACF;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,WAAW;CACZ;AACD;EACE,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;CACb;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,UAAU;CACX;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,WAAW;CACZ;AACD;EACE,kBAAkB;CACnB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,eAAe;CAChB;AACD;EACE;IACE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,WAAW;GACZ;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,kBAAkB;GACnB;EACD;IACE,WAAW;GACZ;EACD;IACE,kBAAkB;GACnB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,yBAAyB;GAC1B;EACD;IACE,eAAe;GAChB;CACF;AACD;EACE;IACE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,WAAW;GACZ;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,kBAAkB;GACnB;EACD;IACE,WAAW;GACZ;EACD;IACE,kBAAkB;GACnB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,yBAAyB;GAC1B;EACD;IACE,eAAe;GAChB;CACF;AACD;EACE;IACE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,oBAAoB;GACrB;EACD;IACE,WAAW;GACZ;EACD;IACE,oBAAoB;GACrB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,YAAY;GACb;EACD;IACE,WAAW;GACZ;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,mBAAmB;GACpB;EACD;IACE,UAAU;GACX;EACD;IACE,mBAAmB;GACpB;EACD;IACE,kBAAkB;GACnB;EACD;IACE,WAAW;GACZ;EACD;IACE,kBAAkB;GACnB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,iBAAiB;GAClB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,yBAAyB;GAC1B;EACD;IACE,eAAe;GAChB;CACF;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;CACrB;AACD;;;;;;EAME,aAAa;EACb,wBAAwB;EACxB,oBAAoB;EACpB,2BAA2B;CAC5B;AACD;EACE,uBAAuB;EACvB,8BAA8B;CAC/B;AACD;;;;;;EAME,cAAc;CACf;AACD;EACE,2BAA2B;CAC5B;AACD;EACE,uBAAuB;CACxB;AACD;;;;;;EAME,aAAa;CACd;AACD;EACE,uBAAuB;CACxB;AACD;;;;;;EAME,uBAAuB;CACxB;AACD;;EAEE,yBAAyB;CAC1B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;EACjB,sBAAsB;EACtB,YAAY;CACb;AACD;;EAEE,iBAAiB;EACjB,oBAAoB;EACpB,YAAY;CACb;AACD;;;;;;;;;;;;EAYE,0BAA0B;CAC3B;AACD;;;;;EAKE,0BAA0B;CAC3B;AACD;;;;;;;;;;;;EAYE,0BAA0B;CAC3B;AACD;;;;;EAKE,0BAA0B;CAC3B;AACD;;;;;;;;;;;;EAYE,0BAA0B;CAC3B;AACD;;;;;EAKE,0BAA0B;CAC3B;AACD;;;;;;;;;;;;EAYE,0BAA0B;CAC3B;AACD;;;;;EAKE,0BAA0B;CAC3B;AACD;;;;;;;;;;;;EAYE,0BAA0B;CAC3B;AACD;;;;;EAKE,0BAA0B;CAC3B;AACD;EACE,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE;IACE,YAAY;IACZ,oBAAoB;IACpB,mBAAmB;IACnB,6CAA6C;IAC7C,uBAAuB;GACxB;EACD;IACE,iBAAiB;GAClB;EACD;;;;;;IAME,oBAAoB;GACrB;EACD;IACE,UAAU;GACX;EACD;;;;;;IAME,eAAe;GAChB;EACD;;;;;;IAME,gBAAgB;GACjB;EACD;;;;IAIE,iBAAiB;GAClB;CACF;AACD;EACE,aAAa;EACb,WAAW;EACX,UAAU;EACV,UAAU;CACX;AACD;EACE,eAAe;EACf,YAAY;EACZ,WAAW;EACX,oBAAoB;EACpB,gBAAgB;EAChB,qBAAqB;EACrB,YAAY;EACZ,UAAU;EACV,iCAAiC;CAClC;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,+BAA+B;KAC5B,4BAA4B;UACvB,uBAAuB;CAChC;AACD;;EAEE,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,YAAY;CACb;AACD;;EAEE,aAAa;CACd;AACD;;;EAGE,2CAA2C;EAC3C,qBAAqB;CACtB;AACD;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,wBAAwB;EACxB,YAAY;CACb;AACD;EACE,eAAe;EACf,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,wBAAwB;EACxB,YAAY;EACZ,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,wDAAwD;UAChD,gDAAgD;EACxD,uFAAuF;OAClF,0EAA0E;UACvE,uEAAuE;CAChF;AACD;EACE,sBAAsB;EACtB,WAAW;EACX,sFAAsF;UAC9E,8EAA8E;CACvF;AACD;EACE,YAAY;EACZ,WAAW;CACZ;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,8BAA8B;EAC9B,UAAU;CACX;AACD;;;EAGE,uBAAuB;EACvB,WAAW;CACZ;AACD;;EAEE,oBAAoB;CACrB;AACD;EACE,aAAa;CACd;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;;;;IAIE,kBAAkB;GACnB;EACD;;;;;;;;IAQE,kBAAkB;GACnB;EACD;;;;;;;;IAQE,kBAAkB;GACnB;CACF;AACD;EACE,oBAAoB;CACrB;AACD;;EAEE,mBAAmB;EACnB,eAAe;EACf,iBAAiB;EACjB,oBAAoB;CACrB;AACD;;EAEE,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,gBAAgB;CACjB;AACD;;;;EAIE,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,mBAAmB;EACnB,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;CACjB;AACD;;EAEE,cAAc;EACd,kBAAkB;CACnB;AACD;;;;;;EAME,oBAAoB;CACrB;AACD;;;;EAIE,oBAAoB;CACrB;AACD;;;;EAIE,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,oBAAoB;EACpB,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;;EAEE,aAAa;CACd;AACD;EACE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;;EAEE,aAAa;CACd;AACD;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;;EAEE,aAAa;CACd;AACD;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,kBAAkB;CACnB;AACD;;EAEE,aAAa;CACd;AACD;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;CACxB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,WAAW;EACX,eAAe;EACf,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,mBAAmB;EACnB,qBAAqB;CACtB;AACD;;;EAGE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;;;EAGE,YAAY;EACZ,aAAa;EACb,kBAAkB;CACnB;AACD;;;;;;;;;;EAUE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,wDAAwD;UAChD,gDAAgD;CACzD;AACD;EACE,sBAAsB;EACtB,yEAAyE;UACjE,iEAAiE;CAC1E;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;CAChB;AACD;;;;;;;;;;EAUE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,wDAAwD;UAChD,gDAAgD;CACzD;AACD;EACE,sBAAsB;EACtB,yEAAyE;UACjE,iEAAiE;CAC1E;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;CAChB;AACD;;;;;;;;;;EAUE,eAAe;CAChB;AACD;EACE,sBAAsB;EACtB,wDAAwD;UAChD,gDAAgD;CACzD;AACD;EACE,sBAAsB;EACtB,yEAAyE;UACjE,iEAAiE;CAC1E;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;CAChB;AACD;EACE,UAAU;CACX;AACD;EACE,OAAO;CACR;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;CAChB;AACD;EACE;IACE,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;GACxB;EACD;IACE,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;GACxB;EACD;IACE,sBAAsB;GACvB;EACD;IACE,sBAAsB;IACtB,uBAAuB;GACxB;EACD;;;IAGE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,iBAAiB;IACjB,uBAAuB;GACxB;EACD;;IAEE,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;GACxB;EACD;;IAEE,gBAAgB;GACjB;EACD;;IAEE,mBAAmB;IACnB,eAAe;GAChB;EACD;IACE,OAAO;GACR;CACF;AACD;;;;EAIE,iBAAiB;EACjB,cAAc;EACd,iBAAiB;CAClB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE;IACE,iBAAiB;IACjB,iBAAiB;IACjB,kBAAkB;GACnB;CACF;AACD;EACE,YAAY;CACb;AACD;EACE;IACE,kBAAkB;IAClB,gBAAgB;GACjB;CACF;AACD;EACE;IACE,iBAAiB;IACjB,gBAAgB;GACjB;CACF;AACD;EACE,sBAAsB;EACtB,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,wBAAwB;EACxB,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,+BAA+B;MAC3B,2BAA2B;EAC/B,gBAAgB;EAChB,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;EAC1B,uBAAuB;EACvB,8BAA8B;EAC9B,mBAAmB;CACpB;AACD;;;;;;EAME,2CAA2C;EAC3C,qBAAqB;CACtB;AACD;;;EAGE,YAAY;EACZ,sBAAsB;CACvB;AACD;;EAEE,uBAAuB;EACvB,WAAW;EACX,wDAAwD;UAChD,gDAAgD;CACzD;AACD;;;EAGE,oBAAoB;EACpB,0BAA0B;EAC1B,yBAAyB;UACjB,iBAAiB;EACzB,aAAa;CACd;AACD;;EAEE,qBAAqB;CACtB;AACD;EACE,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;CACpB;AACD;;EAEE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;;;;EASE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,uBAAuB;CACxB;AACD;;;;;;;;;EASE,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;EAEE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;;;;EASE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,uBAAuB;CACxB;AACD;;;;;;;;;EASE,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;EAEE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;;;;EASE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,uBAAuB;CACxB;AACD;;;;;;;;;EASE,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;EAEE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;;;;EASE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,uBAAuB;CACxB;AACD;;;;;;;;;EASE,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;EAEE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;;;;EASE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,uBAAuB;CACxB;AACD;;;;;;;;;EASE,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;EAEE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;;;;EASE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;EAGE,uBAAuB;CACxB;AACD;;;;;;;;;EASE,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;AACD;;;;;EAKE,8BAA8B;EAC9B,yBAAyB;UACjB,iBAAiB;CAC1B;AACD;;;;EAIE,0BAA0B;CAC3B;AACD;;EAEE,eAAe;EACf,2BAA2B;EAC3B,8BAA8B;CAC/B;AACD;;;;EAIE,YAAY;EACZ,sBAAsB;CACvB;AACD;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;;EAEE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;EAEE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,eAAe;EACf,YAAY;CACb;AACD;EACE,gBAAgB;CACjB;AACD;;;EAGE,YAAY;CACb;AACD;EACE,WAAW;EACX,wCAAwC;OACnC,mCAAmC;UAChC,gCAAgC;CACzC;AACD;EACE,WAAW;CACZ;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,yCAAyC;OACpC,oCAAoC;UACjC,iCAAiC;EACzC,kCAAkC;OAC7B,6BAA6B;UAC1B,0BAA0B;EAClC,gDAAgD;OAC3C,2CAA2C;UACxC,wCAAwC;CACjD;AACD;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,iBAAiB;EACjB,uBAAuB;EACvB,uBAAuB;EACvB,yBAAyB;EACzB,oCAAoC;EACpC,mCAAmC;CACpC;AACD;;EAEE,mBAAmB;CACpB;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,cAAc;EACd,cAAc;EACd,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;EACjB,uBAAuB;EACvB,qCAAqC;UAC7B,6BAA6B;EACrC,uBAAuB;EACvB,qCAAqC;EACrC,mBAAmB;EACnB,mDAAmD;UAC3C,2CAA2C;CACpD;AACD;EACE,SAAS;EACT,WAAW;CACZ;AACD;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,oBAAoB;EACpB,wBAAwB;EACxB,YAAY;EACZ,oBAAoB;CACrB;AACD;;EAEE,eAAe;EACf,sBAAsB;EACtB,0BAA0B;CAC3B;AACD;;;EAGE,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,WAAW;CACZ;AACD;;;EAGE,YAAY;CACb;AACD;;EAEE,sBAAsB;EACtB,oBAAoB;EACpB,8BAA8B;EAC9B,uBAAuB;EACvB,oEAAoE;CACrE;AACD;EACE,eAAe;CAChB;AACD;EACE,WAAW;CACZ;AACD;EACE,SAAS;EACT,WAAW;CACZ;AACD;EACE,YAAY;EACZ,QAAQ;CACT;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,wBAAwB;EACxB,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,aAAa;CACd;AACD;EACE,SAAS;EACT,WAAW;CACZ;AACD;;EAEE,YAAY;EACZ,cAAc;EACd,0BAA0B;EAC1B,4BAA4B;CAC7B;AACD;;EAEE,UAAU;EACV,aAAa;EACb,mBAAmB;CACpB;AACD;EACE;IACE,SAAS;IACT,WAAW;GACZ;EACD;IACE,YAAY;IACZ,QAAQ;GACT;CACF;AACD;;EAEE,mBAAmB;EACnB,sBAAsB;EACtB,uBAAuB;CACxB;AACD;;EAEE,mBAAmB;EACnB,YAAY;CACb;AACD;;;;;;;;EAQE,WAAW;CACZ;AACD;;;;EAIE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;;;EAGE,YAAY;CACb;AACD;;;EAGE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,2BAA2B;EAC3B,8BAA8B;CAC/B;AACD;;EAEE,0BAA0B;EAC1B,6BAA6B;CAC9B;AACD;EACE,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,2BAA2B;EAC3B,8BAA8B;CAC/B;AACD;EACE,0BAA0B;EAC1B,6BAA6B;CAC9B;AACD;;EAEE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,wDAAwD;UAChD,gDAAgD;CACzD;AACD;EACE,yBAAyB;UACjB,iBAAiB;CAC1B;AACD;EACE,eAAe;CAChB;AACD;EACE,wBAAwB;EACxB,uBAAuB;CACxB;AACD;EACE,wBAAwB;CACzB;AACD;;;EAGE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,YAAY;CACb;AACD;;;;EAIE,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,4BAA4B;EAC5B,6BAA6B;EAC7B,8BAA8B;EAC9B,6BAA6B;CAC9B;AACD;EACE,0BAA0B;EAC1B,2BAA2B;EAC3B,gCAAgC;EAChC,+BAA+B;CAChC;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,8BAA8B;EAC9B,6BAA6B;CAC9B;AACD;EACE,0BAA0B;EAC1B,2BAA2B;CAC5B;AACD;EACE,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;;EAEE,oBAAoB;EACpB,YAAY;EACZ,UAAU;CACX;AACD;EACE,YAAY;CACb;AACD;EACE,WAAW;CACZ;AACD;;;;EAIE,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,WAAW;CACZ;AACD;;;EAGE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;;;EAGE,aAAa;EACb,kBAAkB;CACnB;AACD;;;;;;EAME,aAAa;CACd;AACD;;;EAGE,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;CACpB;AACD;;;EAGE,aAAa;EACb,kBAAkB;CACnB;AACD;;;;;;EAME,aAAa;CACd;AACD;;;EAGE,oBAAoB;CACrB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;EAEE,UAAU;EACV,oBAAoB;EACpB,uBAAuB;CACxB;AACD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,oBAAoB;EACpB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,mBAAmB;CACpB;AACD;;EAEE,cAAc;CACf;AACD;;;;;;;EAOE,2BAA2B;EAC3B,8BAA8B;CAC/B;AACD;EACE,gBAAgB;CACjB;AACD;;;;;;;EAOE,0BAA0B;EAC1B,6BAA6B;CAC9B;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;;;EAGE,WAAW;CACZ;AACD;;EAEE,mBAAmB;CACpB;AACD;;EAEE,WAAW;EACX,kBAAkB;CACnB;AACD;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;CACpB;AACD;;EAEE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;EACE,YAAY;CACb;AACD;;EAEE,YAAY;EACZ,sBAAsB;EACtB,oBAAoB;EACpB,8BAA8B;CAC/B;AACD;;;EAGE,uBAAuB;EACvB,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,cAAc;EACd,iBAAiB;EACjB,0BAA0B;CAC3B;AACD;EACE,gBAAgB;CACjB;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,YAAY;EACZ,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,wBAAwB;EACxB,8BAA8B;EAC9B,2BAA2B;CAC5B;AACD;EACE,6BAA6B;CAC9B;AACD;;;EAGE,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,uBAAuB;EACvB,iCAAiC;CAClC;AACD;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE;IACE,oBAAoB;IACpB,UAAU;GACX;EACD;IACE,iBAAiB;GAClB;CACF;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;;;EAGE,uBAAuB;CACxB;AACD;EACE;IACE,8BAA8B;IAC9B,2BAA2B;GAC5B;EACD;;;IAGE,0BAA0B;GAC3B;CACF;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;CACpB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE;IACE,oBAAoB;IACpB,UAAU;GACX;EACD;IACE,iBAAiB;GAClB;CACF;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;;;EAGE,uBAAuB;CACxB;AACD;EACE;IACE,8BAA8B;IAC9B,2BAA2B;GAC5B;EACD;;;IAGE,0BAA0B;GAC3B;CACF;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,oBAAoB;EACpB,8BAA8B;CAC/B;AACD;EACE;IACE,mBAAmB;GACpB;CACF;AACD;EACE;IACE,YAAY;GACb;CACF;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;EACpB,kCAAkC;EAClC,kCAAkC;EAClC,0DAA0D;UAClD,kDAAkD;CAC3D;AACD;EACE,iBAAiB;CAClB;AACD;EACE;IACE,YAAY;IACZ,cAAc;IACd,yBAAyB;YACjB,iBAAiB;GAC1B;EACD;IACE,0BAA0B;IAC1B,wBAAwB;IACxB,kBAAkB;IAClB,6BAA6B;GAC9B;EACD;IACE,oBAAoB;GACrB;EACD;;;IAGE,iBAAiB;IACjB,gBAAgB;GACjB;CACF;AACD;;EAEE,kBAAkB;CACnB;AACD;EACE;;IAEE,kBAAkB;GACnB;CACF;AACD;;;;EAIE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE;;;;IAIE,gBAAgB;IAChB,eAAe;GAChB;CACF;AACD;EACE,cAAc;EACd,sBAAsB;CACvB;AACD;EACE;IACE,iBAAiB;GAClB;CACF;AACD;;EAEE,gBAAgB;EAChB,SAAS;EACT,QAAQ;EACR,cAAc;CACf;AACD;EACE;;IAEE,iBAAiB;GAClB;CACF;AACD;EACE,OAAO;EACP,sBAAsB;CACvB;AACD;EACE,UAAU;EACV,iBAAiB;EACjB,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;CACnB;AACD;;EAEE,sBAAsB;CACvB;AACD;EACE,eAAe;CAChB;AACD;EACE;;IAEE,mBAAmB;GACpB;CACF;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,uBAAuB;EACvB,8BAA8B;EAC9B,mBAAmB;CACpB;AACD;EACE,WAAW;CACZ;AACD;EACE,eAAe;EACf,YAAY;EACZ,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE;IACE,cAAc;GACf;CACF;AACD;EACE,oBAAoB;CACrB;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,kBAAkB;CACnB;AACD;EACE;IACE,iBAAiB;IACjB,YAAY;IACZ,YAAY;IACZ,cAAc;IACd,8BAA8B;IAC9B,UAAU;IACV,yBAAyB;YACjB,iBAAiB;GAC1B;EACD;;IAEE,2BAA2B;GAC5B;EACD;IACE,kBAAkB;GACnB;EACD;;IAEE,uBAAuB;GACxB;CACF;AACD;EACE;IACE,YAAY;IACZ,UAAU;GACX;EACD;IACE,YAAY;GACb;EACD;IACE,kBAAkB;IAClB,qBAAqB;GACtB;CACF;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,kCAAkC;EAClC,qCAAqC;EACrC,2FAA2F;UACnF,mFAAmF;CAC5F;AACD;EACE;IACE,sBAAsB;IACtB,iBAAiB;IACjB,uBAAuB;GACxB;EACD;IACE,sBAAsB;IACtB,YAAY;IACZ,uBAAuB;GACxB;EACD;IACE,sBAAsB;GACvB;EACD;IACE,sBAAsB;IACtB,uBAAuB;GACxB;EACD;;;IAGE,YAAY;GACb;EACD;IACE,YAAY;GACb;EACD;IACE,iBAAiB;IACjB,uBAAuB;GACxB;EACD;;IAEE,sBAAsB;IACtB,cAAc;IACd,iBAAiB;IACjB,uBAAuB;GACxB;EACD;;IAEE,gBAAgB;GACjB;EACD;;IAEE,mBAAmB;IACnB,eAAe;GAChB;EACD;IACE,OAAO;GACR;CACF;AACD;EACE;IACE,mBAAmB;GACpB;EACD;IACE,iBAAiB;GAClB;CACF;AACD;EACE;IACE,YAAY;IACZ,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,UAAU;IACV,yBAAyB;YACjB,iBAAiB;GAC1B;CACF;AACD;EACE,cAAc;EACd,0BAA0B;EAC1B,2BAA2B;CAC5B;AACD;EACE,iBAAiB;EACjB,4BAA4B;EAC5B,6BAA6B;EAC7B,8BAA8B;EAC9B,6BAA6B;CAC9B;AACD;EACE,gBAAgB;EAChB,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE;IACE,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;GACnB;CACF;AACD;EACE;IACE,uBAAuB;GACxB;EACD;IACE,wBAAwB;IACxB,oBAAoB;GACrB;EACD;IACE,gBAAgB;GACjB;CACF;AACD;EACE,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,YAAY;CACb;AACD;;EAEE,eAAe;EACf,8BAA8B;CAC/B;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;;EAEE,YAAY;EACZ,8BAA8B;CAC/B;AACD;;;EAGE,YAAY;EACZ,0BAA0B;CAC3B;AACD;;;EAGE,YAAY;EACZ,8BAA8B;CAC/B;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;;EAEE,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE;IACE,YAAY;GACb;EACD;;IAEE,YAAY;IACZ,8BAA8B;GAC/B;EACD;;;IAGE,YAAY;IACZ,0BAA0B;GAC3B;EACD;;;IAGE,YAAY;IACZ,8BAA8B;GAC/B;CACF;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;;EAEE,YAAY;CACb;AACD;;;;EAIE,YAAY;CACb;AACD;EACE,uBAAuB;EACvB,sBAAsB;CACvB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,YAAY;EACZ,8BAA8B;CAC/B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;;EAEE,YAAY;EACZ,8BAA8B;CAC/B;AACD;;;EAGE,YAAY;EACZ,0BAA0B;CAC3B;AACD;;;EAGE,YAAY;EACZ,8BAA8B;CAC/B;AACD;EACE,mBAAmB;CACpB;AACD;;EAEE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;;EAEE,sBAAsB;CACvB;AACD;;;EAGE,YAAY;EACZ,0BAA0B;CAC3B;AACD;EACE;IACE,sBAAsB;GACvB;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,eAAe;GAChB;EACD;;IAEE,YAAY;IACZ,8BAA8B;GAC/B;EACD;;;IAGE,YAAY;IACZ,0BAA0B;GAC3B;EACD;;;IAGE,YAAY;IACZ,8BAA8B;GAC/B;CACF;AACD;EACE,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;CAChB;AACD;;EAEE,YAAY;CACb;AACD;;;;EAIE,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,YAAY;EACZ,gBAAkB;CACnB;AACD;EACE,YAAY;CACb;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,eAAe;EACf,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;;EAEE,mBAAmB;EACnB,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,wBAAwB;EACxB,eAAe;EACf,sBAAsB;EACtB,uBAAuB;EACvB,uBAAuB;CACxB;AACD;;EAEE,eAAe;EACf,4BAA4B;EAC5B,+BAA+B;CAChC;AACD;;EAEE,6BAA6B;EAC7B,gCAAgC;CACjC;AACD;;;;EAIE,WAAW;EACX,eAAe;EACf,uBAAuB;EACvB,mBAAmB;CACpB;AACD;;;;;;EAME,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;EAME,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;;EAEE,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;CACxB;AACD;;EAEE,4BAA4B;EAC5B,+BAA+B;CAChC;AACD;;EAEE,6BAA6B;EAC7B,gCAAgC;CACjC;AACD;;EAEE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;;EAEE,4BAA4B;EAC5B,+BAA+B;CAChC;AACD;;EAEE,6BAA6B;EAC7B,gCAAgC;CACjC;AACD;EACE,gBAAgB;EAChB,eAAe;EACf,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;;EAEE,sBAAsB;EACtB,kBAAkB;EAClB,uBAAuB;EACvB,uBAAuB;EACvB,oBAAoB;CACrB;AACD;;EAEE,sBAAsB;EACtB,uBAAuB;CACxB;AACD;;EAEE,aAAa;CACd;AACD;;EAEE,YAAY;CACb;AACD;;;;EAIE,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;CACxB;AACD;EACE,gBAAgB;EAChB,wBAAwB;EACxB,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,yBAAyB;EACzB,qBAAqB;CACtB;AACD;;EAEE,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;CACjB;AACD;EACE,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,UAAU;CACX;AACD;EACE,uBAAuB;CACxB;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,0BAA0B;CAC3B;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,uBAAuB;EACvB,oBAAoB;CACrB;AACD;EACE,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,UAAU;CACX;AACD;;EAEE,OAAO;EACP,iBAAiB;CAClB;AACD;;EAEE,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;CACjB;AACD;;EAEE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,oBAAoB;EACpB,eAAe;EACf,uBAAuB;CACxB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,0BAA0B;CAC3B;AACD;;EAEE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE;IACE,kBAAkB;IAClB,qBAAqB;GACtB;EACD;;IAEE,oBAAoB;IACpB,mBAAmB;GACpB;EACD;;IAEE,gBAAgB;GACjB;CACF;AACD;EACE,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,wBAAwB;EACxB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,2CAA2C;OACtC,sCAAsC;UACnC,mCAAmC;CAC5C;AACD;;EAEE,mBAAmB;EACnB,kBAAkB;CACnB;AACD;;;EAGE,sBAAsB;CACvB;AACD;EACE,aAAa;EACb,YAAY;CACb;AACD;EACE,cAAc;EACd,oBAAoB;EACpB,8BAA8B;EAC9B,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,eAAe;CAChB;AACD;EACE,kBAAkB;CACnB;AACD;;EAEE,iBAAiB;CAClB;AACD;EACE,gBAAgB;CACjB;AACD;;EAEE,oBAAoB;CACrB;AACD;;EAEE,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;CAChB;AACD;EACE;IACE,4BAA4B;GAC7B;EACD;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,4BAA4B;GAC7B;EACD;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,4BAA4B;GAC7B;EACD;IACE,yBAAyB;GAC1B;CACF;AACD;EACE,aAAa;EACb,oBAAoB;EACpB,iBAAiB;EACjB,0BAA0B;EAC1B,mBAAmB;EACnB,sDAAsD;UAC9C,8CAA8C;CACvD;AACD;EACE,YAAY;EACZ,SAAS;EACT,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,0BAA0B;EAC1B,sDAAsD;UAC9C,8CAA8C;EACtD,mCAAmC;OAC9B,8BAA8B;UAC3B,2BAA2B;CACpC;AACD;;EAEE,2MAA2M;EAC3M,2MAA2M;EAC3M,2MAA2M;EAC3M,mCAAmC;UAC3B,2BAA2B;CACpC;AACD;;EAEE,2DAA2D;OACtD,sDAAsD;UACnD,mDAAmD;CAC5D;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2MAA2M;EAC3M,2MAA2M;EAC3M,2MAA2M;CAC5M;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2MAA2M;EAC3M,2MAA2M;EAC3M,2MAA2M;CAC5M;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2MAA2M;EAC3M,2MAA2M;EAC3M,2MAA2M;CAC5M;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,2MAA2M;EAC3M,2MAA2M;EAC3M,2MAA2M;CAC5M;AACD;EACE,iBAAiB;CAClB;AACD;EACE,cAAc;CACf;AACD;;EAEE,iBAAiB;EACjB,QAAQ;CACT;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;;EAEE,mBAAmB;CACpB;AACD;;EAEE,oBAAoB;CACrB;AACD;;;EAGE,oBAAoB;EACpB,oBAAoB;CACrB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,mBAAmB;EACnB,oBAAoB;EACpB,uBAAuB;EACvB,uBAAuB;CACxB;AACD;EACE,4BAA4B;EAC5B,6BAA6B;CAC9B;AACD;EACE,iBAAiB;EACjB,gCAAgC;EAChC,+BAA+B;CAChC;AACD;;EAEE,YAAY;CACb;AACD;;EAEE,YAAY;CACb;AACD;;;;EAIE,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;CAC3B;AACD;EACE,YAAY;EACZ,iBAAiB;CAClB;AACD;;;EAGE,YAAY;EACZ,oBAAoB;EACpB,uBAAuB;CACxB;AACD;;;EAGE,eAAe;CAChB;AACD;;;EAGE,YAAY;CACb;AACD;;;EAGE,WAAW;EACX,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;;;;;;;;;EASE,eAAe;CAChB;AACD;;;EAGE,eAAe;CAChB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;;;;EAIE,eAAe;EACf,0BAA0B;CAC3B;AACD;;;;;;EAME,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;;;;EAIE,eAAe;EACf,0BAA0B;CAC3B;AACD;;;;;;EAME,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;;;;EAIE,eAAe;EACf,0BAA0B;CAC3B;AACD;;;;;;EAME,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;;;;EAIE,eAAe;EACf,0BAA0B;CAC3B;AACD;;;;;;EAME,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,uBAAuB;EACvB,8BAA8B;EAC9B,mBAAmB;EACnB,iDAAiD;UACzC,yCAAyC;CAClD;AACD;EACE,cAAc;CACf;AACD;EACE,mBAAmB;EACnB,qCAAqC;EACrC,4BAA4B;EAC5B,6BAA6B;CAC9B;AACD;EACE,eAAe;CAChB;AACD;EACE,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;CAChB;AACD;;;;;EAKE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,0BAA0B;EAC1B,2BAA2B;EAC3B,gCAAgC;EAChC,+BAA+B;CAChC;AACD;;EAEE,iBAAiB;CAClB;AACD;;EAEE,oBAAoB;EACpB,iBAAiB;CAClB;AACD;;EAEE,cAAc;EACd,4BAA4B;EAC5B,6BAA6B;CAC9B;AACD;;EAEE,iBAAiB;EACjB,gCAAgC;EAChC,+BAA+B;CAChC;AACD;EACE,0BAA0B;EAC1B,2BAA2B;CAC5B;AACD;EACE,oBAAoB;CACrB;AACD;EACE,oBAAoB;CACrB;AACD;;;EAGE,iBAAiB;CAClB;AACD;;;EAGE,oBAAoB;EACpB,mBAAmB;CACpB;AACD;;EAEE,4BAA4B;EAC5B,6BAA6B;CAC9B;AACD;;;;EAIE,4BAA4B;EAC5B,6BAA6B;CAC9B;AACD;;;;;;;;EAQE,4BAA4B;CAC7B;AACD;;;;;;;;EAQE,6BAA6B;CAC9B;AACD;;EAEE,gCAAgC;EAChC,+BAA+B;CAChC;AACD;;;;EAIE,gCAAgC;EAChC,+BAA+B;CAChC;AACD;;;;;;;;EAQE,+BAA+B;CAChC;AACD;;;;;;;;EAQE,gCAAgC;CACjC;AACD;;;;EAIE,2BAA2B;CAC5B;AACD;;EAEE,cAAc;CACf;AACD;;EAEE,UAAU;CACX;AACD;;;;;;;;;;;;EAYE,eAAe;CAChB;AACD;;;;;;;;;;;;EAYE,gBAAgB;CACjB;AACD;;;;;;;;EAQE,iBAAiB;CAClB;AACD;;;;;;;;EAQE,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,UAAU;CACX;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,mBAAmB;CACpB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;;EAEE,2BAA2B;CAC5B;AACD;EACE,cAAc;CACf;AACD;EACE,8BAA8B;CAC/B;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,YAAY;EACZ,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,sBAAsB;CACvB;AACD;EACE,eAAe;EACf,0BAA0B;EAC1B,sBAAsB;CACvB;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,eAAe;EACf,UAAU;EACV,WAAW;EACX,iBAAiB;CAClB;AACD;;;;;EAKE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,UAAU;CACX;AACD;EACE,uBAAuB;CACxB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,iBAAiB;EACjB,cAAc;EACd,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,mBAAmB;EACnB,uDAAuD;UAC/C,+CAA+C;CACxD;AACD;EACE,mBAAmB;EACnB,iCAAiC;CAClC;AACD;EACE,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,0BAA0B;EAC1B,0BAA0B;EAC1B,YAAY;CACb;AACD;;EAEE,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;EAChB,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,yBAAyB;EACzB,WAAW;EACX,gBAAgB;EAChB,wBAAwB;EACxB,UAAU;CACX;AACD;EACE,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,kCAAkC;EAClC,WAAW;CACZ;AACD;EACE,mDAAmD;OAC9C,8CAA8C;UAC3C,2CAA2C;EACnD,sCAAsC;MAClC,kCAAkC;OACjC,iCAAiC;UAC9B,8BAA8B;CACvC;AACD;EACE,mCAAmC;MAC/B,+BAA+B;OAC9B,8BAA8B;UAC3B,2BAA2B;CACpC;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;CACd;AACD;EACE,mBAAmB;EACnB,uBAAuB;EACvB,qCAAqC;UAC7B,6BAA6B;EACrC,uBAAuB;EACvB,oCAAoC;EACpC,mBAAmB;EACnB,WAAW;EACX,gDAAgD;UACxC,wCAAwC;CACjD;AACD;EACE,gBAAgB;EAChB,OAAO;EACP,SAAS;EACT,UAAU;EACV,QAAQ;EACR,cAAc;EACd,uBAAuB;CACxB;AACD;EACE,yBAAyB;EACzB,WAAW;CACZ;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,cAAc;EACd,iCAAiC;CAClC;AACD;EACE,iBAAiB;CAClB;AACD;EACE,UAAU;EACV,wBAAwB;CACzB;AACD;EACE,mBAAmB;EACnB,cAAc;CACf;AACD;EACE,cAAc;EACd,kBAAkB;EAClB,8BAA8B;CAC/B;AACD;EACE,iBAAiB;EACjB,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,aAAa;EACb,iBAAiB;CAClB;AACD;EACE;IACE,aAAa;IACb,kBAAkB;GACnB;EACD;IACE,iDAAiD;YACzC,yCAAyC;GAClD;EACD;IACE,aAAa;GACd;CACF;AACD;EACE;IACE,aAAa;GACd;CACF;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,4DAA4D;EAC5D,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,yBAAyB;EACzB,WAAW;;EAEX,iBAAiB;CAClB;AACD;EACE,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,iBAAiB;EACjB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,UAAU;EACV,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,uBAAuB;CACxB;AACD;EACE,WAAW;EACX,UAAU;EACV,oBAAoB;EACpB,wBAAwB;EACxB,uBAAuB;CACxB;AACD;EACE,UAAU;EACV,UAAU;EACV,oBAAoB;EACpB,wBAAwB;EACxB,uBAAuB;CACxB;AACD;EACE,SAAS;EACT,QAAQ;EACR,iBAAiB;EACjB,4BAA4B;EAC5B,yBAAyB;CAC1B;AACD;EACE,SAAS;EACT,SAAS;EACT,iBAAiB;EACjB,4BAA4B;EAC5B,wBAAwB;CACzB;AACD;EACE,OAAO;EACP,UAAU;EACV,kBAAkB;EAClB,wBAAwB;EACxB,0BAA0B;CAC3B;AACD;EACE,OAAO;EACP,WAAW;EACX,iBAAiB;EACjB,wBAAwB;EACxB,0BAA0B;CAC3B;AACD;EACE,OAAO;EACP,UAAU;EACV,iBAAiB;EACjB,wBAAwB;EACxB,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,cAAc;EACd,cAAc;EACd,iBAAiB;EACjB,aAAa;EACb,4DAA4D;EAC5D,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;EACpB,wBAAwB;EACxB,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,uBAAuB;EACvB,qCAAqC;UAC7B,6BAA6B;EACrC,uBAAuB;EACvB,oCAAoC;EACpC,mBAAmB;EACnB,iDAAiD;UACzC,yCAAyC;;EAEjD,iBAAiB;CAClB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;EAChB,0BAA0B;EAC1B,iCAAiC;EACjC,2BAA2B;CAC5B;AACD;EACE,kBAAkB;CACnB;AACD;;EAEE,mBAAmB;EACnB,eAAe;EACf,SAAS;EACT,UAAU;EACV,0BAA0B;EAC1B,oBAAoB;CACrB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,cAAc;EACd,UAAU;EACV,mBAAmB;EACnB,uBAAuB;EACvB,qCAAqC;EACrC,uBAAuB;CACxB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,uBAAuB;CACxB;AACD;EACE,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,uCAAuC;EACvC,qBAAqB;CACtB;AACD;EACE,cAAc;EACd,UAAU;EACV,aAAa;EACb,yBAAyB;EACzB,qBAAqB;CACtB;AACD;EACE,WAAW;EACX,UAAU;EACV,mBAAmB;EACnB,oBAAoB;EACpB,0BAA0B;EAC1B,wCAAwC;CACzC;AACD;EACE,SAAS;EACT,mBAAmB;EACnB,aAAa;EACb,oBAAoB;EACpB,0BAA0B;CAC3B;AACD;EACE,SAAS;EACT,aAAa;EACb,kBAAkB;EAClB,sBAAsB;EACtB,wBAAwB;EACxB,sCAAsC;CACvC;AACD;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,sBAAsB;EACtB,wBAAwB;CACzB;AACD;EACE,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,yCAAyC;OACpC,oCAAoC;UACjC,iCAAiC;CAC1C;AACD;;EAEE,eAAe;CAChB;AACD;EACE;IACE,sDAAsD;SACjD,iDAAiD;YAC9C,8CAA8C;;IAEtD,oCAAoC;YAC5B,4BAA4B;IACpC,4BAA4B;YACpB,oBAAoB;GAC7B;EACD;;IAEE,QAAQ;IACR,2CAA2C;YACnC,mCAAmC;GAC5C;EACD;;IAEE,QAAQ;IACR,4CAA4C;YACpC,oCAAoC;GAC7C;EACD;;;IAGE,QAAQ;IACR,wCAAwC;YAChC,gCAAgC;GACzC;CACF;AACD;;;EAGE,eAAe;CAChB;AACD;EACE,QAAQ;CACT;AACD;;EAEE,mBAAmB;EACnB,OAAO;EACP,YAAY;CACb;AACD;EACE,WAAW;CACZ;AACD;EACE,YAAY;CACb;AACD;;EAEE,QAAQ;CACT;AACD;EACE,YAAY;CACb;AACD;EACE,WAAW;CACZ;AACD;EACE,mBAAmB;EACnB,OAAO;EACP,UAAU;EACV,QAAQ;EACR,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,yCAAyC;EACzC,mCAAmC;EACnC,0BAA0B;EAC1B,YAAY;CACb;AACD;EACE,iGAAiG;EACjG,iGAAiG;EACjG,mHAAmH;EACnH,qGAAqG;EACrG,uHAAuH;EACvH,4BAA4B;CAC7B;AACD;EACE,SAAS;EACT,WAAW;EACX,iGAAiG;EACjG,iGAAiG;EACjG,mHAAmH;EACnH,qGAAqG;EACrG,uHAAuH;EACvH,4BAA4B;CAC7B;AACD;;EAEE,YAAY;EACZ,sBAAsB;EACtB,0BAA0B;EAC1B,WAAW;EACX,YAAY;CACb;AACD;;;;EAIE,mBAAmB;EACnB,SAAS;EACT,WAAW;EACX,sBAAsB;EACtB,kBAAkB;CACnB;AACD;;EAEE,UAAU;EACV,mBAAmB;CACpB;AACD;;EAEE,WAAW;EACX,oBAAoB;CACrB;AACD;;EAEE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,iBAAiB;CAClB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,UAAU;EACV,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,oBAAoB;EACpB,gBAAgB;EAChB,0BAA0B;EAC1B,mCAAmC;EACnC,uBAAuB;EACvB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,YAAY;EACZ,mBAAmB;EACnB,yCAAyC;CAC1C;AACD;EACE,kBAAkB;CACnB;AACD;EACE;;;;IAIE,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,gBAAgB;GACjB;EACD;;IAEE,mBAAmB;GACpB;EACD;;IAEE,oBAAoB;GACrB;EACD;IACE,WAAW;IACX,UAAU;IACV,qBAAqB;GACtB;EACD;IACE,aAAa;GACd;CACF;AACD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAgCE,eAAe;EACf,aAAa;CACd;AACD;;;;;;;;;;;;;;;;EAgBE,YAAY;CACb;AACD;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,wBAAwB;CACzB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,8BAA8B;EAC9B,UAAU;CACX;AACD;EACE,yBAAyB;CAC1B;AACD;EACE,gBAAgB;CACjB;AACD;EACE,oBAAoB;CACrB;AACD;;;;EAIE,yBAAyB;CAC1B;AACD;;;;;;;;;;;;EAYE,yBAAyB;CAC1B;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,0BAA0B;GAC3B;EACD;IACE,0BAA0B;GAC3B;EACD;IACE,8BAA8B;GAC/B;EACD;;IAEE,+BAA+B;GAChC;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,0BAA0B;GAC3B;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,2BAA2B;GAC5B;CACF;AACD;EACE,yBAAyB;CAC1B;AACD;EACE;IACE,iCAAiC;GAClC;CACF;AACD;EACE;IACE,yBAAyB;GAC1B;CACF;AACD,yCAAyC","file":"bootstrap.css","sourcesContent":["/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: content-box;\n     -moz-box-sizing: content-box;\n          box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url('../fonts/glyphicons-halflings-regular.eot');\n  src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), url('../fonts/glyphicons-halflings-regular.woff2') format('woff2'), url('../fonts/glyphicons-halflings-regular.woff') format('woff'), url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'), url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"\\002a\";\n}\n.glyphicon-plus:before {\n  content: \"\\002b\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270f\";\n}\n.glyphicon-glass:before {\n  content: \"\\e001\";\n}\n.glyphicon-music:before {\n  content: \"\\e002\";\n}\n.glyphicon-search:before {\n  content: \"\\e003\";\n}\n.glyphicon-heart:before {\n  content: \"\\e005\";\n}\n.glyphicon-star:before {\n  content: \"\\e006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\e007\";\n}\n.glyphicon-user:before {\n  content: \"\\e008\";\n}\n.glyphicon-film:before {\n  content: \"\\e009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\e010\";\n}\n.glyphicon-th:before {\n  content: \"\\e011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\e012\";\n}\n.glyphicon-ok:before {\n  content: \"\\e013\";\n}\n.glyphicon-remove:before {\n  content: \"\\e014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\e015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\e016\";\n}\n.glyphicon-off:before {\n  content: \"\\e017\";\n}\n.glyphicon-signal:before {\n  content: \"\\e018\";\n}\n.glyphicon-cog:before {\n  content: \"\\e019\";\n}\n.glyphicon-trash:before {\n  content: \"\\e020\";\n}\n.glyphicon-home:before {\n  content: \"\\e021\";\n}\n.glyphicon-file:before {\n  content: \"\\e022\";\n}\n.glyphicon-time:before {\n  content: \"\\e023\";\n}\n.glyphicon-road:before {\n  content: \"\\e024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\e025\";\n}\n.glyphicon-download:before {\n  content: \"\\e026\";\n}\n.glyphicon-upload:before {\n  content: \"\\e027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\e028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\e029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\e030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\e031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\e032\";\n}\n.glyphicon-lock:before {\n  content: \"\\e033\";\n}\n.glyphicon-flag:before {\n  content: \"\\e034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\e035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\e036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\e037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\e038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\e039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\e040\";\n}\n.glyphicon-tag:before {\n  content: \"\\e041\";\n}\n.glyphicon-tags:before {\n  content: \"\\e042\";\n}\n.glyphicon-book:before {\n  content: \"\\e043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\e044\";\n}\n.glyphicon-print:before {\n  content: \"\\e045\";\n}\n.glyphicon-camera:before {\n  content: \"\\e046\";\n}\n.glyphicon-font:before {\n  content: \"\\e047\";\n}\n.glyphicon-bold:before {\n  content: \"\\e048\";\n}\n.glyphicon-italic:before {\n  content: \"\\e049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\e050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\e051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\e052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\e053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\e054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\e055\";\n}\n.glyphicon-list:before {\n  content: \"\\e056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\e057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\e058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\e059\";\n}\n.glyphicon-picture:before {\n  content: \"\\e060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\e062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\e063\";\n}\n.glyphicon-tint:before {\n  content: \"\\e064\";\n}\n.glyphicon-edit:before {\n  content: \"\\e065\";\n}\n.glyphicon-share:before {\n  content: \"\\e066\";\n}\n.glyphicon-check:before {\n  content: \"\\e067\";\n}\n.glyphicon-move:before {\n  content: \"\\e068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\e069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\e070\";\n}\n.glyphicon-backward:before {\n  content: \"\\e071\";\n}\n.glyphicon-play:before {\n  content: \"\\e072\";\n}\n.glyphicon-pause:before {\n  content: \"\\e073\";\n}\n.glyphicon-stop:before {\n  content: \"\\e074\";\n}\n.glyphicon-forward:before {\n  content: \"\\e075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\e076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\e077\";\n}\n.glyphicon-eject:before {\n  content: \"\\e078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\e079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\e080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\e081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\e082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\e083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\e084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\e085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\e086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\e087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\e088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\e089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\e090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\e091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\e092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\e093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\e094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\e095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\e096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\e097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\";\n}\n.glyphicon-gift:before {\n  content: \"\\e102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\e103\";\n}\n.glyphicon-fire:before {\n  content: \"\\e104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\e105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\e106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\e107\";\n}\n.glyphicon-plane:before {\n  content: \"\\e108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\e109\";\n}\n.glyphicon-random:before {\n  content: \"\\e110\";\n}\n.glyphicon-comment:before {\n  content: \"\\e111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\e112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\e113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\e114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\e115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\e117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\e118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\e121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\e122\";\n}\n.glyphicon-bell:before {\n  content: \"\\e123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\e124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\e127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\e128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\e129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\e130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\";\n}\n.glyphicon-globe:before {\n  content: \"\\e135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\e136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\e137\";\n}\n.glyphicon-filter:before {\n  content: \"\\e138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\e139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\e140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\e141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\e142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\e143\";\n}\n.glyphicon-link:before {\n  content: \"\\e144\";\n}\n.glyphicon-phone:before {\n  content: \"\\e145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\e146\";\n}\n.glyphicon-usd:before {\n  content: \"\\e148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\e149\";\n}\n.glyphicon-sort:before {\n  content: \"\\e150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\e157\";\n}\n.glyphicon-expand:before {\n  content: \"\\e158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\e159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\e160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\e161\";\n}\n.glyphicon-flash:before {\n  content: \"\\e162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\e163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\e164\";\n}\n.glyphicon-record:before {\n  content: \"\\e165\";\n}\n.glyphicon-save:before {\n  content: \"\\e166\";\n}\n.glyphicon-open:before {\n  content: \"\\e167\";\n}\n.glyphicon-saved:before {\n  content: \"\\e168\";\n}\n.glyphicon-import:before {\n  content: \"\\e169\";\n}\n.glyphicon-export:before {\n  content: \"\\e170\";\n}\n.glyphicon-send:before {\n  content: \"\\e171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\e175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\e176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\e177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\e178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\e179\";\n}\n.glyphicon-header:before {\n  content: \"\\e180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\e181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\e182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\e183\";\n}\n.glyphicon-tower:before {\n  content: \"\\e184\";\n}\n.glyphicon-stats:before {\n  content: \"\\e185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\e186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\e187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\e188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\e195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\e197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\";\n}\n.glyphicon-cd:before {\n  content: \"\\e201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\e202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\e203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\e204\";\n}\n.glyphicon-copy:before {\n  content: \"\\e205\";\n}\n.glyphicon-paste:before {\n  content: \"\\e206\";\n}\n.glyphicon-alert:before {\n  content: \"\\e209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\e210\";\n}\n.glyphicon-king:before {\n  content: \"\\e211\";\n}\n.glyphicon-queen:before {\n  content: \"\\e212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\e213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\e214\";\n}\n.glyphicon-knight:before {\n  content: \"\\e215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\e216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26fa\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\e218\";\n}\n.glyphicon-bed:before {\n  content: \"\\e219\";\n}\n.glyphicon-apple:before {\n  content: \"\\f8ff\";\n}\n.glyphicon-erase:before {\n  content: \"\\e221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231b\";\n}\n.glyphicon-lamp:before {\n  content: \"\\e223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\e224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\e226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\e227\";\n}\n.glyphicon-btc:before {\n  content: \"\\e227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\e227\";\n}\n.glyphicon-yen:before {\n  content: \"\\00a5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\00a5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20bd\";\n}\n.glyphicon-rub:before {\n  content: \"\\20bd\";\n}\n.glyphicon-scale:before {\n  content: \"\\e230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\";\n}\n.glyphicon-education:before {\n  content: \"\\e233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\e235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\e237\";\n}\n.glyphicon-oil:before {\n  content: \"\\e238\";\n}\n.glyphicon-grain:before {\n  content: \"\\e239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\e240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\e241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\e242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\e243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\e244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\e247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\e249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\e250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\e251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\e253\";\n}\n.glyphicon-console:before {\n  content: \"\\e254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\e255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\e256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\e257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\e258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\e259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\e260\";\n}\n* {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all .2s ease-in-out;\n       -o-transition: all .2s ease-in-out;\n          transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014 \\00A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\00A0 \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;\n       -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n          transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n          box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity .15s linear;\n       -o-transition: opacity .15s linear;\n          transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-timing-function: ease;\n       -o-transition-timing-function: ease;\n          transition-timing-function: ease;\n  -webkit-transition-duration: .35s;\n       -o-transition-duration: .35s;\n          transition-duration: .35s;\n  -webkit-transition-property: height, visibility;\n       -o-transition-property: height, visibility;\n          transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n          box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n          box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n          box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    -webkit-box-shadow: none;\n            box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\00a0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border .2s ease-in-out;\n       -o-transition: border .2s ease-in-out;\n          transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@-o-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n          box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  -webkit-transition: width .6s ease;\n       -o-transition: width .6s ease;\n          transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  -webkit-background-size: 40px 40px;\n          background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n       -o-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:      -o-linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n          box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  -webkit-transition: -webkit-transform .3s ease-out;\n       -o-transition:      -o-transform .3s ease-out;\n          transition:         transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n      -ms-transform: translate(0, -25%);\n       -o-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n      -ms-transform: translate(0, 0);\n       -o-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n          box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  -webkit-background-clip: padding-box;\n          background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n          box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  -webkit-transition: .6s ease-in-out left;\n       -o-transition: .6s ease-in-out left;\n          transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    -webkit-transition: -webkit-transform .6s ease-in-out;\n         -o-transition:      -o-transform .6s ease-in-out;\n            transition:         transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  background-color: rgba(0, 0, 0, 0);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .5)), to(rgba(0, 0, 0, .0001)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image:      -o-linear-gradient(left, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  background-image: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .0001)), to(rgba(0, 0, 0, .5)));\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203a';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.f4769f9bdb7466be65088239c12046d1.eot?";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.448c34a56d699c29117adc64c43affeb.woff2?";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.fa2772327f55d8198301fdb8bcfc8158.woff?";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.e18bbf611f2a2e43afc071aa2f4e1512.ttf?";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fonts/glyphicons-halflings-regular.89889688147bd7575d6327160d64e760.svg?";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(true) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 60 */
/***/ (function(module, exports) {

	module.exports = "<header>\n  <nav>\n    <a [routerLink]=\"['']\">Home</a>\n    <a [routerLink]=\"['about']\">About</a>\n  </nav>\n</header>\n<main>\n\n  <router-outlet></router-outlet>\n</main>\n<footer>\n  <a [href]=\"url\">Webpack Angular 2 Starter</a>\n</footer>\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

	module.exports = ":host {\n  display: block; }\n\nheader {\n  background-color: #fff;\n  padding: 16px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5); }\n\nmain {\n  padding: 1em;\n  margin-top: 50px;\n  display: block; }\n\nfooter {\n  text-align: center;\n  font-size: 0.8em; }\n"

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var forms_1 = __webpack_require__(41);
	var home_service_1 = __webpack_require__(63);
	var HomeComponent = (function () {
	    function HomeComponent(formBuilder, homeService) {
	        this.formBuilder = formBuilder;
	        this.homeService = homeService;
	        this.colunas = [];
	        this.linha = [];
	        this.uploadForm = this.formBuilder.group({
	            arquivo: [''],
	        });
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	    };
	    HomeComponent.prototype.uploadFile = function () {
	        this.homeService.inserir(this.uploadForm.value.arquivo);
	    };
	    HomeComponent.prototype.teste = function () {
	        this.homeService.getTabela(4, 4).subscribe(function (data) { return console.log(data); });
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'my-home',
	            template: __webpack_require__(69),
	            styles: [__webpack_require__(70)]
	        }), 
	        __metadata('design:paramtypes', [forms_1.FormBuilder, home_service_1.HomeService])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(40);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(67);
	var HomeService = (function () {
	    // URL to web api
	    function HomeService(http) {
	        this.http = http;
	        this.url = 'http://localhost:8080/getFile/';
	        this.urlTabela = 'http://localhost:8080/listar/';
	    }
	    HomeService.prototype.inserir = function (caminho) {
	        return this.http.get(this.url + caminho)
	            .map(function (res) { return res.json(); });
	    };
	    HomeService.prototype.getTabela = function (limite, pular) {
	        return this.http.get(this.urlTabela + limite + "/" + pular)
	            .map(function (res) { return res.json(); });
	    };
	    HomeService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http])
	    ], HomeService);
	    return HomeService;
	}());
	exports.HomeService = HomeService;


/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports) {

	module.exports = "<form [formGroup]=\"uploadForm\" (ngSubmit)=\"uploadFile()\">\n  <div class=\"form-group\">\n     <input type=\"text\" formControlName=\"arquivo\">\n  </div>\n  <button class=\"button\" type=\"submit\">Enviar</button>\n</form>\n\n<button class=\"button\" (click)=\"teste()\">Enviar</button>\n"

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	module.exports = "\n"

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var core_1 = __webpack_require__(1);
	var AboutComponent = (function () {
	    function AboutComponent() {
	        // Do stuff
	    }
	    AboutComponent.prototype.ngOnInit = function () {
	        console.log('Hello About');
	    };
	    AboutComponent = __decorate([
	        core_1.Component({
	            selector: 'my-about',
	            template: __webpack_require__(72),
	            styles: [__webpack_require__(73)]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AboutComponent);
	    return AboutComponent;
	}());
	exports.AboutComponent = AboutComponent;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

	module.exports = "<p>\n  About Works!\n</p>\n"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

	module.exports = "\n"

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(75);
	var home_component_1 = __webpack_require__(62);
	var about_component_1 = __webpack_require__(71);
	var routes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'about', component: about_component_1.AboutComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });


/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory(__webpack_require__(1), __webpack_require__(37));
		else if(typeof define === 'function' && define.amd)
			define(["@angular/core", "@angular/common"], factory);
		else if(typeof exports === 'object')
			exports["ng2-file-upload.umd"] = factory(require("@angular/core"), require("@angular/common"));
		else
			root["ng2-file-upload.umd"] = factory(root["@angular/core"], root["@angular/common"]);
	})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_8__) {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			i: moduleId,
	/******/ 			l: false,
	/******/ 			exports: {}
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.l = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// identity function for calling harmony imports with the correct context
	/******/ 	__webpack_require__.i = function(value) { return value; };
	/******/
	/******/ 	// define getter function for harmony exports
	/******/ 	__webpack_require__.d = function(exports, name, getter) {
	/******/ 		if(!__webpack_require__.o(exports, name)) {
	/******/ 			Object.defineProperty(exports, name, {
	/******/ 				configurable: false,
	/******/ 				enumerable: true,
	/******/ 				get: getter
	/******/ 			});
	/******/ 		}
	/******/ 	};
	/******/
	/******/ 	// getDefaultExport function for compatibility with non-harmony modules
	/******/ 	__webpack_require__.n = function(module) {
	/******/ 		var getter = module && module.__esModule ?
	/******/ 			function getDefault() { return module['default']; } :
	/******/ 			function getModuleExports() { return module; };
	/******/ 		__webpack_require__.d(getter, 'a', getter);
	/******/ 		return getter;
	/******/ 	};
	/******/
	/******/ 	// Object.prototype.hasOwnProperty.call
	/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "/";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 9);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function isElement(node) {
	    return !!(node && (node.nodeName || node.prop && node.attr && node.find));
	}
	var FileLikeObject = (function () {
	    function FileLikeObject(fileOrInput) {
	        var isInput = isElement(fileOrInput);
	        var fakePathOrObject = isInput ? fileOrInput.value : fileOrInput;
	        var postfix = typeof fakePathOrObject === 'string' ? 'FakePath' : 'Object';
	        var method = '_createFrom' + postfix;
	        this[method](fakePathOrObject);
	    }
	    FileLikeObject.prototype._createFromFakePath = function (path) {
	        this.lastModifiedDate = void 0;
	        this.size = void 0;
	        this.type = 'like/' + path.slice(path.lastIndexOf('.') + 1).toLowerCase();
	        this.name = path.slice(path.lastIndexOf('/') + path.lastIndexOf('\\') + 2);
	    };
	    FileLikeObject.prototype._createFromObject = function (object) {
	        // this.lastModifiedDate = copy(object.lastModifiedDate);
	        this.size = object.size;
	        this.type = object.type;
	        this.name = object.name;
	    };
	    return FileLikeObject;
	}());
	exports.FileLikeObject = FileLikeObject;
	
	
	/***/ }),
	/* 1 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var file_like_object_class_1 = __webpack_require__(0);
	var file_item_class_1 = __webpack_require__(4);
	var file_type_class_1 = __webpack_require__(7);
	function isFile(value) {
	    return (File && value instanceof File);
	}
	var FileUploader = (function () {
	    function FileUploader(options) {
	        this.isUploading = false;
	        this.queue = [];
	        this.progress = 0;
	        this._nextIndex = 0;
	        this.options = {
	            autoUpload: false,
	            isHTML5: true,
	            filters: [],
	            removeAfterUpload: false,
	            disableMultipart: false
	        };
	        this.setOptions(options);
	    }
	    FileUploader.prototype.setOptions = function (options) {
	        this.options = Object.assign(this.options, options);
	        this.authToken = options.authToken;
	        this.authTokenHeader = options.authTokenHeader || 'Authorization';
	        this.autoUpload = options.autoUpload;
	        this.options.filters.unshift({ name: 'queueLimit', fn: this._queueLimitFilter });
	        if (this.options.maxFileSize) {
	            this.options.filters.unshift({ name: 'fileSize', fn: this._fileSizeFilter });
	        }
	        if (this.options.allowedFileType) {
	            this.options.filters.unshift({ name: 'fileType', fn: this._fileTypeFilter });
	        }
	        if (this.options.allowedMimeType) {
	            this.options.filters.unshift({ name: 'mimeType', fn: this._mimeTypeFilter });
	        }
	        for (var i = 0; i < this.queue.length; i++) {
	            this.queue[i].url = this.options.url;
	        }
	        // this.options.filters.unshift({name: 'folder', fn: this._folderFilter});
	    };
	    FileUploader.prototype.addToQueue = function (files, options, filters) {
	        var _this = this;
	        var list = [];
	        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
	            var file = files_1[_i];
	            list.push(file);
	        }
	        var arrayOfFilters = this._getFilters(filters);
	        var count = this.queue.length;
	        var addedFileItems = [];
	        list.map(function (some) {
	            if (!options) {
	                options = _this.options;
	            }
	            var temp = new file_like_object_class_1.FileLikeObject(some);
	            if (_this._isValidFile(temp, arrayOfFilters, options)) {
	                var fileItem = new file_item_class_1.FileItem(_this, some, options);
	                addedFileItems.push(fileItem);
	                _this.queue.push(fileItem);
	                _this._onAfterAddingFile(fileItem);
	            }
	            else {
	                var filter = arrayOfFilters[_this._failFilterIndex];
	                _this._onWhenAddingFileFailed(temp, filter, options);
	            }
	        });
	        if (this.queue.length !== count) {
	            this._onAfterAddingAll(addedFileItems);
	            this.progress = this._getTotalProgress();
	        }
	        this._render();
	        if (this.options.autoUpload) {
	            this.uploadAll();
	        }
	    };
	    FileUploader.prototype.removeFromQueue = function (value) {
	        var index = this.getIndexOfItem(value);
	        var item = this.queue[index];
	        if (item.isUploading) {
	            item.cancel();
	        }
	        this.queue.splice(index, 1);
	        this.progress = this._getTotalProgress();
	    };
	    FileUploader.prototype.clearQueue = function () {
	        while (this.queue.length) {
	            this.queue[0].remove();
	        }
	        this.progress = 0;
	    };
	    FileUploader.prototype.uploadItem = function (value) {
	        var index = this.getIndexOfItem(value);
	        var item = this.queue[index];
	        var transport = this.options.isHTML5 ? '_xhrTransport' : '_iframeTransport';
	        item._prepareToUploading();
	        if (this.isUploading) {
	            return;
	        }
	        this.isUploading = true;
	        this[transport](item);
	    };
	    FileUploader.prototype.cancelItem = function (value) {
	        var index = this.getIndexOfItem(value);
	        var item = this.queue[index];
	        var prop = this.options.isHTML5 ? item._xhr : item._form;
	        if (item && item.isUploading) {
	            prop.abort();
	        }
	    };
	    FileUploader.prototype.uploadAll = function () {
	        var items = this.getNotUploadedItems().filter(function (item) { return !item.isUploading; });
	        if (!items.length) {
	            return;
	        }
	        items.map(function (item) { return item._prepareToUploading(); });
	        items[0].upload();
	    };
	    FileUploader.prototype.cancelAll = function () {
	        var items = this.getNotUploadedItems();
	        items.map(function (item) { return item.cancel(); });
	    };
	    FileUploader.prototype.isFile = function (value) {
	        return isFile(value);
	    };
	    FileUploader.prototype.isFileLikeObject = function (value) {
	        return value instanceof file_like_object_class_1.FileLikeObject;
	    };
	    FileUploader.prototype.getIndexOfItem = function (value) {
	        return typeof value === 'number' ? value : this.queue.indexOf(value);
	    };
	    FileUploader.prototype.getNotUploadedItems = function () {
	        return this.queue.filter(function (item) { return !item.isUploaded; });
	    };
	    FileUploader.prototype.getReadyItems = function () {
	        return this.queue
	            .filter(function (item) { return (item.isReady && !item.isUploading); })
	            .sort(function (item1, item2) { return item1.index - item2.index; });
	    };
	    FileUploader.prototype.destroy = function () {
	        return void 0;
	        /*forEach(this._directives, (key) => {
	         forEach(this._directives[key], (object) => {
	         object.destroy();
	         });
	         });*/
	    };
	    FileUploader.prototype.onAfterAddingAll = function (fileItems) {
	        return { fileItems: fileItems };
	    };
	    FileUploader.prototype.onBuildItemForm = function (fileItem, form) {
	        return { fileItem: fileItem, form: form };
	    };
	    FileUploader.prototype.onAfterAddingFile = function (fileItem) {
	        return { fileItem: fileItem };
	    };
	    FileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
	        return { item: item, filter: filter, options: options };
	    };
	    FileUploader.prototype.onBeforeUploadItem = function (fileItem) {
	        return { fileItem: fileItem };
	    };
	    FileUploader.prototype.onProgressItem = function (fileItem, progress) {
	        return { fileItem: fileItem, progress: progress };
	    };
	    FileUploader.prototype.onProgressAll = function (progress) {
	        return { progress: progress };
	    };
	    FileUploader.prototype.onSuccessItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onErrorItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onCancelItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onCompleteItem = function (item, response, status, headers) {
	        return { item: item, response: response, status: status, headers: headers };
	    };
	    FileUploader.prototype.onCompleteAll = function () {
	        return void 0;
	    };
	    FileUploader.prototype._mimeTypeFilter = function (item) {
	        return !(this.options.allowedMimeType && this.options.allowedMimeType.indexOf(item.type) === -1);
	    };
	    FileUploader.prototype._fileSizeFilter = function (item) {
	        return !(this.options.maxFileSize && item.size > this.options.maxFileSize);
	    };
	    FileUploader.prototype._fileTypeFilter = function (item) {
	        return !(this.options.allowedFileType &&
	            this.options.allowedFileType.indexOf(file_type_class_1.FileType.getMimeClass(item)) === -1);
	    };
	    FileUploader.prototype._onErrorItem = function (item, response, status, headers) {
	        item._onError(response, status, headers);
	        this.onErrorItem(item, response, status, headers);
	    };
	    FileUploader.prototype._onCompleteItem = function (item, response, status, headers) {
	        item._onComplete(response, status, headers);
	        this.onCompleteItem(item, response, status, headers);
	        var nextItem = this.getReadyItems()[0];
	        this.isUploading = false;
	        if (nextItem) {
	            nextItem.upload();
	            return;
	        }
	        this.onCompleteAll();
	        this.progress = this._getTotalProgress();
	        this._render();
	    };
	    FileUploader.prototype._headersGetter = function (parsedHeaders) {
	        return function (name) {
	            if (name) {
	                return parsedHeaders[name.toLowerCase()] || void 0;
	            }
	            return parsedHeaders;
	        };
	    };
	    FileUploader.prototype._xhrTransport = function (item) {
	        var _this = this;
	        var xhr = item._xhr = new XMLHttpRequest();
	        var sendable;
	        this._onBeforeUploadItem(item);
	        // todo
	        /*item.formData.map(obj => {
	         obj.map((value, key) => {
	         form.append(key, value);
	         });
	         });*/
	        if (typeof item._file.size !== 'number') {
	            throw new TypeError('The file specified is no longer valid');
	        }
	        if (!this.options.disableMultipart) {
	            sendable = new FormData();
	            this._onBuildItemForm(item, sendable);
	            sendable.append(item.alias, item._file, item.file.name);
	            if (this.options.additionalParameter !== undefined) {
	                Object.keys(this.options.additionalParameter).forEach(function (key) {
	                    sendable.append(key, _this.options.additionalParameter[key]);
	                });
	            }
	        }
	        else {
	            sendable = item._file;
	        }
	        xhr.upload.onprogress = function (event) {
	            var progress = Math.round(event.lengthComputable ? event.loaded * 100 / event.total : 0);
	            _this._onProgressItem(item, progress);
	        };
	        xhr.onload = function () {
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            var gist = _this._isSuccessCode(xhr.status) ? 'Success' : 'Error';
	            var method = '_on' + gist + 'Item';
	            _this[method](item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.onerror = function () {
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onErrorItem(item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.onabort = function () {
	            var headers = _this._parseHeaders(xhr.getAllResponseHeaders());
	            var response = _this._transformResponse(xhr.response, headers);
	            _this._onCancelItem(item, response, xhr.status, headers);
	            _this._onCompleteItem(item, response, xhr.status, headers);
	        };
	        xhr.open(item.method, item.url, true);
	        xhr.withCredentials = item.withCredentials;
	        if (this.options.headers) {
	            for (var _i = 0, _a = this.options.headers; _i < _a.length; _i++) {
	                var header = _a[_i];
	                xhr.setRequestHeader(header.name, header.value);
	            }
	        }
	        if (item.headers.length) {
	            for (var _b = 0, _c = item.headers; _b < _c.length; _b++) {
	                var header = _c[_b];
	                xhr.setRequestHeader(header.name, header.value);
	            }
	        }
	        if (this.authToken) {
	            xhr.setRequestHeader(this.authTokenHeader, this.authToken);
	        }
	        xhr.send(sendable);
	        this._render();
	    };
	    FileUploader.prototype._getTotalProgress = function (value) {
	        if (value === void 0) { value = 0; }
	        if (this.options.removeAfterUpload) {
	            return value;
	        }
	        var notUploaded = this.getNotUploadedItems().length;
	        var uploaded = notUploaded ? this.queue.length - notUploaded : this.queue.length;
	        var ratio = 100 / this.queue.length;
	        var current = value * ratio / 100;
	        return Math.round(uploaded * ratio + current);
	    };
	    FileUploader.prototype._getFilters = function (filters) {
	        if (!filters) {
	            return this.options.filters;
	        }
	        if (Array.isArray(filters)) {
	            return filters;
	        }
	        if (typeof filters === 'string') {
	            var names_1 = filters.match(/[^\s,]+/g);
	            return this.options.filters
	                .filter(function (filter) { return names_1.indexOf(filter.name) !== -1; });
	        }
	        return this.options.filters;
	    };
	    FileUploader.prototype._render = function () {
	        return void 0;
	        // todo: ?
	    };
	    // protected _folderFilter(item:FileItem):boolean {
	    //   return !!(item.size || item.type);
	    // }
	    FileUploader.prototype._queueLimitFilter = function () {
	        return this.options.queueLimit === undefined || this.queue.length < this.options.queueLimit;
	    };
	    FileUploader.prototype._isValidFile = function (file, filters, options) {
	        var _this = this;
	        this._failFilterIndex = -1;
	        return !filters.length ? true : filters.every(function (filter) {
	            _this._failFilterIndex++;
	            return filter.fn.call(_this, file, options);
	        });
	    };
	    FileUploader.prototype._isSuccessCode = function (status) {
	        return (status >= 200 && status < 300) || status === 304;
	    };
	    /* tslint:disable */
	    FileUploader.prototype._transformResponse = function (response, headers) {
	        // todo: ?
	        /*var headersGetter = this._headersGetter(headers);
	         forEach($http.defaults.transformResponse, (transformFn) => {
	         response = transformFn(response, headersGetter);
	         });*/
	        return response;
	    };
	    /* tslint:enable */
	    FileUploader.prototype._parseHeaders = function (headers) {
	        var parsed = {};
	        var key;
	        var val;
	        var i;
	        if (!headers) {
	            return parsed;
	        }
	        headers.split('\n').map(function (line) {
	            i = line.indexOf(':');
	            key = line.slice(0, i).trim().toLowerCase();
	            val = line.slice(i + 1).trim();
	            if (key) {
	                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	            }
	        });
	        return parsed;
	    };
	    /*protected _iframeTransport(item:FileItem) {
	     // todo: implement it later
	     }*/
	    FileUploader.prototype._onWhenAddingFileFailed = function (item, filter, options) {
	        this.onWhenAddingFileFailed(item, filter, options);
	    };
	    FileUploader.prototype._onAfterAddingFile = function (item) {
	        this.onAfterAddingFile(item);
	    };
	    FileUploader.prototype._onAfterAddingAll = function (items) {
	        this.onAfterAddingAll(items);
	    };
	    FileUploader.prototype._onBeforeUploadItem = function (item) {
	        item._onBeforeUpload();
	        this.onBeforeUploadItem(item);
	    };
	    FileUploader.prototype._onBuildItemForm = function (item, form) {
	        item._onBuildForm(form);
	        this.onBuildItemForm(item, form);
	    };
	    FileUploader.prototype._onProgressItem = function (item, progress) {
	        var total = this._getTotalProgress(progress);
	        this.progress = total;
	        item._onProgress(progress);
	        this.onProgressItem(item, progress);
	        this.onProgressAll(total);
	        this._render();
	    };
	    /* tslint:disable */
	    FileUploader.prototype._onSuccessItem = function (item, response, status, headers) {
	        item._onSuccess(response, status, headers);
	        this.onSuccessItem(item, response, status, headers);
	    };
	    /* tslint:enable */
	    FileUploader.prototype._onCancelItem = function (item, response, status, headers) {
	        item._onCancel(response, status, headers);
	        this.onCancelItem(item, response, status, headers);
	    };
	    return FileUploader;
	}());
	exports.FileUploader = FileUploader;
	
	
	/***/ }),
	/* 2 */
	/***/ (function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
	
	/***/ }),
	/* 3 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var file_uploader_class_1 = __webpack_require__(1);
	var FileDropDirective = (function () {
	    function FileDropDirective(element) {
	        this.fileOver = new core_1.EventEmitter();
	        this.onFileDrop = new core_1.EventEmitter();
	        this.element = element;
	    }
	    FileDropDirective.prototype.getOptions = function () {
	        return this.uploader.options;
	    };
	    FileDropDirective.prototype.getFilters = function () {
	        return {};
	    };
	    FileDropDirective.prototype.onDrop = function (event) {
	        var transfer = this._getTransfer(event);
	        if (!transfer) {
	            return;
	        }
	        var options = this.getOptions();
	        var filters = this.getFilters();
	        this._preventAndStop(event);
	        this.uploader.addToQueue(transfer.files, options, filters);
	        this.fileOver.emit(false);
	        this.onFileDrop.emit(transfer.files);
	    };
	    FileDropDirective.prototype.onDragOver = function (event) {
	        var transfer = this._getTransfer(event);
	        if (!this._haveFiles(transfer.types)) {
	            return;
	        }
	        transfer.dropEffect = 'copy';
	        this._preventAndStop(event);
	        this.fileOver.emit(true);
	    };
	    FileDropDirective.prototype.onDragLeave = function (event) {
	        if (this.element) {
	            if (event.currentTarget === this.element[0]) {
	                return;
	            }
	        }
	        this._preventAndStop(event);
	        this.fileOver.emit(false);
	    };
	    FileDropDirective.prototype._getTransfer = function (event) {
	        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer; // jQuery fix;
	    };
	    FileDropDirective.prototype._preventAndStop = function (event) {
	        event.preventDefault();
	        event.stopPropagation();
	    };
	    FileDropDirective.prototype._haveFiles = function (types) {
	        if (!types) {
	            return false;
	        }
	        if (types.indexOf) {
	            return types.indexOf('Files') !== -1;
	        }
	        else if (types.contains) {
	            return types.contains('Files');
	        }
	        else {
	            return false;
	        }
	    };
	    return FileDropDirective;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", file_uploader_class_1.FileUploader)
	], FileDropDirective.prototype, "uploader", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], FileDropDirective.prototype, "fileOver", void 0);
	__decorate([
	    core_1.Output(),
	    __metadata("design:type", core_1.EventEmitter)
	], FileDropDirective.prototype, "onFileDrop", void 0);
	__decorate([
	    core_1.HostListener('drop', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", void 0)
	], FileDropDirective.prototype, "onDrop", null);
	__decorate([
	    core_1.HostListener('dragover', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", void 0)
	], FileDropDirective.prototype, "onDragOver", null);
	__decorate([
	    core_1.HostListener('dragleave', ['$event']),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", [Object]),
	    __metadata("design:returntype", Object)
	], FileDropDirective.prototype, "onDragLeave", null);
	FileDropDirective = __decorate([
	    core_1.Directive({ selector: '[ng2FileDrop]' }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], FileDropDirective);
	exports.FileDropDirective = FileDropDirective;
	
	
	/***/ }),
	/* 4 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var file_like_object_class_1 = __webpack_require__(0);
	var FileItem = (function () {
	    function FileItem(uploader, some, options) {
	        this.url = '/';
	        this.headers = [];
	        this.withCredentials = true;
	        this.formData = [];
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.index = void 0;
	        this.uploader = uploader;
	        this.some = some;
	        this.options = options;
	        this.file = new file_like_object_class_1.FileLikeObject(some);
	        this._file = some;
	        if (uploader.options) {
	            this.method = uploader.options.method || 'POST';
	            this.alias = uploader.options.itemAlias || 'file';
	        }
	        this.url = uploader.options.url;
	    }
	    FileItem.prototype.upload = function () {
	        try {
	            this.uploader.uploadItem(this);
	        }
	        catch (e) {
	            this.uploader._onCompleteItem(this, '', 0, {});
	            this.uploader._onErrorItem(this, '', 0, {});
	        }
	    };
	    FileItem.prototype.cancel = function () {
	        this.uploader.cancelItem(this);
	    };
	    FileItem.prototype.remove = function () {
	        this.uploader.removeFromQueue(this);
	    };
	    FileItem.prototype.onBeforeUpload = function () {
	        return void 0;
	    };
	    FileItem.prototype.onBuildForm = function (form) {
	        return { form: form };
	    };
	    FileItem.prototype.onProgress = function (progress) {
	        return { progress: progress };
	    };
	    FileItem.prototype.onSuccess = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype.onError = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype.onCancel = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype.onComplete = function (response, status, headers) {
	        return { response: response, status: status, headers: headers };
	    };
	    FileItem.prototype._onBeforeUpload = function () {
	        this.isReady = true;
	        this.isUploading = true;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 0;
	        this.onBeforeUpload();
	    };
	    FileItem.prototype._onBuildForm = function (form) {
	        this.onBuildForm(form);
	    };
	    FileItem.prototype._onProgress = function (progress) {
	        this.progress = progress;
	        this.onProgress(progress);
	    };
	    FileItem.prototype._onSuccess = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = true;
	        this.isCancel = false;
	        this.isError = false;
	        this.progress = 100;
	        this.index = void 0;
	        this.onSuccess(response, status, headers);
	    };
	    FileItem.prototype._onError = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = true;
	        this.isSuccess = false;
	        this.isCancel = false;
	        this.isError = true;
	        this.progress = 0;
	        this.index = void 0;
	        this.onError(response, status, headers);
	    };
	    FileItem.prototype._onCancel = function (response, status, headers) {
	        this.isReady = false;
	        this.isUploading = false;
	        this.isUploaded = false;
	        this.isSuccess = false;
	        this.isCancel = true;
	        this.isError = false;
	        this.progress = 0;
	        this.index = void 0;
	        this.onCancel(response, status, headers);
	    };
	    FileItem.prototype._onComplete = function (response, status, headers) {
	        this.onComplete(response, status, headers);
	        if (this.uploader.options.removeAfterUpload) {
	            this.remove();
	        }
	    };
	    FileItem.prototype._prepareToUploading = function () {
	        this.index = this.index || ++this.uploader._nextIndex;
	        this.isReady = true;
	    };
	    return FileItem;
	}());
	exports.FileItem = FileItem;
	
	
	/***/ }),
	/* 5 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var file_uploader_class_1 = __webpack_require__(1);
	// todo: filters
	var FileSelectDirective = (function () {
	    function FileSelectDirective(element) {
	        this.element = element;
	    }
	    FileSelectDirective.prototype.getOptions = function () {
	        return this.uploader.options;
	    };
	    FileSelectDirective.prototype.getFilters = function () {
	        return void 0;
	    };
	    FileSelectDirective.prototype.isEmptyAfterSelection = function () {
	        return !!this.element.nativeElement.attributes.multiple;
	    };
	    FileSelectDirective.prototype.onChange = function () {
	        // let files = this.uploader.isHTML5 ? this.element.nativeElement[0].files : this.element.nativeElement[0];
	        var files = this.element.nativeElement.files;
	        var options = this.getOptions();
	        var filters = this.getFilters();
	        // if(!this.uploader.isHTML5) this.destroy();
	        this.uploader.addToQueue(files, options, filters);
	        if (this.isEmptyAfterSelection()) {
	            // todo
	            this.element.nativeElement.value = '';
	        }
	    };
	    return FileSelectDirective;
	}());
	__decorate([
	    core_1.Input(),
	    __metadata("design:type", file_uploader_class_1.FileUploader)
	], FileSelectDirective.prototype, "uploader", void 0);
	__decorate([
	    core_1.HostListener('change'),
	    __metadata("design:type", Function),
	    __metadata("design:paramtypes", []),
	    __metadata("design:returntype", Object)
	], FileSelectDirective.prototype, "onChange", null);
	FileSelectDirective = __decorate([
	    core_1.Directive({ selector: '[ng2FileSelect]' }),
	    __metadata("design:paramtypes", [core_1.ElementRef])
	], FileSelectDirective);
	exports.FileSelectDirective = FileSelectDirective;
	
	
	/***/ }),
	/* 6 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var common_1 = __webpack_require__(8);
	var core_1 = __webpack_require__(2);
	var file_drop_directive_1 = __webpack_require__(3);
	var file_select_directive_1 = __webpack_require__(5);
	var FileUploadModule = (function () {
	    function FileUploadModule() {
	    }
	    return FileUploadModule;
	}());
	FileUploadModule = __decorate([
	    core_1.NgModule({
	        imports: [common_1.CommonModule],
	        declarations: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective],
	        exports: [file_drop_directive_1.FileDropDirective, file_select_directive_1.FileSelectDirective]
	    })
	], FileUploadModule);
	exports.FileUploadModule = FileUploadModule;
	
	
	/***/ }),
	/* 7 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	var FileType = (function () {
	    function FileType() {
	    }
	    FileType.getMimeClass = function (file) {
	        var mimeClass = 'application';
	        if (this.mime_psd.indexOf(file.type) !== -1) {
	            mimeClass = 'image';
	        }
	        else if (file.type.match('image.*')) {
	            mimeClass = 'image';
	        }
	        else if (file.type.match('video.*')) {
	            mimeClass = 'video';
	        }
	        else if (file.type.match('audio.*')) {
	            mimeClass = 'audio';
	        }
	        else if (file.type === 'application/pdf') {
	            mimeClass = 'pdf';
	        }
	        else if (this.mime_compress.indexOf(file.type) !== -1) {
	            mimeClass = 'compress';
	        }
	        else if (this.mime_doc.indexOf(file.type) !== -1) {
	            mimeClass = 'doc';
	        }
	        else if (this.mime_xsl.indexOf(file.type) !== -1) {
	            mimeClass = 'xls';
	        }
	        else if (this.mime_ppt.indexOf(file.type) !== -1) {
	            mimeClass = 'ppt';
	        }
	        if (mimeClass === 'application') {
	            mimeClass = this.fileTypeDetection(file.name);
	        }
	        return mimeClass;
	    };
	    FileType.fileTypeDetection = function (inputFilename) {
	        var types = {
	            'jpg': 'image',
	            'jpeg': 'image',
	            'tif': 'image',
	            'psd': 'image',
	            'bmp': 'image',
	            'png': 'image',
	            'nef': 'image',
	            'tiff': 'image',
	            'cr2': 'image',
	            'dwg': 'image',
	            'cdr': 'image',
	            'ai': 'image',
	            'indd': 'image',
	            'pin': 'image',
	            'cdp': 'image',
	            'skp': 'image',
	            'stp': 'image',
	            '3dm': 'image',
	            'mp3': 'audio',
	            'wav': 'audio',
	            'wma': 'audio',
	            'mod': 'audio',
	            'm4a': 'audio',
	            'compress': 'compress',
	            'rar': 'compress',
	            '7z': 'compress',
	            'lz': 'compress',
	            'z01': 'compress',
	            'pdf': 'pdf',
	            'xls': 'xls',
	            'xlsx': 'xls',
	            'ods': 'xls',
	            'mp4': 'video',
	            'avi': 'video',
	            'wmv': 'video',
	            'mpg': 'video',
	            'mts': 'video',
	            'flv': 'video',
	            '3gp': 'video',
	            'vob': 'video',
	            'm4v': 'video',
	            'mpeg': 'video',
	            'm2ts': 'video',
	            'mov': 'video',
	            'doc': 'doc',
	            'docx': 'doc',
	            'eps': 'doc',
	            'txt': 'doc',
	            'odt': 'doc',
	            'rtf': 'doc',
	            'ppt': 'ppt',
	            'pptx': 'ppt',
	            'pps': 'ppt',
	            'ppsx': 'ppt',
	            'odp': 'ppt'
	        };
	        var chunks = inputFilename.split('.');
	        if (chunks.length < 2) {
	            return 'application';
	        }
	        var extension = chunks[chunks.length - 1].toLowerCase();
	        if (types[extension] === undefined) {
	            return 'application';
	        }
	        else {
	            return types[extension];
	        }
	    };
	    return FileType;
	}());
	/*  MS office  */
	FileType.mime_doc = [
	    'application/msword',
	    'application/msword',
	    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	    'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
	    'application/vnd.ms-word.document.macroEnabled.12',
	    'application/vnd.ms-word.template.macroEnabled.12'
	];
	FileType.mime_xsl = [
	    'application/vnd.ms-excel',
	    'application/vnd.ms-excel',
	    'application/vnd.ms-excel',
	    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	    'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
	    'application/vnd.ms-excel.sheet.macroEnabled.12',
	    'application/vnd.ms-excel.template.macroEnabled.12',
	    'application/vnd.ms-excel.addin.macroEnabled.12',
	    'application/vnd.ms-excel.sheet.binary.macroEnabled.12'
	];
	FileType.mime_ppt = [
	    'application/vnd.ms-powerpoint',
	    'application/vnd.ms-powerpoint',
	    'application/vnd.ms-powerpoint',
	    'application/vnd.ms-powerpoint',
	    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	    'application/vnd.openxmlformats-officedocument.presentationml.template',
	    'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
	    'application/vnd.ms-powerpoint.addin.macroEnabled.12',
	    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
	    'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
	    'application/vnd.ms-powerpoint.slideshow.macroEnabled.12'
	];
	/* PSD */
	FileType.mime_psd = [
	    'image/photoshop',
	    'image/x-photoshop',
	    'image/psd',
	    'application/photoshop',
	    'application/psd',
	    'zz-application/zz-winassoc-psd'
	];
	/* Compressed files */
	FileType.mime_compress = [
	    'application/x-gtar',
	    'application/x-gcompress',
	    'application/compress',
	    'application/x-tar',
	    'application/x-rar-compressed',
	    'application/octet-stream'
	];
	exports.FileType = FileType;
	
	
	/***/ }),
	/* 8 */
	/***/ (function(module, exports) {
	
	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;
	
	/***/ }),
	/* 9 */
	/***/ (function(module, exports, __webpack_require__) {
	
	"use strict";
	
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(5));
	__export(__webpack_require__(3));
	__export(__webpack_require__(1));
	__export(__webpack_require__(4));
	__export(__webpack_require__(0));
	var file_upload_module_1 = __webpack_require__(6);
	exports.FileUploadModule = file_upload_module_1.FileUploadModule;
	
	
	/***/ })
	/******/ ]);
	});
	//# sourceMappingURL=ng2-file-upload.umd.js.map

/***/ })
]);
//# sourceMappingURL=app.js.map