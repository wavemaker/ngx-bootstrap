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
         * Shows 'today' button
         */
        this.showTodayButton = false;
        /**
         * Positioning of 'today' button
         */
        this.todayPosition = 'center';
        /**
         * Shows clear button
         */
        this.showClearButton = false;
        /**
         * Label for 'today' button
         */
        this.todayButtonLabel = 'Today';
        /**
         * Label for 'clear' button
         */
        this.clearButtonLabel = 'Clear';
        /**
         * Label for 'custom range' button
         */
        this.customRangeButtonLabel = 'Custom Range';
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
     * Shows 'today' button
     * @type {?}
     */
    BsDatepickerConfig.prototype.showTodayButton;
    /**
     * Positioning of 'today' button
     * @type {?}
     */
    BsDatepickerConfig.prototype.todayPosition;
    /**
     * Shows clear button
     * @type {?}
     */
    BsDatepickerConfig.prototype.showClearButton;
    /**
     * Label for 'today' button
     * @type {?}
     */
    BsDatepickerConfig.prototype.todayButtonLabel;
    /**
     * Label for 'clear' button
     * @type {?}
     */
    BsDatepickerConfig.prototype.clearButtonLabel;
    /**
     * Label for 'custom range' button
     * @type {?}
     */
    BsDatepickerConfig.prototype.customRangeButtonLabel;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFZM0M7SUFBQTs7OztRQUdFLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQUV6QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBRWYsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQThCbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFJeEIsa0JBQWEsR0FBRyxRQUFRLENBQUM7Ozs7UUFLekIsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFNeEIscUJBQWdCLEdBQUcsT0FBTyxDQUFDOzs7O1FBSzNCLHFCQUFnQixHQUFHLE9BQU8sQ0FBQzs7OztRQUszQiwyQkFBc0IsR0FBRyxjQUFjLENBQUM7Ozs7O1FBeUJ4QyxtQkFBYyxHQUFHLGFBQWEsQ0FBQzs7UUFHL0Isa0JBQWEsR0FBRyxDQUFDLENBQUM7Ozs7UUFJbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7O1FBRXRCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBSXZCLHFCQUFnQixHQUFHLEdBQUcsQ0FBQzs7UUFHdkIsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7Z0JBL0dBLFVBQVU7O0lBK0dYLHlCQUFDO0NBQUEsQUEvR0QsSUErR0M7U0E5R1ksa0JBQWtCOzs7Ozs7SUFFN0IsOENBQXlCOzs7OztJQUV6QixvQ0FBZTs7Ozs7SUFFZix3Q0FBbUI7O0lBQ25CLG1DQUFzQjs7SUFDdEIsd0NBQXFCOzs7OztJQUlyQixxQ0FBZTs7Ozs7SUFJZixxQ0FBZTs7Ozs7SUFJZiwrQ0FBaUQ7O0lBRWpELDBDQUF3Qjs7Ozs7SUFLeEIsMkNBQXVCOzs7OztJQUl2QixrREFBK0I7Ozs7O0lBSy9CLDZDQUF3Qjs7Ozs7SUFJeEIsMkNBQXlCOzs7OztJQUt6Qiw2Q0FBd0I7Ozs7O0lBTXhCLDhDQUEyQjs7Ozs7SUFLM0IsOENBQTJCOzs7OztJQUszQixvREFBd0M7Ozs7O0lBS3hDLHdDQUFxQjs7Ozs7SUFLckIsK0NBQTRCOzs7OztJQUs1Qiw4Q0FBMEI7Ozs7O0lBSzFCLHFDQUErQjs7Ozs7O0lBSy9CLDRDQUErQjs7SUFHL0IsMkNBQWtCOzs7OztJQUlsQiw2Q0FBdUI7O0lBRXZCLDZDQUFzQjs7SUFFdEIsNENBQXVCOzs7OztJQUl2Qiw4Q0FBdUI7O0lBR3ZCLHdDQUFvQjs7SUFDcEIsdUNBQW1COztJQUNuQixzQ0FBZTs7SUFDZix3Q0FBb0I7O0lBQ3BCLHVDQUFtQjs7SUFDbkIseUNBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNcbn0gZnJvbSAnLi9tb2RlbHMnO1xuXG5cbi8qKlxuICogRm9yIGRhdGUgcmFuZ2UgcGlja2VyIHRoZXJlIGFyZSBgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWdgIHdoaWNoIGluaGVyaXRzIGFsbCBwcm9wZXJ0aWVzLFxuICogZXhjZXB0IGBkaXNwbGF5TW9udGhzYCwgZm9yIHJhbmdlIHBpY2tlciBpdCBkZWZhdWx0IHRvIGAyYFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQ29uZmlnIGltcGxlbWVudHMgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMge1xuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgYWRhcHRpdmVQb3NpdGlvbiA9IGZhbHNlO1xuICAvKiogc2V0cyB1c2UgVVRDIGRhdGUgdGltZSBmb3JtYXQgKi9cbiAgdXNlVXRjID0gZmFsc2U7XG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cbiAgaXNBbmltYXRlZCA9IGZhbHNlO1xuICB2YWx1ZT86IERhdGUgfCBEYXRlW107XG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogRGVmYXVsdCBtaW4gZGF0ZSBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGU7XG4gIC8qKlxuICAgKiBEZWZhdWx0IG1heCBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBtYXhEYXRlPzogRGF0ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgZGF0ZSBjdXN0b20gY2xhc3NlcyBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xuICAgKi9cbiAgZGF0ZUN1c3RvbUNsYXNzZXM6IERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1tdO1xuXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXG4gICAqL1xuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xuICAvKipcbiAgICogTWFrZXMgZGF0ZXMgZnJvbSBvdGhlciBtb250aHMgYWN0aXZlXG4gICAqL1xuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XG5cbiAvKipcbiAgICogU2hvd3MgJ3RvZGF5JyBidXR0b25cbiAgICovXG4gIHNob3dUb2RheUJ1dHRvbiA9IGZhbHNlO1xuICAvKipcbiAgICogUG9zaXRpb25pbmcgb2YgJ3RvZGF5JyBidXR0b25cbiAgICovXG4gIHRvZGF5UG9zaXRpb24gPSAnY2VudGVyJztcblxuICAgICAvKipcbiAgICogU2hvd3MgY2xlYXIgYnV0dG9uXG4gICAqL1xuICBzaG93Q2xlYXJCdXR0b24gPSBmYWxzZTtcblxuXG4gICAvKipcbiAgICogTGFiZWwgZm9yICd0b2RheScgYnV0dG9uXG4gICAqL1xuICB0b2RheUJ1dHRvbkxhYmVsID0gJ1RvZGF5JztcblxuICAvKipcbiAgICogTGFiZWwgZm9yICdjbGVhcicgYnV0dG9uXG4gICAqL1xuICBjbGVhckJ1dHRvbkxhYmVsID0gJ0NsZWFyJztcblxuICAvKipcbiAgICogTGFiZWwgZm9yICdjdXN0b20gcmFuZ2UnIGJ1dHRvblxuICAgKi9cbiAgY3VzdG9tUmFuZ2VCdXR0b25MYWJlbCA9ICdDdXN0b20gUmFuZ2UnO1xuXG4gIC8qKlxuICAgKiBBbGxvd3Mgc2VsZWN0IGZpcnN0IGRhdGUgb2YgdGhlIHdlZWsgYnkgY2xpY2sgb24gd2VlayBudW1iZXJcbiAgICovXG4gIHNlbGVjdFdlZWs/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTaG93cyBwcmV2aW91cyBhbmQgY3VycmVudCBtb250aCwgaW5zdGVhZCBvZiBjdXJyZW50IGFuZCBuZXh0IChkYXRlUmFuZ2VQaWNrZXIgb25seSlcbiAgICovXG4gIHNob3dQcmV2aW91c01vbnRoPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWRkIGNsYXNzIHRvIGN1cnJlbnQgZGF5XG4gICAqL1xuICBjdXN0b21Ub2RheUNsYXNzPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IG1vZGUgZm9yIGFsbCBkYXRlIHBpY2tlcnNcbiAgICovXG4gIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcblxuICAvKiogQ1NTIGNsYXNzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byBkYXRlcGlja2VyIGNvbnRhaW5lcixcbiAgICogdXN1YWxseSB1c2VkIHRvIHNldCBjb2xvciB0aGVtZVxuICAgKi9cbiAgY29udGFpbmVyQ2xhc3MgPSAndGhlbWUtZ3JlZW4nO1xuXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXG4gIGRpc3BsYXlNb250aHMgPSAxO1xuICAvKipcbiAgICogQWxsb3dzIHRvIGhpZGUgd2VlayBudW1iZXJzIGluIGRhdGVwaWNrZXJcbiAgICovXG4gIHNob3dXZWVrTnVtYmVycyA9IHRydWU7XG5cbiAgZGF0ZUlucHV0Rm9ybWF0ID0gJ0wnO1xuICAvLyByYW5nZSBwaWNrZXJcbiAgcmFuZ2VTZXBhcmF0b3IgPSAnIC0gJztcbiAgLyoqXG4gICAqIERhdGUgZm9ybWF0IGZvciBkYXRlIHJhbmdlIGlucHV0IGZpZWxkXG4gICAqL1xuICByYW5nZUlucHV0Rm9ybWF0ID0gJ0wnO1xuXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXG4gIG1vbnRoVGl0bGUgPSAnTU1NTSc7XG4gIHllYXJUaXRsZSA9ICdZWVlZJztcbiAgZGF5TGFiZWwgPSAnRCc7XG4gIG1vbnRoTGFiZWwgPSAnTU1NTSc7XG4gIHllYXJMYWJlbCA9ICdZWVlZJztcbiAgd2Vla051bWJlcnMgPSAndyc7XG59XG4iXX0=