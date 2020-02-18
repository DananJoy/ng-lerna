(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@dananjoy-angular-lib/components', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['dananjoy-angular-lib'] = global['dananjoy-angular-lib'] || {}, global['dananjoy-angular-lib'].components = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsService = /** @class */ (function () {
        function ComponentsService() {
        }
        ComponentsService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ ComponentsService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
        return ComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsComponent = /** @class */ (function () {
        function ComponentsComponent() {
        }
        /**
         * @return {?}
         */
        ComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ComponentsComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-components',
                        template: "\n    <p>\n      components works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ComponentsComponent.ctorParameters = function () { return []; };
        return ComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ComponentsModule = /** @class */ (function () {
        function ComponentsModule() {
        }
        ComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ComponentsComponent],
                        imports: [],
                        exports: [ComponentsComponent]
                    },] }
        ];
        return ComponentsModule;
    }());

    exports.ComponentsComponent = ComponentsComponent;
    exports.ComponentsModule = ComponentsModule;
    exports.ComponentsService = ComponentsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dananjoy-angular-lib-components.umd.js.map
