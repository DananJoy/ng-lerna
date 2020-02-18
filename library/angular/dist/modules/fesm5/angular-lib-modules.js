import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ModulesService = /** @class */ (function () {
    function ModulesService() {
    }
    ModulesService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ModulesService.ctorParameters = function () { return []; };
    /** @nocollapse */ ModulesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModulesService_Factory() { return new ModulesService(); }, token: ModulesService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [ModulesComponent],
                    imports: [],
                    exports: [ModulesComponent]
                },] }
    ];
    return ModulesModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-lib-modules.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModulesComponent, ModulesModule, ModulesService };
//# sourceMappingURL=angular-lib-modules.js.map
