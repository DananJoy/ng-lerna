import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ComponentsService = /** @class */ (function () {
    function ComponentsService() {
    }
    ComponentsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ComponentsService.ctorParameters = function () { return []; };
    /** @nocollapse */ ComponentsService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ComponentsService_Factory() { return new ComponentsService(); }, token: ComponentsService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [ComponentsComponent],
                    imports: [],
                    exports: [ComponentsComponent]
                },] }
    ];
    return ComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dananjoy-angular-lib-components.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ComponentsComponent, ComponentsModule, ComponentsService };
//# sourceMappingURL=dananjoy-angular-lib-components.js.map
