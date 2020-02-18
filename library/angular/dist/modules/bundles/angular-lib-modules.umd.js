(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@angular-lib/modules', ['exports', '@angular/core'], factory) :
    (global = global || self, factory((global['angular-lib'] = global['angular-lib'] || {}, global['angular-lib'].modules = {}), global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModulesService = /** @class */ (function () {
        function ModulesService() {
        }
        ModulesService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ModulesService.ctorParameters = function () { return []; };
        /** @nocollapse */ ModulesService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function ModulesService_Factory() { return new ModulesService(); }, token: ModulesService, providedIn: "root" });
        return ModulesService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModulesComponent = /** @class */ (function () {
        function ModulesComponent() {
        }
        /**
         * @return {?}
         */
        ModulesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        ModulesComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-modules',
                        template: "\n    <p>\n      modules works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        ModulesComponent.ctorParameters = function () { return []; };
        return ModulesComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ModulesModule = /** @class */ (function () {
        function ModulesModule() {
        }
        ModulesModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ModulesComponent],
                        imports: [],
                        exports: [ModulesComponent]
                    },] }
        ];
        return ModulesModule;
    }());

    exports.ModulesComponent = ModulesComponent;
    exports.ModulesModule = ModulesModule;
    exports.ModulesService = ModulesService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=angular-lib-modules.umd.js.map
