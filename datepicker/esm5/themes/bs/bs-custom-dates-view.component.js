/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
/**
 * @record
 */
export function BsCustomDates() { }
if (false) {
    /** @type {?} */
    BsCustomDates.prototype.label;
    /** @type {?} */
    BsCustomDates.prototype.value;
}
var BsCustomDatesViewComponent = /** @class */ (function () {
    function BsCustomDatesViewComponent() {
    }
    BsCustomDatesViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bs-custom-date-view',
                    template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\" type=\"button\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\" type=\"button\"> {{customRangeLabel}}</button>\n    </div>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    BsCustomDatesViewComponent.propDecorators = {
        isCustomRangeShown: [{ type: Input }],
        ranges: [{ type: Input }],
        customRangeLabel: [{ type: Input }]
    };
    return BsCustomDatesViewComponent;
}());
export { BsCustomDatesViewComponent };
if (false) {
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.isCustomRangeShown;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.ranges;
    /** @type {?} */
    BsCustomDatesViewComponent.prototype.customRangeLabel;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFMUUsbUNBR0M7OztJQUZDLDhCQUFjOztJQUNkLDhCQUFxQjs7QUFHdkI7SUFBQTtJQWNBLENBQUM7O2dCQWRBLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUseVBBS1Q7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7cUNBRUUsS0FBSzt5QkFDTCxLQUFLO21DQUNMLEtBQUs7O0lBQ1IsaUNBQUM7Q0FBQSxBQWRELElBY0M7U0FKWSwwQkFBMEI7OztJQUNyQyx3REFBa0M7O0lBQ2xDLDRDQUFpQzs7SUFDakMsc0RBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBCc0N1c3RvbURhdGVzIHtcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IERhdGUgfCBEYXRlW107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JzLWN1c3RvbS1kYXRlLXZpZXcnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRuc1wiPlxuICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgcmFuZ2Ugb2YgcmFuZ2VzXCIgdHlwZT1cImJ1dHRvblwiPnt7IHJhbmdlLmxhYmVsIH19PC9idXR0b24+XG4gICAgICA8YnV0dG9uICpuZ0lmPVwiaXNDdXN0b21SYW5nZVNob3duXCIgdHlwZT1cImJ1dHRvblwiPiB7e2N1c3RvbVJhbmdlTGFiZWx9fTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGlzQ3VzdG9tUmFuZ2VTaG93bjogdHJ1ZTtcbiAgQElucHV0KCkgcmFuZ2VzOiBCc0N1c3RvbURhdGVzW107XG4gIEBJbnB1dCgpIGN1c3RvbVJhbmdlTGFiZWw6IHN0cmluZztcbn1cbiJdfQ==