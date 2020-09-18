/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDaysDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "dateCustomClasses", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDateCustomClasses(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.clearDate = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setToday = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype._stopPropagation = /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());
/**
 * @abstract
 */
export { BsDatepickerAbstractComponent };
if (false) {
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.containerClass;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.isOtherMonthsActive;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.showTodayBtn;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.todayPos;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.showClearBtn;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.todayBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.customRangeBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.clearBtnLbl;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype._effects;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype._customRangesFish;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.viewMode;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.daysCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.yearsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.options;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJiYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFtQkE7Ozs7SUFBQTtRQVlFLHNCQUFpQixHQUFvQixFQUFFLENBQUM7SUF3RDFDLENBQUM7SUF0REMsc0JBQUksa0RBQU87Ozs7O1FBQVgsVUFBWSxLQUFXO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQsc0JBQUksa0RBQU87Ozs7O1FBQVgsVUFBWSxLQUFXO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQUksdURBQVk7Ozs7O1FBQWhCLFVBQWlCLEtBQWU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsQ0FBQzs7O09BQUE7SUFDRCxzQkFBSSx3REFBYTs7Ozs7UUFBakIsVUFBa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscURBQVU7Ozs7O1FBQWQsVUFBZSxLQUFjO1lBQzNCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNERBQWlCOzs7OztRQUFyQixVQUFzQixLQUFvQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLENBQUM7OztPQUFBOzs7OztJQVFELG1EQUFXOzs7O0lBQVgsVUFBWSxLQUEyQixJQUFTLENBQUM7Ozs7O0lBRWpELGtEQUFVOzs7O0lBQVYsVUFBVyxLQUF3QixJQUFTLENBQUM7Ozs7O0lBRTdDLHVEQUFlOzs7O0lBQWYsVUFBZ0IsS0FBcUIsSUFBUyxDQUFDOzs7OztJQUUvQyx3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBb0IsSUFBUyxDQUFDOzs7OztJQUUvQyx5REFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBcUIsSUFBUyxDQUFDOzs7O0lBRWpELGlEQUFTOzs7SUFBVCxjQUFpQixDQUFDOzs7O0lBRWxCLGdEQUFROzs7SUFBUixjQUFrQixDQUFDOzs7OztJQUVuQix3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBcUIsSUFBUyxDQUFDOzs7OztJQUVoRCx3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsR0FBaUIsSUFBUyxDQUFDOzs7OztJQUU1QywwREFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBNEIsSUFBUyxDQUFDOzs7OztJQUV6RCx5REFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBNEIsSUFBUyxDQUFDO0lBRXhELHNDQUFzQzs7Ozs7O0lBQ3RDLHdEQUFnQjs7Ozs7SUFBaEIsVUFBaUIsS0FBVTtRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUNILG9DQUFDO0FBQUQsQ0FBQyxBQXBFRCxJQW9FQzs7Ozs7OztJQW5FQyx1REFBdUI7O0lBQ3ZCLDREQUE2Qjs7SUFFN0IscURBQXNCOztJQUN0QixpREFBaUI7O0lBQ2pCLHFEQUFxQjs7SUFDckIsb0RBQW9COztJQUNwQiwwREFBMEI7O0lBQzFCLG9EQUFvQjs7SUFFcEIsaURBQThCOztJQUM5QiwwREFBd0M7O0lBd0J4QyxpREFBMkM7O0lBQzNDLHFEQUFrRDs7SUFDbEQsdURBQXNEOztJQUN0RCxzREFBb0Q7O0lBQ3BELGdEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGRhdGVwaWNrZXIgY29udGFpbmVyIGNvbXBvbmVudFxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXMgfSBmcm9tICcuLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcbiAgQ2VsbEhvdmVyRXZlbnQsXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxuICBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXMsXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcbiAgRGF5Vmlld01vZGVsLFxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcbiAgV2Vla1ZpZXdNb2RlbCxcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxufSBmcm9tICcuLi9tb2RlbHMnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQge1xuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xuICBpc090aGVyTW9udGhzQWN0aXZlOiBib29sZWFuO1xuXG4gIHNob3dUb2RheUJ0bjogYm9vbGVhbjtcbiAgdG9kYXlQb3M6IHN0cmluZztcbiAgc2hvd0NsZWFyQnRuOmJvb2xlYW47XG4gIHRvZGF5QnRuTGJsOiBzdHJpbmc7XG4gIGN1c3RvbVJhbmdlQnRuTGJsOiBzdHJpbmc7XG4gIGNsZWFyQnRuTGJsOiBzdHJpbmc7XG5cbiAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHM7XG4gIF9jdXN0b21SYW5nZXNGaXNoOiBCc0N1c3RvbURhdGVzW10gPSBbXTtcblxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWluRGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRGF0ZSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWF4RGF0ZSh2YWx1ZSk7XG4gIH1cbiAgc2V0IGRheXNEaXNhYmxlZCh2YWx1ZTogbnVtYmVyW10pIHtcbiAgICB0aGlzLl9lZmZlY3RzLnNldERheXNEaXNhYmxlZCh2YWx1ZSk7XG4gIH1cbiAgc2V0IGRhdGVzRGlzYWJsZWQodmFsdWU6IERhdGVbXSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF0ZXNEaXNhYmxlZCh2YWx1ZSk7XG4gIH1cblxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGlzYWJsZWQodmFsdWUpO1xuICB9XG5cbiAgc2V0IGRhdGVDdXN0b21DbGFzc2VzKHZhbHVlOiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXSkge1xuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF0ZUN1c3RvbUNsYXNzZXModmFsdWUpO1xuICB9XG5cbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcblxuICBzZXRWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHt9XG5cbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5SG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICB3ZWVrSG92ZXJIYW5kbGVyKGV2ZW50OiBXZWVrVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIG1vbnRoSG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cblxuICBjbGVhckRhdGUoKTp2b2lke31cblxuICBzZXRUb2RheSgpOiB2b2lkIHt9XG5cbiAgeWVhckhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XG5cbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge31cblxuICBtb250aFNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cblxuICB5ZWFyU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXG4gIF9zdG9wUHJvcGFnYXRpb24oZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=