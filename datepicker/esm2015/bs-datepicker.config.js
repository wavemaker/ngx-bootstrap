/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
export class BsDatepickerConfig {
    constructor() {
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
}
BsDatepickerConfig.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFhM0MsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjs7OztRQUdFLHFCQUFnQixHQUFHLEtBQUssQ0FBQzs7OztRQUV6QixXQUFNLEdBQUcsS0FBSyxDQUFDOzs7O1FBRWYsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQThCbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFJeEIsa0JBQWEsR0FBRyxRQUFRLENBQUM7Ozs7UUFLekIsb0JBQWUsR0FBRyxLQUFLLENBQUM7Ozs7UUFNeEIscUJBQWdCLEdBQUcsT0FBTyxDQUFDOzs7O1FBSzNCLHFCQUFnQixHQUFHLE9BQU8sQ0FBQzs7OztRQUszQiwyQkFBc0IsR0FBRyxjQUFjLENBQUM7Ozs7O1FBeUJ4QyxtQkFBYyxHQUFHLGFBQWEsQ0FBQzs7UUFHL0Isa0JBQWEsR0FBRyxDQUFDLENBQUM7Ozs7UUFJbEIsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7O1FBRXRCLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7O1FBSXZCLHFCQUFnQixHQUFHLEdBQUcsQ0FBQzs7UUFHdkIsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUNwQixjQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLGFBQVEsR0FBRyxHQUFHLENBQUM7UUFDZixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsZ0JBQVcsR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQzs7O1lBL0dBLFVBQVU7Ozs7Ozs7SUFHVCw4Q0FBeUI7Ozs7O0lBRXpCLG9DQUFlOzs7OztJQUVmLHdDQUFtQjs7SUFDbkIsbUNBQXNCOztJQUN0Qix3Q0FBcUI7Ozs7O0lBSXJCLHFDQUFlOzs7OztJQUlmLHFDQUFlOzs7OztJQUlmLCtDQUFpRDs7SUFFakQsMENBQXdCOzs7OztJQUt4QiwyQ0FBdUI7Ozs7O0lBSXZCLGtEQUErQjs7Ozs7SUFLL0IsNkNBQXdCOzs7OztJQUl4QiwyQ0FBeUI7Ozs7O0lBS3pCLDZDQUF3Qjs7Ozs7SUFNeEIsOENBQTJCOzs7OztJQUszQiw4Q0FBMkI7Ozs7O0lBSzNCLG9EQUF3Qzs7Ozs7SUFLeEMsd0NBQXFCOzs7OztJQUtyQiwrQ0FBNEI7Ozs7O0lBSzVCLDhDQUEwQjs7Ozs7SUFLMUIscUNBQStCOzs7Ozs7SUFLL0IsNENBQStCOztJQUcvQiwyQ0FBa0I7Ozs7O0lBSWxCLDZDQUF1Qjs7SUFFdkIsNkNBQXNCOztJQUV0Qiw0Q0FBdUI7Ozs7O0lBSXZCLDhDQUF1Qjs7SUFHdkIsd0NBQW9COztJQUNwQix1Q0FBbUI7O0lBQ25CLHNDQUFlOztJQUNmLHdDQUFvQjs7SUFDcEIsdUNBQW1COztJQUNuQix5Q0FBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3Nlc1xufSBmcm9tICcuL21vZGVscyc7XG5cblxuLyoqXG4gKiBGb3IgZGF0ZSByYW5nZSBwaWNrZXIgdGhlcmUgYXJlIGBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZ2Agd2hpY2ggaW5oZXJpdHMgYWxsIHByb3BlcnRpZXMsXG4gKiBleGNlcHQgYGRpc3BsYXlNb250aHNgLCBmb3IgcmFuZ2UgcGlja2VyIGl0IGRlZmF1bHQgdG8gYDJgXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb25maWcgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XG4gIC8qKiBzZXRzIHVzZSBhZGFwdGl2ZSBwb3NpdGlvbiAqL1xuICBhZGFwdGl2ZVBvc2l0aW9uID0gZmFsc2U7XG4gIC8qKiBzZXRzIHVzZSBVVEMgZGF0ZSB0aW1lIGZvcm1hdCAqL1xuICB1c2VVdGMgPSBmYWxzZTtcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xuICBpc0FuaW1hdGVkID0gZmFsc2U7XG4gIHZhbHVlPzogRGF0ZSB8IERhdGVbXTtcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZhdWx0IG1pbiBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBtaW5EYXRlPzogRGF0ZTtcbiAgLyoqXG4gICAqIERlZmF1bHQgbWF4IGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcbiAgICovXG4gIG1heERhdGU/OiBEYXRlO1xuICAvKipcbiAgICogRGVmYXVsdCBkYXRlIGN1c3RvbSBjbGFzc2VzIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXG4gICAqL1xuICBkYXRlQ3VzdG9tQ2xhc3NlczogRGF0ZXBpY2tlckRhdGVDdXN0b21DbGFzc2VzW107XG5cbiAgZGF5c0Rpc2FibGVkPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcbiAgICovXG4gIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW107XG4gIC8qKlxuICAgKiBNYWtlcyBkYXRlcyBmcm9tIG90aGVyIG1vbnRocyBhY3RpdmVcbiAgICovXG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcblxuIC8qKlxuICAgKiBTaG93cyAndG9kYXknIGJ1dHRvblxuICAgKi9cbiAgc2hvd1RvZGF5QnV0dG9uID0gZmFsc2U7XG4gIC8qKlxuICAgKiBQb3NpdGlvbmluZyBvZiAndG9kYXknIGJ1dHRvblxuICAgKi9cbiAgdG9kYXlQb3NpdGlvbiA9ICdjZW50ZXInO1xuXG4gICAgIC8qKlxuICAgKiBTaG93cyBjbGVhciBidXR0b25cbiAgICovXG4gIHNob3dDbGVhckJ1dHRvbiA9IGZhbHNlO1xuXG5cbiAgIC8qKlxuICAgKiBMYWJlbCBmb3IgJ3RvZGF5JyBidXR0b25cbiAgICovXG4gIHRvZGF5QnV0dG9uTGFiZWwgPSAnVG9kYXknO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgJ2NsZWFyJyBidXR0b25cbiAgICovXG4gIGNsZWFyQnV0dG9uTGFiZWwgPSAnQ2xlYXInO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgJ2N1c3RvbSByYW5nZScgYnV0dG9uXG4gICAqL1xuICBjdXN0b21SYW5nZUJ1dHRvbkxhYmVsID0gJ0N1c3RvbSBSYW5nZSc7XG5cbiAgLyoqXG4gICAqIEFsbG93cyBzZWxlY3QgZmlyc3QgZGF0ZSBvZiB0aGUgd2VlayBieSBjbGljayBvbiB3ZWVrIG51bWJlclxuICAgKi9cbiAgc2VsZWN0V2Vlaz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3dzIHByZXZpb3VzIGFuZCBjdXJyZW50IG1vbnRoLCBpbnN0ZWFkIG9mIGN1cnJlbnQgYW5kIG5leHQgKGRhdGVSYW5nZVBpY2tlciBvbmx5KVxuICAgKi9cbiAgc2hvd1ByZXZpb3VzTW9udGg/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBZGQgY2xhc3MgdG8gY3VycmVudCBkYXlcbiAgICovXG4gIGN1c3RvbVRvZGF5Q2xhc3M/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgbW9kZSBmb3IgYWxsIGRhdGUgcGlja2Vyc1xuICAgKi9cbiAgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xuXG4gIC8qKiBDU1MgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIGRhdGVwaWNrZXIgY29udGFpbmVyLFxuICAgKiB1c3VhbGx5IHVzZWQgdG8gc2V0IGNvbG9yIHRoZW1lXG4gICAqL1xuICBjb250YWluZXJDbGFzcyA9ICd0aGVtZS1ncmVlbic7XG5cbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcbiAgZGlzcGxheU1vbnRocyA9IDE7XG4gIC8qKlxuICAgKiBBbGxvd3MgdG8gaGlkZSB3ZWVrIG51bWJlcnMgaW4gZGF0ZXBpY2tlclxuICAgKi9cbiAgc2hvd1dlZWtOdW1iZXJzID0gdHJ1ZTtcblxuICBkYXRlSW5wdXRGb3JtYXQgPSAnTCc7XG4gIC8vIHJhbmdlIHBpY2tlclxuICByYW5nZVNlcGFyYXRvciA9ICcgLSAnO1xuICAvKipcbiAgICogRGF0ZSBmb3JtYXQgZm9yIGRhdGUgcmFuZ2UgaW5wdXQgZmllbGRcbiAgICovXG4gIHJhbmdlSW5wdXRGb3JtYXQgPSAnTCc7XG5cbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcbiAgbW9udGhUaXRsZSA9ICdNTU1NJztcbiAgeWVhclRpdGxlID0gJ1lZWVknO1xuICBkYXlMYWJlbCA9ICdEJztcbiAgbW9udGhMYWJlbCA9ICdNTU1NJztcbiAgeWVhckxhYmVsID0gJ1lZWVknO1xuICB3ZWVrTnVtYmVycyA9ICd3Jztcbn1cbiJdfQ==