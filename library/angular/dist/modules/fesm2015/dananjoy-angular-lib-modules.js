import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModulesService {
    constructor() { }
}
ModulesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ModulesService.ctorParameters = () => [];
/** @nocollapse */ ModulesService.ngInjectableDef = ɵɵdefineInjectable({ factory: function ModulesService_Factory() { return new ModulesService(); }, token: ModulesService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModulesComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ModulesComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-modules',
                template: `
    <p>
      modules works!
    </p>
  `
            }] }
];
/** @nocollapse */
ModulesComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modules.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ModulesModule {
}
ModulesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModulesComponent],
                imports: [],
                exports: [ModulesComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: dananjoy-angular-lib-modules.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ModulesComponent, ModulesModule, ModulesService };
//# sourceMappingURL=dananjoy-angular-lib-modules.js.map
