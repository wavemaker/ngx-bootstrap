/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = /** @class */ (function () {
    function BsDatepickerConfig() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * sets use UTC date time format
         */
        this.useUtc = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * Shows today button
         */
        this.showTodayButton = false;
        /**
         * Shows clear button
         */
        this.showClearButton = false;
        /**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
    BsDatepickerConfig.decorators = [
        { type: Injectable }
    ];
    return BsDatepickerConfig;
}());
export { BsDatepickerConfig };
if (false) {
    /**
     * sets use adaptive position
     * @type {?}
     */
    BsDatepickerConfig.prototype.adaptivePosition;
    /**
     * sets use UTC date time format
     * @type {?}
     */
    BsDatepickerConfig.prototype.useUtc;
    /**
     * turn on/off animation
     * @type {?}
     */
    BsDatepickerConfig.prototype.isAnimated;
    /** @type {?} */
    BsDatepickerConfig.prototype.value;
    /** @type {?} */
    BsDatepickerConfig.prototype.isDisabled;
    /**
     * Default min date for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.minDate;
    /**
     * Default max date for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.maxDate;
    /**
     * Default date custom classes for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.dateCustomClasses;
    /** @type {?} */
    BsDatepickerConfig.prototype.daysDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDatepickerConfig.prototype.datesDisabled;
    /**
     * Makes dates from other months active
     * @type {?}
     */
    BsDatepickerConfig.prototype.selectFromOtherMonth;
    /**
     * Shows today button
     * @type {?}
     */
    BsDatepickerConfig.prototype.showTodayButton;
    /**
     * Shows clear button
     * @type {?}
     */
    BsDatepickerConfig.prototype.showClearButton;
    /**
     * Allows select first date of the week by click on week number
     * @type {?}
     */
    BsDatepickerConfig.prototype.selectWeek;
    /**
     * Shows previous and current month, instead of current and next (dateRangePicker only)
     * @type {?}
     */
    BsDatepickerConfig.prototype.showPreviousMonth;
    /**
     * Add class to current day
     * @type {?}
     */
    BsDatepickerConfig.prototype.customTodayClass;
    /**
     * Default mode for all date pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.minMode;
    /**
     * CSS class which will be applied to datepicker container,
     * usually used to set color theme
     * @type {?}
     */
    BsDatepickerConfig.prototype.containerClass;
    /** @type {?} */
    BsDatepickerConfig.prototype.displayMonths;
    /**
     * Allows to hide week numbers in datepicker
     * @type {?}
     */
    BsDatepickerConfig.prototype.showWeekNumbers;
    /** @type {?} */
    BsDatepickerConfig.prototype.dateInputFormat;
    /** @type {?} */
    BsDatepickerConfig.prototype.rangeSeparator;
    /**
     * Date format for date range input field
     * @type {?}
     */
    BsDatepickerConfig.prototype.rangeInputFormat;
    /** @type {?} */
    BsDatepickerConfig.prototype.monthTitle;
    /** @type {?} */
    BsDatepickerConfig.prototype.yearTitle;
    /** @type {?} */
    BsDatepickerConfig.prototype.dayLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.monthLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.yearLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.weekNumbers;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFZM0M7SUFBQTs7OztRQUdFLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQUV6QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBRWYsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQWlDbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFNeEIsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7O1FBeUJ4QixtQkFBYyxHQUFHLGFBQWEsQ0FBQzs7UUFHL0Isa0JBQWEsR0FBRyxDQUFDLENBQUM7Ozs7UUFJbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7O1FBRXRCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBSXZCLHFCQUFnQixHQUFHLEdBQUcsQ0FBQzs7UUFHdkIsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Z0JBL0ZBLFVBQVU7O0lBK0ZYLHlCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0E5Rlksa0JBQWtCOzs7Ozs7SUFFN0IsOENBQXlCOzs7OztJQUV6QixvQ0FBZTs7Ozs7SUFFZix3Q0FBbUI7O0lBQ25CLG1DQUFzQjs7SUFDdEIsd0NBQXFCOzs7OztJQUlyQixxQ0FBZTs7Ozs7SUFJZixxQ0FBZTs7Ozs7SUFJZiwrQ0FBaUQ7O0lBRWpELDBDQUF3Qjs7Ozs7SUFLeEIsMkNBQXVCOzs7OztJQUl2QixrREFBK0I7Ozs7O0lBUS9CLDZDQUF3Qjs7Ozs7SUFNeEIsNkNBQXdCOzs7OztJQUt4Qix3Q0FBcUI7Ozs7O0lBS3JCLCtDQUE0Qjs7Ozs7SUFLNUIsOENBQTBCOzs7OztJQUsxQixxQ0FBK0I7Ozs7OztJQUsvQiw0Q0FBK0I7O0lBRy9CLDJDQUFrQjs7Ozs7SUFJbEIsNkNBQXVCOztJQUV2Qiw2Q0FBc0I7O0lBRXRCLDRDQUF1Qjs7Ozs7SUFJdkIsOENBQXVCOztJQUd2Qix3Q0FBb0I7O0lBQ3BCLHVDQUFtQjs7SUFDbkIsc0NBQWU7O0lBQ2Ysd0NBQW9COztJQUNwQix1Q0FBbUI7O0lBQ25CLHlDQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzXG59IGZyb20gJy4vbW9kZWxzJztcblxuXG4vKipcbiAqIEZvciBkYXRlIHJhbmdlIHBpY2tlciB0aGVyZSBhcmUgYEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnYCB3aGljaCBpbmhlcml0cyBhbGwgcHJvcGVydGllcyxcbiAqIGV4Y2VwdCBgZGlzcGxheU1vbnRoc2AsIGZvciByYW5nZSBwaWNrZXIgaXQgZGVmYXVsdCB0byBgMmBcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckNvbmZpZyBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcbiAgLyoqIHNldHMgdXNlIGFkYXB0aXZlIHBvc2l0aW9uICovXG4gIGFkYXB0aXZlUG9zaXRpb24gPSBmYWxzZTtcbiAgLyoqIHNldHMgdXNlIFVUQyBkYXRlIHRpbWUgZm9ybWF0ICovXG4gIHVzZVV0YyA9IGZhbHNlO1xuICAvKiogdHVybiBvbi9vZmYgYW5pbWF0aW9uICovXG4gIGlzQW5pbWF0ZWQgPSBmYWxzZTtcbiAgdmFsdWU/OiBEYXRlIHwgRGF0ZVtdO1xuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWluIGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1pbkRhdGU/OiBEYXRlO1xuICAvKipcbiAgICogRGVmYXVsdCBtYXggZGF0ZSBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xuICAgKi9cbiAgbWF4RGF0ZT86IERhdGU7XG4gIC8qKlxuICAgKiBEZWZhdWx0IGRhdGUgY3VzdG9tIGNsYXNzZXMgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIGRhdGVDdXN0b21DbGFzc2VzOiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXTtcblxuICBkYXlzRGlzYWJsZWQ/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xuICAgKi9cbiAgZGF0ZXNEaXNhYmxlZD86IERhdGVbXTtcbiAgLyoqXG4gICAqIE1ha2VzIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzIGFjdGl2ZVxuICAgKi9cbiAgc2VsZWN0RnJvbU90aGVyTW9udGg/OiBib29sZWFuO1xuXG5cblxuICAgLyoqXG4gICAqIFNob3dzIHRvZGF5IGJ1dHRvblxuICAgKi9cblxuICBzaG93VG9kYXlCdXR0b24gPSBmYWxzZTtcblxuXG4gICAgIC8qKlxuICAgKiBTaG93cyBjbGVhciBidXR0b25cbiAgICovXG4gIHNob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBBbGxvd3Mgc2VsZWN0IGZpcnN0IGRhdGUgb2YgdGhlIHdlZWsgYnkgY2xpY2sgb24gd2VlayBudW1iZXJcbiAgICovXG4gIHNlbGVjdFdlZWs/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93cyBwcmV2aW91cyBhbmQgY3VycmVudCBtb250aCwgaW5zdGVhZCBvZiBjdXJyZW50IGFuZCBuZXh0IChkYXRlUmFuZ2VQaWNrZXIgb25seSlcbiAgICovXG4gIHNob3dQcmV2aW91c01vbnRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIGN1cnJlbnQgZGF5XG4gICAqL1xuICBjdXN0b21Ub2RheUNsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1vZGUgZm9yIGFsbCBkYXRlIHBpY2tlcnNcbiAgICovXG4gIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcblxuICAvKiogQ1NTIGNsYXNzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byBkYXRlcGlja2VyIGNvbnRhaW5lcixcbiAgICogdXN1YWxseSB1c2VkIHRvIHNldCBjb2xvciB0aGVtZVxuICAgKi9cbiAgY29udGFpbmVyQ2xhc3MgPSAndGhlbWUtZ3JlZW4nO1xuXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIGRpc3BsYXlNb250aHMgPSAxO1xuICAvKipcbiAgICogQWxsb3dzIHRvIGhpZGUgd2VlayBudW1iZXJzIGluIGRhdGVwaWNrZXJcbiAgICovXG4gIHNob3dXZWVrTnVtYmVycyA9IHRydWU7XG5cbiAgZGF0ZUlucHV0Rm9ybWF0ID0gJ0wnO1xuICAvLyByYW5nZSBwaWNrZXJcbiAgcmFuZ2VTZXBhcmF0b3IgPSAnIC0gJztcbiAgLyoqXG4gICAqIERhdGUgZm9ybWF0IGZvciBkYXRlIHJhbmdlIGlucHV0IGZpZWxkXG4gICAqL1xuICByYW5nZUlucHV0Rm9ybWF0ID0gJ0wnO1xuXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4gIG1vbnRoVGl0bGUgPSAnTU1NTSc7XG4gIHllYXJUaXRsZSA9ICdZWVlZJztcbiAgZGF5TGFiZWwgPSAnRCc7XG4gIG1vbnRoTGFiZWwgPSAnTU1NTSc7XG4gIHllYXJMYWJlbCA9ICdZWVlZJztcbiAgd2Vla051bWJlcnMgPSAndyc7XG59XG4iXX0=